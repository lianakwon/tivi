module.exports = {
  module: {
    rules: [
      // 다른 로더 설정들...

      // Babel 로더 설정 추가
      {
        test: /\.js$/, // .js 확장자를 가진 파일에 적용
        exclude: /node_modules/, // node_modules 폴더는 제외
        use: {
          loader: 'babel-loader', // babel-loader를 사용
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'] // 최신 JavaScript 문법과 React 문법을 이해하도록 preset 설정
          }
        }
      }
    ]
  }
};