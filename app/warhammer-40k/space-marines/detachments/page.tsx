import { wh40kMetadata, wh40kPage } from '@/app/siteMap'

const page = wh40kPage('spaceMarineDetachments')

export const metadata = wh40kMetadata('spaceMarineDetachments')

export default async function Page() {
  return (
    <>
      <h1>{page.title}</h1>

      <section>
        <p>text</p>
      </section>
    </>
  )
}
