export type ShowSearchResult = ShowItem[]

export interface ShowItem {
  itemType: string
  showType: string
  id: string
  imdbId: string
  tmdbId: string
  title: string
  overview: string
  releaseYear?: number
  originalTitle: string
  genres: Genre[]
  imageSet: ImageSet
  streamingOptions: StreamingOptions
  firstAirYear?: number
  lastAirYear?: number
  creators?: string[]
  seasonCount?: number
  episodeCount?: number
}

export interface Genre {
  id: string
  name: string
}

export interface ImageSet {
  verticalPoster: VerticalPoster
  horizontalPoster: HorizontalPoster
  verticalBackdrop?: VerticalBackdrop
  horizontalBackdrop: HorizontalBackdrop
}

export interface VerticalPoster {
  w240: string
  w360: string
  w480: string
  w600: string
  w720: string
}

export interface HorizontalPoster {
  w360: string
  w480: string
  w720: string
  w1080: string
  w1440: string
}

export interface VerticalBackdrop {
  w240: string
  w360: string
  w480: string
  w600: string
  w720: string
}

export interface HorizontalBackdrop {
  w360: string
  w480: string
  w720: string
  w1080: string
  w1440: string
}

export interface StreamingOptions {
  es?: StreamPlatform[]
}

export interface StreamPlatform {
  service: {
    id: string
    name: 'Netflix' | 'Max' | 'Prime Video' | 'Disney+' | 'Apple TV'
  }
  type: 'subscription' | 'buy' | 'rent' | 'addon'
  link: string
  videoLink: string
}
