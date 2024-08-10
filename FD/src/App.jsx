import { data } from './data.js'
import './App.css'
import { useState } from 'react';

function App() {
  const [search, setSearch]= useState('')

  return (
    <>
      <div className='container' mt-5>
        <h4 className='text-primary'>Filter Table Data</h4>
        <form>
            <input type="text" placeholder='Search Text'
            onChange={(e)=> setSearch(e.target.value)} />
        </form>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            
            {data
              .filter((item)=> {
                return search ===''? item :
                 item.first_name.toLowerCase().includes(search.toLowerCase()) ||
                 item.last_name.toLowerCase().includes(search.toLowerCase()) ||
                 item.email.toLowerCase().includes(search.toLowerCase()) ||
                 item.phone.includes(search);


                 
              })
              .map((item, index)=>(
                <tr key={index}>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>

                </tr>

            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
