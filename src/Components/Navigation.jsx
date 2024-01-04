import React, { useState } from 'react';
import { FcMenu } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Menu = [
  {
    id: 1,
    name: 'Home',
    link: '/',
  },
  {
    id: 2,
    name: 'About',
    link: '/About',
  },
  {
    id: 3,
    name: 'Services',
    link: '/Service',
  },
  {
    id: 4,
    name: 'Review',
    link: '/Review',
  },
];

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="fixed z-20 w-full flex justify-between items-center  px-10 bg-black">
        <h1 className=" text-lime-600 font-bold text-xl md:text-3xl uppercase ml-2 z-20 ">
          Dreamy <span className=" text-pink-500 ">Flower</span>
        </h1>

        <div className="sm:hidden">
          <button onClick={toggleMenu} className="py-2 px-4 text-white hover:text-black bg-transparent border-[1px] rounded-3xl border-gray-900 " >
            <FcMenu size={24} className='text-black'/>
          </button>
        </div>

        <ul className="hidden sm:flex sm:items-center sm:gap-4 sm:text-lg sm:text-slate-200 sm:font-semibold">
          {Menu.map((menu) => (
            <li key={menu.id}>
              <Link
                to={menu.link}
                className="inline-block py-4 px-4 hover:text-pink-600 hover:border-b-2 border-pink-600 duration-200"
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
        <button className="hidden md:flex flex-nowrap text-lg md:text-xl  border-[1px] hover:bg-slate-200 " >
            login
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
                <Link
                  to={menu.link}
                  className="block py-2 px-4 hover:bg-gray-700 transition duration-200"
                  onClick={toggleMenu}
                >
                  {menu.name}
                </Link>
              </li>
            ))}
             <button className="  text-lg md:text-xl  border-[1px] " >
            login
          </button>

          </ul>
          

        </div>        
      </div>
    </>
  );
};

export default Navigation;
