import React, {Component} from "react";
import {connect} from 'react-redux';
import {Field, reduxForm} from "redux-form";
import {fetchData} from "../actions";
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
        console.log(values.data);
        this.props.fetchData(values.data);
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
                        <Field name="id" component={this.renderInput} type="text" id="id"
                               label="Enter Id"
                               margin="normal"
                        />
                        <Field name="CaseNumber" component={this.renderInput} type="text"
                               id="CaseNumber"
                               label="Enter Case Number"
                               margin="normal"
                        />
                        <Field name="Case_Description" component={this.renderInput} type="text"
                               id="Case_Description"
                               label="Enter Case Description"
                               margin="normal"
                        />
                        <Field name="ClosedDate" component={this.renderInput} type="text"
                               id="ClosedDate"
                               label="Enter Closed Date"
                               margin="normal"
                        />
                        <Field name="CreatedDate" component={this.renderInput} type="text"
                               id="CreatedDate"
                               label="Enter Created Date"
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

DataForm = connect(null, {fetchData})(DataForm);

export default reduxForm({form: 'loginForm'})(DataForm);