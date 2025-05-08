import React from 'react';
import { useParams } from 'react-router-dom';
import LandingPage from './LandingPage';

const PublicSite = () => {
  const { referralCode } = useParams();
  localStorage.setItem('referrer', referralCode);
  return <LandingPage />;
};

export default PublicSite;
