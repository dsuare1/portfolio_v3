import React from 'react';
import SiteHead from '../components/SiteHead';
import Layout from '../components/layout/Layout';
import Person from '../components/person/Person';
import Developer from '../components/developer/Developer';
import Journey from '../components/journey/Journey';
import 'animate.css/animate.min.css';

const Home = () => (
  <>
    <SiteHead />
    <Layout>
      <Person />
      <Developer />
      <Journey />
    </Layout>
  </>
);

export default Home;
