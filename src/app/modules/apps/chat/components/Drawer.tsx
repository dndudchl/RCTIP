/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {Card1} from '../../../../../_metronic/partials/content/cards/Card1'

const Drawer: FC = () => {
  return (
    <>
      <div className='d-flex flex-wrap flex-stack mb-7'>
        <h1 className='text-danger lh-xxl fw-bolder my-2'>
          Lockbit 3.0
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
          Lockbit, a ransomware as a service (RaaS) that first appeared in September 2019, has been active since its update to Lockbit 2.0 at the end of July 21. And in early July of 22, LockBit 3.0 was discovered 
        </h2>
      </div>

      <div className='mb-10 ms-1'>
        
        <div className='fw-normal fs-4'>onion_address: lockbitapt6vx57t3eeqjofwgcglmutr3a35nygvokja5uuccip4ykyd.onion </div>
        <div className='fw-normal fs-4'>Wallet : bc1qwx9y37xd8sznjj0yw85q9fd9qfyaur9xasc2h4 (bitcoin) </div>
        
      </div>

      <h2 className='fw-bolder my-0 mb-3'>
      Recent Targets
        </h2>


      <div className='row g-6 g-xl-9'>
        <div className='col-md-6 col-xxl-4'>
          
          <Card1
            name='Parrott Sims & Mclnnis PLLC'
            Region='US'
            Sector='law'
            date='2022-09-08'
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='kortrijkse Rijschool'
            Region='Belgium'
            Sector='driving school'
            date='2022-11-08'
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='tamhash'
            Region='Israel'
            Sector='Energy'
            date='2022-10-14'
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='mk(mk.co.th)'
            Region='Thailand'
            Sector='real estate'
            date='2022-10-14'
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='tokaisolidtire'
            Region='Thailand'
            Sector='tire'
            date='2022-10-15'
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='centurion'
            Region='Poland'
            Sector='Interior'
            date='2022-10-15'
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='thenet'
            Region='Lebanon'
            Sector='transport business'
            date='2022-11-06'
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='oomiya'
            Region='Japan'
            Sector='the industries'
            date='2022-10-15'
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='sociedadbilbaina'
            Region='Basque Country'
            Sector='museum'
            date='2022-10-30'
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='hdhopwood'
            Region='Jamaica'
            Sector='Distribution'
            date='2022-09-25'
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='conger'
            Region='US'
            Sector='CONSTRUCTION'
            date='2022-09-22'
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='rockworth'
            Region='india'
            Sector='Interior'
            date='2022-11-06'
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='meiji(MEIJI.COM.SG)'
            Region='Singapore'
            Sector='food'
            date='2022-08-31'
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='bew'
            Region='US'
            Sector='Interior'
            date='2022-09-22'
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Kisan'
            Region='Turkiye'
            Sector='manufacturing industry'
            date='2022-09-09'
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

export {Drawer}
