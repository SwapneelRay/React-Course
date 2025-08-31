import { useState } from "react";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";
import { EXAMPLES } from "./data.js";
function App() {
  const [val, setVal] = useState("");
  // let tabContent = <p>please select a topic</p>;
  // if(val){
  //   <div id="tab-content">
  //             <h3>{EXAMPLES[val].title}</h3>
  //             <p>{EXAMPLES[val].description}</p>
  //             <pre>
  //               <code>{EXAMPLES[val].code}</code>
  //             </pre>
  //   </div>
  // }
  function selectHandler(selected) {
    setVal(selected);
    //console.log(val)
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2> Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => (
              <CoreConcept key={item.title} {...item} />
            ))}

            {/* 
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            /> */}
          </ul>
        </section>
        <section id="examples">
          <menu>
            <TabButton
              isSelected={val === "components" ? "active" : undefined}
              onSelect={() => selectHandler("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={val === "JSX" ? "active" : undefined}
              onSelect={() => selectHandler("JSX")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={val === "Props" ? "active" : undefined}
              onSelect={() => selectHandler("Props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={val === "State" ? "active" : undefined}
              onSelect={() => selectHandler("State")}
            >
              State
            </TabButton>
          </menu>
          {!val ? (
            <p>please select a topic</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[val].title}</h3>
              <p>{EXAMPLES[val].description}</p>
              <pre>
                <code>{EXAMPLES[val].code}</code>
              </pre>
            </div>
          )}
          {/* {tabContent} */}
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
