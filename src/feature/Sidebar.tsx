import menuList from "../data/menulist";
import { BrandIcon, BrandRoot } from "../components/Brand";
import ListItem from "../components/ListItem";
import { Title } from "../components/Title";

const Sidebar = () => {
  return (
    <div className="hidden md:flex md:flex-col items-center gap-7 w-[300px] bg-white p-6">
      <BrandRoot>
        <BrandIcon
          src="/Subtract.svg"
          alt="Icon"
          className="w-[26px] h-[26px] md:w-10 md:h-10"
        />
        <Title title="Base" />
      </BrandRoot>

      <ol className="flex flex-col items-start gap-4">
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
