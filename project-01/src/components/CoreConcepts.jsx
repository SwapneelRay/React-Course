import { CORE_CONCEPTS } from "../data.js";
import CoreConcept from "../components/CoreConcept/CoreConcept.jsx";

export default function CoreConcepts(){
    return(
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
    );
}