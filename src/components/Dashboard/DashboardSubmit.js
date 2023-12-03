'use client'
import { useFormStatus } from 'react-dom'

export default function DashboardSubmit({ title }) {
    const { pending } = useFormStatus();

    return (
        <input
            type='submit'
            disabled={pending}
            className='mt-4 rounded-lg bg-zinc-100 w-36 text-lg text-black py-1 disabled:bg-zinc-500 disabled:text-white cursor-pointer disabled:cursor-not-allowed'
            value={`Submit ${title}`}
        />
    )
}
