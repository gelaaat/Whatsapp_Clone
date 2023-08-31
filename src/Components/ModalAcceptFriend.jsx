import React, { useState, useEffect } from 'react'
import { Modal, Input, Button, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Divider } from '@nextui-org/react'
import { useDispatch, useSelector } from 'react-redux'
import { acceptRequestFriend, sendRequestFriend } from '../features/user/userActions'

function ModalAcceptFriend () {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const globalStoreAuth = useSelector(state => state.auth)

  useEffect(() => {
    console.log(globalStoreAuth.userInfo.pendingRequestChats)
  }, [globalStoreAuth?.userInfo?.pendingRequestChats])

  const dispatch = useDispatch()

  const handleAcceptRequest = (e) => {
    e.preventDefault()
    console.log(e.target.id)
    dispatch(acceptRequestFriend({ chatName: e.target.id }))
  }

  return (
    <>
      <Button color='success' onPress={onOpen}>Chats Requests</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} className='h-max-md overflow-y-auto'>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>Add a friend!</ModalHeader>
              <ModalBody>
                {
                  globalStoreAuth?.userInfo?.pendingRequestChats
                    ? globalStoreAuth?.userInfo?.pendingRequestChats.map(chat => {
                      return (
                        <form id={chat.username} key={chat.username} onSubmit={handleAcceptRequest}>
                          <Divider />
                          <ModalBody className='flex flex-row flex-wrap justify-center items-center'>

                            <p className='flex w-full justify-center items-center'>{chat.username}</p>

                            <Button color='danger' className='w-4/12' variant='light' onPress={onClose}>
                              Reject
                            </Button>
                            <Button color='success' className='w-4/12' type='submit' onPress={onClose}>
                              Accept Request
                            </Button>

                          </ModalBody>
                          <Divider />
                        </form>
                      )
                    })
                    : <p>No requests yet!</p>
                }

              </ModalBody>
              <ModalFooter>
                <Button color='danger' variant='light' onPress={onClose}>
                  Reject
                </Button>
                <Button color='success' type='submit' onPress={onClose}>
                  Accept Request
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalAcceptFriend
