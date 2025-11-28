import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function InputTaker() {

    const [url, setUrl] = useState(null)
    const [showUrl, setShowUrl] = useState(false)
    const mylink = "https://love-ai-tuaa.vercel.app"

    const { register, handleSubmit } = useForm({
        defaultValues: {
            name: "",
            message: ""
        }
    })

    const onSubmit = (data) => {
        const encodedName = btoa(data.name);     
        const encodedMessage = btoa(data.message);

        setUrl(`${mylink}/body?n=${encodedName}&m=${encodedMessage}`);
        setShowUrl(true);
    };
    return (
        <div className='flex flex-col gap-4 justify-center items-center w-full h-full'>
            <form className='flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>
                <label className='text-pink-800 font-bold' for="name">Name</label>
                <input className='bg-[#dad5d5] rounded-lg focus:border-none shadow-lg border border-white px-4 p-2' name='name' {...register("name")} placeholder='Enter your name' />

                <label className='text-pink-800 font-bold' for="message">Message</label>
                <input className='bg-[#dad5d5] rounded-lg focus:border-none shadow-lg border border-white px-4 p-2' name='message' {...register("message")} placeholder='Enter your message' />
                <button className='bg-blue-500 mt-4 px-4 p-2 rounded-lg border border-white shadow-lg text-white font-bold' type='submit'>Submit</button>
            </form>

            {showUrl && <div className='text-blue-700 underline bg-gradient-to-r from-white via-blue-200 to-white px-4 py-2 rounded-xl shadow-lg border border-blue-300 '>{url}</div>}
        </div>
    )
}
