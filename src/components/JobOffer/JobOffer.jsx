import React from 'react'
import './JobOffer.css'

const JobOffer = () => {
  return (
    <div className='joboffer'>
        <div className="joboffertitle">
            <h2>LATEST JOB NOTIFICATIONS</h2>
        </div>
        <br />
        
      <div className="job-items">
        <div className="job-title">
            <p className='title'>Job</p>
            <p className='title'>Company</p>
            <p className='title'>Link</p>
        </div>
        </div>
        <br />
        <hr />
      <div className="job-title job-items-item">
        <p>Engineering Jobs</p>
        <p>Government of India</p>
        <p className='btna'><a href="https://allgovernmentjobs.in/engineering-jobs?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic" target='_blank'>Apply Now</a></p>
      </div>
        <div className="job-title job-items-item">
            <p>Urgent Openings For Medical Coding Jobs Bsc Nursing, GNM, DGNM,Staff Nurse Grads</p>
            <p>Achievers Spot</p>
            <p className='btna'><a href="https://in.linkedin.com/jobs/view/urgent-openings-for-medical-coding-jobs-bsc-nursing-gnm-dgnm-staff-nurse-grads-at-achievers-spot-3674218114?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic" target='_blank'>Apply Now</a></p>
        </div>
        <div className="job-title job-items-item">
            <p>Customer Relationship Officer - ICICI Bank Career - Gannavaram</p>
            <p>ICICI Bank</p>
            <p className='btna'><a href="https://in.indisjob.com/jobs5/job-single.php?id=898810&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic" target='_blank'>Apply Now</a></p>
        </div>
        <div className="job-title job-items-item">
            <p>Java developer</p>
            <p>A Client of Freshersworld</p>
            <p className='btna'><a href="https://www.freshersworld.com/jobs/java-developer-jobs-opening-in-a-client-of-freshersworld-at-vijayawada-1884622?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic" target='_blank'>Apply Now</a></p>
        </div>
    </div>
  )
}

export default JobOffer
