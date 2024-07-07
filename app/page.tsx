"use client"

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { SignedIn, SignedOut, SignInButton, SignOutButton, useSession } from "@clerk/clerk-react";
import { useMutation, useQuery } from "convex/react";
import Image from "next/image";

export default function Home() {

  const files = useQuery(api.files.getFiles);
  const createFile = useMutation(api.files.createFile);
  // const session = useSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignedIn>

      <SignOutButton>
      <Button>Sign out</Button>
        </SignOutButton>
      </SignedIn>
      <SignedOut>
      <SignInButton mode="modal" >
        <Button>Sign in</Button>
      </SignInButton>
      </SignedOut>
      <Button onClick={()=> {
        createFile({name: "test"})
      }}>Click me</Button>

      {files?.map((file) => {
        return <div key={file._id}>{file.name}</div>;

      })}
    </main>
  );
}
