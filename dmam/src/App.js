import './App.css';

import { TabNavigation, Tab } from 'evergreen-ui'
import { Pane, Button, Text, Heading } from 'evergreen-ui'

import ComparingComponent from './ComparingComponent'
import { useState } from 'react';

const location = window.location

const load = (url, cb = () => {}) => {
  fetch(url)
  cb([{}, {}])
}

/**
 * Gets first param or `api` param from location.hash-compatible string
 * 
 * http://localhost:3000/#api=http://localhost:1000
 * http://localhost:3000/#http://localhost:1000
 * 
 * @param {*} hash e.g. url=https://randomuser.me/api
 */
function getDefaultUrl(hash) {
  const vals = hash.split('&')
  const arg = vals.find(e => e.split('=')[0] == 'api' || vals.length == 1)
  return arg.split('=')[1] || vals[0]
}

function App() {
  const [isLoaded, setisLoaded] = useState(false)
  const [url, setUrl] = useState(getDefaultUrl(location.hash.substr(1)))
  const [missArray, setMissArray] = useState([])
  return (
    <div className="App">
      <header className="App-header">

        <Pane display="flex" padding={16} background="tint2" borderRadius={3}>
          <Pane flex={1} alignItems="center" display="flex">
            <Heading size={600}>Don't miss a miss (Nie przegap miss)</Heading>
          </Pane>
          <Pane>
            {/* Below you can see the marginRight property on a Button. */}
            <Button marginRight={16} onClick={() => location.href="https://github.com/dontmissamiss"}>Github</Button>
            <Button appearance="primary">Contact us</Button>
          </Pane>
        </Pane>
      </header>
      
      <section>
        {0 ? <TabNavigation>
          {['2019'].map((tab, index) => (
            <Tab key={tab} is="a" href="#" id={tab} isSelected={index === 0}>
              {tab}
            </Tab>
          ))}
        </TabNavigation> : [] }
        {isLoaded ? 
          <ComparingComponent missArray={missArray} year={2019}/>
          :
          <div>
            <input value={url} onChange={(ev) => setUrl(ev.target.value)}/>
            {url}
            <Button onClick={() => load(url, data => {setisLoaded(true); setMissArray(missArray.concat(...data))})}>Load misses</Button>
          </div>
        }
      </section>
    </div>
  );
}

export default App;
