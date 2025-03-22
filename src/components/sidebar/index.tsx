
"use client"

import UserGreeting from './UserGreeting';
import ViewToggle from './ViewToggle';
import FeedbackButton from './FeedbackButton ';

const Sidebar = ({ viewMode, setViewMode }: { viewMode: string, setViewMode: React.Dispatch<React.SetStateAction<string>> }) => {
    return (
        <div className="p-6 w-72 h-full fixed border-r border-gray-300 rounded-r-2xl  bg-slate-200 shadow-2xl flex flex-col gap-8">
            <UserGreeting />
            <ViewToggle viewMode={viewMode} setViewMode={setViewMode} />
            <FeedbackButton />
    </div>
    );
};

export default Sidebar;
