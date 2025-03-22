"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const feedbackSchema = z.object({
    fullName: z.string().min(3, "Full name is required"),
    address: z.string().min(5, "Address is required"),
    country: z.string().min(2, "Country is required"),
    state: z.string().min(2, "State is required"),
    email: z.string().email("Invalid email"),
    mobile: z.string().min(10, "Mobile number is required"),
    feedback: z.string().min(10, "Feedback is required"),
});

const Feedback = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(feedbackSchema),
    });
    const onSubmit = async ( data: Record<string, string>) => {
        console.log(data,'data kjdkfjdk');
        
        
        // Convert data object to URL params
        const params = new FormData()
        Object.keys(data).forEach(key => {
          params.append(key, data[key]);
        });
        
        try {
          await fetch(
            "https://script.google.com/macros/s/AKfycbygCBvw1duKYZ01P7KUVSBFSPgqEfOKflnrzYB1qI1PAwlhVeecvOobpV5Ex_lzjd3q3g/exec", 
            {
              method: "POST",
            //   mode: "no-cors",
              body: params
            }
          )
        //   const result = await response.json();  // Now you can process the response as JSON
        //   console.log(result); 
          
        } catch (error) {
          console.error("Error:", error);
        }
      };

    return (
        <div className="p-4 ">
            <h2 className="text-lg font-bold">Thank you so much for taking the time!</h2>
            <p className="text-sm text-gray-500 mb-4">Please provide the details below.</p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <Label>Full Name</Label>
                    <Input {...register("fullName")} placeholder="Enter your full name" />
                    {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}
                </div>

                <div>
                    <Label>Address</Label>
                    <Textarea {...register("address")} placeholder="Enter your full postal address" rows={2} />
                    {errors.address && <p className="text-red-500">{errors.address.message}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Label>Country</Label>
                        <Input {...register("country")} placeholder="Enter your country name" />
                        {errors.country && <p className="text-red-500">{errors.country.message}</p>}
                    </div>
                    <div>
                        <Label>State</Label>
                        <Input {...register("state")} placeholder="Enter your state name" />
                        {errors.state && <p className="text-red-500">{errors.state.message}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Label>Email ID</Label>
                        <Input {...register("email")} placeholder="Enter your email id" />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </div>
                    <div>
                        <Label>Mobile Number</Label>
                        <Input {...register("mobile")} placeholder="Enter your Mobile Number" />
                        {errors.mobile && <p className="text-red-500">{errors.mobile.message}</p>}
                    </div>
                </div>

                <div>
                    <Label>Feedback</Label>
                    <Textarea {...register("feedback")} placeholder="Write your feedback" rows={3} />
                    {errors.feedback && <p className="text-red-500">{errors.feedback.message}</p>}
                </div>

                <Button type="submit" className="w-full bg-emerald-200 text-black hover:text-white ">Submit Feedback</Button>
            </form>
        </div>
    );
};

export default Feedback;
