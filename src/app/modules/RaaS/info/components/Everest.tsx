/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {Card1} from '../../../../../_metronic/partials/content/cards/Card1'

const Everest: FC = () => {
  return (
    <>
      <div className='d-flex flex-wrap flex-stack mb-7'>
        <h1 className='text-danger lh-xxl fw-bolder my-2'>
        Everest
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
        The Everest Ransomware Group is a RaaS group that attacks the world
        </h2>
      </div>

      <div className='mb-10 ms-1'>
        
        <div className='fw-normal fs-4'>onion_address: ransomocmou6mnbquqz44ewosbkjk3o5qjsl3orawojexfook2j7esad.onion </div>
        <div className='fw-normal fs-4'>Wallet : </div>
        
      </div>

      <h2 className='fw-bolder my-0 mb-3'>
      Recent Targets
        </h2>


      <div className='row g-6 g-xl-9'>
        <div className='col-md-6 col-xxl-4'>
          
          <Card1
            name='Aerospace company Canada'
            Region='Canada'
            Sector='Aeronautics'
            date=''
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Rundle Eye Care'
            Region='hospital'
            Sector='US'
            date=''
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='MultiCareInc'
            Region='US'
            Sector='Transportation'
            date=''
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='RS.GOV.BR'
            Region='government agency'
            Sector='brazil'
            date=''
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='SPERONI S.P.A'
            Region='surveying instruments'
            Sector='Italy'
            date=''
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Amalfitana Gas Srl'
            Region='energy'
            Sector='Italy'
            date=''
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='FederalBank'
            Region='India'
            Sector='bank'
            date=''
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Metek PLC'
            Region='UK'
            Sector='Hardware'
            date=''
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='VTVCAB'
            Region='Broadcast stations'
            Sector='vietnam'
            date=''
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Collegiate sports medicine'
            Region='Health'
            Sector='US'
            date=''
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Huhtamaki'
            Region='Poland'
            Sector='Packaging'
            date=''
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Federal land inc.'
            Region='Philippines'
            Sector='investment company'
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

export {Everest}
