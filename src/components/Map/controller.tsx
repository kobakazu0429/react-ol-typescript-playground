import React, { useContext, useCallback, useState, ChangeEvent } from "react";

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
      mapStore.map.getView().setZoom((newValue / 100) * 17.5);
    },
    [value]
  );

  return (
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
  );
};
