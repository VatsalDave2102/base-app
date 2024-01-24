import menulist from "../data/menulist";
import ListItem from "./ListItem";
const HamburgerContent = () => {
  return (
    <>
      <ol className="p-3 flex flex-col items-start gap-4">
        {menulist.map((item) => (
          <ListItem
            title={item.title}
            src={item.src}
            active={item.active}
            alt={item.alt}
          />
        ))}
      </ol>
    </>
  );
};

export default HamburgerContent;
