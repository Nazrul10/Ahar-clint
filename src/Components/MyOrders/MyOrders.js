import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './MyOrders.css'
const MyOrders = () => {
    // const [ isDetele, setIsDelete] = useState()
    const [data, setData] = useState([]);
    console.log(data);
    const {user} = useAuth()
    useEffect(()=>{
        fetch(`https://still-anchorage-64022.herokuapp.com/myallorder/${user?.email}`)
       .then((res) => res.json())
       .then(result => {
        setData(result)
       });
    }, []);
    const handleDelete = (id) =>{
        const proceed = window.confirm('Are you sure, you want to delete?')
        if(proceed){
            fetch(`https://still-anchorage-64022.herokuapp.com/deleteProduct/${id}`, {
            method: "DELETE",
            headers: { "Content-type": "application/json" },
          })
            .then((res) => res.json())
            .then((result) => {
              if (result.deletedCount) {
                  alert('Delete is successfully')
            //     setIsDelete(true);
            //   } else {
            //     setIsDelete(false);
            const remaining = data.filter(order => order._id !== id);
            setData(remaining)
              }
            });
        }
    }
    //handle update
    // const handleUpdate = id =>{

    // }
    return (
        <div className="row">
            <Header></Header>
                <h1 className="text-light text-center m-3">My Order</h1>
                <hr className="text-light"/>
            <div className="col-md-4">
            <div className="users">
                <div className="usrInfo">
                    <h1 className="userFnd0">User Info</h1>
                    <hr />
                </div>
                <div className="infoDe">
                    <h1 className="userFnd2">Name: {data[0]?.yourName}</h1>
                    <h1 className="userFnd2">email: {data[0]?.email}</h1>
                    <h1 className="userFnd2">Phone: {data[0]?.phone}</h1>
                    <h1 className="userFnd2">Address: {data[0]?.address}</h1>
                </div>
            </div>
            </div>
            <div className="col-md-8">
            <div className="orders-container">
           {
           data.map(order => <div key={order._id} order={order}>
                   <div className="container">			
					<div className="text-center my-3">						
								<div className="card routed h-100 mb-4">                    
									<div className="card-header">                                
										<img src={order.picture} alt="" />
									</div>
									<div className="order-body text-left">
                                        <img src={order.icon} alt="" />
										<p className="card-text">Food Type : {order.name}</p>
										<p className="font-lead-base font-weight-bold text-muted">{order.discriptiion}</p>
										<div className="promotion-promo">20% Off!</div>
										<div className="promotion-price">
											<div className="promotion-price-desc">Now</div>
											<div className="promotion-price-text">$ {order.price}</div>                                    
										</div>
									</div>
									<div className="card-footer d-flex justify-content-around">
                                        <button 
                                        onClick={()=>handleDelete(`${order._id}`)}
                                        className="btn btn-warning">Delete</button>
                                        <h3
                                       
                                        className="btn btn-danger">{order.status}</h3>
                                    </div>
								</div>
							</div>
						</div>
           </div>)
           }
        </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyOrders;