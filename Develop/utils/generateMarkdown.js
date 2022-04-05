// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribute](#contribute)
  - [License](#license)
  - [Test](#test)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribute
  ${data.contribute}

  ## License
  ![badge](https://img.shields.io/badge/license-${data.license}-success)
  
  Licensed under ${data.license}

  ## Test
  ${data.test}

  ## Questions
  Contact me with any questions!

  _Email:_ [${data.email}](mailto:${data.email})
  _GitHub:_ [${data.github}](https://github.com/${data.github})

`;
};

module.exports = generateMarkdown;
