import React from "react";
import { motion } from "framer-motion";

const Reveal = ({ children }) => {

    return(
        <div style={{ position: 'relative', width: 'fit-content', height: 'fit-content', overflow: 'hidden'}}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75},
                    visible: { opacity: 1, y: 0},
                }}
                viewport={{
                    once: true
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>
            <motion.div
                variants={{
                    hidden: { left: 0 },
                    visible: { left: '100%' },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ 
                    once: true
                }}
                transition={{ duration: 0.5, ease: 'easeIn' }}
                style={{
                    position: 'absolute',
                    top: 4,
                    bottom: 4,
                    left: 0,
                    right: 0,
                    background: "var(--clr-light-red)",
                    zIndex: 20,
                }}
            />
        </div>
    );
}

export default Reveal;