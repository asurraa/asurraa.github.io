import React, { FC, Fragment } from "react"
import Lottie from "react-lottie"
const animation = require("../assets/coming-soon.json")
export interface ComingSoonProps {}

export const ComingSoon: FC<ComingSoonProps> = props => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "90vh",
        }}
      >
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    </Fragment>
  )
}
