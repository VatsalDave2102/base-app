interface TagsProps {
  selectedValues: string[];
  setSelectedValues: React.Dispatch<React.SetStateAction<string[]>>;
}

const Tags: React.FC<TagsProps> = ({ selectedValues, setSelectedValues }) => {
  const handleClick = (value: string) => {
    const filteredValues = selectedValues.filter((item) => item !== value);
    setSelectedValues(filteredValues);
  };
  return (
    <div className="flex gap-1 overflow-x-auto md:max-w-96 lg:max-w-[500px]">
      {selectedValues.map((value) => (
        <div
          key={value}
          className="bg-secondary text-white rounded px-2 py-1 text-sm flex items-center justify-between gap-1"
        >
          <p className="uppercase">{value}</p>
          <button
            className="cursor-pointer hover:bg-[#4540de] bg-secondary rounded-lg w-6 h-6"
            onClick={() => handleClick(value)}
          >
            <img src="/Cross_icon.svg" alt="Cross icon" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Tags;
