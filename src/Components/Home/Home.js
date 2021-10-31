import React from 'react';
import Banner from '../Banner/Banner';
import MeetSec from '../MeetSec/MeetSec';
import Services from '../Services/Services';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <MeetSec></MeetSec>
            <Footer></Footer>
        </div>
    );
};

export default Home;