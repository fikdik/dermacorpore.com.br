import React, { useMemo } from "react"

import { graphql } from "gatsby"

import Aside from "~/components/Aside"
import SEO from "~/components/SEO"
import PageLayout from "~/layouts/PageLayout"
import PageHeader from "~/components/PageHeader"
import SmartLink from "~/components/SmartLink"

export default function BlogIndexPage({ data }) {
  const { nodes } = data.allMarkdownRemark
  const title = "Onde encontrar"
  const places = {
    Nacionais: nodes.filter(node => node.frontmatter.nacional),
    Internacionais: nodes.filter(node => !node.frontmatter.nacional),
  }

  return (
    <PageLayout>
      <SEO title={title} />
      <section className="flex-auto">
        <PageHeader>{title}</PageHeader>
        <div className="container bg-white">
          <div className="flex flex-col md:flex-row">
            <div className="p-6 flex flex-col md:flex-row md:w-2/3">
              {Object.keys(places).map(place => (
                <div className="w-full md:w-1/2" key={place}>
                  <h2 className="text-3xl font-bold">{place}</h2>
                  <ul className="flex flex-col">
                    {places[place].map(node => (
                      <li key={node.id}>
                        <SmartLink
                          to={node.fields.slug}
                          className="py-1 block hover:text-brand-0 hover:bg-gray-100"
                        >
                          {node.frontmatter.title}
                        </SmartLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="md:w-1/3 p-6">
              <Aside />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export const pageQuery = graphql`
  query pagesOndeEncontrarIndex {
    allMarkdownRemark(
      limit: 100
      sort: { order: ASC, fields: [frontmatter___title] }
      filter: { frontmatter: { templateKey: { eq: "onde-encontrar" } } }
    ) {
      nodes {
        id
        frontmatter {
          title
          nacional
          metadata {
            datePublished(formatString: "MMMM DD, YYYY")
          }
        }
        fields {
          slug
        }
      }
    }
  }
`
