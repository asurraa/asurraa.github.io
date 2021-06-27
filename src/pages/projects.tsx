import axios from "axios"
import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import { ProjectCard } from "../components/project-card"
import { github_api_route } from "../constants/app.constants"
import { BarLoader } from "react-spinners"

const ProjectPage = ({ data, location }) => {
  const siteTitle = data?.site.siteMetadata?.title || `Title`
  const [loading, setLoading] = useState<boolean>(true)
  const [repo, setRepo] = useState<Array<any>>([])

  useEffect(() => {
    axios
      .get(github_api_route)
      .then(res => {
        setRepo(res?.data)
      })
      .finally(() => setLoading(false))
  }, [])
  return (
    <Layout location={location} title={siteTitle}>
      <div>
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "90vh",
            }}
          >
            <BarLoader />
          </div>
        ) : (
          <div className="p-12 flex flex-wrap justify-center ">
            {repo?.map((data, index) => {
              return (
                <ProjectCard
                  key={index}
                  projectName={data.name}
                  projectDescription={data.description}
                  htmlUrl={data.html_url}
                />
              )
            })}
          </div>
        )}
      </div>
    </Layout>
  )
}

export default ProjectPage
