import React, { Component } from 'react'
import url from '../../Config.json'
import axios from 'axios'
import { BarChart, Bar, XAxis, YAxis, Cell, CartesianGrid, Tooltip, Legend } from 'recharts';
import './Analysis.css'
export class Analysis extends Component {
    constructor(props) {
        super(props)
        this.state = {
            analysisList:[],
            selectAnalysis: 'day'
        }
        this.onChange=this.onChange.bind(this)
    }
    onChange(e){
        console.log("Inside on change", e.target.id, e.target.value)
        this.setState({ [e.target.id]: e.target.value }, () => {
            // localStorage.setItem("data",this.state.emailId)
            axios.get(`${url.url}/analysis/${this.state.selectAnalysis}`)
            .then(res => {
                console.log("res inside selectanalysis", res)
                        this.setState({
                            analysisList: res.data
                        }, () => {
                            console.log("all stock after set state", this.state.analysisList)
                        });
                    
            })
        });
       
    }

    componentDidMount() {
        console.log(this.state)
        axios.get(`${url.url}/analysis/day`)
            .then(res => {
                console.log("res inside component did mount get all day data", res)
                    this.setState({
                        analysisList: res.data
                    }, () => {
                        console.log("all stock after set state", this.state.analysisList)
                    });
            })
    }
    render() {
        return (
            <div>
                <h4>Product sale trends</h4>
                <br></br>
                <h5>This {this.state.selectAnalysis}'s Analysis</h5>
                <br></br>
                <select id="selectAnalysis" onChange={this.onChange}>
                    <option value="day">Today</option>
                    <option value="week">This week</option>
                    <option value="month">This Month</option>
                </select>
                <br></br>
                <div className="chart">
                
                    <BarChart width={600} height={300} data={this.state.analysisList}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <XAxis dataKey="productName" />
                        <YAxis dataKey="count" />
                        <CartesianGrid strokeDasharray="6 6" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="count" stackId="a" fill="#8884d8" />
                        {/* <Bar dataKey="crisilRating" stackId="a" fill="#ffffff" /> */}

                    </BarChart>
                </div>


            </div>

        )
    }
}

export default Analysis
