import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import store from '@/store'
import { PinsDataPayload, PinsResponseData } from '../interface'
import Axios from 'axios'

@Module({ name: 'pins', dynamic: true, store })
export default class Pins extends VuexModule {
  pinsDetailsData: Array<PinsResponseData> = []

  @Mutation
  SAVE_PINSDATA(payload: Array<PinsResponseData>) {
    this.pinsDetailsData = []
    payload.map(item => {
      this.pinsDetailsData.push({ ...item })
    })
  }

  @Action
  getPinsDataFromApi(payload: PinsDataPayload) {
    Axios.post(payload.url, payload.data, { headers: { 'X-Agent': 'Juejin/Web' } })
      .then(result => {
        const arr: Array<PinsResponseData> =
          result.data.data.recommendedActivityFeed.items.edges
        arr.map(item => {
          this.pinsDetailsData.push({ ...item })
        })
      })
  }
}
