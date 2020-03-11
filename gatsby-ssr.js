// See: https://www.gatsbyjs.org/docs/ssr-apis/
import React from "react"
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}
const ReactI = _interopRequireDefault(React)

export { wrapRootElement } from "~/gatsby/wrapRootElement"

export const onRenderBody = (_ref, pluginOptions) => {
  const setHeadComponents = _ref.setHeadComponents

  return setHeadComponents([
    ReactI.default.createElement("script", {
      async: true,
      src: "//code.jivosite.com/widget/WWn9QIB1H0",
    }),
  ])
}
