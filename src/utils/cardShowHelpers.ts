import { siteContent } from '../constants/siteContent'
import { StreamPlatform } from '../types/api/search'

export const getSubscriptionPlatform = (streamPlatforms: StreamPlatform[]) => {
  const renderedIds = new Set<string>()

  return streamPlatforms
    .filter((platform) => platform.type === 'subscription')
    .filter((platform) => {
      if (renderedIds.has(platform.service.id)) {
        return false
      }
      renderedIds.add(platform.service.id)
      return true
    })
}

export const getPlatformIcon = (serviceName: string) => {
  return siteContent.streamingIcons.find((icon) => icon.name === serviceName)
}
