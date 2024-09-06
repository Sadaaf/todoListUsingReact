import React from "react";
import SearchPanel from "./search-panel";
import PropTypes from "prop-types";

const Controller = ({ searchQuery, handleSearch, toggleForm }) => (
  <div>
    <SearchPanel
      searchQuery={searchQuery}
      handleSearch={handleSearch}
      toggleForm={toggleForm}
    />
  </div>
);

Controller.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired,
};

export default Controller;
