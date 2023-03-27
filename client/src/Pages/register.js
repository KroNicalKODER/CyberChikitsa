import React from "react";
import ".././App.css";
import "./register.css"

export default function Register({showRegisterProp}) {
  if(!showRegisterProp) return null
  
  return (
    <>
      <div class="fixed bg-background w-screen min-h-screen grid grid-cols-custom ">
        <div class="flex flex-col items-center justify-center">
          <div>
            <img
              src="image1.svg"
              alt="women with a syringe"
              class="w-[40vw] h-[40vh]"
            />
          </div>
          <div class="w-1/3 text-center">
            <p class="text-white" className="tagline">
              Swiftly Solve your Simple Sickness With Our Speedy Strategies
            </p>
          </div>
          <div class="m-16">
            <button class="bg-gradient-to-r from-grad-left to-grad-right rounded-full w-24 h-12">
              LOGIN
            </button>
          </div>
        </div>



        <div class="flex flex-col">
          <div class="text-white">
            <div class="flex flex-row justify-start items-center h-[10vh] mt-10">
              <img src="logo.png" alt="logo" />
              <p class="m-1 p-5">CYBER CHIKITSA</p>
            </div>
            <div class="grid grid-cols-2 gap-5 mr-10 mt-10">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="ENTER FULL NAME"
                className="input"
              ></input>
              <input
                type="number"
                id="name"
                name="name"
                placeholder="ENTER MOBILE"
                className="input"
              ></input>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="ENTER USERNAME"
                className="input"
              ></input>
              <input
                type="password"
                id="name"
                name="name"
                placeholder="ENTER PASSOWRD"
                className="input"
              ></input>
              <input
                type="email"
                id="name"
                name="name"
                placeholder="ENTER E-MAIL"
                className="input"
              ></input>
              <div class="flex">
                <div class="mr-4">
                  <input type="radio" id="male" name="gender" class="mr-2" />
                  <label for="male">MALE</label>
                </div>
                <div class="mr-4">
                  <input type="radio" id="female" name="gender" class="mr-2" />
                  <label for="female">FEMALE</label>
                </div>
                <div>
                  <input type="radio" id="other" name="gender" class="mr-2" />
                  <label for="other">OTHER</label>
                </div>
              </div>

              <input
                type="date"
                id="name"
                name="name"
                placeholder="ENTER DOB"
                className="input"
              ></input>
            </div>
            <button class="bg-purple-btn rounded-lg w-1/6 mt-10">
              REGISTER
            </button>
          </div>
          <div class="text-white mt-10 flex flew-row">
            <p>REGISTER AS- </p>
            <div class="ml-10">
              <div>
                <button class="bg-gradient-to-r from-grad-left to-grad-right rounded-lg mb-5">
                  PATIENT
                </button>
              </div>
              <div>
                <button class="bg-gradient-to-r from-grad-left to-grad-right rounded-lg  mb-5">
                  DOCTOR
                </button>
              </div>
              <div>
                <button class="bg-gradient-to-r from-grad-left to-grad-right rounded-lg ">
                  STUDENT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
