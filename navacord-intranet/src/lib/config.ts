import { AppConfig } from '@/types'

export const config: AppConfig = {
  name: process.env.NEXT_PUBLIC_APP_NAME || 'Navacord Intranet',
  version: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0',
  environment: (process.env.NODE_ENV as 'development' | 'staging' | 'production') || 'development',
  apiUrl: process.env.NEXT_PUBLIC_API_URL || '',
  sharePointUrl: process.env.NEXT_PUBLIC_SHAREPOINT_SITE_URL || '',
  azureTenantId: process.env.NEXT_PUBLIC_AZURE_TENANT_ID || '',
  azureClientId: process.env.NEXT_PUBLIC_AZURE_CLIENT_ID || '',
  features: {
    authentication: true,
    sharePoint: !!process.env.NEXT_PUBLIC_SHAREPOINT_SITE_URL,
    search: true,
    notifications: false, // TODO: Implement
    analytics: false, // TODO: Implement
  }
}

export const isDevelopment = config.environment === 'development'
export const isProduction = config.environment === 'production'

// Feature flags
export const FEATURES = {
  AUTHENTICATION: config.features.authentication,
  SHAREPOINT: config.features.sharePoint,
  SEARCH: config.features.search,
  NOTIFICATIONS: config.features.notifications,
  ANALYTICS: config.features.analytics,
} as const

// API endpoints
export const API_ENDPOINTS = {
  SEARCH: '/api/search',
  PRODUCTS: '/api/products',
  MGAS: '/api/mgas',
  RESOURCES: '/api/resources',
  NEWS: '/api/news',
  SUPPORT: '/api/support',
  AUTH: '/api/auth',
} as const

// Navigation configuration
export const NAVIGATION = {
  ITEMS: [
    { key: 'home', name: 'Home', url: '/', icon: 'Home' },
    { key: 'products', name: 'Products', url: '/products', icon: 'Package' },
    { key: 'mgas', name: 'MGAs', url: '/mgas', icon: 'People' },
    { key: 'resources', url: '/resources', name: 'Resources', icon: 'Library' },
    { key: 'news', name: 'News & Updates', url: '/news', icon: 'News' },
    { key: 'support', name: 'Support', url: '/support', icon: 'Help' },
  ]
} as const

// Search configuration
export const SEARCH_CONFIG = {
  MIN_QUERY_LENGTH: 2,
  MAX_RESULTS: 20,
  DEBOUNCE_MS: 300,
  SUGGESTIONS_LIMIT: 5,
} as const

// Pagination configuration
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  MAX_PAGE_SIZE: 50,
  PAGE_SIZE_OPTIONS: [10, 20, 50],
} as const

// Contact information
export const CONTACT_INFO = {
  IT_SUPPORT: {
    phone: '(555) 123-4567',
    email: 'itsupport@navacord.com',
    hours: 'Mon-Fri 8:00 AM - 6:00 PM EST'
  },
  PRODUCT_SUPPORT: {
    phone: '(555) 234-5678',
    email: 'productsupport@navacord.com',
    hours: 'Mon-Fri 9:00 AM - 5:00 PM EST'
  },
  BILLING_SUPPORT: {
    phone: '(555) 345-6789',
    email: 'billing@navacord.com',
    hours: 'Mon-Fri 8:30 AM - 5:30 PM EST'
  },
  GENERAL_INQUIRIES: {
    phone: '(555) 456-7890',
    email: 'info@navacord.com',
    hours: 'Mon-Fri 9:00 AM - 5:00 PM EST'
  }
} as const

// Validation rules
export const VALIDATION = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^[\+]?[1-9][\d]{0,15}$/,
  PASSWORD_MIN_LENGTH: 8,
  USERNAME_MIN_LENGTH: 3,
} as const

// Error messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection and try again.',
  AUTHENTICATION_ERROR: 'Authentication failed. Please log in again.',
  PERMISSION_ERROR: 'You do not have permission to access this resource.',
  VALIDATION_ERROR: 'Please check your input and try again.',
  GENERIC_ERROR: 'An unexpected error occurred. Please try again.',
  SEARCH_ERROR: 'Search failed. Please try again.',
  UPLOAD_ERROR: 'File upload failed. Please try again.',
} as const

// Success messages
export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: 'Successfully logged in.',
  LOGOUT_SUCCESS: 'Successfully logged out.',
  SAVE_SUCCESS: 'Changes saved successfully.',
  DELETE_SUCCESS: 'Item deleted successfully.',
  UPLOAD_SUCCESS: 'File uploaded successfully.',
  TICKET_SUBMITTED: 'Support ticket submitted successfully.',
} as const

// Local storage keys
export const STORAGE_KEYS = {
  RECENT_SEARCHES: 'recentSearches',
  USER_PREFERENCES: 'userPreferences',
  AUTH_TOKEN: 'authToken',
  THEME: 'theme',
  LANGUAGE: 'language',
} as const

// Theme configuration
export const THEME = {
  COLORS: {
    PRIMARY: '#7CB342', // Navacord green
    SECONDARY: '#4A5568',
    SUCCESS: '#48BB78',
    WARNING: '#ED8936',
    ERROR: '#F56565',
    INFO: '#4299E1',
  },
  FONTS: {
    PRIMARY: 'Inter, system-ui, sans-serif',
    MONOSPACE: 'JetBrains Mono, monospace',
  },
  BREAKPOINTS: {
    SM: '640px',
    MD: '768px',
    LG: '1024px',
    XL: '1280px',
    '2XL': '1536px',
  },
} as const

// Analytics configuration
export const ANALYTICS = {
  ENABLED: config.features.analytics,
  TRACKING_ID: process.env.NEXT_PUBLIC_GA_TRACKING_ID || '',
  EVENTS: {
    PAGE_VIEW: 'page_view',
    SEARCH: 'search',
    CLICK: 'click',
    DOWNLOAD: 'download',
    LOGIN: 'login',
    LOGOUT: 'logout',
  },
} as const 