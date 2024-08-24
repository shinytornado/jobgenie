import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import JobCard from '../JobCard/JobCard'
import './Jobs.css'

const Jobs = () => {
  return (
    <div className='jobs'>
      <SearchBar />
      <JobCard />
    </div>
  )
}

export default Jobs
