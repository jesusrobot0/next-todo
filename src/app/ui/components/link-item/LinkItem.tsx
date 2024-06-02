"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

interface Props {
  link: { path: string; title: string };
}

export function LinkItem({ link: { path, title } }: Props) {
  const currentPath = usePathname();
  const isCurrentPage = currentPath === path;

  return (
    <Link
      href={path}
      className={clsx(
        "py-4 px-6 rounded-2xl text-[#818181] hover:text-black",
        isCurrentPage && "bg-white text-black"
      )}
    >
      {title}
    </Link>
  );
}
