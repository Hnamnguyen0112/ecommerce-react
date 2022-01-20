import React from 'react'

interface Props {
  translation: {
    title: string;
    description: string;
    button: string;
  }
}

function AfterBannerCard({ translation }: Props) {
  return (
    <div
      className="w-full px-4 bg-white overflow-hidden transition ease-in-out hover:-translate-y-1
      hover:scale-110 hover:bg-blue-500 hover:text-white delay-100 duration-300"
    >
      <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
        <h3>
          <a
            href="#!"
            className="
            font-semibold
            text-dark text-xl
            sm:text-[22px]
            md:text-xl
            lg:text-[22px]
            xl:text-xl
            2xl:text-[22px]
            mb-4
            block
            hover:text-primary"
          >
            {translation.title}
          </a>
        </h3>
        <p className="text-base text-body-color leading-relaxed mb-7">
          {translation.description}
        </p>
        <a
          href="#!"
          className="
          inline-block
          py-2
          px-7
          border border-[#E5E7EB]
          rounded-full
          text-base text-body-color
          font-medium
          transition"
        >
          {translation.button}
        </a>
      </div>
    </div>
  )
}

export default AfterBannerCard
