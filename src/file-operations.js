const fs = require('fs');

const writeFile = (pageHtml, path) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, pageHtml , err => {
            if(err)
            {
                reject(err);
                return;
            };
            resolve("Team page now available for review in dist folder!");
        });
    });
}

module.exports = writeFile;