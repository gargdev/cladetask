import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='flex items-center space-x-8 h-10 shadow px-40 py-6'>
        <Link to="/preview"><div className="text-gray-600 font-semibold hover:underline underline-offset-[18px] decoration-2 hover:text-orange-500 cursor-pointer">Job Preview</div></Link>
        <Link to="/applicant"><div className="text-gray-600 font-semibold hover:underline underline-offset-[18px] decoration-2 hover:text-orange-500 cursor-pointer">Applicants</div></Link>
        <Link to="/match"><div className="text-gray-600 font-semibold hover:underline underline-offset-[18px] decoration-2 hover:text-orange-500 cursor-pointer">Match</div></Link>
        <Link to="/message"><div className="text-gray-600 font-semibold hover:underline underline-offset-[18px] decoration-2 hover:text-orange-500 cursor-pointer">Messages</div></Link>
    </div>
  )
}

export default Navigation