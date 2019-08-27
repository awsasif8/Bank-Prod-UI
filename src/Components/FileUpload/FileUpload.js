import React, { Component } from 'react'
import axios, { post } from 'axios';
import url from '../../Config.json'
import './FileUpload.css'
class FileUpload extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null
        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.fileUpload = this.fileUpload.bind(this)
    }
    onFormSubmit(e) {
        e.preventDefault() // Stop form submit
        console.log(this.state.file)
        if (this.state.file.name !== 'product_catalog.xlsx') {
            alert('File name should be  product_catalog')
        } else if(this.state.file.name.indexOf('xlsx')===-1){
            alert('Only .xlsx format is supported')
        }
        this.fileUpload(this.state.file).then((response) => {
            console.log(response.data);
            alert(`File uploaded successfully`)
        })
    }
    onChange(e) {
        this.setState({ file: e.target.files[0] })
    }
    fileUpload(file) {
        return new Promise((resolve, reject) => {
            const formData = new FormData();
            formData.append('file', file)
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }
            axios.post(`${url.url}/uploadfile`, formData, config)
                .then((res) => {
                    console.log(res)
                    return resolve(res)
                })
                .catch(err=>{
                    alert(`Error in uploading file ${err}`)
                })
        })

    }

    render() {
        return (
            <form id="uploadform" onSubmit={this.onFormSubmit}>
                <br></br>
                <h4>Upload Product Catalogue</h4>
                <br></br>
                <div className="labelinput">
                <input className="in" type="file" onChange={this.onChange} />
                <button type="submit">Upload</button>
                </div>
            </form>
        )
    }
}



export default FileUpload