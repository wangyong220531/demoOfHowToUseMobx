import { makeAutoObservable } from "mobx"

class CountStore {
    count = 0

    constructor() {
        makeAutoObservable(this)
    }

    setCount = (newCount: number) => {
        return (this.count = newCount)
    }
}

const countStore = new CountStore()

export default countStore
