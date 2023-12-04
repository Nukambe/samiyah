'use client'

import { useState } from 'react'
import DashboardTextInput from './DashboardTextInput';

export default function DashboardTournaments({ tourneys }) {
    const [tournaments, setTournaments] = useState(tourneys);

    return (
        <div>
            {tournaments?.map((tour, index) => (
                <div key={index} className='bg-gray-800 w-full'>
                    <DashboardTextInput label={`tour-${index}-name`} value={tour.name} onChange={(e) => {
                        const newTournaments = [...tournaments];
                        newTournaments[index].name = e.target.value;
                        setTournaments(newTournaments);
                    }} />
                    <div className='flex'>
                        <DashboardTextInput label={`tour-${index}-date`} value={tour.date} onChange={(e) => {
                            const newTournaments = [...tournaments];
                            newTournaments[index].date = e.target.value;
                            setTournaments(newTournaments);
                        }} />
                        <DashboardTextInput label={`tour-${index}-rank`} value={tour.rank} onChange={(e) => {
                            const newTournaments = [...tournaments];
                            newTournaments[index].rank = e.target.value;
                            setTournaments(newTournaments);
                        }} />
                        <input
                            type='button'
                            id={`tour-${index}-delete`}
                            name={`tour-${index}-delete`}
                            className='bg-gray-500 rounded-md px-2 py-1 ml-auto mr-2 h-fit mt-auto'
                            value='Delete'
                            onClick={() => setTournaments(tournaments.filter((tour, tourIdx) => index !== tourIdx))}
                        />
                    </div>
                </div>
            ))}
            <div className='flex'>
                <input
                    type='button'
                    value='+'
                    className='w-8 bg-gray-500 rounded-sm text-center text-2xl ml-4 mt-2'
                    onClick={() => setTournaments([...tournaments, { name: '', date: '', rank: '' }])}
                />
            </div>
        </div>
    )
}
