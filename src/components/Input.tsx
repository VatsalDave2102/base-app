interface InputProps {
  label: string;
  type: string;
  value: string;
  fieldHandler: React.Dispatch<React.SetStateAction<string>>;
}

// Custom input field
const Input: React.FC<InputProps> = ({ label, type, value, fieldHandler }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="email" className="font-lato">
        {label}
      </label>
      <input
        type={type}
        id={type}
        name={type}
        className="bg-[#f5f5f5] px-2 py-2 rounded-lg outline-none focus:ring-1 font-lato"
        onChange={(e) => fieldHandler(e.target.value)}
        value={value}
      />
    </div>
  );
};

export default Input;
