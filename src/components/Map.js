import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import React, { useEffect, useRef } from "react";
import data from "../areas.json";

const Map = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoic2lnbWEtZ2VvdGVjbm9sb2dpYXMiLCJhIjoiY2xmdjM4cXR5MDBndzN0bGliZmJob25lMSJ9.beIudu8ylki09MA4lM7_VQ";

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-40, -20],
      zoom: 3,
    });

    mapRef.current = map;

    map.on("load", () => {
      map.addSource("areas-source", {
        type: "geojson",
        data: data,
      });

      map.addLayer({
        id: "areas-circle",
        type: "fill", 
        source: "areas-source",
        paint: {
          "fill-color": "#0d1b2b", 
          "fill-opacity": 0.7,
        },
      });

      map.on("click", "areas-circle", (e) => {
        const coordinates = e.features[0].geometry.coordinates[0][0];

        if (
          coordinates &&
          coordinates.length === 2 &&
          !isNaN(coordinates[0]) &&
          !isNaN(coordinates[1])
        ) {
        
          map.flyTo({
            center: coordinates,
            zoom: 8,
          });
        } else {
          console.error("Coordenadas inválidas:", coordinates);
        }
      });

      map.on("mouseenter", "areas-circle", () => {
        map.getCanvas().style.cursor = "pointer";
      });

      map.on("mouseleave", "areas-circle", () => {
        map.getCanvas().style.cursor = "";
      });

      map.on("click", (e) => {
        const isClickedOnCircle = map.queryRenderedFeatures(e.point, {
          layers: ["areas-circle"],
        }).length > 0;

        if (!isClickedOnCircle) {
          map.flyTo({
            center: [-40, -20],
            zoom: 3,
          });
        }
      });
    });

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []);

  

  return (
    <div>
      <div ref={mapContainerRef} style={{ height: "600px", width: "100%" }} />
    </div>
  );
};

export default Map;
