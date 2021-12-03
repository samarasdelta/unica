import React from "react";
import PropTypes from "prop-types";
import AppBarCustom from "../tools/AppBarCustom";

const Group = (props) => {
  return (
    <div>
      <AppBarCustom />
      <div>
        <br />
        <br />
        <br />
        <h3>{`Team Title: ${props.group.groupTitle}`}</h3>
      </div>
    </div>
  );
};

export default Group;

Group.propTypes = {
  id: PropTypes.string,
  group: PropTypes.shape({
    groupTitle: PropTypes.string,
  }),
};
