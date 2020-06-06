/**
 * 导航栏信息
 */
export interface NavItem {
  link: string
  title: string
}

/**
 * 条目详情信息
 */
export interface DetailInfo {
  user: string
  title: string
  time: string
  type: Array<{ title: string }>
  link: string
}

/**
 * 从掘金 api 获取到的数据
 */
export interface HomeResponseData {
  node: {
    category: {
      id: string
      name: string
    }
    content: string
    hot: boolean
    originalUrl: string
    commentsCount: number
    likeCount: number
    title: string
    createdAt: string
    tags: Array<{ title: string }>
    user: {
      role: string
      username: string
    }
  }
}

/**
 * @Action getHomeDataFromApi 的 payload 数据内容
 */
export interface HomeDataPayload {
  url: string
  data: {
    operationName: string
    query: string
    variables: {
      first: number
      after: string
      order: string
      category?: string
      tags?: Array<string>
    }
    extensions: {
      query: {
        id: string
      }
    }
  }
}