/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'

type Props = {
  className: string
}

const Hive: React.FC<Props> = ({className}) => {
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>b6b1ea26464c92c3d25956815c301caf6fa0da9723a2ef847e2bb9cd11563d8b</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>double extorsion</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-26</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>33aceb3dc0681a56226d4cfce32eee7a431e66f5c746a4d6dc7506a72b317277</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>double extorsion</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-26</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>d8dc26e2094869a0da78ecb47494c931419302dc</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>double extorsion</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-26</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>0e4d44dde522c07d09d9e3086cfae803</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>double extorsion</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-26</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>3858e95bcf18c692f8321e3f8380c39684edb90bb622f37911144950602cea21</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>double extorsion</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-26</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>822d89e7917d41a90f5f65bee75cad31fe13995e43f47ea9ea536862884efc25</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>double extorsion</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-26</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>25bfec0c3c81ab55cf85a57367c14cc6803a03e2e9b4afd72e7bbca9420fe7c5</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>double extorsion</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-26</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>da13022097518d123a91a3958be326da</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>double extorsion</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-26</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>12389b8af28307fd09fe080fd89802b4e616ed4c961f464f95fdb4b3f0aaf185</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>double extorsion</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-26</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>24a71ab462594d5a159bbf176588af951aba1381</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>double extorsion</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-26</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>bdf3d5f4f1b7c90dfc526340e917da9e188f04238e772049b2a97b4f88f711e3</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>double extorsion</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-26</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>d3b0102e6632be81ce158c909f583412</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>double extorsion</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-26</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>10bd0f1d3122d6575e882ba8f025eb11b0a95b61</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>double extorsion</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-26</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>afab34235b7f170150f180c7afb9e3b4e504a84559bbd03ab71e64e3b6541149</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-06</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>88b1d8a85bf9101bc336b01b9af4345ed91d3ec761554d167fe59f73af73f037</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-06</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>6e5d49f604730ef4c05cfe3f64a7790242e71b4ecf1dc5109d32e811acf0b053</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-06</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>481dc99903aa270d286f559b17194b1a25deca8a64a5ec4f13a066637900221e</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-06</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>36759cab7043cd7561ac6c3968832b30c9a442eff4d536e901d4ff70aef4d32d</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-06</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>33744c420884adf582c46a4b74cbd9c145f2e15a036bb1e557e89d6fd428e724</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-06</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>32ff0e5d87ec16544b6ff936d6fd58023925c3bdabaf962c492f6b078cb01914</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-06</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>bff76ae82d62dcd1e94ebe37e40a9f76ea9cfcaa</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-06</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>932e8b507635d5c3c7df913c03be6ded77cea95b</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-06</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>6b557c3dbe83d7e2fd77e2f6e649495c25a20181</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-06</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>0c7297f37db3a6f4d73ccadf16553401780b1321</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-06</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>700ab60cd8ea41c959394479d0bafd5e</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-06</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>6d531ec923346d7d29b7aa8fe7df2c94</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-06</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>4144a0d0777073b1c5d83d743682c5e9</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-06</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>2eafe1d0f2579e730ed03445bff12d0c</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-06</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>f4a39820dbff47fa1b68f83f575bc98ed33858b02341c5c0464a49be4e6c76d3</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-06</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>8516db624f17ad1cc56f71a69555272b216a8aee</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-06</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>065208b037a2691eb75a14f97bdbd9914122655d42f6249d2cca419a1e4ba6f1</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-06</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>44aba241dd3f0d156c6ed82a0ab3a9e1</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-07-06</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>ecf794599c5a813f31f0468aecd5662c5029b5c4</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>mimikatz</span>
										<span className='badge badge-light-info me-2 mb-1'>proxyshell</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
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
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>d1ef9f484f10d12345c41d6b9fca8ee0efa29b60</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>proxyshell</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>mimikatz</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										
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
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>2aee699780f06857bb0fb9c0f73e33d1ac87a385</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>mimikatz</span>
										<span className='badge badge-light-info me-2 mb-1'>proxyshell</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										
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
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>d46104947d8478030e8bcfcc74f2aef7</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>proxyshell</span>
										<span className='badge badge-light-info me-2 mb-1'>mimikatz</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										
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
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>5e1575c221f8826ce55ac2696cf1cf0b</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>proxyshell</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>mimikatz</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
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
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>2401f681b4722965f82a3d8199a134ed</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>mimikatz</span>
										<span className='badge badge-light-info me-2 mb-1'>proxyshell</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										
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
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>047c2d5a6cf769c33e019c0b576aef702cae77f3418f0aeba0706467be5ba681</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>proxyshell</span>
										<span className='badge badge-light-info me-2 mb-1'>mimikatz</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										
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
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>8b9c7d2554fe315199fae656448dc193accbec162d4afff3f204ce2346507a8a</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>proxyshell</span>
										<span className='badge badge-light-info me-2 mb-1'>mimikatz</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
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
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>6a58b52b184715583cda792b56a0a1ed</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>mimikatz</span>
										<span className='badge badge-light-info me-2 mb-1'>proxyshell</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
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
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>d0c1662ce239e4d288048c0e3324ec52962f6ddda77da0cb7af9c1d9c2f1e2eb</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>mimikatz</span>
										<span className='badge badge-light-info me-2 mb-1'>proxyshell</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										
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
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>bb7c575e798ff5243b5014777253635d</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>exfiltration</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>exbyte</span>
										<span className='badge badge-light-info me-2 mb-1'>mimikatz</span>
										<span className='badge badge-light-info me-2 mb-1'>proxyshell</span>
										<span className='badge badge-light-info me-2 mb-1'>infostealer</span>
										<span className='badge badge-light-info me-2 mb-1'>blackbyte</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										
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
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>2146f04728fe93c393a74331b76799ea8fe0269f</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>proxyshell</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>blackbyte</span>
										<span className='badge badge-light-info me-2 mb-1'>infostealer</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>mimikatz</span>
										<span className='badge badge-light-info me-2 mb-1'>exfiltration</span>
										<span className='badge badge-light-info me-2 mb-1'>exbyte</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										
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
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>4fdabe571b66ceec3448939bfb3ffcd1</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>mimikatz</span>
										<span className='badge badge-light-info me-2 mb-1'>proxyshell</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
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
								<td><div className='text-dark fw-bold fs-6'>Url</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>http://hivecust6vhekztbqgdnkks64ucehqacge3dij3gyrrpdp57zoq3ooqd.onion/</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>mimikatz</span>
										<span className='badge badge-light-info me-2 mb-1'>adrecon</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hive ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>hive leaks</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>c5fe23c626413a18cba8fb4ea93df81529c85f470577fb9c2336d6b692689d9d</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>hive leaks</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>hive ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>adrecon</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>93852dbd3a977cf2662b0c4db26b627736ba51c0df627eb36b41fdbde093c3c3</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>hive ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>adrecon</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>hive leaks</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>5ae51e30817c0d08d03f120539aedc31d094b080eb70c0691bbfbaa4ec265ef3</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive leaks</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>hive ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>adrecon</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>5954558d43884da2c7902ddf89c0cf7cd5bf162d6feefe5ce7d15b16767a27e5</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>adrecon</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>hive leaks</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>2f7d37c22e6199d1496f307c676223dda999c136ece4f2748975169b4a48afe5</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>hive leaks</span>
										<span className='badge badge-light-info me-2 mb-1'>adrecon</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>0df750bf15895d410c3f6ce45279ab0329c5c723af38b99aadc9a60bcdc9a71d</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>adrecon</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>hive leaks</span>
										<span className='badge badge-light-info me-2 mb-1'>hive ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>e3e8e28a70cdfa2164ece51ff377879a5151abdf</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>adrecon</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>hive ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>hive leaks</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>dc0ae41192272fda884a1a2589fe31d604d75af2</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>adrecon</span>
										<span className='badge badge-light-info me-2 mb-1'>hive ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hive leaks</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>c9471adc8db180a7da5a56966b156b440483856f</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>hive leaks</span>
										<span className='badge badge-light-info me-2 mb-1'>hive ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>adrecon</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>7777771aec887896be773c32200515a50e08112a</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hive leaks</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>adrecon</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>2877b32518445c09418849eb8fb913ed73d7b8fb</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>adrecon</span>
										<span className='badge badge-light-info me-2 mb-1'>hive leaks</span>
										<span className='badge badge-light-info me-2 mb-1'>hive ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>1cc80ad88a022c429f8285d871f48529c6484734</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hive leaks</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>adrecon</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>0f9484948fdd1b05bad387b14b27dc702c2c09ed</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>adrecon</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>hive leaks</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>f49a50f9867fa2be206aef078d2240f3</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>adrecon</span>
										<span className='badge badge-light-info me-2 mb-1'>hive leaks</span>
										<span className='badge badge-light-info me-2 mb-1'>hive ransomware</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>eb37bb967c8911ba8a3ad58e6a4a9578</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>adrecon</span>
										<span className='badge badge-light-info me-2 mb-1'>hive ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>hive leaks</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>7a731229659ec9175cfaf1358d0367f2</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>adrecon</span>
										<span className='badge badge-light-info me-2 mb-1'>hive ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>hive leaks</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>5aa5546c3bffa188f1d9de7fdab67c22</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>hive ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hive leaks</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>adrecon</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>ed614cba30f26f90815c28e189340843fab0fe7ebe71bb9b4a3cb7c78ff8e3d2</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>hive ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>adrecon</span>
										<span className='badge badge-light-info me-2 mb-1'>hive leaks</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>bf7bc94506eb72daec1d310ba038d9c3b115f145594fd271b80fbe911a8f3964</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>adrecon</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>hive leaks</span>
										<span className='badge badge-light-info me-2 mb-1'>hive ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>e1a7ddbf735d5c1cb9097d7614840c00e5c4d5107fa687c0ab2a2ec8948ef84e</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>adrecon</span>
										<span className='badge badge-light-info me-2 mb-1'>hive leaks</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>hive ransomware</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>d158f9d53e7c37eadd3b5cc1b82d095f61484e47eda2c36d9d35f31c0b4d3ff8</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>adrecon</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>hive leaks</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>hive ransomware</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>c04509c1b80c129a7486119436c9ada5b0505358e97c1508b2cfb5c2a177ed11</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive leaks</span>
										<span className='badge badge-light-info me-2 mb-1'>adrecon</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>hive ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>612e5ffd09ca30ca9488d802594efb5d41c360f7a439df4ae09b14bce45575ec</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>hive leaks</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>adrecon</span>
										<span className='badge badge-light-info me-2 mb-1'>hive ransomware</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>50ad0e6e9dc72d10579c20bb436f09eeaa7bfdbcb5747a2590af667823e85609</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>adrecon</span>
										<span className='badge badge-light-info me-2 mb-1'>hive ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>hive leaks</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>edba1b73ddd0e32784ae21844c940d7850531b82</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive leaks</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>hive ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>adrecon</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>eaa2e1e2cb6c7b6ec405ffdf204999853ebbd54a</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive leaks</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>adrecon</span>
										<span className='badge badge-light-info me-2 mb-1'>hive ransomware</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>5dbe3713b309e6ecc208e2a6c038aeb1762340d4</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>adrecon</span>
										<span className='badge badge-light-info me-2 mb-1'>hive ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>hive leaks</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>480db5652124d4dd199bc8e775539684a19f1f24</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>hive leaks</span>
										<span className='badge badge-light-info me-2 mb-1'>hive ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>adrecon</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>4714f1e6bb75a80a8faf69434726d176b70d7bd8</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>adrecon</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>hive ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hive leaks</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>9e609932c59d043565c5d3e5260f571b</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>adrecon</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>hive leaks</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>185c16888fac9705c00b606235abc83c</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>adrecon</span>
										<span className='badge badge-light-info me-2 mb-1'>hive leaks</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>hive ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>01c846bfc37b10ea43474e1781e0af52</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>adrecon</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>hive leaks</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>http://hiveleakdbtnp76ulyhi52eag6c6tyc3xw7ez7iqy6wc34gd2nekazyd.onion/</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>hiveleaks</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>mimikatz</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>proxyshell</span>
										<span className='badge badge-light-info me-2 mb-1'>fbi</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>hiveleakdbtnp76ulyhi52eag6c6tyc3xw7ez7iqy6wc34gd2nekazyd.onion</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>fbi</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>hiveleaks</span>
										<span className='badge badge-light-info me-2 mb-1'>mimikatz</span>
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
								<td><div className='text-dark fw-bold fs-6'>Domain-Name</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>hivecust6vhekztbqgdnkks64ucehqacge3dij3gyrrpdp57zoq3ooqd.onion</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive leaks</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>mimikatz</span>
										<span className='badge badge-light-info me-2 mb-1'>adrecon</span>
										<span className='badge badge-light-info me-2 mb-1'>proxyshell</span>
										<span className='badge badge-light-info me-2 mb-1'>hive ransomware</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>cd8e4372620930876c71ba0a24e2b0e17dcd87c9</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>hive ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hive leaks</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>adrecon</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>77a398c870ad4904d06d455c9249e7864ac92dda877e288e5718b3c8d9fc6618</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>adrecon</span>
										<span className='badge badge-light-info me-2 mb-1'>hive ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>c3aceb1e2eb3a6a3ec54e32ee620721e</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>adrecon</span>
										<span className='badge badge-light-info me-2 mb-1'>hive leaks</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>572d88c419c6ae75aeb784ceab327d040cb589903d6285bbffa77338111af14b</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>blackbyte</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>exbyte</span>
										<span className='badge badge-light-info me-2 mb-1'>mimikatz</span>
										<span className='badge badge-light-info me-2 mb-1'>infostealer</span>
										<span className='badge badge-light-info me-2 mb-1'>proxyshell</span>
										<span className='badge badge-light-info me-2 mb-1'>exfiltration</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>b5045d802394f4560280a7404af69263</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>fbi</span>
										<span className='badge badge-light-info me-2 mb-1'>hiveleaks</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>bee9ba70f36ff250b31a6fdf7fa8afeb</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>hiveleaks</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>fbi</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>321d0c4f1bbb44c53cd02186107a18b7a44c840a9a5f0a78bdac06868136b72c</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hiveleaks</span>
										<span className='badge badge-light-info me-2 mb-1'>fbi</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										
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
								<td><div className='text-dark fw-bold fs-6'>Url</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>http://hiveleakdbtnp76ulyhi52eag6c6tyc3xw7ez7iqy6wc34gd2nekazyd.onion</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>fbi</span>
										<span className='badge badge-light-info me-2 mb-1'>hiveleaks</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>763499b37aacd317e7d2f512872f9ed719aacae1</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>proxyshell</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>mimikatz</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>3477a173e2c1005a81d042802ab0f22cc12a4d55</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>hive</span>
										<span className='badge badge-light-info me-2 mb-1'>mimikatz</span>
										<span className='badge badge-light-info me-2 mb-1'>proxyshell</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
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

export {Hive}
