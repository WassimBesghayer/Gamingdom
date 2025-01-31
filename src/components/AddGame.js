import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addGame } from '../redux/gameslice';


function AddGame() {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newgame, setnewgame] = useState({
      
        name:"",
        coverUrl:"",
        description:""
    })

  return (
    <div>
         <>
      <Button variant="primary" onClick={handleShow} style={{backgroundColor: 'green', border: 'none'}}>
        Add a Game
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>So! What do you we have here ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Game Title :</Form.Label>
        <Form.Control type="text" placeholder="Enter text" onChange={(e)=>setnewgame({...newgame,name:e.target.value})}/>
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Game Cover :</Form.Label>
        <Form.Control type="text" placeholder="insert URL" onChange={(e)=>setnewgame({...newgame,coverUrl:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Game Description :</Form.Label>
        <Form.Control type="text" placeholder="tell us about it 😁" onChange={(e)=>setnewgame({...newgame,description:e.target.value})}/>
      </Form.Group>
    </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} style={{backgroundColor: 'red', border: 'none'}}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{dispatch(addGame(newgame));}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  )
}

export default AddGame