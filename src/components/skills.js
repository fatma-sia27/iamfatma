import React from "react";
import pic1 from '../images/java.png'
import pic2 from '../images/python.png'
import pic3 from '../images/c.png'
import pic4 from '../images/tailwind.png'
import pic5 from '../images/html.png'
import pic6 from '../images/css.png'
import pic7 from '../images/react.png'
import pic8 from '../images/mongo db.png'
import pic9 from '../images/node js.png'
import pic10 from '../images/kotlin.png'

const skills = () => {
  return (
    <>
      <div className="bg-indigo-100	mb-2">
      <div className="mt-5 pt-5">
      <h1 className="text-black text-4xl font-bold text-center ">Skills</h1>
      </div>
      <div className="grid grid-cols-3 p-4 ml-10 mr-10">
                <div className="bg-gradient-to-r from-indigo-300 to-slate-300	 m-4 rounded-md	p-4 hover:bg-slate-500">
                    <img src={pic1} className= "mx-auto" alt="" width="50px"/>
                    <h2 className="text-center text-lg">Java</h2>
                </div>
                <div className="bg-gradient-to-r from-indigo-300 to-slate-300	 m-4 rounded-md	p-4 hover:bg-slate-500">
                    <img src={pic2} className= "mx-auto" alt="" width="50px"/>
                    <h2 className="text-center text-lg">Python</h2>
                </div>
                <div className="bg-gradient-to-r from-indigo-300 to-slate-300	 m-4 rounded-md	p-4 hover:bg-slate-500">
                    <img src={pic3} className= "mx-auto" alt="" width="50px"/>
                    <h2 className="text-center text-lg">C</h2>
                </div>
            </div>


            <div className="grid grid-cols-3 p-4 ml-10 mr-10">
                <div className="bg-gradient-to-r from-indigo-300 to-slate-300	 m-4 rounded-md	p-4 hover:bg-slate-500">
                    <img src={pic4} className= "mx-auto" alt="" width="50px"/>
                    <h2 className="text-center text-lg">Tailwind</h2>
                </div>
                <div className="bg-gradient-to-r from-indigo-300 to-slate-300	 m-4 rounded-md	p-4 hover:bg-slate-500">
                    <img src={pic5} className= "mx-auto" alt="" width="50px"/>
                    <h2 className="text-center text-lg">HTML</h2>
                </div>
                <div className="bg-gradient-to-r from-indigo-300 to-slate-300	 m-4 rounded-md	p-4 hover:bg-slate-500">
                    <img src={pic6} className= "mx-auto" alt="" width="50px"/>
                    <h2 className="text-center text-lg">CSS</h2>
                </div>
            </div>

            <div className="grid grid-cols-3 p-4 ml-10 mr-10">
                <div className="bg-gradient-to-r from-indigo-300 to-slate-300	 m-4 rounded-md p-4 hover:bg-slate-500">
                    <img src={pic7} className= "mx-auto" alt="" width="50px"/>
                    <h2 className="text-center text-lg">React Js</h2>
                </div>
                <div className="bg-gradient-to-r from-indigo-300 to-slate-300	 m-4 rounded-md	p-4 hover:bg-slate-500">
                    <img src={pic8} className= "mx-auto" alt="" width="50px"/>
                    <h2 className="text-center text-lg">Mongo DB</h2>
                </div>
                <div className="bg-gradient-to-r from-indigo-300 to-slate-300	 m-4 rounded-full-md	p-4 hover:bg-slate-500">
                    <img src={pic9} className= "mx-auto" alt="" width="50px"/>
                    <h2 className="text-center text-lg">Node Js</h2>
                </div>
                
            </div>
            <div className="flex flex-col items-center">
            <div className="bg-gradient-to-r from-indigo-300 to-slate-300	 m-4 rounded-md	p-8 hover:bg-slate-500">
                    <img src={pic10} className= "mx-auto" alt="" width="50px"/>
                    <h2 className="text-center text-lg">Kotlin</h2>
                </div>
            </div>
      {/* <section className="mb-2">
        
        {/* <section className="m-16 ml-32 mr-32 mt-5 mb-5 ~border border-solid rounded-xl shadow-lg bg-slate-200	border-violet-200	">
            <
        </section> */}
      {/* </section> */} */
      </div>
    </>
  );
};

export default skills;
