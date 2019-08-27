import React,{Component} from 'react';
import { shallow } from 'enzyme';
import ProductDetails from '../../Components/ProductDetails/ProductDetails';

describe('when the home component is called',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper=shallow(<ProductDetails/>);
    });
    it('should render the render method',()=>{
        expect(wrapper).toHaveLength(1);
    });
   
})

