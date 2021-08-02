import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";
import Title from "./components/Title";
import UploadForm from "./components/UploadForm";

function App() {
    const [image, setImage] = useState(null);

    return (
        <div className="App">
            <Title />
            <UploadForm />
            <ImageGrid setImage={setImage} />
            <AnimatePresence>
                {image && <Modal image={image} setImage={setImage} />}
            </AnimatePresence>
        </div>
    );
}

export default App;
