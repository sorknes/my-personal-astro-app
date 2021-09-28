import React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import cx from "classnames";

// Utils
import { prefix } from "../../utils/namespace";

import "./cursor.scss";

interface IProps {
    clientX: number;
    clientY: number;
}

const Cursor = () => {
    const cursorX = useMotionValue(-44);
    const cursorY = useMotionValue(-44);

    const springConfig = { damping: 80, stiffness: 1000 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    React.useEffect(() => {
        const moveCursor = (e: IProps) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    React.useEffect(() => {
        const links = document.querySelectorAll("a");

        for (let i = 0; i < links.length; i++) {
            links[i].addEventListener("mouseover", () => {
                document.body.classList.add(`${prefix}-cursor--hover`);
            });

            links[i].addEventListener("mousemove", () => {
                document.body.classList.add(`${prefix}-cursor--hover`);
            });

            links[i].addEventListener("mouseout", () => {
                document.body.classList.remove(`${prefix}-cursor--hover`);
            });

            links[i].addEventListener("click", () => {
                document.body.classList.remove(`${prefix}-cursor--hover`);
            });
        }
    });

    const componentClass = cx(`${prefix}-cursor`);

    return (
        <motion.div
            className={componentClass}
            style={{
                translateX: cursorXSpring,
                translateY: cursorYSpring,
            }}
        />
    );
};

Cursor.displayName = "Cursor";

export default Cursor;
