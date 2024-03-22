'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import axios from 'axios'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  useremail: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  userFeedback: z.string().optional()
})

export default function ContactUs() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      useremail: "",
      userFeedback:"",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    var formData = new FormData();
    formData.append("useremail", values.useremail); 
    formData.append("userFeedback", values.userFeedback);
    axios({
      method: "post",
      url: "http://44.239.43.181:8080/LiftAndShift/sendemail",
      data: formData,
      headers: { "Content-Type": "application/json" },
    }).then(function (response) {
      //handle success
      console.log(response);
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="useremail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Useremail</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormDescription>
                
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="userFeedback"
          render={({ field }) => (
            <FormItem>
              <FormLabel>User Feedback</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Add any additional information here"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
