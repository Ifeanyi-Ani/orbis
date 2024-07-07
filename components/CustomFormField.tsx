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
  renderSkeleton: (field: any) => React.ReactNode;
}
const CustomFormField = (props: CustomProps) => {
  const { control, fieldType, name, label, placeholder, iconSrc, iconAlt } = props;

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
            <FormControl>
              <Input placeholder={placeholder} {...field} />
            </FormControl>
            <FormDescription>This is your public display name.</FormDescription>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export default CustomFormField;
