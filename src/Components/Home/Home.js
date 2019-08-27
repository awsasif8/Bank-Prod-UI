import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import ProductDetails from '../ProductDetails/ProductDetails';

export class Home extends Component {
    render() {
        return (
            <div>
                <Tabs >
                    <TabList>
                        <Tab>Products List</Tab>
                        <Tab>Analysis</Tab>
                    </TabList>
                    <TabPanel>
                        <ProductDetails></ProductDetails>
                    </TabPanel>
                    <TabPanel>
                            Some Content        
                    </TabPanel>
                    
                </Tabs>
            </div>
        )
    }
}

export default Home
