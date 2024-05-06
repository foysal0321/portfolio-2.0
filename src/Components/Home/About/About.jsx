/* eslint-disable react/no-unescaped-entities */

function About() {
  return (
    <div className="py-8 bg-slate-50" id="About">
    <div className=" md:p-14 p-6 " >
      <h2 className="text-4xl font-semibold">About Me</h2>
      <p className="py-2 text-xl mt-8 text-stone-950">
        My keen interest in programming and design helps me find creative
        solutions to technical challenges and develop visually appealing
        websites. My extensive knowledge of technical standards helps me manage
        projects efficiently.
      </p>
      <h5 className="mt-6 font-bold text-lg py-2">Technical</h5>
      <div className="text-md ">
        <p className="text-gray-700 text-sm">
          Right now you can find me hacking away primarily with React, Next Js,
          Redux, Node, Express, MongoDB, Firebase authentication and in general
          anything <br />
          JavaScript / TypeScript, HTML and CSS related.
        </p>
        <p className="mt-3 text-gray-700 text-sm">
          I've worked with my personal projets over the years, I specialize in
          developing web site/apps.
        </p>

        <h5 className=" font-bold text-lg py-2 mt-6">Personal</h5>
        <p className="text-gray-700 text-sm">
        I am 23 year old self taught junior Web Developer based in Cumilla, Bangladesh.
         I love to coding and travel.
        </p>

        <br />
        <div className="text-gray-700 mt-6 text-sm">
          <p>Want to know more? Drop me a line</p>
          <p className="mt-1">
            <span className="font-semibold text-sm">Email :</span>{" "}
            foysalx4@gmail.com
          </p>
          <p className="mt-1">
            <span className="font-semibold text-sm">What's app :</span>{" "}
            +8801869676921
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;
