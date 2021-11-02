import React from "react";

const BaseGrid = () => {
    return (
        <div className="container fixed top-0 h-screen -translate-x-1/2 border-l border-r border-gray-200 pointer-events-none left-1/2 -z-1">
            <span className="absolute block w-px h-screen bg-gray-200 left-4" />
            <span className="absolute block w-px h-screen bg-gray-200 left-1/2 -translate-x-2/4" />
            <span className="absolute block w-px h-screen bg-gray-200 right-4" />
        </div>
    );
};

BaseGrid.displayName = "BaseGrid";

export default BaseGrid;
