import React from "react";
import { motion } from "framer-motion";
import cx from "classnames";

interface IProps {
    animate: boolean | string;
}

const Nav = ({ animate }: IProps) => {
    const menuVariants = {
        open: {
            opacity: 1,
            transition: {
                type: "spring",
                duration: 0.3,
                bounce: 0,
            },
        },
        close: {
            opacity: 0,
            transition: {
                type: "spring",
                duration: 0.3,
                bounce: 0,
            },
        },
    };

    return (
        <motion.nav
            className={cx(`w-full h-full text-coolGray-50 fixed top-0 left-0 bg-coolGray-900 z-40`)}
            variants={menuVariants}
            initial="close"
            exit="close"
            animate={animate}
        >
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Posts</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </motion.nav>
    );
};

Nav.displayName = "Nav";

export default Nav;
