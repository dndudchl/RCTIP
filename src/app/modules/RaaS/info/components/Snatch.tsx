/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {Card1} from '../../../../../_metronic/partials/content/cards/Card1'


const Snatch: FC = () => {
  return (
    <>
      <div className='d-flex flex-wrap flex-stack mb-7'>
        <h1 className='text-danger lh-xxl fw-bolder my-2'>
          Snatch
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
          Snatch ransomware has been identified using brute force tactics over RDP to gain access to Domain Administrator accounts. Once compromised a reverse shell is setup on a Domain Controller to maintain persistence and allow the encryption of domain joined machines. Additionally in an attempt to evade detection the ransomware reboots the machine into safe mode before encrypting the device. 
        </h2>
      </div>

      <div className='mb-10 ms-1'>
        
        <div className='fw-normal fs-4'>onion_address: http://hl66646wtlp2naoqnhattngigjp5palgqmbwixepcjyq5i534acgqyad.onion </div>
        <div className='fw-normal fs-4'>Wallet: </div>
        
      </div>

      <h2 className='fw-bolder my-0 mb-3'>
      Recent Targets
        </h2>


      <div className='row g-6 g-xl-9'>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='YASH Technologies'
            Region='US'
            Sector='IT'
            date='2022-11-13'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Saurer'
            Region='swiss'
            Sector='manufacturing'
            date='2022-11-13'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Oil India Limited'
            Region='india'
            Sector='oil'
            date='2022-11-11'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Unicity'
            Region='US'
            Sector='medical'
            date='2022-11-11'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='HAPOLO'
            Region='brazil'
            Sector='manufacturing'
            date='2022-11-11'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Grandview, MO'
            Region='US'
            Sector='Agency'
            date='2022-11-03'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='CareFirst CHPDC'
            Region='US'
            Sector='medical'
            date='2022-11-01'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Leuze'
            Region='japan'
            Sector='hardware'
            date='2022-11-01'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='TaxNetUSA'
            Region='US'
            Sector='software'
            date='2022-11-01'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='HENSOLDT France'
            Region='Franch'
            Sector='Corporate campus'
            date='2022-10-30'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Weidmuller'
            Region='germany'
            Sector='IT'
            date='2022-10-30'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Yip in Tsoi'
            Region='Thailand'
            Sector='Software'
            date='2022-10-30'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Yip in Tsoi'
            Region='Thailand'
            Sector='Software'
            date='2022-10-05'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Empower Insurance'
            Region='US'
            Sector='Auto insurance agency'
            date='2022-10-05'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Daylesford Organic'
            Region='UK'
            Sector='farm market'
            date='2022-09-26'
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

export {Snatch}
