import styled from 'styled-components'

import { colors } from '@/ssot/colors'
import { AppLogo } from './icons/AppLogo'
import { MenuIcon } from './icons/MenuIcon'
import { UserIcon } from './icons/UserIcon'

export function Topbar () {
  return (
    <TopbarContainer>
      <MenuIcon color='#fff' fontSize='24px' />
      <AppLogo height={38} width={106} />
      <UserIcon color='#fff' fontSize='24px' />
    </TopbarContainer>
  )
}

const TopbarContainer = styled.header`
  width: 100%;
  background-color: ${colors.TOPBAR_BG};
  padding: 12px 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`
