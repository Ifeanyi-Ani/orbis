import * as React from "react";
import Image from "next/image";

import LoginForm from "@/components/forms/LoginForm";

export default function Home() {
  return (
    <main className="flex h-screen max-h-screen">
      <section className="remove-scrollbar relative my-auto flex-1 overflow-y-auto px-[5%]">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/orbis-logo.svg"
            alt="orbis-logo"
            width={1000}
            height={1000}
            className="mb-12 h-10 w-fit"
          />

          <LoginForm />
        </div>
      </section>
    </main>
  );
}
