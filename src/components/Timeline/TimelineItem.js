import TimelineCard from "./TimelineCard";

export default function TimelineItem({ club, left = true }) {
  return (
    <div className="flex justify-center items-center">
      <div className="hidden md:w-2/5 md:block">
        {left && <TimelineCard club={club} />}
      </div>
      <div className="relative h-full w-[10%]">
        <div className="absolute top-0 h-full w-full flex justify-center items-center">
          <div className="bg-white border-solid border-white border-2 rounded-full w-4 h-4 " />
        </div>
      </div>
      <div className="hidden md:block w-1 h-full bg-white absolute top-0 mx-auto" />
      <div className="w-3/5 md:w-2/5 py-2 md:py-0">
        {!left && <TimelineCard club={club} />}
      </div>
    </div>
  );
}
