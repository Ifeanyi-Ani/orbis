import React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

type ButtonProps = {
  isLoading: boolean;
  className?: string;
  children: React.ReactNode;
};

const SubmitButton = (props: ButtonProps) => {
  const { isLoading, className, children } = props;
  return (
    <Button
      className={className ?? "w-full"}
      type="submit"
      disabled={isLoading}
    >
      {isLoading ? (
        <div>
          <Image
            src="/assets/icons/loader.svg"
            alt="loader"
            width={24}
            height={24}
            className="animate-spin"
          />
          Loading...
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButton;
