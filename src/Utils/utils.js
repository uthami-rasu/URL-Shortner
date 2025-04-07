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

export { isValidUrl };