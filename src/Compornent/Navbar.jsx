"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Clock3, BarChart3 } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Timeline", href: "/timeline", icon: Clock3 },
    { name: "Stats", href: "/stats", icon: BarChart3 },
  ];

  return (
    <div className="w-full">



      <div className="px-6 py-4 flex items-center justify-between shadow-sm">
        

        <h1 className="text-[26px] font-semibold text-[#1d2a39]">
          KeenKeeper
        </h1>


        <div className="flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition
                  ${
                    isActive
                      ? "bg-[#1f5b43] text-white shadow-sm"
                      : "text-[#5b6470] hover:text-[#1d2a39]"
                  }
                `}
              >
                <Icon size={16} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;