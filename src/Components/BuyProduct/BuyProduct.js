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
            emailIdError:'',
            age: '',
            ageError:'',
            productId: '',
            productIdError:'',
            mobileNo: '',
            mobileNoError:'',
            address: '',
            addressError:'',
            name:'',
            nameError:'',
            pan:'',
            panError:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleBuy=this.handleBuy.bind(this);
    }
    componentDidMount(){
       let productId=this.props.location.state.productId? this.props.location.state.productId: ''
        this.setState({
            productId: productId
        })
        console.log("Product id after set state", productId)
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
                const { emailId, age, pan, address,mobileNo,name, productId } = this.state
                const product = {
                    productId: productId ,
                    name: name,
                    age: parseInt(age),
                    email: emailId,
                    phone: mobileNo,
                    address:address
                };
                console.log("product details for buy", product)
                // localStorage.setItem("userId", '1234')
                // this.props.validateUser(true);
                // this.props.history.push('/home')
                this.getData(product).then((response) => {
                    if (response.status === 200 && response.data.status === "SUCCESS") {
                        console.log(response.data)
                        alert(response.data.message)

                        this.props.history.push({
                            pathname: '/productDetails',
                        })
                    } else {
                    }
                }).catch(err=>{
                    alert('Error in purchasing the product.Please try again .')
                })
            }
        });

    }
    getData(product) {
        // let res={
        //     status: 200,
        //     data: {
        //         status: "SUCCESS",
        //         roleId: 3
        //     }
        // }
        return new Promise((resolve, reject) => {
            axios.post(`${url.url}/buy`, product)
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
           ageError:'',
           nameError:'',
           emailIdError:'',
           addressError:'',
           productIdError:'',
           panError:''
        }

        if (this.state.emailId.indexOf('@') !== -1) {
        } else {
            isValid = false;
            errors.emailIdError = 'Email Id should be in proper format'
        }
        if(this.state.emailId===''||this.state.name===''||this.state.pan===''||this.state.mobileNo===''){
            isValid = false;
            errors.emailIdError = 'Name, emailId , PAN and mobile number are mandatory fields'
        }
        // if (this.state.age < 18) {
        // } else {
        //     isValid = false;
        //     errors.ageError = 'You should be atleast 18 year old to purchase products'
        // }

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
                <form className="buyform">
                    <div >
                        <span className="pull-right text-danger"><small>{this.state.emailIdError}</small></span>
                        <div className="labelinput">
                            <label htmlFor="emailId">Email Id</label>&nbsp;
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
                    <div >
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
                    <div >
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
                    <div >
                        <span className="pull-right text-danger"><small>{this.state.mobileNoError}</small></span>
                        <div className="labelinput">
                        <label htmlFor="mobileNo">Phone</label>&nbsp;&nbsp;
                        <input
                            type="test"
                            id="mobileNo"
                            onChange={this.handleChange}
                            value={this.state.mobileNo}
                            placeholder="Enter the mobileNo" />
                        </div>
                    </div>
                    <div >
                        <span className="pull-right text-danger"><small>{this.state.panError}</small></span>
                        <div className="labelinput">
                        <label htmlFor="pan">PAN</label>&nbsp;&nbsp;
                        <input
                            type="text"
                            id="pan"
                            onChange={this.handleChange}
                            value={this.state.pan}
                            placeholder="Enter the PAN" />
                        </div>
                    </div>
                    <br></br>
                    <button id="submit" type="submit" className="but" onClick={this.handleBuy}>Buy</button>

                    
                </form>
                
            </div>
        )
    }
}

// export default withRouter(withTranslation()(Login));

export default BuyProduct