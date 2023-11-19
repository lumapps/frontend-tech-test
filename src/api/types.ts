interface ComicData {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Comic[];
}

interface Comic {
  id: number;
  name: string;
  description: string;
  modified: Date;
  resourceURI: string;
  urls: Url[];
  thumbnail: Thumbnail;
  comics: ComicInfo;
  stories: StoryInfo;
  events: EventInfo;
  series: SeriesInfo;
}

interface Url {
  type: string;
  url: string;
}

interface Thumbnail {
  path: string;
  extension: string;
}

interface ComicInfo {
  available: number;
  returned: number;
  collectionURI: string;
  items: ResourceItem[];
}

interface StoryInfo {
  available: number;
  returned: number;
  collectionURI: string;
  items: StoryItem[];
}

interface EventInfo {
  available: number;
  returned: number;
  collectionURI: string;
  items: ResourceItem[];
}

interface SeriesInfo {
  available: number;
  returned: number;
  collectionURI: string;
  items: ResourceItem[];
}

interface ResourceItem {
  resourceURI: string;
  name: string;
  type?: string;
}

interface StoryItem extends ResourceItem {
  type: string;
}

export interface ListCharactersResponse {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: ComicData;
  etag: string;
}
