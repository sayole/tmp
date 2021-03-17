import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Divider from "@material-ui/core/Divider";
import TestService from "../service/ProductService";
import FileUploadPage from "./FileUploadPage";
import FileUploadService from "../service/FileUploadService";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 'calc(100%)',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function ProductPage() {
    const classes = useStyles();
    const [productList, setProductList] = useState([
        {
            name:"태윤",
            date:"3월 24일",
            price:"3000원",
        },
        {
            name:"상윤",
            date:"1월 1일",
            price:"5000원",
        }
    ]);

    useEffect(() => {
        getProductList();
    }, []);

    function getProductList(){
        TestService.getProductList()
            .then(foundProduct =>{
                setProductList(foundProduct.data);
            }).catch(e => {
                console.log(e);
        });
    }

    return (
        <div className={classes.root}>
            <List>
                <FileUploadPage/>
                <Divider/>
                {productList &&
                productList.map((product, index) => (
                    <div>
                    <ListItem className={"product-list-item"} key={index}>
                        <ListItemText primary={product.name}/>
                        <ListItemText primary={product.date}/>
                        <ListItemText primary={product.price}/>
                        {/*{openProduct ? <ExpandLess/> : <ExpandMore/>}*/}
                    </ListItem>
                    <Divider/></div>
                ))}
            </List>
        </div>
    );
}
