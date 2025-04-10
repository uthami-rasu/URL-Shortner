import axios from "axios";

const fetchData = async (selectedOptions = []) => {

    const shortUrls = selectedOptions.map((s) => s.value)
    const payload = {
        userId: "3",
        reqShortUrls: shortUrls.length > 0 ? shortUrls : [],
    };

    const response = await axios.post(
        "http://localhost:8000/api/v1/bulk-analysis",
        payload
    );

    return response.data;
};

export { fetchData };
