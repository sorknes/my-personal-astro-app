import React from "react";
import cx from "classnames";

const Logo = () => {
    const componentClass = cx(`text-coolGray-900 border-0 hover:text-coolGray-900`);

    return (
        <a href="/" className={componentClass}>
            <h1 className={`text-base font-bold`}>Knut Sorknes</h1>
        </a>
    );
};

Logo.displayName = "Logo";

export default Logo;
