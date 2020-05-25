import React  from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css'
const NavigationItems=(props)=>{
    return(
    <div className="NavigationItems">
        <NavigationItem className="PartOne" styles={{backgroundColor:"rgb(242,183,5)" }}
        link="/house"
        >Certification House</NavigationItem>
        <NavigationItem className="PartOne" styles={{backgroundColor:"rgb(4,173,191)"}}
        link="/"
        >Home            
        <svg className="Svg-icon" viewBox="0 0 20 20">
        <path d="M18.121,9.88l-7.832-7.836c-0.155-0.158-0.428-0.155-0.584,0L1.842,9.913c-0.262,0.263-0.073,0.705,0.292,0.705h2.069v7.042c0,0.227,0.187,0.414,0.414,0.414h3.725c0.228,0,0.414-0.188,0.414-0.414v-3.313h2.483v3.313c0,0.227,0.187,0.414,0.413,0.414h3.726c0.229,0,0.414-0.188,0.414-0.414v-7.042h2.068h0.004C18.331,10.617,18.389,10.146,18.121,9.88 M14.963,17.245h-2.896v-3.313c0-0.229-0.186-0.415-0.414-0.415H8.342c-0.228,0-0.414,0.187-0.414,0.415v3.313H5.032v-6.628h9.931V17.245z M3.133,9.79l6.864-6.868l6.867,6.868H3.133z">
        </path>
		</svg>
        </NavigationItem> 
        <NavigationItem  className="PartOne" styles={{backgroundColor:"rgb(219,68,55)" }}
        link="/check"
        >Check a Certificate!
        </NavigationItem>
    </div>
)
}

export default NavigationItems;
