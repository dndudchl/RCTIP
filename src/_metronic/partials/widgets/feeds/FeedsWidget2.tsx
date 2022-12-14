/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'

type Props = {
  className: string
}

const FeedsWidget2: React.FC<Props> = ({className}) => {
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
                Arkbird_SOLG
              </a>
              <span className='text-gray-400 fw-semibold'>Fri Dec 02 02:43:25</span>
            </div>
          </div>
        </div>
        <div className='mb-5'>
          <p className='text-gray-800 fw-normal mb-5'>
          I share yara rules and the samples of the new variant of #blackbasta ransomware.
          Samples:
          </p>
          <a href='https://t.co/rNYWROjxb0\nY… '>https://t.co/rNYWROjxb0\nY… </a>
          <a href='https://t.co/fMGP9VsU6s'>https://t.co/fMGP9VsU6s</a>
        </div>
        <div className='separator mb-4'></div>
      </div>
    </div>
  )
}

export {FeedsWidget2}
