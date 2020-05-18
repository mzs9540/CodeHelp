import React, { Component } from 'react';
import {connect} from "react-redux";
import DataForm from "./Form";
import {fetchData} from "../actions";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";


class App extends Component {


    render() {
        return (
            <>
            <DataForm/>
            <br/>
            <Paper elevation={3}>
                {this.props.data ? this.props.data.map(obj => {
                    return (
                        <>
                            <Typography variant='subtitle2'>
                                Case Number: {obj.CaseNumber}
                            </Typography>
                            <Typography variant='subtitle2'>
                                Case Description: {obj.Case_Description}
                            </Typography>
                            <Typography variant='subtitle2'>
                                Closed Date: {obj.ClosedDate}
                            </Typography>
                            <Typography variant='subtitle2'>
                                Created Date: {obj.CreatedDate}
                            </Typography>
                            <Typography variant='subtitle2'>
                                Id: {obj.Id}
                            </Typography>
                        </>

                    )
                }) : null}
            </Paper>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps, {fetchData})(App);