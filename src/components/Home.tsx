import React from 'react';
import Header from '../containers/Header';
import MainSection from '../containers/MainSection';
import {HomeView} from './styles/Home.styles';

const Home = () => (
  <HomeView>
    <Header />
    <MainSection />
  </HomeView>
);

export default Home;
