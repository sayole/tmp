import axios from "axios";

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default axios.create({
    baseURL: "http://localhost:8080/",
    headers: {
        "Content-type": "application/json;charset=utf-8"
    }
});