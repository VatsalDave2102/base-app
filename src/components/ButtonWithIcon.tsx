interface ButtonWithIconProps {
  src: string;
  alt: string;
  text: string;
}
// Button with an image and text
const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({ src, alt, text }) => {
  return (
    <button className="flex bg-white px-4 py-2 items-center gap-2 rounded-lg hover:bg-slate-200">
      <img src={src} alt={alt} />
      <p className="font-montserrat text-xs text-[#858585]">{text}</p>
    </button>
  );
};

export default ButtonWithIcon;
