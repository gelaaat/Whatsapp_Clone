import React, { useState } from 'react'
import { Dropdown, DropdownTrigger, DropdownItem, DropdownMenu, Navbar, NavbarContent, Avatar, Spacer, Button } from '@nextui-org/react'
import { useSelector, useDispatch } from 'react-redux'
import { TbAdjustments } from 'react-icons/tb'
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

  return (
    <Navbar className='rounded-lg justify-between'>
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
                Change user icon
              </p>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <Spacer x={1} />
      <NavbarContent>
        <ModalAddFriend visibleModal={visibleModal} setVisibleModal={setVisibleModal} />
      </NavbarContent>
      <Spacer x={1} />
      <NavbarContent className='!justify-end items-center'>

        <Dropdown className='flex items-center justify-end'>
          <DropdownTrigger className=''>
            <Button variant='faded' className='bg-blue-300'>
              <TbAdjustments size={20} />
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label='User settings'
            color='secondary'
            onAction={handleUserMenu}
          >
            <DropdownItem key='profile' css={{ minHeight: '50px' }}>
              <p color='inherit'>
                Signed in as
              </p>
              <Spacer y={0.01} />
            </DropdownItem>
            <DropdownItem key='settings' withDivider>
              My Settings
            </DropdownItem>
            <DropdownItem key='logout' withDivider color='danger'>
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  )
}

export default UserHeader
