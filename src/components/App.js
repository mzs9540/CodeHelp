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
                {this.props.data}
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