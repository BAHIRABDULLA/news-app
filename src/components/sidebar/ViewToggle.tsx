import { Grid, List } from 'lucide-react';
import React from 'react'

const ViewToggle = ({ viewMode, setViewMode }: { viewMode: string, setViewMode: React.Dispatch<React.SetStateAction<string>> }) => {
  return (
    <div className="mb-6">
      <p className="text-sm font-semibold mb-3 text-gray-700">View Toggle</p>
      <div className="flex rounded-lg p-1 shadow-md bg-gray-50">
        <button
          onClick={() => setViewMode('card')}
          className={`px-4 py-3 rounded-md text-sm flex-1 transition-all duration-200 ${viewMode === 'card'
              ? 'bg-emerald-500 text-white shadow-sm'
              : 'bg-transparent text-gray-600 hover:bg-gray-100'
            }`}
        >
          <span className="flex items-center justify-center">
            <Grid className="h-4 w-4 mr-2" />
            Cards
          </span>
        </button>
        <button
          onClick={() => setViewMode('list')}
          className={`px-4 py-3 rounded-md text-sm flex-1 transition-all duration-200 ${viewMode === 'list'
              ? 'bg-emerald-500 text-white shadow-sm'
              : 'bg-transparent text-gray-600 hover:bg-gray-100'
            }`}
        >
          <span className="flex items-center justify-center">
            <List className="h-4 w-4 mr-2" />
            List
          </span>
        </button>
      </div>
    </div>
  );
};


export default ViewToggle;
