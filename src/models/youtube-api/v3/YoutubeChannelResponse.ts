export class YoutubeChannelResponse {
    kind: string
    etag: string
    pageInfo: PageInfo
    items: Item[]
  }
  
  export class PageInfo {
    totalResults: number
    resultsPerPage: number
  }
  
  export class Item {
    kind: string
    etag: string
    id: string
    statistics: Statistics
  }
  
  export class Statistics {
    viewCount: string
    subscriberCount: string
    hiddenSubscriberCount: boolean
    videoCount: string
  }
  