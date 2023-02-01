import { CustomPortableText } from 'components/shared/CustomPortableText'
import { UiBIcon } from 'components/shared/UiBIcon'
import { PortableTextBlock } from 'sanity'

export function Footer({ footer }: { footer: PortableTextBlock[] }) {
  return (
    <footer className="flex justify-center bottom-0 w-full bg-white py-12 text-center md:py-20">
      <UiBIcon className="w-64 h-64" />
      {footer && (
        <CustomPortableText
          paragraphClasses="text-md md:text-xl"
          value={footer}
        />
      )}
    </footer>
  )
}
