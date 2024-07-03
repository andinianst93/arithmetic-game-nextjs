import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    FormDescription
  } from '@/components/ui/form';
import { Control } from 'react-hook-form';
import { Checkbox } from "@/components/ui/checkbox"

import React from 'react'
type CustomFormFieldProps = {
    name: string;
    control: Control<any>;
    label: string;
    description?: string;
  };
export default function FormStart({name, control, label, description}: CustomFormFieldProps) {
  return (
    <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
        <FormControl>
          <Checkbox
            checked={field.value}
            onCheckedChange={field.onChange}
          />
        </FormControl>
        <div className="space-y-1 leading-none">
          <FormLabel>
            {label}
          </FormLabel>
          <FormDescription>
            {description}
          </FormDescription>
        </div>
      </FormItem>
    )}
  />
  )
}
