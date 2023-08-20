import React, { useState } from 'react'
import { Modal, Input, Button, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from '@nextui-org/react'
import { useDispatch } from 'react-redux'
import { sendRequestFriend } from '../features/user/userActions'

function ModalAddFriend () {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const [username, setUsername] = useState('')

  const dispatch = useDispatch()

  const handleChangeUsername = ({ target }) => setUsername(target.value)

  const handleFriendRequest = (e) => {
    e.preventDefault()
    dispatch(sendRequestFriend({ username }))
  }

  return (
    <>
      <Button color='success' onPress={onOpen}>Add a friend!</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <form onSubmit={handleFriendRequest}>
              <ModalHeader className='flex flex-col gap-1'>Add a friend!</ModalHeader>
              <ModalBody>

                <Input
                  clearable
                  bordered
                  fullWidth
                  size='lg'
                  placeholder={'Enter your friend\'s username'}
                  aria-label='Username'
                  pattern='^[a-zA-Z0-9_.-]*$'
                  required
                  onChange={handleChangeUsername}
                />

              </ModalBody>
              <ModalFooter>
                <Button color='danger' variant='light' onPress={onClose}>
                  Close
                </Button>
                <Button color='success' type='submit' onPress={onClose}>
                  Send Request
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalAddFriend
