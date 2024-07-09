import React from "react";
import {
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { FormFieldTypes } from "./forms/LoginForm";
import Image from "next/image";

interface CustomProps {
  control: Control<any>;
  fieldType: FormFieldTypes;
  name: string;
  placeholder?: string;
  label?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
}

const RenderField = ({ field, props }: { field: any; props: CustomProps }) => {
  const { placeholder, fieldType, iconAlt, iconSrc } = props;
  switch (fieldType) {
    case FormFieldTypes.INPUT:
      return (
        <div className="flex rounded-md border border-primary-500 bg-primary-950">
          {iconSrc && (
            <Image
              src={iconSrc}
              alt={iconAlt || "icon"}
              width={24}
              height={24}
              className="ml-2"
            />
          )}
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              className="bg-primary-900 text-accent-600 placeholder:text-primary-600 border-primary-500 h-11 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </FormControl>
        </div>
      );
    case FormFieldTypes.PHONE_INPUT:
      return (
        <div className="flex rounded-md border border-primary-500 bg-primary-950">
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              className="bg-primary-900 text-accent-600 placeholder:text-primary-600 border-primary-500 h-11 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </FormControl>
        </div>
      );
    default:
      break;
  }
};

const CustomFormField = (props: CustomProps) => {
  const { control, fieldType, name, label, placeholder, iconSrc, iconAlt } =
    props;

  return (
    <FormField
      control={control}
      name={name}
      render={function ({ field }) {
        return (
          <FormItem className="flex-1">
            {fieldType !== FormFieldTypes.CHECKBOX && label && (
              <FormLabel>{label}</FormLabel>
            )}
            <RenderField field={field} props={props} />
            <FormMessage className="text-red-400" />
          </FormItem>
        );
      }}
    />
  );
};

export default CustomFormField;
