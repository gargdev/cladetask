import React from 'react'
import { Link } from 'react-router-dom'

function DashboardPage() {
  return (
    <div>
        <p>DashboardPage</p>
        <Link to="/product">Go to products </Link>
    </div>
  )
}

export default DashboardPage