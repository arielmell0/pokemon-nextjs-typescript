import React, { ReactElement } from 'react'
import { MenuBar, Input, Title } from './styles'

const Menu = (): ReactElement => {
  return (
    <MenuBar>
      <Title>Logo</Title>

      <Input placeholder='Search a pokemon...' />
    </MenuBar>
  )
}

export default Menu
