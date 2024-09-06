import React from "react";
import { Input, Button } from "reactstrap";
import PropTypes from "prop-types";

const SearchPanel = ({ searchQuery }, handleSearch, toggleForm) => {
  return (
    <div className="d-flex">
      <Input
        placeholder="Enter your serach query"
        className="mr-3"
        value={searchQuery}
        onChange={(event) => handleSearch(event.target.value)}
      />
      <Button color="success" onClick={toggleForm}>
        New
      </Button>
    </div>
  );
};

SearchPanel.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired,
};

export default SearchPanel;
