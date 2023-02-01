import { IDPage } from 'components/pages/marcus/IDPage';
import { notFound } from 'next/navigation'

async function getData({ id }: { id: string }) {
  const res = await fetch(`https://api-ub.vercel.app/items/${id}`, { next: { revalidate: 7200 } });

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data from Marcus');
  }

  return res.json();
}

export default async function MarcusRoute({
  params,
}: {
  params: { id: string }
}) {
  const { id } = params
  const data = await getData({ id })

  if (!data) {
    notFound()
  }

  return (
    <>
      <IDPage data={data} />
    </>
  )
}
