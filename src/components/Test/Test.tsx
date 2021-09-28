import React from "react";
import cx from "classnames";

interface IProps {
    children: React.ReactNode;
}

const Button = ({ children }: IProps) => {
    const componentClass = cx(`text-white bg-coolGray-900`);

    return <div className={componentClass}>{children}</div>;
};

export default Button;
