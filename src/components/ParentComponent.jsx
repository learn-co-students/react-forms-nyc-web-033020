import React from 'react';
import Form from './Form'
import DisplayData from './DisplayData'

export default class ParentComponent extends React.Component{
    state = {
        firstName: "",
        lastName: ""
    }
    
    handleFirstNameChange = event => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleLastNameChange = event => {
        this.setState({
        lastName: event.target.value
        })
    }

    render() {
        return(
            <React.Fragment>
                <Form
                    formData={this.state}
                    handleFirstNameChange={this.handleFirstNameChange}
                    handleLastNameChange={this.handleLastNameChange}
                />
                <DisplayData formData={this.state}/>
            </React.Fragment>
        )
    }
}