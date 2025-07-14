// Authentication Types
export interface User {
  id: string
  name: string
  email: string
  username?: string
  department?: string
  role?: string
}

export interface AuthState {
  isAuthenticated: boolean
  user: User | null
  loading: boolean
  accessToken: string | null
}

// Product Types
export interface Product {
  id: string
  name: string
  category: string
  description: string
  features: string[]
  targetIndustries: string[]
  status: 'active' | 'pending' | 'discontinued'
  coverage?: string
  limits?: string
  premium?: string
}

// MGA Types
export interface MGA {
  id: string
  name: string
  contact: {
    name: string
    email: string
    phone: string
    region: string
  }
  specialties: string[]
  products: string[]
  status: 'active' | 'pending' | 'inactive'
  rating: number
  description: string
  website?: string
  address?: string
}

// Resource Types
export interface Resource {
  id: string
  title: string
  category: string
  type: 'document' | 'video' | 'tool' | 'template' | 'guide'
  description: string
  tags: string[]
  lastUpdated: string
  author: string
  fileSize?: string
  downloadUrl?: string
  viewUrl?: string
  thumbnail?: string
}

// News Types
export interface NewsItem {
  id: string
  title: string
  category: 'company' | 'industry' | 'regulatory' | 'product' | 'technology'
  type: 'announcement' | 'update' | 'article' | 'event'
  content: string
  excerpt: string
  author: string
  publishDate: string
  tags: string[]
  priority: 'high' | 'medium' | 'low'
  readTime?: string
  imageUrl?: string
  featured?: boolean
}

// Support Types
export interface SupportTicket {
  id: string
  title: string
  category: 'technical' | 'product' | 'billing' | 'general'
  priority: 'low' | 'medium' | 'high' | 'urgent'
  status: 'open' | 'in-progress' | 'resolved' | 'closed'
  description: string
  submittedBy: string
  submittedDate: string
  assignedTo?: string
  lastUpdated: string
  comments?: TicketComment[]
}

export interface TicketComment {
  id: string
  author: string
  content: string
  timestamp: string
  isInternal?: boolean
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
  tags: string[]
  helpful?: number
  notHelpful?: number
}

// SharePoint Types
export interface SharePointDocument {
  id: string
  title: string
  url: string
  author: string
  lastModified: string
  fileSize: number
  contentType: string
  tags?: string[]
}

export interface SharePointList {
  id: string
  title: string
  description?: string
  itemCount: number
  lastModified: string
}

// Search Types
export interface SearchResult {
  id: string
  title: string
  description: string
  type: 'product' | 'mga' | 'resource' | 'news' | 'document'
  url: string
  tags: string[]
  lastModified?: string
}

export interface SearchFilters {
  category?: string
  type?: string
  dateRange?: {
    start: string
    end: string
  }
  tags?: string[]
}

// Navigation Types
export interface NavItem {
  key: string
  name: string
  url: string
  icon: string
  children?: NavItem[]
  badge?: string
  disabled?: boolean
}

// API Response Types
export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
  error?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  pageSize: number
  hasNext: boolean
  hasPrevious: boolean
}

// Form Types
export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
  department?: string
  priority?: 'low' | 'medium' | 'high'
}

export interface FeedbackForm {
  rating: number
  category: string
  comment: string
  contactEmail?: string
}

// Notification Types
export interface Notification {
  id: string
  title: string
  message: string
  type: 'info' | 'success' | 'warning' | 'error'
  timestamp: string
  read: boolean
  actionUrl?: string
}

// Settings Types
export interface UserSettings {
  theme: 'light' | 'dark' | 'auto'
  notifications: {
    email: boolean
    push: boolean
    sms: boolean
  }
  language: string
  timezone: string
}

// Analytics Types
export interface PageView {
  page: string
  timestamp: string
  userId?: string
  sessionId: string
  userAgent: string
  referrer?: string
}

export interface SearchAnalytics {
  query: string
  results: number
  timestamp: string
  userId?: string
  filters?: SearchFilters
}

// Error Types
export interface AppError {
  code: string
  message: string
  details?: any
  timestamp: string
  userId?: string
}

// Configuration Types
export interface AppConfig {
  name: string
  version: string
  environment: 'development' | 'staging' | 'production'
  apiUrl: string
  sharePointUrl: string
  azureTenantId: string
  azureClientId: string
  features: {
    authentication: boolean
    sharePoint: boolean
    search: boolean
    notifications: boolean
    analytics: boolean
  }
} 