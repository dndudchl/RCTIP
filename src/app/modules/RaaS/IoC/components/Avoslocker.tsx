/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'

type Props = {
  className: string
}

const Avoslocker: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column fs-2x fw-semibold'>Indicator Of Compromise (IoCs)</h3>
      </div>

      <div className='card-body py-3 pt-5'>
        <div className='table-responsive'>
          <table className='table table-row-bordered table-row-gray-200 align-middle gs-0 gy-3'>
            <thead>
              <tr className='fw-bold text-muted fs-5'>
                <th className='w-25px'>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value='1'
                      data-kt-check='true'
                      data-kt-check-target='.widget-13-check'
                    />
                  </div>
                </th>
                <th className='min-w-100px'>TYPE</th>
                <th className='min-w-200px'>VALUE</th>
                <th className='min-w-150px'>Label</th>
                <th className='min-w-125px'>Created date</th>
                <th className='min-w-10px'>TLP</th>
                <th className='min-w-10px text-end'></th>
              </tr>
            </thead>
            <tbody>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>fef7d54d6c09a317d95300d10ffcc6c366dbb8f5ebf563dec13b509fff361dc1</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>f5cd44f1d72ef8fc734c76ca62879e1f1cb4c0603cfdc0b85b5ad6ad8326f503</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>f5218aaa046776a12b3683c8da4945a0c4c0934e54802640a15152d9dae15d43</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>f06566e1e309123e03a6a65cdfa06ce5a95fdd276fb7fcbcb33f5560c0a3cd8c</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>f01a3f2186e77251acfac9d53122a1579182bde65e694487b292a8e09cf8d465</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>ee5fbc193f875a2b8859229508ca79a2ffe19d8a120ae8c5ca77b1d17233d268</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>daf055e5c7f843a3dbe34c3c7b848e5bbe9c53b65df2556b4b450390154af3bb</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>c8db63bfab805179a1297f8b70a90a043581c9260e8c97725f4920ab93c03344</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>bc41569c4c9b61f526c78f55993203806d09bb8c3b09dbbeaded61cd1dc2fcc2</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>b722655b93bcb804802f6a20d17492f9c0f08b197b09e8cd57cf3b087ca5a347</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>ac20f3f9ed0c1e6b2160976a1dc4167e53fbb8c71b4824a640131acf24c71bfd</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>a8faf08997e11a53f9d38797d997c51c1a3fcf89412c3da8dcca6631c6f314a8</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>a60136d7377bc1ba8c161021459e9fe9f49c692bf7b397fea676211a2da4444d</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>9d0fa4b88e5b36b8801b55508ab7bc7cda9909d639d70436e972cb3761d34eda</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>911c152d4e37f55bd1544794cc324364b6f03aff118cdf328127355ccc25282a</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>905e87d8433fa58f3006ee685bb347024b46550a3ceda0777016f39e88519142</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>86d7f7b265aae9eedb36bc6a8a3f0e8ec5fa08071e2e0d21774a9a8e3d4ed9e7</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>86c564e9fb7e45a7b0e03dd5a6e1c72b7d7a4eb42ebe6aa2e8f8a7894bed4cb5</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>71f91acc6a9162b600ff5191cc22f84a2b726050a5f6d9de292a4deeea0d9803</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>6804cff68d9824efeb087e1d6ff3f98ed947f002626f04cf8ae7ef26b51e394b</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>6727d493d4ecc8cca83ed8bf7af63941175decff7218e599355065ae6c9563c4</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>65e205b500160cbec44911080621d25f02ad7fcfcf2c3e75ce33f6f821a808b8</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>5ad4fa74e71fb4ce0a885b1efb912a00c2ce3c7b4ad251ae67e6c3a8676ede02</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>5a1b3f9589b468a06e9427eae6b0a855d1df6cb35ab71ddbfa05279579e9cda3</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>52f145a4ccc0f540a130bedbf04370a842daff1ee8d8361c75a8e0d21a88cf5a</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>4c6a865771fdb400456b1e8bc9198134ac9d2f66f1654af42b4b8fc67ae018f2</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>4c3d85e7c49928af0f43623dcbed474a157ef50af3cba40b7fd7ac3fe3df2f15</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>3dea930cfb0ea48c2ce9f7a8bd98ee37e2feca5fb4da8844890fa2d4f62dd105</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>3d41a002c09448d74070a7eb7c44d49da68b2790b17337686d6dd018012db89d</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>3b7512cfa21bd65bd5beecc8cb859ab4f7f5538f3caaf0703a68ec14389b357a</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>302a25e21eea9ab5bc12d1c5f9e5c119619e617677b307fe0e3044c19581faea</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>29767c912919cb38903f12c7f41cdd1c5f39fccb9641302c97b981e4b5e31ee5</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>290b698d41525c4c74836ca934c0169a989a5eafde7208d90300a17a3f5bd408</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>261b06e30a4a9960e0b0ae173486a4e456c9bd7d188d0f1c9c109bb9e2281b59</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>24bf01c1a39c6fcab26173e285d226e0c2dcd8ebf86f820f2ba5339ac29086e5</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>1825e14e1ea19756b55b5ccec5afbb9c2dba0591403c553a83c842bb0dd14432</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>165b491e5b9e273a61c16de0f592e5047740658c7a2e3047f6bf518a17e59eca</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>0650722822e984da41d77b90fbd445f28e96a90af87043581896465c06ed1e44</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>02ea7b9948dfc54980fd86dc40b38575c1f401a5a466e5f9fbf9ded33eb1f6a7</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>01e22210e07708c0b9a0061d0f912041808e48bb8d59f960b545d0b9e11d42d2</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>fec30f688fedcdf6fd573d36beeb3952a8b4d245</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>f3d97e233594df89731c266f23ff546a4b2b832c</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>ec2c7a4412f17aa2caba9cde7772205d3eeb572e</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>d23079dac4f496b176f10448cebc340bbe0fbace</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>d191cc574309462b635ff7a82e504c6726e55efd</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>a0b23013c9e07fa7c0eabeecb1a46f8f2d64e521</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>9e7aea5c206d2833aef4bd626981444753f7e93e</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>6d54c6783d29e12b90a796f36e53acffed47549d</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>4fbb5d9d2ed8720ff4c856900031582487cd99f1</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>43a743d312a8146556a4ca9c7dd5827151f77091</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>0055b93907665fed56d22a7614a581a87d060ead</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>fe19abfbce4390c65c2c4d22b511a115</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>edb88affffd67bca3523b41d3e2e4810</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>cf64bee3d655db4c5f14d1144efe7d82</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>c16023706322f7312ed0f688f616ce84</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>be91687f45c6035c757bb28841fc5715</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>b9ac6f8ea946cb0f4b1ab79e2172fd83</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>87864c9c7b50bde510a8ca8b1f2c74f0</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>79ea559bb87bf3c8403c40586993d4ac</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>5c7579c8930036b12e740402de7a7950</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>3eb185030cd0e557b0b5f9c1fc78f38d</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>00c143b07ddbf5995bd03f79a1ebd945</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>2e349b3224cc0d958e6945623098c2d28cc8977e0d45480c0188febbf7b8aa78</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>e7b0de2872002621f1aab89fe3c54d579fbe46a0</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>9e7d45b4f097d4274aa74b5eaade65d9</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>7259b7a91df7c9bc78b0830808fe58c6ff66aa79bb856cf1bf50a107875b3651</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>09e06cfd9d171b52d55cd23ea0c50721</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>IPv4-Addr</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>154.56.0.221</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>wmi</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>anydesk</span>
										<span className='badge badge-light-info me-2 mb-1'>lsass</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>metasploit</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>IPv4-Addr</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>51.68.146.200</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-15</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>IPv4-Addr</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>45.153.243.93</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>zerologon</span>
										<span className='badge badge-light-info me-2 mb-1'>procdump</span>
										<span className='badge badge-light-info me-2 mb-1'>powersploit</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-02</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>ddcb0e99f27e79d3536a15e0d51f7f33c38b2ae48677570f36f5e92863db5a96</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>anydesk</span>
										<span className='badge badge-light-info me-2 mb-1'>exploits & vulnerabilities</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>log4shell</span>
										<span className='badge badge-light-info me-2 mb-1'>nmap</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>a5ad3355f55e1a15baefea83ce81d038531af516f47716018b1dedf04f081f15</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>log4shell</span>
										<span className='badge badge-light-info me-2 mb-1'>exploits & vulnerabilities</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>nmap</span>
										<span className='badge badge-light-info me-2 mb-1'>anydesk</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>e81a8f8ad804c4d83869d7806a303ff04f31cce376c5df8aada2e9db2c1eeb98</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>nmap</span>
										<span className='badge badge-light-info me-2 mb-1'>birddog</span>
										<span className='badge badge-light-info me-2 mb-1'>mercury</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>log4shell</span>
										<span className='badge badge-light-info me-2 mb-1'>proxyshell</span>
										<span className='badge badge-light-info me-2 mb-1'>powershell</span>
										<span className='badge badge-light-info me-2 mb-1'>exploits & vulnerabilities</span>
										<span className='badge badge-light-info me-2 mb-1'>log4j</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										<span className='badge badge-light-info me-2 mb-1'>anydesk</span>
										<span className='badge badge-light-info me-2 mb-1'>iran</span>
										<span className='badge badge-light-info me-2 mb-1'>printnightmare</span>
										<span className='badge badge-light-info me-2 mb-1'>mimikatz</span>
										<span className='badge badge-light-info me-2 mb-1'>sysaid</span>
										<span className='badge badge-light-info me-2 mb-1'>zerologon</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>black basta</span>
										<span className='badge badge-light-info me-2 mb-1'>powertrash</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>655979d56e874fbe7561bb1b6e512316c25cbb19</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>log4shell</span>
										<span className='badge badge-light-info me-2 mb-1'>nmap</span>
										<span className='badge badge-light-info me-2 mb-1'>powertrash</span>
										<span className='badge badge-light-info me-2 mb-1'>sysaid</span>
										<span className='badge badge-light-info me-2 mb-1'>log4j</span>
										<span className='badge badge-light-info me-2 mb-1'>printnightmare</span>
										<span className='badge badge-light-info me-2 mb-1'>anydesk</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>proxyshell</span>
										<span className='badge badge-light-info me-2 mb-1'>iran</span>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>powershell</span>
										<span className='badge badge-light-info me-2 mb-1'>black basta</span>
										<span className='badge badge-light-info me-2 mb-1'>zerologon</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>birddog</span>
										<span className='badge badge-light-info me-2 mb-1'>mercury</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>mimikatz</span>
										<span className='badge badge-light-info me-2 mb-1'>exploits & vulnerabilities</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>6c9ad4e67032301a61a9897377d9cff8</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>powertrash</span>
										<span className='badge badge-light-info me-2 mb-1'>iran</span>
										<span className='badge badge-light-info me-2 mb-1'>mercury</span>
										<span className='badge badge-light-info me-2 mb-1'>printnightmare</span>
										<span className='badge badge-light-info me-2 mb-1'>black basta</span>
										<span className='badge badge-light-info me-2 mb-1'>proxyshell</span>
										<span className='badge badge-light-info me-2 mb-1'>anydesk</span>
										<span className='badge badge-light-info me-2 mb-1'>log4j</span>
										<span className='badge badge-light-info me-2 mb-1'>mimikatz</span>
										<span className='badge badge-light-info me-2 mb-1'>zerologon</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										<span className='badge badge-light-info me-2 mb-1'>nmap</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>sysaid</span>
										<span className='badge badge-light-info me-2 mb-1'>log4shell</span>
										<span className='badge badge-light-info me-2 mb-1'>birddog</span>
										<span className='badge badge-light-info me-2 mb-1'>exploits & vulnerabilities</span>
										<span className='badge badge-light-info me-2 mb-1'>powershell</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>Domain-Name</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>avosjon4pfh3y7ew3jdwz6ofw7lljcxlbk7hcxxmnxlh5kvf2akcqjad.onion</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>proxyshell</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>Url</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>http://avosqxh72b5ia23dl5fgwcpndkctuzqvh2iefk5imp3pi5gfhel5klad.onion</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>proxyshell</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>e737c901b80ad9ed2cd800fec7c2554178c8afab196fb55a0df36acda1324721</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>proxyshell</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>Url</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>http://avosjon4pfh3y7ew3jdwz6ofw7lljcxlbk7hcxxmnxlh5kvf2akcqjad.onion</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>proxyshell</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>7c935dcd672c4854495f41008120288e8e1c144089f1f06a23bd0a0f52a544b1</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>wiper</span>
										<span className='badge badge-light-info me-2 mb-1'>proxyshell</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>ruransom</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>10ab76cd6d6b50d26fde5fe54e8d80fceeb744de8dbafddff470939fac6a98c4</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>proxyshell</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>0cd7b6ea8857ce827180342a1c955e79c3336a6cf2000244e5cfd4279c5fc1b6</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>proxyshell</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>05c63ce49129f768d31c4bdb62ef5fb53eb41b54</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>ruransom</span>
										<span className='badge badge-light-info me-2 mb-1'>proxyshell</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>wiper</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>e09183041930f37a38d0a776a63aa673</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>proxyshell</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>wiper</span>
										<span className='badge badge-light-info me-2 mb-1'>ruransom</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>Domain-Name</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>avosqxh72b5ia23dl5fgwcpndkctuzqvh2iefk5imp3pi5gfhel5klad.onion</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>proxyshell</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>912018ab3c6b16b39ee84f17745ff0c80a33cee241013ec35d0281e40c0658d9</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>nmap</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>misp-scraper</span>
										<span className='badge badge-light-info me-2 mb-1'>ntdsutil</span>
										<span className='badge badge-light-info me-2 mb-1'>psexec</span>
										<span className='badge badge-light-info me-2 mb-1'>black basta</span>
										<span className='badge badge-light-info me-2 mb-1'>log4shell</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										<span className='badge badge-light-info me-2 mb-1'>dnscmd</span>
										<span className='badge badge-light-info me-2 mb-1'>ligolo</span>
										<span className='badge badge-light-info me-2 mb-1'>fscan</span>
										<span className='badge badge-light-info me-2 mb-1'>mimikatz</span>
										<span className='badge badge-light-info me-2 mb-1'>birddog</span>
										<span className='badge badge-light-info me-2 mb-1'>dll sideloading</span>
										<span className='badge badge-light-info me-2 mb-1'>seedworm</span>
										<span className='badge badge-light-info me-2 mb-1'>keylogger</span>
										<span className='badge badge-light-info me-2 mb-1'>chafer</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>procdump</span>
										<span className='badge badge-light-info me-2 mb-1'>exploits & vulnerabilities</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>active directory</span>
										<span className='badge badge-light-info me-2 mb-1'>complete</span>
										<span className='badge badge-light-info me-2 mb-1'>zerologon</span>
										<span className='badge badge-light-info me-2 mb-1'>powershell</span>
										<span className='badge badge-light-info me-2 mb-1'>landongo</span>
										<span className='badge badge-light-info me-2 mb-1'>muddywater</span>
										<span className='badge badge-light-info me-2 mb-1'>rdp</span>
										<span className='badge badge-light-info me-2 mb-1'>blog-post</span>
										<span className='badge badge-light-info me-2 mb-1'>powertrash</span>
										<span className='badge badge-light-info me-2 mb-1'>collection</span>
										<span className='badge badge-light-info me-2 mb-1'>rat</span>
										<span className='badge badge-light-info me-2 mb-1'>printnightmare</span>
										<span className='badge badge-light-info me-2 mb-1'>anydesk</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>70df765f554ed7392200422c18776b8992c09231</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										<span className='badge badge-light-info me-2 mb-1'>exploits & vulnerabilities</span>
										<span className='badge badge-light-info me-2 mb-1'>mimikatz</span>
										<span className='badge badge-light-info me-2 mb-1'>procdump</span>
										<span className='badge badge-light-info me-2 mb-1'>landongo</span>
										<span className='badge badge-light-info me-2 mb-1'>psexec</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>nmap</span>
										<span className='badge badge-light-info me-2 mb-1'>ntdsutil</span>
										<span className='badge badge-light-info me-2 mb-1'>dll sideloading</span>
										<span className='badge badge-light-info me-2 mb-1'>chafer</span>
										<span className='badge badge-light-info me-2 mb-1'>black basta</span>
										<span className='badge badge-light-info me-2 mb-1'>anydesk</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>rdp</span>
										<span className='badge badge-light-info me-2 mb-1'>fscan</span>
										<span className='badge badge-light-info me-2 mb-1'>ligolo</span>
										<span className='badge badge-light-info me-2 mb-1'>seedworm</span>
										<span className='badge badge-light-info me-2 mb-1'>keylogger</span>
										<span className='badge badge-light-info me-2 mb-1'>log4shell</span>
										<span className='badge badge-light-info me-2 mb-1'>active directory</span>
										<span className='badge badge-light-info me-2 mb-1'>dnscmd</span>
										<span className='badge badge-light-info me-2 mb-1'>powertrash</span>
										<span className='badge badge-light-info me-2 mb-1'>muddywater</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>powershell</span>
										<span className='badge badge-light-info me-2 mb-1'>rat</span>
										<span className='badge badge-light-info me-2 mb-1'>printnightmare</span>
										<span className='badge badge-light-info me-2 mb-1'>birddog</span>
										<span className='badge badge-light-info me-2 mb-1'>zerologon</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>bb8bdb3e8c92e97e2f63626bc3b254c4</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>active directory</span>
										<span className='badge badge-light-info me-2 mb-1'>dnscmd</span>
										<span className='badge badge-light-info me-2 mb-1'>printnightmare</span>
										<span className='badge badge-light-info me-2 mb-1'>black basta</span>
										<span className='badge badge-light-info me-2 mb-1'>landongo</span>
										<span className='badge badge-light-info me-2 mb-1'>keylogger</span>
										<span className='badge badge-light-info me-2 mb-1'>mimikatz</span>
										<span className='badge badge-light-info me-2 mb-1'>muddywater</span>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										<span className='badge badge-light-info me-2 mb-1'>powershell</span>
										<span className='badge badge-light-info me-2 mb-1'>ligolo</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>exploits & vulnerabilities</span>
										<span className='badge badge-light-info me-2 mb-1'>log4shell</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>rdp</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>zerologon</span>
										<span className='badge badge-light-info me-2 mb-1'>fscan</span>
										<span className='badge badge-light-info me-2 mb-1'>powertrash</span>
										<span className='badge badge-light-info me-2 mb-1'>procdump</span>
										<span className='badge badge-light-info me-2 mb-1'>nmap</span>
										<span className='badge badge-light-info me-2 mb-1'>psexec</span>
										<span className='badge badge-light-info me-2 mb-1'>ntdsutil</span>
										<span className='badge badge-light-info me-2 mb-1'>anydesk</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>birddog</span>
										<span className='badge badge-light-info me-2 mb-1'>dll sideloading</span>
										<span className='badge badge-light-info me-2 mb-1'>seedworm</span>
										<span className='badge badge-light-info me-2 mb-1'>rat</span>
										<span className='badge badge-light-info me-2 mb-1'>chafer</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>1e7737a57552b0b32356f5e54dd84a9ae85bb3acff05ef5d52aabaa996282dfb</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>bazarloader</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>6ee6664df9bfb47d97090492b6cde68bf056a42a</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>persistence</span>
										<span className='badge badge-light-info me-2 mb-1'>log4shell</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>stonefly</span>
										<span className='badge badge-light-info me-2 mb-1'>preft</span>
										<span className='badge badge-light-info me-2 mb-1'>mimikatz</span>
										<span className='badge badge-light-info me-2 mb-1'>winnti</span>
										<span className='badge badge-light-info me-2 mb-1'>ddos</span>
										<span className='badge badge-light-info me-2 mb-1'>exploits & vulnerabilities</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>winscp</span>
										<span className='badge badge-light-info me-2 mb-1'>malware</span>
										<span className='badge badge-light-info me-2 mb-1'>plugx</span>
										<span className='badge badge-light-info me-2 mb-1'>nmap</span>
										<span className='badge badge-light-info me-2 mb-1'>wmiexec</span>
										<span className='badge badge-light-info me-2 mb-1'>infostealer</span>
										<span className='badge badge-light-info me-2 mb-1'>anydesk</span>
										<span className='badge badge-light-info me-2 mb-1'>psexec</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>47e001253af2003985f15282cdc90a1c</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>exploits & vulnerabilities</span>
										<span className='badge badge-light-info me-2 mb-1'>winscp</span>
										<span className='badge badge-light-info me-2 mb-1'>wmiexec</span>
										<span className='badge badge-light-info me-2 mb-1'>infostealer</span>
										<span className='badge badge-light-info me-2 mb-1'>log4shell</span>
										<span className='badge badge-light-info me-2 mb-1'>ddos</span>
										<span className='badge badge-light-info me-2 mb-1'>stonefly</span>
										<span className='badge badge-light-info me-2 mb-1'>nmap</span>
										<span className='badge badge-light-info me-2 mb-1'>malware</span>
										<span className='badge badge-light-info me-2 mb-1'>winnti</span>
										<span className='badge badge-light-info me-2 mb-1'>persistence</span>
										<span className='badge badge-light-info me-2 mb-1'>plugx</span>
										<span className='badge badge-light-info me-2 mb-1'>anydesk</span>
										<span className='badge badge-light-info me-2 mb-1'>mimikatz</span>
										<span className='badge badge-light-info me-2 mb-1'>psexec</span>
										<span className='badge badge-light-info me-2 mb-1'>preft</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-29</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>eb45ff7ea2ccdcceb2e7e14f9cc01397</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>f3e891a2a39dd948cd85e1c8335a83e640d0987dbd48c16001a02f6b7c1733ae</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>ea028ec3efaab9a3ce49379fef714bef0b120661dcbb55fcfab5c4f720598477</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>bc0b54c19949f407da972f0bedf7f429c0fe25181564d1fb6d053b989925898f</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>bcdb59232137e570d4afb3c635f8df19ceb03e3f57fe558f4fc69a0be778c6ab</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>9dd6cc25b2f920b825e15682a4d06435a42b281674ba6e99c8e2b2222c9d638f</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>90af3848d5a0c5eb9c6ddc1ee2e6c539dd6cb5ec5a433d00a6dae22fb221c446</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>4efcd774d9d224137c5840e9a2d0f9e56c976e8e7a49158e3c15135dd9fbae9c</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>4de287e0b05e138ab942d71d1d4d2ad5fb7d46a336a446f619091bdace4f2d0a</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>1dbe9f956514460774290197ffccb11d817d1a5a5aeab81877ae7b74daa1b592</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>23984141a918be3345296bb6bf50d8d356229cb832c726833499fbb950037d00</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>16a707a3965ebd71ebc831b68863b855b2c8d60aef8efdef1e0c0a6cc28e9bc7</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>16a0054a277d8c26beb97850ac3e86dd0736ae6661db912b8782b4eb08cfd36e</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>fb4695af393c4504e800c05bafe114dd4cf36bf2</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>e2db01d0a5572f580f5b7b28b4c9f1a04b35dc06</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>c776757e1e0195d996b49bd1124c7baffc462279</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>a185904a46b0cb87d38057fc591a31e6063cdd95</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>844e9b219aaecb26de4994a259f822500fb75ae1</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>07d28a02c99b65db91e69b3f45c12cff7fe72b4d</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>11ff84da7bba56c2eda7efc7a5c6736bf59d1e2d</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>d5436df39096935f655022a5ea85066e</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>ce5d09832339eb7ef86f2c22b4904a20</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>b7f1120bcff47ab77e74e387805feabe</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>af9ff037caca1f316e7d05db86dbd882</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>548cdd0c2071170c4c87784eb8be84cd</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>13baa52d7961db198134763370aa61e7</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>0d3058695e559b95910911c4b391d482</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>Cryptocurrency-Wallet</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>bc1ql5f3m75qx3ueu2pz5eeveyqsw6pdjs3ufk8r20</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>e32dc551a721b43da44a068f38928d3e363435ce0e4d2e0479c0dfdb27563c82</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>d4e3c16a2ffbfc3ed46adeea2f13d21edc332b85</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>a5434b72fa80d4ed2bef826a36542dbc</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>1e21c8e27a97de1796ca47a9613477cf7aec335a783469c5ca3a09d4f07db0ff</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>adrecon</span>
										<span className='badge badge-light-info me-2 mb-1'>hive ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>hive leaks</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>67f0c8d81aefcfc5943b31d695972194ac15e9f2</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>adrecon</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>hive leaks</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>hive ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>2f3273e5b6739b844fe33f7310476afb971956dd</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive leaks</span>
										<span className='badge badge-light-info me-2 mb-1'>hive ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>adrecon</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>504bd1695de326bc533fde29b8a69319</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>adrecon</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>hive leaks</span>
										<span className='badge badge-light-info me-2 mb-1'>hive ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>00260c390ffab5734208a7199df0e4229a76261c3f5b7264c4515acb8eb9c2f8</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>dbe5243c6ea5cc4cfb3edf042bd94a59cf9a0e64</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>96de05212b30ec85d4cf03386c1b84af</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>f32e9fb8b1ea73f0a71f3edaebb7f2b242e72d2a4826d6b2744ad3d830671202</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>bcbb1e388759eea5c1fbb4f35c29b6f66f3f4ca4c715bab35c8fc56dcf3fa621</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>717585e9605ac2a971b7c7537e6e311bab9db02ecc6451e0efada9b2ff38b474</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>21879b5a8a84c5fe5e009c85744caf74b817c57203020bf919037d7ccb6b6a58</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>c7b2d4a22f788b1b942f993fff33f233dca960ce</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>6c4040f2a76e61c649e1ff4ac564a5951c15d1fa</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>f91095ae0e0632b0f630e0c4eb12ba10</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>4d25a9242eac26b2240336fb94d62b1e</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>a0b4e3d7e4cd20d25ad2f92be954b95eea44f8f1944118a3194295c5677db749</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>hive ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>hive leaks</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>adrecon</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>fdbc66ebe7af710e15946e1541e2e81ddfd62aa3b35339288a9a244fb56a74cf</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>hive ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>adrecon</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>hive leaks</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>3b40dbdc418d2d5de5f552a054a32bfbac18c5cc</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>hive leaks</span>
										<span className='badge badge-light-info me-2 mb-1'>adrecon</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>hive ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>8240d60d83cb7c0248e64389855e29b4</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>4bb152c96ba9e25f293bbc03c607918a4452231087053a8cb1a8accb1acc92fd</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>12ac32d012e818c78d6db790f6e11838ca75db88</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>b0916724ff4118bf213e31cd198c0afd</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>73406e0e7882addf0f810d3bc0e386fd5fd2dd441c895095f4125bb236ae7345</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>5e4b23f3dd6c043bf1dcab7bc406e7a6335d674d</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>a4b9a65f57b2312b44038d0a1909ba73</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>0545f842ca2eb77bcac0fd17d6d0a8c607d7dbc8669709f3096e5c1828e1c049</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>95838a8beb04cfe6f1ded5ecbd00bf6cf97cd564</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>6fc418ce9b5306b4fd97f815cc9830e5</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>acad2d9b291b5a9662aa1469f96995dc547a45e391af9c7fa24f5921b0128b2c</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>038bc02c0997770a1e764d0203303ef8fcad11fb</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>84866fca8a5ceb187bca8e257e4f875a</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>56fd91787c641c2329a86813497d0e6ff219c81a4d61ac10fedef9cd68c3baed</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>f6f94e2f49cd64a9590963ef3852e135e2b8deba</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>d285f1366d0d4fdae0b558db690497ea</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>fb544e1f74ce02937c3a3657be8d125d5953996115f65697b7d39e237020706f</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>e2bdef45d8dd4b1811396781b0bc94092d268a88</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>76e177a94834b3f7c63257bc8011f60f</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>9506d2c662e85730d459ee605c316b7e</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>863d17ddb302f943a52b087f7c0f9fbf656516f4</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>b4f90cff1e3900a3906c3b74f307498760462d719c31d008fc01937f5400fb85</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>bedf30bbcefc54bc48432674255856f47c0ba2ec46e913d078a53e66ac9dcff8</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>ca607e431062ee49a21d69d722750e5edbd8ffabcb54fa92b231814101756041</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>Domain-Name</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>bigblog.at</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>9f82f22c137688d0b3e7912d415605d2bbc56478311fd0b3dc265f8d0006aa8c</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>8f3db63f70fad912a3d5994e80ad9a6d1db6c38d119b38bc04890dfba4c4a2b2</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>556e5cb5e4e77678110961c8d9260a726a363e00bf8d278e5302cb4bfccc3eed</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>0b3c3402edbed6a7a8530607c4eafcee85184ffe</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>5716a136538ec546ef591d5aa143c153</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>05a47a227984eed8d387a4c2b749e3297fd694f1</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>1cd2d73098671253243a8457355b8820</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>Domain-Name</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>decoding.at</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>88f7544a29a2ceb175a135d9fa221cbfd3e8c71f32dd6b09399717f85ea9afd1</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>adrecon</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>hive ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>hive leaks</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>double extorsion</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>9d336b8911c8ffd7cc809e31d5b53796bb0cc7bb</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>adrecon</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>hive ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>double extorsion</span>
										<span className='badge badge-light-info me-2 mb-1'>hive leaks</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>2f9fc82898d718f2abe99c4a6fa79e69</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>adrecon</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>hive leaks</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>double extorsion</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>91d1ab6c305552685996f4d80c44cc1c694355ae7d09243df027827d1df61631</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>f05e71ed0e4a779fc30c3d732b07e15d56f8e3bc</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>cb3fb57b5c70c3a2f30aa3af078bbb1cfdd1bf02</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>1fe7e2f8fbd98d6b5505fd9ee66da5b4f11720a1</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>e4179bca5bf5b1fd51172d629f5521f8</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>9a246bf39f3fab9c2d45f1003bdc6b45</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>5cc28691fdaa505b8f453e3500e3d690</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>a04a99d946fb08b2f65ba664ad7faebd</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>76a77def28acf51b2b7cdcbfaa182fe5726dd3f9e891682a4efc3226640b9c78</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>5072678821b490853eff0a97191f262c4e8404984dd8d5be1151fef437ca26db</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>286bffaa9c81abfb938fe65be198770c38115cdec95865a241f913769e9bfd3f</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>faa3453ceb1bd4e5b0b10171eaa908e56e7275173178010fcc323fdea67a6869</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>ca57455fd148754bf443a2c8b06dc2a295f014b071e3990dd99916250d21bc75</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>a4c486b0926f55e99d12f749135612602cc4bf64</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>307088ae7027b55541311fd70a9337ff3709fccf</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>7df22f2fbe86a07070f262f94e233860b6ae66b2</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>3e86304198d1185a36834e59147fc767315d8678</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>a72e18efa33f1e3438dbb4451c335d487cbd4082</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>71e7990c8c81ef6c4e265eae11030886c40cc8b0</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>791f60a24f9b6589a2afed48b3ec17fad43bc1db</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>0859a78bb06a77e7c6758276eafbefd9</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>9fe9f4ee717bae3a5c9fdf1d380e015d</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>1f4f6abfced4c347ba951a04c8d86982</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>123511227718f17b3dec5431d5ae87f3</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>ec273b5841eadfc43b1908c9905e95a3</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>207718c939673a5f674ce51f402cfc06</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>1fbef2a9007eb0e32fb586e0fca3f0e7</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>5761ee98b1c2fea31b5408516a8929ea</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>410c884d883ebe2172507b5eadd10bc8a2ae2564ba0d33b1e84e5f3c22bd3677</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>ffbb6c4d8d704a530bdd557890f367ad904c09c03f53fda5615a7208a0ea3e4d</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>1b109db549dd0bf64cadafec575b5895690760c7180a4edbf0c5296766162f18</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>0f178bc093b6b9d25924a85d9a7dde64592215599733e83e3bbc6df219564335</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>e3f236e4aeb73f8f8f0caebe46f53abbb2f71fa4b266a34ab50e01933709e877</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>26b6a9fecfc9d4b4b2c2ff02885b257721687e6b820f72cf2e66c1cae2675739</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>1e3bf358c76f4030ffc4437d5fcd80c54bd91b361abb43a4fa6340e62d986770</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>0a937d4fe8aa6cb947b95841c490d73e452a3cafcd92645afc353006786aba76</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>4d043df23e55088bfc04c14dfb9ddb329a703cc1</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>4d0e6d7af9a5edece5273f3c312fdd3b9c229409</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>49250b4aa060299f0c8f67349c942d1c</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>69d9dd7fdd88f33e2343fb391ba063a65fe5ffbe649da1c5083ec4a67c525997</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>488e532e55100da68eaeee30ba342cc05810e296</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>8ab0375228416b89becff72a0ae40654</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>75f06b636efe53360287c0ff1f51ea7de1e7c8b5</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>14f0c4ce32821a7d25ea5e016ea26067d6615e3336c3baa854ea37a290a462a8</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>anydesk</span>
										<span className='badge badge-light-info me-2 mb-1'>infostealer</span>
										<span className='badge badge-light-info me-2 mb-1'>preft</span>
										<span className='badge badge-light-info me-2 mb-1'>mimikatz</span>
										<span className='badge badge-light-info me-2 mb-1'>persistence</span>
										<span className='badge badge-light-info me-2 mb-1'>log4shell</span>
										<span className='badge badge-light-info me-2 mb-1'>malware</span>
										<span className='badge badge-light-info me-2 mb-1'>wmiexec</span>
										<span className='badge badge-light-info me-2 mb-1'>exploits & vulnerabilities</span>
										<span className='badge badge-light-info me-2 mb-1'>stonefly</span>
										<span className='badge badge-light-info me-2 mb-1'>winscp</span>
										<span className='badge badge-light-info me-2 mb-1'>psexec</span>
										<span className='badge badge-light-info me-2 mb-1'>plugx</span>
										<span className='badge badge-light-info me-2 mb-1'>winnti</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>nmap</span>
										<span className='badge badge-light-info me-2 mb-1'>ddos</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-27</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>05ba2df0033e3cd5b987d66b6de545df439d338a20165c0ba96cde8a74e463e5</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>nmap</span>
										<span className='badge badge-light-info me-2 mb-1'>anydesk</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>log4shell</span>
										<span className='badge badge-light-info me-2 mb-1'>exploits & vulnerabilities</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-26</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>43b7a60c0ef8b4af001f45a0c57410b7374b1d75a6811e0dfc86e4d60f503856</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>abcd</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-25</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>b1102ed4bca6dae6f2f498ade2f73f76af527fa803f0e0b46e100d4cf5150682</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>dropper</span>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>bazarloader</span>
										<span className='badge badge-light-info me-2 mb-1'>dprk_apt</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>dev-0193</span>
										<span className='badge badge-light-info me-2 mb-1'>lazarus</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>phishing</span>
										<span className='badge badge-light-info me-2 mb-1'>trickbot</span>
										<span className='badge badge-light-info me-2 mb-1'>apt</span>
										<span className='badge badge-light-info me-2 mb-1'>ryuk</span>
										<span className='badge badge-light-info me-2 mb-1'>exotic lily</span>
										<span className='badge badge-light-info me-2 mb-1'>fin12</span>
										<span className='badge badge-light-info me-2 mb-1'>powersploit</span>
										<span className='badge badge-light-info me-2 mb-1'>wizard spider</span>
										<span className='badge badge-light-info me-2 mb-1'>conti</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-25</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>2cb6ff75b38a3f24f3b60a2742b6f4d6027f0f2a</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>apt</span>
										<span className='badge badge-light-info me-2 mb-1'>fin12</span>
										<span className='badge badge-light-info me-2 mb-1'>powersploit</span>
										<span className='badge badge-light-info me-2 mb-1'>ryuk</span>
										<span className='badge badge-light-info me-2 mb-1'>phishing</span>
										<span className='badge badge-light-info me-2 mb-1'>dropper</span>
										<span className='badge badge-light-info me-2 mb-1'>dprk_apt</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>wizard spider</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>trickbot</span>
										<span className='badge badge-light-info me-2 mb-1'>exotic lily</span>
										<span className='badge badge-light-info me-2 mb-1'>conti</span>
										<span className='badge badge-light-info me-2 mb-1'>dev-0193</span>
										<span className='badge badge-light-info me-2 mb-1'>lazarus</span>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>bazarloader</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-25</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>9b02dd2a1a15e94922be3f85129083ac</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>fin12</span>
										<span className='badge badge-light-info me-2 mb-1'>powersploit</span>
										<span className='badge badge-light-info me-2 mb-1'>conti</span>
										<span className='badge badge-light-info me-2 mb-1'>trickbot</span>
										<span className='badge badge-light-info me-2 mb-1'>dprk_apt</span>
										<span className='badge badge-light-info me-2 mb-1'>phishing</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>dev-0193</span>
										<span className='badge badge-light-info me-2 mb-1'>exotic lily</span>
										<span className='badge badge-light-info me-2 mb-1'>avoslocker</span>
										<span className='badge badge-light-info me-2 mb-1'>bumblebee</span>
										<span className='badge badge-light-info me-2 mb-1'>lazarus</span>
										<span className='badge badge-light-info me-2 mb-1'>bazarloader</span>
										<span className='badge badge-light-info me-2 mb-1'>apt</span>
										<span className='badge badge-light-info me-2 mb-1'>adfind</span>
										<span className='badge badge-light-info me-2 mb-1'>ryuk</span>
										<span className='badge badge-light-info me-2 mb-1'>wizard spider</span>
										<span className='badge badge-light-info me-2 mb-1'>dropper</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-25</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export {Avoslocker}
