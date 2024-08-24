import React from 'react'
import './SearchBar.css'

const SearchBar = () => {
  return (
    <div className='searchbar'>
        <select name="title" className='searchOptions'>
            <option value=""selected disabled hidden>Job Role</option>
            <option value="Software Developer">Software Developer</option>
            <option value="Data Analyst">Data Analyst</option>
            <option value="Web Developer">Web Developer</option>
            <option value="Business Analyst">Business Analyst</option>
        </select>
        <select  className='searchOptions'>
            <option value=""selected disabled hidden>Job Type</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Contract">Contract</option>
        </select>
        <select className='searchOptions'>
            <option value="" selected disabled hidden>Location</option>
            <option value="Remote">Remote</option>
            <option value="In-Office">In-Office</option>
            <option value="Hybrid">Hybrid</option>
        </select>
        <select className='searchOptions'>
            <option value="" selected disabled hidden>Experience</option>
            <option value="Fresher">Fresher</option>
            <option value="Junior Level">Junior Level</option>
            <option value="Mid Level">Mid Level</option>
            <option value="Senior Level">Senior Level</option>
        </select>
        <button className='searchBtn'>Search</button>
    </div>
  )
}

export default SearchBar
