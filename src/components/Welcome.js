import React from 'react';

// Functional component that displays the lab information
// received from its parent through the props object.
function Welcome(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      <h3>{props.studentId}</h3>
      <h4>{props.studentName}</h4>
      <h5>{props.college}</h5>
    </>
  );
}

export default Welcome;
