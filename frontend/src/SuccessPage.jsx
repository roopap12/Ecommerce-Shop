import React from 'react';
import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
function SuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-50">
      <h1 className="mb-4 text-2xl font-bold text-blue-700">Successfully registered!</h1>
      <Link to='/' className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
        Go to Home
      </Link>
    </div>
  )
}

export default SuccessPage;