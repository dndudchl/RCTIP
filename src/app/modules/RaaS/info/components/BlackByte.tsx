/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {Card1} from '../../../../../_metronic/partials/content/cards/Card1'


const BlackByte: FC = () => {
  return (
    <>
      <div className='d-flex flex-wrap flex-stack mb-7'>
        <h1 className='text-danger lh-xxl fw-bolder my-2'>
          BlackByte
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
          BlackByte is a full-featured ransomware family that first emerged around July 2021. The ransomware was originally written in C# and later redeveloped in the Go programming language around September 2021. The threat group exfiltrates data prior to deploying ransomware and leaks the stolen information if a ransom is not paid. 
        </h2>
      </div>

      <div className='mb-10 ms-1'>
        
        <div className='fw-normal fs-4'>onion_address: http://jbeg2dct2zhku6c2vwnpxtm2psnjo2xnqvvpoiiwr5hxnc6wrp3uhnad.onion </div>
        <div className='fw-normal fs-4'>Wallet: </div>
        
      </div>

      <h2 className='fw-bolder my-0 mb-3'>
      Recent Targets
        </h2>


      <div className='row g-6 g-xl-9'>
        <div className='col-md-6 col-xxl-4'>
          
          <Card1
            name='torindrive'
            Region='china'
            Sector='elevator'
            date=' '
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='ASAHI GROUP'
            Region='Japan'
            Sector='food'
            date=' '
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          
          <Card1
            name='MUNICPIO DE CHIHUAHUA'
            Region='Mexico'
            Sector='government branch'
            date=' '
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          
          <Card1
            name='CCLINT'
            Region='UK'
            Sector='Building materials'
            date=' '
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          
          <Card1
            name='UNE(www.une.edu.pe)'
            Region='peru'
            Sector='edu'
            date=' '
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          
          <Card1
            name='pitman family farms'
            Region='UK'
            Sector='farm'
            date=' '
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          
          <Card1
            name='almoayed ict'
            Region='audi Arabia'
            Sector='ict'
            date=' '
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          
          <Card1
            name='peterson & hanson'
            Region='Sweden'
            Sector='builder'
            date=' '
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          
          <Card1
            name='swiss american'
            Region='US'
            Sector='Health'
            date=' '
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          
          <Card1
            name='BIGGEST NEWS'
            Region='Uganda'
            Sector='news'
            date=' '
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          
          <Card1
            name='tib development bank'
            Region='Tanzania'
            Sector='bank'
            date=' '
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          
          <Card1
            name='davin industries ltd'
            Region='New Zealand'
            Sector='Manufacturer'
            date=' '
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          
          <Card1
            name='speed-buster'
            Region='Germany'
            Sector='car tuning'
            date=' '
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          
          <Card1
            name='alansmithpools'
            Region='US'
            Sector='swimming pool manufacturer'
            date=' '
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          
          <Card1
            name='broto legal'
            Region='Brazil'
            Sector='Import export company'
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

export {BlackByte}
