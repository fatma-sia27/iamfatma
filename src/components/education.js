import React from "react";

const Education = () => {
  return (
    <>
      <div className="bg-indigo-100	 p-0">
       <div className="pt-0.5">
       <h1 className="mt-5 text-black text-4xl font-bold text-center">
          Education
        </h1>
       </div>
        <section className="mb-2">
          <div className="mt-5 grid grid-cols-1">
            <div className="mb-4 content-center border border-solid rounded-xl shadow-lg border-white-200 bg-white ml-60 mr-60">
              <div className="row divide-x-2">
                <div className="col-6 p-2">
                  <h1 className="p-4 text-sky-500 text-xl font-bold text-center">
                    Birla Institute of technology, Mesra
                  </h1>
                </div>
                <div className="col-6 mt-3">
                    <h2 className="text-lg text-center">B.Tech | Computer science</h2>
                    <h2 className="text-lg text-center">2020 - 2024</h2>
                    <h2 className="text-lg text-center">Grade : 8.85 </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-0.5 grid grid-cols-1">
            <div className="mb-4 content-center border border-solid rounded-xl shadow-lg border-white-200 bg-white ml-60 mr-60">
              <div className="row divide-x-2">
                <div className="col-6 mt-3 mb-3">
                    <h2 className="text-lg text-center">12th | CBSE</h2>
                    <h2 className="text-lg text-center">2018 - 2020</h2>
                    <h2 className="text-lg text-center">Grade : 88.4% </h2>
                </div>
                <div className="col-6 p-2">
                  <h1 className="p-4 text-sky-500 text-xl font-bold text-center">
                    School of creative learning
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-0.5 grid grid-cols-1 mb-5">
            <div className="mb-4 content-center border border-solid rounded-xl shadow-lg border-white-200 bg-white ml-60 mr-60">
              <div className="row divide-x-2">
              <div className="col-6 p-2">
                  <h1 className="p-4 text-sky-500 text-xl font-bold text-center">
                    Ishan International girl's school
                  </h1>
                </div>
                <div className="col-6 mt-3 mb-3">
                    <h2 className="text-lg text-center">10th | CBSE</h2>
                    <h2 className="text-lg text-center">2018</h2>
                    <h2 className="text-lg text-center">Grade : 87.6% </h2>
                </div>
                
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Education;
