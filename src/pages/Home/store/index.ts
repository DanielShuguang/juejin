import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import store from '@/store'
import Axios from 'axios'
import { HomeResponseData, HomeDataPayload } from '@/pages/Home/interface'

@Module({ name: 'user', dynamic: true, store })
export default class User extends VuexModule {
  category = ''
  /**
   * 从掘金服务器获取的主页数据
   */
  homeData: Array<HomeResponseData> = []

  /**
   * 存储数据
   * @param payload 成功获取到的数据内容
   */
  @Mutation
  SAVE_HOMEDATA(payload: Array<HomeResponseData>) {
    this.homeData = []
    payload.map(item => {
      this.homeData.push({ ...item })
    })
  }

  /**
   * 设置获取数据的标签信息
   * @param payload 需要获取数据的对应标签
   */
  @Mutation
  SET_CATEGORY(payload: string) {
    this.category = payload
  }

  /**
   * 链接掘金官方 api 获取数据
   * @param payload 链接的 url 和头部设置
   */
  @Action
  getHomeDataFromApi(payload: HomeDataPayload) {
    return new Promise((resolve, reject) => {
      Axios.post(payload.url, payload.data, { headers: { 'X-Agent': 'Juejin/Web' } })
        .then(result => {
          const arr: Array<HomeResponseData> = result.data.data.articleFeed.items.edges
          this.SAVE_HOMEDATA(arr)
          resolve(true)
        }).catch(error => {
          alert('api数据获取失败！')
          console.log(error)
          reject(error)
        })
    })
  }
}
