import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({ setImage }) => {
    const { docs } = useFirestore("images");

    console.log(docs);

    return (
        <div className="img-grid">
            {docs &&
                docs.map((doc) => (
                    <motion.div
                        onClick={() => setImage(doc.url)}
                        className="img-wrap"
                        key={doc.id}
                        layout
                        whileHover={{
                            opacity: 1,
                        }}
                    >
                        <motion.img
                            src={doc.url}
                            alt="uploadedphoto"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                        />
                    </motion.div>
                ))}
        </div>
    );
};

export default ImageGrid;
