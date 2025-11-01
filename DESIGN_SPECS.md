# Design Specifications - Appscrip PLP

## Project Overview
Product Listing Page (PLP) for Appscrip - A fully responsive e-commerce interface with advanced filtering, search, and product grid.

## Design System

### Color Palette
- **Primary Pink/CTA:** #EB4C6B
- **Primary Green:** #34A853
- **Light Pink Background:** #FFF2F5
- **Text Primary:** #000000
- **Text Secondary:** #888792
- **Borders/Disabled:** #BFC8CD
- **White:** #FFFFFF
- **Black:** #000000
- **Dark Charcoal:** #252020
- **Canvas:** #282828

### Typography
- **Primary Font:** Inter
- **Secondary Font:** Roboto
- **H1:** 36px, 700 weight, line-height 44px
- **Body:** 14px, 400 weight, line-height 21px
- **Logo:** 36px, 800 weight, letter-spacing 1px

### Layout Specifications

#### Desktop (1440px)
- Header: 1440px × 220px
- Filter Sidebar: 300px × 1018px (left: 96px)
- Product Grid: 932px × 2932px (3 columns)
- Product Card: 300px × 462px
- Footer: 1440px × 750px

#### Tablet (768px - 1023px)
- Product Grid: 2 columns
- Adjusted spacing and padding

#### Mobile (679px)
- Product Grid: 1 column, full width
- Filter Sidebar: Collapsed/Drawer menu
- Product Card: 100% width

### Component Dimensions
- **Logo:** 107px × 44px
- **Navigation Tabs:** 636px × 24px (gap: 64px)
- **Product Title:** 130px × 40px
- **Product Price:** 300px × 47px
- **Add to Cart Button:** 24px × 24px

### Spacing System
- **Grid Gap:** 20px (desktop), 16px (tablet), 12px (mobile)
- **Navigation Gap:** 64px
- **Filter Gap:** 24px
- **Container Padding:** 20px (desktop), 12px (mobile)

### Responsive Breakpoints
- **Desktop:** 1440px and above
- **Tablet:** 768px - 1023px
- **Mobile:** Below 768px

## Features to Implement
1. ✅ Responsive Header with Navigation
2. ✅ Filter Sidebar (Categories, Price Range, etc.)
3. ✅ Product Grid with Dynamic Cards
4. ✅ Product Search and Filtering
5. ✅ Add to Cart Functionality
6. ✅ Mobile-First Design
7. ✅ SEO Optimization
8. ✅ Accessibility (WCAG 2.1)

## API Integration
- **Product Data Source:** Fake Store API (https://fakestoreapi.com/products)
- **No authentication required**
- **Response:** JSON array of products with id, title, price, image, category

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Targets
- Lighthouse Score: 90+
- First Contentful Paint (FCP): < 1.5s
- Time to Interactive (TTI): < 3.5s
- Cumulative Layout Shift (CLS): < 0.1

## Deployment
- **Platform:** Netlify
- **Auto-deploy:** GitHub integration
- **URL:** https://appscrip-task-madhu-nayani.netlify.app/
