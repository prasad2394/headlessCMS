'use client'
// components/Header.tsx
import React, { useCallback, useEffect, useState } from 'react';
import { fetchWebMenu } from '../../../utils/api';
import { Menu } from '../../../utils/types';
import Link from 'next/link';

const Header = () => {
  const [menu, setMenu] = useState<Menu[]>([]);

  const fMenu = useCallback(async () => {
      try {
        const response = await fetchWebMenu();
        //console.log(response)
        setMenu(response??[]);
      } catch (error) {
        console.error('Error fetching Menu:', error);
      }
      
  }, []);

  useEffect(() => {
    fMenu();
  }, [fMenu]);

  return (
    <header className="bg-transparent z-[3] fixed top-0 left-0 w-full py-4">
      <nav className="container px-12 max-w-full flex items-center justify-between">
        <div className="text-white text-3xl">
          <Link href="/">WP Developer Pune</Link>
        </div>
        <ul className="flex space-x-4">
          {menu.map((menuItem, index) => (
            <Link key={index} className="text-white" href={menuItem.href}>
              {menuItem.name}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
