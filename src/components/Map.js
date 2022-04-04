import React, { useContext, useEffect } from "react"
import { Map, Marker } from "pigeon-maps"
import { StateContext } from "./stateManager";

const MyMap = () => {
    const {state, dispatch} = useContext(StateContext);
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(function(position) {
            dispatch({type: 'location', payLoad: {lat: position.coords.latitude, lon: position.coords.longitude}})
          });
    }, [dispatch])
    
  return (
    <Map defaultCenter={[state.location.lat, state.location.lon]} defaultZoom={10}>
      <Marker anchor={[state.location.lat, state.location.lon]} />
    </Map>
  )
}

export default MyMap;