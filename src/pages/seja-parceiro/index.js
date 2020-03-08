import React from "react"

import SEO from "~/components/SEO"
import PageLayout from "~/layouts/PageLayout"
import PageHeader from "~/components/PageHeader"
import Aside from "~/components/Aside"
import SmartLink from "~/components/SmartLink"

import { graphql, useStaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"

export default function Page() {
  const title = "Seja Parceiro"
  const { profissional, consultor } = useStaticQuery(graphql`
    query {
      profissional: file(relativePath: { eq: "cadastro-profissional.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      consultor: file(relativePath: { eq: "cadastro-consultor.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <PageLayout>
      <SEO title={title} />
      <main className="flex-auto">
        <PageHeader>{title}</PageHeader>
        <div className="container bg-white">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 flex justify-between p-6">
              <div className="p-4 w-full md:w-1/2">
                <SmartLink className="block" to="/seja-parceiro/profissional">
                  <div className="max-w-sm rounded overflow-hidden shadow-lg hover:bg-gray-100">
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">
                        Solicitar cadastro como profissional de estética.
                      </div>
                    </div>
                    <GatsbyImage
                      className="w-full rounded"
                      fluid={profissional.childImageSharp.fluid}
                    />
                  </div>
                </SmartLink>
              </div>
              <div className="p-4 w-full md:w-1/2">
                <SmartLink to="/seja-parceiro/consultor">
                  <div className="max-w-sm rounded overflow-hidden shadow-lg hover:bg-gray-100">
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">
                        Quero ser consultor(a) Dermacorpore.
                      </div>
                    </div>
                    <GatsbyImage
                      className="w-full rounded"
                      fluid={consultor.childImageSharp.fluid}
                    />
                  </div>
                </SmartLink>
              </div>
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
