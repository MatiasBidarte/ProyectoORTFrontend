import Link from "next/link";

const links = [
  {
    href: "/",
    name: "Inicio",
  },
  {
    href: "/registro",
    name: "Registro",
  },
  {
    href: "/login",
    name: "Login",
  },
];

export default function NavLinks() {
  return (
    <div className="flex items-center justify-center space-x-4 p-4 bg-gray-100 dark:bg-gray-800 gap-4">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white "
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
