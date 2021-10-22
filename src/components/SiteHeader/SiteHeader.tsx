import React from "react";
import cx from "classnames";
import { motion, useCycle } from "framer-motion";

import Hamburger from "../Hamburger/Hamburger";

const SiteHeader = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);

    return (
        <header className={cx(`w-full py-6 md:py-8 lg:py-10 border-b border-coolGray-200 fixed z-40`)}>
            <motion.div
                className="container flex justify-between flex-1"
                initial={false}
                animate={isOpen ? "open" : "closed"}
            >
                <div>logo</div>
                <Hamburger toggle={() => toggleOpen()} />
            </motion.div>

            {isOpen && <div>is open!!</div>}
        </header>
    );
};

SiteHeader.displayName = "SiteHeader";

export default SiteHeader;
