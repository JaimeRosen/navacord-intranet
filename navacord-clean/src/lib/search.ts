import { SearchResult, SearchFilters } from '@/types'

// Mock data for demonstration - replace with real API calls
const mockSearchData = {
  products: [
    { id: '1', title: 'Commercial Property Insurance', description: 'Comprehensive property coverage for commercial buildings', type: 'product' as const, url: '/products', tags: ['Property', 'Commercial'] },
    { id: '2', title: 'Cyber Liability Insurance', description: 'Protection against cyber threats and data breaches', type: 'product' as const, url: '/products', tags: ['Cyber', 'Technology'] },
  ],
  mgas: [
    { id: '1', title: 'Alpha Risk Solutions', description: 'Specialized in construction and manufacturing risks', type: 'mga' as const, url: '/mgas', tags: ['Construction', 'Manufacturing'] },
    { id: '2', title: 'Beta Insurance Group', description: 'Leading provider of professional liability coverage', type: 'mga' as const, url: '/mgas', tags: ['Healthcare', 'Professional'] },
  ],
  resources: [
    { id: '1', title: 'Underwriting Guidelines', description: 'Comprehensive underwriting guidelines for all products', type: 'resource' as const, url: '/resources', tags: ['Underwriting', 'Guidelines'] },
    { id: '2', title: 'Claims Processing Guide', description: 'Step-by-step guide for claims processing', type: 'resource' as const, url: '/resources', tags: ['Claims', 'Process'] },
  ],
  news: [
    { id: '1', title: 'New Cyber Liability Product Launch', description: 'Navacord announces comprehensive cyber liability insurance', type: 'news' as const, url: '/news', tags: ['Product Launch', 'Cyber'] },
    { id: '2', title: 'Regulatory Changes Update', description: 'Important regulatory changes affecting insurance market', type: 'news' as const, url: '/news', tags: ['Regulations', 'Compliance'] },
  ]
}

export const searchContent = async (
  query: string, 
  filters?: SearchFilters
): Promise<SearchResult[]> => {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300))
    
    const normalizedQuery = query.toLowerCase().trim()
    if (!normalizedQuery) return []

    const results: SearchResult[] = []
    
    // Search across all content types
    Object.values(mockSearchData).forEach(contentArray => {
      contentArray.forEach(item => {
        const matchesQuery = 
          item.title.toLowerCase().includes(normalizedQuery) ||
          item.description.toLowerCase().includes(normalizedQuery) ||
          item.tags.some(tag => tag.toLowerCase().includes(normalizedQuery))
        
        const matchesFilters = !filters || (
          (!filters.category || item.type === filters.category) &&
          (!filters.type || item.type === filters.type) &&
          (!filters.tags || filters.tags.every(tag => item.tags.includes(tag)))
        )
        
        if (matchesQuery && matchesFilters) {
          results.push({
            ...item,
            lastModified: new Date().toISOString()
          })
        }
      })
    })
    
    // Sort by relevance (exact matches first, then partial matches)
    results.sort((a, b) => {
      const aExactMatch = a.title.toLowerCase() === normalizedQuery
      const bExactMatch = b.title.toLowerCase() === normalizedQuery
      
      if (aExactMatch && !bExactMatch) return -1
      if (!aExactMatch && bExactMatch) return 1
      
      return 0
    })
    
    return results.slice(0, 20) // Limit results
  } catch (error) {
    console.error('Search error:', error)
    return []
  }
}

export const searchSuggestions = async (query: string): Promise<string[]> => {
  try {
    const normalizedQuery = query.toLowerCase().trim()
    if (!normalizedQuery) return []
    
    const suggestions = new Set<string>()
    
    // Generate suggestions from existing content
    Object.values(mockSearchData).forEach(contentArray => {
      contentArray.forEach(item => {
        // Add title words as suggestions
        item.title.split(' ').forEach(word => {
          if (word.toLowerCase().includes(normalizedQuery) && word.length > 2) {
            suggestions.add(word)
          }
        })
        
        // Add tags as suggestions
        item.tags.forEach(tag => {
          if (tag.toLowerCase().includes(normalizedQuery)) {
            suggestions.add(tag)
          }
        })
      })
    })
    
    return Array.from(suggestions).slice(0, 5)
  } catch (error) {
    console.error('Search suggestions error:', error)
    return []
  }
}

export const getPopularSearches = (): string[] => {
  return [
    'Commercial Property',
    'Cyber Liability',
    'Underwriting Guidelines',
    'Claims Process',
    'MGA Directory'
  ]
}

export const getRecentSearches = (): string[] => {
  // TODO: Implement with localStorage or backend storage
  const recent = localStorage.getItem('recentSearches')
  return recent ? JSON.parse(recent) : []
}

export const saveRecentSearch = (query: string): void => {
  try {
    const recent = getRecentSearches()
    const updated = [query, ...recent.filter(q => q !== query)].slice(0, 10)
    localStorage.setItem('recentSearches', JSON.stringify(updated))
  } catch (error) {
    console.error('Error saving recent search:', error)
  }
} 