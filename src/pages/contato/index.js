import React from "react"

import SEO from "~/components/SEO"
import PageLayout from "~/layouts/PageLayout"
import PageHeader from "~/components/PageHeader"
import Aside from "~/components/Aside"
import SimpleForm from "~/components/SimpleForm"

export default function Page() {
  const title = "Entre em Contato"
  return (
    <PageLayout>
      <SEO title={title} />
      <main className="flex-auto">
        <PageHeader>{title}</PageHeader>
        <div className="container bg-white pb-10">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 p-6">
              <h1 className="text-2xl p-4">Escreva aqui sua mensagem</h1>

              <SimpleForm />
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
