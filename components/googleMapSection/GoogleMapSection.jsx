import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import InfoWindowContent from "./InfoWindowContent.jsx";
import s from "./GoogleMapSection.module.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "next/link";
import RoofingIcon from "@mui/icons-material/Roofing";
import SectionTitleComponent from "../sectionTitleComponent/SectionTitleComponent.jsx";

const { NEXT_PUBLIC_GOOGLEMAPS_API_KEY } = process.env;
const center = {
  lat: 47.82520468811773,
  lng: 35.16212068247291,
};
const mapContainerStyle = {
  width: "100%",
  height: "100%",
};
const libraries = ["places"];
const defaultOptions = {
  panControl: true,
  scaleControl: false,
  rotateControl: false,
  keybordShortcats: false,
  scrollwheel: false,
  fullscreenControl: false,
};
export default function GoogleMapSection({ props }) {
  const [activeMarker, setActiveMarker] = useState(null);
  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: NEXT_PUBLIC_GOOGLEMAPS_API_KEY,
    libraries: libraries,
  });
  const mapRef = React.useRef(undefined);
  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map;
  }, []);
  const onUnmount = React.useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);
  return (
    <section className={s.GoogleMapSection} id="GoogleMapSection">
      <div className="container">
        <SectionTitleComponent
          title={"Географія робіт"}
          subTitle={"Ми працюємо по всій країні"}
          icon={<LocationOnIcon />}
        />
      </div>
      {isLoaded && (
        <div className={s.map}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={6}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={defaultOptions}
            onClick={() => setActiveMarker(null)}
          >
            {props &&
              props.map((item, index) => {
                return (
                  <Marker
                    key={index}
                    position={{
                      lat: item.geopoint.lat,
                      lng: item.geopoint.lon,
                    }}
                    onClick={() => handleActiveMarker(index)}
                  >
                    {activeMarker === index ? (
                      <InfoWindow
                        width={"220px"}
                        onCloseClick={() => setActiveMarker(null)}
                      >
                        <InfoWindowContent data={item} />
                      </InfoWindow>
                    ) : null}
                  </Marker>
                );
              })}
          </GoogleMap>
        </div>
      )}
      <Link href={"/"}>
        <a className={s.googleMapSection__link}>
          <RoofingIcon />
          Дивитись усі об&#39;єкти
        </a>
      </Link>
    </section>
  );
}
