import { PublicClientApplication, Configuration, AccountInfo } from '@azure/msal-browser'

// Azure AD configuration
const msalConfig: Configuration = {
  auth: {
    clientId: process.env.NEXT_PUBLIC_AZURE_CLIENT_ID || '',
    authority: `https://login.microsoftonline.com/${process.env.NEXT_PUBLIC_AZURE_TENANT_ID}`,
    redirectUri: typeof window !== 'undefined' ? window.location.origin : '',
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return
        }
        switch (level) {
          case 0:
            console.error(message)
            return
          case 1:
            console.warn(message)
            return
          case 2:
            console.info(message)
            return
          case 3:
            console.debug(message)
            return
          default:
            console.log(message)
            return
        }
      },
    },
  },
}

// Initialize MSAL
export const msalInstance = new PublicClientApplication(msalConfig)

// Scopes for Microsoft Graph and SharePoint
export const loginRequest = {
  scopes: [
    'User.Read',
    'Sites.Read.All',
    'Files.Read.All',
    'Sites.ReadWrite.All',
    'Files.ReadWrite.All'
  ]
}

// Get current account
export const getCurrentAccount = (): AccountInfo | null => {
  const currentAccounts = msalInstance.getAllAccounts()
  if (currentAccounts.length === 0) {
    return null
  }
  
  // Get the first account
  return currentAccounts[0]
}

// Login function
export const login = async () => {
  try {
    const response = await msalInstance.loginPopup(loginRequest)
    return response
  } catch (error) {
    console.error('Login error:', error)
    throw error
  }
}

// Logout function
export const logout = async () => {
  try {
    await msalInstance.logoutPopup()
  } catch (error) {
    console.error('Logout error:', error)
    throw error
  }
}

// Get access token for Microsoft Graph
export const getAccessToken = async (): Promise<string | null> => {
  try {
    const account = getCurrentAccount()
    if (!account) {
      throw new Error('No account found')
    }

    const response = await msalInstance.acquireTokenSilent({
      ...loginRequest,
      account: account
    })
    
    return response.accessToken
  } catch (error) {
    console.error('Error acquiring token:', error)
    return null
  }
} 