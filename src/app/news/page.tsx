"use client"

import NewsList from "@/components/news/NewsList";
import Sidebar from "@/components/sidebar";

import { useState } from "react";

export default function NewsPage() {
    const [viewMode, setViewMode] = useState('card');  
    
    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <div className="w-64  bg-slate-200 text-black shrink-0">
                <Sidebar  viewMode={viewMode} setViewMode={setViewMode}  />
            </div>

            {/* Main content container */}
            <div className="flex-1 flex flex-col bg-slate-200">
                {/* News content */}
                <div className="flex-1 p-12 mt-12">
                    <NewsList viewMode={viewMode}  /> {/* Displaying the list of news */}
                </div>
            </div>
        </div>
    )
}