import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Users = () => {
  const [users, setUsers] = useState()
    const [page, setPage] = useState(1)
  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=3`).then((res)=>{
        setUsers(res.data)
    })
  }, [page])

  const nextPage = () => {
    setPage(prevPage => prevPage + 1);
  }
  const prevPage = () => {
    setPage(prevPage => prevPage - 1);
  }
  return (
    <div>
        <div className="contenier">
            <div className="row">
                <div className="col-md-10">
                    <table className='table-bordered table-hover'>
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Phone</th>
                            <th>Website</th>
                            <th>Company</th>
                            <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users?.map((item)=>{
                                    return <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>{item.username}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.email}</td>
                                        <td>{item.website}</td>
                                        <td>{item.company.name}</td>
                                        <td>{item.address.city}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <div>
                            <button onClick={prevPage}>prev</button>
                            <span>{page}</span>
                            <button onClick={nextPage}>next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Users