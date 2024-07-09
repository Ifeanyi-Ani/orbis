import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

type ButtonProps = {
  isLoading: boolean;
  className?: string;
  children: React.ReactNode;
};

const SubmitButton = (props: ButtonProps) => {
  const { isLoading, className, children } = props;
  return (
    <Button
      className={className ?? "w-full bg-green-500 text-white"}
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
