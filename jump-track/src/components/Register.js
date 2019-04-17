import React from "react";
import { Button, FormGroup, Label, Input } from "reactstrap";
import "./Register.css";
import { register } from "../actions";
import { connect } from "react-redux";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      height: undefined || 0,
      jumpHeight: undefined || 0
    };
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  register = e => {
    e.preventDefault();
    let stateObj = this.state;
    stateObj.height = parseInt(this.state.height, 10);
    stateObj.jumpHeight = parseInt(this.state.jumpHeight, 10);
    this.props.register(stateObj).then(() => {
      this.props.history.push("/login");
    });
  };

  // logOut = () => {
  //   localStorage.removeItem("token");
  // };

  render() {
    const { username, password, height, jumpHeight } = this.state;
    const { handleChange } = this;
    return (
      <div>
        <form onSubmit={this.register} className="form">
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="text"
              value={username}
              name="username"
              onChange={handleChange}
              placeholder="enter your email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Password</Label>
            <Input
              type="text"
              value={password}
              name="password"
              onChange={handleChange}
              placeholder="enter your password"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Height</Label>
            <Input
              type="number"
              value={height}
              name="height"
              onChange={handleChange}
              placeholder="enter your height"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Jump Height</Label>
            <Input
              type="number"
              value={jumpHeight}
              name="jumpHeight"
              onChange={handleChange}
              placeholder="enter your jump-height"
            />
          </FormGroup>
          <Button className="signBtn">Submit</Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ signingUp, error }) => ({
  error,
  signingUp
});

export default connect(
  mapStateToProps,
  { register }
)(Register);
