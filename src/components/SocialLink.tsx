interface SocialLinkProps {
  url: string;
  src: string;
}
const SocialLink: React.FC<SocialLinkProps> = ({ url, src }) => {
  return (
    <a href={url} target="blank">
      <img src={src} alt={url} />
    </a>
  );
};

export default SocialLink;
