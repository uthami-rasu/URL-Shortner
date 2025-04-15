import axios from "axios";
import { auth } from "./firebase";
import { header } from "framer-motion/client";


const fetchUrlNames = async () => {

    try {
        const idToken = await auth.currentUser.getIdToken()
        const response = await axios.get("http://localhost:8000/api/v1/geturl-names", {
            headers: {
                Authorization: "Bearer" + idToken
            }
        })

        return response.data;
    }
    catch (err) {
        console.error(err)
    }

}
const fetchData = async (selectedOptions = []) => {

    const idToken = await auth.currentUser.getIdToken()
    const shortUrls = selectedOptions.map((s) => s.value)
    const payload = {

        reqShortUrls: shortUrls.length > 0 ? shortUrls : [],
    };

    const response = await axios.post(
        "http://localhost:8000/api/v1/bulk-analysis",
        payload, {
        headers: {
            Authorization: "Bearer " + idToken
        }
    }
    );

    return response.data;
};


// main api

// 1. url convertion 

const API_ENDPOINT = "http://localhost:8000/api/v1/short_url";
const createShortUrl = async (url, idToken, title) => {
    try {

        const response = await axios.post(API_ENDPOINT, {
            longUrl: url,
            title: title

        }, {
            headers: {
                Authorization: `Bearer ${idToken}`,
                'Content-Type': 'application/json'
            }
        })
        console.log(response)
        return response;
    } catch (err) {
        console.error(err)
    }

}

export { fetchData, createShortUrl };
