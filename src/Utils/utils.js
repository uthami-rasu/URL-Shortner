import { Bounce, toast } from "react-toastify";

const isValidUrl = (url) => {
    try {
        const parsedUrl = new URL(url);
        if (parsedUrl.protocol === "http:" || parsedUrl.protocol === "https:") {
            return null;
        }
        return { error: "Only HTTP and HTTPS URLs are allowed." };
    } catch (err) {
        return { error: "Please enter a valid URL." };
    }
};
;

const fillMissedDates = (data) => {
    const results = [];

    // Create a map for quick lookup
    const dataMap = new Map();
    data.forEach(item => {

        console.log("item", item)
        dataMap.set(item.date, item.clicks);
    });

    console.log("dm", dataMap);
    // Get today's date
    const today = new Date();
    // today.setHours(0, 0, 0, 0); // set to midnight for consistency

    for (let i = 6; i >= 0; i--) {

        console.log(i);
        const d = new Date(today);
        d.setDate(today.getDate() - i);

        const formattedDate = d.toISOString().slice(0, 10); // format YYYY-MM-DD

        results.push({
            date: formattedDate,
            clicks: dataMap.get(formattedDate) || 0 // if missing, default to 0
        });
    }

    return results;
};


// const cleanData = (data) => {
//     const countryMap = data.reduce((map, item) => {
//         map.set(item.country, (map.get(item.country) || 0) + 1);

//         return map;
//     }, new Map());

//     const referrerMap = data.reduce((map, item) => {
//         map.set(item.referrer, (map.get(item.referrer) ))

//     }, new Map());

//     const formattedData = Array.from(resultMap, ([country, count]) => ({
//         country,
//         clicks: count,
//     }));

//     return formattedData;
// };

const copyToClibBoard = (message) => {
    navigator.clipboard.writeText(message).then(() => {
        console.log('Text copied to clipboard');
        toast.info('Text copied to clipboard', {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });

}

const naNodify = () => {
    toast("Feature Not Available", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
    });
};

export { isValidUrl, fillMissedDates, copyToClibBoard, naNodify };