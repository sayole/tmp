import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import SideBar from "./componentSrc/SideBar";
import TopBar from "./componentSrc/TopBar";
import Grid from '@material-ui/core/Grid';
import FileUploadPage from "./componentSrc/FileUploadPage";
import ProductPage from "./componentSrc/ProductPage";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    // component: {
    //     margin: 'auto',
    //     width: 500,
    //     height: 80,
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     backgroundColor: 'pink',
    // },
    componentContainer: {
        // paddingTop:theme.spacing(5),
        // display: 'flex',

        margin: '30px',
    }
}));

function App() {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}  spacing={2}>
            <Grid xs={12}>
                <TopBar/>
            </Grid>
            <Grid  xs={2}>
                <SideBar/>
            </Grid>
            <Grid className={classes.componentContainer} xs={9}>
                {/*<FileUploadPage/>*/}
                <ProductPage/>
            </Grid>
        </Grid>
    );
}

export default App;