/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'

type Props = {
  className: string
}

const Clop: React.FC<Props> = ({className}) => {
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>bdfd11b1b092b7c61ce5f02ffc5ad55a</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>accellion</span>
										<span className='badge badge-light-info me-2 mb-1'>clop</span>
										<span className='badge badge-light-info me-2 mb-1'>accellion fta</span>
										<span className='badge badge-light-info me-2 mb-1'>webshell</span>
										<span className='badge badge-light-info me-2 mb-1'>cl0p leaks</span>
										<span className='badge badge-light-info me-2 mb-1'>download</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2546</span>
										<span className='badge badge-light-info me-2 mb-1'>apache</span>
										<span className='badge badge-light-info me-2 mb-1'>dewmode</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>2798c0e836b907e8224520e7e6e4bb42</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cl0p leaks</span>
										<span className='badge badge-light-info me-2 mb-1'>apache</span>
										<span className='badge badge-light-info me-2 mb-1'>accellion fta</span>
										<span className='badge badge-light-info me-2 mb-1'>download</span>
										<span className='badge badge-light-info me-2 mb-1'>accellion</span>
										<span className='badge badge-light-info me-2 mb-1'>dewmode</span>
										<span className='badge badge-light-info me-2 mb-1'>clop</span>
										<span className='badge badge-light-info me-2 mb-1'>webshell</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2546</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>9bbaf89be60a5c455ae5b14cbead82fce22f3b66</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>dewmode</span>
										<span className='badge badge-light-info me-2 mb-1'>apache</span>
										<span className='badge badge-light-info me-2 mb-1'>clop</span>
										<span className='badge badge-light-info me-2 mb-1'>accellion fta</span>
										<span className='badge badge-light-info me-2 mb-1'>download</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2546</span>
										<span className='badge badge-light-info me-2 mb-1'>webshell</span>
										<span className='badge badge-light-info me-2 mb-1'>cl0p leaks</span>
										<span className='badge badge-light-info me-2 mb-1'>accellion</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>5fa2b9546770241da7305356d6427847598288290866837626f621d794692c1b</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>download</span>
										<span className='badge badge-light-info me-2 mb-1'>cl0p leaks</span>
										<span className='badge badge-light-info me-2 mb-1'>accellion fta</span>
										<span className='badge badge-light-info me-2 mb-1'>accellion</span>
										<span className='badge badge-light-info me-2 mb-1'>dewmode</span>
										<span className='badge badge-light-info me-2 mb-1'>clop</span>
										<span className='badge badge-light-info me-2 mb-1'>webshell</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2546</span>
										<span className='badge badge-light-info me-2 mb-1'>apache</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>2e0df09fa37eabcae645302d9865913b818ee0993199a6d904728f3093ff48c7</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>download</span>
										<span className='badge badge-light-info me-2 mb-1'>dewmode</span>
										<span className='badge badge-light-info me-2 mb-1'>webshell</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2546</span>
										<span className='badge badge-light-info me-2 mb-1'>cl0p leaks</span>
										<span className='badge badge-light-info me-2 mb-1'>apache</span>
										<span className='badge badge-light-info me-2 mb-1'>clop</span>
										<span className='badge badge-light-info me-2 mb-1'>accellion fta</span>
										<span className='badge badge-light-info me-2 mb-1'>accellion</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>6d115ae4c32d01a073185df95d3441d51065340ead1eada0efda6975214d1920</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>clop</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-24</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>00e815ade8f3ad89a7726da8edd168df13f96ccb6c3daaf995aa9428bfb9ecf1</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cesicat</span>
										<span className='badge badge-light-info me-2 mb-1'>ta505</span>
										<span className='badge badge-light-info me-2 mb-1'>cybercrime</span>
										<span className='badge badge-light-info me-2 mb-1'>green</span>
										<span className='badge badge-light-info me-2 mb-1'>malspam</span>
										<span className='badge badge-light-info me-2 mb-1'>clop ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>clop</span>
										<span className='badge badge-light-info me-2 mb-1'>organized crime</span>
										<span className='badge badge-light-info me-2 mb-1'>pt esc external</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>enriched</span>
										<span className='badge badge-light-info me-2 mb-1'>apt</span>
										<span className='badge badge-light-info me-2 mb-1'>ephemeral</span>
										<span className='badge badge-light-info me-2 mb-1'>medium</span>
										<span className='badge badge-light-info me-2 mb-1'>malware_outbreak</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-24</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>e19d8919f4cb6c1ef8c7f3929d41e8a1a780132cb10f8b80698c8498028d16eb</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>clop</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-24</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>0d19f60423cb2128555e831dc340152f9588c99f3e47d64f0bb4206a6213d579</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>clop ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>clop</span>
										<span className='badge badge-light-info me-2 mb-1'>ta505</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-24</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>7e91ff12d3f26982473c38a3ae99bfaf0b2966e85046ebed09709b6af797ef66</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>clop</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-24</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>c150954e5fdfc100fbb74258cad6ef2595c239c105ff216b1d9a759c0104be04</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>clop</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>ta505</span>
										<span className='badge badge-light-info me-2 mb-1'>clop ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-24</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>35b0b54d13f50571239732421818c682fbe83075a4a961b20a7570610348aecc</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>clop</span>
										<span className='badge badge-light-info me-2 mb-1'>ta505</span>
										<span className='badge badge-light-info me-2 mb-1'>clop ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-24</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>bc59ff12f71e9c8234c5e335d48f308207f6accfad3e953f447e7de1504e57af</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ta505</span>
										<span className='badge badge-light-info me-2 mb-1'>clop</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>clop ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-24</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>cff818453138dcd8238f87b33a84e1bc1d560dea80c8d2412e1eb3f7242b27da</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>clop</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-24</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>929b7bf174638ff8cb158f4e00bc41ed69f1d2afd41ea3c9ee3b0c7dacdfa238</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>clop</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-24</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>d0cde86d47219e9c56b717f55dcdb01b0566344c13aa671613598cab427345b9</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>clop ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>ta505</span>
										<span className='badge badge-light-info me-2 mb-1'>clop</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-24</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>3ee9b22827cb259f3d69ab974c632cefde71c61b4a9505cec06823076a2f898e</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>clop</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-24</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>e48900dc697582db4655569bb844602ced3ad2b10b507223912048f1f3039ac6</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>clop</span>
										<span className='badge badge-light-info me-2 mb-1'>ta505</span>
										<span className='badge badge-light-info me-2 mb-1'>clop ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-24</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>2f29950640d024779134334cad79e2013871afa08c7be94356694db12ee437e2</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>pt esc external</span>
										<span className='badge badge-light-info me-2 mb-1'>malspam</span>
										<span className='badge badge-light-info me-2 mb-1'>clop ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>medium</span>
										<span className='badge badge-light-info me-2 mb-1'>clop</span>
										<span className='badge badge-light-info me-2 mb-1'>cesicat</span>
										<span className='badge badge-light-info me-2 mb-1'>cybercrime</span>
										<span className='badge badge-light-info me-2 mb-1'>enriched</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>apt</span>
										<span className='badge badge-light-info me-2 mb-1'>malware_outbreak</span>
										<span className='badge badge-light-info me-2 mb-1'>green</span>
										<span className='badge badge-light-info me-2 mb-1'>ephemeral</span>
										<span className='badge badge-light-info me-2 mb-1'>ta505</span>
										<span className='badge badge-light-info me-2 mb-1'>organized crime</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-24</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>102010727c6fbcd9da02d04ede1a8521ba2355d32da849226e96ef052c080b56</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>clop</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-24</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>7ada1228c791de703e2a51b1498bc955f14433f65d33342753fdb81bb35e5886</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>medium</span>
										<span className='badge badge-light-info me-2 mb-1'>cesicat</span>
										<span className='badge badge-light-info me-2 mb-1'>apt</span>
										<span className='badge badge-light-info me-2 mb-1'>green</span>
										<span className='badge badge-light-info me-2 mb-1'>enriched</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>ephemeral</span>
										<span className='badge badge-light-info me-2 mb-1'>pt esc external</span>
										<span className='badge badge-light-info me-2 mb-1'>ta505</span>
										<span className='badge badge-light-info me-2 mb-1'>cybercrime</span>
										<span className='badge badge-light-info me-2 mb-1'>malware_outbreak</span>
										<span className='badge badge-light-info me-2 mb-1'>malspam</span>
										<span className='badge badge-light-info me-2 mb-1'>clop</span>
										<span className='badge badge-light-info me-2 mb-1'>clop ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>organized crime</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-24</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>408af0af7419f67d396f754f01d4757ea89355ad19f71942f8d44c0d5515eec8</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>pt esc external</span>
										<span className='badge badge-light-info me-2 mb-1'>clop ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>organized crime</span>
										<span className='badge badge-light-info me-2 mb-1'>medium</span>
										<span className='badge badge-light-info me-2 mb-1'>malware_outbreak</span>
										<span className='badge badge-light-info me-2 mb-1'>ephemeral</span>
										<span className='badge badge-light-info me-2 mb-1'>green</span>
										<span className='badge badge-light-info me-2 mb-1'>clop</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cesicat</span>
										<span className='badge badge-light-info me-2 mb-1'>enriched</span>
										<span className='badge badge-light-info me-2 mb-1'>ta505</span>
										<span className='badge badge-light-info me-2 mb-1'>apt</span>
										<span className='badge badge-light-info me-2 mb-1'>cybercrime</span>
										<span className='badge badge-light-info me-2 mb-1'>malspam</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-24</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>31829479fa5b094ca3cfd0222e61295fff4821b778e5a7bd228b0c31f8a3cc44</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>green</span>
										<span className='badge badge-light-info me-2 mb-1'>malspam</span>
										<span className='badge badge-light-info me-2 mb-1'>clop ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cybercrime</span>
										<span className='badge badge-light-info me-2 mb-1'>clop</span>
										<span className='badge badge-light-info me-2 mb-1'>enriched</span>
										<span className='badge badge-light-info me-2 mb-1'>malware_outbreak</span>
										<span className='badge badge-light-info me-2 mb-1'>apt</span>
										<span className='badge badge-light-info me-2 mb-1'>organized crime</span>
										<span className='badge badge-light-info me-2 mb-1'>medium</span>
										<span className='badge badge-light-info me-2 mb-1'>ephemeral</span>
										<span className='badge badge-light-info me-2 mb-1'>pt esc external</span>
										<span className='badge badge-light-info me-2 mb-1'>cesicat</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>ta505</span>
										
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
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>8e1bbe4cedeb7c334fe780ab3fb589fe30ed976153618ac3402a5edff1b17d64</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>apt</span>
										<span className='badge badge-light-info me-2 mb-1'>medium</span>
										<span className='badge badge-light-info me-2 mb-1'>malware_outbreak</span>
										<span className='badge badge-light-info me-2 mb-1'>ta505</span>
										<span className='badge badge-light-info me-2 mb-1'>clop ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cesicat</span>
										<span className='badge badge-light-info me-2 mb-1'>malspam</span>
										<span className='badge badge-light-info me-2 mb-1'>organized crime</span>
										<span className='badge badge-light-info me-2 mb-1'>cybercrime</span>
										<span className='badge badge-light-info me-2 mb-1'>clop</span>
										<span className='badge badge-light-info me-2 mb-1'>ephemeral</span>
										<span className='badge badge-light-info me-2 mb-1'>pt esc external</span>
										<span className='badge badge-light-info me-2 mb-1'>enriched</span>
										<span className='badge badge-light-info me-2 mb-1'>green</span>
										
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

export {Clop}
