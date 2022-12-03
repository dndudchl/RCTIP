/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {Card1} from '../../../../../_metronic/partials/content/cards/Card1'


const Conti: FC = () => {
  return (
    <>
      <div className='d-flex flex-wrap flex-stack mb-7'>
        <h1 className='text-danger lh-xxl fw-bolder my-2'>
          Conti
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
          Conti is a Ransomware-as-a-Service (RaaS) that was first observed in December 2019. Conti has been deployed via TrickBot and used against major corporations and government agencies, particularly those in North America.
        </h2>
      </div>

      <div className='mb-10 ms-1'>
        
        <div className='fw-normal fs-4'>onion_address: http://continewsnv5otx5kaoje7krkto2qbu3gtqef22mnr7eaxw3y6ncz3ad.onion </div>
        <div className='fw-normal fs-4'>Wallet: bc1qvpt6tnce3knl5vr5v3k985uwr4mm85hc62ydqs </div>
        
      </div>

      <h2 className='fw-bolder my-0 mb-3'>
      Recent Targets
        </h2>


      <div className='row g-6 g-xl-9'>
        <div className='col-md-6 col-xxl-4'>
          
          <Card1
            name='Nokia Branch SAC Wireless'
            Region='US'
            Sector='mobile'
            date='2021-06-16'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='FatFace'
            Region='UK'
            Sector='clothing industry'
            date='2021-01-10'
          />
        </div>
        
        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Ireland’s Health Services(HSE)'
            Region='Ireland'
            Sector='Health'
            date='2021-05-14'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Ireland’s Department of Health(DoH)'
            Region='Ireland s'
            Sector='Health'
            date='2021-05-14'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='JVCKenwood'
            Region='Japan'
            Sector='hardware'
            date='2021-09-22'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Nordex'
            Region='Germany'
            Sector='eneryge'
            date='2021-03-31'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Shutterfly'
            Region='US'
            Sector='media'
            date='2021-12-03'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Hanwha Life Vietnam'
            Region='Vietnam, South Korea'
            Sector='insurance'
            date='2021-08-26'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Nordic Choice'
            Region='Scandinavia'
            Sector='Hotel'
            date='2021-12-09'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Graff'
            Region='UK'
            Sector='jewelery'
            date='2021-11-01'
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

export {Conti}
