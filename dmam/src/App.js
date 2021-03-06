import './App.css';

import { TabNavigation, Tab } from 'evergreen-ui'
import { Pane, Button, Text, Heading } from 'evergreen-ui'
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

import ComparingComponent from './ComparingComponent'
import { useState } from 'react';

import demoImg from './assets/model-1954084_640.jpg'

import manual from './assets/demo1.jpg'

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

const defaultUrl = demoImg

const defaultUrlDesc = `
Obraz <a href="https://pixabay.com/pl/users/superferfilm-3895353/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1954084"> 
Fernando Gimenez</a> z <a href="https://pixabay.com/pl/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1954084"> 
Pixabay</a>
`

function App() {
  const [isLoaded, setisLoaded] = useState(false)
  const [url, setUrl] = useState(getDefaultUrl(location.hash.substr(1)) || defaultUrl)
  const [missArray, setMissArray] = useState([])
  const [crop, setCrop] = useState({ _aspect: 16 / 9 })
  return (
    <div className="App">
      <header className="App-header">

        <Pane display="flex" padding={16} background="tint2" borderRadius={3}>
          <Pane flex={1} alignItems="center" display="block">
            <Heading size={600}>Don't miss a miss (Nie przegap pewnej* miss)</Heading>
            <small>* - gra słów</small>
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
            <Button onClick={() => load(url, data => {setisLoaded(true); setMissArray(missArray.concat(...data))})}>Load misses</Button>
            <div>
              Porada: Wykonaj drag &amp; drop myszką, by zaznaczyć uczestniczkę.
            </div>
            {CropImg ? CropImg({src: url, crop, setCrop}) : <img src={url} rel="noopener noreferrer"/>}
          </div>
        }
      </section>
      <section>
        <h1>Jak korzystać?</h1>
        <img src={manual} width="800" style={{opacity: 0.5}}/>
      </section>
    </div>
  );
}

function CropImg({ src, crop, setCrop }) {
  // const [crop, setCrop] = useState({ aspect: 16 / 9 });
  return <ReactCrop src={src} crop={crop} onChange={newCrop => setCrop(newCrop)} />;
}

export default App;
