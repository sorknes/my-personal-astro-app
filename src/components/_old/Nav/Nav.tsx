import React from "react";
import { motion } from "framer-motion";
import cx from "classnames";

import NavList from "./NavList";

interface IProps {
    animate: boolean | string;
}

const Nav = ({ animate }: IProps) => {
    const variants = {
        open: {
            opacity: 1,
            transition: {
                type: "spring",
                duration: 0.3,
                bounce: 0,
            },
        },
        closed: {
            opacity: 0,
            transition: {
                type: "spring",
                duration: 0.3,
                bounce: 0,
                delay: 0.6,
            },
        },
    };

    return (
        <motion.nav
            className={cx(`w-full h-full text-coolGray-50 fixed top-0 left-0 bg-coolGray-900 z-40`)}
            variants={variants}
            initial="closed"
            exit="closed"
            animate={animate}
        >
            <NavList />
        </motion.nav>
    );
};

Nav.displayName = "Nav";

export default Nav;
