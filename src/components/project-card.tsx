import React, { FC, Fragment } from "react"
import { useState } from "react"
import { IoLogoGithub } from "react-icons/io"
export interface ProjectCardProps {
  owner?: string
  projectName: string
  projectDescription: string
  htmlUrl: string
}

export const ProjectCard: FC<ProjectCardProps> = props => {
  return (
    <div className="m-6 w-72 h-48 rounded-sm border-gray-400 border-4 p-5 hover:border-black">
      <div>
        <h2 className="font-bold">{props.owner}</h2>
      </div>
      <div>
        <h1 className="font-bold text-xl">{props.projectName}</h1>
        <p className="overflow-y-hidden h-14">{props.projectDescription}</p>
      </div>
      <div>
        <div
          className="flex justify-end cursor-pointer"
          onClick={() => {
            window.location.replace(props.htmlUrl)
          }}
        >
          <IoLogoGithub />
        </div>
      </div>
    </div>
  )
}
ProjectCard.defaultProps = {
  owner: "AsurRaa",
}
