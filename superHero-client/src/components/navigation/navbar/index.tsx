import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="w-full h-20 bg-emerald-800 sticky top-0">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <ul className="flex gap-x-6 text-white">
            <li>
              <Link
                href="/getSuperHeros"
                className={`hover:underline underline-offset-4 transition-all duration-150 ${
                  pathname === "/getSuperHeros" ? "underline" : ""
                }`}
              >
                <p>Super Heros</p>
              </Link>
            </li>
            <li>
              <Link
                href="/createSuperHero"
                className={`hover:underline underline-offset-4 transition-all duration-150 ${
                  pathname === "/createSuperHero" ? "underline" : ""
                }`}
              >
                <p>Create New Super Hero</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
