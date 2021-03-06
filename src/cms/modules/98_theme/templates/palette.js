import React from "react"

import PropTypes from "prop-types"

function Preview({ entry }) {
  const data = entry.getIn(["data"]).toJS()

  if (data) {
    return (
      <>
        {Object.keys(data).map(colorName => (
          <div className="pb-10" key={colorName}>
            <div className="text-xl">{colorName}</div>
            <div className="flex flex-wrap">
              {data[colorName].map((variant, index) => (
                <div
                  className="mr-1 flex flex-col justify-center items-center"
                  key={`${colorName}+${variant}`}
                >
                  <span>{index}</span>
                  <div
                    className="h-8 w-8 border-black border-2"
                    style={{ backgroundColor: variant }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </>
    )
  } else {
    return <div>Loading ...</div>
  }
}

Preview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default Preview
