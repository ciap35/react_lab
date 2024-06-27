import React from 'react'
import HookState from './components/HookState'
import HookUseEffect from './components/HookUseEffect'
import PreventDefault from './components/PreventDefault'
import UseEffectAndFetch from './components/UseEffectAndFetch'
import UseEffectAndWindowAddEventListener from './components/UseEffectAndWindowAddEventListener'
import HookUseLayoutEffect from './components/HookUseLayoutEffect'
import HookUseRef from './components/HookUseRef'

const App = () => {
  return (
    <div className='container text-center'>
      <h1>useState</h1>
      <hr/>
      <HookState/>
      
      <br/>
      <br/>
      <br/>

      <h1>useEffect</h1>
      <hr/>
      <HookUseEffect/>

      <br/>
      <br/>
      <br/>

      <h1>preventDefault</h1>
      <hr/>
      <PreventDefault/>

      <br/>
      <br/>
      <br/>

      <h1>useEffectAndFetch</h1>
      <hr/>
      <UseEffectAndFetch/>

      <br/>
      <br/>
      <br/>

      <h1>useEffectAndWindowAddEventListener</h1>
      <hr/>
      <UseEffectAndWindowAddEventListener/>

      <br/>
      <br/>
      <br/>

      <h1>useLayoutEffect</h1>
      <hr/>
      <HookUseLayoutEffect/>

      
      <br/>
      <br/>
      <br/>

      <h1>useRef</h1>
      <hr/>
      <HookUseRef/>

    </div>
  )
}

export default App
