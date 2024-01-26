import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Spinner from "./Spinner";
import * as xlsx from "xlsx";
import { RowData } from "../feature/MainContent";

interface DropzoneProps {
  className: string;
  setIsUploaded: React.Dispatch<React.SetStateAction<boolean>>;
  setSheetData: React.Dispatch<React.SetStateAction<RowData[] | null>>;
}
const DropZone: React.FC<DropzoneProps> = ({
  className,
  setIsUploaded,
  setSheetData,
}) => {
  const [file, setFile] = useState<File | null>();
  const [loading, setLoading] = useState(false);

  // Handler for dropping files
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // if there is a file dropped, we set the file state
    if (acceptedFiles.length) {
      setFile(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "text/csv": [".csv"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [],
      "application/vnd.ms-excel": [],
    },
  });

  // handler to remove file
  const removeFile = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setFile(null);
  };

  // handlr to upload file
  const handleUpload = async () => {
    setLoading(true);
    setIsUploaded(false);
    try {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file as Blob);
      reader.onload = (e) => {
        const excelFile = e.target?.result;
        if (excelFile !== null) {
          const workbook = xlsx.read(excelFile, { type: "buffer" });
          const worksheeName = workbook.SheetNames[0];
          const workSheet = workbook.Sheets[worksheeName];
          const data = xlsx.utils.sheet_to_json(workSheet);
          setSheetData(data as RowData[]);
          setIsUploaded(true);
        }
      };
    } catch (error) {
      setIsUploaded(false);
      console.log(error);
    } finally {
      setLoading(false);
      setFile(undefined);
    }
  };

  // content to show if file is dropped or not
  const content = file ? (
    <>
      <p className="text-sm text-arrow text-center ">{file.name}</p>
      <button className="text-red-500" onClick={removeFile}>
        Remove
      </button>
    </>
  ) : (
    <p className="text-sm text-arrow text-center ">
      Drop your Excel sheet here or{" "}
      <span className="text-secondary">browse</span>.
    </p>
  );

  return (
    // Drop zone
    <div className="drop_zone rounded-xl bg-white max-w-[550px] mx-auto p-4">
      <div {...getRootProps({ className: className })}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the sheet here ...</p>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <img
              src="/Microsoft_Office_Excel_(2019–present) 1.svg"
              alt="Excel icon"
            />
            {content}
          </div>
        )}
      </div>
      {/* Upload button */}
      <button
        className="flex bg-secondary p-3 w-full rounded-xl max-w-[500px] mx-auto justify-center gap-2 hover:bg-opacity-70 disabled:bg-opacity-50"
        onClick={handleUpload}
        disabled={!file}
      >
        {loading ? (
          <Spinner />
        ) : (
          <>
            <img src="/Upload.png" alt="Upload icon" />
            <p className="text-white">Upload</p>
          </>
        )}
      </button>
    </div>
  );
};

export default DropZone;
