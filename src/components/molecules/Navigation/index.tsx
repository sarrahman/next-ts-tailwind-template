import { useRouter } from "next/router";
import { NavLink } from "../../atoms";

export default function Navigation() {
  const currentUrl = useRouter().pathname;

  const navigation = [
    {
      href: "/",
      title: "Home",
      active: currentUrl === "/",
    },
    {
      href: "/about",
      title: "About",
      active: currentUrl === "/about",
    },
    {
      href: "/contact",
      title: "Contact",
      active: currentUrl === "/contact",
    },
  ];

  return (
    <header className="p-5 shadow-md mb-10">
      <nav className="ml-5 flex">
        {navigation.map((item, index) => {
          return (
            <NavLink
              key={index}
              href={item.href}
              title={item.title}
              active={item.active}
            />
          );
        })}
      </nav>
    </header>
  );
}
