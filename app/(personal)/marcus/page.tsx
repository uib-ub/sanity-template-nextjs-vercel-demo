import { ListItem } from 'components/pages/marcus/ListItem';
import { notFound } from 'next/navigation'

async function getData() {
  const res = await fetch(`https://api-ub.vercel.app/items`);

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data from Marcus');
  }

  return res.json();
}

export default async function MarcusPageRoute() {
  const data = await getData()

  if (!data) {
    notFound()
  }

  const items = data['@graph']

  return (
    <div className="flex flex-col gap-5">
      {/* <pre>{JSON.stringify(items, null, 2)}</pre> */}
      {items && items.map((item: any) => (
        <ListItem key={item.identifier} data={item} />
      ))}
    </div>
  )
}
