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
    <div className="w-full px-4 bg-white rounded-lg overflow-hidden mb-10">
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
                        hover:text-primary
                        "
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
                     hover:border-primary hover:bg-primary hover:text-white
                     transition
                     "
        >
          {translation.button}
        </a>
      </div>
    </div>
  )
}

export default AfterBannerCard
