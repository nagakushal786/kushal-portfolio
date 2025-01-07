import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaLink } from "react-icons/fa";

const socials = [
  { icon: <FaGithub/>, path: "https://github.com/nagakushal786" },
  { icon: <FaLinkedin/>, path: "https://www.linkedin.com/in/naga-kushal-vankadara-0559b1248/" },
  { icon: <FaInstagram/>, path: "https://www.instagram.com/kushal_vnk786/?next=%2F" }
]

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return <Link key={index} href={social.path} className={iconStyles}>{social.icon}</Link>
      })}
    </div>
  )
}

export default Socials
