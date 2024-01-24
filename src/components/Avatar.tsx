const Avatar: React.FC<React.ComponentProps<"img">> = ({
  className,
  src,
  alt,
  ...props
}) => {
  return <img src={src} alt={alt} className={className} {...props} />;
};

export default Avatar;
