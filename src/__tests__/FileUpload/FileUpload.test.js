import React,{Component} from 'react';
import { shallow } from 'enzyme';
import FileUpload from '../../Components/FileUpload/FileUpload';

describe('when the home component is called',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper=shallow(<FileUpload/>);
    });
    it('should render the render method',()=>{
        expect(wrapper).toHaveLength(1);
    });
    it('should have called handle file upload', () => {
        const spy = jest.spyOn(wrapper.instance(), 'onFormSubmit');
        wrapper.instance().forceUpdate();
        wrapper.find('#uploadform').simulate('click',{
          preventDefault: () => {
          }
         });
        expect(spy).toHaveBeenCalled();
      });
   
   
})

