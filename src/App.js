import { useState } from "react"

const App = () => {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  const add = (e) =>{
    e.preventDefault()
    console.log(name, age);
  }

  return (
    <div>
      <form>
        <input type="text" className="form-control" onChange={(e) => setName(e.target.value)}/>
        <input type="text" className="form-control" onChange={(e) => setAge(e.target.value)}/>
        <button onClick={add}>Add</button>
      </form>
    </div>
  )
}

export default App