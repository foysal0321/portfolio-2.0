import { Link } from "react-scroll";
import logo from "../../../assets/images/icon-working.png";


const menuItems = ["About", "Projects", "Blog", "Contact"];

function HeaderNav() {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer" className="">
          <div className="avatar ">
            <div className=" w-16 h-16 rounded-full cursor-pointer fixed bg-[#26284d] z-20">
              <img className="" src={logo} />
            </div>
          </div>
        </label>
      </div>
      <div className="drawer-side z-10">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu-sm menu p-6 w-72 md:w-96 min-h-full bg-slate-50 text-base-content">
          <div className="mt-48">
            {menuItems.map((menu, inx) => (
              <li key={inx} className="p-6">
                <Link
                  activeClass="active"
                  to={menu}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="text-semibold text-lg"
                >
                  {menu}
                </Link>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
}

export default HeaderNav;
