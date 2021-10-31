
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './OrderPlace.css'
const OrderPlace = () => {
    const {user} = useAuth()
    const [details, setDetails] = useState();
    console.log('details', details?.name);
    const {orderId} = useParams()
    useEffect(()=>{
        fetch(`https://still-anchorage-64022.herokuapp.com/placeorder/${orderId}`)
       .then((res) => res.json())
       .then(result => {
        setDetails(result);
       });
    }, [])

    const { register, handleSubmit, reset} = useForm({});
    const onSubmit = (data) =>{
        data.status = "panding"
        console.log(data);
        fetch("https://still-anchorage-64022.herokuapp.com/myorders", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
            })
           .then((res) => res.json())
           .then(result => {
               if(result.acknowledged){
                   alert("Order is Inserted");
               }
           });
           reset()
    }
    return (
            <div className="row">
                <Header></Header>
                <div className="col-md-4">
                <div className="container potion-fix">			
					<div className="text-center my-3">						
								<div className="card routed h-100 mb-4 ">                    
									<div className="card-header">                                
										<img src={details?.picture} alt="" />
									</div>
									<div className="card-body text-left">
                                        <img src={details?.icon} alt="" />
										<p className="card-text">Food Type : {details?.name}</p>
										<p className="font-lead-base font-weight-bold text-muted">{details?.discriptiion}</p>
										<div className="promotion-promo">20% Off!</div>
										<div className="promotion-price">
											<div className="promotion-price-desc">Now</div>
											<div className="promotion-price-text">$ {details?.price}</div>                                    
										</div>
									</div>
								</div>
							</div>
						</div>
                    
                </div>
                <div className="col-md-8">
                <div className="form-submit">
    <form onSubmit={handleSubmit(onSubmit)}>
            <div>
           <h1 className="text-light text-center">User Details</h1>
           <hr className="text-light" />
       </div>
       <input placeholder="Address" {...register("address",{ required: true })}  />
       <input placeholder="Phone" {...register("phone", { required: true })}/>
       <input {...register("yourName")} defaultValue={user?.displayName} />
       <input {...register("email")} defaultValue={user?.email} />
       <div>
           <h1 className="text-light text-center">Order Details</h1>
           <hr className="text-light" />
       </div>
       {details?.name && <input defaultValue={details?.name} {...register('name')}/>}
      {details?.price && <input defaultValue={details?.price} {...register('price')}/>}
      {details?.discriptiion && <input {...register("discriptiion")} defaultValue={details?.discriptiion}/>}
      {details?.picture && <input {...register("picture")} defaultValue={details?.picture}/>}
      {details?.icon && <input {...register("icon")} defaultValue={details?.icon}/>}
      <input className="input-btn" type="submit" value="place Order" />
    </form>
        </div>
                </div>
                <Footer></Footer>
            </div>
    );
};

export default OrderPlace;