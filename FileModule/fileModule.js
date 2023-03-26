const fs = require('fs')
const path = require('path')
const dirPath = path.join(__dirname, 'files')
for (i = 0; i < 5; i++) {
    fs.writeFile(dirPath + '/fs' + i + '.txt', "i am a new file test", function(err, file) {
        if (err) throw err
    })
}