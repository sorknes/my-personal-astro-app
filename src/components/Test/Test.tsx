import React from "react";
import cx from "classnames";

interface IProps {
    children: React.ReactNode;
}

const Button = ({ children }: IProps) => {
    return <div className={cx(`text-white bg-coolGray-900`)}>{children}</div>;
};

export default Button;
