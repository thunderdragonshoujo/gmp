"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

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
import axios from "axios"
import { useRouter } from "next/navigation"
import { useDispatch} from "react-redux"
import globalUserStateObject from '../../../redux/globalUserStateObject';


const formSchema = z.object({
  firstname: z.string().max(50).optional(),
  lastname: z.string().max(50).optional(),
  companyName:z.string().max(50).optional(),
  email: z.string().email().min(2).max(50),
  phone: z.string().max(50).optional(),
  street1: z.string().min(2).max(50),
  street2: z.string().min(0).max(50).optional(),
  city: z.string().min(2).max(50),
  state: z.string().min(2).max(2),
  zip: z.string().min(5).max(10),
})

export default function ShippingForm() {
  const router = useRouter()
  const dispatch = useDispatch();
  
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        firstname: "",
        lastname: "",
        companyName:"",
        email: "",
        phone: "",
        street1: "",
        street2: "",
        city: "",
        state: "",
        zip: "",
      },
    })

    // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    var formData = new FormData();
    formData.append("firstname", String(values.firstname));
    formData.append("lastname", String(values.lastname));
    formData.append("companyName", String(values.companyName));
    formData.append("email", values.email);
    formData.append("phone", String(values.phone));
    formData.append("street1", String(values.street1));
    formData.append("street2", String(values.street2));
    formData.append("city", String(values.city));
    formData.append("state",String(values.state));
    formData.append("zip", String(values.zip)); 
    axios({
      method: "post",
      url: "http://44.239.43.181:8080/LiftAndShift/post",
      data: formData,
      headers: { "Content-Type": "application/json" },
    }).then
    router.push('/Checkout')
    globalUserStateObject.geoState = values.state;
    globalUserStateObject.email= values.email;
    console.log(globalUserStateObject.geoState)
    console.log(globalUserStateObject.email)
  }

  

  return (
    <div className='ShippingAddress' style={{ textAlign: 'center' }}>
      <div>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Shipping Address</h1>
      </div>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto justify-items-center w-1/2 font-bold lg:w-1/3">
        <FormField
          control={form.control}
          name="firstname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />
          <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />
           <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Name</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />
          <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />
          <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />
          <FormField
          control={form.control}
          name="street1"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Street1</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />
          <FormField
          control={form.control}
          name="street2"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Street2</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />
          <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />
          <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem>
              <FormLabel>State</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />
          <FormField
          control={form.control}
          name="zip"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ZipCode</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />
        <Button type="submit">Submit Your Shipping Info</Button>
      </form>
    </Form>
    </div>
  )
}
