import React,{useState} from 'react'
import GoogleMapReact from 'google-map-react'
import LocationPin from "./LocationPin";
import './map.css'
import mapStyles from "./mapStyles";

const Map = ({shops, zoomLevel }) => {
    const [type, setType] = useState('');
    
    function selectShop(type) {
        setType(type)
        console.log("aaaaaaaaaaaaaaaaaaaaai"+type);
      }

    console.log("location sunday: ",shops);
        const defaultProps = {
            
        center: {
            lat: 19.28714,
            lng: 72.86884
        },
        zoom: 15
    };
    const options={
      styles:mapStyles,
      disableDefaultUI: true,
      draggable: true,
      keyboardShortcuts: false,
      scaleControl: true,
      scrollwheel: true,
  };
 
   
    return (
        <div className="map" style={{backgroundColor:"#2C3D6333",borderRadius:"5%",overflow:"hidden"}}>
<div id="motabahiheadtitle">
<div class="row">  <p id="mapmotabhaai" style={{color:"#2C3D63"}}>Motabhaai's</p> </div>
 <div class="row"><p id="mapmotabhaaisecond" style={{color:"#2C3D63"}}>of Mira Bhayander</p></div>
 <div class="row"> <p id="mapmotabhaaithird" style={{color:"#2C3D63"}}>The good, The best and the superstar!</p> </div>
</div>

            <div className="google-map" style={{ height: '70vh',borderRadius:"30px",overflow:"hidden"}}>
                <GoogleMapReact
                    // bootstrapURLKeys={{key: process.env.GOOGLE_API_KEY}}
                    bootstrapURLKeys={{key: 'AIzaSyDoCcw1roUTnP4zfkip01W__M3SplAf77Y'}}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                    options={{options}}
                >

   


                   
{shops.map(item => {
    console.log("statetypeconsole======",item.type)
    console.log("state............x",type)
    // const itemd = item.filter(item => item.type === type)
    if(item.type===type){
        return (
            <LocationPin 
            // onClick={}
           
             
                lat={item.lat}
                lng = {item.lng}
                text = {item.text}
                type={item.type}
                name={item.name}
            />
        )

    }
	
    
})}


<table class="table table-dark" id="maptableweb">
  <thead>
    <tr style={{height:"3rem"}}>
   
      <th scope="col">Type</th>
      <th scope="col">No of shop</th>
     
    </tr>
  </thead>
  <tbody>
  
    <tr>
   
    <td onClick={() => selectShop('dairy')} key={'dairy'}>Dairy</td>
      <td>34</td>
     
    </tr>
    <tr>
  
      <td onClick={() => selectShop('kiranas')} key={'kiranas'}>Kiranas</td>
      <td>04</td>
     
    </tr>
    <tr>
     
      <td onClick={() => selectShop('bakery')} key={'bakery'} >Bakery</td>
      <td>12</td>
     </tr>
     <tr>
      <td onClick={() => selectShop('toys')} key={'toys'}>Toys</td>
      <td>05</td>
</tr>
<tr>
      <td onClick={() => selectShop('cosmetic')} key={'cosmetic'}>Cosmetic</td>
      <td>08</td>
</tr>
<tr>
      <td onClick={() => selectShop('giftshop')} key={'giftshop'}>Gift Shop</td>
      <td>20</td>
</tr>
<tr>
      <td onClick={() => selectShop('electrical')} key={'electrical'}>Electrical</td>
      <td>25</td>
     </tr> 
     <tr>
      <td onClick={() => selectShop('hardware')} key={'hardware'}>Hardware</td>
      <td>27</td>
</tr>
<tr>
      <td onClick={() => selectShop('groceries')} key={'groceries'}>Groceries</td>
      <td>13</td>
    </tr>
  </tbody>
</table>



                </GoogleMapReact>
              
            </div>
            <table class="table table-dark" id="maptablemob">
  <thead>
    <tr style={{}}>
   
      <th scope="col">Type</th>
      <th scope="col">No of shop</th>
     
    </tr>
  </thead>
  <tbody>
  
    <tr>
   
    <td className="tdmodule" onClick={() => selectShop('dairy')} key={'dairy'}>Dairy</td>
      <td className="tdmodule">34</td>
     
    </tr>
    <tr>
  
      <td className="tdmodule" onClick={() => selectShop('kiranas')} key={'kiranas'}>Kiranas</td>
      <td className="tdmodule">04</td>
     
    </tr>
    <tr>
     
      <td className="tdmodule" onClick={() => selectShop('bakery')} key={'bakery'} >Bakery</td>
      <td className="tdmodule">12</td>
     </tr>
     <tr>
      <td className="tdmodule" onClick={() => selectShop('toys')} key={'toys'}>Toys</td>
      <td className="tdmodule">05</td>
</tr>
<tr>
      <td className="tdmodule" onClick={() => selectShop('cosmetic')} key={'cosmetic'}>Cosmetic</td>
      <td className="tdmodule">08</td>
</tr>
<tr>
      <td className="tdmodule" onClick={() => selectShop('giftshop')} key={'giftshop'}>Gift Shop</td>
      <td className="tdmodule">20</td>
</tr>
<tr>
      <td className="tdmodule" onClick={() => selectShop('electrical')} key={'electrical'}>Electrical</td>
      <td className="tdmodule">25</td>
     </tr> 
     <tr>
      <td className="tdmodule" onClick={() => selectShop('hardware')} key={'hardware'}>Hardware</td>
      <td className="tdmodule">27</td>
</tr>
<tr>
      <td className="tdmodule" onClick={() => selectShop('groceries')} key={'groceries'}>Groceries</td>
      <td className="tdmodule">13</td>
    </tr>
  </tbody>
</table>
        </div>
    )
}

export default Map;
