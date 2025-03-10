declare namespace TPow {
  interface TonicPowOptions {
    onWidgetLoaded: (widget: TPow.Widget) => void
  }

  export class TonicPow {
    constructor(options?: TonicPowOptions)
    storage: Storage
    config: Config
    events: Events
    apiUrl: string
    environment: string
    sessionId: string | null
    start: number
  }

  export type Capture = {
    sessionId: string | null
    challengeGuid: string | null
  }

  export function setOreo(name: string, value: string, days: number): void
  export function captureVisitorSession(customSessionId: string): Capture
  export function getVisitorSession(): string | null
  export function loadDivs(): Promise<void>
  export function load(): Promise<void>

  export interface Widget {
    height: number
    image_url: string
    link_url: string
    title: string
    width: number
    id?: string
  }

  export type Payload = {
    v: string
    name: string
    location: string
    data: string
    tncpw_session?: string
  }

  export const widgets: Map<string, Widget>
  export class Events {
    sessionId: string
    start: number

    detectBounce: () => void
    detectInteraction: () => void
    detectWidgetClick: () => void
    sendPing: () => void
    sendEvent: (eventName: string, data: string) => Promise<void>
  }

  export class Config {
    apiUrl: string
    environment: string
    environmentStaging: string
    apiUrlStaging: string
    environmentLocal: string
    apiUrlLocal: string
    environmentProduction: string
    apiUrlProduction: string
    setEnvironment(env: string): void
    isEnvironmentValid(env: string): boolean
  }

  export class Storage {
    getStorage(key: string): string | null
    removeStorage(name: string): boolean
    setStorage(key: string, value: string, expires: number | null): boolean
  }
}

export default TPow
