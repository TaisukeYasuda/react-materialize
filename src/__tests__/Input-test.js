jest.dontMock('../Input');
jest.dontMock('../constants');

describe('Input', function() {
  var React = require('react'),
      ReactDOM = require('react-dom'),
      TestUtils = require('react-addons-test-utils'),
      Input = require('../Input'),
      instance = null;

  it('should render a text field by default', function() {
      instance = TestUtils.renderIntoDocument(<Input />);
      var input = TestUtils.findRenderedDOMComponentWithTag(instance, 'input');
      input = ReactDOM.findDOMNode(input);
      expect(input.nodeName).toBe('INPUT');
      expect(input.getAttribute('type')).toBe('text');
  });

  it('should render a textarea when type is textarea', function() {
      instance = TestUtils.renderIntoDocument(<Input type='textarea'/>);
      var textarea = TestUtils.findRenderedDOMComponentWithTag(instance, 'textarea');
      expect(textarea).toBeDefined();
  });

  it('should render a select element when type is select', function() {
      instance = TestUtils.renderIntoDocument(
        <Input type='select' defaultValue='v'>
            <option value='v'/>
            <option value='w'/>
        </Input>
      );
      var select = TestUtils.findRenderedDOMComponentWithTag(instance, 'select');
      expect(ReactDOM.findDOMNode(select).nodeName).toBe('SELECT');
  });
});
