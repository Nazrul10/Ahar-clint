import { jsonEval } from '@firebase/util';
import React from 'react';
import { useForm } from 'react-hook-form';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './AddFood.css'
const AddFood = () => {
    const { register, handleSubmit, reset } = useForm();
    // Submit your data into store
    const onSubmit = data =>{
        fetch("https://still-anchorage-64022.herokuapp.com/addfood", {
         method: "POST",
         headers: { "content-type": "application/json" },
         body: JSON.stringify(data),
         })
        .then((res) => res.json())
        .then(result => {
            if(result.acknowledged){
                alert('Product Inserted successfully');
                reset();
            }
        });
    };
    return (
        <div>
            <Header></Header>
            <div className="form-submit">
            <form onSubmit={handleSubmit(onSubmit)}>
       <input placeholder="Product name" {...register("name", { required: true })} />
      <input placeholder="Price" type="number" {...register("price", { required: true })} />
      <input placeholder="Discriptiion" {...register("discriptiion", { required: true })}/>
      <input placeholder="Picture link" {...register("picture", { required: true })}/>
      <input placeholder="icon link" {...register("icon", { required: true })} />
      <input className="input-btn" type="submit" />
    </form>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default AddFood;