import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
// import { editGame } from '../redux/gameslice'

function editGame({game}) {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [editgame, seteditgame] = useState({
        id:Math.random(),
        name:game.name,
        coverUrl:game.coverUrl,
        description:game.description
    })

  return (
    <div>
         <>
      <Button variant="primary" onClick={handleShow} style={{backgroundColor: 'green', border: 'none'}}>
        edit a Game
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>So! What do you we have here ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Game Title :</Form.Label>
        <Form.Control type="text" placeholder={game.name} onChange={(e)=>seteditgame({...editgame,name:e.target.value})}/>
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Game Cover :</Form.Label>
        <Form.Control type="text" placeholder={game.coverUrl} onChange={(e)=>seteditgame({...editgame,coverUrl:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Game Description :</Form.Label>
        <Form.Control type="text" placeholder={game.description} onChange={(e)=>seteditgame({...editgame,description:e.target.value})}/>
      </Form.Group>
    </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} style={{backgroundColor: 'red', border: 'none'}}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{dispatch(editGame({id:game.id,edited}));}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  )
}

export default editGame