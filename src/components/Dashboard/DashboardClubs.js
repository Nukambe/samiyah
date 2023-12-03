'use client'

import { useState } from 'react'
import DashboardTextInput from './DashboardTextInput';

export default function DashboardClubs() {
    const [clubs, setClubs] = useState([
        {
            name: 'Mizuno',
            start: '2023-01',
            end: '',
            current: true
        },
        {
            name: 'Excel Volleyball Club',
            start: '2022-01',
            end: '2023-01',
            current: false
        },
        {
            name: 'CCVC',
            start: '2021-01',
            end: '2022-01',
            current: false
        }
    ]);

    return (
        <div>
            {
                clubs.map((club, index) => (
                    <div
                        key={index}
                        className='bg-gray-800 space-x-8 my-2 rounded-lg pb-4'>
                        <DashboardTextInput label={`club-${index}-name`} value={club.name} />
                        <div className='flex items-end'>
                            <DashboardTextInput label={`club-${index}-start`} value={club.start} />
                            <DashboardTextInput label={`club-${index}-end`} value={club.current ? 'Present' : club.end} />
                            <label className='ml-auto pr-12 pb-4'>
                                Current
                                <input
                                    type='checkbox'
                                    id={`club-${index}-current`}
                                    name={`club-${index}-current`}
                                    className='ml-4'
                                    value={club.current}
                                />
                            </label>
                        </div>
                    </div>
                ))
            }
            <div className='flex'>
                <input
                    type='button'
                    value='+'
                    className='w-8 bg-gray-500 rounded-sm text-center text-2xl ml-4 mt-2'
                    onClick={() => setClubs([...clubs, { name: '', start: '', end: '', current: false }])}
                />
            </div>
        </div>
    )
}
