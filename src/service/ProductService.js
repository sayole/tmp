import http from "../axios-properties";

const getProductList = () =>{
    return http.get("/ProductList");
};

export default {
    getProductList
};
