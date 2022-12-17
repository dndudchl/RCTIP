/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'

type Props = {
  className: string
}

const Maze: React.FC<Props> = ({className}) => {
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>f4ef694c1df96910020d8b49139d406eeadb522c6ae318a4d6936a6464152dba</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>dearcry</span>
										<span className='badge badge-light-info me-2 mb-1'>babuk</span>
										<span className='badge badge-light-info me-2 mb-1'>xorist</span>
										<span className='badge badge-light-info me-2 mb-1'>ryuk</span>
										<span className='badge badge-light-info me-2 mb-1'>gandcrab</span>
										<span className='badge badge-light-info me-2 mb-1'>sodinokibi</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>bitcoin</span>
										<span className='badge badge-light-info me-2 mb-1'>virlock</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>cerber</span>
										<span className='badge badge-light-info me-2 mb-1'>makop</span>
										<span className='badge badge-light-info me-2 mb-1'>dharma</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>de6dfa018773e07c218ef1df62ce0d99a708841bf1ddfb4c6ad7e323d5d666a4</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>bitcoin</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>dearcry</span>
										<span className='badge badge-light-info me-2 mb-1'>gandcrab</span>
										<span className='badge badge-light-info me-2 mb-1'>virlock</span>
										<span className='badge badge-light-info me-2 mb-1'>makop</span>
										<span className='badge badge-light-info me-2 mb-1'>sodinokibi</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>cerber</span>
										<span className='badge badge-light-info me-2 mb-1'>xorist</span>
										<span className='badge badge-light-info me-2 mb-1'>ryuk</span>
										<span className='badge badge-light-info me-2 mb-1'>dharma</span>
										<span className='badge badge-light-info me-2 mb-1'>babuk</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>6d9349a99d80e9003d3a01e0ad19c5f175e18b2dee7ef533b630772548f6c727</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>bitcoin</span>
										<span className='badge badge-light-info me-2 mb-1'>dearcry</span>
										<span className='badge badge-light-info me-2 mb-1'>ryuk</span>
										<span className='badge badge-light-info me-2 mb-1'>cerber</span>
										<span className='badge badge-light-info me-2 mb-1'>gandcrab</span>
										<span className='badge badge-light-info me-2 mb-1'>dharma</span>
										<span className='badge badge-light-info me-2 mb-1'>makop</span>
										<span className='badge badge-light-info me-2 mb-1'>virlock</span>
										<span className='badge badge-light-info me-2 mb-1'>sodinokibi</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>babuk</span>
										<span className='badge badge-light-info me-2 mb-1'>xorist</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>4979a10b81c41ecc0fc3a0f376ade766ce616d2301639f74e0277047cc40e3d6</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cerber</span>
										<span className='badge badge-light-info me-2 mb-1'>dharma</span>
										<span className='badge badge-light-info me-2 mb-1'>makop</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>gandcrab</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>ryuk</span>
										<span className='badge badge-light-info me-2 mb-1'>dearcry</span>
										<span className='badge badge-light-info me-2 mb-1'>xorist</span>
										<span className='badge badge-light-info me-2 mb-1'>sodinokibi</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>bitcoin</span>
										<span className='badge badge-light-info me-2 mb-1'>virlock</span>
										<span className='badge badge-light-info me-2 mb-1'>babuk</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>0e4442a40c9ffc9d8ba99be30e148c8d062a6fe5353009b4a10f040eac8aae94</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>sodinokibi</span>
										<span className='badge badge-light-info me-2 mb-1'>bitcoin</span>
										<span className='badge badge-light-info me-2 mb-1'>dharma</span>
										<span className='badge badge-light-info me-2 mb-1'>babuk</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>cerber</span>
										<span className='badge badge-light-info me-2 mb-1'>ryuk</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>virlock</span>
										<span className='badge badge-light-info me-2 mb-1'>gandcrab</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>xorist</span>
										<span className='badge badge-light-info me-2 mb-1'>dearcry</span>
										<span className='badge badge-light-info me-2 mb-1'>makop</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>1NDyJtNTjmwk5xPNhjgAMu4HDHigtobu1s</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ryuk</span>
										<span className='badge badge-light-info me-2 mb-1'>dharma</span>
										<span className='badge badge-light-info me-2 mb-1'>virlock</span>
										<span className='badge badge-light-info me-2 mb-1'>sodinokibi</span>
										<span className='badge badge-light-info me-2 mb-1'>babuk</span>
										<span className='badge badge-light-info me-2 mb-1'>dearcry</span>
										<span className='badge badge-light-info me-2 mb-1'>makop</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>gandcrab</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>bitcoin</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>cerber</span>
										<span className='badge badge-light-info me-2 mb-1'>xorist</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>1BFqrLCDwwrxueY7FFDn8DqeoasPJignxt</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>virlock</span>
										<span className='badge badge-light-info me-2 mb-1'>xorist</span>
										<span className='badge badge-light-info me-2 mb-1'>gandcrab</span>
										<span className='badge badge-light-info me-2 mb-1'>dharma</span>
										<span className='badge badge-light-info me-2 mb-1'>sodinokibi</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>ryuk</span>
										<span className='badge badge-light-info me-2 mb-1'>cerber</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>babuk</span>
										<span className='badge badge-light-info me-2 mb-1'>bitcoin</span>
										<span className='badge badge-light-info me-2 mb-1'>makop</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>dearcry</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>f8c59d689dbe2a4f15b3ed57b83bbb89c2357bb2</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>f43867c54e5b33b2a2a4c39b4fa194e05b930fb7</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>edcb5fe81d4c5bf9f30b344b3af673fb8f975a6a</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>ec8fc5673303dab439f7ac2d20375631a55ba85a</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>eab1f8057dfd94cd89301eee2d26944a84cff3c6</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>d8cbce281626bb5c14f59a979e243e6b260363ba</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>d16a82122d22eaa8b7a55ab9e382ccd776098586</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>bd7a6f961050fc5791690586adbf755db3f759d6</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>b9ba433486b3a1379b7007203d9e532ae014e7e5</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>af5eaf010e47eb1c4b073f31aa725df0e5547a25</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>9c48467990745ddcd661bde85cc61ee4088a4463</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>a3850d7355c3c8f891608cde5b0149ce3b481c95</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>8042d2a0db35be174ab28f5c6878826bf7fa0629</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>7c3947f55935b2a3559dd75b805f0356dccea9cc</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>4a45780d3872ae1462a85e5f711f753260f8d7df</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>485abd9541340606d0c9ea860c3cf00d04fa6cd7</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>1b42c140cd309316274e7b167281485b8ada518f</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>18acf8159bd9bf57874efd36ed3d5e34aa51c337</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>0fd58475c83b4fa43c5bbee805d082d67cb02dcf</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>e888eb52ba57be6d87e84967946e8d8abeb229db115496e6ec21b32466c16eba</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>c48898229dd6ce7158c02ab2f9189e9ad536ccc83c149d320fc8b07335d74e27</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>bda7aafa4fa7920acd6cbc52754d6d631d824122397b7f4289d8c10f017a12b6</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>b74b2ce728b5d41bb41908e352f4d31be8675315fc6a636a292e03dc6bb463d5</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>b21f9afc6443548427bf83b5f93e7a54ac3af306d9d71b8348a6f146b2819457</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>aa2a56ed03b7203953acef616d3711288a693aa1ada2e83e1abb92465eac5880</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>a32d89be48993857e558030ef8a6ef3970fad42a608f34bcaf69204645f2cabf</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>a0214cc40cb4e83a62505db72c2109c306238674d662a7d369edcff444a1973d</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>9fc177085a875e742dba2f3e3d11dcfa6a4b69e32f621929bff145d7cc8f731d</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>9e5832d7cfae59181754437db6a4d4780452d1a9879912ec89aaf219d156c521</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>89c2176c0ddcf2058ec5b027576fdf2fdf4134fd9822c616b46b1da851e1bee2</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>692f2bb011a20bc8f0a277cc7862229452b0877a251de04c9fcd1b67cabc1367</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>68dce9f214e7691db77a2f03af16a669a3cb655699f31a6c1f5aaede041468ff</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>5d562592b6cd7eebd3e36aa335ed6fcec429e9ffb2624092287d31b5cbb0bb5c</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>4487e0a1652b5150ea96c93a4ca37c43ba1dcee179eb65872c5656b4f596873b</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>2ffb984d4c9960aab7d82aabbdaac11a8e6a3d01d929d46c827362985e6be7d7</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>1c111d4f2ef7eac304e7bc2c4704b03de62aa39dbae43e6d5582397821c1c0b2</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>1832e1630c2277c1744ebb334eb293fbfdc8b8ff7d3b509eefff21e4e48b27da</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>02444566c82891a83401dbd70130b6bdecb22ac61c7a1da8374b58b475490665</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										
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
								<td><div className='text-dark fw-bold fs-6'>Domain-Name</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>june85.cyou</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>tier 1 domains</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>bokbot</span>
										<span className='badge badge-light-info me-2 mb-1'>infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										
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
								<td><div className='text-dark fw-bold fs-6'>Domain-Name</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>golddisco.top</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>bokbot</span>
										<span className='badge badge-light-info me-2 mb-1'>infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>tier 1 domains</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										
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
								<td><div className='text-dark fw-bold fs-6'>Domain-Name</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>colosssueded.top</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>tier 1 domains</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>bokbot</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>e319f5a8fe496c0c8247e27c3469b20d</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										
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
								<td><div className='text-dark fw-bold fs-6'>Domain-Name</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>colombosuede.club</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>infrastructure</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>bokbot</span>
										<span className='badge badge-light-info me-2 mb-1'>tier 1 domains</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>e124cd26fcce258addc85d7f010655ea</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>c803200ad4b9f91659e58f0617f0dafa</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>c188c6145202b65a941c41e7ff2c9afd</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>aea530f8a0645419ce0abe1bf2dc1584</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>ad4d445091a3b66af765a1d653fd1eb7</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>a8a7059278d82ce55949168fcd1ddde4</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>9ecf25b1e9be0b20822fe25269fa5d02</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>a64e7dd557e7eab3513c9a5f31003e68</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>9760913fb7948f2983831d71a533a650</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>95b78f4d3602aeea4f7a33c9f1b49a97</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>87dc37e0edb39c077c4d4d8f1451402c</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>7ae990c12bf5228b6d1b90d40ad0a79f</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>3eb552ede658ee77ee4631d35eac6b43</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>3098fbc98e90d91805717d7a4f946c27</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>2f43055df845742d137a18b347f335a5</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>0378897e4ec1d1ee4637cff110635141</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>1efababd1d6bd869f005f92799113f42</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>14467102f8aa0a0d95d0f3c0ce5f0b59</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>mouseisland</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>egregor</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2198</span>
										<span className='badge badge-light-info me-2 mb-1'>sourbits</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>dd8391d2ac9ba3d28863cab87e41b3bcfe534715</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cerber</span>
										<span className='badge badge-light-info me-2 mb-1'>playbit</span>
										<span className='badge badge-light-info me-2 mb-1'>magniber</span>
										<span className='badge badge-light-info me-2 mb-1'>exploit</span>
										<span className='badge badge-light-info me-2 mb-1'>buhtrap</span>
										<span className='badge badge-light-info me-2 mb-1'>ursnif</span>
										<span className='badge badge-light-info me-2 mb-1'>dreambot</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>duqu</span>
										<span className='badge badge-light-info me-2 mb-1'>turla</span>
										<span className='badge badge-light-info me-2 mb-1'>gandcrab</span>
										<span className='badge badge-light-info me-2 mb-1'>buggicorp</span>
										<span className='badge badge-light-info me-2 mb-1'>0day</span>
										<span className='badge badge-light-info me-2 mb-1'>volodya</span>
										<span className='badge badge-light-info me-2 mb-1'>magnitude</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>34e40b8779d52a36a0486022c1bef312792eefd2</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>playbit</span>
										<span className='badge badge-light-info me-2 mb-1'>gandcrab</span>
										<span className='badge badge-light-info me-2 mb-1'>dreambot</span>
										<span className='badge badge-light-info me-2 mb-1'>exploit</span>
										<span className='badge badge-light-info me-2 mb-1'>buhtrap</span>
										<span className='badge badge-light-info me-2 mb-1'>volodya</span>
										<span className='badge badge-light-info me-2 mb-1'>magniber</span>
										<span className='badge badge-light-info me-2 mb-1'>duqu</span>
										<span className='badge badge-light-info me-2 mb-1'>ursnif</span>
										<span className='badge badge-light-info me-2 mb-1'>0day</span>
										<span className='badge badge-light-info me-2 mb-1'>cerber</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>buggicorp</span>
										<span className='badge badge-light-info me-2 mb-1'>magnitude</span>
										<span className='badge badge-light-info me-2 mb-1'>turla</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>12bd132725e53c57e4368cc32e6dbc22fee47bf0</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cerber</span>
										<span className='badge badge-light-info me-2 mb-1'>turla</span>
										<span className='badge badge-light-info me-2 mb-1'>playbit</span>
										<span className='badge badge-light-info me-2 mb-1'>gandcrab</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>buggicorp</span>
										<span className='badge badge-light-info me-2 mb-1'>dreambot</span>
										<span className='badge badge-light-info me-2 mb-1'>magnitude</span>
										<span className='badge badge-light-info me-2 mb-1'>duqu</span>
										<span className='badge badge-light-info me-2 mb-1'>magniber</span>
										<span className='badge badge-light-info me-2 mb-1'>exploit</span>
										<span className='badge badge-light-info me-2 mb-1'>ursnif</span>
										<span className='badge badge-light-info me-2 mb-1'>volodya</span>
										<span className='badge badge-light-info me-2 mb-1'>buhtrap</span>
										<span className='badge badge-light-info me-2 mb-1'>0day</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>6d91e2d5e93990292edd23aaf5e70ea01c794a17</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>volodya</span>
										<span className='badge badge-light-info me-2 mb-1'>turla</span>
										<span className='badge badge-light-info me-2 mb-1'>exploit</span>
										<span className='badge badge-light-info me-2 mb-1'>buhtrap</span>
										<span className='badge badge-light-info me-2 mb-1'>cerber</span>
										<span className='badge badge-light-info me-2 mb-1'>buggicorp</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>gandcrab</span>
										<span className='badge badge-light-info me-2 mb-1'>magnitude</span>
										<span className='badge badge-light-info me-2 mb-1'>dreambot</span>
										<span className='badge badge-light-info me-2 mb-1'>magniber</span>
										<span className='badge badge-light-info me-2 mb-1'>0day</span>
										<span className='badge badge-light-info me-2 mb-1'>playbit</span>
										<span className='badge badge-light-info me-2 mb-1'>duqu</span>
										<span className='badge badge-light-info me-2 mb-1'>ursnif</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>61545b784ceb224afc7ac01b77d46dd9</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>magnitude</span>
										<span className='badge badge-light-info me-2 mb-1'>magniber</span>
										<span className='badge badge-light-info me-2 mb-1'>cerber</span>
										<span className='badge badge-light-info me-2 mb-1'>exploit</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>gandcrab</span>
										<span className='badge badge-light-info me-2 mb-1'>duqu</span>
										<span className='badge badge-light-info me-2 mb-1'>buhtrap</span>
										<span className='badge badge-light-info me-2 mb-1'>ursnif</span>
										<span className='badge badge-light-info me-2 mb-1'>volodya</span>
										<span className='badge badge-light-info me-2 mb-1'>turla</span>
										<span className='badge badge-light-info me-2 mb-1'>buggicorp</span>
										<span className='badge badge-light-info me-2 mb-1'>dreambot</span>
										<span className='badge badge-light-info me-2 mb-1'>playbit</span>
										<span className='badge badge-light-info me-2 mb-1'>0day</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>ccb2a3b6d323b1fe0560b22760bebb8b</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>turla</span>
										<span className='badge badge-light-info me-2 mb-1'>buggicorp</span>
										<span className='badge badge-light-info me-2 mb-1'>ursnif</span>
										<span className='badge badge-light-info me-2 mb-1'>magnitude</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>0day</span>
										<span className='badge badge-light-info me-2 mb-1'>playbit</span>
										<span className='badge badge-light-info me-2 mb-1'>gandcrab</span>
										<span className='badge badge-light-info me-2 mb-1'>buhtrap</span>
										<span className='badge badge-light-info me-2 mb-1'>magniber</span>
										<span className='badge badge-light-info me-2 mb-1'>exploit</span>
										<span className='badge badge-light-info me-2 mb-1'>dreambot</span>
										<span className='badge badge-light-info me-2 mb-1'>duqu</span>
										<span className='badge badge-light-info me-2 mb-1'>cerber</span>
										<span className='badge badge-light-info me-2 mb-1'>volodya</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>65abb2277554c04f337a3a4dedb79791</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>playbit</span>
										<span className='badge badge-light-info me-2 mb-1'>turla</span>
										<span className='badge badge-light-info me-2 mb-1'>dreambot</span>
										<span className='badge badge-light-info me-2 mb-1'>exploit</span>
										<span className='badge badge-light-info me-2 mb-1'>magniber</span>
										<span className='badge badge-light-info me-2 mb-1'>gandcrab</span>
										<span className='badge badge-light-info me-2 mb-1'>ursnif</span>
										<span className='badge badge-light-info me-2 mb-1'>magnitude</span>
										<span className='badge badge-light-info me-2 mb-1'>duqu</span>
										<span className='badge badge-light-info me-2 mb-1'>buggicorp</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>cerber</span>
										<span className='badge badge-light-info me-2 mb-1'>buhtrap</span>
										<span className='badge badge-light-info me-2 mb-1'>0day</span>
										<span className='badge badge-light-info me-2 mb-1'>volodya</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>60592721a90e37bf632f6258974385ca</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>exploit</span>
										<span className='badge badge-light-info me-2 mb-1'>buhtrap</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>gandcrab</span>
										<span className='badge badge-light-info me-2 mb-1'>playbit</span>
										<span className='badge badge-light-info me-2 mb-1'>duqu</span>
										<span className='badge badge-light-info me-2 mb-1'>dreambot</span>
										<span className='badge badge-light-info me-2 mb-1'>cerber</span>
										<span className='badge badge-light-info me-2 mb-1'>0day</span>
										<span className='badge badge-light-info me-2 mb-1'>volodya</span>
										<span className='badge badge-light-info me-2 mb-1'>magniber</span>
										<span className='badge badge-light-info me-2 mb-1'>magnitude</span>
										<span className='badge badge-light-info me-2 mb-1'>buggicorp</span>
										<span className='badge badge-light-info me-2 mb-1'>ursnif</span>
										<span className='badge badge-light-info me-2 mb-1'>turla</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>be710419d01ad1b51310d21d354791df</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>buggicorp</span>
										<span className='badge badge-light-info me-2 mb-1'>volodya</span>
										<span className='badge badge-light-info me-2 mb-1'>dreambot</span>
										<span className='badge badge-light-info me-2 mb-1'>magniber</span>
										<span className='badge badge-light-info me-2 mb-1'>0day</span>
										<span className='badge badge-light-info me-2 mb-1'>gandcrab</span>
										<span className='badge badge-light-info me-2 mb-1'>magnitude</span>
										<span className='badge badge-light-info me-2 mb-1'>buhtrap</span>
										<span className='badge badge-light-info me-2 mb-1'>playbit</span>
										<span className='badge badge-light-info me-2 mb-1'>turla</span>
										<span className='badge badge-light-info me-2 mb-1'>ursnif</span>
										<span className='badge badge-light-info me-2 mb-1'>exploit</span>
										<span className='badge badge-light-info me-2 mb-1'>cerber</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>duqu</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>b239543f3683f16cc160c062728e56adef870bf0</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>duqu</span>
										<span className='badge badge-light-info me-2 mb-1'>dreambot</span>
										<span className='badge badge-light-info me-2 mb-1'>cerber</span>
										<span className='badge badge-light-info me-2 mb-1'>playbit</span>
										<span className='badge badge-light-info me-2 mb-1'>magnitude</span>
										<span className='badge badge-light-info me-2 mb-1'>ursnif</span>
										<span className='badge badge-light-info me-2 mb-1'>magniber</span>
										<span className='badge badge-light-info me-2 mb-1'>exploit</span>
										<span className='badge badge-light-info me-2 mb-1'>turla</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>gandcrab</span>
										<span className='badge badge-light-info me-2 mb-1'>buhtrap</span>
										<span className='badge badge-light-info me-2 mb-1'>0day</span>
										<span className='badge badge-light-info me-2 mb-1'>buggicorp</span>
										<span className='badge badge-light-info me-2 mb-1'>volodya</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>13a5fab598763ae4141955f2903d66f9</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>buggicorp</span>
										<span className='badge badge-light-info me-2 mb-1'>exploit</span>
										<span className='badge badge-light-info me-2 mb-1'>buhtrap</span>
										<span className='badge badge-light-info me-2 mb-1'>magnitude</span>
										<span className='badge badge-light-info me-2 mb-1'>dreambot</span>
										<span className='badge badge-light-info me-2 mb-1'>volodya</span>
										<span className='badge badge-light-info me-2 mb-1'>0day</span>
										<span className='badge badge-light-info me-2 mb-1'>turla</span>
										<span className='badge badge-light-info me-2 mb-1'>playbit</span>
										<span className='badge badge-light-info me-2 mb-1'>magniber</span>
										<span className='badge badge-light-info me-2 mb-1'>duqu</span>
										<span className='badge badge-light-info me-2 mb-1'>ursnif</span>
										<span className='badge badge-light-info me-2 mb-1'>cerber</span>
										<span className='badge badge-light-info me-2 mb-1'>finance</span>
										<span className='badge badge-light-info me-2 mb-1'>gandcrab</span>
										
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
								<td><div className='text-dark fw-bold fs-6'>Url</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>http://37.1.210.52/vologda.dll</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>trickbot crypter</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>sosemanuk</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>ea7bb99e03606702c1cbe543bb32b27e</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>trickbot crypter</span>
										<span className='badge badge-light-info me-2 mb-1'>sosemanuk</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>6099bbf0f6f85495929ddfc9b66d6992</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>sosemanuk</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>trickbot crypter</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>23eb372f78dc67464d0ee0d15c5d8370fa086f12</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>f9f8bfa301580b1a15a92a0330d57fdb</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>81a9ced421d01a2f9a7bf1335d227eee19606fe220a50ecf96a78abca6cc816b</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
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
								<td><div className='text-dark fw-bold fs-6'>Hostname</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>mhennigan.safedatasystems.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										
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
								<td><div className='text-dark fw-bold fs-6'>Hostname</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>crt.globalsign.icu</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
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
								<td><div className='text-dark fw-bold fs-6'>Hostname</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>crt.officecloud.top</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>f9dca02aa877ad36f05df1ebb16563c9dd07639a038b9840879be4499f840a10</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>playbit</span>
										<span className='badge badge-light-info me-2 mb-1'>buhtrap</span>
										<span className='badge badge-light-info me-2 mb-1'>volodya</span>
										<span className='badge badge-light-info me-2 mb-1'>magniber</span>
										<span className='badge badge-light-info me-2 mb-1'>dreambot</span>
										<span className='badge badge-light-info me-2 mb-1'>gandcrab</span>
										<span className='badge badge-light-info me-2 mb-1'>0day</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>exploit</span>
										<span className='badge badge-light-info me-2 mb-1'>turla</span>
										<span className='badge badge-light-info me-2 mb-1'>cerber</span>
										<span className='badge badge-light-info me-2 mb-1'>ursnif</span>
										<span className='badge badge-light-info me-2 mb-1'>duqu</span>
										<span className='badge badge-light-info me-2 mb-1'>magnitude</span>
										<span className='badge badge-light-info me-2 mb-1'>buggicorp</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>f1842080b38b3b990ba3ccc1d55ceedd901d423b6b8625633e1885f0dadee4c2</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>0day</span>
										<span className='badge badge-light-info me-2 mb-1'>duqu</span>
										<span className='badge badge-light-info me-2 mb-1'>magniber</span>
										<span className='badge badge-light-info me-2 mb-1'>volodya</span>
										<span className='badge badge-light-info me-2 mb-1'>cerber</span>
										<span className='badge badge-light-info me-2 mb-1'>exploit</span>
										<span className='badge badge-light-info me-2 mb-1'>gandcrab</span>
										<span className='badge badge-light-info me-2 mb-1'>turla</span>
										<span className='badge badge-light-info me-2 mb-1'>dreambot</span>
										<span className='badge badge-light-info me-2 mb-1'>playbit</span>
										<span className='badge badge-light-info me-2 mb-1'>ursnif</span>
										<span className='badge badge-light-info me-2 mb-1'>buhtrap</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>buggicorp</span>
										<span className='badge badge-light-info me-2 mb-1'>magnitude</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>eea10d513ae0c33248484105355a25f80dc9b4f1cfd9e735e447a6f7fd52b569</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cerber</span>
										<span className='badge badge-light-info me-2 mb-1'>duqu</span>
										<span className='badge badge-light-info me-2 mb-1'>0day</span>
										<span className='badge badge-light-info me-2 mb-1'>volodya</span>
										<span className='badge badge-light-info me-2 mb-1'>ursnif</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>magnitude</span>
										<span className='badge badge-light-info me-2 mb-1'>playbit</span>
										<span className='badge badge-light-info me-2 mb-1'>exploit</span>
										<span className='badge badge-light-info me-2 mb-1'>buhtrap</span>
										<span className='badge badge-light-info me-2 mb-1'>gandcrab</span>
										<span className='badge badge-light-info me-2 mb-1'>turla</span>
										<span className='badge badge-light-info me-2 mb-1'>dreambot</span>
										<span className='badge badge-light-info me-2 mb-1'>magniber</span>
										<span className='badge badge-light-info me-2 mb-1'>buggicorp</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>ed7532c77d2e5cf559a23a355e62d26c7a036f2c51b1dd669745a9a577f831a0</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>magniber</span>
										<span className='badge badge-light-info me-2 mb-1'>dreambot</span>
										<span className='badge badge-light-info me-2 mb-1'>turla</span>
										<span className='badge badge-light-info me-2 mb-1'>buhtrap</span>
										<span className='badge badge-light-info me-2 mb-1'>gandcrab</span>
										<span className='badge badge-light-info me-2 mb-1'>cerber</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>playbit</span>
										<span className='badge badge-light-info me-2 mb-1'>exploit</span>
										<span className='badge badge-light-info me-2 mb-1'>0day</span>
										<span className='badge badge-light-info me-2 mb-1'>ursnif</span>
										<span className='badge badge-light-info me-2 mb-1'>volodya</span>
										<span className='badge badge-light-info me-2 mb-1'>buggicorp</span>
										<span className='badge badge-light-info me-2 mb-1'>duqu</span>
										<span className='badge badge-light-info me-2 mb-1'>magnitude</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>a785ad170a38280fc595dcc5af0842bd7cabc77b86deb510aa6ebb264bf2c092</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>buggicorp</span>
										<span className='badge badge-light-info me-2 mb-1'>duqu</span>
										<span className='badge badge-light-info me-2 mb-1'>turla</span>
										<span className='badge badge-light-info me-2 mb-1'>magniber</span>
										<span className='badge badge-light-info me-2 mb-1'>buhtrap</span>
										<span className='badge badge-light-info me-2 mb-1'>ursnif</span>
										<span className='badge badge-light-info me-2 mb-1'>gandcrab</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>exploit</span>
										<span className='badge badge-light-info me-2 mb-1'>dreambot</span>
										<span className='badge badge-light-info me-2 mb-1'>0day</span>
										<span className='badge badge-light-info me-2 mb-1'>magnitude</span>
										<span className='badge badge-light-info me-2 mb-1'>volodya</span>
										<span className='badge badge-light-info me-2 mb-1'>playbit</span>
										<span className='badge badge-light-info me-2 mb-1'>cerber</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>9f1a235eb38291cef296829be4b4d03618cd21e0b4f343f75a460c31a0ad62d3</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>buhtrap</span>
										<span className='badge badge-light-info me-2 mb-1'>duqu</span>
										<span className='badge badge-light-info me-2 mb-1'>cerber</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>0day</span>
										<span className='badge badge-light-info me-2 mb-1'>magniber</span>
										<span className='badge badge-light-info me-2 mb-1'>exploit</span>
										<span className='badge badge-light-info me-2 mb-1'>turla</span>
										<span className='badge badge-light-info me-2 mb-1'>magnitude</span>
										<span className='badge badge-light-info me-2 mb-1'>ursnif</span>
										<span className='badge badge-light-info me-2 mb-1'>gandcrab</span>
										<span className='badge badge-light-info me-2 mb-1'>dreambot</span>
										<span className='badge badge-light-info me-2 mb-1'>volodya</span>
										<span className='badge badge-light-info me-2 mb-1'>buggicorp</span>
										<span className='badge badge-light-info me-2 mb-1'>playbit</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>8af2cf1a254b1dafe9e15027687b0315493877524c089403d3ffffa950389a30</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>exploit</span>
										<span className='badge badge-light-info me-2 mb-1'>dreambot</span>
										<span className='badge badge-light-info me-2 mb-1'>magnitude</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>0day</span>
										<span className='badge badge-light-info me-2 mb-1'>duqu</span>
										<span className='badge badge-light-info me-2 mb-1'>playbit</span>
										<span className='badge badge-light-info me-2 mb-1'>buggicorp</span>
										<span className='badge badge-light-info me-2 mb-1'>magniber</span>
										<span className='badge badge-light-info me-2 mb-1'>gandcrab</span>
										<span className='badge badge-light-info me-2 mb-1'>volodya</span>
										<span className='badge badge-light-info me-2 mb-1'>turla</span>
										<span className='badge badge-light-info me-2 mb-1'>cerber</span>
										<span className='badge badge-light-info me-2 mb-1'>buhtrap</span>
										<span className='badge badge-light-info me-2 mb-1'>ursnif</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>895ab681351439ee4281690df21c4a47bdeb6691b9b828fdf8c8fed3f45202d8</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>exploit</span>
										<span className='badge badge-light-info me-2 mb-1'>0day</span>
										<span className='badge badge-light-info me-2 mb-1'>dreambot</span>
										<span className='badge badge-light-info me-2 mb-1'>buggicorp</span>
										<span className='badge badge-light-info me-2 mb-1'>playbit</span>
										<span className='badge badge-light-info me-2 mb-1'>turla</span>
										<span className='badge badge-light-info me-2 mb-1'>ursnif</span>
										<span className='badge badge-light-info me-2 mb-1'>duqu</span>
										<span className='badge badge-light-info me-2 mb-1'>gandcrab</span>
										<span className='badge badge-light-info me-2 mb-1'>cerber</span>
										<span className='badge badge-light-info me-2 mb-1'>magnitude</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>volodya</span>
										<span className='badge badge-light-info me-2 mb-1'>magniber</span>
										<span className='badge badge-light-info me-2 mb-1'>buhtrap</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>8869e0df9b5f4a894216c76aa5689686395c16296761716abece00a0b4234d87</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>volodya</span>
										<span className='badge badge-light-info me-2 mb-1'>ursnif</span>
										<span className='badge badge-light-info me-2 mb-1'>magniber</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>turla</span>
										<span className='badge badge-light-info me-2 mb-1'>gandcrab</span>
										<span className='badge badge-light-info me-2 mb-1'>cerber</span>
										<span className='badge badge-light-info me-2 mb-1'>playbit</span>
										<span className='badge badge-light-info me-2 mb-1'>duqu</span>
										<span className='badge badge-light-info me-2 mb-1'>buhtrap</span>
										<span className='badge badge-light-info me-2 mb-1'>exploit</span>
										<span className='badge badge-light-info me-2 mb-1'>0day</span>
										<span className='badge badge-light-info me-2 mb-1'>buggicorp</span>
										<span className='badge badge-light-info me-2 mb-1'>dreambot</span>
										<span className='badge badge-light-info me-2 mb-1'>magnitude</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>6224efee6665118fe4b5bfbc0c4b1dbe611a43a4b385f61ae33b0a0af230da4e</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>0day</span>
										<span className='badge badge-light-info me-2 mb-1'>magniber</span>
										<span className='badge badge-light-info me-2 mb-1'>buggicorp</span>
										<span className='badge badge-light-info me-2 mb-1'>exploit</span>
										<span className='badge badge-light-info me-2 mb-1'>duqu</span>
										<span className='badge badge-light-info me-2 mb-1'>playbit</span>
										<span className='badge badge-light-info me-2 mb-1'>dreambot</span>
										<span className='badge badge-light-info me-2 mb-1'>finance</span>
										<span className='badge badge-light-info me-2 mb-1'>magnitude</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>cerber</span>
										<span className='badge badge-light-info me-2 mb-1'>volodya</span>
										<span className='badge badge-light-info me-2 mb-1'>gandcrab</span>
										<span className='badge badge-light-info me-2 mb-1'>buhtrap</span>
										<span className='badge badge-light-info me-2 mb-1'>turla</span>
										<span className='badge badge-light-info me-2 mb-1'>ursnif</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>5c27e05b788ba3b997a70df674d410322c3fa5e97079a7bf3aec369a0d397164</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>turla</span>
										<span className='badge badge-light-info me-2 mb-1'>gandcrab</span>
										<span className='badge badge-light-info me-2 mb-1'>0day</span>
										<span className='badge badge-light-info me-2 mb-1'>duqu</span>
										<span className='badge badge-light-info me-2 mb-1'>dreambot</span>
										<span className='badge badge-light-info me-2 mb-1'>volodya</span>
										<span className='badge badge-light-info me-2 mb-1'>magnitude</span>
										<span className='badge badge-light-info me-2 mb-1'>buhtrap</span>
										<span className='badge badge-light-info me-2 mb-1'>exploit</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>buggicorp</span>
										<span className='badge badge-light-info me-2 mb-1'>cerber</span>
										<span className='badge badge-light-info me-2 mb-1'>ursnif</span>
										<span className='badge badge-light-info me-2 mb-1'>playbit</span>
										<span className='badge badge-light-info me-2 mb-1'>magniber</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>50da0183466a9852590de0d9e58bbe64f22ff8fc20a9ccc68ed0e50b367d7043</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>exploit</span>
										<span className='badge badge-light-info me-2 mb-1'>duqu</span>
										<span className='badge badge-light-info me-2 mb-1'>ursnif</span>
										<span className='badge badge-light-info me-2 mb-1'>cerber</span>
										<span className='badge badge-light-info me-2 mb-1'>buggicorp</span>
										<span className='badge badge-light-info me-2 mb-1'>volodya</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>magniber</span>
										<span className='badge badge-light-info me-2 mb-1'>gandcrab</span>
										<span className='badge badge-light-info me-2 mb-1'>buhtrap</span>
										<span className='badge badge-light-info me-2 mb-1'>dreambot</span>
										<span className='badge badge-light-info me-2 mb-1'>playbit</span>
										<span className='badge badge-light-info me-2 mb-1'>magnitude</span>
										<span className='badge badge-light-info me-2 mb-1'>0day</span>
										<span className='badge badge-light-info me-2 mb-1'>turla</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>3f6fe68981157bf3e267148ec4abf801a0983f4cea64d1aaf50fecc97ae590d3</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>turla</span>
										<span className='badge badge-light-info me-2 mb-1'>magniber</span>
										<span className='badge badge-light-info me-2 mb-1'>0day</span>
										<span className='badge badge-light-info me-2 mb-1'>duqu</span>
										<span className='badge badge-light-info me-2 mb-1'>buggicorp</span>
										<span className='badge badge-light-info me-2 mb-1'>gandcrab</span>
										<span className='badge badge-light-info me-2 mb-1'>cerber</span>
										<span className='badge badge-light-info me-2 mb-1'>dreambot</span>
										<span className='badge badge-light-info me-2 mb-1'>ursnif</span>
										<span className='badge badge-light-info me-2 mb-1'>playbit</span>
										<span className='badge badge-light-info me-2 mb-1'>volodya</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>exploit</span>
										<span className='badge badge-light-info me-2 mb-1'>magnitude</span>
										<span className='badge badge-light-info me-2 mb-1'>buhtrap</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>0ea43ba3e1907d1b5655a665b54ad5295a93bda660146cf7c8c302b74ab573e9</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>duqu</span>
										<span className='badge badge-light-info me-2 mb-1'>buggicorp</span>
										<span className='badge badge-light-info me-2 mb-1'>cerber</span>
										<span className='badge badge-light-info me-2 mb-1'>playbit</span>
										<span className='badge badge-light-info me-2 mb-1'>turla</span>
										<span className='badge badge-light-info me-2 mb-1'>ursnif</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>magnitude</span>
										<span className='badge badge-light-info me-2 mb-1'>dreambot</span>
										<span className='badge badge-light-info me-2 mb-1'>volodya</span>
										<span className='badge badge-light-info me-2 mb-1'>magniber</span>
										<span className='badge badge-light-info me-2 mb-1'>gandcrab</span>
										<span className='badge badge-light-info me-2 mb-1'>exploit</span>
										<span className='badge badge-light-info me-2 mb-1'>buhtrap</span>
										<span className='badge badge-light-info me-2 mb-1'>0day</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>0829f90a94aea5f7a56d6ebf0295e3d48b1dffcfefe91c7b2231a7108fe69c5e</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>volodya</span>
										<span className='badge badge-light-info me-2 mb-1'>ursnif</span>
										<span className='badge badge-light-info me-2 mb-1'>duqu</span>
										<span className='badge badge-light-info me-2 mb-1'>buhtrap</span>
										<span className='badge badge-light-info me-2 mb-1'>turla</span>
										<span className='badge badge-light-info me-2 mb-1'>exploit</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>0day</span>
										<span className='badge badge-light-info me-2 mb-1'>gandcrab</span>
										<span className='badge badge-light-info me-2 mb-1'>cerber</span>
										<span className='badge badge-light-info me-2 mb-1'>magnitude</span>
										<span className='badge badge-light-info me-2 mb-1'>dreambot</span>
										<span className='badge badge-light-info me-2 mb-1'>playbit</span>
										<span className='badge badge-light-info me-2 mb-1'>magniber</span>
										<span className='badge badge-light-info me-2 mb-1'>buggicorp</span>
										
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
								<td><div className='text-dark fw-bold fs-6'>Domain-Name</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>ocspverisign.pw</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>85e38cc3b78cbb92ade81721d8cec0cb6c34f3b5</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>sosemanuk</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>trickbot crypter</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>07849ba4d2d9cb2d13d40ceaf37965159a53c852</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>sosemanuk</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>trickbot crypter</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>fb71eaae22e6d93286d10228fc08229b1edf805e5817f698accfe2ec18968458</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>sosemanuk</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>trickbot crypter</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>d6d98da42bc495153168a6e7fceeebb599f9ed3e3a95ca67c301a66b50f34bd2</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>sosemanuk</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>trickbot crypter</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>9d86beb9d4b07dec9db6a692362ac3fce2275065194a3bda739fe1d1f4d9afc7</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-24</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>ecd04ebbb3df053ce4efa2b73912fd4d086d1720f9b410235ee9c1e529ea52a2</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-24</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>c040defb9c90074b489857f328d3e0040ac0ddab26cde132f17cccae7f1309cc</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-24</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>4080402553e9a86e954c1d9b7d0bb059786f52aba4a179a5d00e219500c8f43d</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-24</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>83f8ce81f71d6f0b1ddc6b4f3add7a5deef8367a29f59b564c9539d6653d1279</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-24</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>fc611f9d09f645f31c4a77a27b6e6b1aec74db916d0712bef5bce052d12c971f</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-24</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>f491fb72f106e879021b0bb1149c4678fb380c255d2ef11ac4e0897378793f49</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-24</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>9be70b7fe15cd64aed5b1adc88c2d5270bce534d167c4a42d143ae0059c3da1c</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-24</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>1161b030293e58d15b6a6a814a61a6432cf2c98ce9d156986157b432f3ebcf78</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-24</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>c11b964916457579a268a36e825857866680baf1830cd6e2d26d4e1e24dec91b</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-24</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>195ef8cfabc2e877ebb1a60a19850c714fb0a477592b0a8d61d88f0f96be5de9</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-24</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>ea19736c8e89e871974aabdc0d52ad0f0948159d4cf41d2889f49448cbe5e705</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-24</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>30b72e83d66cbe9e724c8e2b21179aecd4bcf68b2ec7895616807df380afab54</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-24</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>6a22220c0fe5f578da11ce22945b63d93172b75452996defdc2ff48756bde6af</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-24</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>5603a16cbf81d183d3ff4ffea5477af1a4be01321865f0978c0e128051ec0a82</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-24</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>9ad15385f04a6d8dd58b4390e32d876070e339eee6b8da586852d7467514d1b1</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-24</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>04e22ab46a8d5dc5fea6c41ea6fdc913b793a4e33df8f0bc1868b72b180c0e6e</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-24</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>6878f7bd90434ac5a76ac2208a5198ce1a60ae20e8505fc110bd8e42b3657d13</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-24</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>b30bb0f35a904f67d3ac0082c59770836cc415dc5b7225be04e8d7c79bde73be</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-24</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>822a264191230f753546407a823c6993e1a83a83a75fa36071a874318893afb8</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-24</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>877c439da147bab8e2c32f03814e3973c22cbcd112d35bc2735b803ac9113da1</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-24</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>9751ae55b105ad8ffe6fc5dc7aea60ad723b6df67a959aa2ea6f4fa640d20a71</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-24</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>33afa2f1d53d5279b6fc87ce6834193fdd7e16e4b44e895aae4b9da00be0c502</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-24</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>3627eb2e1940e50ab2e7b3ee703bc5f8663233fe71a872b32178cb118fb3e2d9</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-24</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>51461b83f3b8afbcae46145be60f7ff11b5609f1a2341283ad49c03121e6cafe</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-24</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>153defee225de889d2ac66605f391f4aeaa8b867b4093c686941e64d0d245a57</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-24</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>5c9b7224ffd2029b6ce7b82ea40d63b9d4e4f502169bc91de88b4ea577f52353</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-24</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>58fe9776f33628fd965d1bcc442ec8dc5bfae0c648dcaec400f6090633484806</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-24</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>067f1b8f1e0b2bfe286f5169e17834e8cf7f4266b8d97f28ea78995dc81b0e7b</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-24</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>91514e6be3f581a77daa79e2a4905dcbdf6bdcc32ee0f713599a94d453a26fc1</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-24</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>cf5b30e6ada0d6ee7449d6bde9986a35df6f2986</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>turla</span>
										<span className='badge badge-light-info me-2 mb-1'>microsoft word</span>
										<span className='badge badge-light-info me-2 mb-1'>maze</span>
										<span className='badge badge-light-info me-2 mb-1'>buggicorp</span>
										<span className='badge badge-light-info me-2 mb-1'>vnc</span>
										<span className='badge badge-light-info me-2 mb-1'>duqu</span>
										<span className='badge badge-light-info me-2 mb-1'>exploit</span>
										<span className='badge badge-light-info me-2 mb-1'>cerber</span>
										<span className='badge badge-light-info me-2 mb-1'>dreambot</span>
										<span className='badge badge-light-info me-2 mb-1'>finance</span>
										<span className='badge badge-light-info me-2 mb-1'>ursnif</span>
										<span className='badge badge-light-info me-2 mb-1'>word</span>
										<span className='badge badge-light-info me-2 mb-1'>magnitude</span>
										<span className='badge badge-light-info me-2 mb-1'>carbanak</span>
										<span className='badge badge-light-info me-2 mb-1'>playbit</span>
										<span className='badge badge-light-info me-2 mb-1'>magniber</span>
										<span className='badge badge-light-info me-2 mb-1'>buhtrap</span>
										<span className='badge badge-light-info me-2 mb-1'>volodya</span>
										<span className='badge badge-light-info me-2 mb-1'>mimikatz</span>
										<span className='badge badge-light-info me-2 mb-1'>pos</span>
										<span className='badge badge-light-info me-2 mb-1'>trustwave</span>
										<span className='badge badge-light-info me-2 mb-1'>gandcrab</span>
										<span className='badge badge-light-info me-2 mb-1'>point of sales</span>
										<span className='badge badge-light-info me-2 mb-1'>0day</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-22</div></td>
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

export {Maze}
