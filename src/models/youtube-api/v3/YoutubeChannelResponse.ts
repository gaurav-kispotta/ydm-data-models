export class YoutubeChannelResponse {
    kind: string | undefined;
    etag: string | undefined;
    pageInfo: PageInfo | undefined;
    items: Item[] | undefined;
  }
  
  export class PageInfo {
    totalResults: number | undefined;
    resultsPerPage: number | undefined;
  }
  
  export class Item {
    kind: string | undefined;
    etag: string | undefined;
    id: string | undefined;
    statistics: Statistics | undefined;
  }
  
  export class Statistics {
    viewCount: string | undefined;
    subscriberCount: string | undefined;
    hiddenSubscriberCount: boolean | undefined;
    videoCount: string | undefined;
  }
  