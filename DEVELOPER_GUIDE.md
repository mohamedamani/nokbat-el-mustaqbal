# Developer Guide - Nokbat El Mustaqbal

## 🏗️ Architecture Overview

Nokbat El Mustaqbal is built as a Progressive Web App (PWA) with offline-first capabilities, designed to provide world-class education to Algerian students regardless of internet connectivity.

### Tech Stack

#### Frontend
- **React 18** with TypeScript - Modern component-based architecture
- **Tailwind CSS** - Utility-first CSS framework for responsive design
- **Vite** - Fast build tool and development server
- **PWA** - Service Workers for offline functionality
- **IndexedDB** via Dexie.js for client-side storage

#### Development Tools
- **TypeScript** - Type safety and better developer experience
- **ESLint** - Code linting and style enforcement
- **Vitest** - Unit testing framework
- **GitHub Actions** - CI/CD pipeline
- **Lighthouse** - Performance and accessibility auditing

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.0.0 or higher ([Download](https://nodejs.org/))
- **npm** 8.0.0 or higher (comes with Node.js)
- **Git** for version control

### Initial Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/nokbat-el-mustaqbal.git
   cd nokbat-el-mustaqbal
   ```

2. **Use the correct Node.js version**
   ```bash
   # If using nvm
   nvm use
   
   # Verify version
   node --version  # Should be 18.17.0 or higher
   ```

3. **Install dependencies**
   ```bash
   npm ci  # Use ci for reproducible builds
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:5173`

### Development Commands

```bash
# Development
npm run dev          # Start dev server with hot reload
npm run preview      # Preview production build locally

# Building
npm run build        # Build for production
npm run type-check   # TypeScript type checking only

# Code Quality
npm run lint         # Check for linting errors
npm run lint:fix     # Automatically fix linting issues

# Testing
npm run test         # Run tests in watch mode
npm run test:coverage # Run tests with coverage report
npm run test:ui      # Open Vitest UI for interactive testing
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── common/         # Reusable UI components
│   ├── AIVirtualTeacher.tsx
│   ├── PaymentSimulation.tsx
│   └── ...
├── contexts/           # React contexts (auth, theme, etc.)
├── data/              # Static data and curriculum content
│   ├── curriculum/    # Subject-specific curriculum data
│   └── lessons/       # Lesson content and structure
├── database/          # Database schema and migrations
├── education/         # Educational logic and algorithms
├── pages/             # Page-level components
├── security/          # Security utilities and encryption
├── services/          # API services and external integrations
├── types/             # TypeScript type definitions
├── utils/             # Utility functions
├── App.tsx           # Main application component
├── main.tsx          # Application entry point
└── index.css         # Global styles and Tailwind imports
```

## 🎯 Key Features Implementation

### AI Virtual Teacher

The AI teaching system is implemented in:
- `src/services/AITeacher.ts` - Core AI logic
- `src/components/AIVirtualTeacher.tsx` - UI component
- `src/education/ProgrammingEducation.ts` - Educational algorithms

**Key Features:**
- Step-by-step problem solving
- Multiple solution approaches
- Common mistake identification
- Personalized learning paths

### Offline-First Architecture

Implemented using:
- **Service Workers** - Cache management and offline functionality
- **IndexedDB** - Local database for offline content
- **Background Sync** - Sync data when connection is restored

**Files:**
- `src/utils/offlineManager.ts` - Offline state management
- `src/utils/cacheManager.ts` - Content caching strategies
- `src/services/SyncEngine.ts` - Data synchronization

### Payment System

Supports multiple Algerian payment methods:
- `src/services/PaymentService.ts` - Payment processing
- `src/services/SubscriptionService.ts` - Subscription management
- `src/components/PaymentSimulation.tsx` - Payment UI

**Supported Methods:**
- CCP (Compte Chèques Postaux)
- CIB Bank cards
- Mobile payments (Mobilis, Djezzy, Ooredoo)
- PayPal for international users

### Security Implementation

- **Data Encryption**: All sensitive data encrypted using Web Crypto API
- **Secure Storage**: `src/security/SecurityManager.ts`
- **Authentication**: JWT-based with secure session management
- **Privacy**: GDPR-compliant data handling

## 🧪 Testing Strategy

### Unit Testing

Using **Vitest** with **React Testing Library**:

```bash
# Run tests
npm run test

# Run with coverage
npm run test:coverage

# Run specific test file
npm run test -- AITeacher.test.ts
```

### Test Structure

```typescript
// Example test file: src/test/AITeacher.test.tsx
import { render, screen } from '@testing-library/react';
import { AIVirtualTeacher } from '../components/AIVirtualTeacher';

test('renders AI teacher interface', () => {
  render(<AIVirtualTeacher />);
  expect(screen.getByText('AI Virtual Teacher')).toBeInTheDocument();
});
```

### E2E Testing (Optional)

For comprehensive testing, consider adding:
- **Cypress** or **Playwright** for end-to-end tests
- **MSW** (Mock Service Worker) for API mocking

## 🔧 Configuration

### Environment Variables

Create `.env.local` for local development:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:3001
VITE_AI_SERVICE_URL=http://localhost:3002

# Payment Configuration
VITE_CCP_API_URL=https://api.ccp.dz
VITE_CIB_PAYMENT_URL=https://payment.cib.dz

# Feature Flags
VITE_ENABLE_AI_TEACHER=true
VITE_ENABLE_OFFLINE_MODE=true
VITE_ENABLE_PAYMENT_SIMULATION=true
```

### TypeScript Configuration

The project uses strict TypeScript settings:
- `skipLibCheck: false` - Ensures all dependencies are properly typed
- `strict: true` - Enables all strict type checking
- Path aliases configured for clean imports (`@/` maps to `src/`)

### Tailwind Configuration

Custom design system in `tailwind.config.js`:
- Algerian color palette (green, white, red)
- Custom spacing and typography scales
- RTL support for Arabic text
- Mobile-first responsive breakpoints

## 📱 PWA Features

### Service Worker

Configured in `vite.config.ts` with Workbox:
- **Precaching**: Essential app shell and assets
- **Runtime Caching**: Educational content and media
- **Background Sync**: Offline form submissions
- **Update Notifications**: Prompt users for app updates

### Offline Capabilities

1. **Content Download**: Students can download lessons for offline study
2. **Progress Sync**: Study progress saved locally and synced when online
3. **Cached UI**: App shell remains functional without internet
4. **Smart Loading**: Prioritize critical content for faster perceived performance

## 🌐 Internationalization

### Language Support

- **Arabic** (primary) - RTL layout support
- **French** (secondary) - Common in Algerian education
- **English** (tertiary) - International content

### Implementation

```typescript
// Language utilities in src/utils/
const isRTL = (language: string) => language === 'ar';
const getDirection = (language: string) => isRTL(language) ? 'rtl' : 'ltr';
```

### CSS Classes

```css
/* Arabic text styling */
.arabic-text {
  font-family: 'Noto Naskh Arabic', serif;
  direction: rtl;
  text-align: right;
}

/* Latin text styling */
.latin-text {
  font-family: 'Inter', sans-serif;
  direction: ltr;
  text-align: left;
}
```

## 🚀 Performance Optimization

### Build Optimization

- **Code Splitting**: Manual chunks for vendors and features
- **Tree Shaking**: Eliminate unused code
- **Asset Optimization**: Image compression and lazy loading
- **Bundle Analysis**: Regular analysis to prevent bloat

### Runtime Performance

- **Virtual Scrolling**: For large lists (lesson catalogs)
- **Memoization**: React.memo and useMemo for expensive components
- **Lazy Loading**: Route-based and component-based code splitting
- **Service Worker Caching**: Aggressive caching for static assets

### Lighthouse Scores

Target scores (run `npm run build && npm run preview`):
- **Performance**: > 90
- **Accessibility**: > 95
- **Best Practices**: > 90
- **SEO**: > 90
- **PWA**: > 90

## 🔍 Debugging

### Development Tools

1. **React Developer Tools** - Component inspection
2. **Redux DevTools** - State management (if using Redux)
3. **Lighthouse** - Performance auditing
4. **Chrome DevTools** - Network, Performance, Application tabs

### Common Issues

**TypeScript Errors:**
```bash
# Clear type cache
npm run type-check

# Restart TypeScript server in VS Code
Cmd/Ctrl + Shift + P → \"TypeScript: Restart TS Server\"
```

**Build Issues:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Vite cache
npm run dev -- --force
```

**Service Worker Issues:**
```bash
# Clear application data in Chrome DevTools
# Application tab → Storage → Clear storage
```

## 🔒 Security Best Practices

### Data Protection

1. **Encrypt sensitive data** using Web Crypto API
2. **Validate all inputs** on both client and server
3. **Use HTTPS** for all communications
4. **Implement CSP** headers to prevent XSS
5. **Regular security audits** with `npm audit`

### Privacy Compliance

- **GDPR principles** applied to data collection
- **Parental consent** for users under 13
- **Data minimization** - collect only necessary information
- **Right to be forgotten** - complete data deletion on request

## 📊 Monitoring and Analytics

### Performance Monitoring

- **Core Web Vitals** tracking
- **Error reporting** with stack traces
- **User session recording** (privacy-compliant)
- **API response time** monitoring

### Educational Analytics

- **Learning progress** tracking
- **Engagement metrics** (time spent, completion rates)
- **Difficulty analysis** (where students struggle)
- **Content effectiveness** measurement

## 🤝 Contributing

### Code Style

- **ESLint** configuration enforces consistent style
- **Prettier** for code formatting
- **TypeScript** for type safety
- **Conventional Commits** for clear git history

### Pull Request Process

1. **Fork** the repository
2. **Create feature branch** (`git checkout -b feature/amazing-feature`)
3. **Write tests** for new functionality
4. **Ensure all tests pass** (`npm run test`)
5. **Submit pull request** with clear description

### Code Review Checklist

- [ ] Tests pass and coverage maintained
- [ ] TypeScript types are correct
- [ ] Accessibility standards met
- [ ] Performance impact considered
- [ ] Security implications reviewed
- [ ] Documentation updated

## 📚 Additional Resources

### External Documentation

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)
- [Vitest Documentation](https://vitest.dev/)

### Algerian Education Resources

- [Ministry of National Education](http://www.education.gov.dz/)
- [Algerian Curriculum Standards](http://www.onec.dz/)
- [Educational Technology in Algeria](http://www.mesrs.dz/)

---

**🔧 This guide is continuously updated. For questions or suggestions, please open an issue or contact the development team.**