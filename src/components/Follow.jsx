import React from 'react'
import { useTranslation } from 'react-i18next'

function Follow() {
  const { t } = useTranslation()
  return (
    <section className="bg-teal-400 text-gray-900 py-16 px-4">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("joinToday")}</h2>
      <p className="text-lg md:text-xl mb-8">
      {t("jointodayBody")}
      </p>
      <a
        href="#"
        className="inline-block bg-gray-900 text-white px-8 py-4 rounded hover:bg-gray-800 transition"
      >
        {t("signUp")}
      </a>
    </div>
  </section>
  )
}

export default Follow