import React from 'react';

class Form extends React.Component {

  seeNames = (event) => {
    event.preventDefault() 
    console.log(this.state)
  }

  render() {
    return (
      <form>
        <input onChange={event => this.props.handleChange(event)} type="text" name="firstName" value={this.props.firstName} />
        <input onChange={event => this.props.handleChange(event)} type="text" name="lastName" value={this.props.lastName} />
      </form>
    )
  }
}

export default Form;