import React from 'react'
import HookState from './components/HookState'
import HookUseEffect from './components/HookUseEffect'
import PreventDefault from './components/PreventDefault'
import UseEffectAndFetch from './components/UseEffectAndFetch'
import UseEffectAndWindowAddEventListener from './components/UseEffectAndWindowAddEventListener'
import HookUseLayoutEffect from './components/HookUseLayoutEffect'
import HookUseRef from './components/HookUseRef'
import HookUseMemo from './components/HookUseMemo.jsx'
import HookUseMemo_1 from './components/HookUseMemo_1.jsx'
import HookUseCallBack from './components/HookUseCallBack.jsx'
import HookUseCallBack_1 from './components/HookUseCallBack_1.jsx'


const App = () => {
  return (
    <div className='container text-center'>
      <h1>useState</h1>
      <hr/>
      <HookState/>
      
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

      <br/>
      <br/>
      <br/>

      <h1>useMemo</h1>
      <hr/>
      <HookUseMemo/>

      <br/>
      <br/>
      <br/>

      <h1>useMemo_1</h1>
      <hr/>
      <HookUseMemo_1/>

      <br/>
      <br/>
      <br/>

      <h1>HookUseCallBack</h1>
      <hr/>
      <HookUseCallBack/>

      <br/>
      <br/>
      <br/>

      <h1>HookUseCallBack_1</h1>
      <hr/>
      <HookUseCallBack_1/>
    </div>
  )
}

export default App
