import React from 'react';
import {Tab, Tabs} from '@material-ui/core';
import { MdLooksOne,MdLooksTwo,MdLooks3,MdLooks4,MdLooks5,MdLooks6} from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.min.css';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


function Features(){

 const [value, setValue] = React.useState(0)
 const handleTabs = (e, val)=>{
   console.warn(val);
   setValue(val)
 }
    return (
   <div>
     {/* =================================================Features Module=========================================== */}
<div className="container-fluid">
<div className="row" id="sidehead">Features</div>
<div className="row" id="sidebottom"></div>

<Tabs value = {value} onChange={handleTabs} centered variant="fullWidth" id="featuresTabs" indicatorColor="red">
      <Tab label = "Transaction" id="featuresTab" />
      <Tab label = "Inventory" id="featuresTab1"/>
      <Tab label = "Orders" id="featuresTab2"/>
      <Tab label = "Khatas" id="featuresTab3"/>
</Tabs>

  <TabPanel value={value} index={0}>
    <div className="row justify-content-center" style={{marginTop:"55px"}}>
      <div className="col-lg-1"><p id="featurespara">Transaction</p></div>
      <div className="col-lg-8"><p id="featuresspanpara">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
    </div>
    <div className="row justify-content-center" id="featuresmaincont">
    <div className="row justify-content-center" id="featurescard">
    <div className="col-lg-4">
     <div className="row justify-content-center">
      <div id="cardfeatures1">
       <div className="card-body">
        <p id="featuresparam3">100% Transparent Records</p>
        <p id="featuresparam4">Never forgot even a single order or receipt, ever.</p>
       </div>
      </div>
     </div>
    </div>
    <div className="col-lg-4">
     <div className="row justify-content-center">
      <div id="cardfeatures2">
       <div className="card-body">
        <p id="featuresparam5">Receivable & Payable</p>
        <p id="featuresparam6">Manage bills and credits for customers and vendors.</p>
       </div>
      </div>
     </div>
    </div>
    <div className="col-lg-4">
     <div className="row justify-content-center">
      <div id="cardfeatures3">
       <div className="card-body">
        <p id="featuresparam7">Customer ledger entry</p>
        <p id="featuresparam8">Create bespoke accounts book your business.</p>
       </div>
      </div>
     </div>
    </div>
    </div>
    </div>
  </TabPanel>
  <TabPanel value={value} index={1}>
    <div className="row justify-content-center" style={{marginTop:"55px"}}>
      <div className="col-lg-1"><p id="featurespara">Inventory</p></div>
      <div className="col-lg-8"><p id="featuresspanpara">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
    </div>
    <div className="row justify-content-center" id="featuresmaincont">
    <div className="row justify-content-center" id="featurescard">
    <div className="col-lg-4">
     <div className="row justify-content-center">
      <div id="cardfeatures1">
       <div className="card-body">
        <p id="featuresparam3">Manage your store now</p>
        <p id="featuresparam4">Manage your product on digital catalog.</p>
       </div>
      </div>
     </div>
    </div>
    <div className="col-lg-4">
     <div className="row justify-content-center">
      <div id="cardfeatures2">
       <div className="card-body">
        <p id="featuresparam5">Reach milions online</p>
        <p id="featuresparam6">And thousands locally who can access your catalogfrom home.</p>
       </div>
      </div>
     </div>
    </div>
    <div className="col-lg-4">
     <div className="row justify-content-center">
      <div id="cardfeatures3">
       <div className="card-body">
        <p id="featuresparam7">Increase sales by 10x</p>
        <p id="featuresparam8">Drive engagement in your store through combo and subscriptions.</p>
       </div>
      </div>
     </div>
    </div>
    </div>
    </div>
  </TabPanel>
  <TabPanel value={value} index={2}>
    <div className="row justify-content-center" style={{marginTop:"55px"}}>
      <div className="col-lg-1"><p id="featurespara">Orders</p></div>
      <div className="col-lg-8"><p id="featuresspanpara">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
    </div>
    <div className="row justify-content-center" id="featuresmaincont">
    <div className="row justify-content-center" id="featurescard">
    <div className="col-lg-4">
     <div className="row justify-content-center">
      <div id="cardfeatures1">
       <div className="card-body">
        <p id="featuresparam3">Get orders from your customers.</p>
        <p id="featuresparam4">Offer then delivery or in-store pickup.</p>
       </div>
      </div>
     </div>
    </div>
    <div className="col-lg-4">
     <div className="row justify-content-center">
      <div id="cardfeatures2">
       <div className="card-body">
        <p id="featuresparam5">Create bills and invoice.</p>
        <p id="featuresparam6">Keep accurate records of all your orders through out the day.</p>
       </div>
      </div>
     </div>
    </div>
    <div className="col-lg-4">
     <div className="row justify-content-center">
      <div id="cardfeatures3">
       <div className="card-body">
        <p id="featuresparam7">Reduce wait time by 40%</p>
        <p id="featuresparam8">Your customers will never have to wait in line to tell you their orders.</p>
       </div>
      </div>
     </div>
    </div>
    </div>
    </div>
  </TabPanel>
  <TabPanel value={value} index={3}>
    <div className="row justify-content-center" style={{marginTop:"55px"}}>
      <div className="col-lg-1"><p id="featurespara">Khatas</p></div>
      <div className="col-lg-8"><p id="featuresspanpara">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
    </div>
    <div className="row justify-content-center" id="featuresmaincont">
    <div className="row justify-content-center" id="featurescard">
    <div className="col-lg-4">
     <div className="row justify-content-center">
      <div id="cardfeatures1">
       <div className="card-body">
        <p id="featuresparam3">Make customs ledgers.</p>
        <p id="featuresparam4">Create in-out transaction entries for customer & send reminders and payment links.</p>
       </div>
      </div>
     </div>
    </div>
    <div className="col-lg-4">
     <div className="row justify-content-center">
      <div id="cardfeatures2">
       <div className="card-body">
        <p id="featuresparam5">Wallet connected and secure.</p>
        <p id="featuresparam6">Get real time update of all your transaction.(online,offline,credits)</p>
       </div>
      </div>
     </div>
    </div>
    <div className="col-lg-4">
     <div className="row justify-content-center">
      <div id="cardfeatures3">
       <div className="card-body">
        <p id="featuresparam7">Business, volume based, and benefits.</p>
        <p id="featuresparam8">We rewards your customers for each of their shopping with you. Can you find the better deal?</p>
       </div>
      </div>
     </div>
    </div>
    </div>
    </div>
  </TabPanel>


</div>
   </div> 
 )
}

export default Features;


function TabPanel(props){
  const {children, value, index} = props
  return(
    <div>
    {value === index && (<h1>{children}</h1>)}
    </div>
  )
}
