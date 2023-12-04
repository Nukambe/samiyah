import TimelineCard from "./TimelineCard"

export default function TimelineItem({ club, left = true }) {
    return (
        <div className="h-32 flex justify-center items-center">
            <div className="hidden md:w-2/5 md:block">
                {left && <TimelineCard club={club} />}
            </div>
            <div className="relative h-full w-[10%]">
                <div className="h-full w-full flex justify-center items-center">
                    <div className="right-1/2 border-solid border-white border-2 h-full w-0" />
                </div>
                <div className="absolute top-0 h-full w-full flex justify-center items-center">
                    <div className="bg-white border-solid border-white border-2 rounded-full w-4 h-4 " />
                </div>
            </div>
            <div className="w-3/5 md:w-2/5">
                {!left && <TimelineCard club={club} />}
            </div>
        </div>
    )
}
