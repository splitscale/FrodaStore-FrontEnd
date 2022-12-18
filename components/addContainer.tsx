import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddContainer() {
  const [show, setShow] = useState(false);

  const handleClose = () => {setShow(false)};
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="btn  btn-warning w-100 border border-dark" onClick={handleShow}>
        Add Container
      </Button>

      <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
          <Modal.Title>FordaStore</Modal.Title>
        </Modal.Header>

        <Modal.Body>Woohoo</Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
        
      </Modal>
    </>
  );
}

export default AddContainer