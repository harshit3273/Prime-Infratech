import { useState, useEffect } from 'react'
import { projectsAPI } from '../api/services'

export function useProjects(params = {}) {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setLoading(true)
    projectsAPI.getAll(params)
      .then(({ data }) => {
        setProjects(data.projects || data)
        setTotal(data.total || 0)
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(params)])

  return { projects, loading, error, total }
}
