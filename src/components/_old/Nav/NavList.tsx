import React from "react";
import { motion } from "framer-motion";

import NavListItem from "./NavListItem";

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

const NavList = () => {
    const menuItems = [
        { id: 0, title: "About", url: "about" },
        { id: 1, title: "Contact", url: "contact" },
        { id: 2, title: "News", url: "news" },
    ];

    return (
        <div className="container flex items-center justify-center h-full">
            <motion.ul className="list-none" variants={variants}>
                {menuItems.map((item) => (
                    <NavListItem key={item.id} title={item.title} url={item.url} />
                ))}
            </motion.ul>
        </div>
    );
};

export default NavList;
