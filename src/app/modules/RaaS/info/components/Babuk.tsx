/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {Card1} from '../../../../../_metronic/partials/content/cards/Card1'


const Babuk: FC = () => {
  return (
    <>
      
      <h1 className='text-danger lh-xxl fw-bolder my-2 fs-2x'>Babuk</h1>

      <h2 className='fs-3 fw-light ms-1 me-20 '>
          Babuk ransomware, which first appeared in January 2021, has been actively attacking companies and specific individuals around the world until April. 
      </h2>
      
      <div className='mb-10 ms-1'>
        <div className='fw-normal fs-4'>onion_address: http://nq4zyac4ukl4tykmidbzgdlvaboqeqsemkp4t35bzvjeve6zm2lqcjid.onion </div>
        <div className='fw-normal fs-4'>Wallet: </div>
      </div>

      <h2 className='fw-bolder my-0 mb-3'>
      Recent Targets
      </h2>


      <div className='row g-6 g-xl-9'>
        <div className='col-md-6 col-xxl-4'>
          
          <Card1
            name='BridgeMill Athletic Club'
            Region='US'
            Sector='sport'
            date=' '
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='E.A. Gibson Shipbrokers'
            Region='UK'
            Sector='Transport'
            date=' '
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='spsr-law'
            Region='US'
            Sector='law'
            date=' '
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='4murs'
            Region='France'
            Sector='shopping'
            date=' '
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='ARCOM'
            Region='ARCOM'
            Sector='IT'
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

export {Babuk}
