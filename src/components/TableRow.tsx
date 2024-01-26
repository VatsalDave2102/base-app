import { useState } from "react";
import Select from "./Select";
import Tags from "./Tags";
import { RowData } from "../feature/MainContent";

interface TableRowProps {
  rowData: RowData;
}

const TableRow: React.FC<TableRowProps> = ({ rowData }) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const tags = rowData["select tags"].split(",");

  return (
    <tr className="bg-tableRow border">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        {rowData.id}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm">
        <a href="www.google.com">{rowData.links}</a>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm ">{rowData.prefix}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <Select
          selectedValues={selectedValues}
          setSelectedValues={setSelectedValues}
          tags={tags}
        />
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <Tags
          selectedValues={selectedValues}
          setSelectedValues={setSelectedValues}
        />
      </td>
    </tr>
  );
};

export default TableRow;
