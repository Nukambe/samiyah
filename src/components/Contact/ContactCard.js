export default function ContactCard({ title, link, className }) {
    return (
        <a href={link} target="_blank" rel="noreferrer nofollow" className="mb-2">
            <div className={className + ' ' + 'rounded-full flex items-center justify-center text-4xl font-semibold tracking-tight text-white py-2'}>
                {title}
            </div>
        </a>
    )
}
