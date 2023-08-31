import React, { useState } from 'react'
import { Dropdown, DropdownTrigger, DropdownItem, DropdownMenu, Navbar, NavbarContent, Avatar, Spacer, Button, Input } from '@nextui-org/react'
import { useSelector, useDispatch } from 'react-redux'
import { TbAdjustments } from 'react-icons/tb'
import ModalAddFriend from './ModalAddFriend'
import { SearchIcon } from './SearchIcon'
import { setDownSearchChat, setSearchKey } from '../features/chat/chatSlice'
import ModalAcceptFriend from './ModalAcceptFriend'
import { setLastChats } from '../features/auth/authActions'

const UserHeader = () => {
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

  const handleChangeSearch = async ({ target }) => {
    if (target.value === '') {
      dispatch(setDownSearchChat())
    } else {
      await dispatch(setSearchKey({
        searchKey: target.value
      }))
    }
  }

  return (
    <Navbar className='rounded-lg justify-between shrink'>
      <NavbarContent className='flex !justify-center items-center'>
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

      <NavbarContent>
        <ModalAddFriend />
      </NavbarContent>

      <NavbarContent>
        <ModalAcceptFriend />
      </NavbarContent>

      <NavbarContent as='div' className='items-center' justify='end'>
        <Input
          classNames={{
            // base: 'max-w-full sm:max-w-[10rem] h-10',
            mainWrapper: 'h-full',
            input: 'text-small',
            inputWrapper: 'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20'
          }}
          placeholder='Type to search...'
          size='sm'
          startContent={<SearchIcon size={18} />}
          type='search'
          onChange={handleChangeSearch}
        />
      </NavbarContent>

    </Navbar>
  )
}

export default UserHeader
