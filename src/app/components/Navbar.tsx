//nextjs is fullstack frame-work.so few many work are happen in server side.but it doesnot allow direct use of 
//react hook(that support client side rendering). so for "client side rendering" in next we use 'use client'
'use client'

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn";
//inplace of anchor tag we use "Link".
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <Link href={"/"}>
        <MenuItem 
        setActive={setActive} active={active} item="Home">
          test
        </MenuItem>
        </Link>

        <MenuItem 
        setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/courses">All Courses </HoveredLink>
          <HoveredLink href="/courses">Basic Music Theory </HoveredLink>
          <HoveredLink href="/courses">Advance Composition</HoveredLink>
          <HoveredLink href="/courses">Song-Writting</HoveredLink>
          <HoveredLink href="/courses">Music-Production</HoveredLink>
          </div>
        </MenuItem>
        
        <Link href={"/contract"}>
        <MenuItem 
        setActive={setActive} active={active} item="Contract us">
          test
        </MenuItem>
        </Link>
      </Menu>
    </div>
  )
}

export default Navbar