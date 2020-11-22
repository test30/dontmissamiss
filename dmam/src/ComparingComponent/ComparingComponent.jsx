import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './ComparingComponent.styles';

import { Button, Heading } from 'evergreen-ui'

const ComparingComponent = (props) => (
  <div className="ComparingComponentWrapper">
    <Heading>Która miss jest atrakcyjniejsza?</Heading>
    {props.missArray.map((e, i) => <Button key={i} onClick={() => vote(i)}>Miss {i}</Button>)}
    {/* {JSON.stringify(props.missArray)} */}
  </div>
);

function vote(id) {
  postVote`Zagłosowałeś na Miss ${id}`
}

function postVote() {
  alert(JSON.stringify([...arguments], null, 4))
}

ComparingComponent.propTypes = {
  // bla: PropTypes.string,
};

ComparingComponent.defaultProps = {
  // bla: 'test',
};

export default ComparingComponent;
