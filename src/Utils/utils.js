const isValidUrl = (url) => {
    try {
        new URL(url);
        return null;

    } catch (err) {

        return { error: "Please enter valid url." };

    }

};

export { isValidUrl };