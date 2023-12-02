export default function PageContainer({ children, header = 'header', description = '...description...' }) {
    return (
        <div
            className="bg-gray-900 py-24 sm:py-32"
            style={{ minHeight: '95vh' }}
        >
            <div className="mx-auto max-w-7xl px-6 text-center flex flex-col justify-center h-full lg:px-8">
                <div className="mx-auto max-w-2xl mb-32">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        {header.toUpperCase()}
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-gray-400">
                        {description}
                    </p>
                </div>
                {children}
            </div>
        </div>
    );
}
