/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'

type Props = {
  className: string
  color: string
  image: string
  title: string
  date: string
  progress: string
}

const MixedWidget4: React.FC<Props> = ({className, color, image, title, date, progress}) => {
  return (
    <div className={`card ${className}`}>
      <div className='card-body'>
        <div className='d-flex flex-stack'>
          <div className='d-flex align-items-center'>
            <div className='d-flex flex-column flex-grow-1 my-lg-0 my-2 pr-3'>
              <div className='text-dark fw-bold text-hover-primary fs-3'>
              Attack Count Ranking for 6 months
              </div>
            </div>
          </div>
        </div>
        <div className='d-flex flex-column w-100 mt-12'>
          <span className='text-dark me-2 fw-bold pb-3'>Vicesociety : 37</span>
          <div className='progress h-5px w-100'>
            <div
              className={`progress-bar bg-${color}`}
              role='progressbar'
              style={{width: 375}}
            ></div>
          </div>
        </div>
        <div className='d-flex flex-column w-100 mt-12'>
          <span className='text-dark me-2 fw-bold pb-3'>Lockbit : 30</span>
          <div className='progress h-5px w-100'>
            <div
              className={`progress-bar bg-${color}`}
              role='progressbar'
              style={{width: 350}}
            ></div>
          </div>
        </div>
        <div className='d-flex flex-column w-100 mt-12'>
          <span className='text-dark me-2 fw-bold pb-3'>ALPHV : 23</span>
          <div className='progress h-5px w-100'>
            <div
              className={`progress-bar bg-${color}`}
              role='progressbar'
              style={{width: 300}}
            ></div>
          </div>
        </div>
        <div className='d-flex flex-column w-100 mt-12'>
          <span className='text-dark me-2 fw-bold pb-3'>HIVE : 20</span>
          <div className='progress h-5px w-100'>
            <div
              className={`progress-bar bg-${color}`}
              role='progressbar'
              style={{width: 250}}
            ></div>
          </div>
        </div>
        <div className='d-flex flex-column w-100 mt-12'>
          <span className='text-dark me-2 fw-bold pb-3'>Blackbyte : 17</span>
          <div className='progress h-5px w-100'>
            <div
              className={`progress-bar bg-${color}`}
              role='progressbar'
              style={{width: 200}}
            ></div>
          </div>
        </div>
        {/* <div className='d-flex flex-column w-100 mt-12'>
          <span className='text-dark me-2 fw-bold pb-3'>RagnarLocker : 15</span>
          <div className='progress h-5px w-100'>
            <div
              className={`progress-bar bg-${color}`}
              role='progressbar'
              style={{width: 150}}
            ></div>
          </div>
        </div>
        <div className='d-flex flex-column w-100 mt-12'>
          <span className='text-dark me-2 fw-bold pb-3'>AvosLocker : 13</span>
          <div className='progress h-5px w-100'>
            <div
              className={`progress-bar bg-${color}`}
              role='progressbar'
              style={{width: 125}}
            ></div>
          </div>
        </div>
        <div className='d-flex flex-column w-100 mt-12'>
          <span className='text-dark me-2 fw-bold pb-3'>Cuba : 10</span>
          <div className='progress h-5px w-100'>
            <div
              className={`progress-bar bg-${color}`}
              role='progressbar'
              style={{width: 100}}
            ></div>
          </div>
        </div> */}
      </div>

    </div>
  )
}

export {MixedWidget4}
