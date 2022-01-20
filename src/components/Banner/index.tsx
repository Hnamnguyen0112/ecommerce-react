import React from 'react'
import BannerImage from '@assets/image/banner.jpg'
import { useTranslation } from 'react-i18next'

function Banner() {
  const { t } = useTranslation()
  return (
    <div
      className="bg-cover bg-center h-[30rem] text-white py-24 px-20 object-fill"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <div className="md:w-1/2">
        <p className="font-bold text-md uppercase">{t('banner.service')}</p>
        <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
          {t('banner.multimedia_products')}
        </p>
        <p className="text-3xl mb-10 leading-none">{t('banner.attractive_designs_for_your_brand')}</p>
        <a
          href="#!"
          className="
          py-4
          px-8
          text-white
          font-bold
          uppercase
          text-sm
          rounded
          bg-gradient-to-r
          from-cyan-500
          to-blue-500
          hover:to-blue-700"
        >
          {t('banner.learn_more')}
        </a>
      </div>
    </div>
  )
}

export default Banner
