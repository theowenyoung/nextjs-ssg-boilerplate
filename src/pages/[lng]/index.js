import useI18n from '../../hooks/use-i18n'
import {getI18nProps,getI18nPaths } from '../../lib/i18n'
import Link from '../../components/Link'
const Page = () => {
  const i18n = useI18n()
  return (
    <div>
      <h2>{i18n.t('hello')}</h2>
      <div>Current locale: {i18n.lang}</div>
      <Link href="/second">
        <a>To second page</a>
      </Link>
    </div>
  )
}

export async function getStaticProps(ctx) {
  return {
    props: await getI18nProps(ctx),
  }
}

export async function getStaticPaths() {  
  return {
    paths: getI18nPaths(),
    fallback: false,
  }
}

export default Page
