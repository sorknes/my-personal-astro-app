import React from "react";
import cx from "classnames";

const SiteHeader = () => {
    const componentClass = cx(`w-full p-10 flex flex-1 justify-between border-b border-coolGray-200 fixed z-50`);

    return (
        <header className={componentClass}>
            <nav>
                <a href="#">Home</a>
                <a href="#">Posts</a>
                <a href="#">Contact</a>
            </nav>
        </header>
    );
};

SiteHeader.displayName = "SiteHeader";

export default SiteHeader;
