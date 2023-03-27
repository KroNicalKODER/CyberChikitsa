import React from "react";
export default function ContactForm()
{
    return(
        <div className="contactform flex-[1] flex-col bg-transparent text-white border-r-[0.17rem] border-[#4D0073] mr-[2rem] ml-[3rem] pr-[4rem] font-semibold max-w-fit md:border-r-0 md:border-b-[0.17rem] md:pr-0">
            <form>
                <label for="email">ENTER EMAIL ADDRESS:</label>                
                <input
                id="email"
                 type="email" 
                 placeholder="EMAIL"
                 name="email"                
                 className="bg-[rgba(171,0,255,0.14)] border-[#AE35E6] border-[1.5px] rounded-md placeholder-[#EDC9FF] py-2 px-4 w-full my-3 font-semibold"
                />
                <label for="contact">ENTER CONTACT:</label>                
                <input 
                id="contact"
                type="text" 
                placeholder="CONTACT"
                name="contact"   
                className="bg-[rgba(171,0,255,0.14)] border-[#AE35E6] border-[1.5px] rounded-md placeholder-[#EDC9FF] py-2 px-4 w-full my-3 font-semibold"
                />
                <label for="description">ENTER DESCRIPTION:</label>
                <textarea id="description" name="description" rows="10" cols="10" placeholder="DESCRIPTION"
                className="bg-[rgba(171,0,255,0.14)] border-[#AE35E6] border-[1.5px] rounded-md placeholder-[#EDC9FF] py-2 px-4 w-full my-3 font-semibold"
                />
                <button className="bg-[#830098] py-2 px-10 border-transparent rounded-md my-3 font-semibold w-fit h-fit">SEND</button>
            </form>
        </div>
    )
}