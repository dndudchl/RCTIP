/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'

type Props = {
  className: string
}

const Ransomexx: React.FC<Props> = ({className}) => {
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>c7b28fe059e944f883058450d5c77b03076b0ea1</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>vmware esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>harpy</span>
										<span className='badge badge-light-info me-2 mb-1'>bgh</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2659</span>
										<span className='badge badge-light-info me-2 mb-1'>bokbot</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>smokedham</span>
										<span className='badge badge-light-info me-2 mb-1'>darksupp</span>
										<span className='badge badge-light-info me-2 mb-1'>pyxie</span>
										<span className='badge badge-light-info me-2 mb-1'>defray777</span>
										<span className='badge badge-light-info me-2 mb-1'>anunak</span>
										<span className='badge badge-light-info me-2 mb-1'>sprite spider</span>
										<span className='badge badge-light-info me-2 mb-1'>hypervisor</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2465</span>
										<span className='badge badge-light-info me-2 mb-1'>sekur</span>
										<span className='badge badge-light-info me-2 mb-1'>powersploit</span>
										<span className='badge badge-light-info me-2 mb-1'>griffon</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomexx</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside 2.0</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>linux</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>carbon spider</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2628</span>
										<span className='badge badge-light-info me-2 mb-1'>windows</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>rats</span>
										<span className='badge badge-light-info me-2 mb-1'>vmware</span>
										<span className='badge badge-light-info me-2 mb-1'>mimikatz</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-26</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>da3bb9669fb983ad8d2ffc01aab9d56198bd9cedf2cc4387f19f4604a070a9b5</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hypervisor</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2628</span>
										<span className='badge badge-light-info me-2 mb-1'>smokedham</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>mimikatz</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomexx</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2465</span>
										<span className='badge badge-light-info me-2 mb-1'>bokbot</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2659</span>
										<span className='badge badge-light-info me-2 mb-1'>linux</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>anunak</span>
										<span className='badge badge-light-info me-2 mb-1'>vmware</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>sprite spider</span>
										<span className='badge badge-light-info me-2 mb-1'>sekur</span>
										<span className='badge badge-light-info me-2 mb-1'>bgh</span>
										<span className='badge badge-light-info me-2 mb-1'>darksupp</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>vmware esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside 2.0</span>
										<span className='badge badge-light-info me-2 mb-1'>harpy</span>
										<span className='badge badge-light-info me-2 mb-1'>windows</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>rats</span>
										<span className='badge badge-light-info me-2 mb-1'>griffon</span>
										<span className='badge badge-light-info me-2 mb-1'>defray777</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>pyxie</span>
										<span className='badge badge-light-info me-2 mb-1'>carbon spider</span>
										<span className='badge badge-light-info me-2 mb-1'>powersploit</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-26</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>9351483aad526b5fc5838afa012701790bb93ee9</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>linux</span>
										<span className='badge badge-light-info me-2 mb-1'>vatet loader</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>windows</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomexx</span>
										<span className='badge badge-light-info me-2 mb-1'>pyxie</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-26</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>27a332636099bfb9fa8dd8b0446bff84b5a6843d</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>linux</span>
										<span className='badge badge-light-info me-2 mb-1'>windows</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomexx</span>
										<span className='badge badge-light-info me-2 mb-1'>pyxie</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>vatet loader</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-26</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>fafa158304259d89a36e5266cd70257b</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomexx</span>
										<span className='badge badge-light-info me-2 mb-1'>pyxie</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>vatet loader</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>windows</span>
										<span className='badge badge-light-info me-2 mb-1'>linux</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-26</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>e4267beb59079909a0c24f9cf11bff20</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomexx</span>
										<span className='badge badge-light-info me-2 mb-1'>windows</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>linux</span>
										<span className='badge badge-light-info me-2 mb-1'>pyxie</span>
										<span className='badge badge-light-info me-2 mb-1'>vatet loader</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-26</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>6ea3a0609cbbd6237e80d1513303f379e9704745</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>vatet loader</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomexx</span>
										<span className='badge badge-light-info me-2 mb-1'>linux</span>
										<span className='badge badge-light-info me-2 mb-1'>pyxie</span>
										<span className='badge badge-light-info me-2 mb-1'>windows</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-26</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>884fe75824ad10d800fd85d46b54c8e45c4735db524c247018743eb471190633</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>pyxie</span>
										<span className='badge badge-light-info me-2 mb-1'>linux</span>
										<span className='badge badge-light-info me-2 mb-1'>vatet loader</span>
										<span className='badge badge-light-info me-2 mb-1'>windows</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomexx</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-26</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>87e732bdc3a1ed19904985cfc20da6f26fa8c200ec3b2806c0abc7287e1cdab7</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>vatet loader</span>
										<span className='badge badge-light-info me-2 mb-1'>linux</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomexx</span>
										<span className='badge badge-light-info me-2 mb-1'>pyxie</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>windows</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-26</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>6fb5af0a4381411ff1d9c9041583069b83a0e94ff454cba6fba60e9cd8c6e648</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>windows</span>
										<span className='badge badge-light-info me-2 mb-1'>pyxie</span>
										<span className='badge badge-light-info me-2 mb-1'>linux</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomexx</span>
										<span className='badge badge-light-info me-2 mb-1'>vatet loader</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-26</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>3c5af2d1412d47be0eda681eebf808155a37f4911f2f2925c4adc5c5824dea98</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>pyxie</span>
										<span className='badge badge-light-info me-2 mb-1'>linux</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>windows</span>
										<span className='badge badge-light-info me-2 mb-1'>vatet loader</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomexx</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-26</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>08113ca015468d6c29af4e4e4754c003dacc194ce4a254e15f38060854f18867</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>windows</span>
										<span className='badge badge-light-info me-2 mb-1'>vatet loader</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>linux</span>
										<span className='badge badge-light-info me-2 mb-1'>pyxie</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomexx</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-26</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>9fd438c6e278d0349bf5ffd82fcf27ef</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>pyxie</span>
										<span className='badge badge-light-info me-2 mb-1'>vatet loader</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomexx</span>
										<span className='badge badge-light-info me-2 mb-1'>linux</span>
										<span className='badge badge-light-info me-2 mb-1'>windows</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-26</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>50f191f04aa6cff1d8688a3c5d6cce96739ab6b3</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>linux</span>
										<span className='badge badge-light-info me-2 mb-1'>pyxie</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomexx</span>
										<span className='badge badge-light-info me-2 mb-1'>vatet loader</span>
										<span className='badge badge-light-info me-2 mb-1'>windows</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-26</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>210f47c8f47ded8525da927710abc6ad</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomexx</span>
										<span className='badge badge-light-info me-2 mb-1'>windows</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>pyxie</span>
										<span className='badge badge-light-info me-2 mb-1'>linux</span>
										<span className='badge badge-light-info me-2 mb-1'>vatet loader</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-26</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>91ad089f5259845141dfb10145271553aa711a2b</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>vmware</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>bgh</span>
										<span className='badge badge-light-info me-2 mb-1'>hypervisor</span>
										<span className='badge badge-light-info me-2 mb-1'>linux</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>sekur</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>anunak</span>
										<span className='badge badge-light-info me-2 mb-1'>pyxie</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>vatet loader</span>
										<span className='badge badge-light-info me-2 mb-1'>rats</span>
										<span className='badge badge-light-info me-2 mb-1'>windows</span>
										<span className='badge badge-light-info me-2 mb-1'>griffon</span>
										<span className='badge badge-light-info me-2 mb-1'>powersploit</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomexx</span>
										<span className='badge badge-light-info me-2 mb-1'>carbon spider</span>
										<span className='badge badge-light-info me-2 mb-1'>mimikatz</span>
										<span className='badge badge-light-info me-2 mb-1'>bokbot</span>
										<span className='badge badge-light-info me-2 mb-1'>harpy</span>
										<span className='badge badge-light-info me-2 mb-1'>defray777</span>
										<span className='badge badge-light-info me-2 mb-1'>sprite spider</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-26</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>3bf79cc3ed82edd6bfe1950b7612a20853e28b09</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>windows</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomexx</span>
										<span className='badge badge-light-info me-2 mb-1'>vatet loader</span>
										<span className='badge badge-light-info me-2 mb-1'>linux</span>
										<span className='badge badge-light-info me-2 mb-1'>pyxie</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-26</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>4bb2f87100fca40bfbb102e48ef43e65</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>windows</span>
										<span className='badge badge-light-info me-2 mb-1'>pyxie</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomexx</span>
										<span className='badge badge-light-info me-2 mb-1'>linux</span>
										<span className='badge badge-light-info me-2 mb-1'>vatet loader</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-26</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>b0fd45162c2219e14bdccab76f33946e</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>mimikatz</span>
										<span className='badge badge-light-info me-2 mb-1'>vmware esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>darksupp</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside 2.0</span>
										<span className='badge badge-light-info me-2 mb-1'>hypervisor</span>
										<span className='badge badge-light-info me-2 mb-1'>bgh</span>
										<span className='badge badge-light-info me-2 mb-1'>windows</span>
										<span className='badge badge-light-info me-2 mb-1'>anunak</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2628</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2659</span>
										<span className='badge badge-light-info me-2 mb-1'>bokbot</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2465</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>vmware</span>
										<span className='badge badge-light-info me-2 mb-1'>sekur</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>linux</span>
										<span className='badge badge-light-info me-2 mb-1'>griffon</span>
										<span className='badge badge-light-info me-2 mb-1'>white</span>
										<span className='badge badge-light-info me-2 mb-1'>pyxie</span>
										<span className='badge badge-light-info me-2 mb-1'>smokedham</span>
										<span className='badge badge-light-info me-2 mb-1'>detect</span>
										<span className='badge badge-light-info me-2 mb-1'>harpy</span>
										<span className='badge badge-light-info me-2 mb-1'>deny</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>carbon spider</span>
										<span className='badge badge-light-info me-2 mb-1'>sprite spider</span>
										<span className='badge badge-light-info me-2 mb-1'>powersploit</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>rats</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomexx</span>
										<span className='badge badge-light-info me-2 mb-1'>defray777</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>0abaa05da2a05977e0baf68838cff1712f1789e0</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>vatet loader</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>trojan</span>
										<span className='badge badge-light-info me-2 mb-1'>encryption</span>
										<span className='badge badge-light-info me-2 mb-1'>phishing</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomexx</span>
										<span className='badge badge-light-info me-2 mb-1'>pyxie</span>
										<span className='badge badge-light-info me-2 mb-1'>elf</span>
										<span className='badge badge-light-info me-2 mb-1'>gold dupont</span>
										<span className='badge badge-light-info me-2 mb-1'>linux</span>
										<span className='badge badge-light-info me-2 mb-1'>defray777 ransomware</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>cb408d45762a628872fa782109e8fcfc3a5bf456074b007de21e9331bb3c5849</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>carbon spider</span>
										<span className='badge badge-light-info me-2 mb-1'>hypervisor</span>
										<span className='badge badge-light-info me-2 mb-1'>bokbot</span>
										<span className='badge badge-light-info me-2 mb-1'>bgh</span>
										<span className='badge badge-light-info me-2 mb-1'>pyxie</span>
										<span className='badge badge-light-info me-2 mb-1'>mimikatz</span>
										<span className='badge badge-light-info me-2 mb-1'>anunak</span>
										<span className='badge badge-light-info me-2 mb-1'>vatet loader</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>rats</span>
										<span className='badge badge-light-info me-2 mb-1'>griffon</span>
										<span className='badge badge-light-info me-2 mb-1'>linux</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>windows</span>
										<span className='badge badge-light-info me-2 mb-1'>sprite spider</span>
										<span className='badge badge-light-info me-2 mb-1'>vmware</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomexx</span>
										<span className='badge badge-light-info me-2 mb-1'>sekur</span>
										<span className='badge badge-light-info me-2 mb-1'>powersploit</span>
										<span className='badge badge-light-info me-2 mb-1'>defray777</span>
										<span className='badge badge-light-info me-2 mb-1'>harpy</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>78147d3be7dc8cf7f631de59ab7797679aba167f82655bcae2c1b70f1fafc13d</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>pyxie</span>
										<span className='badge badge-light-info me-2 mb-1'>windows</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomexx</span>
										<span className='badge badge-light-info me-2 mb-1'>linux</span>
										<span className='badge badge-light-info me-2 mb-1'>vatet loader</span>
										<span className='badge badge-light-info me-2 mb-1'>gold dupont</span>
										<span className='badge badge-light-info me-2 mb-1'>defray777 ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>4cae449450c07b7aa74314173c7b00d409eabfe22b86859f3b3acedd66010458</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>gold dupont</span>
										<span className='badge badge-light-info me-2 mb-1'>vatet loader</span>
										<span className='badge badge-light-info me-2 mb-1'>linux</span>
										<span className='badge badge-light-info me-2 mb-1'>trojan</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>phishing</span>
										<span className='badge badge-light-info me-2 mb-1'>defray777 ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomexx</span>
										<span className='badge badge-light-info me-2 mb-1'>elf</span>
										<span className='badge badge-light-info me-2 mb-1'>encryption</span>
										<span className='badge badge-light-info me-2 mb-1'>pyxie</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>fcd21c6fca3b9378961aa1865bee7ecb</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>defray777 ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomexx</span>
										<span className='badge badge-light-info me-2 mb-1'>elf</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>encryption</span>
										<span className='badge badge-light-info me-2 mb-1'>pyxie</span>
										<span className='badge badge-light-info me-2 mb-1'>gold dupont</span>
										<span className='badge badge-light-info me-2 mb-1'>vatet loader</span>
										<span className='badge badge-light-info me-2 mb-1'>linux</span>
										<span className='badge badge-light-info me-2 mb-1'>trojan</span>
										<span className='badge badge-light-info me-2 mb-1'>phishing</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>aa1ddf0c8312349be614ff43e80a262f</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>sekur</span>
										<span className='badge badge-light-info me-2 mb-1'>rats</span>
										<span className='badge badge-light-info me-2 mb-1'>powersploit</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>anunak</span>
										<span className='badge badge-light-info me-2 mb-1'>linux</span>
										<span className='badge badge-light-info me-2 mb-1'>trojan</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>carbon spider</span>
										<span className='badge badge-light-info me-2 mb-1'>harpy</span>
										<span className='badge badge-light-info me-2 mb-1'>griffon</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>bokbot</span>
										<span className='badge badge-light-info me-2 mb-1'>vatet loader</span>
										<span className='badge badge-light-info me-2 mb-1'>defray777</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomexx</span>
										<span className='badge badge-light-info me-2 mb-1'>phishing</span>
										<span className='badge badge-light-info me-2 mb-1'>sprite spider</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>encryption</span>
										<span className='badge badge-light-info me-2 mb-1'>elf</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>ransom</span>
										<span className='badge badge-light-info me-2 mb-1'>windows</span>
										<span className='badge badge-light-info me-2 mb-1'>hypervisor</span>
										<span className='badge badge-light-info me-2 mb-1'>vmware</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>pyxie</span>
										<span className='badge badge-light-info me-2 mb-1'>bgh</span>
										<span className='badge badge-light-info me-2 mb-1'>mimikatz</span>
										
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export {Ransomexx}
