import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  const changeLeftHandler = () => {
    if (index !== 0) {
      setIndex(index - 1)
    } else {
      setIndex(index)
    }
  }
  const changeRightHandler = () => {
    if (index !== people.length - 1) {
      setIndex(index + 1)
    } else {
      setIndex(index)
    }
  }
  const changeRandomHandler = () => {
    setIndex(Math.floor(Math.random() * people.length))
    console.log(index)
  }

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn'>
          <FaChevronLeft onClick={changeLeftHandler} />
        </button>
        <button className='next-btn'>
          <FaChevronRight onClick={changeRightHandler} />
        </button>
      </div>
      <button className='random-btn' onClick={changeRandomHandler}>
        surprise me
      </button>
    </article>
  )
}

export default Review
