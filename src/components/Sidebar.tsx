import menuList from "../data/menulist";
import ListItem from "./ListItem";

const Sidebar = () => {
  return (
    <div className="hidden md:block basis-1/6">
      <ol className="p-3 flex flex-col items-start gap-4">
        {menuList.map((item) => (
          <ListItem
            title={item.title}
            src={item.src}
            active={item.active}
            alt={item.alt}
            key={item.title}
          />
        ))}
      </ol>
    </div>
  );
};

export default Sidebar;
