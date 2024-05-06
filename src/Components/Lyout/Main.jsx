import SideberHome from "./Home";
import SideberProfile from "./Profile";

function Main() {
  return (
    <div className="max-w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
      <div className=" bg-[#26284d]">
        <SideberProfile />
      </div>
      <div className="min-w-fit">
        <SideberHome />
      </div>
    </div>
  );
}

export default Main;
