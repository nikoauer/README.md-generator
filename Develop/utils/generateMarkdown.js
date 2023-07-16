
function Licences (licenceBadge, licenceLink) {
  const lincenceInput = data.licence[0];
  let licenceBadge = " ";
  let licenceLink = " ";

  if (lincenceInput === 'MIT') {
    licenceBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
    licenceLink = 'https://opensource.org/licenses/MIT'
  }
  if (lincenceInput === 'GNU General Public License 2.0') {
    licenceBadge = '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]'
    licenceLink = 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'
  }
  if (lincenceInput === 'Apache License 2.0') {
    licenceBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]'
    licenceLink = 'https://opensource.org/licenses/Apache-2.0'
  }
  if (lincenceInput === 'GNU General Public License 3.0') {
    licenceBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]'
    licenceLink = 'https://www.gnu.org/licenses/gpl-3.0'
  }
  if (lincenceInput === 'Mozilla Public Licence 2.0') {
    licenceBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]'
    licenceLink = 'https://opensource.org/licenses/MPL-2.0'
  }
  if (lincenceInput === 'Unlicense') {
    licenceBadge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]'
    licenceLink = 'http://unlicense.org/'
  }
  return licenceBadge, licenceLink;
}

function generateMarkdown(data) {
  return `# <${data.title}>

  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [Github](#github)
  - [Email](#email)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}

  ## Credits

  ${data.credit}
  
  ## License/Badge

  ${Licences(data)}
  
  ## How to Contribute

  ${data.contributions}
  
  ## Tests

  ${data.tests}

  ## Github

  ${data.github}
    
  ## Email

  ${data.email}`
}

module.exports = generateMarkdown;
