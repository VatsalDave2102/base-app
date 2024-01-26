import { useState } from "react";
import SelectOption from "./SelectOption";
interface SelectProps {
  selectedValues: string[];
  setSelectedValues: React.Dispatch<React.SetStateAction<string[]>>;
  tags: string[];
}

const Select: React.FC<SelectProps> = ({
  selectedValues,
  setSelectedValues,
  tags,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Select" onClick={() => setIsOpen(!isOpen)}>
      <div className="child flex justify-between">
        <p>Select tag</p>
        <img
          src="/Controls.svg"
          alt="Arrow"
          className={isOpen ? "rotate-180 transition" : "rotate-0 transition"}
        />
      </div>
      {isOpen && (
        <div className="absolute bg-white z-20 w-36 h-48  -ml-1 mt-2 p-2 border rounded-lg overflow-y-auto">
          <ul className="flex flex-col gap-3">
            {tags.map((tag) => (
              <SelectOption
                value={tag}
                key={tag}
                setSelectedValues={setSelectedValues}
                selectedValues={selectedValues}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Select;
