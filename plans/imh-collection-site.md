# IMH - Your Collection Site

## Project Overview

A fully animated personal collection website showcasing the things you love: philosophy (anime and war leaders like Sun Tzu), art & photography, music, games, anime, and animations. Designed with a dark, sophisticated anime aesthetic inspired by "Classroom of the Elite."

## Tech Stack

- **Framework**: Astro (for performance and static site generation)
- **UI Library**: React (for interactive components)
- **Animation**: Framer Motion + GSAP (for complex, layered animations)
- **Styling**: Tailwind CSS
- **Data**: Markdown/JSON files (simple, no database required)
- **Hosting**: Vercel or Netlify (free tier)

## Site Structure

```
/
├── Home (hero with animated introduction)
├── Philosophy
│   ├── Anime Philosophy
│   └── War Leaders (Sun Tzu, etc.)
├── Art & Photography
├── Music
├── Games
├── Anime
├── Animations
└── About
```

## Visual Design

### Color Palette (Classroom of the Elite Inspired)
- **Background**: Deep dark blue-black `#0a0a0f`
- **Primary**: Rich navy `#1a1a2e`
- **Accent**: Crimson red `#8b0000` (subtle touches)
- **Text Primary**: Off-white `#e8e8e8`
- **Text Secondary**: Muted silver `#888899`
- **Highlight**: Deep purple `#2d1b4e`

### Typography
- **Headings**: Cinzel or Playfair Display (elegant, serif)
- **Body**: Inter or Lato (clean, readable)
- **Accents**: Japanese-inspired fonts for philosophical elements

### Animation Strategy
1. **Page Load**: Staggered fade-in with subtle parallax
2. **Navigation**: Smooth page transitions with slide effects
3. **Cards/Items**: Hover effects with scale and glow
4. **Background**: Subtle floating particles or geometric shapes
5. **Scroll**: Parallax effects on section headers
6. **Loading**: Elegant spinner with the site's aesthetic

## Content Categories

### 1. Philosophy
- **Anime Philosophy**: Quotes and lessons from anime
- **War Leaders**: Sun Tzu,Clausewitz, etc. with quotes and analysis

### 2. Art & Photography
- Grid layout with lightbox for viewing
- Categories: Digital, Traditional, Photography

### 3. Music
- Album/artist showcase
- Embedded player or links to streaming
- Favorite tracks with descriptions

### 4. Games
- Favorite games with screenshots/descriptions
- Categories by genre or platform

### 5. Anime
- Top anime list with ratings
- Favorite characters, quotes, scenes

### 6. Animations
- Animated content, motion graphics
- Favorite animators/studios

## Page Specifications

### Home Page
- Animated hero section with your introduction
- Featured collections preview
- Floating animated background elements

### Collection Pages
- Filterable grid layout
- Quick preview on hover
- Detailed view modal/page
- Smooth scroll animations

## Features

1. **Smooth Navigation**: Animated page transitions
2. **Responsive Design**: Works on mobile and desktop
3. **Fast Loading**: Static generation with Astro
4. **Easy Updates via markdown/JSON**: Add new items
5. **Dark Mode**: Built-in (matches the aesthetic)
6. **Search**: Find items across all collections

## Implementation Phases

### Phase 1: Foundation
- Set up Astro project with React
- Configure Tailwind CSS
- Create base layout and navigation
- Implement dark theme

### Phase 2: Core Pages
- Build home page with hero
- Create collection page templates
- Add content structure

### Phase 3: Animations
- Integrate Framer Motion
- Add GSAP for complex effects
- Implement page transitions

### Phase 4: Content
- Add sample content for each category
- Create data files for collections
- Polish visual details

### Phase 5: Polish
- Mobile optimization
- Performance tuning
- Deploy to hosting

## File Structure

```
/
├── src/
│   ├── components/
│   │   ├── Navigation.astro
│   │   ├── Footer.astro
│   │   ├── CollectionCard.jsx
│   │   ├── AnimatedBackground.jsx
│   │   └── PageTransition.jsx
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── philosophy.astro
│   │   ├── art.astro
│   │  
│   │ ├── music.astro   ├── games.astro
│   │   ├── anime.astro
│   │   └── animations.astro
│   ├── content/
│   │   ├── philosophy/
│   │   ├── art/
│   │   ├── music/
│   │   ├── games/
│   │   ├── anime/
│   │   └── animations/
│   └── styles/
│       └── global.css
├── public/
│   └── images/
├── astro.config.mjs
├── tailwind.config.cjs
└── package.json
```

## Next Steps

1. Confirm the plan
2. Switch to Code mode to begin implementation
3. Start with Phase 1 (Foundation)
