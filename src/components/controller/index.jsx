import React from "react";
import SearchPanel from "./search-panel";
import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";
import FilterController from "./filter-controller";
import ViewController from "./view-controller";
import BulkController from "./bulk-controller";

const Controller = ({
  searchQuery,
  handleSearch,
  toggleForm,
  view,
  changeView,
  clearCompleted,
  clearSelected,
  reset,
  handleFilter,
}) => (
  <div>
    <SearchPanel
      searchQuery={searchQuery}
      handleSearch={handleSearch}
      toggleForm={toggleForm}
    />
    <Row className="my-4">
      <Col md={{ size: 4 }}>
        <FilterController handleFilter={handleFilter} />
      </Col>
      <Col md={{ size: 4 }}>
        <ViewController view={view} changeView={changeView} />
      </Col>
      <Col md={{ size: 4 }} className="d-flex">
        <div className="ml-auto">
          <BulkController
            clearCompleted={clearCompleted}
            clearSelected={clearSelected}
            reset={reset}
          />
        </div>
      </Col>
    </Row>
  </div>
);

Controller.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired,
  clearCompleted: PropTypes.func.isRequired,
  clearSelected: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  changeView: PropTypes.func.isRequired,
  handleFilter: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired,
};

export default Controller;
