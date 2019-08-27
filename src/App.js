import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {withTranslation} from 'react-i18next';
import { HashRouter, Switch, Route } from 'react-router-dom'
import FileUpload from './Components/FileUpload/FileUpload';
import Header from './Components/Header/Header'
import ProductDetails from './Components/ProductDetails/ProductDetails';
import BuyProduct from './Components/BuyProduct/BuyProduct';
import Analysis from './Components/Analysis/Analysis';



class App extends Component {
  constructor(props) {
    super(props);
    // const { i18n } = this.props;
    // i18n.changeLanguage('en');
    this.state={
      isLoggedIn: false,
      data:{}
    }
  }
  redirect=(page, history)=> {
    history.push(page);
  }

  validateUser = (isLoggedIn)=> {
    this.setState({isLoggedIn});
  }
  getuserData =(data,props)=>{
    this.setState({data});
    console.log(data);
  }

  
  render(){
    return (
      <div className="App">  
        <HashRouter>
         <Header isLoggedIn={this.state.isLoggedIn} redirect={this.redirect}/>
          <Switch>
             <Route path='/adminpage/uploadFile' exact component={FileUpload} ></Route> 
             <Route path='/productDetails' exact component={ProductDetails} ></Route> 
             <Route path='/buyProduct' exact component={BuyProduct} ></Route> 
             <Route path='/analysis' exact component={Analysis} ></Route> 
          </Switch> 
         
        </HashRouter>
      </div>
    );

  }
  
}


export default App;
