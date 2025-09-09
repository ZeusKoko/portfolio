# Zeus Portfolio

A modern, responsive portfolio website built with HTML, Tailwind CSS, and JavaScript.

## Features

- 🎨 Modern dark theme with neon accents
- 📱 Fully responsive design
- 🖼️ Interactive gallery with lightbox
- ⚡ Fast loading with optimized CSS
- 🎯 Smooth animations and transitions
- 📧 Contact form integration

## Setup

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Build CSS:**

   ```bash
   npm run build
   ```

3. **Start development server:**

   ```bash
   npm run dev
   ```

4. **Open in browser:**
   - Open `index.html` in your browser
   - Or use a local server: `npm run serve`

## Available Scripts

- `npm run dev` - Watch for changes and rebuild CSS
- `npm run build` - Build production CSS (minified)
- `npm run build-css` - Build CSS once
- `npm run serve` - Start local server on port 8000
- `npm run start` - Build CSS and start server

## Project Structure

```
portfolio/
├── src/
│   └── input.css          # Tailwind source file
├── dist/
│   └── output.css         # Compiled CSS
├── gallery/               # Gallery images
├── index.html            # Main HTML file
├── contact.html          # Contact page
├── package.json          # Dependencies
├── tailwind.config.js    # Tailwind configuration
└── README.md            # This file
```

## Customization

### Colors

Edit `tailwind.config.js` to modify the color scheme:

```js
colors: {
  'neon-blue': '#00f7ff',
  'electric-purple': '#b300ff',
  'cyber-yellow': '#ffee00',
  'dark-bg': '#0a0a0a',
}
```

### Styles

Add custom styles in `src/input.css` using Tailwind's `@layer` directive:

```css
@layer components {
  .my-custom-class {
    /* Your styles here */
  }
}
```

## Development

1. **Make changes** to HTML or CSS
2. **Run `npm run dev`** to watch for changes
3. **Refresh browser** to see updates

## Production

1. **Run `npm run build`** to create minified CSS
2. **Deploy** the entire folder to your web server

## Technologies Used

- HTML5
- Tailwind CSS 3.4
- JavaScript (ES6+)
- Font Awesome Icons
- Lucide Icons
- Google Fonts

## License

MIT License - feel free to use this template for your own portfolio!
