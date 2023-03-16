import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    showErrMsgFirstName: false,
    showErrMsgLastName: false,
    showLoginSuccess: false,
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurFirstName = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({showErrMsgFirstName: true})
    } else {
      this.setState({showErrMsgFirstName: false})
    }
  }

  onBlurLastName = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({showErrMsgLastName: true})
    } else {
      this.setState({showErrMsgLastName: false})
    }
  }

  submitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state

    if (firstName === '' && lastName !== '') {
      this.setState({showErrMsgFirstName: true, showErrMsgLastName: false})
    } else if (lastName === '' && firstName !== '') {
      this.setState({showErrMsgLastName: true, showErrMsgFirstName: false})
    } else if (lastName === '' && firstName === '') {
      this.setState({showErrMsgFirstName: true, showErrMsgLastName: true})
    } else {
      this.setState({
        showErrMsgFirstName: false,
        showErrMsgLastName: false,
        showLoginSuccess: true,
      })
    }
  }

  onClickAnotherResponse = () => {
    this.setState({
      showLoginSuccess: false,
    })
  }

  renderFormElement = () => {
    const {
      firstName,
      lastName,
      showErrMsgFirstName,
      showErrMsgLastName,
    } = this.state

    return (
      <div className="registration-card">
        <h1 className="heading">Registration</h1>
        <form className="form-container" onSubmit={this.submitForm}>
          <div className="input-field">
            <label htmlFor="firstName">FIRST NAME</label>
            <input
              placeholder="firstName"
              id="firstName"
              type="text"
              value={firstName}
              onBlur={this.onBlurFirstName}
              onChange={this.onChangeFirstName}
            />
            {showErrMsgFirstName && <p>Required</p>}
          </div>

          <div className="input-field">
            <label htmlFor="lastName">LAST NAME</label>
            <input
              placeholder="lastName"
              id="lastName"
              type="text"
              value={lastName}
              onBlur={this.onBlurLastName}
              onChange={this.onChangeLastName}
            />
            {showErrMsgLastName && <p>Required</p>}
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    )
  }

  renderLoginSuccess = () => (
    <div className="success-container">
      <h1 className="heading">Registration</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="successIcon"
      />
      <p>Submitted Successfully</p>
      <button type="button" onClick={this.onClickAnotherResponse}>
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {showLoginSuccess} = this.state
    return (
      <div className="bg-container">
        {showLoginSuccess === true
          ? this.renderLoginSuccess()
          : this.renderFormElement()}
      </div>
    )
  }
}

export default RegistrationForm
