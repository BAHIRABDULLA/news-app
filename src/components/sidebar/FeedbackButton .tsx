"use client"
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useState } from "react";
import Feedback from "../Feedback";
import UserGreeting from "./UserGreeting";
import { MessageSquare } from "lucide-react";

const FeedbackButton = () => {
  const [open, setOpen] = useState(false);


  return (
    <>
      {/* Button to trigger feedback form */}
      <div className="bg-white rounded-lg p-5 border border-emerald-100 shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Have Feedback?</h2>
        <p className="text-gray-600 text-sm mb-4">We&apos;d love to hear your thoughts on our service.</p>
        <button
          onClick={() => setOpen(true)}
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white p-3 rounded-md transition-colors duration-200 flex items-center justify-center gap-2 font-medium"
        >
          <MessageSquare className="h-4 w-4" />
          We&apos;re Listening!
        </button>
      </div>

      {/* Sheet Component for sliding feedback form */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="min-w-1/2 p-6">
          <div className="flex gap-6">
            {/* Left: Sidebar content (excluding ViewToggle) */}
            <div className="w-1/3 border-r pr-4">
              <UserGreeting />
              
              <div className="bg-slate-200 rounded">
                <h2 className="text-2xl font-semibold">Have a Feedback?</h2>
                <button
                  onClick={() => setOpen(true)}
                  className=" text-black p-2 mt-4 rounded bg-red-400"
                >
                  We&apos;re Listening!
                </button>
              </div>

            </div>

            {/* Right: Feedback Form */}
            <div className="w-2/3">
              <Feedback />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default FeedbackButton;
