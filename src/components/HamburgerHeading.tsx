import { BrandIcon, BrandRoot } from "./Brand";
import { Title } from "./Title";

interface HamburgerHeadingProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HamburgerHeading: React.FC<HamburgerHeadingProps> = ({ setOpen }) => {
  return (
    <div className="flex justify-between mb-4">
      <BrandRoot>
        <BrandIcon
          src="/Subtract.svg"
          alt="Icon"
          className="w-[26px] h-[26px]"
        />
        <Title title="Base" />
      </BrandRoot>

      <button
        onClick={() => {
          setOpen(false);
        }}
      >
        <img src="/Cross_icon.svg" alt="Close menu" />
      </button>
    </div>
  );
};

export default HamburgerHeading;
