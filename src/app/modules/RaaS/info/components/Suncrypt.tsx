/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {Card1} from '../../../../../_metronic/partials/content/cards/Card1'


const Suncrypt: FC = () => {
  return (
    <>
      <div className='d-flex flex-wrap flex-stack mb-7'>
        <h1 className='text-danger lh-xxl fw-bolder my-2'>
          Suncrypt
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
          Ransom.SunCrypt is Malwarebytes' detection name for a specific Ransomware as a Service (RaaS) variant that uses a very aggressive approach towards its victims.
        </h2>
      </div>

      <div className='mb-10 ms-1'>
        
        <div className='fw-normal fs-4'>onion_address: http://x2miyuiwpib2imjr5ykyjngdu7v6vprkkhjltrk4qafymtawey4qzwid.onion </div>
        <div className='fw-normal fs-4'>Wallet: </div>
        
      </div>

      <h2 className='fw-bolder my-0 mb-3'>
      Recent Targets
        </h2>


      <div className='row g-6 g-xl-9'>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='SOCOTEC'
            Region='Franch'
            Sector='Construction engineering'
            date=' '
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Northeastern Technical College'
            Region='US'
            Sector='Community college'
            date=' '
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Gemeente Buren'
            Region='Netherlands'
            Sector='government branch'
            date=' '
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Co-opbank Pertama'
            Region='Malaysia'
            Sector='bank'
            date=' '
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='DJS associate'
            Region='US'
            Sector='Engineering consultant'
            date=' '
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Oklahoma City Indian Clinic'
            Region='US'
            Sector='medical'
            date=' '
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Migros'
            Region='Swiss'
            Sector='Food'
            date=' '
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='FitFlop Ltd.'
            Region='UK'
            Sector='fashion'
            date=' '
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Royal Smilde'
            Region='Netherlands'
            Sector='Food'
            date=' '
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Consumers Supply Distributing LLC'
            Region='US'
            Sector='Distributing'
            date=' '
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Bohlin Cywinski Jackson'
            Region='US'
            Sector='Architectural firm'
            date=' '
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Herman & Kittle Properties Inc.'
            Region='US'
            Sector='household'
            date=' '
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Hospitality Furnishings & Design Inc.'
            Region='US'
            Sector='household'
            date=' '
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Outdoor Venture Corporation (OVC)'
            Region='US'
            Sector='Manufacturer'
            date=' '
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Cornerstone Automation Systems, LLC'
            Region='US'
            Sector='secAutomation companytor'
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

export {Suncrypt}
