interface BrandRootProps {
  children: React.ReactNode;
  className?: string | undefined;
}

export const BrandRoot: React.FC<BrandRootProps> = ({
  children,
  className,
}) => {
  const classes = `icon_and_brand flex items-center gap-3 ${className}`;
  return <div className={classes}>{children}</div>;
};

// Icon
export const BrandIcon: React.FC<React.ComponentProps<"img">> = ({
  src,
  alt,
  className,
}) => {
  return <img src={src} alt={alt} className={className} />;
};
