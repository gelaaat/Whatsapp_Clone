import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Link, Button } from '@nextui-org/react'
import React, { useState } from 'react'
import { AcmeLogo } from './AcmeLogo'

const NavBarUserPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    'Functions',
    'Privacy',
    'Log Out',
    'About'
  ]

  const handleLogOut = () => {

  }

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className=''
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className='font-bold text-inherit'>ACME</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem isActive>
          <Link color='foreground' href='/Functions'>
            Functions
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link color='foreground' href='/Privacy'>
            Privacy
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link color='foreground' href='/About'>
            About
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem>
          <Button color='danger' onPress={handleLogOut}>Log Out</Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color='foreground'
              className='w-full'
              href='#'
              size='lg'
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

export default NavBarUserPage
