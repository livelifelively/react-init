module.exports = {
  setupTestFrameworkScriptFile: '../test/setupTests.js',
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
    "../__mocks__/fileMock.js",
      "\\.(css|less)$": "../__mocks__/styleMock.js"
  },
  "testURL": "http://localhost:8080/"
}
