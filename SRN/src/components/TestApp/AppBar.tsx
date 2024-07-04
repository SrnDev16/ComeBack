import { useState } from "react";
import { CgMenu } from "react-icons/cg";

const AppBar = () => {
  const [menu, setMenu] = useState<boolean>(true);

  const toggleMenu = () => setMenu(!menu);
  return (
    <div>
      <div className="relative w-full h-10 bg-blue-300 px-3 flex items-center justify-between">
        <div>Logo</div>
        <div>
          <button onClick={toggleMenu}>
            <CgMenu />
          </button>
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
        box
      </div>
      <div>test1</div>
    </div>
  );
};

export default AppBar;
