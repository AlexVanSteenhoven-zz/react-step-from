import React, {Component} from 'react';
import FormUserDetails from './FormUserDetails';

class UserForm extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    address: '',
    zip: '',
    land: ''
  };

  // Creating stepper
  // Proceed to the next step
  nextStep = () => {
    // Destructure code
    const { step } = this.state;
    this.setState({
      step: step + 1
    })
  };

  // Go back to previous step
  previousStep = () => {
    // Destructure code
    const { step } = this.state;
    this.setState({
      step: step - 1
    })
  };

  // Handle field changes
  handleChange = input => e => {
    this.setState({[input]: e.target.value()});
  };

  render() {
    // Destructure Code
    const { step } = this.state;
    const { firstName, lastName, email, city, zip, land } = this.state;
    const values = { firstName, lastName, email, city, zip, land };

    switch (step) {
      case 1:
        return(
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return <h1> FormPersonDetails </h1>
      case 3:
        return <h1> FormConfirm </h1>
      case 4:
        return <h1> Success </h1>
    }
  }
}

export default UserForm;