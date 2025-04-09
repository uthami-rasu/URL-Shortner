import axios from "axios";

const fetchData = async () => {
    const result = await axios.post(
        "http://localhost:8000/api/v1/bulk-analysis",
        {
            userId: "3",
        }
    );

    return result;
};


export { fetchData }