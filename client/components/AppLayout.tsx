import React from "react";
import Sidebar from "./Sidebar";


export default function AppLayout ({children}: {children: React.ReactNode}){
    return(
       <div className="flex flex-col md:flex-row h-screen">  
            {/* sidebar */}
            <div className="absolute top: 0 left-0 z-[999] bg-white md:relative border-r w-full md:w-64 h-full flex flex-col">
                <Sidebar />
            </div>


            {/* main body */}
            <div className="flex-1 h-full">
                {children}
            </div>
       </div>
    )
}
