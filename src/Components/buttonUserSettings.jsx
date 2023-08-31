import React from 'react'
import { NavbarContent, Dropdown, DropdownTrigger, DropdownItem, Button, DropdownMenu } from '@nextui-org/react'
import { TbAdjustments } from 'react-icons/tb'
import { useDispatch } from 'react-redux'

const buttonUserSettings = () => {
  return (
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
  )
}

export default buttonUserSettings
