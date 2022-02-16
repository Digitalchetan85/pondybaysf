import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Checkout = () => {
  const [show, setShow] = useState(false);

  return (
      <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Checkout
      </Button>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-check-out"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-check-out">
            CheckOut
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
        </Modal.Body>
      </Modal>
      </>
  );
};

export default Checkout;
