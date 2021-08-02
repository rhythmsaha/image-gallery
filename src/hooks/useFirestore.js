import { useState, useEffect } from "react";
import { db } from "../firebase";

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsubscribe = db
            .collection(collection)
            .orderBy("createdAt", "desc")
            .onSnapshot((snapshot) => {
                setDocs(
                    snapshot.docs.map((doc) => {
                        return {
                            ...doc.data(),
                            id: doc.id,
                        };
                    })
                );
            });

        return () => unsubscribe();
    }, [collection]);

    return { docs };
};

export default useFirestore;
