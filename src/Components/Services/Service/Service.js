import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = (props) => {
    const {name, price, picture, icon,_id, discriptiion} = props.data
    return (
 <div className="ser-body">
	<div className="container">			
					<div className="text-center my-3">						
								<div className="card h-100 mb-4">                    
									<div className="card-header">                                
										<img src={picture} alt="" />
									</div>
									<div className="card-body text-left">
                                        <img src={icon} alt="" />
										<p className="card-text">Food Type : {name}</p>
										<p className="font-lead-base font-weight-bold text-muted">{discriptiion}</p>
										<div className="promotion-promo">20% Off!</div>
										<div className="promotion-price">
											<div className="promotion-price-desc">Now</div>
											<div className="promotion-price-text">$ {price}</div>                                    
										</div>
									</div>
									<div className="card-footer">
                                        <Link to={`/orderplace/${_id}`}
										className="btn btn-warning">Order</Link>
                                    </div>
								</div>
							</div>
						</div>
					</div>
    );
};

export default Service;