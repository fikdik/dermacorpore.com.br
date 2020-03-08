import React from "react"
import SEO from "~/components/SEO"

import PageLayout from "~/layouts/PageLayout"

export default function contato({ data }) {
  return (
    <PageLayout>
      <SEO title={"404 - Não encontrado"} />
      <main className="flex-auto flex flex-col">
        <div className="bg-scroll bg-no-repeat block min-h-screen">
          <div className="container p-4 text-center text-white">
            <h2 className="mt-24 pb-6 text-3xl md:text-4xl font-bold">
              404 - Página não encontrada
            </h2>
          </div>
        </div>
      </main>
    </PageLayout>
  )
}
