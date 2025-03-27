import mitt from 'mitt'

type Events = {
  someEvent: string
  anotherEvent: number
}

const eventBus = mitt<Events>()

export default defineNuxtPlugin(() => {
  return {
    provide: {
      eventBus
    }
  }
})
