/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'

type Props = {
  className: string
}

const Darkangels: React.FC<Props> = ({className}) => {
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>1b426f43c91ff3858ed91dfb621cf537</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>helloxd</span>
										<span className='badge badge-light-info me-2 mb-1'>dark angels</span>
										<span className='badge badge-light-info me-2 mb-1'>zeon</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-23</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>fb57abf08a85f1d7ca0a6fdcd76b04ccf964a5b05f2f784492083994773e4590</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>helloxd</span>
										<span className='badge badge-light-info me-2 mb-1'>zeon</span>
										<span className='badge badge-light-info me-2 mb-1'>dark angels</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-23</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>8ff189783dc0646513c791421df723187b614f6dbfafad16763e3c369c5dfa2a</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>dark angels</span>
										<span className='badge badge-light-info me-2 mb-1'>zeon</span>
										<span className='badge badge-light-info me-2 mb-1'>helloxd</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-23</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>c45d82da884285100ce067bb004a3f1e31e151f5</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>dark angels</span>
										<span className='badge badge-light-info me-2 mb-1'>zeon</span>
										<span className='badge badge-light-info me-2 mb-1'>helloxd</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-23</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>529e24c81ede5dfcedcc4fbc7d0030f985c67af1</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>dark angels</span>
										<span className='badge badge-light-info me-2 mb-1'>helloxd</span>
										<span className='badge badge-light-info me-2 mb-1'>zeon</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-23</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>51d18417b2593bb946e08d436692e26da44cfa48</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>dark angels</span>
										<span className='badge badge-light-info me-2 mb-1'>zeon</span>
										<span className='badge badge-light-info me-2 mb-1'>helloxd</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-23</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>7a1b6d3ccf9429a5a5c03ce1e6db91c3095e9f34</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>helloxd</span>
										<span className='badge badge-light-info me-2 mb-1'>dark angels</span>
										<span className='badge badge-light-info me-2 mb-1'>zeon</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-23</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>1b6a36215e0ba54a31ff2fa127510f14</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>helloxd</span>
										<span className='badge badge-light-info me-2 mb-1'>dark angels</span>
										<span className='badge badge-light-info me-2 mb-1'>zeon</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-23</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>8d592cb83e801891e48dcd7886349e25</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>dark angels</span>
										<span className='badge badge-light-info me-2 mb-1'>helloxd</span>
										<span className='badge badge-light-info me-2 mb-1'>zeon</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-23</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>0ddf8c9a59f5fe5337e65d1e5b2e22381c3ce7e2</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>helloxd</span>
										<span className='badge badge-light-info me-2 mb-1'>dark angels</span>
										<span className='badge badge-light-info me-2 mb-1'>zeon</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-23</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>6114c3080b7c019f4ad3b65dbd84fbb1</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>dark angels</span>
										<span className='badge badge-light-info me-2 mb-1'>helloxd</span>
										<span className='badge badge-light-info me-2 mb-1'>zeon</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-23</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>4d65559a14bca55f6cca722d09d80ba3e262053d</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>helloxd</span>
										<span className='badge badge-light-info me-2 mb-1'>dark angels</span>
										<span className='badge badge-light-info me-2 mb-1'>zeon</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-23</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>b97fc627bd5cb4ba0952e6033a09a84e</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>dark angels</span>
										<span className='badge badge-light-info me-2 mb-1'>zeon</span>
										<span className='badge badge-light-info me-2 mb-1'>helloxd</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-23</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>38e05d599877bf18855ad4d178bcd76718cfad1505328d0444363d1f592b0838</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>zeon</span>
										<span className='badge badge-light-info me-2 mb-1'>helloxd</span>
										<span className='badge badge-light-info me-2 mb-1'>dark angels</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-23</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>c860bf644bd5e3d6f4cae67848c4fc769184ae652fcb41cac670042b185d217a</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>dark angels</span>
										<span className='badge badge-light-info me-2 mb-1'>zeon</span>
										<span className='badge badge-light-info me-2 mb-1'>helloxd</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-23</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>66535700bbce7f90d2add7c504bc0e0523d4d71d</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>helloxd</span>
										<span className='badge badge-light-info me-2 mb-1'>zeon</span>
										<span className='badge badge-light-info me-2 mb-1'>dark angels</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-23</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>33f612338b6b5e6b4fe8cbb17208795c</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>dark angels</span>
										<span className='badge badge-light-info me-2 mb-1'>helloxd</span>
										<span className='badge badge-light-info me-2 mb-1'>zeon</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-23</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>4a2ee1666e2e9c40d372853e2203a7f2336b6e03</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>malware</span>
										<span className='badge badge-light-info me-2 mb-1'>microbackdoor</span>
										<span className='badge badge-light-info me-2 mb-1'>babuk</span>
										<span className='badge badge-light-info me-2 mb-1'>dark angels</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>helloxd</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>zeon</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-13</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>ebd310cb5f63b364c4ce3ca24db5d654132b87728babae4dc3fb675266148fe9</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>dark angels</span>
										<span className='badge badge-light-info me-2 mb-1'>microbackdoor</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>malware</span>
										<span className='badge badge-light-info me-2 mb-1'>babuk</span>
										<span className='badge badge-light-info me-2 mb-1'>helloxd</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>zeon</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-13</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>7247f33113710e5d9bd036f4c7ac2d847b0bf2ac2769cd8246a10f09d0a41bab</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>zeon</span>
										<span className='badge badge-light-info me-2 mb-1'>malware</span>
										<span className='badge badge-light-info me-2 mb-1'>dark angels</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>babuk</span>
										<span className='badge badge-light-info me-2 mb-1'>microbackdoor</span>
										<span className='badge badge-light-info me-2 mb-1'>helloxd</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-13</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>4e9d4afc901fa1766e48327f3c9642c893831af310bc18ccf876d44ea4efbf1d</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>malware</span>
										<span className='badge badge-light-info me-2 mb-1'>dark angels</span>
										<span className='badge badge-light-info me-2 mb-1'>zeon</span>
										<span className='badge badge-light-info me-2 mb-1'>microbackdoor</span>
										<span className='badge badge-light-info me-2 mb-1'>helloxd</span>
										<span className='badge badge-light-info me-2 mb-1'>babuk</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-13</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>435781ab608ff908123d9f4758132fa45d459956755d27027a52b8c9e61f9589</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>babuk</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>zeon</span>
										<span className='badge badge-light-info me-2 mb-1'>microbackdoor</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>helloxd</span>
										<span className='badge badge-light-info me-2 mb-1'>dark angels</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>malware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-13</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>709b7e8edb6cc65189739921078b54f0646d38358f9a8993c343b97f3493a4d9</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>babuk</span>
										<span className='badge badge-light-info me-2 mb-1'>zeon</span>
										<span className='badge badge-light-info me-2 mb-1'>dark angels</span>
										<span className='badge badge-light-info me-2 mb-1'>helloxd</span>
										<span className='badge badge-light-info me-2 mb-1'>microbackdoor</span>
										<span className='badge badge-light-info me-2 mb-1'>malware</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-13</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>1758a8db8485f7e70432c07a9e3d5c0bb5743889</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>zeon</span>
										<span className='badge badge-light-info me-2 mb-1'>malware</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>helloxd</span>
										<span className='badge badge-light-info me-2 mb-1'>microbackdoor</span>
										<span className='badge badge-light-info me-2 mb-1'>babuk</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>dark angels</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-13</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>ad5122a5ef7ecdd89d936cb8cc4e2bd5</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>zeon</span>
										<span className='badge badge-light-info me-2 mb-1'>helloxd</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>babuk</span>
										<span className='badge badge-light-info me-2 mb-1'>dark angels</span>
										<span className='badge badge-light-info me-2 mb-1'>microbackdoor</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>malware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-13</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>65ccbd63fbe96ea8830396c575926af476c06352bb88f9c22f90de7bb85366a3</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>dark angels</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>microbackdoor</span>
										<span className='badge badge-light-info me-2 mb-1'>malware</span>
										<span className='badge badge-light-info me-2 mb-1'>babuk</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>zeon</span>
										<span className='badge badge-light-info me-2 mb-1'>helloxd</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-13</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>9785231ebf3d00216aa979f8c705e2513568802e</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>helloxd</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>dark angels</span>
										<span className='badge badge-light-info me-2 mb-1'>zeon</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>babuk</span>
										<span className='badge badge-light-info me-2 mb-1'>microbackdoor</span>
										<span className='badge badge-light-info me-2 mb-1'>malware</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-13</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>93cb0fa81ed42d4c44fac49dd0354d0b</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>microbackdoor</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>helloxd</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>dark angels</span>
										<span className='badge badge-light-info me-2 mb-1'>babuk</span>
										<span className='badge badge-light-info me-2 mb-1'>malware</span>
										<span className='badge badge-light-info me-2 mb-1'>zeon</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-13</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>903c04976fa6e6721c596354f383a4d4272c6730b29eee00b0ec599265963e74</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>helloxd</span>
										<span className='badge badge-light-info me-2 mb-1'>malware</span>
										<span className='badge badge-light-info me-2 mb-1'>babuk</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>zeon</span>
										<span className='badge badge-light-info me-2 mb-1'>microbackdoor</span>
										<span className='badge badge-light-info me-2 mb-1'>dark angels</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-13</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>9c8feeab65f71344713d63f4879e247aba49dce4</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>malware</span>
										<span className='badge badge-light-info me-2 mb-1'>dark angels</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>zeon</span>
										<span className='badge badge-light-info me-2 mb-1'>helloxd</span>
										<span className='badge badge-light-info me-2 mb-1'>microbackdoor</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>babuk</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-13</div></td>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>a034f79273e3f61d34eeadf38f12dee2</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>malware</span>
										<span className='badge badge-light-info me-2 mb-1'>helloxd</span>
										<span className='badge badge-light-info me-2 mb-1'>dark angels</span>
										<span className='badge badge-light-info me-2 mb-1'>zeon</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>microbackdoor</span>
										<span className='badge badge-light-info me-2 mb-1'>babuk</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-06-13</div></td>
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

export {Darkangels}
