import React from "react";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import {withStyles} from '@material-ui/core/styles';
import DateGroup from './DateGroup';
import TypeGroup from './TypeGroup';
import Chart from './Chart';
import {DateFilter, TypeFilter} from "./actions/index";

let style = theme => ({
    paper: {
        padding: 10,
        width: 500
    },
    group: {
        position: "relative"
    },
    typeGroup: {
        position: "absolute",
        top: 270,
        right: 80
    },
    dateGroup: {
        paddingLeft: 40
    }
});

const dateData = [
    {label: "Week", filter: DateFilter.WEEK},
    {label: "Month", filter: DateFilter.MONTH},
    {label: "Quarter", filter: DateFilter.QUARTER},
    {label: "Year", filter: DateFilter.YEAR},
    {label: "Max", filter: DateFilter.MAX}
];

const typeData = [
    {label: 'Yield', filter: TypeFilter.YIELD},
    {label: 'Price', filter: TypeFilter.PRICE},
    {label: 'Spread', filter: TypeFilter.SPREAD},
];

const Card = ({classes}) => {
    return <Paper className={classes.paper}>
        <Typography variant="headline">NII CAPITAL 7.625 21</Typography>
        <Typography variant="caption">US67021BAE92</Typography>
        <Typography variant="caption">NII CAPITAL CORP, Telecommunication, NR, till
            01.04.2016</Typography>
        <Divider/>
        <div className={classes.group}>
            <Grid container alignContent='center' justify='center'>
                <DateGroup items={dateData}/>
            </Grid>

            <Chart/>
            <div className={classes.typeGroup}>
                <TypeGroup items={typeData}/>
            </div>
        </div>
    </Paper>
};

export default withStyles(style)(Card);