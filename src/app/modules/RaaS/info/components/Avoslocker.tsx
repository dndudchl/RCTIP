/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {Card1} from '../../../../../_metronic/partials/content/cards/Card1'


const Avoslocker: FC = () => {
  return (
    <>
      <div className='d-flex flex-wrap flex-stack mb-7'>
        <h1 className='text-danger lh-xxl fw-bolder my-2'>
          Avoslocker
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
          AvosLocker is one of the newer ransomware families that came to fill the void left by REvil. While not as prominent or active as LockBit or Conti, it is slowly making a name for itself, with the US Federal Bureau of Investigation (FBI) releasing an advisory on this threat. According to the report, AvosLocker has been targeting critical infrastructure in different sectors of the US, with attacks also observed in other countries like Canada, UK, and Spain.
        </h2>
      </div>

      <div className='mb-10 ms-1'>
        
        <div className='fw-normal fs-4'>onion_address: http://avosqxh72b5ia23dl5fgwcpndkctuzqvh2iefk5imp3pi5gfhel5klad.onion </div>
        <div className='fw-normal fs-4'>Wallet: </div>
        
      </div>

      <h2 className='fw-bolder my-0 mb-3'>
      Recent Targets
        </h2>


      <div className='row g-6 g-xl-9'>
        <div className='col-md-6 col-xxl-4'>
          
          <Card1
            name='ALVAC SA'
            Region='spain'
            Sector='repiar'
            date='2022-10-01'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Cosmopoint College'
            Region='Malaysia'
            Sector='Edu'
            date='2022-09-28'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='DLS Motors'
            Region='Malaysia'
            Sector='Edu'
            date='2022-09-28'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Hughes Systems Industrial'
            Region='US'
            Sector='Electrician'
            date='2022-09-23'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Zeus Scientific Inc'
            Region='US'
            Sector='medical hardware'
            date='2022-09-19'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='American International Industry'
            Region='US'
            Sector='Manufacturer'
            date='2022-09-15'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Emtec Inc'
            Region='French'
            Sector='computer hardware'
            date='022-09-14'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Northwest University'
            Region='US'
            Sector='edu'
            date='2022-09-14'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Paul Smiths College'
            Region='US'
            Sector='edu'
            date='2022-09-11'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Our Lady of Lake University'
            Region='US'
            Sector='edu'
            date='2022-09-11'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Xybion'
            Region='Canada'
            Sector='company censering'
            date='2022-09-08'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Stratford University'
            Region='US'
            Sector='edu'
            date='2022-09-07'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Sunland Asphalt And Construction'
            Region='US'
            Sector='Infra'
            date='2022-09-08'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='TeladanPrima Argo Group'
            Region='US'
            Sector='Farm'
            date='2022-09-05'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Truckslogic'
            Region='Panama'
            Sector='Logistics service'
            date='2022-09-03'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='XSCAD EDU'
            Region='US'
            Sector='edu'
            date='2022-09-03'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='The Brigantine'
            Region='US'
            Sector='seafood'
            date='2022-08-29'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Khoemacau Copper Mining'
            Region='US'
            Sector='Mining'
            date='2022-08-27'
          />
        </div>

        <div className='col-md-6 col-xxl-4'>
          <Card1
            name='Mount Vernon Mills'
            Region='US'
            Sector='manufacturer'
            date='2022-08-26'
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

export {Avoslocker}
