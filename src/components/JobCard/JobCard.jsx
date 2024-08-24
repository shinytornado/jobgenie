import React from 'react'
import './JobCard.css'

const JobCard = () => {
  return (
    <div className='job-card-container'>
      <div className='job-card'>
        <div className='job-card-content'>
          <h1 className='job-card-title'>Graphic Designer</h1>
          <p className='job-card-details'>
          Mango Group, Hyderabad
          </p>
          <div className='skill-tags'>
          HTML, CSS, JAVASCRIPT, JQUERY, BOOTSTRAP, PHOTOSHOP
          </div>
        </div>
        <div className='apply-info'>
          <a href='https://in.indeed.com/cmp/Mango-Group?from=mobviewjob&tk=1henv8idhlga6801&fromjk=9a2d91f82078e8f8&attributionid=mobvjcmp' target="_blank" rel="noopener noreferrer">
            <button className='apply-button'>Apply</button>
          </a>
        </div>
      </div>
      <div className='job-card'>
        <div className='job-card-content'>
          <h1 className='job-card-title'>Technical Solutions Engineer, Networking</h1>
          <p className='job-card-details'>
          Google, Bangalore
          </p>
          <div className='skill-tags'>
          HTML, CSS, JAVASCRIPT, JQUERY
          </div>
        </div>
        <div className='apply-info'>
          <a href='https://www.google.com/about/careers/applications/jobs/results/119224457500730054-technical-solutions-engineer/?src=Online/LinkedIn/linkedin_us&utm_source=linkedin&utm_medium=jobposting&utm_campaign=contract' target="_blank" rel="noopener noreferrer">
            <button className='apply-button'>Apply</button>
          </a>
        </div>
      </div>
      <div className='job-card'>
        <div className='job-card-content'>
          <h1 className='job-card-title'>Javascript Developer</h1>
          <p className='job-card-details'>
          Wipro Software Sol, Pune
          </p>
          <div className='skill-tags'>
          JAVASCRIPT,NODE JS, HTML, CSS, JQUERY, BOOTSTRAP
          </div>
        </div>
        <div className='apply-info'>
          <a href='https://in.indeed.com/cmp/Mango-Group?from=mobviewjob&tk=1henv8idhlga6801&fromjk=9a2d91f82078e8f8&attributionid=mobvjcmp' target="_blank" rel="noopener noreferrer">
            <button className='apply-button'>Apply</button>
          </a>
        </div>
      </div>
      <div className='job-card'>
        <div className='job-card-content'>
          <h1 className='job-card-title'>Bootstrap Developer</h1>
          <p className='job-card-details'>
          Apple Incorporation, Pune
          </p>
          <div className='skill-tags'>
          BOOTSTRAP, JAVASCRIPT, JQUERY, PHOTOSHOP
          </div>
        </div>
        <div className='apply-info'>
          <a href='https://in.indeed.com/cmp/Mango-Group?from=mobviewjob&tk=1henv8idhlga6801&fromjk=9a2d91f82078e8f8&attributionid=mobvjcmp' target="_blank" rel="noopener noreferrer">
            <button className='apply-button'>Apply</button>
          </a>
        </div>
      </div>
      <div className='job-card'>
        <div className='job-card-content'>
          <h1 className='job-card-title'>Software Developer</h1>
          <p className='job-card-details'>
          Wipro, Nashville, Tennessee, US
          </p>
          <div className='skill-tags'>
          SQL,JAVASCRIPT, ReactJS,TypeScript
          </div>
        </div>
        <div className='apply-info'>
          <a href='https://in.indeed.com/cmp/Mango-Group?from=mobviewjob&tk=1henv8idhlga6801&fromjk=9a2d91f82078e8f8&attributionid=mobvjcmp' target="_blank" rel="noopener noreferrer">
            <button className='apply-button'>Apply</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default JobCard
