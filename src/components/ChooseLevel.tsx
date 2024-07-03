"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import FormStart from "./FormComponents"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"


const FormSchema = z.object({
  addition: z.boolean().default(false),
  subtraction: z.boolean().default(false),
  multiplication: z.boolean().default(false),
  division: z.boolean().default(false),
}).refine(data => data.addition || data.subtraction || data.multiplication || data.division, {
  message: "You must select at least one option",
  path: ["addition", "subtraction", "multiplication", "division"], 
})

type FormSchemaType = z.infer<typeof FormSchema>

const generateRandomString = (length: number) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}

export default function ChooseLevel() {
  const router = useRouter()
  const {toast} = useToast();

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      addition: false,
      subtraction: false,
      multiplication: false,
      division: false,
    },
  })


  function onSubmit(data: z.infer<typeof FormSchema>) {
    const gameId = generateRandomString(10)
    localStorage.setItem(gameId, JSON.stringify(data))
    router.push(`/game?key=${gameId}`)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, (errors) => {
          if (errors.addition || errors.subtraction || errors.multiplication || errors.division) {
            toast({
              title: "Error",
              description: "You must select at least one option",
              variant: "destructive"
            })
          }
        })}
        className="space-y-6"
      >
        <FormStart
          name="addition"
          control={form.control}
          label="Addition"
          description="Range (2 to 100) + (2 to 100)"/>
        <FormStart
          name="subtraction"
          control={form.control}
          label="Subtraction"
          description="Addition problems in reverse."/>
        <FormStart
          name="multiplication"
          control={form.control}
          label="Multiplication"
          description="Range (2 to 12) x (2 to 100)"/>
        <FormStart 
          name="division"
          control={form.control}
          label="Division"
          description="Multiplication problems in reverse."/>
        
        <Button type="submit" className="w-full">Start</Button>
      </form>
    </Form>
  )
}
