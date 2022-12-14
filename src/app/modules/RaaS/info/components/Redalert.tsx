/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {Card1} from '../../../../../_metronic/partials/content/cards/Card1'
import {KTSVG} from '../../../../../_metronic/helpers'


const Redalert: FC = () => {
  return (
    <>
      <div className='mb-12'>
        <h1 className='text-danger lh-xxl fw-bolder my-2 fs-2qx '>Redalert</h1>
        <h2 className='fs-3 fw-light ms-2 me-20 fst-italic'>This ransomware is multi-platform; the Windows variant is known as RedAlert, while the Linux VMware ESXi server-targeting version is known as N13V.</h2>
      </div>

      <div className='mb-12'>
        <h1 className='my-0 mb-5'>Onion Address</h1>
        <div className='fs-3 fw-semibold ms-2 me-20 fst-italic'>http://blog2hkbm6gogpv2b3uytzi3bj5d5zmc4asbybumjkhuqhas355janyd.onion</div>
		
      </div>

      

      <h1 className='my-0 mb-10'>Recent Targets</h1>
      <div className='row g-6 g-xl-9'>
        <div className='col-md-6 col-xl-3'>
					<Card1
						name='groupg4.com'
						Region='Spain'
						Sector='Industrials'
						date='2022-09-14'
						Site='groupg4.com'
					/>
				</div>
				<div className='col-md-6 col-xl-3'>
					<Card1
						name='coarc.org'
						Region='USA'
						Sector='Communication Services'
						date='2022-07-28'
						Site='coarc.org'
					/>
				</div>
				<div className='col-md-6 col-xl-3'>
					<Card1
						name='keystonelegal.co.uk'
						Region='UK'
						Sector='Industrials'
						date='2022-07-19'
						Site='keystonelegal.co.uk'
					/>
				</div>
				<div className='col-md-6 col-xl-3'>
					<Card1
						name='vahanen.com'
						Region='Finland'
						Sector='Industrials'
						date='2022-07-09'
						Site='vahanen.com'
					/>
				</div>
				<div className='col-md-6 col-xl-3'>
					<Card1
						name='syredis.fr'
						Region='France'
						Sector='Information Technology'
						date='2022-07-06'
						Site='syredis.fr'
					/>
				</div>
				
      </div>

      {/* <div className='d-flex flex-stack flex-wrap pt-10'>
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
      </div> */}
    </>
  )
}

export {Redalert}
