import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import {getCenter} from 'geolib';

function Map({ searchResults }) {

    const [selectedLocation, setSelectedLocation] = useState({})
    const geoCoordinates = searchResults.map((result) => ({
        longitude: result.long,
        latitude: result.lat
    }))
    const center = getCenter(geoCoordinates);

    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 12
    })

    
    console.log(center)

    return (
        
            <ReactMapGL 
            className="shadow-lg"
                mapStyle='mapbox://styles/elsecag/ckscankzv41tk17pgqhds61en'
                mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOXAPI_KEY}
                {...viewport}
                onViewportChange={(nextViewport) => setViewport(nextViewport)}
            >
                {searchResults.map(result => (
                    <div key={result.long}>
                        <Marker
                        longitude={result.long}
                        latitude={result.lat}
                        offsetLeft={-20}
                        offsetTop={-10}
                        >
                        <p
                        className="cursor-pointer text-2xl hover:animate-bounce transition duration-300"
                        onClick={() => setSelectedLocation(result)}
                        >🎯</p>
                        </Marker>
                        {selectedLocation.long === result.long ? (
                            <Popup
                                className="z-30"
                                closeOnClick={true}
                                onClose={() => setSelectedLocation({})}
                                latitude={result.lat}
                                longitude={result.long}
                            >
                                {result.title}
                            </Popup>
                        ) : (false)}

                    </div>
                ))}
            </ReactMapGL>
        
    )
}

export default Map
