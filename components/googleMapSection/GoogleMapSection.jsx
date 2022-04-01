/* eslint-disable no-undef */
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
import styles from "../servicesSlider/ServicesSlider.module.css";
import classNames from "classnames";
import db from "../../db/db";
import Link from "next/link";
import RoofingIcon from "@mui/icons-material/Roofing";
import { collection, getDocs } from "firebase/firestore";
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
export default function GoogleMapSection() {
  const [activeMarker, setActiveMarker] = useState(null);
  const [markers, setMarkers] = useState();
  const getData = async () => {
    let markersData = [];
    const querySnapshot = await getDocs(collection(db, "mapMarks"));
    querySnapshot.forEach((doc) => {
      markersData = doc.data().marks;
    });
    return setMarkers(markersData);
  };
  useEffect(() => {
    getData();
  }, []);
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
    <section className={s.GoogleMapSection}>
      <div
        className={classNames(
          "container",
          styles.services__descWrap,
          s.GoogleMapSection__textBox
        )}
      >
        <div className={s.googleMapSection__constantBox_img}>
          <LocationOnIcon className={s.googleMapSection__icon} alt="" />
        </div>
        <div className={styles.services__textWrap}>
          <h1 className={styles.textWrap__title}>Географія робіт</h1>
          <p className={styles.textWrap__desc}>Ми працюємо по всій країні</p>
        </div>
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
            {markers &&
              markers.map((item, index) => {
                return (
                  <Marker
                    key={index}
                    position={{
                      lat: item.geopoint._lat,
                      lng: item.geopoint._long,
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
