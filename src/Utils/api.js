import axios from "axios";
import { auth } from "./firebase";

const RAZZLY_ENDPOINT = "https://razzly-backend.onrender.com";
const fetchShortLinks = async (
    fromDate,
    toDate
) => {
    try {
        const idToken = await auth.currentUser.getIdToken();

        const response = await axios.get(RAZZLY_ENDPOINT + "/api/v1/short-links", {
            headers: {
                Authorization: `Bearer ${idToken}`,
            },
            params: {
                fromDate: fromDate.toISOString(),
                toDate: toDate.toISOString(),
            },
        });

        return response.data;
    } catch (err) {
        console.error("Error fetching short links:", err);
        throw err;
    }
};
;

const fetchData = async (selectedOptions = []) => {

    const idToken = await auth.currentUser.getIdToken()
    const shortUrls = selectedOptions.map((s) => s.value)
    const payload = {

        reqShortUrls: shortUrls.length > 0 ? shortUrls : [],
    };

    const response = await axios.post(
        RAZZLY_ENDPOINT + "/api/v1/bulk-analysis",
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

const API_ENDPOINT = RAZZLY_ENDPOINT + "/api/v1/short_url";
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

export { fetchData, createShortUrl, fetchShortLinks };
