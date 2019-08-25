import React from "react";
import { useObserver } from "mobx-react-lite";

import { Provider } from "@/utils/contexts/RootContext";
import { MyMap } from "@/components/Map";
import { MapController } from "@/components/Map/controller";
import RootStore from "@/Stores/RootStore";

const App = () =>
  useObserver(() => (
    <Provider value={new RootStore()}>
      <MyMap />
      <MapController />
    </Provider>
  ));

export default App;
