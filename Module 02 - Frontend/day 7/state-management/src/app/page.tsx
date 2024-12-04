"use client";

import { LocalComponent } from "@/components/local.component";
import React, { createContext, useState } from "react";
export const UserContext = createContext("");

export default function Home() {
  const [user, setUSer] = useState<string>("hello world");
  return (
    <UserContext.Provider value={user}>
      <center className="">
        <LocalComponent setState={setUSer} />
      </center>
    </UserContext.Provider>
  );
}
