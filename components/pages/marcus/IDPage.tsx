import { Header } from 'components/shared/Header'
import ScrollUp from 'components/shared/ScrollUp'
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const ManifestViewer = dynamic(() => import("./ManifestViewer"), { ssr: false })

export function IDPage({ data }: { data: any }) {
  const { label, hasThumbnail, subjectOfManifest } = data

  return (
    <div>
      <div className="mb-14 flex flex-wrap gap-5">
        <div className='w-full min-h-[780px] p-3 border-2 border-red-200/80 rounded relative'>
          <div className='italic bg-red-200 px-1 inline-block absolute -top-3 left-2'><span>Client component</span></div>
          {subjectOfManifest ?
            <Suspense fallback={<div>Loading...</div>}>
              <ManifestViewer id={subjectOfManifest} />
            </Suspense>
            : null
          }
        </div>

        <div className='w-full flex gap-5 mt-64'>
          <div className="w-24">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={hasThumbnail} alt={label?.no || 'Missing label'} />
          </div>

          {/* Header */}
          <Header title={label?.no || 'Missing label'} />
        </div>

        {/* Workaround: scroll to top on route change */}
        <ScrollUp />
      </div>
      <div className="absolute left-0 w-screen border-t" />
    </div>
  )
}
