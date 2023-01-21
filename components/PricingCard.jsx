import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { BiCheckDouble } from "react-icons/bi";


const PricingCard = () => {
  return (
    <section className="pricing_card mt-10" id="pricing">
      <div
        className=" flex flex-col items-center justify-center mx-auto mb-4 px-5 "
        id="home"
      >
        <h1 className="text-2xl sm:text-4xl lg:text-5xl text-center font-bold text-gray-800">
          Pick a plan that&apos;s
        </h1>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl text-center font-bold text-gray-800">
          right for you
        </h1>
        <h3 className="text-center mt-3 text-gray-600">
        Take Your CV/Resume to the Next Level with Our Elite Plans
        </h3>
      </div>

      <div className="gallery_contents">
        <div className="nfts">

        <div className="itemBox">
            <div className="itemboxbox bg-slate-50 p-5 rounded-lg ">
              <h3 className="bg-slate-200 w-11 px-1 mb-1 font-semibold text-gray-700">Gold</h3>

              <h1 className="text-4xl font-bold mb-2 text-gray-800">$40</h1>
              <p className="text-gray-600">gold cv package</p>
              <div className="mt-10">
                <h2 className="mb-1 flex text-gray-800 font-semibold">
                  {" "}
                  <BiCheckDouble className="check_double text-yellow-400" /> 
                  2 CV/ Resume templates
                </h2>

                <h2 className="mb-1 flex text-gray-800 font-semibold">
                  {" "}
                  <BiCheckDouble className="check_double text-yellow-400" />2
                  Cover Letters
                </h2>
                <h2 className="mb-1 flex text-gray-800 font-semibold">
                  <BiCheckDouble className="check_double text-yellow-400" />
                  Lifetime Cv/Resume Editing
                </h2>
                <h2 className="mb-1 flex text-gray-800 font-semibold">
                  <BiCheckDouble className="check_double text-yellow-400" />
                  Career Consultation
                </h2>
                <h2 className="mb-1 flex text-gray-800 font-semibold">
                  <BiCheckDouble className="check_double text-yellow-400" />14
                  Days Delivery
                </h2>
                <button
                  className="center_button border px-4 py-1 bg-gradient-to-r from-orange-300 
                    to-yellow-300 text-gray-900 font-bold 
                    uppercase text-sm hover:bg-gradient-to-l transition-transform duration-400 mt-10"
                >
                  {" "}
                  Work with me
                </button>
              </div>
            </div>
          </div>


          <div className="itemBox">
            <div className="itemboxbox bg-slate-50 p-5 rounded-lg ">
              <h3 className="bg-slate-200 w-16 px-1 mb-1 text-gray-700 font-semibold">Express</h3>

              <h1 className="text-4xl font-bold mb-2 text-gray-800">$35</h1>
              <p>express cv package </p>
              <div className="mt-10">
                <h2 className="mb-1 flex text-gray-800 font-semibold">
                  {" "}
                  <BiCheckDouble className="check_double text-yellow-400" />1
                  Template for cv/resume
                </h2>

                <h2 className="mb-1 flex text-gray-800 font-semibold">
                  {" "}
                  <BiCheckDouble className="check_double text-yellow-400" />
                  Cover Letter
                </h2>
                <h2 className="mb-1 flex text-gray-800 font-semibold">
                  <BiCheckDouble className="check_double text-yellow-400" />
                  Career Consultation
                </h2>
                <h2 className="mb-1 flex text-gray-800 font-semibold">
                  <BiCheckDouble className="check_double text-yellow-400" />3
                  Days Delivery
                </h2>
                <button
                  className="center_button border px-4 py-1 bg-gradient-to-r from-orange-300
                      to-yellow-300 uppercase font-bold text-gray-900 hover:px-6 transition-transform duration-400 mt-10"
                >
                  {" "}
                  Work with me
                </button>
              </div>
            </div>
          </div>  

          <div className="itemBox">
            <div className="itemboxbox bg-slate-50 p-5 rounded-lg ">
              <h3 className="bg-slate-200 w-24 px-1 mb-1 font-semibold">Professional</h3>

              <h1 className="text-4xl font-bold mb-2 text-gray-800">$25</h1>
              <p>professional cv package </p>
              <div className="mt-10">
                <h2 className="mb-2 flex  font-semibold text-gray-800">
                  {" "}
                  <BiCheckDouble className="check_double text-yellow-400" />1
                  Template for cv/resume
                </h2>

                <h2 className="mb-2 flex  font-semibold text-gray-800">
                  {" "}
                  <BiCheckDouble className="check_double text-yellow-400" />
                  Cover Letter
                </h2>
                <h2 className="mb-2 flex  font-semibold text-gray-800">
                  <BiCheckDouble className="check_double text-yellow-400" />7
                  Days Delivery
                </h2>
                <button
                  className="center_button border px-4 py-1 bg-gradient-to-r from-orange-300 
                   to-yellow-300 uppercase text-gray-900 font-bold hover:bg-gradient-to-l transition-transform duration-400 mt-10"
                >
                  {" "}
                  Work with me
                </button>
              </div>
            </div>
          </div>

          <div className="itemBox">
            <div className="itemboxbox bg-slate-50 p-5 rounded-lg ">
              <h3 className="bg-slate-200 w-20 px-1 mb-1  font-semibold text-gray-700">Standard</h3>

              <h1 className="text-4xl font-bold mb-2 text-gray-800 ">$10</h1>
              <p>standard cv package </p>
              <div className="mt-10">
                <h2 className="mb-2 flex  font-semibold text-gray-800">
                  <BiCheckDouble className="check_double text-yellow-400" />1
                  CV
                </h2>

                <h2 className="mb-2 flex  font-semibold text-gray-800">
                  {" "}
                  <BiCheckDouble className="check_double text-yellow-400" />7
                  Days Delivery
                </h2>
                <button
                  className="center_button border px-4 py-1 bg-gradient-to-r from-orange-300 
                     to-yellow-300 uppercase text-gray-900 font-bold hover:bg-gradient-to-l transition-transform duration-400 mt-10"
                >
                  {" "}
                  Work with me
                </button>
              </div>
            </div>
          </div>



          <div className="itemBox">
            <div
              className="itemboxbox bg-slate-50 p-5 rounded-lg group-hover:bg-slate-100 
              transition-transform duration-200 ease-in-out"
            >
              <h3 className="bg-slate-200 w-12 px-1 mb-1  font-semibold text-gray-700">Basic</h3>

              <h1 className="text-4xl font-bold mb-2 text-gray-800  font-semibold text-gray-800">$6</h1>
              <p>basic cv package</p>
              <div className="mt-10">
                <h2 className="mb-1 flex  font-semibold text-gray-800">
                  {" "}
                  <BiCheckDouble className="check_double text-yellow-400" /> 1
                  Resume
                </h2>

                <h2 className="mb-1 flex  font-semibold text-gray-800">
                  {" "}
                  <BiCheckDouble className="check_double text-yellow-400" /> 7
                  Days Delivery
                </h2>
                <button
                  className="center_button border px-4 py-1 bg-gradient-to-r from-orange-300 
                     to-yellow-300 uppercase text-gray-900 font-bold hover:bg-gradient-to-l transition-transform duration-400 mt-10"
                >
                  {" "}
                  Work with me
                </button>
              </div>
            </div>
          </div>

          <div className="itemBox">
            <div
              className="itemboxbox bg-slate-50 p-5 rounded-lg group-hover:bg-slate-100 
              transition-transform duration-200 ease-in-out"
            >
              <h3 className="bg-slate-200 w-12 px-1 mb-1  font-semibold text-gray-700">Social</h3>

              <h1 className="text-4xl font-bold mb-2 text-gray-800  font-semibold text-gray-800">$100</h1>
              <p>social media handling </p>
              <div className="mt-10">
                <h2 className="mb-1 flex  font-semibold text-gray-800">
                  {" "}
                  <BiCheckDouble className="check_double text-yellow-400" /> Linked In 
                  Optimization
                </h2>

                <h2 className="mb-1 flex  font-semibold text-gray-800">
                  {" "}
                  <BiCheckDouble className="check_double text-yellow-400" /> Twitter  
                  Optimization
                </h2>

                <h2 className="mb-1 flex  font-semibold text-gray-800">
                  {" "}
                  <BiCheckDouble className="check_double text-yellow-400" /> 21 Days Handling 
                </h2>
                <button
                  className="center_button border px-4 py-1 bg-gradient-to-r from-orange-300 
                     to-yellow-300 uppercase text-gray-900 font-bold hover:bg-gradient-to-l transition-transform duration-400 mt-10"
                >
                  {" "}
                  Work with me
                </button>
              </div>
            </div>
          </div>

      

        

        

       
        </div>
      </div>
      <div
        className=" flex flex-col items-center justify-center  mx-3 mb-4 px-2"
        id="home"
      >
       
       {/* <h3 className="text-center mt-3 text-base lg:text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure
      </h3> */}
      </div>


    </section>
  );
};

export default PricingCard;