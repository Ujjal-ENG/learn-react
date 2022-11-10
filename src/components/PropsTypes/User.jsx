"use-Strict";

import React from "react";
import { PropTypes } from "prop-types";

const User = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
      <h3>{props.id}</h3>
    </>
  );
};

User.propTypes = {
  userName: PropTypes.number,
};

export default User;
