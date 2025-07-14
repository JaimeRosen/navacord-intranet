'use client'

import { 
  Nav, 
  NavGroup, 
  NavGroupType, 
  NavItem, 
  NavItemType,
  SearchBox,
  Button,
  Persona,
  PersonaSize,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItem,
  MenuDivider
} from '@fluentui/react'
import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'

interface HeaderProps {
  currentPage: string
  onPageChange: (page: string) => void
}

export default function Header({ currentPage, onPageChange }: HeaderProps) {
  const [searchValue, setSearchValue] = useState('')
  const { isAuthenticated, user, login, logout, loading } = useAuth()

  const navItems = [
    {
      name: 'Home',
      key: 'home',
      url: '#',
      icon: 'Home'
    },
    {
      name: 'Products',
      key: 'products',
      url: '#',
      icon: 'Package'
    },
    {
      name: 'MGAs',
      key: 'mgas',
      url: '#',
      icon: 'People'
    },
    {
      name: 'Resources',
      key: 'resources',
      url: '#',
      icon: 'Library'
    },
    {
      name: 'News & Updates',
      key: 'news',
      url: '#',
      icon: 'News'
    },
    {
      name: 'Support',
      key: 'support',
      url: '#',
      icon: 'Help'
    }
  ]

  const handleNavItemClick = (ev?: any, item?: any) => {
    if (item?.key) {
      onPageChange(item.key)
    }
  }

  const handleSearch = (ev?: any, newValue?: string) => {
    setSearchValue(newValue || '')
    // TODO: Implement search functionality
  }

  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-2xl text-green-600">△</div>
            <span className="text-xl font-semibold text-green-600">NAVACORD</span>
          </div>

          {/* Navigation */}
          <Nav
            selectedKey={currentPage}
            onLinkClick={handleNavItemClick}
            ariaLabel="Navacord Intranet Navigation"
            className="flex-1 mx-8"
          >
            <NavGroup>
              {navItems.map((item) => (
                <NavItem
                  key={item.key}
                  name={item.name}
                  url={item.url}
                  icon={item.icon}
                />
              ))}
            </NavGroup>
          </Nav>

          {/* Search and User */}
          <div className="flex items-center gap-4">
            <SearchBox
              placeholder="Search..."
              value={searchValue}
              onChange={handleSearch}
              className="w-64"
            />
            
            {loading ? (
              <div className="w-8 h-8 border-2 border-gray-300 border-t-green-600 rounded-full animate-spin"></div>
            ) : isAuthenticated ? (
              <Menu>
                <MenuTrigger>
                  <Persona
                    size={PersonaSize.size32}
                    text={user?.name || user?.username || 'User'}
                    className="cursor-pointer"
                  />
                </MenuTrigger>
                <MenuPopover>
                  <MenuList>
                    <MenuItem>My Profile</MenuItem>
                    <MenuItem>Settings</MenuItem>
                    <MenuDivider />
                    <MenuItem onClick={handleLogout}>Sign Out</MenuItem>
                  </MenuList>
                </MenuPopover>
              </Menu>
            ) : (
              <Button 
                appearance="primary" 
                className="navacord-bg-green"
                onClick={login}
              >
                Sign In
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
} 