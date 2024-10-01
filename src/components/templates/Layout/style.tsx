import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  justify-content: center; 
  align-items: flex-start;
  flex-direction: column;
  max-width: 1280px; 
  margin: 0 auto;  
  min-height: 100vh;   
`;

export const Main = styled.main<{ isSidebarOpen: boolean }>`
  padding-top: 350px; 
  width: ${({ isSidebarOpen }) => (isSidebarOpen ? 'calc(100% - 256px)' : '100%')};
  margin-left: ${({ isSidebarOpen }) => (isSidebarOpen ? '224px' : '0')};
  height: calc(100vh - 72px);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: margin-left 0.3s ease, width 0.3s ease; 

  @media (min-width: 1600px) {
    padding-top: 156px;
  }  
  
  @media (max-width: 768px) {
    padding-top: 230px; 
    margin-left: 0;
    width: 90%;
    height: calc(100vh - 72px);
  } 
 
`;