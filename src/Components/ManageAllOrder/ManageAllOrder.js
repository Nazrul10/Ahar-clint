import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './ManageAll.css'
const ManageAllOrder = () => {
    // const [isDelete, setIsDelete]= useState()
    const [allorder, setOrder] = useState()
    console.log(allorder);
    useEffect(()=>{
        fetch('https://still-anchorage-64022.herokuapp.com/manageall')
        .then(res => res.json())
        .then(data =>{
            setOrder(data)
        })
    },[])
    const handleManageDelete = id =>{
        const proceed = window.confirm('Are you sure, you want to delete')
        if(proceed){
            fetch(`https://still-anchorage-64022.herokuapp.com/deletemanage/${id}`, {
            method: "DELETE",
            headers: { "Content-type": "application/json" },
          })
            .then((res) => res.json())
            .then((result) => {
            //   if (result.deletedCount) {
            //       alert('delete successfully')
            //     setIsDelete(true);
            //   } else {
            //     setIsDelete(false);
            //   }
            if(result.deletedCount){
                alert('Deleted successfully')
                const remaining = allorder.filter(order => order._id !== id);
            setOrder(remaining)
            }
            });
        }
    }
    return (
        <div>
            <Header></Header>
            <h1 className="text-light text-center m-3">Manage All Orders</h1>
            <hr className="text-light"/>
            <div className="manage-container">
          {
           allorder?.map(order => <div key={order._id} order={order}>
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
									<div className="card-footer">
                                        <button 
                                        onClick={()=>handleManageDelete(`${order._id}`)}
                                        className="btn btn-warning">Delete</button>
                                    </div>
								</div>
							</div>
						</div>
           </div>)
           }
        </div>
        <Footer></Footer>
        </div>
    );
};

export default ManageAllOrder;