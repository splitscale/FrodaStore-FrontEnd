import axios from "axios";
import React, { FormEvent, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { getUidCookie } from "../lib/apiInteractor/cookies/getUidCookie";
import { getAuthCookie } from "../lib/apiInteractor/cookies/getAuthCookie";
import { useRouter } from 'next/router';

export function AddContainer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");

  const router = useRouter()

  const url = "http://jsonplaceholder.typicode.com/posts";

  const saveContainer = async (event: FormEvent) => {
    event.preventDefault();

    const config = {
      headers: {
        authorization: getAuthCookie(),
      },
      data: {
        uid: getUidCookie(),
        name: name,
      },
    };

    try {
      const res = await axios.post(url, config);
      setName(name)
      router.push('/');
      router.reload();

      console.log(res.data)
      
    } catch (err: any) {

      if (err.response) {
        // The client was given an error response (5xx, 4xx)
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else if (err.request) {
        // The client never received a response, and the request was never left
        console.log(err.request);
      } else {
        // Anything else
        console.log("Error", err.message);
      }
    }
  };

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
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="info" onClick={saveContainer}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}