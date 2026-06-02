import { wh40kMetadata, wh40kPage } from '@/app/siteMap'

const page = wh40kPage('spaceMarineChapterUnits')

export const metadata = wh40kMetadata('spaceMarineChapterUnits')

export default async function Page() {
  return (
    <>
      <h1>{page.title}</h1>

      <p>text</p>
    </>
  )
}
