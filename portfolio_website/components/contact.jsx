"use client";
import pic1 from "../assets/pic1.png";
import Image from "next/image";
export default function Contact() {
  return (
    <div className="flex flex-col mx-auto">
      <div className="text-center">
          <p className="text-7xl p-4">Contact Me</p>
          
        </div>
    <div className="flex">
       <Image
          src={pic1}
          className="h-1/2 w-1/2 flex px-40 pt-20 items-center"
          alt="parthiba"
        />

        <div className="lex flex-col m-8  pb-8 shadow-lg border-white rounded-md mx-auto">
          <h1 className="text-center font-semibold text-4xl mt-2 bg-gradient-to-br from-yellow-300 to-orange-500 bg-clip-text text-transparent">
            Let's Connect
          </h1>
          <form
            action="https://formsubmit.co/meparthiba@gmail.com"
            method="POST"
            className="flex flex-col py-5 w-96"
          >
            <div className="mb-4">
              <label className="text-xl bg-gradient-to-br from-yellow-300 to-orange-500 bg-clip-text text-transparent font-semibold">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your Name"
                className="form-control border-2 h-12 p-2 w-full text-xl"
                style={{ color: "black" }}
              />
            </div>
            <div className="mb-4">
              <label className="text-xl bg-gradient-to-br from-yellow-300 to-orange-500 bg-clip-text text-transparent font-semibold">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className="form-control border-2 h-12 p-2 w-full text-xl"
                style={{ color: "black" }}
              />
            </div>
            <div className="mb-4">
              <label className="text-xl bg-gradient-to-br from-yellow-300 to-orange-500 bg-clip-text text-transparent font-semibold">
                Message
              </label>
              <textarea
                name="message"
                required
                placeholder="Message"
                className="form-control border-2 h-40 p-2 w-full text-xl"
                style={{ color: "black" }}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-br from-emerald-300 to-cyan-400 to-sky-700 w-full p-4 text-white rounded-md text-xl"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
