import React, { Component } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from 'axios'
import url from '../../Config.json'
import './ProductDetails.css'
export class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: [],
            // productList: [{
            //     productId: 1,
            //     productName: "Life Insurance",
            // }, {
            //     productId: 2,
            //     productName: "Vehicle Insurance",

            // },
            // {
            //     productId: 3,
            //     productName: "Health Insurance",

            // },
            // {
            //     productId: 4,
            //     productName: "Platinum Credit Card",

            // },
            // ],
            productListDetailed: [],
            productId: '',
            productName: '',
            proceedbuy: false

        }
        this.onClickAccordion = this.onClickAccordion.bind(this)
        this.handleBuy = this.handleBuy.bind(this)
        // this.onFormSubmit = this.onFormSubmit.bind(this)
        // this.onChange = this.onChange.bind(this)
        // this.fileUpload = this.fileUpload.bind(this)
    }
    componentDidMount() {
        axios.get(`${url.url}/productnames`)
            .then(res => {
                console.log("res inside on clicked accordion", res)
                if (res.status === 200 && res.data.status === "SUCCESS") {
                    console.log("inside success")
                    this.setState({
                        productList: res.data.data
                    }, () => {

                    });
                } else {

                }
            }).catch(err => {

            })
    }
    handleBuy(e, item) {

        this.props.history.push({
            pathname: '/buyProduct',
            search: '?query=productBuy',
            state: { productId: item.productId }
        })
        // axios.post(`${url.url}/order`, stock)
        //     .then(res => {
        //         console.log("res inside handle confirm", res)
        //         if (res.status === 200 && res.data.status === "SUCCESS") {
        //             console.log("inside success")
        //             this.setState({
        //                 orderId: res.data.orderId
        //             }, () => {
        //                 console.log("orderid", this.state.orderId)
        //             });
        //             alert(`Order submitted successfully. Order Id: ${this.state.orderId}`)
        //             this.props.history.push('/home')
        //         } else {

        //         }
        //     }).catch(err => {

        //     })

    }
    onClickAccordion(e, item) {
        console.log(item)
        // this.setState({
        //     productList: this.state.productListDetailed
        // })
        axios.get(`${url.url}/productdescription/${item.productId}`)
            .then(res => {
                console.log("res inside on clicked accordion", res)
                if (res.status === 200 && res.data.status === "SUCCESS") {
                    console.log("inside success")
                    this.setState({
                        productListDetailed: res.data.data
                    }, () => {

                    });
                } else {

                }
            }).catch(err => {

            })

    }
    render() {
        let productDetailedList = this.state.productListDetailed.map((item, i) => {
            console.log("item", item)
            return (
                <div>
                    {item.productDescription}
                    <p className="price">Product Price: {item.productPrice} &nbsp;&nbsp; <Button onClick={(e)=>this.handleBuy(e,item)}>Buy</Button> </p>
                </div>
            )
        }, this);
        let productList = this.state.productList.map((item, i) => {
            console.log("item", item)
            return (
                <Card>
                    <Accordion.Toggle className="prodheading" onClick={(e) => { this.onClickAccordion(e, item) }} as={Card.Header} eventKey={item.productId}>
                        {item.productName}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={item.productId}>
                    <Card.Body>
                        {productDetailedList}
                    </Card.Body>
                    </Accordion.Collapse>
                    {/* <Button onClick={this.handleBuy}>Buy</Button> */}
                </Card>
                // <option key={i} value={item.product}>{item.stockName}</option>
            )
        }, this);
       
        return (
            <div >
                <h2>
                    Product Details
                </h2>
                <div className="productAccordion">
                    <Accordion >
                        {productList}
                    </Accordion>
                </div>

            </div>

        )
    }
}

export default ProductDetails
