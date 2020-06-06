import { shallowMount } from '@vue/test-utils'
import Main from '@/pages/Main.vue'

describe('Main.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(Main)
    expect(wrapper.element).toBeTruthy()
  })
})
