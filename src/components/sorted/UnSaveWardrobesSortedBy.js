import React from "react";
import { useState } from 'react';  
import DeletionModal from "../Modals/DeletionModal";
import { Button, Dropdown } from "react-bootstrap";
import UnsaveWardrobesDeletonModal from "../Modals/UnsaveWardrobesDeletionModal";


const UnSaveWardrobesSortedBy = ({ onSortChange }) => {
  const [selectedSort, setSelectedSort] = useState('Newest First'); // Default sorting
  const [modalDeletionShow, setModalDeletionShow] = React.useState(false);

  const handleSortChange = (sortOrder) => {
    setSelectedSort(sortOrder);      // Update the selected sort
    onSortChange(sortOrder);       // Notify parent component
  };

  
  return (
    <>
      <div className="sortedBy d-flex align-items-md-center align-items-end justify-content-between my-4">
        <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center">
          <p>Sort</p>
          <hr className="verticalLine d-none d-md-block" />

          <Dropdown className="SortBy">
            <Dropdown.Toggle className="btnrgtn" id="dropdown-basic">
              {selectedSort}
              <img src="/images/dropdown-arrow-Icon.svg" alt="arrow" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleSortChange('Newest First')}>Newest First</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSortChange('Oldest First')}>Oldest First</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="">
          <Button
            className="btnRemoveEvry"
            onClick={() => setModalDeletionShow(true)}
          >
            <img className="me-2" src="/images/remove-icon.svg" alt="icon" />
            Remove Everything 
          </Button>
          <UnsaveWardrobesDeletonModal
            show={modalDeletionShow}
            onHide={() => setModalDeletionShow(false)}
          />
        </div>
      </div>
    </>
  );
};

export default UnSaveWardrobesSortedBy;
