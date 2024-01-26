import SocialLink from "./SocialLink";

// Mobile footer with social links
const MobileFooter = () => {
  return (
    <footer className="social_links flex justify-center gap-4 items-center">
      <SocialLink src="/github-mobile.png" url="https://www.github.com" />
      <SocialLink src="/twitter-mobile.png" url="https://www.twitter.com" />
      <SocialLink src="/linkedin-mobile.png" url="https://www.linkedin.com" />
      <SocialLink src="/discord-mobile.png" url="https://www.discord.com" />
    </footer>
  );
};

export default MobileFooter;
