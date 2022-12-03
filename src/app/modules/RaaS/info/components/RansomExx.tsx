/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {Card1} from '../../../../../_metronic/partials/content/cards/Card1'


const RansomExx: FC = () => {
  return (
    <>
      <div className='d-flex flex-wrap flex-stack mb-7'>
        <h1 className='text-danger lh-xxl fw-bolder my-2'>
          RansomExx
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
          RansomExx is a ransomware variant that debuted as Defray777 in 2018. It made a name for itself in 2020, after it was used in widely reported attacks on government agencies, manufacturers, and other such high-profile only months apart. By then, it was dubbed RansomEXX after the string “ransom.exx” was found in its binary.
        </h2>
      </div>

      <div className='mb-10 ms-1'>
        
        <div className='fw-normal fs-4'>onion_address: http://rnsm777cdsjrsdlbs4v5qoeppu3px6sb2igmh53jzrx7ipcrbjz5b2ad.onion </div>
        <div className='fw-normal fs-4'>Wallet: </div>
        
      </div>

      <h2 className='fw-bolder my-0 mb-3'>
      Recent Targets
        </h2>


      <div className='row g-6 g-xl-9'>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Unimed Belem'
            Region='Brzail'
            Sector='medical'
            date='2022-10-18'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Consorci Sanitari Integral & Geseme'
            Region='Spain'
            Sector='medical'
            date='2022-10-11'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Ferrari'
            Region='Italian'
            Sector='car'
            date='2022-10-02'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Bombardier Recreational Products (BRP)'
            Region='Canada'
            Sector='manufacturing industry'
            date='2022-10-01'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Fundo Nacional de Desenvolvimento da Educação '
            Region='Brazil'
            Sector='Government agency'
            date='2022-09-03'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Bombardier Recreational Products (BRP)'
            Region='Canada'
            Sector='mini car,boat Manufacturing'
            date='2022-08-23'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Sonae'
            Region='Portugal'
            Sector='Food'
            date='2022-04-05'
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

export {RansomExx}
