// Last UpdateHome.js 22 jan 21
import React, { Component } from 'react'
import Features from './Features'
import MapSection from './components/GoogleMap/Map';
import MapSec from './components/GoogleMap/Map';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import HorizantalStepper from './HorizantalStepper';
import Join from './Join'
// import shopkeeper from '../src/images/shopkeeper.svg';
import shopkeeper from '../src/images/shopkeeper2.png';
import discover from '../src/images/discover-02.png';
import Group104 from '../src/images/Group104.png';




import firebase from 'firebase'
var firebaseConfig = {
  apiKey: "process.env.REACT_APP_FIREBASE_API_KEY",
  authDomain: "process.env.REACT_APP_FIREBASE_AUTH_DOMAIN",
  projectId: "process.env.REACT_APP_FIREBASE_PROJECT_ID",
  storageBucket: "process.env.REACT_APP_FIREBASE_STORAGE_BUCKET",
  messagingSenderId: "process.env.REACT_APP_FIREBASE_SENDER_ID",
  appId: "process.env.REACT_APP_FIREBASE_APP_ID"
  };
  firebase.initializeApp(firebaseConfig);
  let emailInfo=firebase.database().ref("infos")
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      type:'',
    };
   
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({email: event.target.value});
    }
    
    handleSubmit(event) {
       const email=this.state.email;
       alert('A name was submitted: ' + this.state.email);
       event.preventDefault();
       this.saveEmailInfo(email);
       alert("hhhhhhhhh"+email)
      }

     //save info to Firebase
    saveEmailInfo(email){
    let newContactInfo=emailInfo.push();
    newContactInfo.set({
    email:email
    })
    }


    render() {
    

    const shops=[
      {
        lat: 19.48438,
        lng: 72.36417,
        type:"kiranas",
         name:"kiranaA",
      },
      {
        lat: 19.28363,
        lng: 72.86202,
        type:"kiranas",
         name:"Unique The Gift Store",
      },
      {
        lat: 19.28375,
        lng: 75.87605,
        type:"kiranas",
         name:"New Hanuman Kirana Store",
      },
      {
        lat: 19.27302,
        lng: 72.88037,
        type:"kiranas",
         name:"Choudhary Kirana Store",
      },
      {
        lat: 19.27878,
        lng: 72.87837,
        type:"kiranas",
         name:"New Mahadev Super Market",
      },
      {
        lat: 19.27933,
        lng: 72.86722,
        type:"kiranas",
         name:"Gokul Kirana Store",
      },
      {
        lat: 19.30909,
        lng: 72.85063,
        type:"kiranas",
         name:"Mahavir Kirana Store",
      },
      {
        lat: 19.28363,
        lng: 72.86202,
        type:"cosmetic",
         name:"Beauty Parlor A",
      },
      {
        lat: 19.28764,
        lng: 72.86624,
        type:"cosmetic",
         name:"Pramila Beauty Parlor",
      },
      {
        lat: 19.28764,
        lng: 72.86624,
        type:"groceries",
         name:"Ram Krishna Manglore Store",
      },
      {
        lat: 19.28486,
        lng: 72.85778,
        type:"dairy",
         name:"Super Dairy",
      },
      {
        lat: 19.31404,
        lng: 72.85440,
        type:"dairy",
         name:"Shrinath Dairy",
      },
      {
        lat: 19.30750,
        lng: 72.85057,
        type:"dairy",
         name:"Bhajanla Dairy",
      },
      {
        lat: 19.29417,
        lng: 72.86155,
        type:"dairy",
         name:"Nagori Dairy",
      },
      {
        lat: 19.28486,
        lng: 72.85778,
        type:"dairy",
         name:"Super Dairy",
      },
      {
        lat: 19.29167,
        lng: 72.85914,
        type:"dairy",
         name:"Sagar Dairy",
      },
      {
        lat: 19.28738,
        lng: 72.85914,
        type:"dairy",
         name:"Nagori Sufi Dairy",
      },
      {
        lat: 19.28438,
        lng: 72.86417,
        type:"kiranas",
         name:"kiranaB",
      },
      
      {
        lat: 19.27238,
        lng: 72.86210,
        type:"bakery",
         name:"Master Bakery",
      },
     
      {
        lat: 19.28428,
        lng: 72.85753,
        type:"bakery",
         name:"Bhaijaan Bakery",
      },
     
      {
        lat: 19.27229,
        lng: 72.86219,
        type:"bakery",
         name:" Sagar Bakery",
      },
      
      {
        lat: 19.28071,
        lng: 72.86993,
        type:"electrical",
         name:"Miracle Electrical Solutions India Pvt. Ltd.",
      },
      {
        lat: 19.28417,
        lng: 72.86457,
        type:"electrical",
         name:"Gaurav Electricals",
      },
     
      {
        lat: 19.28049,
        lng: 72.86221,
        type:"hardware",
         name:"Shivam Electric And Hardware Stores",
      },
      {
        lat: 19.5438,
        lng: 72.36417,
        type:"bakery",
         name:"BakeryA",
      },
      {
        lat: 19.68438,
        lng: 72.36417,
        type:"bakery",
         name:"BakeryB",
      },
      {
        lat: 19.31020,
        lng: 72.85566,
        type:"toys",
         name:"Krishna Toys",
      },
      {
        lat: 19.48438,
        lng: 72.56417,
        type:"giftshop",
         name:"giftshopA"
      },
      {
        lat: 19.28438,
        lng: 72.86417,
        type:"giftshop",
         name:"giftshopB"
      },
      {
        lat: 19.68438,
        lng: 72.46417,
        type:"cosmetic",
         name:"CosmeticA"
      },
      {
        lat: 19.8838,
        lng: 72.10417,
        type:"cosmetic",
         name:"CosmeticB"
      },
    ]

     
        return (
      

<div class="container-fluid" style={{height:"6000px"}}>
  {/* 3***change */}
  <div class="homecontainer" style={{}}>  
  <div id="carouselExampleDark" className="carousel carousel-dark slide homecarousel" data-bs-ride="carousel">

<ol className="carousel-indicators" id="home">
    <li data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"></li>
    <li data-bs-target="#carouselExampleDark" data-bs-slide-to="1"></li>
    <li data-bs-target="#carouselExampleDark" data-bs-slide-to="2"></li>
    </ol>
  <div class="row justify-content-center text-center">
  <div className="carousel-inner">




  <div className="carousel-item active" data-bs-interval="5000">
      <div class="row" style={{paddingTop:"2%"}}>
<p id="homenewtitle">Free digital platform</p>
      </div>
     
<div class="row">
<p id="homesubtitle">
sellers to promote,manage & sell their goods and services
</p>
</div>
<div id="learnregister" class="row justify-content-center text-center" style={{paddingTop:"27px"}}>
       <div class="col-2" style={{paddingLeft:"5%"}}>
         {/* 3***change */}
        <button id="learnmore" style={{border:"1px solid orange"}} type="button" class="btn btn-default" >Learn More</button>
       </div>
       <div id="homeregisterbutton" class="col-2 " style={{paddingRight:"5%"}} >
           {/* 3***change */}
        <button id="register" style={{backgroundColor:"#2c3d63",border:"1px solid #FADA80",}} type="button" class="btn btn-primary">Register</button>
       </div>
      </div>

</div>



<div className="carousel-item" data-bs-interval="5000">
      <div class="row" style={{paddingTop:"2%"}}>
<p id="homenewtitle">Free digital platform</p>
      </div>
     
<div class="row">
<p id="homesubtitle">
sellers to promote,manage & sell their goods and services
</p>
</div>
<div id="learnregister" class="row justify-content-center text-center" style={{paddingTop:"27px"}}>
       <div class="col-2" style={{paddingLeft:"5%"}}>
         {/* 3***change */}
        <button id="learnmore" style={{border:"1px solid orange"}} type="button" class="btn btn-default" >Learn More</button>
       </div>
       <div id="homeregisterbutton" class="col-2 " style={{paddingRight:"5%"}} >
           {/* 3***change */}
        <button id="register" style={{backgroundColor:"#2c3d63",border:"1px solid #FADA80",}} type="button" class="btn btn-primary">Register</button>
       </div>
      </div>

</div>




</div></div>
</div>

<div id="webfooter" class="row justify-content-center" style={{marginTop:"100px",position:"relative",top:130,marginBottom:"20px"}}>
       <div class="col-md-6 "style={{marginTop:"100px",borderRadius:"20px", border:"3px solid #FADA80"}} id="flotbox">

       <div class="row justify-content-center">
       <div class="col-5">
       <div class="row justify-content-center" style={{ marginTop:17}}>
         <p style={{fontFamily:"Comfortaa",color:"#2c3d63",fontWeight:"bold",fontSize:"12px", margin:"10px"}}><ion-icon id="launchicon" name="cash-outline"></ion-icon> Launching On</p>
       </div>
       <div class="row justify-content-center">
        <p style={{fontSize:"18px",fontWeight:"bold",color:"#2c3d63"}}>April 2021</p>
       </div>
      </div>


      <div class="col-md-7" style={{borderRadius:"19px",border:"1px solid #2c3d63",backgroundColor:"#2c3d63",marginRight:"-0.5%"}}>

        <form onSubmit={this.handleSubmit}> 
      <div class="row justify-content-center text-center" >
       <p style={{fontFamily:"Comfortaa",color:"white",fontSize:"12px", margin:"10px"}}><ion-icon id="launchicon" name="cash-outline" style={{color:"white"}}></ion-icon> Stay Notified</p>
      </div> 
         
    <div class="row justify-content-center">
       <div class="col-md-10">
        <div class="row justify-content-center text-center" style={{}}>
        
        <div class="col-md-9">
        <input type="email" value={this.state.email} onChange={this.handleChange}  class="form-control email mainLoginInput" placeholder="&#xf199;  &#xf095;  Email ID/Phone Number" style={{borderRadius:20}}/>
          </div> 
          
             <div class="col-md-2" style={{paddingTop:"1.5%",marginLeft:"-4%",paddinLeft:"-10%"}}>
        <button style={{fontFamily:"Comfortaa",backgroundColor:"#fada80",border:"1px solid #fada80",borderRadius:20, width:"4rem", justifyContent:"center",marginRight:"15%"}} type="submit" value="Submit" class="btn btn-primary">
       
       
       <i id="arrowforward" class="fa fa-arrow-circle-right">   </i>
      
       </button>
        </div>
      
        </div>

      
       </div>
            
    </div>
</form>

   </div>









  </div>
 </div>

</div>



{/* 3***change */}
<div id="mobilehomefooter" style={{marginTop:"100px",marginBottom:"20px"}} >
<div class="col-md-6 "style={{marginTop:"100px",borderRadius:"20px", border:"3px solid #FADA80",}} id="flotbox">

       <div class="row justify-content-center text-center">
         <p style={{fontFamily:"Comfortaa",color:"#2c3d63",fontWeight:"bold",fontSize:"12px", margin:"10px"}}><ion-icon id="launchicon" name="cash-outline"></ion-icon> Launching On</p>
       </div>
       <div class="row justify-content-center text-center" >
        <p style={{fontSize:"18px",fontWeight:"bold",color:"#2c3d63"}}>April 2021</p>
       </div>
      
</div>


 <div id="mobilebluefooter" class="col-md-6" style={{borderRadius:"20px",border:"1px solid #2c3d63",backgroundColor:"#2c3d63",marginTop:"40px"}}>
 <form id="homemobileform" onSubmit={this.handleSubmit}> 
      <div class="row justify-content-center text-center" >
       <p style={{fontFamily:"Comfortaa",color:"white",fontSize:"12px", margin:"10px"}}><ion-icon id="launchicon" name="cash-outline" style={{color:"white"}}></ion-icon> Stay Notified</p>
      </div> 
      <div class="row justify-content-center text-center" style={{paddingBottom:"2%"}} >
        <div class="col-9">
        <input type="email" value={this.state.email} onChange={this.handleChange} class="form-control email mainLoginInput" placeholder="&#xf199;  &#xf095;  Email ID/Phone Number" style={{borderRadius:20}}/>
          </div>  
          <div class="col-2" style={{paddingTop:"1.5%",marginLeft:"-4%",paddinLeft:"-10%"}}>
            {/* 3***change */}
        <button id="homearrowbutton" style={{fontFamily:"Comfortaa",backgroundColor:"#fada80",border:"1px solid #fada80",borderRadius:20,justifyContent:"center",marginRight:"-15%"}} type="submit" value="Submit" class="btn btn-primary">
       
       
       <i id="arrowforward" class="fa fa-arrow-circle-right">   </i>
      
       </button>
     
          </div>
      </div>  

</form>


   </div>

</div>





  </div>
  
  



{/* =================================================About us Module=========================================== */}
<div id="aboutcontainer" className="container-fluid">
<div className="row" id="sidehead">About us</div>
<div className="row" id="sidebottom"></div>
<div className="row justify-content-center" id="aboutmaincont">
 <div className="col-lg-6">
     <div className="row justify-content-center">
     <div className="card" id="cardabout">
     <div className="card-body">
        <p id="aboutparam1">The power to setup a Business, not just a shop</p>
        <p id="aboutparam2">With Motabhaai, you manage order, inventory, and 'khatas' from your phone. Plus, you can send digital receipts and payments notifications via WhatsApp. and create an online store to sell you products to anyone, anywhare.</p>
        <a href="/about us" className="btn" id="aboutbtn">Read More</a>
       </div>
      </div>
     </div>
 
 </div>
 <div className="col-lg-6">
 <img  id="motabhimg" src={discover} className="card-img-top" alt="home img"/>
</div>
</div>
</div>
{/* =================================================Reasons Module=========================================== */}
<div className="container-fluid">
<div className="row" id="sidehead">Reasons</div>
<div className="row" id="sidebottom"></div>
<div className="row justify-content-center" id="reasonmaincont">
 <div className="col-lg-6">
     <div className="row justify-content-center">
     <div id="cardreason">
     <div className="card-body">
        <p id="reasonparam1">Run your business 24x7</p>
        <p id="reasonparam2">Sell to your local customers round the clock, even when your brick and mortar store is closed or let them browse through your catalog and schedule their orders.</p>
     </div>
     </div>
 </div>
 </div>
 <div className="col-lg-6">
 <img  id="motabhimg" src={discover} className="card-img-top" alt="home img"/>
</div>
</div>
<div className="row justify-content-center" style={{fontSize:"2rem", marginTop:55}}>Benefits</div>
<div className="row justify-content-center" id="benefitrc">
 <div className="col-lg-3">
   <div className="row justify-content-center">
   <div className="card" id="cardreason1">
      <div className="card-body">
        <p id="reasonparam3">Run Flash sales</p>
        <p id="reasonparam4">Clear out your seasonal inventory online and make room for fresh in demand products in your shop.</p>
      </div>
      <span className="circle"><svg id="benefiticon" xmlns="http://www.w3.org/2000/svg"  fill="white" className="bi bi-handbag" viewBox="0 0 16 16">
          <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.361a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.356a2.5 2.5 0 0 0 2.472-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 0 0 1 0V6h4z"/>
         </svg></span>
   </div>
   </div>
  </div>
  <div className="col-lg-3" id="benefitcolmn">
  <div className="row justify-content-center">
    <div className="card" id="cardreason2">
      <div className="card-body">
        <p id="reasonparam5">Increase your profit margins</p>
        <p id="reasonparam6">Sell more units of your best selling products by selling it in store and online.</p>
      </div>
      <span className="circle1"><svg id="benefiticon1" xmlns="http://www.w3.org/2000/svg" fill="white" className="bi bi-handbag" viewBox="0 0 16 16">
          <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.361a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.356a2.5 2.5 0 0 0 2.472-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 0 0 1 0V6h4z"/>
         </svg></span>
         </div>
   </div>
  </div>
  <div className="col-lg-3" id="benefitcolmn1">
  <div className="row justify-content-center">
    <div className="card" id="cardreason3">
      <div className="card-body">
        <p id="reasonparam7">Be even more discoverable</p>
        <p id="reasonparam8">Clear out your seasonal inventory online and make room for fresh in demand products in your shop.</p>
      </div>
      <span className="circle2"><svg id="benefiticon2" xmlns="http://www.w3.org/2000/svg" fill="white" className="bi bi-handbag" viewBox="0 0 16 16">
          <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.361a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.356a2.5 2.5 0 0 0 2.472-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 0 0 1 0V6h4z"/>
         </svg></span>
         </div>
   </div>
  </div>
  <div className="col-lg-3" id="benefitcolmn2">
  <div className="row justify-content-center">
    <div className="card" id="cardreason4">
      <div className="card-body">
        <p id="reasonparam9">Get repeat purchase</p>
        <p id="reasonparam10">Let customers who love your products buy them again easily, right from their home.</p>
      </div>
      <span className="circle3"><svg id="benefiticon3" xmlns="http://www.w3.org/2000/svg" fill="white" className="bi bi-handbag" viewBox="0 0 16 16">
          <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.361a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.356a2.5 2.5 0 0 0 2.472-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 0 0 1 0V6h4z"/>
         </svg></span>
         </div>
   </div>
  </div>
</div>
</div>








{/* Feature container */}


<div style={{marginTop:"5rem"}}>
<Features/>
</div>

{/* Activities */}
<div style={{marginTop:"5rem"}}>
    {/* <MapSection location={location}/> */}
    <MapSection shops={shops} style={{}}/>
  
</div>
  
<div class="inspirationcontainer" style={{marginTop:'10%',borderBottom:"5%",height:"500px"}}>
 <div class="container" sytle={{marginTop:"300px"}}>
      <div class="row">
<p id="inspirationtitle" style={{color:"#EA9999",fontFamily:"Roboto"}}>Inspiration</p>
      </div>
      <div id="sidebottominspirat"></div>
      <div class="row justify-content-center text-center">
      <p id="meetid" style={{color:"#2C3D63",fontFamily:"Roboto",fontWeight:"bold"}}><strong>Meet the people who inspire us!</strong></p>
      </div>

      <div id="softwarelike" class="row justify-content-center text-center"><p id="softwarelikp" style={{color:"#2C3D63",paddingBottom:"2%"}}>software like Aldus PageMaker including versions of Lorem Ipsum.</p></div>

      <div class="row" style={{backgroundColor:"#5C343C33",borderRadius:"20px"}}>


      <div class="homecontainer" style={{position:"relative",}}>
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">


  <div class="row justify-content-center text-center">
  <div className="carousel-inner">




  <div className="carousel-item active" data-bs-interval="1000">

<div id="inspirationimgtextcontainer" class="row">
<div className="col-lg-5 col-offset-2" style={{}}>
 <img style={{width:"100%",padding:"10%"}} id="shopkeeperimg" src={shopkeeper} className="card-img-top" alt="home img"/>
</div>
        <div class="col-5">
          <div id="inspirationdivt" class="row" style={{}}>
            <p id="inspirationthirdtitle" style={{color:"#5C343C",fontWeight:"bold"}}>What is Lorem Ipsum?</p>
          </div>
          <div id="inspirationdivtext" class="row">
            <p id="inspirationthirdtext" style={{color:"#5C343C",fontFamily:"Roboto",fontWeight:"bold"}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
</div>
      
</div>


<div className="carousel-item" data-bs-interval="1000">

<div id="inspirationimgtextcontainer" class="row">
<div className="col-lg-5 col-offset-2" style={{}}>
 <img style={{width:"100%",padding:"10%"}} id="shopkeeperimg" src={shopkeeper} className="card-img-top" alt="home img"/>
</div>
        <div class="col-5">
          <div id="inspirationdivt" class="row" style={{}}>
            <p id="inspirationthirdtitle" style={{color:"#5C343C",fontWeight:"bold"}}>What is Lorem Ipsum?</p>
          </div>
          <div id="inspirationdivtext" class="row">
            <p id="inspirationthirdtext" style={{color:"#5C343C",fontFamily:"Roboto",fontWeight:"bold"}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
</div>
      
</div>




<a class="carousel-control-prev" href="carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>

</div></div></div></div>


      </div>
    </div>
 </div>
  
 
  <div>
<div id="registerwebview" class="registercontainer" style={{marginTop:'25%',borderBottom:"5%",height:"360px",backgroundColor:"#FADA8033"}}>
  <div class="container">

    <div  class="row">
      <div id="registertitletextcotainer" class="col-lg-6">
        <div class="row">
        <p id="registertitle" style={{color:"#5C343C",fontFamily:"Roboto"}}>Register</p>
        </div>
        <div class="row">
        <p style={{color:"#5C343C",fontFamily:"Roboto",fontSize:"30px"}}>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
        </div>
      </div>
      <div id="registercard" class="col-lg-6" style={{backgroundColor:"#5C343C",borderRadius:"20px"}}>
      <div class="row">
        <p id="motabhaaisambhal" style={{ color:"#FEF8E6",fontSize:"30px"}}>#Motabhaai Sambhaalega</p>
        </div>
        <div class="row">
        <div class="row">
        <p id="registermotabhaitext" style={{color:"#FEF8E6",fontFamily:"Roboto",textAlign:"center",fontSize:"25px"}}>It's not just a hastag, it a commitment. you are out partners, out superstars. so, when we say motabhaai sambhaal lega, we mean aap sambhaal lega, kyunki hum sath sath hai.</p>
        </div>
        </div>
      </div>
    </div>
  </div>

</div>

{/* change */}
<div id="registermobileview" style={{backgroundColor:"#FADA8033"}}>

  <div class="row justify-content-center" >
  <div class="col-md-9">

<div class="row">
  <p style={{color:"#5C343C", fontSize:"40px"}}>Register</p>
  
</div>
<div class="row">
  
<p style={{fontSize:"22px"}}>Contrary to popular belief, Lorem Ipsum<br/>is not simply random text.</p>
</div>

</div>
  </div>



<div  class="row justify-content-center text-center">
<div class="col-md-9" id="mobileregistercardview">
<div class="row">
   
    <p style={{fontSize:"30px",color:"#FEF8E6" , marginTop:"10%"}}>#Motabhaai Sambhaalega</p>
  </div>
  <div class="row">
    <p style={{fontSize:"18px",color:"#FEF8E6", marginTop:"13%"}}>It's not just a hastag, it a commitment. you are out partners, out superstars. so, when we say motabhaai sambhaal lega, we mean aap sambhaal lega, kyunki hum sath sath hai.</p>
  </div>
</div>
</div>
</div>
</div>
 
<div id="footertopdiv">
<div class="footercontainer" style={{backgroundColor:"#2C3D63"}}>
<div id="footernonemobile" class="row">
<div id="leftsubscribecontainer" class="col-6" >
<div class="row" >
<div id="footersubscribe" class="row">Subscribe</div>
<div id="footerfirstsubtitle" class="row">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
<div id="footerinput" class="row">
<form onSubmit={this.handleSubmit}> 
<div class="row">
<div class="col-md-9">
<div class="row">
<div class="col-md-9">
<input id="footeremailinput" type="email" value={this.state.email} onChange={this.handleChange}  class="form-control email mainLoginInput" placeholder="&#xf199;  &#xf095;  Email ID/Phone Number" style={{borderRadius:20}}/>
</div> 
 <div class="col-md-2" style={{paddingTop:"1.5%",marginLeft:"-4%",paddinLeft:"-10%"}}>
<button style={{fontFamily:"Comfortaa",backgroundColor:"#ADDCCA",border:"1px solid #fada80",borderRadius:20, width:"4rem", justifyContent:"center",marginRight:"15%"}} type="submit" value="Submit" class="btn btn-primary">
<i id="arrowforward" class="fa fa-arrow-circle-right"></i>
</button>
</div>

</div>
</div>
</div>
</form>
</div>
</div>
  </div>
  <div className="col-lg-6">
 <img  id="motabhimgnew" src={discover} className="card-img-top" alt="home img"/>
</div>

</div>
    
<div className="row justify-content-center" id="footerconsec">
  <div className="col-lg-3">
    <div className="row justify-content-center">
      <div col-lg-6 >
       <img  id="footerimg" src={Group104} className="card-img-top" alt="home img" style={{width:"12rem",}}/>
       </div>
      <div col-lg-6 >
        <p style={{color:"#5F7096"}} id="footerparam">
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable".
        </p>
      </div>
    </div>
  </div>
  <div className="col-lg-6">
    <div className="row">
    <div className="col" id="footercolsec">
  <div className="row justify-content-center">
  <p style={{color: "#ADDCCA", fontSize:"18px"}}>Features</p>
</div>
<div className="row justify-content-center">
  <p style={{color: "#5F7096", fontSize:"16px"}}>Transaction</p>
</div>
<div className="row justify-content-center">
  <p style={{color: "#5F7096", fontSize:"16px"}}>Inventory</p>
</div>
<div className="row justify-content-center">
  <p style={{color: "#5F7096", fontSize:"16px"}}>Orders</p>
</div>
<div className="row justify-content-center">
  <p style={{color: "#5F7096", fontSize:"16px"}}>Account</p>
</div>
  </div>
<div className="col" id="footercolsec1">
<div className="row justify-content-center">
  <p style={{color: "#ADDCCA", fontSize:"18px"}}>Resources</p>
</div>
<div className="row justify-content-center">
  <p style={{color: "#5F7096", fontSize:"16px"}}>Blogs</p>
</div>
<div className="row justify-content-center">
  <p style={{color: "#5F7096", fontSize:"16px"}}>Article</p>
</div>
<div className="row justify-content-center">
  <p style={{color: "#5F7096", fontSize:"16px"}}>Social</p>
</div>
</div>
<div className="col" id="footercolsec2">
<div className="row justify-content-center">
  <p style={{color: "#ADDCCA", fontSize:"18px"}}>Company</p>
</div>
<div className="row justify-content-center">
  <p style={{color: "#5F7096", fontSize:"16px"}}>About</p>
</div>
<div className="row justify-content-center">
  <p style={{color: "#5F7096", fontSize:"16px"}}>Privacy</p>
</div>
<div className="row justify-content-center">
  <p style={{color: "#5F7096", fontSize:"16px"}}>Vendor partners</p>
</div>
<div className="row justify-content-center">
  <p style={{color: "#5F7096", fontSize:"16px"}}>Team</p>
</div>
</div>
</div>

</div>
  <div className="col-lg-3" id="footercolsec3">
  <div className="row justify-content-center">
  <p style={{color: "#5F7096", fontSize:"16px"}}> <ion-icon name="call" style={{color:"#ADDCCA", fontSize:30}}></ion-icon> 7598453210</p>
</div>
<div className="row justify-content-center">
  <p style={{color: "#5F7096", fontSize:"16px"}}> <ion-icon name="pin" style={{color:"#ADDCCA", fontSize:30}}></ion-icon> mira road, thane, maharastra 401107</p>
</div>
<div className="row justify-content-center">
  <p style={{color: "#5F7096", fontSize:"16px"}}>  <ion-icon name="mail" style={{color:"#ADDCCA", fontSize:30}}></ion-icon> Hello@motabhaai.com</p>
</div>
<div className="row justify-content-center">
  <div className="col"><ion-icon name="logo-instagram" style={{color:"#ADDCCA", fontSize:30}}></ion-icon> </div>
  <div className="col"><ion-icon name="logo-facebook" style={{color:"#ADDCCA", fontSize:30}}></ion-icon></div>
  <div className="col"><ion-icon name="logo-twitter" style={{color:"#ADDCCA", fontSize:30}}></ion-icon></div>
</div>
  </div>
</div>



</div>
  </div>
</div>


        
        
        )
    }
}





export default Home;
