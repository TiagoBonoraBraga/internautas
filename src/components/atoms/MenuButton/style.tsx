import styled from 'styled-components';

export const Icon = styled.div`  
  font-size: 24px;
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.menuButton};
  position: relative; /* Added to allow absolute positioning of pseudo-elements */
  transition: color 120ms linear;

  &:hover {
    color: ${({ theme }) => theme.colors.hover}; 
  }

  &:hover::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 36px; 
    height: 36px; 
    background-color: ${({ theme }) => theme.colors.hoverMenu}; 
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: -1; 
  }
`;