export default function ClubsPage() {
  const timeline = [
    {
      name: 'club',
      start: '1',
      end: '2',
      current: true
    }
  ]
  return (
    <div className="flow-root h-full w-full bg-gray-900">
      <div className="mx-auto mt-16 max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            CLUBS
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            Explore my volleyball journey and discover the attributes that set
            me apart on the court—precision, determination, and passion.
          </p>
        </div>
      </div>
      <ul role="list" className="mx-auto my-16 w-96">

      </ul>
    </div>
  )
}
