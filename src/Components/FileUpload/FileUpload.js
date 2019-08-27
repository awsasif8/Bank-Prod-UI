import React, {Component} from 'react'
import axios, { post } from 'axios';
import url from '../../Config.json'
import './FileUpload.css'
class FileUpload extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      file:null
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }
  onFormSubmit(e){
    e.preventDefault() // Stop form submit
    console.log(this.state.file)
    if(this.state.file.name.indexOf('xlsx')==-1){
        alert('Only xlsx file format is supported')
    }
    this.fileUpload(this.state.file).then((response)=>{
      console.log(response.data);
    })
  }
  onChange(e) {
    this.setState({file:e.target.files[0]})
  }
  fileUpload(file){
    const formData = new FormData();
    formData.append('file',file)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  post(url, formData,config)
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <h2>File Upload</h2>
        <br></br>
        <input type="file" onChange={this.onChange} />
        <button  className="but" type="submit">Upload</button>
      </form>
   )
  }
}



export default FileUpload