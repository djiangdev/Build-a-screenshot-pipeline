// Include node fs (file stream) and https modules
const fs = require('fs')
const https = require('https')

function readWriteAsync () {
  // Create string of markdown to be inserted
  const updatedMd = `URL: [nifty-booth-0bf80f.netlify.app](https://nifty-booth-0bf80f.netlify.app) \n \n \n ![alt text](https://raw.githubusercontent.com/djiangdev/Build-a-screenshot-pipeline/main/screenshot.png?raw=true)`

  // Update README using FS
  fs.readFile('README.md', 'utf-8', (err, data) => {
    if (err) {
      throw err
    }

    // Write the new README
    fs.writeFile('README.md', updatedMd, 'utf-8', err => {
      if (err) {
        throw err
      }

      console.log('README update complete.')
    })
  })
}

// Call the function
readWriteAsync()
