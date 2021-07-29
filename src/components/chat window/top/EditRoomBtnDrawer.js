import React from 'react';
import { useParams } from 'react-router';
import { Alert, Button, Drawer } from 'rsuite';
import { useCurrentRoom } from '../../../context/current-room.context';
import { useModalState } from '../../../misc/custom-hooks';
import { database } from '../../../misc/firebase';
import Editable from '../../Editable';


const EditRoomBtnDrawer = () => {
    const {chatId} = useParams();
    const { isOpen, open, close } = useModalState();

    const name = useCurrentRoom(v => v.name);
    const description = useCurrentRoom(v => v.description);

  const update = (key, value) => {
    database.ref(`rooms/${chatId}`).child(key).set(value).then(() => {
        Alert.success('Successfully updated', 4000);
    }).catch(err => {
        Alert.error(err.message, 4000);
    })
}

    const onNameSave = (newName) => {
        update('name', newName);
    }

    const onDescriptionSave = (newDescription) => {
        update('description', newDescription);
    }
    return (
        <div>
      <Button className="br-circle" size="sm" color="red" onClick={open}>
        A
      </Button>

      <Drawer show={isOpen} onHide={close} placement="right">
        <Drawer.Header>
          <Drawer.Title>Edit Room</Drawer.Title>
        </Drawer.Header>

        <Drawer.Body>
          <Editable
            initialValue={name}
            onSave={onNameSave}
            label={<h6 className="mb-2">Name</h6>}
            emptyMsg="Name can not be empty"
          />

          <Editable
            componentClass="textarea"
            rows={5}
            initialValue={description}
            onSave={onDescriptionSave}
            label={<h6 className="mb-2">Description</h6>}
            emptyMsg="Description can not be empty"
            wrapperClassName="mt-3"
          />

        </Drawer.Body>

        <Drawer.Footer>
          <Button block onClick={close}>
            Close
          </Button>
        </Drawer.Footer>
      </Drawer>
    </div>
    )
}

export default EditRoomBtnDrawer

