import React from 'react';
import Hero from '../components/Hero/Hero';
import Welcome from '../components/Welcome/Welcome';
import Theme from '../components/Theme/Theme';
import Highlights from '../components/Highlights/Highlights';
import CallForPapers from '../components/CallForPapers/CallForPapers';
import WhyJoin from '../components/WhyJoin/WhyJoin';
import Publications from '../components/Publications/Publications';

const HomePage = ({ data, loading, error }) => {
  if (loading) {
    return <div className="container"><p>Loading conference data...</p></div>;
  }

  if (error) {
    return <div className="container"><p>Error: {error}</p></div>;
  }

  if (!data) {
    return <div className="container"><p>No data found.</p></div>;
  }

  return (
    <>
      <Hero data={data.hero} />
      <div className="container">
        <Welcome data={data.welcome} />
        <Theme data={data.theme} />
        <Highlights data={data.highlights} />
        <CallForPapers tracks={data.tracks} deadlines={data.deadlines} />
        <WhyJoin data={data.whyJoin} />
        <Publications data={data.publications} />
      </div>
    </>
  );
};

export default HomePage;