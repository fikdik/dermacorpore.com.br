// See: https://www.gatsbyjs.org/docs/ssr-apis/
import React from "react"
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}
const ReactI = _interopRequireDefault(React)

export { wrapRootElement } from "~/gatsby/wrapRootElement"

export const onRenderBody = (_ref, pluginOptions) => {
  const setPostBodyComponents = _ref.setPostBodyComponents
  const tawkId = "580e9643d0f23f0cd8dc646a"

  return setPostBodyComponents([
    ReactI.default.createElement("script", {
      key: "gatsby-plugin-tawk",
      async: true,
      src: "https://embed.tawk.to/" + tawkId + "/default",
      charset: "UTF-8",
      crossOrigin: "*",
    }),
  ])
}
