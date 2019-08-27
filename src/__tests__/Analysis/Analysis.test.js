import React,{Component} from 'react';
import { shallow } from 'enzyme';
import Analysis from '../../Components/Analysis/Analysis';

describe('when the home component is called',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper=shallow(<Analysis/>);
    });
    it('should render the render method',()=>{
        expect(wrapper).toHaveLength(1);
    });
   
})

