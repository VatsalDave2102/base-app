import React from "react";
interface SelectOptionsProps {
  selectedValues: string[];
  setSelectedValues: React.Dispatch<React.SetStateAction<string[]>>;
  value: string;
}

// Option item in select component
const SelectOption: React.FC<SelectOptionsProps> = ({
  selectedValues,
  setSelectedValues,
  value,
}) => {
  const classes = selectedValues.includes(value)
    ? "bg-tablebg option"
    : "option";
  const handleClick = () => {
    if (selectedValues.includes(value)) {
      const filteredValues = selectedValues.filter((item) => item !== value);
      setSelectedValues(filteredValues);
    } else {
      setSelectedValues((previousValues) => [...previousValues, value]);
    }
  };
  return (
    <li className={classes} onClick={handleClick}>
      {value}
    </li>
  );
};

export default SelectOption;
