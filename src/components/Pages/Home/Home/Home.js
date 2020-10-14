import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navbar from '../../../Shared/Navbar/Navbar';
import Clients from '../Clients/Clients';
import FeedBacks from '../Feedbacks/FeedBacks';
import Header from '../Header/Header';
import OurWorks from '../OurWorks/OurWorks';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header />
            <Clients />
            <Services />
            <OurWorks />
            <FeedBacks />
            <Footer />
        </div>
    )
}

export default Home;
