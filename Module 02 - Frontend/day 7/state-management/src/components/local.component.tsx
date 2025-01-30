<<<<<<< HEAD
import { UserContext } from "@/app/page";
import { IUserContext } from "@/contexts/user.context";
import React, { Dispatch, SetStateAction, useContext, useEffect } from "react";

type Props = { setState: Dispatch<SetStateAction<string>> };
export function LocalComponent({ setState }: Props) {
  useEffect(() => {
    setState("world hello");
  });
  return (
    <div className="mt-4 text-xl text-bold">
=======
/** @format */

import { UserContext2 } from "@/app/page";
import { IUserContext, UserContext } from "@/contexts/user.context";
import React, { useContext, useEffect } from "react";

export function LocalComponent() {
  const context = useContext<IUserContext | null>(UserContext);
  useEffect(() => {
    context?.setUser("world hello");
  }, []);

  return (
    <div className="mt-4 text-xl font-bold">
>>>>>>> 79f708c950eb1bb5ae327d64377807df43d70eb2
      <ChildLocalComponent />
    </div>
  );
}

// type Props2 = { value2: string };

export function ChildLocalComponent() {
  const user = useContext<IUserContext | null>(UserContext);
<<<<<<< HEAD
  const test = useContext<string>(UserContext);
  return user;
=======
  const test = useContext<string>(UserContext2);
  return (
    <>
      {user?.user} and {test}
    </>
  );
>>>>>>> 79f708c950eb1bb5ae327d64377807df43d70eb2
}
