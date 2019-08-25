import React, { useEffect, useContext } from "react";
import styled from "styled-components";

import { Map, View } from "ol";
import { fromLonLat } from "ol/proj";
import { Tile as TileLayer } from "ol/layer";
import { OSM } from "ol/source";

import RootContext from "@/utils/contexts/RootContext";

const target = "mymap";

const view = new View({
  center: fromLonLat([132.601271, 34.232102], "EPSG:3857"),
  zoom: 17.5,
  rotation: -0.36911708366090856
});

export const MyMap = () => {
  const rootStore = useContext(RootContext);
  const { mapStore } = rootStore;

  useEffect(() => {
    const map = new Map({
      target,
      view,
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ]
    });
    mapStore.setMap(map);
  }, []);

  return <MapWrapper id={target}></MapWrapper>;
};

const MapWrapper = styled.div`
  width: 100vw;
  height: 80vh;
`;
