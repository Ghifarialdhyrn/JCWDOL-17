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
      <ChildLocalComponent />
    </div>
  );
}

// type Props2 = { value2: string };

export function ChildLocalComponent() {
  const user = useContext<IUserContext | null>(UserContext);
  const test = useContext<string>(UserContext);
  return user;
}
