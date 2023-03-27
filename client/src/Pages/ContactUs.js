import React from "react";
import ContactForm from "../components/ContactUs/ContactForm"
import Newsletter from "../components/ContactUs/Newsletter";

export default function Tester()
{
    return(
        <div className="bg-[#2B0040] min-w-screen min-h-screen">
            <div className="flex justify-center content-center flex-wrap pt-[7rem]">
            
            <ContactForm />
            
                
            <Newsletter/>
            </div>
            
        </div>
    )
}