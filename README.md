# Personal GitHub Pages Website

This is a personal GitHub Pages website built with React (using CDN approach).

## Project Structure

```
├── index.html          # Main HTML file
├── components/         # React components
│   └── App.js          # All component definitions
├── styles/             # CSS styles
│   └── main.css        # Main stylesheet
└── README.md           # Project documentation
```

## Features

- Responsive design, adapting to various screen sizes
- Single Page Application (SPA) structure
- Includes the following sections:
  - Navigation bar
  - Home/Hero section
  - Projects showcase
  - About me
  - Contact information
  - Footer

## Technology Stack

- React 18 (imported via CDN)
- Babel (for JSX transformation)
- Native CSS

## Deployment

This project is configured for deployment on GitHub Pages.

## Local Development

Since the project uses React via CDN, you can preview it directly by opening the `index.html` file in your browser, or by using a simple HTTP server:

```bash
# If you have Python 3 installed
python -m http.server

# Or using Node.js http-server (requires installation)
npx http-server
```

## Customization

You can customize the website by modifying the following files:

- `components/App.js` - Update component content
- `styles/main.css` - Modify styles
- `index.html` - Change metadata or add other scripts