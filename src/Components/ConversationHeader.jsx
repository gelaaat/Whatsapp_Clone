import React, { useState } from 'react'
import { Dropdown, DropdownTrigger, DropdownItem, DropdownMenu, Navbar, NavbarContent, Avatar, Spacer, Button } from '@nextui-org/react'
import { useSelector, useDispatch } from 'react-redux'

const ConversationHeader = () => {
  const [visibleModal, setVisibleModal] = useState(false)

  const globalStoreAuth = useSelector(state => state.auth)
  const globalStoreChat = useSelector(state => state.chat)
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

  return (
    <Navbar className='rounded-lg'>
      <NavbarContent>
        <p>{globalStoreAuth?.userInfo?.name}</p>
      </NavbarContent>
      <NavbarContent justify='end'>
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
                {}
              </p>
              <Spacer y={0.01} />
              <p color='inherit' />
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
    </Navbar>
  )
}

export default ConversationHeader
