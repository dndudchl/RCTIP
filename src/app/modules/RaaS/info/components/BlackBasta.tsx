/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {Card1} from '../../../../../_metronic/partials/content/cards/Card1'


const Blackbasta: FC = () => {
  return (
    <>
      <div className='d-flex flex-wrap flex-stack mb-7'>
        <h1 className='text-danger lh-xxl fw-bolder my-2'>
          Blackbasta
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
          That was initially spotted in April 2022. It has since proven itself to be a formidable threat, as evidenced by its use of double-extortion tactics and expansion of its attack arsenal to include tools like the Qakbot trojan and PrintNightmare exploit.
        </h2>
      </div>

      <div className='mb-10 ms-1'>
        
        <div className='fw-normal fs-4'>onion_address: http://stniiomyjliimcgkvdszvgen3eaaoz55hreqqx6o77yvmpwt7gklffqd.onion </div>
        <div className='fw-normal fs-4'>Wallet: </div>
        
      </div>

      <h2 className='fw-bolder my-0 mb-3'>
      Recent Targets
        </h2>


      <div className='row g-6 g-xl-9'>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='ITM'
            Region='Canada'
            Sector='hardware'
            date=' '
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Motivating Graphics '
            Region='US'
            Sector='Graphics'
            date=' '
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Kessing Rechtsanwälte und Fachanwälte in PartGmbB'
            Region='Germany'
            Sector='law'
            date=' '
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Popp Hutcheson PLLC'
            Region='US'
            Sector='law'
            date=' '
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='MITCON Consultancy & Engineering Services Limited'
            Region='india'
            Sector='marketing'
            date=' '
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='IMA Financial Group, Inc.me'
            Region='US'
            Sector='insurance'
            date=' '
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Bitron'
            Region='Italy'
            Sector='hardware'
            date=' '
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='METRO'
            Region='UK'
            Sector='News'
            date=' '
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Wilken Software Group'
            Region='Germany'
            Sector='software'
            date=' '
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='CADEPLOY'
            Region='india'
            Sector='Engineering consultant'
            date=' '
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Essick Air Products'
            Region='US'
            Sector='hardware'
            date=' '
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Genesys Aerosystems'
            Region='US'
            Sector='manufacturer'
            date=' '
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Associated Lighting Representatives'
            Region='US'
            Sector='Lighting manufacturer'
            date=' '
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Stone & Company'
            Region='US'
            Sector='hardware store'
            date=' '
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='ALRO'
            Region='US'
            Sector='hardware store'
            date=' '
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

export {Blackbasta}
