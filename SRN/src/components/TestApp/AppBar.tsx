import { useState } from "react";
import { CgMenu } from "react-icons/cg";
import { FaRegWindowClose } from "react-icons/fa";

const AppBar = () => {
  const [menu, setMenu] = useState<boolean>(true);

  const toggleMenu = () => setMenu(!menu);
  return (
      <div>
        <div className="relative w-full h-10 bg-blue-300 px-3 flex items-center justify-between">
          <div>Logo</div>
          <div>
            <button onClick={toggleMenu} className="md:hidden">
             {menu ? <CgMenu /> : <FaRegWindowClose />}
            </button>
            <div className="hidden md:block">
              <ul className="flex">
                <li className="mr-5">
                  <a href="#">About</a>
                </li>
                <li className="mr-5">
                  <a href="#">About</a>
                </li>
                <li className="mr-5">
                  <a href="#">About</a>
                </li>
                <li className="mr-5">
                  <a href="#">About</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <button className="ease-in duration-300 bg-red-500 hover:translate-x-2">
          test
        </button>
        <div
          className={`${
            menu ? "hidden -z-10" : "block absolute top-10 z-10"
          } h-60 w-full bg-blue-300`}
        >
          <ul className="flex flex-col justify-evenly items-center h-full">
            <li className="mr-5">
              <a href="#" onClick={toggleMenu}>About</a>
            </li>
            <li className="mr-5">
              <a href="#" onClick={toggleMenu}>About</a>
            </li>
            <li className="mr-5">
              <a href="#" onClick={toggleMenu}>About</a>
            </li>
            <li className="mr-5">
              <a href="#" onClick={toggleMenu}>About</a>
            </li>
          </ul>
        </div>
        <div>test1</div>
      </div>
  );
};

export default AppBar;
