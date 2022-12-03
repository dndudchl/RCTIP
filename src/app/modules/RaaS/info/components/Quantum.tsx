/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {Card1} from '../../../../../_metronic/partials/content/cards/Card1'


const Quantum: FC = () => {
  return (
    <>
      <div className='d-flex flex-wrap flex-stack mb-7'>
        <h1 className='text-danger lh-xxl fw-bolder my-2'>
          Quantum
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
          Quantum ransomware is a newer, lesser-known ransomware that operates with the RaaS model and has been very successful with compromising healthcare organizations.
        </h2>
      </div>

      <div className='mb-10 ms-1'>
        
        <div className='fw-normal fs-4'>onion_address: http://quantum445bh3gzuyilxdzs5xdepf3b7lkcupswvkryf3n7hgzpxebid.onion </div>
        <div className='fw-normal fs-4'>Wallet: </div>
        
      </div>

      <h2 className='fw-bolder my-0 mb-3'>
      Recent Targets
        </h2>


      <div className='row g-6 g-xl-9'>
        <div className='col-md-6 col-xxl-4'>
          
          <Card1
            name='MCV Holding Company LLC'
            Region='UK'
            Sector='Holdings'
            date='2022-11-15'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Lightbank'
            Region='UK'
            Sector='Bank'
            date='2022-11-15'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='idland Cogeneration Venture, Michigan'
            Region='US'
            Sector='energy'
            date='2022-11-15'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Midland Cogeneration Venture'
            Region='US'
            Sector='energy'
            date='2022-11-13'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Instituto Agrario Dominicano'
            Region='US'
            Sector='Agrario Dominicano'
            date='2022-09-01'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Avante Health Solutions'
            Region='US'
            Sector='Health'
            date='2022-09-01'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Moscone Center'
            Region='US'
            Sector='Convention center'
            date='2022-09-01'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Shaw & Slavsky'
            Region='US'
            Sector='Marketing'
            date='2022-08-19'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Moskowitz, Mandell & Salim, P.A.'
            Region='US'
            Sector='law'
            date='2022-08-23'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='naFreyr Solutionsme'
            Region='india'
            Sector='Solutions'
            date='2022-08-17'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='BEESENSE'
            Region='Israel'
            Sector='Manufacturer'
            date='2022-08-04'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Liftow LTD'
            Region='US'
            Sector='rent'
            date='2022-08-04'
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

export {Quantum}
