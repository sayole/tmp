import React, {useState} from 'react';
// import './SideBar.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ListSubheader from '@material-ui/core/ListSubheader';

const useStyles = makeStyles((theme) => ({
    SideBar: {
        width: '30%',
        maxWidth: 300,
        minWidth: 200,
    },
    BigMenu: {

    },
    nested:{
        paddingLeft: theme.spacing(4),
    }
}));

function SideBar() {
    const classes = useStyles();
    const [openProduct, setOpenProduct] = React.useState(true);
    const [openStaff, setOpenStaff] = React.useState(true);
    const [openOrder, setOpenOrder] = React.useState(true);
    const [openBusiness, setOpenBusiness] = React.useState(true);

    const productClick = () => {
        setOpenProduct(!openProduct);
    };

    const staffClick = () => {
        setOpenStaff(!openStaff);
    };

    const orderClick = () => {
        setOpenOrder(!openOrder);
    };

    const businessClick = () => {
        setOpenBusiness(!openBusiness);
    };

    return (
        <div className={classes.SideBar} subheader={
            <ListSubheader component="div" id="nested-list-subheader">
                Nested List Items
            </ListSubheader>
        }>
            <List component="nav" aria-label="">
                <ListItem button onClick={()=>{productClick();}}>
                    <ListItemText primary="상품"/>
                    {openProduct ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>
                <Collapse in={!openProduct} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="상품조회" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="상품관리" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="상품통계" />
                        </ListItem>
                    </List>
                </Collapse>

                <Divider/>

                <ListItem button onClick={staffClick}>
                    <ListItemText primary="직원"/>
                    {openStaff ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>
                <Collapse in={!openStaff} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="직원조회" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="직원관리" />
                        </ListItem>
                    </List>
                </Collapse>

                <Divider/>

                <ListItem button onClick={orderClick}>
                    <ListItemText primary="주문" />
                    {openOrder ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>
                <Collapse in={!openOrder} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="주문조회" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="주문관리" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="주문통계" />
                        </ListItem>
                    </List>
                </Collapse>

                <Divider/>

                <ListItem button onClick={businessClick}>
                    <ListItemText primary="업체" />
                    {openBusiness ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>
                <Collapse in={!openBusiness} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="생산업체" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="판매업체" />
                        </ListItem>
                    </List>
                </Collapse>
            </List>
        </div>
    );
}
export default SideBar;