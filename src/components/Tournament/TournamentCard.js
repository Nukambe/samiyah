import { TrophyIcon } from '@heroicons/react/24/solid'

export default function TournamentCard({ tourney }) {
    const trophyColor = function () {
        switch (tourney.rank) {
            case 1:
                return 'bg-amber-100 text-amber-800'
            case 2:
                return 'bg-[#cfd8dc] text-[#37474f]'
            case 3:
                return 'bg-[#d7ccc8] text-[#4e342e]'
            default:
                return 'bg-[#e0e0e0] text-[#424242]'
        }
    }

    return (
        <div className='bg-gray-400 rounded-lg text-left p-4'>
            <p className="text-sm font-medium text-gray-500">
                {tourney.date}
            </p>
            <div className='flex justify-between'>
                <h4 className="flex items-baseline text-2xl font-semibold text-gray-800">
                    {tourney.name}
                </h4>
                <div className={`${trophyColor()} inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0`}>
                    {tourney.rank < 4 && <>
                        <span>
                            {tourney.rank}
                        </span>
                        <TrophyIcon className='w-8' />
                    </>}
                    {tourney.rank > 3 &&
                        <div className='text-xl w-8 text-center'>
                            #{tourney.rank}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
