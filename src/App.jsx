import { useEffect, useState } from 'react'
import Card from './components'
import './index.css'

function App() {

  const [data, setData] = useState([])
  async function getData() {
    const rs = await fetch('https://jsonplaceholder.typicode.com/users')
    const rsJson = await rs.json()
    setData(rsJson)
  }
  useEffect(() => {
    getData()
  }, [])


  return (
    <>
      <div id='cardConteiner'>
        {data.map((user, index) => (

          <Card key={index} user={user} img={'https://picsum.photos/200/300?random=1'} name={user.name} username=  
           {user.username} correo={user.email} />))}
      </div>
    </>
  )
}

export default App
