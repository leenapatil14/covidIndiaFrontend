import React, { Component, PropTypes } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
class DataInfo extends Component {
    constructor(props) {
        super(props);

    }



    render() {
        return (
            <div className="container">

                <Grid container className="alignCenter">

                    <Grid item xs={12} >

                        <Typography variant="body2" color="textSecondary" className="padding10">
                            This website is created using Flask, ReactJS and Material UI and is solely for informational purpose.
                        </Typography>



                    </Grid>
                </Grid>

                <Grid container className="alignCenter" >
                    <Grid item xs={12} >
                        <Typography variant="body1" color="secondary">Authors</Typography>
                    </Grid>
                    <Grid item xs={12} className="padding10">

                        <Typography variant="body2" color="textSecondary" className="padding10">

                            <Link href="https://www.linkedin.com/in/leenamanoharpatil/" variant="p" color="primary" >
                                Leena Manohar Patil
                            </Link>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" className="padding10">

                            <Link href="https://www.linkedin.com/in/aditya-sonawane94/" variant="p" color="primary" >
                                Aditya Sonawane
                            </Link>
                        </Typography>



                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={3} md={3} lg={3}></Grid>
                            <Grid item xs={3} md={3} lg={3}><Divider className="DividerSecondary" /></Grid>
                            <Grid item xs={3} md={3} lg={3}><Divider className="DividerSecondary" /></Grid>
                            <Grid item xs={3} md={3} lg={3}></Grid>
                        </Grid>
                    </Grid>

                </Grid>

                <Grid container className="alignCenter" >
                    <Grid item xs={12} className="padding10">
                        <Typography variant="body1" color="secondary">Data Source
                         Credits</Typography>
                    </Grid>
                    <Grid item xs={12} className="padding10">

                        <Typography variant="body2" color="textSecondary" className="padding10">Data for India Covid Cases (updated daily):</Typography>
                        <Typography className="padding10">
                            <Link href="https://api.rootnet.in/" variant="p" color="primary" >
                                COVID-19 REST API for India
                            </Link>
                        </Typography>


                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={3} md={3} lg={3}></Grid>
                            <Grid item xs={3} md={3} lg={3}><Divider className="DividerSecondary" /></Grid>
                            <Grid item xs={3} md={3} lg={3}><Divider className="DividerSecondary" /></Grid>
                            <Grid item xs={3} md={3} lg={3}></Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className="padding10">

                        <Typography variant="body2" color="textSecondary" className="padding10">Data for World Covid Cases (updated daily):</Typography>
                        <Typography className="padding10">
                            <Link href="https://ourworldindata.org/coronavirus" variant="p" color="primary" >
                                Data on COVID-19 (coronavirus) by Our World in Data
                            </Link>
                        </Typography>


                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={3} md={3} lg={3}></Grid>
                            <Grid item xs={3} md={3} lg={3}><Divider className="DividerSecondary" /></Grid>
                            <Grid item xs={3} md={3} lg={3}><Divider className="DividerSecondary" /></Grid>
                            <Grid item xs={3} md={3} lg={3}></Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className="padding10">

                        <Typography variant="body2" color="textSecondary" className="padding10">Data for Hospitals beds in India:</Typography>
                        <Typography className="padding10">
                            <Link href="https://pib.gov.in/PressReleasePage.aspx?PRID=1539877" variant="p" color="primary" >
                                Ministry of Health and Family Welfare Press Release
                            </Link>
                        </Typography>


                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={3} md={3} lg={3}></Grid>
                            <Grid item xs={3} md={3} lg={3}><Divider className="DividerSecondary" /></Grid>
                            <Grid item xs={3} md={3} lg={3}><Divider className="DividerSecondary" /></Grid>
                            <Grid item xs={3} md={3} lg={3}></Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className="padding10">

                        <Typography variant="body2" color="textSecondary" className="padding10">Data for Indian States Latitude and Longitude:</Typography>
                        <Typography className="padding10">
                            <Link href="https://www.kaggle.com/danishxr/poptable" variant="p" color="primary" >
                                Indian states lat&long Dataset from Kaggle
                            </Link>
                        </Typography>


                    </Grid>
                </Grid>

            </div>
        );
    }
}


export default DataInfo;