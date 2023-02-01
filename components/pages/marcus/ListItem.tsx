import Link from 'next/link'

export function ListItem({ data }: { data: any }) {
  const { label, identifier, image } = data

  return (
    <div className="mb-14 flex gap-5">
      <Link href={`/marcus/${identifier}`}>
        <div className="w-48">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={label?.no || 'Missing label'} />
        </div>
      </Link>

      {/* Header */}
      <div className="text-3xl font-extrabold tracking-tight md:text-5xl">
        <Link href={`/marcus/${identifier}`}>
          {label?.no || 'Missing label'}
        </Link>
      </div>
    </div>
  )
}
