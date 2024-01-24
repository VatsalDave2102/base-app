// Title
interface TitleProps extends React.ComponentProps<"h1"> {
  title: string;
}
export const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <h1 className="font-nunito text-lg md:text-2xl font-semibold">{title}</h1>
  );
};
