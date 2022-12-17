/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'

type Props = {
  className: string
}

const Twit2: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      <div className='card-body pb-0'>
        <div className='d-flex align-items-center mb-5'>
          <div className='d-flex align-items-center flex-grow-1'>
              <span className='symbol symbol-50px me-3'>
                <span className='symbol-label'>
                  <KTSVG
                    path='/media/icons/duotune/social/soc006.svg'
                    className='svg-icon-1 svg-icon-primary'
                  />
                </span>
              </span>
            <div className='d-flex flex-column'>
              <a href='#' className='text-gray-800 text-hover-primary fs-6 fw-bold'>
              TheHackersNews
              </a>
              <span className='text-gray-400 fw-semibold'>Fri Dec 02 06:05:44 2022</span>
            </div>
          </div>
        </div>
        <div className='mb-5'>
          <p className='text-gray-800 fw-normal mb-5'>
          U.S. cybersecurity agency warns of an increasing number of Cuba #ransomware attacks that has extorted more than $60… 
          </p>
          <a href='https://t.co/Q8hiHZ7fpe '>https://t.co/Q8hiHZ7fpe </a>
          
        </div>
        <div className='separator mb-4'></div>
      </div>
    </div>
  )
}

export {Twit2}
