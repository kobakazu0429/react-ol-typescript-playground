import React, {
  useContext,
  useCallback,
  useState,
  ChangeEvent,
  useEffect
} from "react";

import RootContext from "@/utils/contexts/RootContext";

export const MapController = () => {
  const rootStore = useContext(RootContext);
  const { mapStore } = rootStore;

  const [value, setValue] = useState(0);
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(e.target.value);
      setValue(newValue);
      if (!mapStore.map) return;
      mapStore.map.getView().setZoom((newValue / 100) * 28);
    },
    [value]
  );

  useEffect(() => {
    if (!mapStore.map) return;
    mapStore.map.on("moveend", e => {
      console.log(e.map.getView().getZoom());
      if (!e.map.getView().getZoom()) return;
      setValue(((e.map.getView().getZoom() as number) / 28) * 100);
    });
  }, []);

  return mapStore.map ? (
    <div>
      <span>set zoom</span>
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={handleChange}
      />
    </div>
  ) : (
    <div>
      <span>unset map now...</span>
    </div>
  );
};
