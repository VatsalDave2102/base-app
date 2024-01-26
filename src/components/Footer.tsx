import SocialLink from "./SocialLink";

// Desktop footer with social links
const Footer = () => {
  return (
    <footer className="social_links flex justify-evenly items-center">
      <SocialLink src="/Vector.png" url="https://www.github.com" />
      <SocialLink src="/twitter.png" url="https://www.twitter.com" />
      <SocialLink
        src="/carbon_logo-linkedin.png"
        url="https://www.linkedin.com"
      />
      <SocialLink
        src="/carbon_logo-discord.png"
        url="https://www.discord.com"
      />
    </footer>
  );
};

export default Footer;
