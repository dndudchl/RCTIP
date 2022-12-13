/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'

type Props = {
  className: string
}

const Medusalocker: React.FC<Props> = ({className}) => {
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
								<td><div className='text-dark fw-bold fs-6'>Email-Addr</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>zlo@tfwno.gf</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>zlo@keemail.me</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>zlo@keem.ne</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>willyhill1960@tutanota.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>unlockmeplease@airmail.cc</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>unlockfile@cock.li</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>support@ypsotecs.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>support@securycasts.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>support@novibmaker.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>support@itwgset.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>support@imfoodst.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>support@faneridges.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>support@fanbridges.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>support@exorints.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>support@exoprints.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>support@careersill.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>soterissylla@wyseil.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>rpd@keemail.me</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>rescuer@tutanota.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>rapid@aaathats3as.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>pool1256@tutanota.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>perfection@bestkoronavirus.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>mulierfagus@rdhos.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>korona@bestkoronavirus.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>karloskolorado@tutanota.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>ithelp@wholeness.business</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>ithelp@decorous.cyou</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>ithelp02@wholness.business</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>ithelp02@decorous.cyou</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>ithelp01@wholeness.business</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>ithelp01@decorous.cyou</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>helper@buildingwin.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>helper@atacdi.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>gsupp@techmail.info</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>gsupp@onionmail.org</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>fucktheworld1448@cock.li</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>fast-help@inbox.lv</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>encrypt2020@cock.li</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>emd@jitjat.org</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>emaila.elaich@iav.ac.ma</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>dirhelp@keemail.me</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>diniaminius@winrof.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>dec_restore@prontonmail.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>cmd@jitjat.org</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>bitcoin@sitesoutheat.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>bitcoin@mobtouches.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>best666decoder@tutanota.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>beacon@msgsafe.io</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>beacon@jitjat.org</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>ballioverus@quocor.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>777decoder777@tfwno.gf</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>qd7pcafncosqfqu3ha6fcx4h6sr7tzwagzpcdcnytiw3b6varaeqv5yd.onion</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>medusacegu2ufmc3kx2kkqicrlcxdettsjcenhjena6uannk5f4ffuyd.onion</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>gvlay6y4g53rxdi5.onion</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>http://medusacegu2ufmc3kx2kkqicrlcxdettsjcenhjena6uannk5f4ffuyd.onion/leakdata/paigesmusic-leakdata-closed-part1</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>http://gvlay6y4g53rxdi5.onion/21-8P4ZLCsMETPaLw9MkSlXJsNZWdHe0rxjt-XmBgZLWlm5ULGFCOJFuVdEymmxysofwu</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>http://gvlay6u4g53rxdi5.onion/8-grp514hncgblilsjtd32hg6jtbyhlocr5pqjswxfgf2oragnl3pqno6fkqcimqin</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>http://gvlay6u4g53rxdi5.onion/8-gRp514hncgb1i1sjtD32hG6jTbUh1ocR-Uola2Fo30KTJvZX0otYZgTh5txmKwUNe</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>http://gvlay6u4g53rxdi5.onion/8-Ww5sCBhsL8eM4PeAgsfgfa9lrqa81r31-tDQRZCAUe4164X532j9Ky16IBN9StWTH</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>http://gvlay6u4g53rxdi5.onion/6-iSm1B1Ehljh8HYuXGym4Xyu1WdwsR2Av-6tXiw1BImsqoLh7pd207Rl6XYoln7sId</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>http://gvlay6u4g53rxdi5.onion/2l-8P4ZLCsMTPaLw9MkSlXJsNZWdHeOrxjtE9lck1MuXPYo29daQys6gomZZXUImN7Z</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>http://gvlay6u4g53rxdi5.onion/21-wIq5kK9gGKiTmyups1U6fABj1VnXIYRB-I5xek6PG2EbWlPC7C1rXfsqJBlWlFFfY</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>http://gvlay6u4g53rxdi5.onion/21-E6UQFCEuCn4KvtAh4TonRTpyHqFo6F6L-uGHwkkWCoUtBbZWN50sSS4Ds8RABkrKy</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>http://gvlay6u4g53rxdi5.onion/21-E6UQFCEuCn4KvtAh4TonRTpyHqFo6F6L-Tj3PRnQlpHc9OftRVDGAWUulvE80yZbc</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>http://gvlay6u4g53rxdi5.onion/21-E6UQFCEuCn4KvtAh4TonRTpyHqFo6F6L-OWQwD1w1Td7hY7IGUUjxmHMoFSQW6blg</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>http://gvlay6u4g53rxdi5.onion/21-8P4ZLCsMTPaLw9MkSlXJsNZWdHe0rxjt-kB4rQXGKyxGiLyw7YDsMKSBjyfdwcyxo</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>http://gvlay6u4g53rxdi5.onion/21-8P4ZLCsMTPaLw9MkSlXJsNZWdHe0rxjt-bET6JbB9vEMZ7qYBPqUMCxOQExFx4iOi</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>http://gvlay6u4g53rxdi5.onion/21-8P4ZLCsMTPaLw9MkSlXJsNZWdHe0rxjt-DcaE9HeHywqSHvdcIwOndCS4PuWASX8g</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>bc1qz3lmcw4k58n79wpzm550r5pkzxc2h8rwmmu6xm</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>bc1qy34v0zv6wu0cugea5xjlxagsfwgunwkzc0xcjj</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>bc1q9jg45a039tn83jk2vhdpranty2y8tnpnrk9k5q</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>1PormUgPR72yv2FRKSVY27U4ekWMKobWjg</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>1PopeZ4LNLanisswLndAJB1QntTF8hpLsD</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>1HdgQM9bjX7u7vWJnfErY4MWGBQJi5mVWV</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>1HZHhdJ6VdwBLCFhdu7kDVZN9pb3BWeUED</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>1HEDP3c3zPwiqUaYuWZ8gBFdAQQSa6sMGw</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>1Edcufenw1BB4ni9UadJpQh9LVx9JGtKpP</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>1DyMbw6R9PbJqfUSDcK5729xQ57yJrE8BC</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>1DeNHM2eTqHp5AszTsUiS4WDHWkGc5UxHf</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>1DRxUFhvJjGUdojCzMWSLmwx7Qxn79XbJq</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>1AereQUh8yjNPs9Wzeg1Le47dsqC8NNaNM</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>1AbRxRfP6yHePpi7jmDZkS4Mfpm1ZiatH5</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>18wRbb94CjyTGkUp32ZM7krCYCB9MXUq42</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>184ZcAoxkvimvVZaj8jZFujC7EwR3BKWvf</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>14oH2h12LvQ7BYBufcrY5vfKoCq2hTPoev</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>14cATAzXwD7CQf35n8Ea5pKJPfhM6jEHak</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>12xd6KrWVtgHEJHKPEfXwMVWuFK4k1FCUF</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>dec_helper@excic.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>dec_helper@dremno.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>decoder83540@cock.li</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>1.2.2 - ransomware-as-a-service (raas)</span>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>gvlay6u4g53rxdi5.onion</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-01</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>38ad791e5f0df27a55116ec18f2c31cc41feaaf7d235d85497a6cfa39ebfbebb</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-30</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>8894becff9f3ebc9c2d734b5f3341fd73017ef3bd42c2a40008b3325586cd0ee</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-30</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>613f0384286bf9956143e5cd7f885cc9b2cf30acaab2fe67a891ff26aaa162fc</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-30</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>4dd950fcdcd8483ec9346b4a5214931134975c439cf463daa3a0518cfc5db9a6</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>medusalocker</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-30</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>5e176f2514481137618db5592fd84d13</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>tanglebot</span>
										<span className='badge badge-light-info me-2 mb-1'>medusa</span>
										<span className='badge badge-light-info me-2 mb-1'>covid19</span>
										<span className='badge badge-light-info me-2 mb-1'>html injection</span>
										<span className='badge badge-light-info me-2 mb-1'>android</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-29</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>368afeda7af69f329e896dc86e9e4187a59d2007e0e4b47af30a1c117da0d792</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>covid19</span>
										<span className='badge badge-light-info me-2 mb-1'>tanglebot</span>
										<span className='badge badge-light-info me-2 mb-1'>medusa</span>
										<span className='badge badge-light-info me-2 mb-1'>html injection</span>
										<span className='badge badge-light-info me-2 mb-1'>android</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-29</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>Hostname</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>sock.godforgiveuss.live</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>html injection</span>
										<span className='badge badge-light-info me-2 mb-1'>android</span>
										<span className='badge badge-light-info me-2 mb-1'>tanglebot</span>
										<span className='badge badge-light-info me-2 mb-1'>covid19</span>
										<span className='badge badge-light-info me-2 mb-1'>medusa</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-29</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>4453dec6b7322a699bc5c1a5d3982a5f76904f57</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>medusa</span>
										<span className='badge badge-light-info me-2 mb-1'>covid19</span>
										<span className='badge badge-light-info me-2 mb-1'>android</span>
										<span className='badge badge-light-info me-2 mb-1'>tanglebot</span>
										<span className='badge badge-light-info me-2 mb-1'>html injection</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-29</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>2f0693adf07eb36220c04f1de2385029</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>medusa</span>
										<span className='badge badge-light-info me-2 mb-1'>android</span>
										<span className='badge badge-light-info me-2 mb-1'>covid19</span>
										<span className='badge badge-light-info me-2 mb-1'>html injection</span>
										<span className='badge badge-light-info me-2 mb-1'>tanglebot</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-29</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>23873bf2670cf64c2440058130548d4e4da412dd</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>sparc</span>
										<span className='badge badge-light-info me-2 mb-1'>remadmin</span>
										<span className='badge badge-light-info me-2 mb-1'>powersploit</span>
										<span className='badge badge-light-info me-2 mb-1'>solaris</span>
										<span className='badge badge-light-info me-2 mb-1'>evilsun</span>
										<span className='badge badge-light-info me-2 mb-1'>logbleach</span>
										<span className='badge badge-light-info me-2 mb-1'>cyberpartisans</span>
										<span className='badge badge-light-info me-2 mb-1'>g0069</span>
										<span className='badge badge-light-info me-2 mb-1'>sysaid</span>
										<span className='badge badge-light-info me-2 mb-1'>secure socket funneling</span>
										<span className='badge badge-light-info me-2 mb-1'>cve20190708</span>
										<span className='badge badge-light-info me-2 mb-1'>iran</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>openshackle</span>
										<span className='badge badge-light-info me-2 mb-1'>backdoor</span>
										<span className='badge badge-light-info me-2 mb-1'>bluekeep</span>
										<span className='badge badge-light-info me-2 mb-1'>procdump</span>
										<span className='badge badge-light-info me-2 mb-1'>seedworm</span>
										<span className='badge badge-light-info me-2 mb-1'>autorisee</span>
										<span className='badge badge-light-info me-2 mb-1'>remcomsvc</span>
										<span className='badge badge-light-info me-2 mb-1'>temp.zagros</span>
										<span className='badge badge-light-info me-2 mb-1'>mori backdoor</span>
										<span className='badge badge-light-info me-2 mb-1'>slapstick</span>
										<span className='badge badge-light-info me-2 mb-1'>pupyrat</span>
										<span className='badge badge-light-info me-2 mb-1'>log4j</span>
										<span className='badge badge-light-info me-2 mb-1'>isaacwiper</span>
										<span className='badge badge-light-info me-2 mb-1'>poshc2</span>
										<span className='badge badge-light-info me-2 mb-1'>mercury</span>
										<span className='badge badge-light-info me-2 mb-1'>hermeticwiper</span>
										<span className='badge badge-light-info me-2 mb-1'>belarus</span>
										<span className='badge badge-light-info me-2 mb-1'>mimikatz</span>
										<span className='badge badge-light-info me-2 mb-1'>rdp</span>
										<span className='badge badge-light-info me-2 mb-1'>hermeticwizard</span>
										<span className='badge badge-light-info me-2 mb-1'>solaris pam</span>
										<span className='badge badge-light-info me-2 mb-1'>mission</span>
										<span className='badge badge-light-info me-2 mb-1'>oksolo</span>
										<span className='badge badge-light-info me-2 mb-1'>lemonstick</span>
										<span className='badge badge-light-info me-2 mb-1'>solaris server</span>
										<span className='badge badge-light-info me-2 mb-1'>hermeticransom</span>
										<span className='badge badge-light-info me-2 mb-1'>apt</span>
										<span className='badge badge-light-info me-2 mb-1'>pwdump</span>
										<span className='badge badge-light-info me-2 mb-1'>white</span>
										<span className='badge badge-light-info me-2 mb-1'>rollcoast</span>
										<span className='badge badge-light-info me-2 mb-1'>ukraine</span>
										<span className='badge badge-light-info me-2 mb-1'>medusa</span>
										<span className='badge badge-light-info me-2 mb-1'>crackmapexec</span>
										<span className='badge badge-light-info me-2 mb-1'>pupy</span>
										<span className='badge badge-light-info me-2 mb-1'>muddywater</span>
										<span className='badge badge-light-info me-2 mb-1'>middle east</span>
										<span className='badge badge-light-info me-2 mb-1'>chisel</span>
										<span className='badge badge-light-info me-2 mb-1'>unc1945</span>
										<span className='badge badge-light-info me-2 mb-1'>non-classifiees</span>
										<span className='badge badge-light-info me-2 mb-1'>calypso</span>
										<span className='badge badge-light-info me-2 mb-1'>linux</span>
										<span className='badge badge-light-info me-2 mb-1'>lsass</span>
										<span className='badge badge-light-info me-2 mb-1'>powgoop</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-25</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>d505533ae75f89f98554765aaf2a330a</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>crackmapexec</span>
										<span className='badge badge-light-info me-2 mb-1'>oksolo</span>
										<span className='badge badge-light-info me-2 mb-1'>logbleach</span>
										<span className='badge badge-light-info me-2 mb-1'>solaris</span>
										<span className='badge badge-light-info me-2 mb-1'>mission</span>
										<span className='badge badge-light-info me-2 mb-1'>pupy</span>
										<span className='badge badge-light-info me-2 mb-1'>medusa</span>
										<span className='badge badge-light-info me-2 mb-1'>poshc2</span>
										<span className='badge badge-light-info me-2 mb-1'>pupyrat</span>
										<span className='badge badge-light-info me-2 mb-1'>evilsun</span>
										<span className='badge badge-light-info me-2 mb-1'>rollcoast</span>
										<span className='badge badge-light-info me-2 mb-1'>unc1945</span>
										<span className='badge badge-light-info me-2 mb-1'>linux</span>
										<span className='badge badge-light-info me-2 mb-1'>mimikatz</span>
										<span className='badge badge-light-info me-2 mb-1'>solaris pam</span>
										<span className='badge badge-light-info me-2 mb-1'>slapstick</span>
										<span className='badge badge-light-info me-2 mb-1'>solaris server</span>
										<span className='badge badge-light-info me-2 mb-1'>remcomsvc</span>
										<span className='badge badge-light-info me-2 mb-1'>powersploit</span>
										<span className='badge badge-light-info me-2 mb-1'>openshackle</span>
										<span className='badge badge-light-info me-2 mb-1'>procdump</span>
										<span className='badge badge-light-info me-2 mb-1'>lemonstick</span>
										<span className='badge badge-light-info me-2 mb-1'>sparc</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-25</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>abaf1d04982449e0f7ee8a34577fe8af</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>linux</span>
										<span className='badge badge-light-info me-2 mb-1'>poshc2</span>
										<span className='badge badge-light-info me-2 mb-1'>procdump</span>
										<span className='badge badge-light-info me-2 mb-1'>solaris server</span>
										<span className='badge badge-light-info me-2 mb-1'>openshackle</span>
										<span className='badge badge-light-info me-2 mb-1'>sparc</span>
										<span className='badge badge-light-info me-2 mb-1'>mimikatz</span>
										<span className='badge badge-light-info me-2 mb-1'>remcomsvc</span>
										<span className='badge badge-light-info me-2 mb-1'>solaris pam</span>
										<span className='badge badge-light-info me-2 mb-1'>evilsun</span>
										<span className='badge badge-light-info me-2 mb-1'>mission</span>
										<span className='badge badge-light-info me-2 mb-1'>unc1945</span>
										<span className='badge badge-light-info me-2 mb-1'>crackmapexec</span>
										<span className='badge badge-light-info me-2 mb-1'>solaris</span>
										<span className='badge badge-light-info me-2 mb-1'>lemonstick</span>
										<span className='badge badge-light-info me-2 mb-1'>rollcoast</span>
										<span className='badge badge-light-info me-2 mb-1'>medusa</span>
										<span className='badge badge-light-info me-2 mb-1'>pupy</span>
										<span className='badge badge-light-info me-2 mb-1'>logbleach</span>
										<span className='badge badge-light-info me-2 mb-1'>pupyrat</span>
										<span className='badge badge-light-info me-2 mb-1'>slapstick</span>
										<span className='badge badge-light-info me-2 mb-1'>powersploit</span>
										<span className='badge badge-light-info me-2 mb-1'>oksolo</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-25</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>91baa34fc5e7e44b470cfd131c1f4503</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>openshackle</span>
										<span className='badge badge-light-info me-2 mb-1'>remcomsvc</span>
										<span className='badge badge-light-info me-2 mb-1'>sparc</span>
										<span className='badge badge-light-info me-2 mb-1'>solaris server</span>
										<span className='badge badge-light-info me-2 mb-1'>unc1945</span>
										<span className='badge badge-light-info me-2 mb-1'>rollcoast</span>
										<span className='badge badge-light-info me-2 mb-1'>mimikatz</span>
										<span className='badge badge-light-info me-2 mb-1'>logbleach</span>
										<span className='badge badge-light-info me-2 mb-1'>lemonstick</span>
										<span className='badge badge-light-info me-2 mb-1'>pupyrat</span>
										<span className='badge badge-light-info me-2 mb-1'>procdump</span>
										<span className='badge badge-light-info me-2 mb-1'>linux</span>
										<span className='badge badge-light-info me-2 mb-1'>powersploit</span>
										<span className='badge badge-light-info me-2 mb-1'>evilsun</span>
										<span className='badge badge-light-info me-2 mb-1'>solaris pam</span>
										<span className='badge badge-light-info me-2 mb-1'>poshc2</span>
										<span className='badge badge-light-info me-2 mb-1'>slapstick</span>
										<span className='badge badge-light-info me-2 mb-1'>mission</span>
										<span className='badge badge-light-info me-2 mb-1'>crackmapexec</span>
										<span className='badge badge-light-info me-2 mb-1'>oksolo</span>
										<span className='badge badge-light-info me-2 mb-1'>medusa</span>
										<span className='badge badge-light-info me-2 mb-1'>pupy</span>
										<span className='badge badge-light-info me-2 mb-1'>solaris</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-25</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>6983f7001de10f4d19fc2d794c3eb534</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>lemonstick</span>
										<span className='badge badge-light-info me-2 mb-1'>lsass</span>
										<span className='badge badge-light-info me-2 mb-1'>remcomsvc</span>
										<span className='badge badge-light-info me-2 mb-1'>secure socket funneling</span>
										<span className='badge badge-light-info me-2 mb-1'>autorisee</span>
										<span className='badge badge-light-info me-2 mb-1'>pupyrat</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>temp.zagros</span>
										<span className='badge badge-light-info me-2 mb-1'>log4j</span>
										<span className='badge badge-light-info me-2 mb-1'>chisel</span>
										<span className='badge badge-light-info me-2 mb-1'>cyberpartisans</span>
										<span className='badge badge-light-info me-2 mb-1'>remadmin</span>
										<span className='badge badge-light-info me-2 mb-1'>mimikatz</span>
										<span className='badge badge-light-info me-2 mb-1'>logbleach</span>
										<span className='badge badge-light-info me-2 mb-1'>non-classifiees</span>
										<span className='badge badge-light-info me-2 mb-1'>medusa</span>
										<span className='badge badge-light-info me-2 mb-1'>middle east</span>
										<span className='badge badge-light-info me-2 mb-1'>bluekeep</span>
										<span className='badge badge-light-info me-2 mb-1'>iran</span>
										<span className='badge badge-light-info me-2 mb-1'>poshc2</span>
										<span className='badge badge-light-info me-2 mb-1'>oksolo</span>
										<span className='badge badge-light-info me-2 mb-1'>seedworm</span>
										<span className='badge badge-light-info me-2 mb-1'>powersploit</span>
										<span className='badge badge-light-info me-2 mb-1'>hermeticwiper</span>
										<span className='badge badge-light-info me-2 mb-1'>sysaid</span>
										<span className='badge badge-light-info me-2 mb-1'>ukraine</span>
										<span className='badge badge-light-info me-2 mb-1'>openshackle</span>
										<span className='badge badge-light-info me-2 mb-1'>hermeticransom</span>
										<span className='badge badge-light-info me-2 mb-1'>mori backdoor</span>
										<span className='badge badge-light-info me-2 mb-1'>cve20190708</span>
										<span className='badge badge-light-info me-2 mb-1'>rollcoast</span>
										<span className='badge badge-light-info me-2 mb-1'>unc1945</span>
										<span className='badge badge-light-info me-2 mb-1'>solaris pam</span>
										<span className='badge badge-light-info me-2 mb-1'>belarus</span>
										<span className='badge badge-light-info me-2 mb-1'>muddywater</span>
										<span className='badge badge-light-info me-2 mb-1'>solaris</span>
										<span className='badge badge-light-info me-2 mb-1'>procdump</span>
										<span className='badge badge-light-info me-2 mb-1'>isaacwiper</span>
										<span className='badge badge-light-info me-2 mb-1'>white</span>
										<span className='badge badge-light-info me-2 mb-1'>slapstick</span>
										<span className='badge badge-light-info me-2 mb-1'>linux</span>
										<span className='badge badge-light-info me-2 mb-1'>mercury</span>
										<span className='badge badge-light-info me-2 mb-1'>g0069</span>
										<span className='badge badge-light-info me-2 mb-1'>pupy</span>
										<span className='badge badge-light-info me-2 mb-1'>mission</span>
										<span className='badge badge-light-info me-2 mb-1'>pwdump</span>
										<span className='badge badge-light-info me-2 mb-1'>calypso</span>
										<span className='badge badge-light-info me-2 mb-1'>hermeticwizard</span>
										<span className='badge badge-light-info me-2 mb-1'>rdp</span>
										<span className='badge badge-light-info me-2 mb-1'>sparc</span>
										<span className='badge badge-light-info me-2 mb-1'>apt</span>
										<span className='badge badge-light-info me-2 mb-1'>solaris server</span>
										<span className='badge badge-light-info me-2 mb-1'>crackmapexec</span>
										<span className='badge badge-light-info me-2 mb-1'>backdoor</span>
										<span className='badge badge-light-info me-2 mb-1'>powgoop</span>
										<span className='badge badge-light-info me-2 mb-1'>evilsun</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-25</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>2eff2273d423a7ae6c68e3ddd96604bc</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>openshackle</span>
										<span className='badge badge-light-info me-2 mb-1'>procdump</span>
										<span className='badge badge-light-info me-2 mb-1'>oksolo</span>
										<span className='badge badge-light-info me-2 mb-1'>rollcoast</span>
										<span className='badge badge-light-info me-2 mb-1'>solaris pam</span>
										<span className='badge badge-light-info me-2 mb-1'>medusa</span>
										<span className='badge badge-light-info me-2 mb-1'>mission</span>
										<span className='badge badge-light-info me-2 mb-1'>pupy</span>
										<span className='badge badge-light-info me-2 mb-1'>logbleach</span>
										<span className='badge badge-light-info me-2 mb-1'>solaris server</span>
										<span className='badge badge-light-info me-2 mb-1'>poshc2</span>
										<span className='badge badge-light-info me-2 mb-1'>unc1945</span>
										<span className='badge badge-light-info me-2 mb-1'>lemonstick</span>
										<span className='badge badge-light-info me-2 mb-1'>slapstick</span>
										<span className='badge badge-light-info me-2 mb-1'>linux</span>
										<span className='badge badge-light-info me-2 mb-1'>solaris</span>
										<span className='badge badge-light-info me-2 mb-1'>remcomsvc</span>
										<span className='badge badge-light-info me-2 mb-1'>mimikatz</span>
										<span className='badge badge-light-info me-2 mb-1'>powersploit</span>
										<span className='badge badge-light-info me-2 mb-1'>sparc</span>
										<span className='badge badge-light-info me-2 mb-1'>crackmapexec</span>
										<span className='badge badge-light-info me-2 mb-1'>evilsun</span>
										<span className='badge badge-light-info me-2 mb-1'>pupyrat</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-25</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>0845835e18a3ed4057498250d30a11b1</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>oksolo</span>
										<span className='badge badge-light-info me-2 mb-1'>procdump</span>
										<span className='badge badge-light-info me-2 mb-1'>solaris server</span>
										<span className='badge badge-light-info me-2 mb-1'>solaris pam</span>
										<span className='badge badge-light-info me-2 mb-1'>poshc2</span>
										<span className='badge badge-light-info me-2 mb-1'>medusa</span>
										<span className='badge badge-light-info me-2 mb-1'>steelhound</span>
										<span className='badge badge-light-info me-2 mb-1'>evilsun</span>
										<span className='badge badge-light-info me-2 mb-1'>pupy</span>
										<span className='badge badge-light-info me-2 mb-1'>lemonstick</span>
										<span className='badge badge-light-info me-2 mb-1'>unc1945</span>
										<span className='badge badge-light-info me-2 mb-1'>winghook</span>
										<span className='badge badge-light-info me-2 mb-1'>crackmapexec</span>
										<span className='badge badge-light-info me-2 mb-1'>remcomsvc</span>
										<span className='badge badge-light-info me-2 mb-1'>openshackle</span>
										<span className='badge badge-light-info me-2 mb-1'>slapstick</span>
										<span className='badge badge-light-info me-2 mb-1'>powersploit</span>
										<span className='badge badge-light-info me-2 mb-1'>mimikatz</span>
										<span className='badge badge-light-info me-2 mb-1'>caketap</span>
										<span className='badge badge-light-info me-2 mb-1'>steelcorgi</span>
										<span className='badge badge-light-info me-2 mb-1'>logbleach</span>
										<span className='badge badge-light-info me-2 mb-1'>sparc</span>
										<span className='badge badge-light-info me-2 mb-1'>pupyrat</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2891</span>
										<span className='badge badge-light-info me-2 mb-1'>mission</span>
										<span className='badge badge-light-info me-2 mb-1'>linux</span>
										<span className='badge badge-light-info me-2 mb-1'>rollcoast</span>
										<span className='badge badge-light-info me-2 mb-1'>solaris</span>
										<span className='badge badge-light-info me-2 mb-1'>tinyshell</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-25</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>3c2fe308c0a563e06263bbacf793bbe9b2259d795fcc36b953793a7e499e7f71</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>oksolo</span>
										<span className='badge badge-light-info me-2 mb-1'>apt</span>
										<span className='badge badge-light-info me-2 mb-1'>mimikatz</span>
										<span className='badge badge-light-info me-2 mb-1'>pwdump</span>
										<span className='badge badge-light-info me-2 mb-1'>lemonstick</span>
										<span className='badge badge-light-info me-2 mb-1'>pupyrat</span>
										<span className='badge badge-light-info me-2 mb-1'>g0069</span>
										<span className='badge badge-light-info me-2 mb-1'>rollcoast</span>
										<span className='badge badge-light-info me-2 mb-1'>linux</span>
										<span className='badge badge-light-info me-2 mb-1'>ukraine</span>
										<span className='badge badge-light-info me-2 mb-1'>seedworm</span>
										<span className='badge badge-light-info me-2 mb-1'>pupy</span>
										<span className='badge badge-light-info me-2 mb-1'>muddywater</span>
										<span className='badge badge-light-info me-2 mb-1'>solaris pam</span>
										<span className='badge badge-light-info me-2 mb-1'>remadmin</span>
										<span className='badge badge-light-info me-2 mb-1'>cve20190708</span>
										<span className='badge badge-light-info me-2 mb-1'>rdp</span>
										<span className='badge badge-light-info me-2 mb-1'>secure socket funneling</span>
										<span className='badge badge-light-info me-2 mb-1'>white</span>
										<span className='badge badge-light-info me-2 mb-1'>autorisee</span>
										<span className='badge badge-light-info me-2 mb-1'>mission</span>
										<span className='badge badge-light-info me-2 mb-1'>sysaid</span>
										<span className='badge badge-light-info me-2 mb-1'>chisel</span>
										<span className='badge badge-light-info me-2 mb-1'>sparc</span>
										<span className='badge badge-light-info me-2 mb-1'>cyberpartisans</span>
										<span className='badge badge-light-info me-2 mb-1'>logbleach</span>
										<span className='badge badge-light-info me-2 mb-1'>hermeticwiper</span>
										<span className='badge badge-light-info me-2 mb-1'>backdoor</span>
										<span className='badge badge-light-info me-2 mb-1'>unc1945</span>
										<span className='badge badge-light-info me-2 mb-1'>evilsun</span>
										<span className='badge badge-light-info me-2 mb-1'>openshackle</span>
										<span className='badge badge-light-info me-2 mb-1'>hermeticwizard</span>
										<span className='badge badge-light-info me-2 mb-1'>poshc2</span>
										<span className='badge badge-light-info me-2 mb-1'>powgoop</span>
										<span className='badge badge-light-info me-2 mb-1'>bluekeep</span>
										<span className='badge badge-light-info me-2 mb-1'>belarus</span>
										<span className='badge badge-light-info me-2 mb-1'>crackmapexec</span>
										<span className='badge badge-light-info me-2 mb-1'>remcomsvc</span>
										<span className='badge badge-light-info me-2 mb-1'>non-classifiees</span>
										<span className='badge badge-light-info me-2 mb-1'>slapstick</span>
										<span className='badge badge-light-info me-2 mb-1'>isaacwiper</span>
										<span className='badge badge-light-info me-2 mb-1'>lsass</span>
										<span className='badge badge-light-info me-2 mb-1'>powersploit</span>
										<span className='badge badge-light-info me-2 mb-1'>temp.zagros</span>
										<span className='badge badge-light-info me-2 mb-1'>solaris server</span>
										<span className='badge badge-light-info me-2 mb-1'>solaris</span>
										<span className='badge badge-light-info me-2 mb-1'>medusa</span>
										<span className='badge badge-light-info me-2 mb-1'>iran</span>
										<span className='badge badge-light-info me-2 mb-1'>middle east</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>procdump</span>
										<span className='badge badge-light-info me-2 mb-1'>log4j</span>
										<span className='badge badge-light-info me-2 mb-1'>mercury</span>
										<span className='badge badge-light-info me-2 mb-1'>mori backdoor</span>
										<span className='badge badge-light-info me-2 mb-1'>cryptomining</span>
										<span className='badge badge-light-info me-2 mb-1'>calypso</span>
										<span className='badge badge-light-info me-2 mb-1'>hermeticransom</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-23</div></td>
								<td>
									<span className='bg-dark text-white fw-semibold p-1'>TLP:CLEAR</span>
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

export {Medusalocker}
