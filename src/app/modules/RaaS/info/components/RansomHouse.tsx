/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {Card1} from '../../../../../_metronic/partials/content/cards/Card1'


const RansomHouse: FC = () => {
  return (
    <>
      <div className='d-flex flex-wrap flex-stack mb-7'>
        <h1 className='text-danger lh-xxl fw-bolder my-2'>
          RansomHouse
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
        RansomHouse is a new extortion group that gets into victims' networks by exploiting vulnerabilities to steal data and coerces victims to pay up, lest their data is sold to the highest bidder. And if no criminal is interested in buying the data, the group leaks it on their leak site.
        </h2>
      </div>

      <div className='mb-10 ms-1'>
        
        <div className='fw-normal fs-4'>onion_address: http://zohlm7ahjwegcedoz7lrdrti7bvpofymcayotp744qhx6gjmxbuo2yid.onion </div>
        <div className='fw-normal fs-4'>Wallet: </div>
        
      </div>

      <h2 className='fw-bolder my-0 mb-3'>
      Recent Targets
        </h2>


      <div className='row g-6 g-xl-9'>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Lantek Systems Inс'
            Region='US'
            Sector='software'
            date='2022-10-06'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Severn Glocon Group'
            Region='UK'
            Sector='energy hardware'
            date='2022-10-05'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='ADATA Technology'
            Region='Taiwan'
            Sector='hardware'
            date=' '
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='ROFA INDUSTRIAL AUTOMATION'
            Region='Austria'
            Sector='automation technology'
            date='2022-09-25'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Carmen Copper Corporation'
            Region='Philippines'
            Sector='mining'
            date='2022-09-03'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Ipca Laboratories'
            Region='india'
            Sector='medical'
            date='2022-09-03'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Fairfax - Crum & Forsterme'
            Region='US'
            Sector='Insurance and Reinsurance'
            date='022-03-20'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Summit Care'
            Region='Australia'
            Sector='Health'
            date='2022-06-10'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Advanced Micro Devices, Inc'
            Region='US'
            Sector='Hardware'
            date='2022-01-05'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='SHOPRITE HOLDINGS LTD'
            Region='Africa wide area'
            Sector='supermarket'
            date='2022-06-06'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='AHS Aviation Handling Services GmbH'
            Region='Germany'
            Sector='airplane'
            date='2022-04-16'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Dellner Couplers AB'
            Region='Sweden'
            Sector='train'
            date='2022-04-08'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Jefferson Credit Union'
            Region='US'
            Sector='Credit Union'
            date='2021-12-10'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Saskatchewan Liquor and Gaming Authority'
            Region='Canada'
            Sector='public corporation'
            date='2021-12-20'
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

export {RansomHouse}
