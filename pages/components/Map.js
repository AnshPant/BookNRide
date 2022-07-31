import React from 'react'
import "mapbox-gl/dist/mapbox-gl.css"
import mapboxgl from '!mapbox-gl';
import tw from "tailwind-styled-components"
import {useEffect} from 'react'




const Map = (props) =>{
    mapboxgl.accessToken = 'pk.eyJ1IjoidHJpYWx0cmlhbDEyIiwiYSI6ImNsNTczODNybTE1bzAzZG1mcTd5Z2cwbHYifQ.u42_YrelEvVx-CZkPWHGjg';    
    //this things runs first 
    useEffect(() => {
    
        const map  = new mapboxgl.Map({
          container: "map",
          style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
          
          center: [74.5, 27],
          zoom: 2,  
        })
        //setting pickup and drop markers new delhi to jaipur while pracrtising
      if(props.p)  {
        addToMap(map,props.p)
      }
      if(props.d)  {
        addToMap(map,props.d)
      }
      
      //zoming
      if(props.p && props.d){
        map.fitBounds([
          props.p,props.d
        ],{padding: 60})
      }

      },[props.p,props.d])

      
     
      

      const addToMap = (map, coordinates) =>{
        const marker1 = new mapboxgl.Marker()
        .setLngLat(coordinates)
        .addTo(map);
      }
      
      
    
    return(
        <Wrapper id='map'>  </Wrapper>
    )
}

export default Map
const Wrapper =tw.div`
flex-1 h-1/2
`