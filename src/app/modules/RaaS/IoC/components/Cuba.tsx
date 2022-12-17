/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'

type Props = {
  className: string
}

const Cuba: React.FC<Props> = ({className}) => {
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
								<td><div className='text-dark fw-bold fs-6'>Hostname</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>aaa.stage.16549040.dns.alleivice.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold fs-6'>Email-Addr</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>inbox@mail.supports24.net</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>cuba4ikm4jakjgmkeztyawtdgr2xymvy6nvgw5cglswg3si76icnqd.onion</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>http://cuba4ikm4jakjgmkeztyawtdgr2xymvy6nvgw5cglswg3si76icnqd.onion/</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>92.222.172.172</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>37.120.247.39</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>217.79.43.148</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>216.45.55.30</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>216.45.55.3</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>212.192.241.230</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>209.76.253.84</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>192.137.101.46</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>192.137.101.205</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>192.137.100.96</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>236f5de8620a6255f9003d054f08574b</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>103.27.203.197</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>fd87ca28899823b37b2c239fbbd236c555bcab7768d67203f86d37ede19dd975</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>f869e8fbd8aa1f037ad862cf6e8bbbf797ff49556fb100f2197be4ee196a89ae</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>f8144fa96c036a8204c7bc285e295f9cd2d1deb0379e39ee8a8414531104dc4a</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>f5db51115fa0c910262828d0943171d640b4748e51c9a140d06ea81ae6ea1710</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>f538b035c3de87f9f8294bec272c1182f90832a4e86db1e47cbb1ab26c9f3a0b</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>ecefd9bb8b3783a81ab934b44eb3d84df5e58f0289f089ef6760264352cf878a</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>e0d89c88378dcb1b6c9ce2d2820f8d773613402998b8dcdb024858010dec72ed</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>db3b1f224aec1a7c58946d819d729d0903751d1867113aae5cca87e38c653cf4</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>c646199a9799b6158de419b1b7e36b46c7b7413d6c35bfffaeaa8700b2dcc427</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>bff4dd37febd5465e0091d9ea68006be475c0191bd8c7a79a44fbf4b99544ef1</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>bd270853db17f94c2b8e4bd9fa089756a147ed45cbc44d6c2b0c78f361978906</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>b9afe016dbdba389000b01ce7645e7eea1b0a50827cded1cbaa48fbc715197bb</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>b5d202456ac2ce7d1285b9c0e2e5b7ddc03da1cbca51b5da98d9ad72e7f773b8</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>b160bd46b6efc6d79bfb76cf3eeacca2300050248969decba139e9e1cbeebf53</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>af4523186fe4a5e2833bbbe14939d8c3bd352a47a2f77592d8adcb569621ce02</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>a7c207b9b83648f69d6387780b1168e2f1eabd23ae6e162dd700ae8112f8b96c</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>952b34f6370294c5a0bb122febfaa80612fef1f32eddd48a3d0556c4286b7474</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>8e64bacaf40110547b334eadcb0792bdc891d7ae298fbfff1367125797b6036b</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>8a3d71c668574ad6e7406d3227ba5adc5a230dd3057edddc4d0ec5f8134d76c3</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>88d13669a994d2e04ec0a9940f07ab8aab8563eb845a9c13f2b0fec497df5b17</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>857f28b8fe31cf5db6d45d909547b151a66532951f26cda5f3320d2d4461b583</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>7e00bfb622072f53733074795ab581cf6d1a8b4fc269a50919dda6350209913c</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>74fbf3cc44dd070bd5cb87ca2eed03e1bbeec4fec644a25621052f0a73abbe84</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>61971d3cbf88d6658e5209de443e212100afc8f033057d9a4e79000f6f0f7cc4</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>571f8db67d463ae80098edc7a1a0cad59153ce6592e42d370a45df46f18a4ad8</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>3d4502066a338e19df58aa4936c37427feecce9ab8d43abff4a7367643ae39ce</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>310afba59ab8e1bda3ef750a64bf39133e15c89e8c7cf4ac65ee463b26b136ba</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>2eb3ef8a7a2c498e87f3820510752043b20cbe35b0cbd9af3f69e8b8fe482676</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>1f842f84750048bb44843c277edeaa8469697e97c4dbf8dc571ec552266bec9f</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>1b943afac4f476d523310b8e3afe7bca761b8cbaa9ea2b9f01237ca4652fc834</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>1817cc163482eb21308adbd43fb6be57fcb5ff11fd74b344469190bb48d8163b</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>1807549af1c8fdc5b04c564f4026e41790c554f339514d326f8b55cb7b9b4f79</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>10a5612044599128981cb41d71d7390c15e7a2a0c2848ad751c3da1cbec510a2</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>0f385cc69a93abeaf84994e7887cb173e889d309a515b55b2205805bdfe468a3</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>0d5e3483299242bf504bd3780487f66f2ec4f48a7b38baa6c6bc8ba16e4fb605</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>0cf6399db55d40bc790a399c6bbded375f5a278dc57a143e4b21ea3f402f551f</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>0c2ffed470e954d2bf22807ba52c1ffd1ecce15779c0afdf15c292e3444cf674</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>0afed8d1b7c36008de188c20d7f0e2283251a174261547aab7fb56e31d767666</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>08eb4366fc0722696edb03981f00778701266a2e57c40cd2e9d765bf8b0a34d0</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>02a733920c7e69469164316e3e96850d55fca9f5f9d19a241fad906466ec8ae8</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>01242b35b6def71e42cc985e97d618e2fabd616b16d23f7081d575364d09ca74</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>eaced2fcfdcbf3dca4dd77333aaab055345f3ab4</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>d5dab3f20d47bf4ca4910949015844d660e99ca9</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>9b546bd99272cf4689194d698c830a2510194722</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>9959e90d255c0221e9754db53e321ab4c7434488</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>33fe4c6f5e7803bc0b9d977abd8b816712cbf300</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>241ce8af441db2d61f3eb7852f434642739a6cc3</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>cf6ec2999b5d67df89a5350dfcff611d</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>a1649dec72c316587b10d92993aee1ec</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>23cea76078dd3829bd2b7e00f2bfe2ad</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>03c835b684b21ded9a4ab285e4f686a3</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>bc1qzz7xweq8ee2j35tq6r5m687kctq9huskt50edv</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>bc1qyd05q2m5qt3nwpd3gcqkyer0gspqx5p6evcf7h</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>bc1qs3lv77udkap2enxv928x59yuact5df4t95rsqr</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>bc1qr9l0gcl0nvmngap6ueyy5gqdwvm34kdmtevjyx</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>bc1qhpepeeh7hlz5jvrp50uhkz59lhakcfvme0w9qh</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>bc1qjep0vx2lap93455p7h29unruvr05cs242mrcah</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>bc1qgsuf5m9tgxuv4ylxcmx8eeqn3wmlmu7f49zkus</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>bc1qc48q628t93xwzljtvurpqhcvahvesadpwqtsza</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>bc1qaselp9nhejc3safcq3vn5wautx6w33x0llk7dl</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>bc1q9cj0n9k2m282x0nzj6lhqjvhkkd4h95sewek83</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>bc1q6zkemtyyrre2mkk23g93zyq98ygrygvx7z2q0t</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>bc1q6rsj3cn37dngypu5kad9gdw5ykhctpwhjvun3z</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>bc1q5uc0fdnz0ve5pg4nl4upa9ly586t6wmnghfe7x</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>bc1q4vr25xkth35qslenqwd7aw020w85qrvlrhv7hc</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>45.86.162.34</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>45.164.21.13</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>192.137.100.98</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>31.184.192.44</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold fs-6'>Email-Addr</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>admin@encryption-support.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>84.17.52.135</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>222.252.53.33</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>159.203.70.39</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>141.98.87.124</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>4306c5d152cdd86f3506f91633ef3ae7d8cf0dd25f3e37bec43423c4742f4c42</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>144.172.83.13</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>4c32ef0836a0af7025e97c6253054bca</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>bc1qvpk8ksl3my6kjezjss9p28cqj4dmpmmjx5yl3y</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>bc1qp7h9fszlqxjwyfhv0upparnsgx56x7v7wfx4x7</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>bc1qhtwfcysclc7pck2y3vmjtpzkaezhcm6perc99x</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>bc1qft3s53ur5uq5ru6sl3zyr247dpr55mnggwucd3</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>38.108.119.121</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>64.235.39.82</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>aa3f37a75d3ba2ee74955c06eb308ad0cd6bca2e</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>45.91.83.176</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>45.32.229.66</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>f1103e627311e73d5f29e877243e7ca203292f9419303c661aec57745eb4f26c</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold fs-6'>Email-Addr</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>admin@cuba-supp.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>250cb957728dba0f3ae2c1c1e9bae241</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold fs-6'>Email-Addr</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>cuba_support@exploit.im</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>193.34.167.17</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>103.114.163.197</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>213.32.39.43</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>107.189.10.143</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>37.44.253.21</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>108.170.31.115</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>199.58.81.140</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>154.35.175.225</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>128.31.0.34</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>194.109.206.212</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-02</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>104.217.8.100</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-08-17</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>combinedresidency.org</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>pdfreader</span>
										<span className='badge badge-light-info me-2 mb-1'>rat</span>
										<span className='badge badge-light-info me-2 mb-1'>kerbercache</span>
										<span className='badge badge-light-info me-2 mb-1'>solarwinds</span>
										<span className='badge badge-light-info me-2 mb-1'>zerologon</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2596</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>keepass</span>
										<span className='badge badge-light-info me-2 mb-1'>tropical scorpius</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-08-11</div></td>
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
								<td><div className='text-dark fw-bold fs-6'>Email-Addr</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>poncho@combinedresidency.org</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>tropical scorpius</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2596</span>
										<span className='badge badge-light-info me-2 mb-1'>zerologon</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>kerbercache</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-08-11</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>cfe7b462a8224b2fbf2b246f05973662bdabc2c4e8f4728c9a1b977fac010c15</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2596</span>
										<span className='badge badge-light-info me-2 mb-1'>kerbercache</span>
										<span className='badge badge-light-info me-2 mb-1'>tropical scorpius</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>zerologon</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-08-11</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>b5978cf7d0c275d09bedf09f07667e139ad7fed8f9e47742e08c914c5cf44a53</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>unc2596</span>
										<span className='badge badge-light-info me-2 mb-1'>zerologon</span>
										<span className='badge badge-light-info me-2 mb-1'>tropical scorpius</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>kerbercache</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-08-11</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>ab5a3bbad1c4298bc287d0ac8c27790d68608393822da2365556ba99d52c5dfb</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>zerologon</span>
										<span className='badge badge-light-info me-2 mb-1'>kerbercache</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2596</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>tropical scorpius</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-08-11</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>a4665231bad14a2ac9f2e20a6385e1477c299d97768048cb3e9df6b45ae54eb8</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>zerologon</span>
										<span className='badge badge-light-info me-2 mb-1'>kerbercache</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2596</span>
										<span className='badge badge-light-info me-2 mb-1'>tropical scorpius</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-08-11</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>6866e82d0f6f6d8cf5a43d02ad523f377bb0b374d644d2f536ec7ec18fdaf576</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>tropical scorpius</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2596</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>kerbercache</span>
										<span className='badge badge-light-info me-2 mb-1'>zerologon</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-08-11</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>3496e4861db584cc3239777e137f4022408fb6a7c63152c57e019cf610c8276e</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>kerbercache</span>
										<span className='badge badge-light-info me-2 mb-1'>tropical scorpius</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2596</span>
										<span className='badge badge-light-info me-2 mb-1'>zerologon</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-08-11</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>324ccd4bf70a66cc14b1c3746162b908a688b2b124ad9db029e5bd42197cfe99</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>kerbercache</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>zerologon</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>tropical scorpius</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2596</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-08-11</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>24e018c8614c70c940c3b5fa8783cb2f67cb13f08112430a4d10013e0a324eaa</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>unc2596</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>tropical scorpius</span>
										<span className='badge badge-light-info me-2 mb-1'>zerologon</span>
										<span className='badge badge-light-info me-2 mb-1'>kerbercache</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-08-11</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>0eff3e8fd31f553c45ab82cc5d88d0105626d0597afa5897e78ee5a7e34f71b3</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>tropical scorpius</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2596</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>kerbercache</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>zerologon</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-08-11</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>0a3517d8d382a0a45334009f71e48114d395a22483b01f171f2c3d4a9cfdbfbf</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>kerbercache</span>
										<span className='badge badge-light-info me-2 mb-1'>tropical scorpius</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2596</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>zerologon</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-08-11</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>07905de4b4be02665e280a56678c7de67652aee318487a44055700396d37ecd0</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>zerologon</span>
										<span className='badge badge-light-info me-2 mb-1'>tropical scorpius</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2596</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>kerbercache</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-08-11</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>8ff14e53d77b5e1600d522a09009e2591accfb29</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>zerologon</span>
										<span className='badge badge-light-info me-2 mb-1'>kerbercache</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2596</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>tropical scorpius</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-08-11</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>832a9552e786b4ca7c960bc4b1de18e854944c49</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>zerologon</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>kerbercache</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2596</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>tropical scorpius</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-08-11</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>3f82737550fbcc24c5724536b542fd5e6bb50278</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>kerbercache</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>tropical scorpius</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2596</span>
										<span className='badge badge-light-info me-2 mb-1'>zerologon</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-08-11</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>91d650d54ae1442c8900b6e2e4aa284a</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>tropical scorpius</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2596</span>
										<span className='badge badge-light-info me-2 mb-1'>zerologon</span>
										<span className='badge badge-light-info me-2 mb-1'>kerbercache</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-08-11</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>499eec3612c0f7597296397fb77b04c8</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2596</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>zerologon</span>
										<span className='badge badge-light-info me-2 mb-1'>kerbercache</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>tropical scorpius</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-08-11</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>2f46cf0e841677a362d70c8397466698</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>kerbercache</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>zerologon</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2596</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>tropical scorpius</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-08-11</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>3febf726ffb4f4a4186571d05359d2851e52d5612c5818b2b167160d367f722c</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>tropical scorpius</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>zerologon</span>
										<span className='badge badge-light-info me-2 mb-1'>kerbercache</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2596</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-08-11</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>optasko.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>zerologon</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2596</span>
										<span className='badge badge-light-info me-2 mb-1'>tropical scorpius</span>
										<span className='badge badge-light-info me-2 mb-1'>kerbercache</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>rat</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-08-11</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>af6561ad848aa1ba53c62a323de230b18cfd30d8795d4af36bf1ce6c28e3fd4e</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>kerbercache</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>tropical scorpius</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2596</span>
										<span className='badge badge-light-info me-2 mb-1'>zerologon</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-08-11</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>820ba270b0c777347658fab42f1c2f5cddf6adf5</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>tropical scorpius</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2596</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>zerologon</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>kerbercache</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-08-11</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>5f2d265f41a00ca041fbb6c99444d275</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2596</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>zerologon</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>tropical scorpius</span>
										<span className='badge badge-light-info me-2 mb-1'>kerbercache</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-08-11</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>1450f7c85bfec4f5ba97bcec4249ae234158a0bf9a63310e3801a00d30d9abcc</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>tropical scorpius</span>
										<span className='badge badge-light-info me-2 mb-1'>kerbercache</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2596</span>
										<span className='badge badge-light-info me-2 mb-1'>zerologon</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-08-11</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>7389d1bd0c44450cfd995956f7470745f1af0bf5</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>kerbercache</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2596</span>
										<span className='badge badge-light-info me-2 mb-1'>tropical scorpius</span>
										<span className='badge badge-light-info me-2 mb-1'>zerologon</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-08-11</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>63f6e59406f06ac58ff74430fca45301</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2596</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>kerbercache</span>
										<span className='badge badge-light-info me-2 mb-1'>tropical scorpius</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>zerologon</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-08-11</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>64.52.169.174</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cloud-south</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>cobaltstrike</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-01</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>94.103.9.79</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>foxcloud</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>cobaltstrike</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-31</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>185.153.199.169</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>rminjinering</span>
										<span className='badge badge-light-info me-2 mb-1'>cobaltstrike</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-30</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>92.222.172.39</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>cobaltstrike</span>
										<span className='badge badge-light-info me-2 mb-1'>ovh</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-30</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>149.255.35.131</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>hvc-as</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>cobaltstrike</span>
										
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
								<td><div className='text-dark fw-bold fs-6'>IPv4-Addr</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>23.227.198.246</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>hvc-as</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cobaltstrike</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>9aa1f37517458d635eae4f9b43cb4770880ea0ee171e7e4ad155bbdee0cbe732</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
										<span className='badge badge-light-info me-2 mb-1'>yanluowang</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>canthroid</span>
										<span className='badge badge-light-info me-2 mb-1'>grabchrome</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>browserpassview</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>credential stealer</span>
										<span className='badge badge-light-info me-2 mb-1'>eamfo</span>
										<span className='badge badge-light-info me-2 mb-1'>thieflock</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>misp-scraper</span>
										<span className='badge badge-light-info me-2 mb-1'>complete</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>exmatter</span>
										<span className='badge badge-light-info me-2 mb-1'>grabff</span>
										<span className='badge badge-light-info me-2 mb-1'>blog-post</span>
										<span className='badge badge-light-info me-2 mb-1'>collection</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>13ab5762ff5023163b1ca7c7749112b3673cd3db</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>grabff</span>
										<span className='badge badge-light-info me-2 mb-1'>eamfo</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>grabchrome</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>browserpassview</span>
										<span className='badge badge-light-info me-2 mb-1'>exmatter</span>
										<span className='badge badge-light-info me-2 mb-1'>credential stealer</span>
										<span className='badge badge-light-info me-2 mb-1'>thieflock</span>
										<span className='badge badge-light-info me-2 mb-1'>canthroid</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
										<span className='badge badge-light-info me-2 mb-1'>yanluowang</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>6345ac3f61b9f4ce64e82d3896baf1fa</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>exmatter</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>browserpassview</span>
										<span className='badge badge-light-info me-2 mb-1'>thieflock</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>grabchrome</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>grabff</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>credential stealer</span>
										<span className='badge badge-light-info me-2 mb-1'>eamfo</span>
										<span className='badge badge-light-info me-2 mb-1'>canthroid</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>yanluowang</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>3a8b7c1fe9bd9451c0a51e4122605efc98e7e4e13ed117139a13e4749e211ed0</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>zerologon</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hancitor</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>kerbercache</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>tropical scorpius</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2596</span>
										<span className='badge badge-light-info me-2 mb-1'>ficker</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>8a06c836c05537fcd8c600141073132d28e1172d</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>unc2596</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>kerbercache</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>ficker</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hancitor</span>
										<span className='badge badge-light-info me-2 mb-1'>tropical scorpius</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>25a089f2082a5fcb0f4c1a12724a5521</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>kerbercache</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>ficker</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>zerologon</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2596</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>tropical scorpius</span>
										<span className='badge badge-light-info me-2 mb-1'>hancitor</span>
										
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
								<td><div className='text-dark fw-bold fs-6'>IPv4-Addr</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>79.141.169.220</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cobaltstrike</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>tele-as tele asia limited</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>91889658f1c8e1462f06f019b842f109</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>tropical scorpius</span>
										<span className='badge badge-light-info me-2 mb-1'>kerbercache</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2596</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>zerologon</span>
										
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
								<td><div className='text-dark fw-bold fs-6'>IPv4-Addr</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>86.59.21.38</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										
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
								<td><div className='text-dark fw-bold fs-6'>IPv4-Addr</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>195.54.160.149</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-44228</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>rogue-ldap</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>log4j</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>141b2190f51397dbd0dfde0e3904b264c91b6f81febc823ff0c33da980b69944</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>finance</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>a17c21b909c56d93d978014e63fb06926eaea8e7</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>finance</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										
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
								<td><div className='text-dark fw-bold fs-6'>IPv4-Addr</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>204.13.164.118</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>malicious batch script</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>vbs downloader</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>36bc32becf287402bf0e9c918de22d886a74c501a33aa08dcb9be2f222fa6e24</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>kerbercache</span>
										<span className='badge badge-light-info me-2 mb-1'>tropical scorpius</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2596</span>
										<span className='badge badge-light-info me-2 mb-1'>zerologon</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>33a6b39fbe8ec45afab14af88fd6fa8e96885bf1</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>zerologon</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2596</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>kerbercache</span>
										<span className='badge badge-light-info me-2 mb-1'>tropical scorpius</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>75b55bb34dac9d02740b9ad6b6820360</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>finance</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										
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
								<td><div className='text-dark fw-bold fs-6'>IPv4-Addr</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>128.31.0.39</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>trojan</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>blog-post</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-23</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>131.188.40.189</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>blog-post</span>
										<span className='badge badge-light-info me-2 mb-1'>trojan</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-23</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>193.23.244.244</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>blog-post</span>
										<span className='badge badge-light-info me-2 mb-1'>cuba ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>romcom</span>
										<span className='badge badge-light-info me-2 mb-1'>critical infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>espionage</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>industrial spy</span>
										<span className='badge badge-light-info me-2 mb-1'>hancintor</span>
										<span className='badge badge-light-info me-2 mb-1'>trojan</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-23</div></td>
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

export {Cuba}
