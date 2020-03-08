import React from "react"

import { graphql } from "gatsby"

import Aside from "~/components/Aside"
import BlogPostListItem from "~/components/BlogPostListItem"
import SEO from "~/components/SEO"
import PageLayout from "~/layouts/PageLayout"
import PageHeader from "~/components/PageHeader"

export default function BlogIndexPage({ data }) {
  const { nodes } = data.allMarkdownRemark
  const title = "Artigos e Protocolos"

  return (
    <PageLayout>
      <SEO title={title} />
      <section className="flex-auto">
        <PageHeader>{title}</PageHeader>
        <div className="container bg-white">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 p-6">
              <ul className="flex flex-col">
                {nodes.map(node => (
                  <li key={node.id}>
                    <BlogPostListItem
                      path={node.fields.slug}
                      title={node.frontmatter.title}
                      description={node.frontmatter.description}
                      date={node.frontmatter.metadata.datePublished}
                      highlight={!!node.frontmatter.highlight}
                      cover={node.frontmatter.cover}
                      tags={node.frontmatter.tags}
                    />
                  </li>
                ))}
              </ul>
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
  query pagesArtigosEProtocolosIndex {
    allMarkdownRemark(
      limit: 100
      sort: { order: DESC, fields: [frontmatter___metadata___datePublished] }
      filter: { frontmatter: { templateKey: { eq: "posts/post" } } }
    ) {
      nodes {
        id
        frontmatter {
          title
          description
          highlight
          tags
          cover {
            childImageSharp {
              fluid(maxWidth: 600, quality: 95) {
                ...GatsbyImageSharpFluid
              }
            }
          }
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
