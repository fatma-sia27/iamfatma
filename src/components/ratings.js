import React from "react";
import pic1 from "../images/hackerrank.png";
import pic2 from "../images/leetcode.png";
import pic3 from "../images/leetcode db.png";
import pic4 from "../images/tailwind.png";
import pic5 from "../images/html.png";
import pic6 from "../images/css.png";

const Ratings = () => {
  return (
    <>
      <h1 className="text-black text-4xl font-bold text-center mt-5">Stats</h1>
      <section>
        <section className="m-16 ml-32 mr-32 mt-5 border border-solid rounded-xl shadow-lg bg-indigo-100		border-violet-200	">
          <div className="grid grid-cols-1 p-4">
            <div className="bg-gradient-to-r from-blue-300 to-indigo-200	 m-4 rounded-md	p-4">
              <div className="flex justify-start content-start">
                <div className="col-4">
                  <img src={pic1} className="mx-auto w-64" alt="" />
                </div>
                <div className="col-2 text-4xl font-bold text-sky-900  text-center underline underline-offset-2	">
                  Hackerrank
                </div>
                <div className="cols-2 mt-4">
                  <div className="bg-indigo-200	  m-4 rounded-md	p-2 hover:bg-slate-300">
                    <h2 className="text-center text-sm">
                      Problem Solving : <span> &#9733; &#9733; &#9733;</span>
                    </h2>
                    <h2 className="text-center text-sm">
                      30 days of code:&#9733; &#9733; &#9733;&#9733; &#9733;{" "}
                    </h2>
                    <h2 className="text-center text-sm">
                      Java : &#9733; &#9733; &#9733;&#9733; &#9733;{" "}
                    </h2>
                    <h2 className="text-center text-sm">
                      Python : &#9733; &#9733; &#9733;{" "}
                    </h2>
                    <h2 className="text-center text-sm">
                      C++ : &#9733; &#9733; &#9733;{" "}
                    </h2>
                    <h2 className="text-center text-sm">
                      C : &#9733; &#9733;{" "}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <a href="https://www.hackerrank.com/btech15007_20?hr_r=1">
                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Profile
</button>
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 p-4">
            <div className="bg-gradient-to-r from-indigo-200 to-blue-300	 m-4 rounded-md	p-4">
              <div className="flex justify-start content-start">
                <div className="col-4">
                  <img src={pic2} className="mx-auto w-64" alt="" />
                </div>
                <div className="col-2 text-4xl font-bold text-sky-900  text-center underline underline-offset-2	">
                  Leetcode
                </div>
                <div className="cols-2 mt-4">
                  <div className="bg-indigo-200	 m-4 rounded-md	p-2 hover:bg-slate-300">
                    <h2 className="text-center text-sm">
                      Contest ratings : 1335
                    </h2>
                    <img src={pic3} alt="" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <a href="https://leetcode.com/fatma-sia/">
                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Profile
</button>
                </a>
              </div>
              {/* <div className="flex flex-col items-center">
                <img src={pic3} alt="" />
              </div> */}
            </div>
          </div>

          
        </section>
      </section>
    </>
  );
};

export default Ratings;
