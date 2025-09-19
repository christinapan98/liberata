module.exports = {
  webpack: {
    configure: {
      resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx']
      },
      output: {
        publicPath: '/' 
      }
    }
  }
};