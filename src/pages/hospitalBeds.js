import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import Plot from 'react-plotly.js';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
class HospitalBeds extends Component {
    constructor(props) {
        super(props);

    }
    state = {
        hospData: null,
    };
    componentDidMount() {
        axios.get('https://covid-india-data-dashboard.herokuapp.com/getHospitals').then(res => {
            //console.log(res);
            this.setState({
                hospData: res.data
            })
        }).catch(err => {
            console.log(err)
        })
    }


    render() {
        let displayhosps = this.state.hospData ? (
            <div>
                <h4><center>Summary of number of total beds available v/s Confirmed cases</center></h4>

                <div className="alignCenter">
                    <Plot data={this.state.hospData.chart}
                        useResizeHandler={true}
                        responsive={true}
                        layout={this.state.hospData.layout}

                    ></Plot>
                </div>

            </div>
        ) :
            <div className="padding10per">
                <Typography color="textSecondary">Loading...</Typography>
                <LinearProgress color="secondary" />
            </div>;
        return (
            <Grid container>
                <Grid item sm={12} xs={12}>
                    <div>{displayhosps}</div>
                </Grid>
                <Grid item xs={12} >
                    <Grid container className="alignCenter">
                        <Grid item xs={4} md={4} lg={4}></Grid>
                        <Grid item xs={4} md={4} lg={4}>
                            <Typography variant="body2" color="textSecondary" className="padding10">
                                Considered Statewise number of hospital beds in Public, AYUSH, Minsitry of Defence, and Employees State Insurance Corporation Hospitals.
                        </Typography>
                        </Grid>
                        <Grid item xs={4} md={4} lg={4}></Grid>
                    </Grid>



                </Grid>

            </Grid>
        );

    }
}

HospitalBeds.propTypes = {

};

export default HospitalBeds;