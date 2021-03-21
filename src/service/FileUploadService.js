import http from "../axios-properties";

// const upload = (file, onUploadProgress) => {
//     let formData = new FormData();
//     formData.append("file", file);
//     return http.post("/upload", formData, {
//         headers: {
//             "Content-Type": "multipart/form-data",
//         },
//         onUploadProgress,
//     });
// };

const upload = (file, onUploadProgress) => {
    let formData = new FormData();
    let site = 1;
    formData.append("orderinfoXls", file);
    return http.post(`api/post/orders/${site}`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
        onUploadProgress,
    });
};

// const upload = (file, onUploadProgress) => {
//     let formData = new FormData();
//     let site = "naver";
//     formData.append("file", file);
//     return http.post("/api/post/orders/${site}", formData, {
//         headers: {
//             "Content-Type": "multipart/form-data",
//             "site": "naver",
//         },
//         onUploadProgress,
//     });
// };

const getFiles = () => {
    return http.get("/files");
};

export default {
    upload,
    getFiles,
};
