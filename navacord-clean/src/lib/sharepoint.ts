import { SPFI } from '@pnp/sp'
import { GraphFI } from '@pnp/graph'
import { spfi, graphfi } from '@pnp/sp'
import { getSP } from './pnpjsConfig'

// SharePoint site configuration
const SHAREPOINT_SITE_URL = process.env.NEXT_PUBLIC_SHAREPOINT_SITE_URL || ''

// Initialize SharePoint connection
export const getSharePoint = (): SPFI => {
  return getSP()
}

// Initialize Microsoft Graph connection
export const getGraph = (): GraphFI => {
  return graphfi()
}

// Example: Get documents from SharePoint library
export const getDocuments = async (libraryName: string = 'Documents') => {
  try {
    const sp = getSharePoint()
    const items = await sp.web.lists.getByTitle(libraryName).items.getAll()
    return items
  } catch (error) {
    console.error('Error fetching documents:', error)
    return []
  }
}

// Example: Get news from SharePoint list
export const getNews = async () => {
  try {
    const sp = getSharePoint()
    const items = await sp.web.lists.getByTitle('News').items.getAll()
    return items
  } catch (error) {
    console.error('Error fetching news:', error)
    return []
  }
}

// Example: Get user profile from Microsoft Graph
export const getUserProfile = async () => {
  try {
    const graph = getGraph()
    const profile = await graph.me()
    return profile
  } catch (error) {
    console.error('Error fetching user profile:', error)
    return null
  }
}

// Example: Search SharePoint content
export const searchSharePoint = async (query: string) => {
  try {
    const sp = getSharePoint()
    const results = await sp.search({
      Querytext: query,
      RowLimit: 10,
      SelectProperties: ['Title', 'Path', 'Author', 'LastModifiedTime']
    })
    return results.PrimarySearchResults
  } catch (error) {
    console.error('Error searching SharePoint:', error)
    return []
  }
}

// Example: Upload document to SharePoint
export const uploadDocument = async (file: File, libraryName: string = 'Documents') => {
  try {
    const sp = getSharePoint()
    const result = await sp.web.lists.getByTitle(libraryName).rootFolder.files.add(
      file.name,
      file,
      true
    )
    return result
  } catch (error) {
    console.error('Error uploading document:', error)
    throw error
  }
}

// Example: Get SharePoint site information
export const getSiteInfo = async () => {
  try {
    const sp = getSharePoint()
    const web = await sp.web()
    return {
      title: web.Title,
      description: web.Description,
      url: web.Url,
      created: web.Created
    }
  } catch (error) {
    console.error('Error fetching site info:', error)
    return null
  }
} 