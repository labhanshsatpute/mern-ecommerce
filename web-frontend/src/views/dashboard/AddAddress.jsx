import React from "react";
import { Link } from "react-router-dom";
import { MdChevronRight } from "react-icons/md";
import AddressBookCard from "../../components/address-book-card/AddressBookCard";
import InputBox from "../../components/form-elements/InputBox";
import { useState } from "react";

const AddAddress = () => {

  const [addressFields, setAddressFields] = useState({
    label: "Home",
    name: "",
    email: "",
    phone: "",
    phoneAlternate: "",
    home: "",
    street: "",
    city: "",
    postalCode: "",
    state: "",
    country: ""
  });

  const { label, name, email, phone, phoneAlternate, home, street, city, postalCode, state, country } = addressFields;

  const handleInputChange = (data) => {
    const { name, value } = data.target;
    setAddressFields({ ...addressFields, [name]: value });
  }

  const handleSubmit = () => {
    console.log(addressFields);
  }

  return (
    <React.Fragment>

      {/* Bread Crumbs (Start) */}
      <section className="py-6 border-b shadow-sm relative">
        <div className="container">
          <ul className="flex items-center justify-start space-x-3">
            <li><Link to={"/"} className="link">Home</Link></li>
            <li><MdChevronRight size={20} /></li>
            <li><Link to={"/dashboard"} className="link">Dashboard</Link></li>
            <li><MdChevronRight size={20} /></li>
            <li><Link to={"/address-book"} className="link">Address Book</Link></li>
            <li><MdChevronRight size={20} /></li>
            <li><Link to={"/address-book/add"} className="link">Add</Link></li>
          </ul>
        </div>
      </section>
      {/* Bread Crumbs (End) */}

      {/* Address Section (Start) */}
      <section className="relative py-10">
        <div className="container space-y-10">
          <div>
            <h1 className="font-semibold md:text-3xl sm:text-2xl">Add Address</h1>
          </div>
          <div className="grid md:grid-cols-5 sm:grid-cols-1 md:gap-10 sm:gap-5">

            <div className="md:col-span-5 sm:col-span-1">
              <h1 className="font-semibold text-lg mb-1">General Information</h1>
              <p className="text-xs text-gray-600 font-light">Please fill the required fields</p>
            </div>

            <InputBox
              name={"label"}
              type={"text"} 
              label={"Label"} 
              required={true} 
              placeholder={"Label (Ex. Home, Office)"} 
              onChange={handleInputChange} 
              value={label} />

            <InputBox 
              name={"name"} 
              type={"text"} 
              label={"Name"} 
              required={true} 
              placeholder={"Your Name"}
              value={name} 
              onChange={handleInputChange} />

            <InputBox 
              name={"email"} 
              type={"text"} 
              label={"Email Address"} 
              required={true} 
              placeholder={"Email Address"}
              value={email}
              onChange={handleInputChange} />

            <InputBox 
              name={"phone"} 
              type={"tel"} 
              pattern={"[0-9]{10}"} 
              label={"Phone"} 
              required={true} 
              placeholder={"Phone (10 Digits)"}
              value={phone}
              onChange={handleInputChange} />

            <InputBox 
              name={"phoneAlternate"} 
              type={"tel"} 
              pattern={"[0-9]{10}"} 
              label={"Phone (Alternate)"}
              value={phoneAlternate}
              onChange={handleInputChange} />

            <div className="md:col-span-5 sm:col-span-1">
              <h1 className="font-semibold text-lg mb-1">Address Information</h1>
              <p className="text-xs text-gray-600 font-light">Please fill the required fields</p>
            </div>

            <InputBox 
              name={"home"} 
              type={"text"} 
              label={"Home / Flat / Building"} 
              placeholder={"Home / Flat / Building"}
              value={home}
              onChange={handleInputChange} />

            <InputBox 
              name={"street"} 
              type={"text"} 
              label={"Street / Area"} 
              placeholder={"Street / Area"} 
              required={true}
              value={street}
              onChange={handleInputChange} />

            <InputBox 
              name={"city"} 
              type={"text"} 
              label={"City"} 
              placeholder={"City"} 
              required={true}
              value={city}
              onChange={handleInputChange} />

            <InputBox 
              name={"postalCode"} 
              type={"text"} 
              label={"Postal Code"} 
              placeholder={"Postal Code"} 
              required={true}
              value={postalCode} 
              onChange={handleInputChange}/>

            <InputBox 
              name={"state"} 
              type={"text"} 
              label={"State"} 
              placeholder={"State"} 
              required={true}
              value={state}
              onChange={handleInputChange} />

            <InputBox 
              name={"country"} 
              type={"text"} 
              label={"Country"} 
              placeholder={"Country"} 
              required={true}
              value={country}
              onChange={handleInputChange} />

          </div>
          <div>
            <button type="submit" onClick={() => handleSubmit()} className="btn-primary-md md:w-fit sm:w-full">Add Address</button>
          </div>
        </div>
      </section>
      {/* Address Section (End) */}

    </React.Fragment>
  );
}

export default AddAddress;