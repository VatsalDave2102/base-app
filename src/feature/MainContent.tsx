import { useState } from "react";
import DropZone from "../components/DropZone";
import Table from "../components/Table";

export interface RowData {
  id: number;
  links: string;
  prefix: string;
  "select tags": string;
  __rowNum__: number;
}

const MainContent = () => {
  const [sheetData, setSheetData] = useState<RowData[] | null>(null);
  const [isUploaded, setIsUploaded] = useState(false);

  return (
    <div className="w-full p-4 main_content">
      <h3 className="font-semibold md:hidden mb-3">Upload CSV</h3>
      {/* Drop zone */}
      <DropZone
        className="p-16 md:p-28 mb-5 border border-neutral-500 border-dotted cursor-pointer max-w-[500px] mx-auto rounded-2xl"
        setIsUploaded={setIsUploaded}
        setSheetData={setSheetData}
      />
      {/* Uploads */}
      {isUploaded && (
        <>
          <h3 className="md:text-2xl font-semibold my-4">Uploads</h3>
          <Table sheetData={sheetData as RowData[]} />
        </>
      )}
    </div>
  );
};

export default MainContent;
