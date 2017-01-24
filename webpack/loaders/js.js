const createLoader = (presets) => [
  {
    test: /\.(js|jsx)$/,
    exclude: /(node_modules|dist)/,
    loader: 'babel',
    query: {
      cacheDirectory: true,
      presets
    },
  },
]

export const development = createLoader(['react-hmre'])
export const production = createLoader([])
