import React, { Component } from 'react'
import axios from 'axios'
import url from '../../Config.json'
import { withRouter } from 'react-router-dom';
import './BuyProduct.css'

export class BuyProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailId: '',
            age: '',
            productId: '',
            phone: '',
            address: '',
            name:'',
            pan:'',
            mobileNo:''

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleBuy=this.handleBuy.bind(this);
    }
    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value }, () => {

        });

    }

    handleBuy(e) {
        e.preventDefault()
        this.validate().then((res) => {
            console.log("res", res)
            if (res) {
                const { emailId, password } = this.state
                const user = {
                    emailId: emailId,
                    password: password
                };
                console.log(this.props)
                localStorage.setItem("userId", '1234')
                this.props.validateUser(true);
                this.props.history.push('/home')
                // this.getData(user).then((response) => {
                //     if (response.status === 200 && response.data.status === "SUCCESS") {
                //         this.props.validateUser(true);
                //         localStorage.setItem("userId",response.data.userId)
                //         window.location.replace('http://localhost:3000/#/home')
                //         // this.props.history.push({
                //         //     pathname: '/admindashboard',
                //         //     search: '?query=dashboard',
                //         //     //state:{data: response.data}
                //         //     state: { data: response.data.roleId }
                //         // })
                //     }
                // })
            }
        });

    }
    getData(user) {
        // let res={
        //     status: 200,
        //     data: {
        //         status: "SUCCESS",
        //         roleId: 3
        //     }
        // }
        return new Promise((resolve, reject) => {
            axios.post(`${url.url}/login`, user)
                .then(res => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
        });

    }
    validate() {
        console.log("Inside validate")
        let isValid = true;
        const errors = {
            accountNoError: '',
            passwordError: ''
        }

        if (this.state.emailId.indexOf('@') !== -1) {
            if (this.state.password.length > 4) {
                isValid = true;
            } else {
                isValid = false;
                errors.passwordError = 'Password should be more than 4 characters'
            }
        } else {
            isValid = false;
            errors.emailIdError = 'Email Id should be in proper format'
        }
        if (this.state.emailId === '' || this.state.password === '') {
            isValid = false;
            errors.emailIdError = "Email is mandatory field"
            errors.passwordError = "Password is mandatory field"
        }

        this.setState({
            ...this.state,
            ...errors
        })
        console.log("isValid inside validate", isValid)
        return Promise.resolve(isValid);

    }
    render() {
        let { t } = this.props;
        return (
            <div>
                    <h4>Buy</h4>
                <form className="loginform">
                    <div className="form-group">
                        <span className="pull-right text-danger"><small>{this.state.emailIdError}</small></span>
                        <div className="labelinput">
                            <label htmlFor="emailId">Email Id  </label>&nbsp;
                            <input
                                type="text"
                                id="emailId"
                                name="emailId"
                                onChange={this.handleChange}
                                value={this.state.emailId}
                                
                                placeholder="Enter the email" />
                        </div>
                    </div>
                    <div className="form-group">
                        <span className="pull-right text-danger"><small>{this.state.nameError}</small></span>          
                        <div className="labelinput">
                        <label htmlFor="name">Name </label>&nbsp;&nbsp;
                        <input
                            type="test"
                            id="name"
                            onChange={this.handleChange}
                            value={this.state.name}
                            placeholder="Enter the name" />
                        </div>
                       
                    </div>
                    <div className="form-group">
                        <span className="pull-right text-danger"><small>{this.state.ageError}</small></span>
                        <div className="labelinput">
                        <label htmlFor="age">Age </label>&nbsp;&nbsp;
                        <input
                            type="test"
                            id="age"
                            onChange={this.handleChange}
                            value={this.state.age}
                            placeholder="Enter the age" />
                        </div>
                    </div>
                    <div className="form-group">
                        <span className="pull-right text-danger"><small>{this.state.addressError}</small></span>
                        <div className="labelinput">
                        <label htmlFor="address">Address </label>&nbsp;&nbsp;
                        <textarea
                            id="address"
                            onChange={this.handleChange}
                            value={this.state.address}
                            placeholder="Enter the address" />
                        </div>
                    </div>
                    <div className="form-group">
                        <span className="pull-right text-danger"><small>{this.state.mobileNoError}</small></span>
                        <br></br>
                        <div className="labelinput">
                        <label htmlFor="mobileNo">Mobile Number </label>&nbsp;&nbsp;
                        <input
                            type="test"
                            id="mobileNo"
                            onChange={this.handleChange}
                            value={this.state.mobileNo}
                            placeholder="Enter the mobileNo" />
                        </div>
                    </div>
                    <div className="form-group">
                        <span className="pull-right text-danger"><small>{this.state.panError}</small></span>
                        <br></br>
                        <div className="labelinput">
                        <label htmlFor="mobileNo">PAN number </label>&nbsp;&nbsp;
                        <input
                            type="text"
                            id="pan"
                            onChange={this.handleChange}
                            value={this.state.pan}
                            placeholder="Enter the PAN" />
                        </div>
                    </div>
                    <button id="submit" type="submit" className="but" onClick={this.handleSubmit}>Buy</button>

                </form>
            </div>
        )
    }
}

// export default withRouter(withTranslation()(Login));

export default BuyProduct