import React, { Component } from 'react'
import Accordion from 'react-bootstrap/Accordion'
export class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null
        }
        // this.onFormSubmit = this.onFormSubmit.bind(this)
        // this.onChange = this.onChange.bind(this)
        // this.fileUpload = this.fileUpload.bind(this)
    }
    render() {
        return (
            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Click me!
      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            Click me!
      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        )
    }
}

export default ProductDetails
