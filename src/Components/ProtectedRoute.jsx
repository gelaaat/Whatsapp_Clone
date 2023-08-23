import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

function ProtectedRoute ({ children }) {
  const { userInfo } = useSelector(state => state.auth)

  if (!userInfo) {
    return <Navigate to='/LogIn' replace />
  }

  return children
}

ProtectedRoute.propTypes = {
  children: PropTypes.any
}

export default ProtectedRoute
