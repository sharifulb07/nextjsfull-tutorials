"use client"
import { Metadata } from "next";
import Link from "next/link";
import { useState } from "react";


import { usePathname } from "next/navigation";



const navLinks = [
  { name: "Login", href: "/login" },
  { name: "Register", href: "/register" },
  { name: "Forget Password", href: "/forget-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [input, setInput]=useState("");
  const pathName = usePathname();

  return (
    <div>
      <div>
        <input className="border-amber-700 border-2" type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
      </div>
      {navLinks.map((nav) => {
        const isActive=pathName==nav.href || (pathName.startsWith(nav.href) && pathName !=='/');

        return (
            <Link key={nav.name} className={isActive? "font-bold mr-4": "text-blue-500 mr-4"} href={nav.href}>{nav.name}</Link>
        )
      })}
    </div>
  );
}
