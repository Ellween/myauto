import React from 'react';
import '../src/styles/App.css';
import Header from './components/layout/Header';
import Homepage from './pages/Homepage';
import styled from 'styled-components';
import '../src/styles/global.css';
import { Provider } from 'react-redux';
import store from './store';

const MainContainer = styled.main`
  width: 100%;
  margin: 0 auto;
  @media (min-width: 1200px) {
    width: 1200px;
  }
`;

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Header />
      <MainContainer className='main-container mx-auto flex'>
        <Homepage />
      </MainContainer>
    </Provider>
  );
};

export default App;
