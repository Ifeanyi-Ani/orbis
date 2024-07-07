import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen max-h-screen">
      <section className="remove-scrollbar relative flex-1 overflow-y-auto px-[5%] my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/orbis-logo.svg"
            alt="orbis-logo"
            width={1000}
            height={1000}
            className="mb-12 h-10 w-fit"
          />
          <h1>logo</h1>
          <div>form</div>
          <Button>Click</Button>
        </div>
      </section>
    </main>
  );
}
