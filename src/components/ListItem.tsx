interface ListItemProps {
  src: string;
  title: string;
  alt: string | undefined;
  active: boolean;
}

const ListItem: React.FC<ListItemProps> = ({ src, title, alt, active }) => {
  const titleClass = `${active ? "text-secondary" : "text-inactive"} text-base`;
  return (
    <li className="flex gap-3 items-center hover:bg-slate-300 w-full p-2 rounded-lg cursor-pointer">
      <img src={src} alt={alt} />
      <p className={titleClass}>{title}</p>
    </li>
  );
};

export default ListItem;
