
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;  
  max-width: 1280px;
  height: 72px; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundDiv};
  position: fixed;
  top: 0;
  left: 50%; 
  transform: translateX(-50%); 
  z-index: 1100;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
  padding: 0 16px; 
  overflow: hidden; 

  @media (max-width: 768px) {
    padding: 0 8px;    
  }
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  flex-shrink: 0;
  z-index: 9999;
`; 

export const Nav = styled.div`
  font-size: 24px;
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;  
`;