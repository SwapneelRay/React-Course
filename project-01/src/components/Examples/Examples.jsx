import { useState } from "react";
import { EXAMPLES } from "../../data.js";
import './Examples.css'
import TabButton from "../../components/TabButton/TabButton.jsx";
export default function Examples(){
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
    return(
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
    );
}