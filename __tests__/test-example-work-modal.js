import React from 'react'
import { shallow } from 'enzyme'
import ExampleWorkModal from '../js/example-work-modal'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure( {
    adapter: new Adapter()
});

const example = {
    'title': "Work Example",
    'href': "https://example.com",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image': {
       'desc' : "example screenshot of a project involving code",
       'src': "images/example1.png",
       'comment': ""
    }
};

describe("ExampleWorkModal component", () => {

    let closeOpenModalFn = jest.fn();
    let component = shallow(<ExampleWorkModal example={example} open={false} />);
    let openComponent = shallow(<ExampleWorkModal example={example} open={true} closeModal={closeOpenModalFn} />);

    let anchors = component.find("a");

    it("Should contain a single 'a' element", () => {
        expect(anchors.length).toEqual(1);
    })

    it("Should link to our project", ()=> {
        expect(anchors.prop('href')).toEqual(example.href);
    })

    it("Should have the modal class set correctly", () =>{
        expect(component.find(".background--skyBlue").hasClass("modal--closed"));
        expect(openComponent.find(".background--skyBlue").hasClass("modal--open"));
    });

    it("Should should close modal via close button", () =>{
        openComponent.find(".modal__closeButton").simulate('click');
        expect(closeOpenModalFn).toHaveBeenCalled();
    });
})