import React from "react";

const LayoutHeader = () => {
    return (
        <header className="container fixed flex items-center justify-between py-10 bg-white left-1/2 -translate-x-2/4">
            <div>logo</div>
            <nav>
                <button className="flex flex-col">
                    <span>-</span>
                    <span>-</span>
                    <span>-</span>
                    <span className="sr-only">Main navigation</span>
                </button>
            </nav>
        </header>
    );
};

LayoutHeader.displayName = "LayoutHeader";

export default LayoutHeader;
