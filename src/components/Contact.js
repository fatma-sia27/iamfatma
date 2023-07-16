import React, { useState } from "react";
import pic from "../images/call.png";
import pic1 from "../images/mail.png";

const Contact = () => {
  const [user, setUser] = useState({
    emailId: "",
    firstName: "",
    message: "",
  });

  let name, value;

  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const {emailId, firstName, message,} = user;
    
    const res = await fetch(
      "https://reactcontactus-a44d9-default-rtdb.firebaseio.com/reactcontactus.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailId,
          firstName,
          message,
        })
      }
    );

    if(res) {
      alert("Data stored");
    }
    else {
      alert("PLZ fill the data");
    }
  };
  return (
    <>
      <h1 className="text-black text-4xl font-bold text-center mt-5">
        Connect with me{" "}
      </h1>
      <section>
        <section className="m-16 mt-5 border border-solid rounded-xl shadow-lg	border-violet-100	">
          <div className="container mt-5">
            <div className="row divide-x-2">
              <div className="col-3">
                <div className="p-2 m-2">
                  <div className="phone">
                    <img src={pic} className="mx-auto" alt="" width="60px" />
                    <h2 className="text-center">Phone</h2>
                    <h3 className="text-slate-400	text-center">
                      +91 6201293283
                    </h3>
                  </div>
                  <br />
                  <div className="mail">
                    <img src={pic1} className="mx-auto" alt="" width="60px" />
                    <h2 className="text-center	">Mail</h2>
                    <h3 className="text-slate-400 text-center">
                      fatma.sia2020@gmail.com
                    </h3>
                    <h3 className="text-slate-400	text-center">
                      techAasia27@gmail.com
                    </h3>
                  </div>
                </div>
              </div>

              <div className="col-9">
                <div className="p-2 m-2 pb-2">
                  <>
                    {/* Hello world */}
                    <form method="POST">
                      <div className="form-group">
                        {/* <label htmlFor="exampleFormControlInput1">Email address</label> */}
                        <input
                          type="email"
                          name="emailId"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Please enter your email"
                          autoComplete="off"
                          value={user.emailId}
                          //onChange={postData}
                        />
                      </div>
                      <div className="form-group mt-3">
                        {/* <label htmlFor="exampleFormControlInput1">Email address</label> */}
                        <input
                          type="text"
                          name="firstName"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Please enter your name"
                          autoComplete="off"
                          value={user.firstName}
                          //onChange={postData}
                        />
                      </div>

                      <div className="form-group mt-3">
                        {/* <label htmlFor="exampleFormControlTextarea1">Example textarea</label> */}
                        <textarea
                          className="form-control"
                          name="message"
                          id="exampleFormControlTextarea1"
                          rows={3}
                          defaultValue={""}
                          placeholder="Your message"
                          autoComplete="off"
                          value={user.message}
                          //onChange={postData}
                        />
                      </div>
                      <button
                        type="submit"
                        className="rounded mt-3 bg-blue-300 p-3 hover:bg-sky-700"
                        onSubmit={postData}
                      >
                        Submit
                      </button>
                    </form>
                  </>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Contact;
