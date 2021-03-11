import http from "../axios-properties";

const getTest = () =>{
    return http.get("/tutorials");
};

export default {
    getTest
};
