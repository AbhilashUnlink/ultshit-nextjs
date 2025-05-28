import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const linkedInHref = "https://www.linkedin.com/in/webdev-abhilash-sharma/";
const twitterHref = "https://twitter.com/abhilashwebdev";
const githubHref = "https://github.com/abhilashsharma1998";
export const SOCIAL_LINKS = [
  {
    href: linkedInHref,
    icon: FiLinkedin,
    label: "LinkedIn",
  },
  {
    href: twitterHref,
    icon: FiTwitter,
    label: "Twitter",
  },
  { href: githubHref, icon: FiGithub, label: "GitHub" },
];
