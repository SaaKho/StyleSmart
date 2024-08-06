import React, {useState} from "react";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DeletedSuccessfullyToast from "../Toasts/DeletedSuccessfullyToast";
import unSaveWardrobeSvc  from "../../services/unsaveWardrobe";

const UnsaveWardrobesDeletonModal = (props) => {
  const token = useSelector((state) => state.token); // Example assuming you have a token in your Redux state
  const [showToast, setShowToast] = useState(false);      // State to control the visibility of the toast

  const handleDeleteAll = async () => {
    try {
      await unSaveWardrobeSvc.deleteAllUnSaveWardrobe(token);
      props.onHide();
      setShowToast(true);

      // Set a timeout to refresh the page after 3 seconds , till 3 seconds deletion toast will show 
      setTimeout(() => {
        window.location.reload();
      }, 2000);

    } catch (error) {

      console.error('Error Deleting Wardrobes:', error);
    }
  };

  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="productDtlMdl"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <p className="rmvPrdct">Confirm Deletion</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-center align-items-start pt-3">
            <p className="tellResn">
              Are you sure you want to remove everything?
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0">
          <Button onClick={props.onHide} className="cancelPrv">
            No, don’t
          </Button>
          <Button className="btnPrfSubmit" onClick={handleDeleteAll}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
        {/* Showing the deleted successfully Toast component */}
        <DeletedSuccessfullyToast showToast={showToast} onClose={() => setShowToast(false)} />

    </>
  );
};

export default UnsaveWardrobesDeletonModal;
