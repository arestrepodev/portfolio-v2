import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Works = () => {
  return <div className="works">Hello from works</div>
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common']))
  }
})

export default Works
