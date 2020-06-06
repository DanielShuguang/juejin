/**
 * 沸点页面数据获取接口
 */
export interface PinsDataPayload {
  url: string
  data: {
    operationName: string
    query: string
    variables: {
      size: number
      after: string
      afterPosition: string
    }
    extensions: {
      query: {
        id: string
      }
    }
  }
}

export interface PinsResponseData {
  node: {
    action: string
    actors: [
      {
        avatarLarge: string
        company: string
        id: string
        jobTitle: string
        username: string
      }
    ]
    target: [
      {
        commentCount: number
        content: string
        createdAt: string
        isTopicRecommend?: boolean
        likeCount: number
        pictures: Array<string>
        topic: {
          title: string
        }
        updateAt: string
      }
    ]
  }
}