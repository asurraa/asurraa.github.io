import React, { Fragment } from "react"
import { ComingSoon } from "../components/comming-soon"
import Layout from "../components/layout"

const BlogsPage = ({ data, location }) => {
  const siteTitle = data?.site.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle}>
      <ComingSoon />
    </Layout>
  )
}

export default BlogsPage
