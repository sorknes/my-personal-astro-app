import React from "react";
import { motion } from "framer-motion";

interface IProps {
    title: string;
    url: string;
}

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 0,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
};

const NavListItem = ({ title, url }: IProps) => {
    return (
        <motion.li variants={variants}>
            <a className="text-white no-underline border-0 text-8xl" href={`/${url}`}>
                <span className="text-placeholder">{title}</span>
            </a>
        </motion.li>
    );
};

export default NavListItem;
