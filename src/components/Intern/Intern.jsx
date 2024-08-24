import React from 'react'
import InternSearch from '../InternSearch/InternSearch'
import JobCard from '../JobCard/JobCard'

const Intern = () => {
  return (
    <div className='intern'>
      <InternSearch />
        <JobCard />
    </div>
  )
}

export default Intern
