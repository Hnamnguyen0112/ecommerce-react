import React from 'react'
import BannerImage from '@assets/image/banner.jpg'
import { useTranslation } from 'react-i18next'

function Banner() {
  const { t } = useTranslation()
  return (
    <div
      className="bg-cover bg-center h-[30rem] text-white py-24 px-10 object-fill"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <div className="md:w-1/2">
        <p className="font-bold text-md uppercase">{t('banner.service')}</p>
        <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">
          {t('banner.multimedia_products')}
        </p>
        <p className="text-3xl mb-10 leading-none">{t('banner.attractive_designs_for_your_brand')}</p>
        <a
          href="#!"
          className="
          bg-purple-800
          py-4
          px-8
          text-white
          font-bold
          uppercase
          text-sm
          rounded
          hover:bg-gray-200
          hover:text-gray-800"
        >
          {t('banner.learn_more')}
        </a>
      </div>
    </div>
  )
}

export default Banner