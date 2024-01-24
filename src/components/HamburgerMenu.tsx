import { useState } from "react";
import HamburgerHeading from "./HamburgerHeading";
import HamburgerContent from "./HamburgerContent";

const HamburgerMenu = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <button
        onClick={() => {
          setOpen(true);
        }}
        className="w-4 h-3 md:hidden"
      >
        <img src="/burger-regular.svg" alt="Burger menu" className="w-4 h-3" />
      </button>
      {/* drawer */}
      {open && (
        <div className="h-screen w-full max-w-[300px] absolute top-0 left-0 rounded-r-3xl p-5 bg-white border-r-slate-200 border-r-2 transition">
          <HamburgerHeading setOpen={setOpen} />
          <HamburgerContent />
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
