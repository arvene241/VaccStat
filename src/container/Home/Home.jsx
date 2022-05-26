import React from 'react';
import { Header, Statistics, Footer } from '../index';
import Certificate from '../Generate/Certificate';

export default function Home() {
  return (
    <>
        <Header />
        <Statistics />
        <Certificate />
        <Footer />
    </>
  )
}
