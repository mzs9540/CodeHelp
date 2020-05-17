import React, {Component} from "react";
import {connect} from 'react-redux';
import {Field, reduxForm} from "redux-form";
import {fetchData, fetchDes} from "../actions";
import {Container, TextField, Fab, Box} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import {Typography, Divider} from "@material-ui/core";

class DataForm extends Component {

    renderInput = ({input, type, id, label,margin}) => {
        return <Box>
            <TextField {...input} label={label}  id={id} margin={margin} type={type}/>
        </Box>
    };

    onSubmit = (values) => {
        this.props.fetchData(values);
    };

    onSubmitDes = (values) => {
        this.props.fetchDes(values);
    };

    render() {
        return (
            <Container maxWidth='sm'>
                <Paper className='border-decorate' elevation={3}
                       style={{textAlign: 'center', padding: '30px'}}>
                    <Typography variant='h3'>Enter Data</Typography>
                    <Divider/>
                    <br/>
                    <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                        <Field name="CaseNumber" component={this.renderInput} type="text"
                               id="CaseNumber"
                               label="Enter Case Number"
                               margin="normal"
                        />
                        <Fab variant="extended" aria-label="Submit" type='submit'
                             className='button-decorate'>
                            Submit
                        </Fab>
                    </form>
                    <br/>
                    <form onSubmit={this.props.handleSubmit(this.onSubmitDes)}>
                        <Field name="Case_Description" component={this.renderInput} type="text"
                               id="Case_Description"
                               label="Enter Case Description"
                               margin="normal"
                        />
                        <Fab variant="extended" aria-label="Submit" type='submit'
                             className='button-decorate'>
                            Submit
                        </Fab>
                    </form>
                </Paper>
            </Container>
        )
    }
}

DataForm = connect(null, {fetchData, fetchDes})(DataForm);

export default reduxForm({form: 'loginForm'})(DataForm);