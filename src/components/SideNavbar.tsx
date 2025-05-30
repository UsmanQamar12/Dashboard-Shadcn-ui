"use client";
import React, { useState } from 'react';
import { Nav } from './ui/nav';
import {
  ChevronRight,
  LayoutDashboard,
  Settings,
  ShoppingCart,
  UserRound,
} from "lucide-react";
import { Button } from './ui/button';import {
  useWindowWidth,
} from '@react-hook/window-size'

function SideNavbar() {
  const [ isCollapsed, setIsCollapsed] = useState(false);
    const onlyWidth = useWindowWidth();
    const mobileWidth = onlyWidth  < 768 ; 


  function toggleSidebar (){
    setIsCollapsed(!isCollapsed);

  }
  return (
    <div className='relative min-w-[88px] border-r px-3 pb-10 pt-24'>
      <div className='absolute right-[-15px] top-7'>
      <Button onClick={toggleSidebar} variant="secondary" className='rounded-full p-2'>
        <ChevronRight/>
      </Button>
    </div>
      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "/",
            icon: LayoutDashboard,
            variant: "default",
          },
          {
            title: "Users",
            href: "/users", 
            icon: UserRound,
            variant: "ghost",
          },
          {
            title: "Orders",
            href: "/orders", 
            icon: ShoppingCart,
            variant: "ghost",
          },
          {
            title: "Settings",
            href: "/settings",
            icon: Settings,
            variant: "ghost",
          },
        ]}
      />
    </div>
  );
}

export default SideNavbar;