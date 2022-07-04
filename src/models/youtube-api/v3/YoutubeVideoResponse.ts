export class YoutubeVideoResponse {
    kind: string | undefined;
    etag: string | undefined;
    items: Item[] | undefined;
    pageInfo: PageInfo | undefined;
  }
  
  export class Item {
    kind: string | undefined;
    etag: string | undefined;
    id: string | undefined;
    snippet: Snippet | undefined;
    statistics: Statistics | undefined;
  }
  
  export class Snippet {
    publishedAt: string | undefined;
    channelId: string | undefined;
    title: string | undefined;
    description: string | undefined;
    thumbnails: Thumbnails | undefined;
    channelTitle: string | undefined;
    tags: string[] | undefined;
    categoryId: string | undefined;
    liveBroadcastContent: string | undefined;
    localized: Localized | undefined;
    defaultAudioLanguage: string | undefined;
  }
  
  export interface Thumbnails {
    default: Default
    medium: Medium
    high: High
    standard: Standard
  }
  
  export interface Default {
    url: string
    width: number
    height: number
  }
  
  export interface Medium {
    url: string
    width: number
    height: number
  }
  
  export interface High {
    url: string
    width: number
    height: number
  }
  
  export interface Standard {
    url: string
    width: number
    height: number
  }
  
  export interface Localized {
    title: string
    description: string
  }
  
  export interface Statistics {
    viewCount: string
    likeCount: string
    favoriteCount: string
    commentCount: string
  }
  
  export interface PageInfo {
    totalResults: number
    resultsPerPage: number
  }
  