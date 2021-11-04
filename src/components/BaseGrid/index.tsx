import React from "react";

const BaseGrid = () => {
    return (
        <div className="container fixed top-0 h-screen -translate-x-1/2 border-l border-r border-gray-900 pointer-events-none left-1/2 -z-1">
            <span className="absolute block w-px h-screen bg-gray-900 left-3.5" />
            <span className="absolute block w-px h-screen bg-gray-900 left-1/2 -translate-x-2/4" />
            <span className="absolute block w-px h-screen bg-gray-900 right-3.5" />
        </div>
    );
};

BaseGrid.displayName = "BaseGrid";

export default BaseGrid;
