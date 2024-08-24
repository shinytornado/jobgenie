import React from 'react'
import './Programs.css'

const Programs = () => {
  return (
    <div className='programs'>
      <div className="program-head">
        <h3 className='program-text'>WE OFFER</h3>
      </div>
      <div className="offers">
        <div className="offer">
            <img src="https://www.svgrepo.com/show/421507/bag-office-office-bag.svg" alt="" className="offerImg" />
            <p className="offerText">We provide you with the latest Jobs !</p>
        </div>
        <div className="offer">
            <img src="https://www.svgrepo.com/show/447917/books-supplies.svg" alt="" className="offerImg" />
            <p className="offerText">All the latest Internships of the big MNC's will be provided here</p>
        </div>
        <div className="offer">
            <img src="https://www.svgrepo.com/show/383776/board-performance-profit.svg" alt="" className="offerImg" />
            <p className="offerText">Courses provided by Universities,Colleges other which help you to get placed</p>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Programs
