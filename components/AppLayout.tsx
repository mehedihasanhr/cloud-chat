import React from "react";
import Sidebar from "./Sidebar";


export default function AppLayout ({children}: {children: React.ReactNode}){
    return(
       <div className="flex flex-row h-screen">  
            {/* sidebar */}
            <div className="border-r w-64 h-full flex flex-col">
                <Sidebar />
            </div>


            {/* main body */}
            <div className="flex-1 h-full">
                {children}
            </div>
       </div>
    )
}
