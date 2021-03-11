import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import service from '../service/TestService';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function FirstPage() {
    const classes = useStyles();
    let [numberState,setNumberState] = useState("asdf");

    const saveClick = () => {
        service.getTest()
            .then(response => {
                setNumberState(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const getClick = () => {
        service.getTest()
            .then(response => {
                setNumberState(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }


    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper} onClick={}>xs=12</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
            </Grid>
        </div>
    );
}
