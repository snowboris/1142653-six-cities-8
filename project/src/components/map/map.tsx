import React, { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import { offers } from '../../mocks/offers';

import useMap from '../../hooks/useMap';

type MapProps = {
  selectedCity: string
}

function Map(props: MapProps) {
  const mapRef = useRef(null);

  const filteredOffers = offers.filter((item) => item.city.name === props.selectedCity);
  const cityLocation = filteredOffers[0].city.location;
  const map: any = useMap(mapRef, cityLocation);

  const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map && filteredOffers.length) {
      filteredOffers.forEach((item: any) => {
        leaflet
          .marker({
            lat: item.location.latitude,
            lng: item.location.longitude,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map]);

  return (
    <section className="cities__map map"
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
