<<<<<<< HEAD
=======
/** @format */
>>>>>>> 79f708c950eb1bb5ae327d64377807df43d70eb2
"use client";
import StoreProvider from "@/components/store.provider.component";
import React from "react";

<<<<<<< HEAD
type Props = {
  children: React.ReactNode;
};
=======
type Props = { children: React.ReactNode };

>>>>>>> 79f708c950eb1bb5ae327d64377807df43d70eb2
export default function Template({ children }: Props) {
  return <StoreProvider>{children}</StoreProvider>;
}
