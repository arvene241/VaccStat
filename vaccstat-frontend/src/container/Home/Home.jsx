import React from 'react';
import { Header, Statistics, Footer } from '../index';
import Certificate from '../Generate/Certificate';
import StatFullPage from '../Statistics/StatFullPage';

export default function Home() {
  return (
    <>
        <Header />
        <Statistics />
        <StatFullPage />
        <Certificate />
        <Footer />
    </>
  )
}
