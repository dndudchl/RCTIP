/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'

type Props = {
  className: string
}

const Twit3: React.FC<Props> = ({className}) => {
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
              campuscodi
              </a>
              <span className='text-gray-400 fw-semibold'>Fri Dec 02 08:20:33 2022</span>
            </div>
          </div>
        </div>
        <div className='mb-5'>
          <p className='text-gray-800 fw-normal mb-5'>
          -CryWiper hits Russian courts and mayor offices in data-wiping attacks 
          -Guatemala government hit by ransomware
            -Las… 
          </p>
          <a href='https://t.co/v5OxoO67mI '>https://t.co/v5OxoO67mI </a>
          
        </div>
        <div className='separator mb-4'></div>
      </div>
    </div>
  )
}

export {Twit3}
