<<<<<<< HEAD
=======
/** @format */

>>>>>>> 79f708c950eb1bb5ae327d64377807df43d70eb2
import { store } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";

type Props = {
  children: React.ReactNode;
};
<<<<<<< HEAD
export default function StoreProvider({ children }: Props) {
  return <Provider store={store}>{children}</Provider>;
}
=======

export default function StoreProvider({ children }: Props) {
  return <Provider store={store}>{children}</Provider>;
}

//HOC = higher order component
>>>>>>> 79f708c950eb1bb5ae327d64377807df43d70eb2
