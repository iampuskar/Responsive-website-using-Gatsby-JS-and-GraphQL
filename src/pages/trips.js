import React from 'react'
import Footer from '../components/Footer'
import Stats from '../components/Stats'
import Tripss from '../components/Tripss'
import Layout from '../components/Layout'


const Trips = () => {
    return (
        <div>
            <Layout />
            <Tripss />
            <Stats/>
            <Footer />
        </div>
    )
}

export default Trips