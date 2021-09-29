import React from "react";
import cx from "classnames";

// Utils
import { prefix } from "../../utils/namespace";

import "./hamburger.scss";

interface IProps {
    isActive: boolean;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Hamburger = ({ isActive, onClick }: IProps) => {
    const componentClass = cx(`${prefix}-hamburger`, {
        [`${prefix}-hamburger--active`]: isActive === true,
    });

    return (
        <button className={componentClass} type="button" onClick={onClick}>
            <span className={`${prefix}-hamburger__top`} />
            <span className={`${prefix}-hamburger__center`} />
            <span className={`${prefix}-hamburger__bottom`} />
            <span className="sr-only">menu</span>
        </button>
    );
};

Hamburger.displayName = "Hamburger";

Hamburger.defaultProps = {
    isActive: true,
} as IProps;

export default Hamburger;
