import React from 'react'
import List from './List'
import Paragraph from './Paragraph'

function Hello() {


  let person={//object literal
    personName:"Ravi",
    personAdd:"Pune"
  }

  let person1 = [{personName:"Ravi"},{ personName:"Rahul"},{ personName:"Akash"}]

  function display(){
    return person.personName+ " "+ person.personAdd
  }
    return (
        <div style = {{display:"flex"}}>
           <List></List>
           <Paragraph/>
          {display()}
          {
            person1.map((s,id)=>(
                <p key={id}>
                  {s.personName}
                 
                </p>
            ))
          }
        </div>
    )
}

export default Hello
