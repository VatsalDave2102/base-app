import { useState } from "react";
import DropZone from "../components/DropZone";

const MainContent = () => {
  const [isUploaded, setIsUploaded] = useState(false);
  return (
    <div className="w-full p-4 main_content">
      <h3 className="font-semibold md:hidden mb-3">Upload CSV</h3>
      <DropZone
        className="p-16 md:p-28 mb-5 border border-neutral-500 border-dotted cursor-pointer max-w-[500px] mx-auto rounded-2xl"
        setIsUploaded={setIsUploaded}
      />
      {/* Uploads */}
      {/* <h3 className="md:text-2xl font-semibold mb-3">Uploads</h3> */}
    </div>
  );
};

export default MainContent;
