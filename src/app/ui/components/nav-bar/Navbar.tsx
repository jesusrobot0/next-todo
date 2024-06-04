import Link from "next/link";
import { UserActions, UserLinks } from "..";
export function Navbar() {
  return (
    <div className="py-6 flex justify-between items-center ">
      <Link href="/dashboard" className="text-2xl font-bold text-[dodgerblue]">
        Next Todo
      </Link>
      <div className="flex items-center gap-6">
        <UserLinks />
        <div>
          <UserActions />
        </div>
      </div>
    </div>
  );
}
