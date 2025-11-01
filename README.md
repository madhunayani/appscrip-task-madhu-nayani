# Appscrip - Product Listing Page

A fully responsive, modern e-commerce product listing page built with React.js, demonstrating professional frontend development practices.

## 🚀 Features

- ✅ **Responsive Design:** Desktop, Tablet, and Mobile optimized
- ✅ **Dynamic Product Grid:** Fetch products from Fake Store API
- ✅ **Advanced Filtering:** Filter by category, price range, and search
- ✅ **SEO Optimized:** Semantic HTML, meta tags, schema.org markup
- ✅ **Accessibility:** WCAG 2.1 AA compliant
- ✅ **Clean Code:** Modular React components, CSS variables
- ✅ **Performance:** Optimized images, minimal dependencies

## 📋 Tech Stack

- **Frontend:** React.js (Create React App)
- **Styling:** CSS3 (Flexbox, Grid, Media Queries)
- **API:** Fake Store API (no backend required)
- **Deployment:** Netlify
- **Version Control:** Git & GitHub

## 🛠️ Installation & Setup

### Prerequisites
- Node.js v14+
- npm or yarn
- Git

### Steps
1. Clone the repository
git clone https://github.com/madhunayani/appscrip-task-madhu-nayani.git
cd appscrip-task-madhu-nayani



2. Install dependencies
npm install


3. Start development server
npm start


4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

npm run build


## 📁 Project Structure

src/
├── components/ # React components
│ ├── Header.js
│ ├── Filters.js
│ ├── ProductCard.js
│ ├── ProductGrid.js
│ ├── Footer.js
│ └── App.js
├── styles/ # CSS files
│ ├── variables.css
│ ├── index.css
│ ├── Header.css
│ ├── Filters.css
│ ├── ProductCard.css
│ ├── ProductGrid.css
│ └── Footer.css
├── hooks/ # Custom React hooks
│ └── useProducts.js
├── utils/ # Utility functions
│ └── api.js
└── assets/ # Images and icons
├── images/
└── icons/



## 🎨 Design Reference

All designs follow the Figma specifications in `DESIGN_SPECS.md`

## 📱 Responsive Breakpoints

- **Desktop:** 1440px and above
- **Tablet:** 768px - 1023px
- **Mobile:** Below 768px

## 🚀 Deployment

Deployed on Netlify with automatic deploys from GitHub.

**Live URL:** [https://appscrip-task-madhu-nayani.netlify.app/](https://appscrip-task-madhu-nayani.netlify.app/)

## 📖 API Documentation

### Fake Store API
- **Endpoint:** https://fakestoreapi.com/products
- **Method:** GET
- **Response:**

[
{
"id": 1,
"title": "Product Title",
"price": 109.95,
"description": "Product description",
"category": "electronics",
"image": "https://example.com/image.jpg",
"rating": { "rate": 3.9, "count": 120 }
}
]


## ♿ Accessibility

- Semantic HTML elements
- ARIA labels for interactive components
- Keyboard navigation support
- Color contrast ratios meet WCAG AA standards
- Screen reader friendly

## 🔍 SEO

- Meta tags and descriptions
- Schema.org JSON-LD markup
- Semantic HTML
- Image alt attributes
- Mobile-friendly design

## 📝 License

MIT License - feel free to use this project for learning and development.

## 👤 Author

**Madhu Nayani**
- GitHub: [@madhunayani](https://github.com/madhunayani)
- Portfolio: [Portfolio Link]

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](#).

---

**Happy Coding!** 🚀
