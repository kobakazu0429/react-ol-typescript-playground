import React from "react";

import RootStore from "@/Stores/RootStore";

const RootContext = React.createContext<RootStore>({} as RootStore);

export const { Provider } = RootContext;
export default RootContext;
