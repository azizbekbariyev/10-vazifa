import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Comments = () => {
  const [comments, setComments] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=3`)
      .then(res => res.json())
      .then(data => setComments(data))
  }, [page])

  const nextPage = () => {
    setPage(prev => prev + 1)
  }

  const prevPage = () => {
    if (page > 1) setPage(prev => prev - 1)
  }

  return (
    <div className='container mt-4'>
      <h2 className='mb-3'>Comments</h2>
      <table className='table table-bordered table-hover'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Body</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            comments.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.body}</td>
                <td>
                  <Link to={`/comments/${item.id}`} className="btn btn-primary btn-sm">Visit</Link>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div className='d-flex gap-2'>
        <button onClick={prevPage} disabled={page === 1} className="btn btn-outline-secondary">Prev</button>
        <span className="align-self-center">Page: {page}</span>
        <button onClick={nextPage} className="btn btn-outline-secondary">Next</button>
      </div>
    </div>
  )
}

export default Comments;
