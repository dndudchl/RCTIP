/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {Card1} from '../../../../../_metronic/partials/content/cards/Card1'
import {KTSVG} from '../../../../../_metronic/helpers'


const Sugar: FC = () => {
  return (
    <>
      <div className='mb-12'>
        <h1 className='text-danger lh-xxl fw-bolder my-2 fs-2qx '>Sugar</h1>
        <h2 className='fs-3 fw-light ms-2 me-20 fst-italic'>SugarLocker (also known as Encoded01 ransomware) is written in Delphi and offers more options than other RaaS offerings. So far, no connection with other known ransomware groups has been confirmed. Their ransom note followed REvil’s, and their negotiation page followed CLOP’s.</h2>
      </div>

      <div className='mb-12'>
        <h1 className='my-0 mb-5'>Onion Address</h1>
        <div className='fs-3 fw-semibold ms-2 me-20 fst-italic'>http://hiveleakdbtnp76ulyhi52eag6c6tyc3xw7ez7iqy6wc34gd2nekazyd.onion</div>
		
      </div>

      

      <h1 className='my-0 mb-10'>Recent Targets</h1>
      <div className='row g-6 g-xl-9'>
        <div className='col-md-6 col-xl-3'>
					<Card1
						name='Florida Sugar Cane League'
						Region='USA'
						Sector='Communication Services'
						date='2021-07-17'
						Site='floridasugarcaneleague.org'
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

export {Sugar}
