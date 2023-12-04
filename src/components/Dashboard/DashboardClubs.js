'use client'

import { useState } from 'react'
import DashboardTextInput from './DashboardTextInput';

export default function DashboardClubs({ sClubs }) {
    const [clubs, setClubs] = useState(sClubs);

    return (
        <div>
            {
                clubs?.map((club, index) => (
                    <div
                        key={index}
                        className='bg-gray-800 space-x-8 my-2 rounded-lg pb-4'>
                        <DashboardTextInput label={`club-${index}-name`} value={club.name} onChange={(e) => {
                            const newClubs = [...clubs];
                            newClubs[index].name = e.target.value;
                            setClubs(newClubs);
                        }} />
                        <div className='flex items-end'>
                            <DashboardTextInput label={`club-${index}-start`} value={club.start} onChange={(e) => {
                                const newClubs = [...clubs];
                                newClubs[index].start = e.target.value;
                                setClubs(newClubs);
                            }} />
                            <DashboardTextInput label={`club-${index}-end`} value={club.current ? 'Present' : club.end} onChange={(e) => {
                                const newClubs = [...clubs];
                                newClubs[index].end = e.target.value;
                                setClubs(newClubs);
                            }} />
                            <label
                                htmlFor={`club-${index}-current`}
                                className='ml-auto pr-12 pb-4'
                            >
                                Current
                                <input
                                    type='checkbox'
                                    id={`club-${index}-current`}
                                    name={`club-${index}-current`}
                                    className='ml-4'
                                    checked={club.current}
                                    onChange={(e) => {
                                        const newClubs = [...clubs];
                                        newClubs[index].current = e.target.checked;
                                        setClubs(newClubs);
                                    }}
                                />
                            </label>
                            <input
                                type='button'
                                id={`club-${index}-delete`}
                                name={`club-${index}-delete`}
                                className='bg-gray-500 rounded-md px-2 py-1 mr-2'
                                value='Delete'
                                onClick={() => setClubs(clubs.filter((club, clubIdx) => index !== clubIdx))}
                            />
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
