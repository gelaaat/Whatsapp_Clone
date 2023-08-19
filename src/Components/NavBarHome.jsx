import { useState } from 'react'
import { Navbar, NavbarBrand, NavbarItem, NavbarContent, Link, Button, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react'
import { AcmeLogo } from './AcmeLogo'

const NavBarHome = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    'Functions',
    'Privacy',
    'Sign Up',
    'Log In',
    'About'
  ]

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}

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
          <Link color='foreground' href='#'>
            Functions
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link color='foreground' href='#'>
            Privacy
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link color='foreground' href='#'>
            About
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem>
          <Link href='#'>Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color='primary' href='SignUp' variant='flat'>
            Sign Up
          </Button>
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

export default NavBarHome
