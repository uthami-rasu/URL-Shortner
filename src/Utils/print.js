


import { toast, Bounce } from "react-toastify";
const print = (message) => {
    toast.success((message || "Short Link Created!🚀"), {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });
}

export { print }