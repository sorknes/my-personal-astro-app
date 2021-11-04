import React from "react";

// Utils
import { prefix } from "../../config/namespace";

import "./style.scss";

const LayoutHeader = () => {
    return (
        <header
            className={`container fixed flex items-center justify-between py-10 bg-gray-900 left-1/2 -translate-x-2/4 z-50 text-white ${prefix}-header`}
        >
            <div>Knut Sorknes</div>
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
