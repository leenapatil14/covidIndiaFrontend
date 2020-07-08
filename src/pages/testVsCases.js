import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import Plot from 'react-plotly.js';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Plotly from 'plotly.js';
class TestvsCases extends Component {
    constructor(props) {
        super(props);

    }
    state = {
        tests: null,
        cases: null,
        mapData: null
    };
    componentDidMount() {
        axios.get('https://covid-india-data-dashboard.herokuapp.com/getStatewiseStats').then(res => {
            //console.log(res.data);
            this.setState({
                tests: res.data.stats_data
            })

        }).catch(err => {
            console.log(err)
        });
        axios.get('https://covid-india-data-dashboard.herokuapp.com/getStateMap').then(res => {
            //console.log(res.data);
            this.setState({
                mapData: res.data
            });

            var max_ = Math.max(...this.state.mapData.totalConfirmed);
            var low = 10;
            var high = 45;
            var min_ = Math.min(...this.state.mapData.totalConfirmed);

            var data = [
                {
                    type: "scattermapbox",
                    text: this.state.mapData.text,
                    lon: this.state.mapData.lon,
                    lat: this.state.mapData.lat,
                    marker: { color: "#3f51b5", size: this.state.mapData.totalConfirmed.map(x => (((x - min_) * (high - low)) / (max_ - min_)) + low), min: 5 }
                }
            ];
            console.log(data)
            var layout = {
                dragmode: "zoom",
                mapbox: { style: "open-street-map", center: { lat: 21.30039105, lon: 76.13001949 }, zoom: 3 },
                margin: { r: 0, t: 0, b: 0, l: 0 }
            };

            Plotly.newPlot(graphDiv, data, layout);

        }).catch(err => {
            console.log(err)
        });
        var graphDiv = document.getElementById('statesDiv');

    }


    render() {
        var layout_ = { legend: { font: { size: 6, color: "#000" } } };

        let displaytests = this.state.tests ? (
            <Grid container>
                {this.state.tests.map(state =>
                    <Grid item xs={12} sm={6} md={6} lg={4} className="alignCenter">


                        <h4><center> Summary of {state.State_Name} </center></h4>
                        <Plot data={state.chart}
                            useResizeHandler={true}
                            responsive={true}
                            layout={state.layout}

                        ></Plot>
                    </Grid>


                )

                }
            </Grid>
        ) :
            <div className="padding10per">
                <Typography color="textSecondary">Loading...</Typography>
                <LinearProgress color="secondary" />
            </div>;
        return (
            <div className="padding10">
                <h4><center> Statewise total confirmed cases in India till date</center></h4>
                <div id="statesDiv"></div>
                
                {displaytests}


            </div>

        );
    }
}

TestvsCases.propTypes = {

};

export default TestvsCases;