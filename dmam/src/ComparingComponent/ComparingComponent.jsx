import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './ComparingComponent.styles';

import { Button, Heading } from 'evergreen-ui'

const ComparingComponent = (props) => (
  <div className="ComparingComponentWrapper">
    <Heading>Która miss jest atrakcyjniejsza?</Heading>
    <Button>Miss 1</Button>
    <Button>Miss 2</Button>
  </div>
);

ComparingComponent.propTypes = {
  // bla: PropTypes.string,
};

ComparingComponent.defaultProps = {
  // bla: 'test',
};

export default ComparingComponent;
