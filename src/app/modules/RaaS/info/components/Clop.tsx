/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {Card1} from '../../../../../_metronic/partials/content/cards/Card1'


const Clop: FC = () => {
  return (
    <>
      <div className='d-flex flex-wrap flex-stack mb-1'>
        <h1 className='text-danger lh-xxl fw-bolder my-2'>
          Clop
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
        
        
        
      </div>

      <h2 className='fs-3 fw-light ms-1 me-20 mb-7'>
          Clop evolved as a variant of the CryptoMix ransomware family. Presumed to have a group in Russia.
      </h2>

      <div className='mb-10 ms-1'>
        
        <div className='fw-normal fs-4'>onion_address: santat7kpllt6iyvqbr7q4amdv6dzrh6paatvyrzl7ry3zm72zigf4ad.onion </div>
        <div className='fw-normal fs-4'>Wallet: </div>
        
      </div>

      <h2 className='fw-bolder my-0 mb-3'>
      Recent Targets
        </h2>


      <div className='row g-6 g-xl-9'>
        <div className='col-md-6 col-xxl-4'>
          
          <Card1
            name='Eland'
            Region='South Korea'
            Sector='Theme park,mall,hotel'
            date='2020-11-22'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Software AG'
            Region='Germany'
            Sector='Software'
            date='2020-10-13'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          
          <Card1
            name='parkland-ca'
            Region='US'
            Sector='eneryge'
            date='2020-12-07'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          
          <Card1
            name='symrise'
            Region='Germany'
            Sector='pet-food'
            date='2020-12-22'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          
          <Card1
            name='singtel'
            Region='Singapore'
            Sector='data-service'
            date='2021-02-18'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          
          <Card1
            name='danaher'
            Region='US'
            Sector='science'
            date='2021-02-22'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          
          <Card1
            name='jonesday'
            Region='US'
            Sector='law'
            date='2021-02-16'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          
          <Card1
            name='colorado edu'
            Region='US'
            Sector='edu'
            date='2021-03-25'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          
          <Card1
            name='miami-edu'
            Region='US'
            Sector='edu'
            date='2021-03-25'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          
          <Card1
            name='stanford-edu'
            Region='US'
            Sector='edu'
            date='2021-03-25'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          
          <Card1
            name='shell'
            Region='UK'
            Sector='eneryge'
            date='2020-05-29'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          
          <Card1
            name='pncpa'
            Region='US'
            Sector='auditing, audit'
            date=' '
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          
          <Card1
            name='nipro'
            Region='Japan'
            Sector='medical hardware'
            date=' '
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          
          <Card1
            name='aurobindo'
            Region='india'
            Sector='medical'
            date='2021-05-24'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          
          <Card1
            name='utilitytrailer'
            Region='regUSion'
            Sector='transport'
            date='2021-05-10'
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

export {Clop}
