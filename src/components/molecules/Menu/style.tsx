import NavLink from 'next/link';
import styled from 'styled-components';

export const MenuContainer = styled.nav`
  font-size: 24px;
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const SidebarLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 1rem;
  color:  ${({ theme }) => theme.colors.primary}; 
  text-decoration: none;
  gap: 0.5rem;
  position: relative;
  font-family: ${({ theme }) => theme.font.primary}; 
  font-size: 16px;
  font-weight: 400;
  line-height: 21.79px;
  text-align: left;
  transition: color 0.3s ease; 

  &:hover, &.active {
    color: ${({ theme }) => theme.colors.secondary}; 
    font-weight: 700;   

    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: -1px;
      transform: translateY(-50%);
      height: 2px;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.hover}; 
      transform-origin: bottom left; /* Define a origem da transformação */
      transition: transform 0.3s ease; /* Transição suave ao passar o mouse */
    }

    &:hover::before {
    transform: scaleX(1); /* O efeito se expande para a largura total do link */
  }
  }
`;