import React, { useState } from 'react'
import { Dropdown, DropdownTrigger, DropdownItem, DropdownMenu, Navbar, NavbarContent, Avatar, Spacer, Button } from '@nextui-org/react'
import { useSelector, useDispatch } from 'react-redux'

import ModalAddFriend from './ModalAddFriend'

const UserHeader = () => {
  const [visibleModal, setVisibleModal] = useState(false)

  const userInfo = {}
  // const { userInfo } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const handleUserMenu = (action) => {
    switch (action) {
      case 'logout':
        dispatch()
        break

      default:
        break
    }
  }

  const handlerOpenModal = () => setVisibleModal(true)

  return (
    <Navbar className='rounded-lg'>
      <NavbarContent>
        <Dropdown>
          <DropdownTrigger>
            <Avatar
              as='button'
              color='secondary'
              size='md'
            />
          </DropdownTrigger>

          <DropdownMenu
            aria-label='User menu'
            color='secondary'
            onAction={handleUserMenu}
          >
            <DropdownItem key='profile' css={{ minHeight: '50px' }}>
              <p color='inherit'>
                Signed in as
              </p>
              <Spacer y={0.01} />
              <p color='inherit'>
                {userInfo?.email}
              </p>
              <Spacer y={0.01} />
            </DropdownItem>
            <DropdownItem key='settings' withDivider>
              My Settings
            </DropdownItem>
            <DropdownItem key='logout' withDivider color='error'>
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <Spacer x={1} />
      <NavbarContent>
        <ModalAddFriend visibleModal={visibleModal} setVisibleModal={setVisibleModal} />
      </NavbarContent>
      <Spacer x={1} />
      <NavbarContent />
    </Navbar>
  )
}

export default UserHeader
