'use client'

import { useState } from 'react'

import DashboardTextInput from './DashboardTextInput';

export default function DashboardStats({ attributes }) {
    const [stats, setStats] = useState(attributes);

    return (
        <div className='space-y-2'>
            {stats?.map((stat, index) => (
                <div key={index} className='flex bg-gray-800 pb-2 rounded-md'>
                    <DashboardTextInput label={`stat-${index}-attribute`} value={stat.attribute} onChange={(e) => {
                        const newStats = [...stats];
                        newStats[index].attribute = e.target.value;
                        setStats(newStats);
                    }} />
                    <DashboardTextInput label={`stat-${index}-value`} value={stat.value} onChange={(e) => {
                        const newStats = [...stats];
                        newStats[index].value = e.target.value;
                        setStats(newStats);
                    }} />
                    <input
                        type='button'
                        id={`stat-${index}-delete`}
                        name={`stat-${index}-delete`}
                        className='bg-gray-500 rounded-md px-2 py-1 ml-auto mr-2 h-fit mt-auto'
                        value='Delete'
                        onClick={() => setStats(stats.filter((stat, statIdx) => index !== statIdx))}
                    />
                </div>
            ))}
            <div className='flex'>
                <input
                    type='button'
                    value='+'
                    className='w-8 bg-gray-500 rounded-sm text-center text-2xl ml-4 mt-2'
                    onClick={() => setStats([...stats, { attribute: '', value: '' }])}
                />
            </div>
        </div>
    )
}
