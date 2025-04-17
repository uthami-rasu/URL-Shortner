const cardData = [
    {
        imgSrc:
            "https://docrdsfx76ssb.cloudfront.net/static/1743110909/pages/wp-content/uploads/2024/05/icon_paying-customers.svg",
        title: "500K+",
        desciption: "Global paying customers",
    },
    {
        imgSrc:
            "https://docrdsfx76ssb.cloudfront.net/static/1743110909/pages/wp-content/uploads/2024/05/icon_codes-links-created.svg",
        title: "256M",
        desciption: "Links & QR Codes created monthly",
    },
    {
        imgSrc:
            "https://docrdsfx76ssb.cloudfront.net/static/1743110909/pages/wp-content/uploads/2024/05/icon_integrations.svg",
        title: "800+",
        desciption: "App integrations",
    },
    {
        imgSrc:
            "https://docrdsfx76ssb.cloudfront.net/static/1743110909/pages/wp-content/uploads/2024/05/icon_connections-monthly.svg",
        title: "10B",
        desciption: "Connections(clicks & scans monthly)",
    },
];

const COLORS_PALETTE_1 = ["#2563EB", "#38BDF8", "#22C55E", "#FB923C", "#EF4444"];

const COLORS_PALETTE_2 = ["#14B8A6", "#FACC15", "#A855F7", "#F43F5E"]


const BAR_COLORS = [
    "#2563EB", "#38BDF8", "#14B8A6", "#22C55E",
    "#A3E635", "#FACC15", "#FB923C", "#F43F5E",
    "#A855F7", "#6366F1"
];



const demoVisitorsData = [
    { name: 'Google', value: 400 },
    { name: 'Facebook', value: 300 },
    { name: 'Instagram', value: 200 },
    { name: 'Twitter', value: 100 },
    { name: 'LinkedIn', value: 50 }
];


const demoCountryData = [
    { name: 'United States', value: 1200 },
    { name: 'India', value: 950 },
    { name: 'Germany', value: 700 },
    { name: 'Brazil', value: 500 },
    { name: 'Australia', value: 350 }
];

const demoDeviceData = [
    { name: 'Desktop', value: 1500 },
    { name: 'Mobile', value: 2200 },
    { name: 'Tablet', value: 600 },
    { name: 'Smart TV', value: 150 },
    { name: 'Console', value: 50 }
];
const demoBrowserData = [
    { name: 'Chrome', value: 1800 },
    { name: 'Safari', value: 800 },
    { name: 'Firefox', value: 400 },
    { name: 'Edge', value: 300 },
    { name: 'Opera', value: 100 }
];

const qrConfig = {
    type: "canvas",
    shape: "square",
    width: 250,
    height: 250,
    data: "",
    margin: 5,
    qrOptions: {
        typeNumber: "0",
        mode: "Byte",
        errorCorrectionLevel: "Q",
    },
    imageOptions: {
        saveAsBlob: true,
        hideBackgroundDots: true,
        imageSize: 0.3,
        margin: 0,
    },
    dotsOptions: {
        type: "rounded",
        color: "#000",
        roundSize: true,
    },
    backgroundOptions: {
        round: 0,
        color: "#ffffff",
    },
    image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Red_trademark.svg/1024px-Red_trademark.svg.png",

    cornersSquareOptions: {
        type: "rounded",
        color: "red",
    },
    cornersDotOptions: {
        type: "",
        color: "red",
    },
};


export { qrConfig, cardData, COLORS_PALETTE_1, COLORS_PALETTE_2, BAR_COLORS, demoVisitorsData, demoCountryData, demoBrowserData, demoDeviceData };
