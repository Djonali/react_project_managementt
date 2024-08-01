"use client";
import React from "react";
import Link from "next/link";
import { FaBugs } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import classNames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Issues", href: "/issues" },
  ];

//   className= {`${link.href === currentPath ? "text-zinc-900" : "text-zinc-500"} hover:text-zinc-800 transition-colors`}
//   >
  return (
    <nav className="flex space-x-12 border-b mb-5 px-5 h-14 align-middle text-center">
      <Link href="/">
        <FaBugs className="text-red-700 text-2xl"></FaBugs>
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={classNames({
                'text-zinc-900' : link.href === currentPath,
                'text-zinc-500' : link.href !== currentPath, 
                'hover:text-zinc-800 transition-colors': true
            })}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
