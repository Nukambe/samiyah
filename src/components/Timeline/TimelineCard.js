export default function TimelineCard({ club }) {
    return (
        <div className="rounded-lg bg-gray-700 px-4 py-5 shadow sm:p-6">
            <p className="truncate text-lg font-medium text-gray-400">{club.start} - {club.current ? 'present' : club.end}</p>
            <h4 className="mt-1 text-4xl font-semibold tracking-tight text-white">{club.name}</h4>
        </div>
    )
}
