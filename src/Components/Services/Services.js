import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Service from './Service/Service';
import './Services.css'
const Services = () => {
    const [allData, setAlldata] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => setAlldata(data))
    } ,[])
    return (
        <div>
            <h1 className="text-light text-center m-3">Our Popular Food Menu</h1>
            <h4 className="text-light text-center m-3">The process of our service </h4>
            <div className="services-container">
            {
                allData?.map((data) => <Service data={data}></Service>)
            }
        </div>
        </div>
    );
};

export default Services;