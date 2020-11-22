import './App.css';

import { TabNavigation, Tab } from 'evergreen-ui'
import { Pane, Button, Text, Heading } from 'evergreen-ui'

import ComparingComponent from './ComparingComponent'

const location = window.location

function App() {
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
        <ComparingComponent year={2019}/>
      </section>
    </div>
  );
}

export default App;
