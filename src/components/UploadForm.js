import { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const suppoertedTypes = ["image/png", "image/jpeg"];

    const changeHandler = (event) => {
        const selected = event.target.files[0];

        if (selected && suppoertedTypes.includes(selected.type)) {
            setFile(selected);
            setError(null);
        } else {
            setFile(null);
            setError("Please select a valid file type (png or jpeg)");
        }
    };

    console.log(file);
    console.log(error);

    return (
        <form>
            <label>
                <input type="file" onChange={changeHandler} />
                <span>+</span>
            </label>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    );
};

export default UploadForm;
