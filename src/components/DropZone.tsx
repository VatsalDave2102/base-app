import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Spinner from "./Spinner";
interface DropzoneProps {
  className: string;
  setIsUploaded: React.Dispatch<React.SetStateAction<boolean>>;
}
const DropZone: React.FC<DropzoneProps> = ({ className, setIsUploaded }) => {
  const [file, setFile] = useState<File>();
  const [loading, setLoading] = useState(false);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
    if (acceptedFiles.length) {
      setFile(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      ".csv": [],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [],
      "application/vnd.ms-excel": [],
    },
  });

  const removeFile = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setFile(undefined);
  };

  const handleUpload = () => {
    if (!file) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsUploaded(true);
      setFile(undefined);
    }, 2000);
  };

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
      <button
        className="flex bg-secondary p-3 w-full rounded-xl max-w-[500px] mx-auto justify-center gap-2 hover:bg-opacity-50 disabled:bg-opacity-50"
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
