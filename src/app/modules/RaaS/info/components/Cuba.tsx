/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {Card1} from '../../../../../_metronic/partials/content/cards/Card1'


const Cuba: FC = () => {
  return (
    <>
      <div className='d-flex flex-wrap flex-stack mb-7'>
        <h1 className='text-danger lh-xxl fw-bolder my-2'>
          Cuba
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
          Cuba is a Windows-based ransomware family that has been used against financial institutions, technology, and logistics organizations in North and South America as well as Europe since at least December 2019.
        </h2>
      </div>

      <div className='mb-10 ms-1'>
        
        <div className='fw-normal fs-4'>onion_address: http://cuba4ikm4jakjgmkezytyawtdgr2xymvy6nvzgw5cglswg3si76icnqd.onion </div>
        <div className='fw-normal fs-4'>Wallet: </div>
        
      </div>

      <h2 className='fw-bolder my-0 mb-3'>
      Recent Targets
        </h2>


      <div className='row g-6 g-xl-9'>
        <div className='col-md-6 col-xxl-4'>
          
          <Card1
            name='bfw'
            Region='Germany'
            Sector='job academi'
            date='2022-10-18'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Dialogsas'
            Region='France'
            Sector='law'
            date='2022-10-15'
          />
        </div>
        
        <div className='col-md-6 col-xxl-4'>
          
          <Card1
            name='Ville-chaville'
            Region='France'
            Sector='law'
            date='2022-10-14'
          />
        </div>
        
        <div className='col-md-6 col-xxl-4'>
          
          <Card1
            name='Murphyfamilyventures'
            Region='US'
            Sector='consulting'
            date='2022-09-29'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          
          <Card1
            name='Ginspectionservices'
            Region='Spain'
            Sector='logistics inspection '
            date='2022-09-20'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          
          <Card1
            name='Skupstina'
            Region='Serbia'
            Sector='news'
            date='2022-08-19'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          
          <Card1
            name='Site-technology'
            Region='Saudi Arabia'
            Sector='builer'
            date='2022-07-19'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          
          <Card1
            name='STM'
            Region='taiwan'
            Sector='hardware'
            date='2022-07-04'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          
          <Card1
            name='R1group'
            Region='Italy'
            Sector='software'
            date='2022-06-22'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          
          <Card1
            name='Etron'
            Region='taiwan'
            Sector='hardware'
            date='2022-06-01'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          
          <Card1
            name='Upskwt'
            Region='Saudi Arabia'
            Sector='Payment'
            date='2022-05-13'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          
          <Card1
            name='Metrobrokers'
            Region='US'
            Sector='real estate'
            date='2022-04-14'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          
          <Card1
            name='Prophoenix'
            Region='US'
            Sector='software'
            date='2022-04-17'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          
          <Card1
            name='waltersandwolf'
            Region='US'
            Sector='builder'
            date='2022-04-14'
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

export {Cuba}
