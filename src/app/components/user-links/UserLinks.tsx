"use client";

import { useState } from "react";
import { LinkItem } from "..";
import { Menu } from "lucide-react";
import clsx from "clsx";

const menuLinks = [
  {
    path: "/dashboard",
    title: "Dashboard",
  },
  {
    path: "/dashboard/rest",
    title: "Rest",
  },
  {
    path: "/dashboard/actions",
    title: "ServerActions",
  },
  {
    path: "/dashboard/cookies",
    title: "Cookies",
  },
];

export function UserLinks() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative">
      <ul
        className={clsx(
          "md:w-auto md:static md:flex md:flex-row md:border-none  gap-2",
          isOpen
            ? "w-[200px] absolute left-[-100px] top-[50px] flex flex-col border-[#dadce0] border rounded-[1rem] bg-white"
            : "hidden"
        )}
      >
        {menuLinks.map((link) => (
          <LinkItem key={link.path} link={link} />
        ))}
      </ul>
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <Menu />
      </button>
    </nav>
  );
}
