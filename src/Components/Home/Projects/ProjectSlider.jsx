/* eslint-disable react/jsx-no-target-blank */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { projectsData } from "./ProjectsData";


function ProjectSlider() {
  return (
    <div className=" ">
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper w-[330px] md:w-[750px] flex flex-wrap"
      >
        {projectsData.map((data, inx) => (
          <SwiperSlide key={inx}>
            <div className="hero py-10 ">
              <div className="hero-content flex-col lg:flex-row text-black"> 
                    <img src={data.image} className="w-[330px] h-[420px]" />            
                <div>
                  <a href={data.liveLink} target="_blank">
                    <h1 className="text-xl font-bold m-2 hover:text-slate-500">
                      {data.name}
                    </h1>
                  </a>
                  <h5 className="text-[17px] m-2 text-wrap mt-8 text-zinc-950">
                    {data.title}
                  </h5>
                  <p className="py-6 text-sm m-2 text-gray-500">
                    {data.description1}, <br /> <br /> {data.description2}
                  </p>
                  <p className="py-6 text-sm m-2 text-slate-900">
                  Used Technologies: <span className="text-gray-500">{data.technology}</span>.
                  </p>
                  
                  <div className="flex flex-wrap lg:mt-8 mt-1 md:p-1">
                    <a href={data.liveLink} target="_blank">
                      <button className="btn btn-xs btn-outline m-2">
                        Live site
                      </button>
                    </a>
                    <a href={data.clientLink} target="_blank">
                      <button className="btn btn-xs btn-outline m-2">
                        Client site code
                      </button>
                    </a>
                    <a href={data.serverLink} target="_blank">
                      <button className="btn btn-xs btn-outline m-2">
                        Server site code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProjectSlider;
