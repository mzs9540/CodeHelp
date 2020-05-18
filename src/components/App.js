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
                {console.log(this.props.data)}
                {this.props.data.response ? this.props.data.response.map(obj => {
                    return (
                        <>
                            <Typography variant='subtitle2'>
                                Case Number: {obj.CaseNumber}
                            </Typography>
                            <Typography variant='subtitle2'>
                                Case Description: {obj.Case_Description__c}
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