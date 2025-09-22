/**
 * Mobile E-commerce Test Configuration
 * Optimized for Android Pixel XL Chrome testing
 */

export const mobileTestConfig = {
  // Test Suite Information
  suiteName: "E-commerce Electronics Mobile Web Testing",
  testType: "Mobile Web",
  baseURL: "https://mytestapp.com",
  
  // Authentication Credentials
  credentials: {
    username: "Username",
    password: "Password",
    provider: "Built-in"
  },
  
  // Device Configuration
  device: {
    os: "Android",
    model: "Pixel XL (Android 8)",
    browser: "Chrome",
    viewport: {
      width: 411,
      height: 731
    }
  },
  
  // Test Configuration
  testSettings: {
    numberOfTestCases: 1,
    applicationDescription: "This is an e-commerce website selling electronics.",
    accessibilityLevel: "Fully accessibility info",
    timeout: 30000,
    retries: 2
  },
  
  // Selectors for common e-commerce elements
  selectors: {
    login: [
      'a[href*="login"]',
      'button:has-text("Login")',
      'button:has-text("Sign In")',
      '[data-testid="login"]',
      '.login-btn',
      '#login'
    ],
    products: [
      '.product',
      '.item',
      '[data-testid*="product"]',
      '.product-card'
    ],
    categories: [
      'a:has-text("Electronics")',
      'a:has-text("Products")',
      'a:has-text("Shop")',
      '[data-category="electronics"]',
      '.category-electronics',
      '.product-category'
    ],
    mobileMenu: [
      '.hamburger',
      '.menu-toggle',
      '[data-testid="mobile-menu"]',
      'button:has-text("☰")'
    ]
  },
  
  // Performance thresholds for mobile
  performance: {
    maxLoadTime: 5000, // 5 seconds
    maxDOMContentLoaded: 3000, // 3 seconds
    maxFirstPaint: 2000 // 2 seconds
  },
  
  // Accessibility testing rules
  accessibility: {
    rules: {
      'color-contrast': { enabled: true },
      'keyboard-navigation': { enabled: true },
      'focus-management': { enabled: true },
      'screen-reader': { enabled: true },
      'aria-labels': { enabled: true },
      'semantic-markup': { enabled: true }
    }
  }
};

export default mobileTestConfig;