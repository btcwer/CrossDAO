import React from "react";
import { Modal, Button, Text} from "@nextui-org/react";

export default function MessageBox(props) {

  const closeHandler = () => {
    props.closeMessageBox()
  }

  return (
    <div>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={props.visible}
        onClose={closeHandler}
        width="600px"
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Transaction Brodcasted!
          </Text>
        </Modal.Header>
        <Modal.Body>
            <Text h5>Contract Address: {props.contractaddress} </Text>
            <Text h5>Tx Hash: {props.txhash}</Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
