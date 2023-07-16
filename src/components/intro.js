import React from "react";
import Typewriter from "typewriter-effect";
import pic from '../images/bg.png'
import '../App.css';

const Intro = () => {
  
  return (
    <>
     
     <div className="r">
     <div className="row">
      <div className="col-4 m-8">
          <img src={pic} className="w-full ml-28 mt-9" alt="" />
        </div>
      <div className="col-4 m-16">
        <div className="text-center text-3xl mt-32 font-mono">
          Namaste world !!!
          <br />
          My name is <span className="underline font-mono font-extrabold">Aasia fatma</span>
          <div className="center">
            <Typewriter
 
                onInit={(typewriter) => {
                    typewriter
                        .typeString("A CSE undergraduate student")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Software developer")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Competitive programmer")
                        .start();
                }}
            />
        </div>
        </div>
        
      </div>
      </div>
     </div>
      
    
    </>
  );
};

export default Intro;
