import { RowData } from "../feature/MainContent";
import TableRow from "./TableRow";
interface TableProps {
  sheetData: RowData[];
}
const Table: React.FC<TableProps> = ({ sheetData }) => {
  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-4 min-w-full inline-block align-middle bg-tablebg rounded-xl">
          <div className=" overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200 border-separate border-spacing-y-4">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-1 text-start text-sm font-bold text-popover"
                  >
                    Sl No.
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-1 text-start text-sm font-bold text-popover"
                  >
                    Links
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-1 text-start text-sm font-bold text-popover"
                  >
                    Prefix
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-1 text-start text-sm font-bold"
                  >
                    Add Tags
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-1 text-start text-sm font-bold text-popover"
                  >
                    Selected Tags
                  </th>
                </tr>
              </thead>
              <tbody>
                {sheetData.map((rowData) => (
                  <TableRow key={rowData.__rowNum__} rowData={rowData} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
