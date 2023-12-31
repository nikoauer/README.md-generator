//this function writes the response data from CLI to this template readme.md file structure so it can be displayed once written in the index.html
function generateMarkdown(data) {

    const { badge, link } = Licences(data); // Extract the badge and link from the returned object
  return `# <${data.title}>

  ## Badge licence
  ${badge}

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
  
  ## Licence
  ${link}

  ## Contributions
  ${data.contributions}
  
  ## Tests
  ${data.tests}

  ## Github
  https://github.com/${data.github}
    
  ## Email
  Contact me through this email:${data.email}`
}

module.exports = generateMarkdown;

//this function takes the data from the CLI response for the licences and badges
function Licences(data) {
  const licenceInput = data.licence;
  let licenceBadge = ' ';
  let licenceLink = ' ';
//Using a switch statement to check for the correct badge and licence link to be displayed to the correspondong lincenceinput var
// the licence link and badge is then displayed in the generateMarkdown function in their respective sections.
switch (licenceInput) {
  case 'MIT':
    licenceBadge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    licenceLink = 'https://opensource.org/licenses/MIT';
    break;
  case 'GNU General Public License 2.0':
    licenceBadge = '![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)';
    licenceLink = 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html';
    break;
  case 'Apache License 2.0':
    licenceBadge = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
    licenceLink = 'https://opensource.org/licenses/Apache-2.0';
    break;
  case 'GNU General Public License 3.0':
    licenceBadge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    licenceLink = 'https://www.gnu.org/licenses/gpl-3.0';
    break;
  case 'Mozilla Public Licence 2.0':
    licenceBadge = '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)';
    licenceLink = 'https://opensource.org/licenses/MPL-2.0';
    break;
  case 'Unlicense':
    licenceBadge = '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)';
    licenceLink = 'http://unlicense.org/';
    break;
}

return { badge: licenceBadge, link: licenceLink };
}
