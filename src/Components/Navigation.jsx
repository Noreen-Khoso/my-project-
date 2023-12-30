import React, { useState } from 'react';
import { FcMenu } from 'react-icons/fc';

const Menu = [
  {
    id: 1,
    name: 'Home',
    link: '/#',
  },
  {
    id: 2,
    name: 'About',
    link: '/#About',
  },
  {
    id: 3,
    name: 'Services',
    link: '/#Service',
  },
  {
    id: 4,
    name: 'Review',
    link: '/#Review',
  },
];

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="fixed z-50 w-full flex justify-between items-center py-5 px-5">
        <h1 className="text-white font-bold text-xl md:text-3xl uppercase ml-2 z-20 ">
          Dreamy <span className=" ">Flower</span>
        </h1>

        <div className="sm:hidden">
          <button onClick={toggleMenu} className="py-2 px-4 text-white hover:text-black bg-transparent border-[1px] rounded-3xl border-gray-900 " >
            <FcMenu size={24} className='text-black'/>
          </button>
        </div>

        <ul className="hidden sm:flex sm:items-center sm:gap-4 sm:text-lg sm:text-white sm:font-semibold">
          {Menu.map((menu) => (
            <li key={menu.id}>
              <a
                href={menu.link}
                className="inline-block py-4 px-4 hover:text-green-400 duration-200"
              >
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
        <button className="hidden md:flex flex-nowrap text-lg md:text-xl text-black bg-transparent border-[1px] " >
            Contact
          </button>

        {/* Mobile Menu */}
        <div className={`fixed top-0 right-0 h-full bg-black w-2/3 flex flex-col p-5 ${showMenu ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-700 z-50`}>
          <div className='flex justify-end'>
          <button onClick={toggleMenu} className="text-white bg-transparent hover:text-white px-4 py-1">
            <FcMenu size={24}/>
          </button>
          </div>
          <ul className="text-white font-semibold text-center pt-16">
            {Menu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.link}
                  className="block py-2 px-4 hover:bg-gray-700 transition duration-200"
                  onClick={toggleMenu}
                >
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </div>        
      </div>
    </>
  );
};

export default Navigation;
