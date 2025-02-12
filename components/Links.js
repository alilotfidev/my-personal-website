import MyLink from "./ui/MyLink";
export default function Links() {
  const links = [
    {
      label: "Linkedin",
      href: "https://www.linkedin.com/in/alilotfidev/",
      username: "@alilotfidev",
    },
    {
      label: "Codepen",
      href: "https://codepen.io/alilotfidev",
      username: "@alilotfidev",
    },
    {
      label: "Github",
      href: "https://github.com/alilotfidev",
      username: "@alilotfidev",
    },
    {
      label: "Instagram",
      href: "https://Instagram.com/alilotfi.dev",
      username: "@alilotfi.dev",
    },
    {
      label: "Email",
      href: "mailto:lotfi26.ali@gmail.com",
      username: "drop me an email",
    },
  ];
  return (
    <div className="Links">
      <h3>Links</h3>
      <div className="mt-6 flex flex-col gap-4">
        {links.map((link, index) => (
          <div className="link flex justify-between text-sm" key={index}>
            <p className="link-title secondary-text">{link.label}</p>
            <MyLink href={link.href}>{link.username}</MyLink>
          </div>
        ))}
      </div>
    </div>
  );
}
