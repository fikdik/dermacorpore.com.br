import React from "react"

import { graphql } from "gatsby"
import PropTypes from "prop-types"

import Aside from "~/components/Aside"
import Content, { HTMLContent } from "~/components/Content"
import SEO from "~/components/SEO"
import PageLayout from "~/layouts/PageLayout"
import PageHeader from "~/components/PageHeader"

export const Template = ({ title, content, contentComponet }) => {
  const MDComponent = contentComponet || Content
  return (
    <main className="flex-auto">
      <PageHeader>{title}</PageHeader>
      <div className="container bg-white pb-10">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3 p-6">
            <MDComponent className="blog-post-md" content={content} />
          </div>
          <div className="md:w-1/3 p-6">
            <Aside />
          </div>
        </div>
      </div>
    </main>
  )
}

export default function SimplePage({ data }) {
  const { frontmatter, html } = data.markdownRemark
  const { title } = frontmatter
  return (
    <PageLayout>
      <SEO title={title} />
      <Template title={title} content={html} contentComponet={HTMLContent} />
    </PageLayout>
  )
}

SimplePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        metadata {
          dateModified
        }
      }
    }
  }
`
