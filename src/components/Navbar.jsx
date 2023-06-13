import { useState } from 'react';
import { Link } from 'react-router-dom';
import { logo, menu, close } from '../assets';
import { styles } from '../styles';
import { navLinks } from '../constants';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className={`${styles.paddingX} w-full p-5 max-w-7xl mx-auto`}>
        <div className="w-full flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive('');
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="w-56 h-17" />
          </Link>

          <ul className="gap-4 hidden sm:flex">
            {navLinks.map((link) => {
              return (
                <li
                  key={link.id}
                  className={`${
                    active == link.id ? 'text-white' : 'text-secondary'
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
                  onClick={() => {
                    setActive(link.id);
                  }}
                >
                  <a href={`#${link.id}`}> {link.title} </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="sm:hidden w-full justify-end items-center">
          <div className="absolute top-8 right-8">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
              onClick={() => setToggle(!toggle)}
            />
          </div>

          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="flex gap-2 flex-col">
              {navLinks.map((link) => {
                return (
                  <li
                    key={link.id}
                    className={`${
                      active == link.id ? 'text-white' : 'text-secondary'
                    } hover:text-white text-[14px] font-medium cursor-pointer`}
                    onClick={() => {
                      setActive(link.id);
                    }}
                  >
                    <a href={`#${link.id}`}> {link.title} </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

//TODO: scroll handler for navbar background color change when scrolled and fix navbar on top when scrolled
