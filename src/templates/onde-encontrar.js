import React from "react"

import { graphql } from "gatsby"
import _ from "lodash"
import PropTypes from "prop-types"

import Aside from "~/components/Aside"
import Content, { HTMLContent } from "~/components/Content"
import SEO from "~/components/SEO"
import PageLayout from "~/layouts/PageLayout"
import PageHeader from "~/components/PageHeader"

export const Template = ({ title, content, componentContent }) => {
  const PostContent = componentContent || Content
  return (
    <div className="md:w-2/3 p-6">
      <PostContent className="md-styles" content={content} />
    </div>
  )
}

export default function PostBlog({ data }) {
  const { frontmatter, html } = data.markdownRemark
  const { title } = frontmatter

  return (
    <PageLayout>
      <SEO title={title} />
      <main className="flex-auto">
        <PageHeader>{title}</PageHeader>
        <div className="container bg-white">
          <div className="flex flex-col md:flex-row">
            <Template
              title={title}
              content={html}
              componentContent={HTMLContent}
            />
            <div className="md:w-1/3 p-6">
              <Aside />
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  )
}

PostBlog.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export const pageQuery = graphql`
  query templatesOndencontrar($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        metadata {
          dateModified
          cover {
            childImageSharp {
              fluid(maxWidth: 600, quality: 95) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
