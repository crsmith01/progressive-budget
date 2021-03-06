# progressive-budget

## My Task

My task this week was to add functionality to an existing Budget Tracker application to allow for offline access and functionality.

The user is able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they can populate the total when brought back online.

## Table of Contents

1. [Technologies Used](#Technologies-Used)
2. [User Story](#User-Story)
3. [Business Context](#Business-Context)
4. [Acceptance Criteria](#Acceptance-Criteria)
5. [Mock Up](#Mock-Up)
6. [Usage](#Usage)
7. [Contact](#Contact)
8. [License](#License)

## Technologies Used

1. MongoDB
2. Mongoose
3. JavaScript
4. Node.js
5. Express.js
6. Robo3T
7. Heroku
8. HTML and CSS
9. Compression
10. IndexedDB
11. Service worker
12. Manifest


# User Story

AS AN avid traveller,
I WANT to be able to track my withdrawals and deposits with or without a data/internet connection
SO THAT my account balance is accurate when I am traveling


## Business Context

Giving users a fast and easy way to track their money is important, but allowing them to access that information anytime is even more important. Having offline functionality is paramount to our applications success.


## Acceptance Criteria

GIVEN a user is on Budget App without an internet connection
WHEN the user inputs a withdrawal or deposit
THEN that will be shown on the page, and added to their transaction history when their connection is back online.


## Mock-Up
Click [here](https://github.com/crsmith01/progress-budget) to view the GitHub repository for this app.

Click [here](https://mighty-sierra-97786.herokuapp.com/) to view the deployed application on Heroku.

1. Lighthouse Report
![Lighthouse Report](/assets/lighthouse-report.png)

2. Screenshot of app
![Screenshot](/assets/pwa-screenshot.png)



## Usage
1. Install dependencies: ```npm install```

2. Start the server with ```npm start```

## Contact
If you have any questions about the repo, contact me at [crsmith01](https://github.com/crsmith01).


## License
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
Copyright 2021 Catherine Smith

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.