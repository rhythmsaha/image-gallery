import { motion } from "framer-motion";
import React from "react";

const Modal = ({ image, setImage }) => {
    const handleClick = (e) => {
        if (e.target.classList.contains("backdrop")) {
            setImage(null);
        }
        return;
    };

    return (
        <motion.div
            className="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClick}
        >
            <motion.img
                src={image}
                alt="fullscreenPic"
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
                transition={{ delay: 3 }}
            />
        </motion.div>
    );
};

export default Modal;
