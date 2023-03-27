import React from "react";
export default function Newsletter()
{
    return(
        <div className="flex-[1] flex-col bg-transparent text-white mr-[2rem] px-[1.5rem] font-semibold max-w-fit md:mt-[1rem]">
            <form>
            <label for="email">SUBSCRIBE FOR OUR NEWSLETTERS:</label>                
                <input
                id="email"
                 type="email" 
                 placeholder="EMAIL"
                 name="email"                
                 className="bg-[rgba(171,0,255,0.14)] border-[#AE35E6] border-[1.5px] rounded-md placeholder-[#EDC9FF] py-2 px-4 w-full my-3 font-semibold"
                />
                 <button className="bg-[#830098] py-2 px-4 border-transparent rounded-md min-w-fit my-3 font-semibold h-fit">SUBSCRIBE</button>
            </form>
        </div>
    )
}