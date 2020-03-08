import React from "react"

import SEO from "~/components/SEO"
import PageLayout from "~/layouts/PageLayout"
import PageHeader from "~/components/PageHeader"
import Aside from "~/components/Aside"
import FormCadastroProfissional from "~/components/FormCadastroProfissional"

export default function Page() {
  const title = "Seja Parceiro"
  const subtitle = "Solicitar cadastro como consultor"
  return (
    <PageLayout>
      <SEO title={`${title} : ${subtitle}`} />
      <main className="flex-auto">
        <PageHeader>{title}</PageHeader>
        <div className="container bg-white pb-10">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 p-6">
              <h1 className="text-2xl p-4">{subtitle}</h1>
              <FormCadastroProfissional />
            </div>
            <div className="md:w-1/3 p-6">
              <Aside />
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  )
}
