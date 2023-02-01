import ManifestViewer from 'components/pages/marcus/ManifestViewer'
import { Header } from 'components/shared/Header'
import ScrollUp from 'components/shared/ScrollUp'

export function IDPage({ data }: { data: any }) {
  const { label, hasThumbnail, subjectOfManifest } = data

  return (
    <div>
      <div className="mb-14 flex flex-wrap gap-5">
        <div className='w-full p-2 border-2 border-cyan-700/80 rounded'>
          <div className='italic'>Client side component</div>
          {subjectOfManifest ? <ManifestViewer id={subjectOfManifest} /> : null}
        </div>

        <div className='w-full flex gap-5 mt-64'>
          <div className="w-24">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={hasThumbnail} alt={label.no} />
          </div>

          {/* Header */}
          <Header title={label.no} />
        </div>

        {/* Workaround: scroll to top on route change */}
        <ScrollUp />
      </div>
      <div className="absolute left-0 w-screen border-t" />
    </div>
  )
}
