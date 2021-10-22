import React from "react";
import { motion } from "framer-motion";

const Path = (props) => <motion.path fill="transparent" strokeWidth="2" stroke="hsl(0, 0%, 18%)" {...props} />;

const Hamburger = ({ toggle }) => {
    return (
        <button
            className="flex items-center justify-center w-14 h-14 bg-coolGray-200 hover:bg-coolGray-500"
            onClick={toggle}
        >
            <svg width="32" height="32" viewBox="0 0 32 32">
                <Path
                    variants={{
                        closed: {
                            d: "M 0 1 L 32 1", // hamburger
                        },
                        open: {
                            d: "M 0 32 L 32 0", // close
                        },
                    }}
                    transition={{
                        type: "ease-in-out",
                    }}
                />
                <Path
                    d="M 0 16 L 32 16"
                    variants={{
                        closed: {
                            opacity: 1, // hamburger
                        },
                        open: {
                            opacity: 0, // close
                        },
                    }}
                    transition={{ duration: 0.1 }}
                />
                <Path
                    variants={{
                        closed: {
                            d: "M 0 31 L 32 31", // hambuger
                        },
                        open: {
                            d: "M 0 0 L 32 32", // close
                        },
                    }}
                    transition={{
                        type: "ease-in-out",
                    }}
                />
            </svg>
        </button>
    );
};

Hamburger.displayName = "Hamburger";

export default Hamburger;
