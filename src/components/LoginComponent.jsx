import React, { Component } from 'react'
import LoginValidate from '../services/LoginValidate';
import '../style/LoginComponent.css';


class LoginComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            apiError: false,
            errorMssg: '',
        }
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.checkEmployee = this.checkEmployee.bind(this);
    }

    // step 3
    /*componentDidMount() {
        this.setState({ errorMssg: '' });
    }*/
    checkEmployee = async (e) => {
        e.preventDefault();
        let employee = { username: this.state.username, password: this.state.password };
        console.log('employee => ' + JSON.stringify(employee));


        const result = await LoginValidate.VerifyEmployee(employee);
        if (result) {
            this.setState({ apiError: true, errorMssg: result });
        }

    }

    changeUsernameHandler = (event) => {
        this.setState({ apiError: false, errorMssg: '' });
        this.setState({ username: event.target.value });
    }

    changePasswordHandler = (event) => {
        this.setState({ apiError: false, errorMssg: '' });
        this.setState({ password: event.target.value });
    }


    render() {
        return (
            <div className="inputComponent">
                <div>
                    <label>UserName</label>
                    <input placeholder="Username" name="username" className="form-control"
                        style={{ borderColor: this.state.apiError && 'red', backgroundColor: this.state.apiError && 'rgb(218, 152, 132)' }} onChange={this.changeUsernameHandler} />
                </div>
                <div>
                    <label>Password</label>
                    <input placeholder="Password" type = "password" name="password" className="form-control"
                        style={{ borderColor: this.state.apiError && 'red', backgroundColor: this.state.apiError && 'rgb(218, 152, 132)' }} onChange={this.changePasswordHandler} />
                </div>
                <button className="btn" onClick={this.checkEmployee}>Submit</button>
                {this.state.apiError && <span style={{ color: "red", fontSize: "20px", float: "right" }}>{this.state.errorMssg}</span>}
            </div>
        )
    }
}


export default LoginComponent
