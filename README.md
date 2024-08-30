# Meme Website

This project is a meme website built using Flask that fetches and displays random memes from Reddit. The site refreshes automatically at customizable intervals, providing a constant stream of entertainment. With various customization options, users can tailor their meme experience to their liking.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Random Memes**: Fetches random memes from Reddit's vast collection.
- **Customizable Refresh Rate**: Users can adjust the refresh interval using a slider.
- **Responsive Design**: The website is fully responsive, ensuring a great experience on both desktop and mobile devices.
- **Subreddit Display**: Shows the current subreddit from which the meme is fetched.
- **Persistent Settings**: The refresh rate is stored in localStorage, keeping your preferences intact across sessions.

## Installation

To run this project locally, you'll need Python and Flask installed.

1. **Clone the repository:**

   ```
   git clone https://github.com/your-username/meme-website.git
   cd meme-website
   ```

2. **Install the required packages:**

   ```
   pip install -r requirements.txt
   ```

3. **Run the Flask application:**

   ```
   python meme_flask.py
   ```

4. **Open the website in your browser:**

   Navigate to `http://localhost:5000` to start viewing memes.

## Usage

Once the website is running, it will automatically fetch and display a random meme from Reddit. The page will refresh at the interval set by the slider, which can be adjusted between 1 and 100 seconds.

### Adjusting Refresh Rate

Use the slider on the webpage to adjust the meme refresh rate. The time until the next refresh will be displayed, and your preference will be saved for future visits.

## Customization

You can easily customize the website to suit your preferences:

- **Change Background Color**: Modify the `background-color` property in the `style.css` file.
- **Select a Specific Subreddit**: Uncomment and set the `sr` variable in the `get_meme` function in `meme_flask.py` to fetch memes from a specific subreddit.
- **Adjust Slider Range**: Change the `min`, `max`, and `step` values of the slider in the HTML file to set different refresh rate limits.

## Development

For those interested in contributing or extending the functionality, here's an overview of the codebase:

- **Flask App**: The core logic is in `meme_flask.py`, which handles routing and meme fetching.
- **HTML Template**: The main interface is defined in `meme_index.html`, utilizing Jinja2 templating for dynamic content.
- **CSS Styling**: The visual style is managed by `style.css` in the `static/css` directory.
- **JavaScript**: Client-side logic, including slider functionality and refresh rate management, is handled by `script.js` in the `static/js` directory.

## Contributing

Contributions are welcome! Whether you want to add new features, fix bugs, or improve the documentation, please fork the repository and submit a pull request.

---

Enjoy your memes! 😄

---
