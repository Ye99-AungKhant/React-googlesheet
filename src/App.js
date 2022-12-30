import { useEffect, useState } from "react"
import axios from "axios"
const App = () => {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [getApi, setGetApi] = useState([])
  const [refresh, setRefresh] = useState([])

  const add = (e) =>{
    e.preventDefault()
    axios.post('https://sheet.best/api/sheets/dc654825-9f47-4723-90f9-fc13f6c71204',{
      name, age
    }).then(res => setRefresh(res.data))
  }


  useEffect(() => {
    axios.get('https://sheet.best/api/sheets/dc654825-9f47-4723-90f9-fc13f6c71204')
    .then(res => 
      setGetApi(res.data)
    )
  }, [refresh])

  return (
    <div>
      <form>
        <input type="text" className="form-control" onChange={(e) => setName(e.target.value)}/>
        <input type="text" className="form-control" onChange={(e) => setAge(e.target.value)}/>
        <button onClick={add}>Add</button>
      </form>

    {getApi.map((data, index) => {
      return (
        <p key={index}>{data.name}, {data.age}</p>
      )
    })}
    </div>
  )
}

export default App