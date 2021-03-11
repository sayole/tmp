import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import practice from "./practice";
import SideBar from "./componentSrc/SideBar";
import TopBar from "./componentSrc/TopBar";
import Grid from '@material-ui/core/Grid';
import FirstPage from "./componentSrc/FirstPage";
import SecondPage from "./componentSrc/SecondPage";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    component: {
        margin: theme.spacing(3),
        paddingTop:theme.spacing(5),
    },
}));

function App() {
    const classes = useStyles();
    const [page,setPage] = useState("member page");
    return (
        <Grid container className={classes.root}  spacing={2}>
            <Grid xs={12}>
                <TopBar/>
            </Grid>
            <Grid  xs={2}>
                <SideBar setPage={setPage}/>
            </Grid>
            <Grid className={classes.component} xs={9}>
                <FirstPage/>
                <SecondPage/>
            </Grid>
        </Grid>
    );
}

export default App;