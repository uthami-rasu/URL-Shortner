const isValidUrl = (url) => {

    const urlPattern = new RegExp('^(https?:\\/\\/)' + // http:// or https://
        '((([a-zA-Z\\d]([a-zA-Z\\d-]*[a-zA-Z\\d])*)\\.)+[a-zA-Z]{2,})' + // domain name
        '(\\:\\d+)?(\\/[-a-zA-Z\\d%@_.~+&:]*)*' + // optional port and path
        '(\\?[;&a-zA-Z\\d%@_.,~+&:=-]*)?' + // optional query string
        '(\\#[-a-zA-Z\\d_]*)?$', 'i'); // optional fragment

    const isValid = urlPattern.test(url);

    if (isValid) {
        return null
    }

    return { error: "Please enter valid url." };


};

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


export { isValidUrl, fillMissedDates };