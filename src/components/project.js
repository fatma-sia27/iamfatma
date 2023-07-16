import React from "react";
import pic1 from "../images/portfolio.png";
import pic2 from "../images/bitEditNotes.png";
import pic3 from "../images/railway.png";
import pic4 from "../images/birthday-wishing.png";

const Project = () => {
  return (
    <>
      <div>
        <h1 className="text-black text-4xl font-bold text-center mt-5 ">
          Projects
        </h1>
        <div className="grid grid-cols-2 m-8">
          <div className="bg-indigo-200	 ml-16 mb-4 rounded-md p-2 hover:bg-slate-300">
            <img src={pic1} className="mx-auto mb-4" alt="" width="700px" />
            <h2 className="text-center text-2xl underline font-mono font-extrabold">
              Portfolio website
            </h2>
            <h2 className="text-center text-lg font-mono">
              Tech stack: Tailwind CSS, React Js, Node Js, Mongo DB
            </h2>
            <div className="cols-2 m-2">
              <a href="https://iamfatma.netlify.app/" target="blank">
                <button class="m-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  Website
                </button>
              </a>
              <a href="https://drive.google.com/file/d/1JX4tgpkQpOyU57VZQxmKf0F5xMwCdv1R/view?usp=share_link">
                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  Github
                </button>
              </a>
            </div>
          </div>

          <div className="bg-indigo-200	 ml-16 mb-4 rounded-md p-2 hover:bg-slate-300">
            <img src={pic3} className="mx-auto mb-4" alt="" width="700px" />
            <h2 className="text-center text-2xl underline font-mono font-extrabold">
              Railway project (did during my railway internship)
            </h2>
            <h2 className="text-center text-lg font-mono">
              Tech stack: Tailwind CSS, React Js, Node Js, Mongo DB
            </h2>
            {/* <div className="cols-2 m-2">
              
              <a href="https://drive.google.com/file/d/1JX4tgpkQpOyU57VZQxmKf0F5xMwCdv1R/view?usp=share_link">
                <button className="rounded-full bg-slate-300 border-zinc-600	m-2  border-2 border-solid p-3 hover:bg-zinc-500	 3xl mx-auto">
                  Github
                </button>
              </a>
            </div> */}
          </div>

          <div className="bg-indigo-200	 ml-16 rounded-md p-2 hover:bg-slate-300">
            <img src={pic2} className="mx-auto mb-4" alt="" width="700px" />
            <h2 className="text-center text-2xl underline font-mono font-extrabold">
              BitEditNotes
            </h2>
            <h2 className="text-center text-lg font-mono">
              Tech stack: React Js, Node Js, Mongo DB, Express js
            </h2>
            <div className="cols-2">
              <a href="https://github.com/fatma-sia27/bitP-editNotes">
                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  Github
                </button>
              </a>
            </div>
          </div>

          <div className="bg-indigo-200	 ml-16 rounded-md p-2 hover:bg-slate-300">
            <img src={pic4} className="mx-auto mb-4" alt="" width="700px" />
            <h2 className="text-center text-2xl underline font-mono font-extrabold">
              Birthday wishing app
            </h2>
            <h2 className="text-center text-lg font-mono">
              Tech stack: Kotlin , Java, Android
            </h2>
            <div className="cols-2">
              <a href="https://github.com/fatma-sia27/BirthdayGreetingsApp">
                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  Github
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
