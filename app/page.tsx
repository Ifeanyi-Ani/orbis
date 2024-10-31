import * as React from "react";
import Image from "next/image";

import LoginForm from "@/components/forms/LoginForm";
import { LogoIcon } from "@/components/icons/logo";

export default function Home() {
  return (
    <main className="flex h-screen max-h-screen">
      <section className="no-scrollbar relative my-auto w-full flex-1 overflow-y-auto p-2 md:container md:px-[5%]">
        <div className="space-y-4">
          <LogoIcon className="fill-accent" />

          <LoginForm />
        </div>
      </section>
      <section className="hidden w-1/2 md:block">
        <Image
          src="/assets/images/onboarding-img.png"
          alt="onboarding-img"
          width={10000}
          height={10000}
          className="h-full w-full"
        />
      </section>
    </main>
  );
}
