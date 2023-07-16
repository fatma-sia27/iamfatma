import React from "react";
import pic1 from "../images/aasPic.jpg";
import pic2 from "../images/linkedinLogo.png";
import pic3 from "../images/githubLogo.png";
import pic4 from "../images/twitterLogo.png";

const About = () => {
  return (
    <>
      <div className="bg-indigo-100	mb-4">
        <div className="flex content-center justify-center items-center p-3">
          {/* <img src={pic1} className="rounded-full w-40" alt="" />
        <h1>AASIA FATMA</h1> */}
          <div>
            <img src={pic1} className="table-row rounded-full w-32" alt="" />
          </div>
        </div>
        <div className="flex content-center justify-center">
          <div className="row font-mono text-2xl">
            <strong>Aasia Fatma</strong>
            {/* <span>A MERN developer</span> */}
          </div>
        </div>
        <div className="flex content-center justify-center text-center font-mono ">
        <span>A MERN developer</span>
        </div>

        <div className="flex content-center justify-center text-center p-2 ml-6">
          <a
            href="https://drive.google.com/file/d/1yU4qdetj2JFrqvbGLgEU9UOQ56vdp2Ii/view?usp=sharing"
            target="blank"
          >
            <button class="bg-white hover:bg-gray-700 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              <strong>See my profile / resume</strong>
            </button>
          </a>
        </div>

        <div className="flex content-center justify-center text-center p-3">
          <div className="row">
            <div className="text-xl underline underline-offset-1"><strong>Socials</strong> </div>
            <div  className="grid grid-cols-3 p-2">
            <a
            href="https://www.linkedin.com/in/aasia-fatma-7630b71bb/"
            target="blank"
          >
           <img src={pic2} className="w-6" alt="" />
          </a>
          <a
            href="https://github.com/fatma-sia27"
            target="blank"
          >
           <img src={pic3} className="w-6" alt="" />
          </a>
          <a
            href="https://twitter.com/fatma_aasia"
            target="blank"
          >
           <img src={pic4} className="w-6" alt="" />
          </a>
          
            </div>
          </div>

          
        </div>
        <div className="flex content-center justify-center text-center p-3">
          <div className="row">
            <div className="text-xl underline underline-offset-1"><strong>Interests</strong> </div>
            <div  className="grid grid-cols-3 p-2">
            <div class="pb-2 ml-96">
    <span class=" ml-24 inline bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  text-gray-700 mb-2">#music</span>
    <span class="inline bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mx-2 text-gray-700 mb-2">#travel</span>
    <span class="inline bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mx-2 text-gray-700 mb-2">#playing</span>
  </div>
          
            </div>
          </div>

          
        </div>
        <div className="flex content-center justify-center text-center p-2">
            <div className="row">
              <div className="text-xl underline underline-offset-1"><strong>About </strong></div>
              <div className=""><section>
              <div className="grid grid-cols-1 ml-48 mr-48  p-2 mb-5">
            <div className="bg-gradient-to-r from-blue-200 to-indigo-300 rounded-md	p-4">
            I am a 3rd year undergraduate student, pursuing <strong>B.Tech in Computer
              science (CSE) from BIT Mesra</strong>. I love solving real world problems
              through my programming skills. I practice CP problems on 
              <strong> CodeForces and CodeChef</strong>, did DSA on <strong>Leetcode</strong> and HackerRank. Also
              I did various projects using <strong>MERN development and tailwind CSS</strong> and
              also did minor project in <strong>Android development</strong>. My hobbies are
              listening music and playing Badminton and ludo.
            </div>
          </div></section></div>
            </div>
          </div>

        {/* <div className="row">
          <div className="col-6 m-4 mt-5">
            <img src={pic1} className="rounded-full w-4/6 ml-32 mt-8" alt="" />
          </div>
          <div className="col-4 m-4 mt-5">
            <h1 className="mt-16 text-black text-4xl font-bold text-center underline tracking-wide font-mono">
              About me
            </h1>
            <p className="text-lg mt-2.5 font-mono">
              I am a 3rd year undergraduate student, pursuing B.Tech in Computer
              science (CSE) from BIT Mesra. I love solving real world problems
              through my programming skills. I practice CP problems on
              CodeForces and CodeChef, did DSA on LeetCode and HackerRank. Also
              I did various projects using MERN development and tailwind CSS and
              also did minor project in Android development. My hobbies are
              listening music and playing Badminton and ludo.
            </p>
            <div className="flex flex-col items-center mt-3">
              <a href="https://drive.google.com/file/d/1JX4tgpkQpOyU57VZQxmKf0F5xMwCdv1R/view?usp=share_link">
                <button className="rounded-full bg-slate-300 border-red-900 border-2 border-solid p-3 hover:bg-sky-600 3xl mx-auto">
                  Resume
                </button>
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default About;
