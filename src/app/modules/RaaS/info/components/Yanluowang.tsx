/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {Card1} from '../../../../../_metronic/partials/content/cards/Card1'
import {KTSVG} from '../../../../../_metronic/helpers'


const Yanluowang: FC = () => {
  return (
    <>
      <div className='mb-12'>
        <h1 className='text-danger lh-xxl fw-bolder my-2 fs-2qx '>Yanluowang</h1>
        <h2 className='fs-3 fw-light ms-2 me-20 fst-italic'>Yanluowang ransomware, also known as Dryxiphia, was first spotted in October 2021 by Symantec’s Threat Hunter Team. The group has been known for successfully ransoming organisations globally, particularly those in the financial, manufacturing, IT services, consultancy, and engineering sectors. The name “Yanluowang” comes from Chinese mythology (Yanluo Wang is a Chinese deity), suggesting the ransomware gang is potentially of Chinese origin. However, all the communications in the leaked chats were in Russian language and it appears that the name was chosen deliberately to masquerade as a Chinese threat actor.</h2>
      </div>

      <div className='mb-12'>
        <h1 className='my-0 mb-5'>Onion Address</h1>
        <div className='fs-3 fw-semibold ms-2 me-20 fst-italic'>http://jukswsxbh3jsxuddvidrjdvwuohtsy4kxg2axbppiyclomt2qciyfoad.onion</div>
		
      </div>

      

      <h1 className='my-0 mb-10'>Recent Targets</h1>
      <div className='row g-6 g-xl-9'>
        <div className='col-md-6 col-xl-3'>
					<Card1
						name='Timios Inc.'
						Region='USA'
						Sector='Real Estate'
						date='2022-07-02'
						Site='www.timios.com'
					/>
				</div>
				<div className='col-md-6 col-xl-3'>
					<Card1
						name='boxerproperty'
						Region='USA'
						Sector='Real Estate'
						date='2022-07-02'
						Site='www.boxerproperty.com'
					/>
				</div>
				<div className='col-md-6 col-xl-3'>
					<Card1
						name='Shorr.com'
						Region='USA'
						Sector='Materials'
						date='2022-07-02'
						Site='shorr.com'
					/>
				</div>
				<div className='col-md-6 col-xl-3'>
					<Card1
						name='tmsw.com'
						Region='USA'
						Sector='Industrials'
						date='2022-07-02'
						Site='tmsw.com'
					/>
				</div>
				<div className='col-md-6 col-xl-3'>
					<Card1
						name='havi.com'
						Region='USA'
						Sector='Industrials'
						date='2022-07-02'
						Site='havi.com'
					/>
				</div>
				<div className='col-md-6 col-xl-3'>
					<Card1
						name='various organizations'
						Region='Unknown'
						Sector='Unknown'
						date='2022-07-02'
						Site='Unknown'
					/>
				</div>
				<div className='col-md-6 col-xl-3'>
					<Card1
						name='Walmart'
						Region='USA'
						Sector='Consumer Discretionary'
						date='2022-07-02'
						Site='www.walmart.com'
					/>
				</div>
				<div className='col-md-6 col-xl-3'>
					<Card1
						name='Cincinnati bell'
						Region='USA'
						Sector='Communication Services'
						date='2022-07-02'
						Site='my.cincinnatibell.com'
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

export {Yanluowang}
