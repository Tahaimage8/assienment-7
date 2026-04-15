"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Clock3, BarChart3, Menu } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Timeline", href: "/timeline", icon: Clock3 },
    { name: "Stats", href: "/stats", icon: BarChart3 },
  ];

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 md:px-6">


      <div className="navbar-start">
        <Link href="/" className="text-xl md:text-2xl font-semibold text-[#1d2a39]">
          Keen<span className="text-[#3ba884]">Keeper</span>
        </Link>
      </div>

      <div className="navbar-end lg:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost">
            <Menu size={20} />
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-2 ${
                      isActive ? "text-[#1f5b43] font-semibold" : ""
                    }`}
                  >
                    <Icon size={16} />
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md transition ${
                    isActive
                      ? "bg-[#1f5b43] text-white"
                      : "hover:bg-gray-100 text-[#5b6470]"
                  }`}
                >
                  <Icon size={16} />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

    </div>
  );
};

export default Navbar;