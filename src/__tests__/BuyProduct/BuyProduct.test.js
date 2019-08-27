import React,{Component} from 'react';
import { shallow } from 'enzyme';
import BuyProduct from '../../Components/BuyProduct/BuyProduct';


describe('when the home component is called',()=>{
    let wrapper;
    let state={
        productId: 1
    }
    beforeEach(()=>{
    wrapper=shallow(<BuyProduct location={state}/>);
    });
    it('should render the render method',()=>{
        expect(wrapper).toHaveLength(1);
    });
   
})

