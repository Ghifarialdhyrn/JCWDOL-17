<<<<<<< HEAD
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
=======
/** @format */
"use client";

import { LocalComponent } from "@/components/local.component";
import { UserContext } from "@/contexts/user.context";
import { createContext, useState } from "react";

export const UserContext2 = createContext(""); //membuat sebuah scope dimana value dari context tsb bisa digunakan oleh component di dalam scopenya
export default function Home() {
  const [user, setUser] = useState<string>("hello world");
  return (
    <UserContext2.Provider value="testtttt">
      <UserContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        <center className="">
          <LocalComponent />
        </center>
      </UserContext.Provider>
    </UserContext2.Provider>
>>>>>>> 79f708c950eb1bb5ae327d64377807df43d70eb2
  );
}
