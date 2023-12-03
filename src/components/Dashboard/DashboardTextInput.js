'use client'

import { useState } from "react"

export default function DashboardTextInput({ label, value }) {
    return (
        <label
            htmlFor={label.toLowerCase()}
            className="flex flex-col text-sm text-left font-medium leading-6 text-white even:bg-gray-800 p-4 rounded-md"
        >
            {label}
            <input
                type="text"
                name={label.toLowerCase()}
                id={label.toLowerCase()}
                className="flex-1 border-0 bg-gray-600 py-1.5 pl-1 text-white focus:ring-0 sm:text-sm sm:leading-6 rounded-md"
                placeholder={value}
            />
        </label>
    )
}
