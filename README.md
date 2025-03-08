# Generation Lab

A modern Next.js application focused on aging measurement and health intervention, built with React 19 and TailwindCSS. The platform provides advanced biological age testing and personalized health interventions through partnerships with Tempus and Illumina.

## 🚀 Features

- Modern, responsive UI with beautiful animations and gradients
- Mobile-first design approach with adaptive layouts
- Server-side rendering with Next.js 15
- TailwindCSS for styling with custom design system
- SCSS modules for component-specific styles
- TypeScript for type safety
- Advanced biological age analysis and reporting
- Integration with leading medical technology providers

## 📁 Project Structure

```
gen_lab/
├── app/                    # Next.js app directory
│   ├── api/                # API routes
│   │   └── v1/demo/submit/ # Contact form submission endpoint
│   ├── components/         # Shared components
│   │   └── ContactForm.tsx # Contact form component
│   ├── contact/            # Contact page
│   │   └── page.tsx        # Contact page layout
│   ├── providers/          # Provider-specific pages
│   │   ├── components/     # Provider page components
│   │   │   ├── Header.tsx  # Navigation header
│   │   │   ├── Hero.tsx    # Hero section with dual CTA
│   │   │   ├── Process.tsx # Three-step process visualization
│   │   │   └── CTA.tsx     # Call-to-action component
│   │   └── page.tsx        # Provider page layout
├── public/                 # Static assets
│   └── process/            # Process-related images
└── ...
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15.2.1
- **Language**: TypeScript 5
- **UI Library**: React 19.0.0
- **Styling**: TailwindCSS 4, SCSS
- **Development**: Turbopack
- **Image Optimization**: Next.js Image Component

## 🚦 Getting Started

1. **Install dependencies**
   ```bash
   pnpm install
   ```

2. **Run development server**
   ```bash
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

3. **Build for production**
   ```bash
   pnpm build
   ```

4. **Start production server**
   ```bash
   pnpm start
   ```

## 📱 Key Pages

### Providers Page
The Providers page (`/providers`) showcases our aging measurement and health intervention services for healthcare providers:

1. **Hero Section**: Dual-message hero with "Measure Aging" and "Intervene Health" CTAs
   - Direct links to learn about our testing and action plans
   - Elegant gradient background with responsive layout

2. **Process Section**: Three-step visualization of our biological age testing process
   - **Step 1: Sample Processing** - Details our partnerships with Tempus and Illumina for gold-standard accuracy
   - **Step 2: Advanced Analysis** - Explains our BioNoise Level and Aging Trajectory analysis with visual graphs
   - **Step 3: Personalized Intervention** - Outlines our system-specific recommendations and action plans

3. **System-Specific Aging Factors**: Visual representation of aging factors by body system
   - Highlights cardiac and reproductive systems with percentage contributions to aging
   - Color-coded attention indicators for critical areas

4. **Testimonials**: Real feedback from healthcare providers using our platform

### Contact Page
The Contact page (`/contact`) provides a streamlined way for users to request information:

1. **Contact Form**: Clean, modern form with gradient background
   - Email field with validation (required)
   - Phone field with US flag dropdown and validation (optional)
   - Form submission handled by `/api/v1/demo/submit` endpoint
   - Real-time validation feedback
   - Success/error messaging

2. **Sample Report Request**: Users can request a free sample report and white paper
   - Form automatically validates input before submission
   - Responsive design works on all devices

## 🎨 Design System

The application uses a sophisticated color scheme and design elements:

### Colors
- Primary Brown: #4C3022 (Navigation, headings)
- Secondary Brown: #A16C3B (Accents)
- Background Cream: #f8f3e3 (Buttons, backgrounds)
- Text on Light: #4C3022
- Text on Dark: #FEF9EE
- Warning Orange: #DE6430 (Attention indicators)

### UI Elements
- Rounded corners: rounded-full for buttons, rounded-2xl for cards
- Gradient backgrounds (cream to brown for Providers page)
- Custom shadows with color overlays
- Responsive spacing system

## 📝 License

Private - All rights reserved
