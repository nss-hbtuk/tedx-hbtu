# TEDxHBTU - Ideas Worth Spreading

> An independently organized TED event by NSS HBTU, bringing together innovative minds to share transformative ideas.

![TEDxHBTU Hero](https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1200&h=600&fit=crop)

## 🎯 Event Overview

**TEDxHBTU** is an independently organized TED event hosted by the National Service Scheme (NSS) at Harcourt Butler Technical University (HBTU) in Kanpur, India. The event is scheduled for **August 2024** with the theme **"Shifting Lenses"** - exploring new perspectives, challenging conventional thinking, and discovering innovative solutions to shape our future.

### Event Details
- **Date**: August 2024
- **Location**: HBTU, Kanpur, Uttar Pradesh
- **Theme**: "Shifting Lenses"
- **Organizer**: NSS HBTU
- **Focus**: Innovation, Collaboration, and Community Impact

## 🏗️ Technical Architecture

### Frontend Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite (with SWC for fast compilation)
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn/ui (comprehensive component library)
- **Routing**: React Router DOM
- **State Management**: TanStack Query for server state
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation

### Key Dependencies
- **Radix UI**: Accessible, unstyled UI primitives
- **Class Variance Authority**: For component variants
- **Tailwind Merge**: For class name merging
- **Date-fns**: Date utilities
- **Recharts**: Data visualization
- **Sonner**: Toast notifications

## 📁 Project Structure

```
TEDxHBTU/
├── src/
│   ├── components/          # Main page components
│   │   ├── Hero.tsx        # Landing section
│   │   ├── About.tsx       # Event information
│   │   ├── Speakers.tsx    # Speaker profiles
│   │   ├── Team.tsx        # Organizing team
│   │   ├── Gallery.tsx     # Media gallery
│   │   ├── Partners.tsx    # Sponsors & partners
│   │   ├── Footer.tsx      # Site footer
│   │   ├── FloatingCTA.tsx # Floating action buttons
│   │   └── ui/             # Reusable UI components (50+ components)
│   ├── pages/              # Route pages
│   │   ├── Index.tsx       # Main landing page
│   │   └── NotFound.tsx    # 404 page
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   └── App.tsx             # Root component with routing
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── vite.config.ts          # Vite configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Design System

### Color Scheme
- **Primary**: Red (#DC2626) - TEDx brand color
- **Background**: Black, white, and gray variations
- **Accents**: Red gradients and overlays

### Typography
- Large, bold headings (up to 9xl)
- Clean, readable body text
- Consistent spacing and hierarchy

### Components
The project uses a comprehensive set of 50+ UI components from Shadcn/ui including:
- Buttons, cards, dialogs, forms
- Navigation, menus, tooltips
- Data display (tables, charts, carousels)
- Feedback (toasts, alerts, progress)

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd TEDxHBTU
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server (port 8080) |
| `npm run build` | Build for production |
| `npm run build:dev` | Build for development |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build |

## 📱 Features

### 1. Hero Section
- Full-screen landing with animated background
- TEDxHBTU branding with red accent
- Call-to-action buttons (Register Now, Learn More)
- Event details (August 2024, HBTU Kanpur)

### 2. About Section
- Event theme: "Shifting Lenses"
- TEDx program explanation
- NSS HBTU vision and mission
- Three core values: Innovation, Collaboration, Impact

### 3. Speakers Section
- Featured speakers with photos and topics
- Placeholder for upcoming announcements
- Speaker application CTA

### 4. Team Section
- Organizing team profiles with hover effects
- Role and department information
- Volunteer recruitment section

### 5. Gallery Section
- Behind-the-scenes media
- Image and video placeholders
- Social media integration

### 6. Partners Section
- Sponsorship tiers (Presenting, Gold, Silver, Bronze)
- Partnership opportunities
- Sponsorship deck download

### 7. Interactive Elements
- Floating CTA with expandable menu
- Hover effects and animations
- Responsive design for all devices

## 🎯 Event Information

### About TEDx
TEDx events are independent TED-like conferences that bring together bright minds to give talks that are idea-focused, and on a wide range of subjects, to foster learning, inspiration and wonder – and provoke conversations that matter.

### NSS HBTU Vision
The National Service Scheme (NSS) at HBTU is committed to community service and social development. By organizing TEDxHBTU, we're extending our mission to create positive change through the power of ideas.

### Core Values
- **💡 Innovation**: Groundbreaking ideas that push boundaries and inspire change
- **🤝 Collaboration**: Building connections that foster growth and mutual learning
- **🌟 Impact**: Creating lasting change that extends beyond the event

## 🤝 Get Involved

### For Attendees
- Register for the event (coming soon)
- Follow us on social media for updates
- Share the event with your network

### For Speakers
- Apply to speak at TEDxHBTU
- Share your innovative ideas
- Inspire the next generation

### For Volunteers
- Join our organizing team
- Contribute to event planning
- Gain valuable experience

### For Partners
- Explore partnership opportunities
- Support innovation and education
- Connect with future leaders

## 📞 Contact Information

- **Email**: tedx@hbtu.ac.in
- **Phone**: +91 
- **Location**: HBTU, Kanpur, Uttar Pradesh
- **Website**: [Coming Soon]

### Social Media
- Instagram: [@tedxhbtu](https://instagram.com/tedxhbtu)
- LinkedIn: [TEDxHBTU](https://linkedin.com/company/tedxhbtu)
- YouTube: [TEDxHBTU](https://youtube.com/@tedxhbtu)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **TED**: For the TEDx program and guidelines
- **NSS HBTU**: For organizing and supporting this event
- **HBTU**: For providing the venue and institutional support
- **All Volunteers**: For their dedication and hard work

---

**© 2024 TEDxHBTU. This independent TEDx event is operated under license from TED.**

*"Ideas Worth Spreading" - Powered by NSS HBTU*
