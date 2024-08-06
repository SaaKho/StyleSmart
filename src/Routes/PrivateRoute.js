import React from 'react';
import WelcomeScreen from '../pages/welcomScreen/WelcomeScreen';
import HomePage from '../pages/Home/HomePage';
import { useSelector } from 'react-redux';
import HomeBox from '../components/home/HomeBox';


function PrivateRoute({ path }) {

  const accessToken = useSelector(state => state.token);

  if (!accessToken) {
    return <WelcomeScreen />;
  }

  return <>
    <HomePage />
  </>;

}

export default PrivateRoute;
