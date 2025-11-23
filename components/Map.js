import { useState } from 'react';
import ReactMap, { Marker, Popup } from 'react-map-gl/mapbox';
import { getCenter } from 'geolib';

function Map({ searchResults }) {
    const [selectedLocation, setSelectedLocation] = useState({});

    // Transform search results object into the { latitude: 52.516272, longitude: 13.377722 } object format required by geolib
    const coordinates = searchResults.map((result) => ({
        longitude: result.long,
        latitude: result.lat,
    }));

    // The latitude and longitude of the center of locations coordinates
    const center = getCenter(coordinates);

    const [viewState, setViewState] = useState({
        longitude: center.longitude,
        latitude: center.latitude,
        zoom: 11,
    });

    return (
        <ReactMap
            {...viewState}
            mapStyle="mapbox://styles/elsecag/ckscankzv41tk17pgqhds61en"
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOXAPI_KEY}
            onMove={(evt) => setViewState(evt.viewState)}
            style={{ width: '100%', height: '100%' }}
        >
            {searchResults.map((result) => (
                <div key={result.long}>
                    <Marker
                        longitude={result.long}
                        latitude={result.lat}
                        anchor="bottom"
                    >
                        <p
                            role="img"
                            onClick={() => setSelectedLocation(result)}
                            className="cursor-pointer text-2xl animate-bounce"
                            aria-label="push-pin"
                        >
                            📌
                        </p>
                    </Marker>

                    {/* The popup that should show if we click on a Marker */}
                    {selectedLocation.long === result.long ? (
                        <Popup
                            onClose={() => setSelectedLocation({})}
                            closeOnClick={true}
                            latitude={result.lat}
                            longitude={result.long}
                            anchor="top"
                        >
                            {result.title}
                        </Popup>
                    ) : (
                        false
                    )}
                </div>
            ))}
        </ReactMap>
    );
}

export default Map;
