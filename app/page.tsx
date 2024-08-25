"use client";

import AuthForm from "@/components/auth/AuthForm";
import { userService } from "@/services/UserService";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const statusOfUser = userService.isUserLoggedIn();
    if (statusOfUser) router.push("/dashboard");
  }, []);

  return (
    <main className="max-w-4xl mx-auto mt-10">
      <AuthForm />
    </main>
  );
}
