import React from "react";
import cx from "classnames";
import { motion, useTransform, useViewportScroll } from "framer-motion";

// Utils
import { prefix } from "../../utils/namespace";

import "./grid-lines.scss";

const GridLines = () => {
    const { scrollYProgress } = useViewportScroll();
    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <div className={cx(`${prefix}-grid-lines`)}>
            <motion.div className={cx(`${prefix}-grid-lines__scroll`)} style={{ scaleY }} />
        </div>
    );
};

export default GridLines;
