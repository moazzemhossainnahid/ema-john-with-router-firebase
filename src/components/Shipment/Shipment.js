import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const [user] = useAuthState(auth);

    const handleNameBlur = (event) => {
        setName(event.target.value);
    }
    const handleAddressBlur = (event) => {
        setAddress(event.target.value);
    }

    const handleShipment = (event) => {
        event.preventDefault();
        const shipping = {name, email, address, phone};
        console.log(shipping);
    }

    const handlePhoneNumberBlur = (event) => {
        setPhone(event.target.value);
    }
    return (
        <div className="formContainer">
      <div className="">
        <h3 className="formTitle">Shipping Information</h3>

        <form onSubmit={handleShipment} action="">
          <div className="inputGroup">
            <label htmlFor="name">Name</label> <br />
            <input onBlur={handleNameBlur} type="text" required name="name" id="name" />
          </div>
          <div className="inputGroup">
            <label htmlFor="email">Email</label> <br />
            <input value={user?.email} readOnly type="email" required name="email" id="email" />
          </div>
          <div className="inputGroup">
            <label htmlFor="address">Address</label> <br />
            <input onBlur={handleAddressBlur} type="text" required name="address" id="address" />
          </div>
          <div className="inputGroup">
            <label htmlFor="phone">Phone Number</label> <br />
            <input onBlur={handlePhoneNumberBlur} type="phone" required name="phone" id="phone" />
          </div>
            <p style={{color: 'red'}} className="">{error}</p>
            {/* <p style={{color: 'green'}} className="">{success}</p> */}
          <input style={{marginBottom: '10px'}} type="submit" value="Add Shipping" className="formSubmit" />
        </form>

      </div>
    </div>
    );
};

export default Shipment;