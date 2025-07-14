import { SPFI } from '@pnp/sp'
import { spfi } from '@pnp/sp'
import { SPFx as spSPFx } from '@pnp/sp'
import { LogLevel, PnPLogging } from '@pnp/logging'
import { WebPartContext } from '@microsoft/sp-webpart-base'

let _sp: SPFI | null = null

export const getSP = (context?: WebPartContext): SPFI => {
  if (_sp === null && context != null) {
    // You must add the @pnp/logging package to include the LogLevel enum
    _sp = spfi().using(spSPFx(context)).using(PnPLogging(LogLevel.Warning))
  }
  return _sp!
}

// For client-side applications (like this Next.js app)
export const getSPClient = (): SPFI => {
  if (_sp === null) {
    // This would be configured with authentication tokens
    // For now, we'll create a basic instance
    _sp = spfi()
  }
  return _sp
}

// Initialize SharePoint connection for client-side
export const initSP = (siteUrl: string) => {
  if (_sp === null) {
    _sp = spfi(siteUrl)
  }
  return _sp
} 