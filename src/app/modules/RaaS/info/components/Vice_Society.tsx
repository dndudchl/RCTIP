/* eslint-disable jsx-a11y/anchor-is-valid */
// import React, {FC} from 'react'
import {FC} from 'react'

import {Card1} from '../../../../../_metronic/partials/content/cards/Card1'

const Vice_Society: FC = () => {
  return (
    <>
      <div className='d-flex flex-wrap flex-stack mb-7'>
        <h1 className='text-danger lh-xxl fw-bolder my-2'>
        Vice Society
        </h1>

        {/* <div className='d-flex my-2'>
          <select
            name='status'
            data-control='select2'
            data-hide-search='true'
            className='form-select form-select-white form-select-sm w-125px'
            defaultValue='Online'
          >
            <option value='Online'>22.1 Patch</option>
            <option value='Pending'>22.0 Patch</option>
            <option value='Declined'>22.0 Patch</option>
            <option value='Accepted'>22.0 Patch</option>
          </select>
        </div> */}
        
        <h2 className='fs-3 fw-light ms-1 me-20 '>
        The Vice Society ransomware gang is a group that attacks schools and hospitals. 
        </h2>
      </div>

      <div className='mb-10 ms-1'>
        
        <div className='fw-normal fs-4'>onion_address: vsociethok6sbprvevl4dlwbqrzyhxcxaqpvcqt5belwvsuxaxsutyad.onion </div>
        <div className='fw-normal fs-4'>Wallet : </div>
        
      </div>

      <h2 className='fw-bolder my-0 mb-3'>
      Recent Targets
        </h2>


      <div className='row g-6 g-xl-9'>
        <div className='col-md-6 col-xxl-4'>
          
          <Card1
            name='Institute of Science and Technology Austria'
            Region='Austria'
            Sector='edu'
            date=''
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Baysgarth School'
            Region='UK'
            Sector='edu'
            date=''
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Kreisverwaltung Rhein-Pfalz-Kreis'
            Region='Germany'
            Sector='government agency'
            date=''
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Hartnell College'
            Region='US'
            Sector='Community college'
            date=''
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='CR&R Environmental Services'
            Region='US'
            Sector='recycle'
            date=''
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Jammal Trust Bank'
            Region='bank'
            Sector='Iran'
            date=''
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Unidad Medica Angloamericana'
            Region='Spain'
            Sector='medical'
            date=''
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Rooks Heath School'
            Region='UK'
            Sector='edu'
            date=''
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='YMCA of Metropolitan Washington'
            Region='US'
            Sector='Non-profit organization'
            date=''
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Kujalleq Municipality'
            Region='Greenland'
            Sector='government agency'
            date=''
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='The Bishop of Hereford s Bluecoat School'
            Region='US'
            Sector='edu'
            date=''
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Mars Area School District'
            Region='US'
            Sector='edu'
            date=''
          />
        </div>
        
      </div>

      <div className='d-flex flex-stack flex-wrap pt-10'>
        <div className='fs-6 fw-bold text-gray-700'>Showing 1 to 10 of 50 entries</div>

        <ul className='pagination'>
          <li className='page-item previous'>
            <a href='#' className='page-link'>
              <i className='previous'></i>
            </a>
          </li>

          <li className='page-item active'>
            <a href='#' className='page-link'>
              1
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              2
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              3
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              4
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              5
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              6
            </a>
          </li>

          <li className='page-item next'>
            <a href='#' className='page-link'>
              <i className='next'></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export {Vice_Society}
