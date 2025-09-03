"use client";
import { SignIn } from "@clerk/nextjs";

export default function SigninPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignIn redirectUrl="/check-role" />
    </div>
  );
}
