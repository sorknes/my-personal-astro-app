import React from "react";
import cx from "classnames";

// Utils
import { prefix } from "../../../utils/namespace";

import "./logo.scss";

const Logo = () => {
    return (
        <a href="/" className={cx(`${prefix}-logo`)}>
            <h1 className={`text-base font-bold`}>Knut Sorknes</h1>
        </a>
    );
};

Logo.displayName = "Logo";

export default Logo;
