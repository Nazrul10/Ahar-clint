import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import Service from './Service/Service';
import './Services.css'
const Services = () => {
    const [allData, setAlldata] = useState([])
    useEffect(()=>{
        fetch('https://still-anchorage-64022.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setAlldata(data))
    } ,[])
    return (
        <div>
            <h1 className="text-light text-center m-3">Our Popular Food Menu</h1>
            <h4 className="text-light text-center m-3">The process of our service </h4>
            {allData.length === 0?<Spinner className="spners" animation="border" variant="light" />:<div className="services-container">
            {
                allData?.map((data) => <Service data={data}></Service>)
            }
        </div>}
        </div>
    );
};

export default Services;