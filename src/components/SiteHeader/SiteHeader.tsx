import React from "react";
import cx from "classnames";
import { AnimatePresence } from "framer-motion";

import Logo from "../Logo/Logo";
import Hamburger from "../Hamburger/Hamburger";
import Nav from "../Nav/Nav";

const SiteHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <header
            className={cx(
                `w-full p-4 md:p-8 lg:p-10 flex flex-1 justify-between border-b border-coolGray-200 fixed z-40`
            )}
        >
            <Logo />

            <Hamburger isActive={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />

            <AnimatePresence initial={false}>
                {isMenuOpen && <Nav animate={isMenuOpen ? "open" : "close"} />}
            </AnimatePresence>
        </header>
    );
};

SiteHeader.displayName = "SiteHeader";

export default SiteHeader;
