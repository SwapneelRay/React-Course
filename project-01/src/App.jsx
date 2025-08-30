import { useState } from 'react';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept/CoreConcept.jsx'
import TabButton from './components/TabButton/TabButton.jsx';
function App() {
  const [val,setVal] = useState('please click a button');  
  function selectHandler(selected){
    setVal(selected)
    //console.log(val)
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2> Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            
            <CoreConcept 
              title={CORE_CONCEPTS[1].title}
              description ={CORE_CONCEPTS[1].description}
              image ={CORE_CONCEPTS[1].image}
            />
            <CoreConcept 
              title={CORE_CONCEPTS[2].title}
              description ={CORE_CONCEPTS[2].description}
              image ={CORE_CONCEPTS[2].image}
            />
            <CoreConcept 
              title={CORE_CONCEPTS[3].title}
              description ={CORE_CONCEPTS[3].description}
              image ={CORE_CONCEPTS[3].image}
            />
          </ul>
        </section>
        <section id="examples">
          <menu>
            <TabButton onSelect={()=>selectHandler('components')}>Components</TabButton>
            <TabButton onSelect={()=>selectHandler('JSX')}>JSX</TabButton>
            <TabButton onSelect={()=>selectHandler('Props')}>Props</TabButton>
            <TabButton onSelect={()=>selectHandler('State')}>State</TabButton>

          </menu>
          {val}
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
