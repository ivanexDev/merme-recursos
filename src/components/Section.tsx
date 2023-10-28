import { useState } from "react"

const Section = (props: {title: string}) => {

    const [isOpen, setIsOpen] = useState(false)

    const isActive = isOpen ? "active" : ""

  return <>
     <section>
            <h2 onClick={()=>{
              console.log("click")
              setIsOpen(!isOpen)}}>{props.title}</h2>
            <ul className={isActive}>
                <li>hola</li>
                <li>como</li>
                <li>estas</li>
                <li>?</li>
                <li>je</li>
                <li>je</li>
            </ul>
    </section>
    
  </>
}

export default Section

