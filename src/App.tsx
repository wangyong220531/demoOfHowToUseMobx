import { observer } from 'mobx-react-lite'
import countStore from './store/countStore'
import './App.css'

const App = observer(() => {
    const { count } = countStore
    return (
        <>
            <div>{count}</div>
            <button onClick={() => countStore.setCount(count + 1)}>加1</button>
        </>
    )
})

export default App
