import Avatar from "./Avatar";
import { BrandIcon, BrandRoot } from "./Brand";
import HamburgerMenu from "./HamburgerMenu";
import { Title } from "./Title";

const Header = () => {
  return (
    <header className="w-full flex gap-3 items-center justify-between p-2">
      {/* Hamburger button for mobile view */}
      <HamburgerMenu />

      {/* Icon and brand */}
      <BrandRoot className="justify-self-start basis-3/6 md:basis-1/6">
        <BrandIcon
          src="/Subtract.svg"
          alt="Icon"
          className="w-[26px] h-[26px] md:w-10 md:h-10"
        />
        <Title title="Base" />
      </BrandRoot>

      {/* Heading */}
      <div className="heading hidden md:block md:basis-3/6">
        <Title title="Upload CSV" />
      </div>

      {/* Options */}
      <div className="options flex items-center justify-end gap-6  basis-2/6">
        {/* Notification */}
        <div className="notification">
          <img src="/Vector.svg" alt="Notification" />
        </div>

        {/* Profile */}
        <div className="profile">
          <Avatar src="/image 1.png" alt="Profile" className="rounded-full" />
        </div>
      </div>
    </header>
  );
};

export default Header;
