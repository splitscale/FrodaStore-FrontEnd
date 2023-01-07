import React, { FormEvent, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { UrlContainer } from '../lib/container/UrlContainer';
import { UrlContainerRequest } from '../lib/container/UrlContainerRequest';

export function AddContainer({
  onSuccess,
  onFail,
}: {
  onSuccess: (value: UrlContainer) => void;
  onFail: (err: Error) => void;
}) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('');

  const handleClose = () => {
    setTitle('');
    setShow(false);
  };
  const handleShow = () => setShow(true);

  function saveContainer() {
    if (title === '') {
      const err = new Error('Empty Container title');

      alert(err);
      onFail(err);
      return;
    }

    console.log('Implement saving api call');

    // SEND THIS TO DB
    // const newContainer: UrlContainerRequest = {
    //   uid: 'uid here',
    //   title: title,
    // };

    onSuccess({ id: 2, title: title });

    handleClose();
  }

  return (
    <div>
      <div className="flex flex-col justify-center items-center mb-4">
        <Button
          className="fs-5 mt-8 mb-2   w-96 py-1 bg-gradient-to-r
            from-pink-400 to-yellow-500 hover:from-green-500 hover:to-blue-500 ..."
          onClick={handleShow}
        >
          Add Container
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Container</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <label className="block text-gray-600 text-sm font-normal">
            Container Title
          </label>

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="cancel" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="info" onClick={saveContainer}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
