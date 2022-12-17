/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'

type Props = {
  className: string
}

const Hellokitty: React.FC<Props> = ({className}) => {
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>warreinolds77@onionmail.org</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>powershell</span>
										<span className='badge badge-light-info me-2 mb-1'>printnightmare</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>final</span>
										<span className='badge badge-light-info me-2 mb-1'>bloodhound</span>
										<span className='badge badge-light-info me-2 mb-1'>vice society</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>onionmail</span>
										<span className='badge badge-light-info me-2 mb-1'>psexec</span>
										<span className='badge badge-light-info me-2 mb-1'>wildfire</span>
										<span className='badge badge-light-info me-2 mb-1'>zeppelin</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-06</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>thomasmoore@onionmail.org</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>powershell</span>
										<span className='badge badge-light-info me-2 mb-1'>vice society</span>
										<span className='badge badge-light-info me-2 mb-1'>onionmail</span>
										<span className='badge badge-light-info me-2 mb-1'>final</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>bloodhound</span>
										<span className='badge badge-light-info me-2 mb-1'>wildfire</span>
										<span className='badge badge-light-info me-2 mb-1'>printnightmare</span>
										<span className='badge badge-light-info me-2 mb-1'>zeppelin</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>psexec</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-06</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>sylvesterjones@onionmail.org</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>wildfire</span>
										<span className='badge badge-light-info me-2 mb-1'>vice society</span>
										<span className='badge badge-light-info me-2 mb-1'>printnightmare</span>
										<span className='badge badge-light-info me-2 mb-1'>final</span>
										<span className='badge badge-light-info me-2 mb-1'>powershell</span>
										<span className='badge badge-light-info me-2 mb-1'>psexec</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>onionmail</span>
										<span className='badge badge-light-info me-2 mb-1'>zeppelin</span>
										<span className='badge badge-light-info me-2 mb-1'>bloodhound</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-06</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>mollythomson@onionmail.org</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>onionmail</span>
										<span className='badge badge-light-info me-2 mb-1'>psexec</span>
										<span className='badge badge-light-info me-2 mb-1'>wildfire</span>
										<span className='badge badge-light-info me-2 mb-1'>bloodhound</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>powershell</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>printnightmare</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>zeppelin</span>
										<span className='badge badge-light-info me-2 mb-1'>vice society</span>
										<span className='badge badge-light-info me-2 mb-1'>final</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-06</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>lonnieguzman@onionmail.org</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>onionmail</span>
										<span className='badge badge-light-info me-2 mb-1'>psexec</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>zeppelin</span>
										<span className='badge badge-light-info me-2 mb-1'>powershell</span>
										<span className='badge badge-light-info me-2 mb-1'>bloodhound</span>
										<span className='badge badge-light-info me-2 mb-1'>vice society</span>
										<span className='badge badge-light-info me-2 mb-1'>wildfire</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>printnightmare</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>final</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-06</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>lewiselsberry@onionmail.org</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>final</span>
										<span className='badge badge-light-info me-2 mb-1'>zeppelin</span>
										<span className='badge badge-light-info me-2 mb-1'>bloodhound</span>
										<span className='badge badge-light-info me-2 mb-1'>onionmail</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>psexec</span>
										<span className='badge badge-light-info me-2 mb-1'>wildfire</span>
										<span className='badge badge-light-info me-2 mb-1'>printnightmare</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>vice society</span>
										<span className='badge badge-light-info me-2 mb-1'>powershell</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-06</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>larrygold@onionmail.org</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>bloodhound</span>
										<span className='badge badge-light-info me-2 mb-1'>wildfire</span>
										<span className='badge badge-light-info me-2 mb-1'>onionmail</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>powershell</span>
										<span className='badge badge-light-info me-2 mb-1'>zeppelin</span>
										<span className='badge badge-light-info me-2 mb-1'>final</span>
										<span className='badge badge-light-info me-2 mb-1'>printnightmare</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>vice society</span>
										<span className='badge badge-light-info me-2 mb-1'>psexec</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-06</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>inezeng@onionmail.org</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>powershell</span>
										<span className='badge badge-light-info me-2 mb-1'>onionmail</span>
										<span className='badge badge-light-info me-2 mb-1'>vice society</span>
										<span className='badge badge-light-info me-2 mb-1'>printnightmare</span>
										<span className='badge badge-light-info me-2 mb-1'>psexec</span>
										<span className='badge badge-light-info me-2 mb-1'>zeppelin</span>
										<span className='badge badge-light-info me-2 mb-1'>final</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>bloodhound</span>
										<span className='badge badge-light-info me-2 mb-1'>wildfire</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-06</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>freddieferrell@onionmail.org</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>printnightmare</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>powershell</span>
										<span className='badge badge-light-info me-2 mb-1'>zeppelin</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>vice society</span>
										<span className='badge badge-light-info me-2 mb-1'>psexec</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>onionmail</span>
										<span className='badge badge-light-info me-2 mb-1'>wildfire</span>
										<span className='badge badge-light-info me-2 mb-1'>bloodhound</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>final</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-06</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>daltonreed@onionmail.org</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>printnightmare</span>
										<span className='badge badge-light-info me-2 mb-1'>bloodhound</span>
										<span className='badge badge-light-info me-2 mb-1'>zeppelin</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>wildfire</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>final</span>
										<span className='badge badge-light-info me-2 mb-1'>vice society</span>
										<span className='badge badge-light-info me-2 mb-1'>powershell</span>
										<span className='badge badge-light-info me-2 mb-1'>onionmail</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>psexec</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-06</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>bruceboyle@onionmail.org</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>psexec</span>
										<span className='badge badge-light-info me-2 mb-1'>wildfire</span>
										<span className='badge badge-light-info me-2 mb-1'>vice society</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>final</span>
										<span className='badge badge-light-info me-2 mb-1'>printnightmare</span>
										<span className='badge badge-light-info me-2 mb-1'>bloodhound</span>
										<span className='badge badge-light-info me-2 mb-1'>onionmail</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>powershell</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>zeppelin</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-06</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>brendaevans4454@onionmail.org</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>powershell</span>
										<span className='badge badge-light-info me-2 mb-1'>onionmail</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>bloodhound</span>
										<span className='badge badge-light-info me-2 mb-1'>zeppelin</span>
										<span className='badge badge-light-info me-2 mb-1'>wildfire</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>psexec</span>
										<span className='badge badge-light-info me-2 mb-1'>vice society</span>
										<span className='badge badge-light-info me-2 mb-1'>printnightmare</span>
										<span className='badge badge-light-info me-2 mb-1'>final</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-06</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>b1f3004139e20cc9773bb0c604bfe00a050dc323</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>wildfire</span>
										<span className='badge badge-light-info me-2 mb-1'>psexec</span>
										<span className='badge badge-light-info me-2 mb-1'>printnightmare</span>
										<span className='badge badge-light-info me-2 mb-1'>vice society</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>onionmail</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>bloodhound</span>
										<span className='badge badge-light-info me-2 mb-1'>powershell</span>
										<span className='badge badge-light-info me-2 mb-1'>final</span>
										<span className='badge badge-light-info me-2 mb-1'>zeppelin</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-06</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>ssq4zimieeanazkzc5ld4v5hdibi2nzwzdibfh5n5w4pw5mcik76lzyd.onion</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>bloodhound</span>
										<span className='badge badge-light-info me-2 mb-1'>powershell</span>
										<span className='badge badge-light-info me-2 mb-1'>psexec</span>
										<span className='badge badge-light-info me-2 mb-1'>onionmail</span>
										<span className='badge badge-light-info me-2 mb-1'>vice society</span>
										<span className='badge badge-light-info me-2 mb-1'>wildfire</span>
										<span className='badge badge-light-info me-2 mb-1'>final</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>printnightmare</span>
										<span className='badge badge-light-info me-2 mb-1'>zeppelin</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-06</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>2cf4020ec3cf752f7d8524296c041658</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>psexec</span>
										<span className='badge badge-light-info me-2 mb-1'>final</span>
										<span className='badge badge-light-info me-2 mb-1'>printnightmare</span>
										<span className='badge badge-light-info me-2 mb-1'>bloodhound</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>vice society</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>powershell</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>onionmail</span>
										<span className='badge badge-light-info me-2 mb-1'>wildfire</span>
										<span className='badge badge-light-info me-2 mb-1'>zeppelin</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-06</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>643a3121166cd1ee5fc6848f099be7c7c24d36f5922f58052802b91f032a5f0f</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>final</span>
										<span className='badge badge-light-info me-2 mb-1'>printnightmare</span>
										<span className='badge badge-light-info me-2 mb-1'>powershell</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>wildfire</span>
										<span className='badge badge-light-info me-2 mb-1'>onionmail</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>vice society</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>psexec</span>
										<span className='badge badge-light-info me-2 mb-1'>bloodhound</span>
										<span className='badge badge-light-info me-2 mb-1'>zeppelin</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-06</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>1f45a5e3dc88e363fd6ff83d52a6a2e4ddd8951f</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>wildfire</span>
										<span className='badge badge-light-info me-2 mb-1'>vice society</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>bloodhound</span>
										<span className='badge badge-light-info me-2 mb-1'>powershell</span>
										<span className='badge badge-light-info me-2 mb-1'>zeppelin</span>
										<span className='badge badge-light-info me-2 mb-1'>printnightmare</span>
										<span className='badge badge-light-info me-2 mb-1'>psexec</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>onionmail</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>final</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-06</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>24efa10a2b51c5fd6e45da6babd4e797d9cae399be98941f950abf7b5e9a4cd7</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>powershell</span>
										<span className='badge badge-light-info me-2 mb-1'>final</span>
										<span className='badge badge-light-info me-2 mb-1'>vice society</span>
										<span className='badge badge-light-info me-2 mb-1'>wildfire</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>bloodhound</span>
										<span className='badge badge-light-info me-2 mb-1'>printnightmare</span>
										<span className='badge badge-light-info me-2 mb-1'>onionmail</span>
										<span className='badge badge-light-info me-2 mb-1'>zeppelin</span>
										<span className='badge badge-light-info me-2 mb-1'>psexec</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-06</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>92e655dbe599a3ecfc9c8f510ccc03f81185f660</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>printnightmare</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>psexec</span>
										<span className='badge badge-light-info me-2 mb-1'>bloodhound</span>
										<span className='badge badge-light-info me-2 mb-1'>final</span>
										<span className='badge badge-light-info me-2 mb-1'>wildfire</span>
										<span className='badge badge-light-info me-2 mb-1'>powershell</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>onionmail</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>vice society</span>
										<span className='badge badge-light-info me-2 mb-1'>zeppelin</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-06</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>4aa0fef7356c18214f9c9bb3a9ea16cd</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>printnightmare</span>
										<span className='badge badge-light-info me-2 mb-1'>zeppelin</span>
										<span className='badge badge-light-info me-2 mb-1'>psexec</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>vice society</span>
										<span className='badge badge-light-info me-2 mb-1'>bloodhound</span>
										<span className='badge badge-light-info me-2 mb-1'>final</span>
										<span className='badge badge-light-info me-2 mb-1'>powershell</span>
										<span className='badge badge-light-info me-2 mb-1'>wildfire</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>onionmail</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-06</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>8090cb9a98392d753116e30e0be9f25a</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>psexec</span>
										<span className='badge badge-light-info me-2 mb-1'>printnightmare</span>
										<span className='badge badge-light-info me-2 mb-1'>powershell</span>
										<span className='badge badge-light-info me-2 mb-1'>vice society</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>zeppelin</span>
										<span className='badge badge-light-info me-2 mb-1'>onionmail</span>
										<span className='badge badge-light-info me-2 mb-1'>wildfire</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>final</span>
										<span className='badge badge-light-info me-2 mb-1'>bloodhound</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-06</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>78efe6f5a34ba7579cfd8fc551274029920a9086cb713e859f60f97f591a7b04</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>wildfire</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>zeppelin</span>
										<span className='badge badge-light-info me-2 mb-1'>psexec</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>onionmail</span>
										<span className='badge badge-light-info me-2 mb-1'>vice society</span>
										<span className='badge badge-light-info me-2 mb-1'>powershell</span>
										<span className='badge badge-light-info me-2 mb-1'>printnightmare</span>
										<span className='badge badge-light-info me-2 mb-1'>bloodhound</span>
										<span className='badge badge-light-info me-2 mb-1'>final</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-06</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>754f2022b72da704eb8636610c6d2ffcbdae9e8740555030a07c8c147387a537</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>zeppelin</span>
										<span className='badge badge-light-info me-2 mb-1'>bloodhound</span>
										<span className='badge badge-light-info me-2 mb-1'>vice society</span>
										<span className='badge badge-light-info me-2 mb-1'>final</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>printnightmare</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>wildfire</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>powershell</span>
										<span className='badge badge-light-info me-2 mb-1'>psexec</span>
										<span className='badge badge-light-info me-2 mb-1'>onionmail</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-06</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>8acb34bed3caa60cae3f08f75d53f727</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>powershell</span>
										<span className='badge badge-light-info me-2 mb-1'>bloodhound</span>
										<span className='badge badge-light-info me-2 mb-1'>wildfire</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>final</span>
										<span className='badge badge-light-info me-2 mb-1'>zeppelin</span>
										<span className='badge badge-light-info me-2 mb-1'>onionmail</span>
										<span className='badge badge-light-info me-2 mb-1'>vice society</span>
										<span className='badge badge-light-info me-2 mb-1'>psexec</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>printnightmare</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-06</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>gunyhng6pabzcurl7ipx2pbmjxpvqnu6mxf2h3vdeenam34inj4ndryd.onion</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>final</span>
										<span className='badge badge-light-info me-2 mb-1'>psexec</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>bloodhound</span>
										<span className='badge badge-light-info me-2 mb-1'>printnightmare</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>zeppelin</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>onionmail</span>
										<span className='badge badge-light-info me-2 mb-1'>wildfire</span>
										<span className='badge badge-light-info me-2 mb-1'>vice society</span>
										<span className='badge badge-light-info me-2 mb-1'>powershell</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-12-06</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>vicesociety@onionmail.org</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hello kitty</span>
										<span className='badge badge-light-info me-2 mb-1'>zeppelin</span>
										<span className='badge badge-light-info me-2 mb-1'>powershell empire</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>wmi</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>printnightmare</span>
										<span className='badge badge-light-info me-2 mb-1'>vice society</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-09-07</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>vsociethok6sbprvevl4dlwbqrzyhxcxaqpvcqt5belwvsuxaxsutyad.onion</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>wmi</span>
										<span className='badge badge-light-info me-2 mb-1'>printnightmare</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>powershell empire</span>
										<span className='badge badge-light-info me-2 mb-1'>hello kitty</span>
										<span className='badge badge-light-info me-2 mb-1'>zeppelin</span>
										<span className='badge badge-light-info me-2 mb-1'>vice society</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-09-07</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>5.255.99.59</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hello kitty</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>zeppelin</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>wmi</span>
										<span className='badge badge-light-info me-2 mb-1'>powershell empire</span>
										<span className='badge badge-light-info me-2 mb-1'>printnightmare</span>
										<span className='badge badge-light-info me-2 mb-1'>vice society</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-09-07</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>5.161.136.176</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>printnightmare</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hello kitty</span>
										<span className='badge badge-light-info me-2 mb-1'>vice society</span>
										<span className='badge badge-light-info me-2 mb-1'>zeppelin</span>
										<span className='badge badge-light-info me-2 mb-1'>powershell empire</span>
										<span className='badge badge-light-info me-2 mb-1'>wmi</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-09-07</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>198.252.98.184</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>printnightmare</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>zeppelin</span>
										<span className='badge badge-light-info me-2 mb-1'>hello kitty</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>wmi</span>
										<span className='badge badge-light-info me-2 mb-1'>vice society</span>
										<span className='badge badge-light-info me-2 mb-1'>powershell empire</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-09-07</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>194.34.246.90</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>printnightmare</span>
										<span className='badge badge-light-info me-2 mb-1'>vice society</span>
										<span className='badge badge-light-info me-2 mb-1'>zeppelin</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>hello kitty</span>
										<span className='badge badge-light-info me-2 mb-1'>wmi</span>
										<span className='badge badge-light-info me-2 mb-1'>powershell empire</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-09-07</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>c9c2b6a5b930392b98f132f5395d54947391cb79</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>zeppelin</span>
										<span className='badge badge-light-info me-2 mb-1'>wmi</span>
										<span className='badge badge-light-info me-2 mb-1'>printnightmare</span>
										<span className='badge badge-light-info me-2 mb-1'>hello kitty</span>
										<span className='badge badge-light-info me-2 mb-1'>powershell empire</span>
										<span className='badge badge-light-info me-2 mb-1'>vice society</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-09-07</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>41dc0ba220f30c70aea019de214eccd650bc6f37</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>powershell empire</span>
										<span className='badge badge-light-info me-2 mb-1'>printnightmare</span>
										<span className='badge badge-light-info me-2 mb-1'>wmi</span>
										<span className='badge badge-light-info me-2 mb-1'>zeppelin</span>
										<span className='badge badge-light-info me-2 mb-1'>vice society</span>
										<span className='badge badge-light-info me-2 mb-1'>hello kitty</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-09-07</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>fb91e471cfa246beb9618e1689f1ae1d</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>wmi</span>
										<span className='badge badge-light-info me-2 mb-1'>zeppelin</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>hello kitty</span>
										<span className='badge badge-light-info me-2 mb-1'>powershell empire</span>
										<span className='badge badge-light-info me-2 mb-1'>printnightmare</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>vice society</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-09-07</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>3122ea585623531df2e860e7d0df0f25cce39b21</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>zeppelin</span>
										<span className='badge badge-light-info me-2 mb-1'>hello kitty</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>printnightmare</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>powershell empire</span>
										<span className='badge badge-light-info me-2 mb-1'>wmi</span>
										<span className='badge badge-light-info me-2 mb-1'>vice society</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-09-07</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>v-society.official@onionmail.org</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>wmi</span>
										<span className='badge badge-light-info me-2 mb-1'>zeppelin</span>
										<span className='badge badge-light-info me-2 mb-1'>vice society</span>
										<span className='badge badge-light-info me-2 mb-1'>hello kitty</span>
										<span className='badge badge-light-info me-2 mb-1'>printnightmare</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>powershell empire</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-09-07</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>ab440c4391ea3a01bebbb651c80c27847b58ac928b32d73ed3b19a0b17dd7e75</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>printnightmare</span>
										<span className='badge badge-light-info me-2 mb-1'>lockbit</span>
										<span className='badge badge-light-info me-2 mb-1'>psexec</span>
										<span className='badge badge-light-info me-2 mb-1'>onionmail</span>
										<span className='badge badge-light-info me-2 mb-1'>powershell</span>
										<span className='badge badge-light-info me-2 mb-1'>bloodhound</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>zeppelin</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>vice society</span>
										<span className='badge badge-light-info me-2 mb-1'>final</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>wildfire</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-08-12</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>fa217b2e35f57d0e9a03327ee2b07deac4fc2dde</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>da22ed719fb35f533a53066f746ede4af21348cc</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>de60375bb4b4f822e28e80fd0b5b812920cd56b4</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>9039b2ca4f7b40c7d44e7ea6a52a55e8747b5c3c</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>66cf12f4475dea2a75c29c3d7ceb6f0164f3e26f</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>2c916c1c094e35577ca0b863168dee48991f1a2c</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>e8044ecd514574b71c353a9b640c8d6705a8051c</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>dc8595989fc1bc784138b56cf32e8b194f425727</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>2342cc02a5ac26fd78603ac82e2d90e1b54ff71f</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>f5762dd7ab230d9caa367bc76986e6954caad490</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>da2e0f4f082bb08e957e837657a70a0ae3a301b6</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>1e71d6f6fa31cfcc7c96ca8f74e63f6427722fd3</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>521c8b7e4089cbad6ba819a2eb1fb4e61f559af2</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>e6e4f57df5c0db2aa0d64ca7b5fb65a4395e3b5f</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>11769585ecd52dbd3db5388b271365501f068819</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>f18a4a179239087617838724d3cb1ec6536782ec</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>dc1f73c9100c0c6d86c56b2b109e3678b8d1e30b</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>04d0a93de70209b1038694fa407ba5eda44b1e99</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>47d2fb04093be36ef5ebeb903843c081fd90925b</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>8fb41b6d5186cc996b4b92e812407a1adee8932f</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>cab7afec0b4b8849cef1a00557e8fc9f6f2f05996861a6665d7f67b5e961b195</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>e09ead5b6ac9ec9203b9fb6c9152ba451498bb291478a69ac71ff6c36c468f9e</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>fdc2de095390ec046dc3f398a47a38670282bdc2ef76dd7fc1195ac4ee0421a8</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>ae2d3a638b12e97d4a8e54fb5770fad51103d38d6faf645cf7c479d687bd5205</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>dae04677e464f4e4cc317e369380d2ff1be7c2819b83ed0ad04b4c9489af381c</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>bade05a30aba181ffbe4325c1ba6c76ef9e02cbe41a4190bd3671152c51c4a7b</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>dc007e71085297883ca68a919e37687427b7e6db0c24ca014c148f226d8dd98f</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>ef614b456ca4eaa8156a895f450577600ad41bd553b4512ae6abf3fb8b5eb04e</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>a147945635d5bd0fa832c9b55bc3ebcea7a7787e8f89b98a44279f8eddda2a77</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>abbe770ced0447a8677afc64040c77e103c8297ab7e34877d48e14a779e6082e</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>3f77e49bba22d8df168f774239c523979a3d8e353f2838d97d7db2dc1166d00c</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>10887d13dba1f83ef34e047455a04416d25a83079a7f3798ce3483e0526e3768</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>13e493c48958a00f2eda0422c719b8f271cfbc8c14d66c642fa2f6f42928bed4</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>7be901c5f7ffeb8f99e4f5813c259d0227335680380ed06df03fb836a041cb06</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>7cd18fad221a1745cd608c6231eedb47c9ca548455a053c45bef6edbd4852ab1</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>6abed03c2454050e1095f6db954fb2a40ba5af0736e5bf31bf9db36df149fd2e</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>71c97ea6d14f4a6da86d51d07ea284447cc486488b9637f9c1de0ba42054c6f2</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>15df17be2f97295b0d8d66e434e2949850c8edc2a8edddf9b30b2b638b20612b</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>7cae410d16d9315655f8a2e64458f5bf9a5224d9c4e3743cf31c180d304c8473</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>52dace403e8f9b4f7ea20c0c3565fa11b6953b404a7d49d63af237a57b36fd2a</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>71889fdf2d7616f366c38072ef3d24b021068ab8</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>b9446c5f3fb7dd19e9f495d88431df2f0899ecb2</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>e879704f962d78da77498ad53b50a48bf55b15a5</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>325552a805f429334dc1631a9b02a4d8cc0c9213</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>a0181227dcb49b9417b468eeb38a2f8655553409</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>0b4aeaff91b347197310fcbd432e2fe06d583b57</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>fbb6f8dae1753cd2a282ee161bc5496486cc06f7</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>dd10c4c9a71b5850c23fde513525cac86943523e</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>e7f0c17b338d78c4f8b82b032af9f81828512b30</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>c4a1eb629133a63dbfc7bdae189bfa73168c260c</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>c2498845ed4b287fd0f95528926c8ee620ef0cbb5b27865b2007d6379ffe4323</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>cf416c1893098fcb4a3572c9575a43d53ef3657bf48a597174ac2283fbcb0f4c</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>fe6f356105b488f407ad09819547e138007d6a6c5c1e731c7da52f5a985006ef</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>822e73ed2f92e3a061fa830244cd838617d6533ee47143a98c9cb1f119026adc</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>99baffcd7a6b939b72c99af7c1e88523a50053ab966a079d9bf268aff884426e</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>947e357bfdfe411be6c97af6559fd1cdc5c9d6f5cea122bf174d124ee03d2de8</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>b41a303a4caa71fa260dd601a796033d8bfebcaa6bd9dfd7ad956fac5229a735</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>3b90d9fad35a45a738c6b2830896168c99014474de17984411be61b25acf6db5</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>3ae7bedf236d4e53a33f3a3e1e80eae2d93e91b1988da2f7fcb8fde5dcc3a0e9</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>0e5f7737704c8f25b2b8157561be54a463057cd4d79c7e016c30a1cf6590a85c</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>060772ad7c9ce67a7698f4dadbae976012842ffe</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>4aa0985ccd4389eef5f3d6d9607ce27b0659aa0e839d1e7a0dc6f1a7ebe31878</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>61e286c62e556ac79b01c17357176e58efb67d86c5d17407e128094c3151f7f9</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>ffa5e945264288d4dec91d6871636f67624fd6ea</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>2770fec86275dfb1a4a05e2d56bc27a089197666</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>63ba6db8c81c60dd9f1a0c7c4a4c51e2e56883f063509ed7b543ad7651fd8806</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>48cb6bdbe092e5a90c778114b2dda43ce3221c9f</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>3090bff3d16b0b150444c3bfb196229ba0ab0b6b826fa306803de0192beddb80</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>6732aef6139c086ba62bd907ebdfa191a42529a6</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>9882c2f5a95d7680626470f6c0d3609c7590eb552065f81ab41ffe074ea74e82</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-28</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>6x7dp6h3w6q3ugjv4yv5gycj3femb24kysgry5b44hhgfwc5ml5qrdad.onion</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>fadd8d7c13a18c251ded1f645ffea18a37f1c2de</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>501487b025f25ddf1ca32deb57a2b4db43ccf6635c1edc74b9cff54ce0e5bcfe</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>5822f65dec879ba585112976a632b2c4435abf90</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cyberpunk</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>enterprise</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>cd projekt</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>3294a12a583d2634f6e3d1232052dfe0cd51a44a</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cyberpunk</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>enterprise</span>
										<span className='badge badge-light-info me-2 mb-1'>cd projekt</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>bacf50b20f1cf2165ac96535aeac36b49c8a8677</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>cd projekt</span>
										<span className='badge badge-light-info me-2 mb-1'>enterprise</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>cyberpunk</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>4501fdf303206d0692f6d717dd2f1deb16a1ccab</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cyberpunk</span>
										<span className='badge badge-light-info me-2 mb-1'>cd projekt</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>enterprise</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>ca010ca1e7d5104049c09eefca128cc0e50729e1</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>cyberpunk</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>cd projekt</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>enterprise</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>a63879a8f90286ca0ba54b446f94dd2e51da549dc4ebd91cb67018e910436280</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cd projekt</span>
										<span className='badge badge-light-info me-2 mb-1'>enterprise</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>cyberpunk</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>a6067ecff5c441c2e9654abfe928ae5a81b57e19f3a80ac945a7780f92b39ff3</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>enterprise</span>
										<span className='badge badge-light-info me-2 mb-1'>cyberpunk</span>
										<span className='badge badge-light-info me-2 mb-1'>cd projekt</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>613f9fb99d927e02ba4d7b7122df577fe775e2e56d7ddce5636fd810fc1392ad</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>enterprise</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>cyberpunk</span>
										<span className='badge badge-light-info me-2 mb-1'>cd projekt</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>56978ab3cb8172239da8742ebe41ef099bb9e1b58e23956a82bf495d7cc94c00</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cyberpunk</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>cd projekt</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>enterprise</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>85cd7c6931b44a14f4899dfd0039e8b4</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>cyberpunk</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>enterprise</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>cd projekt</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>02a08b994265901a649f1bcf6772bc06df2eb51eb09906af9fd0f4a8103e9851</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>cd projekt</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>cyberpunk</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>enterprise</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>8e4a887acab5f9475c5fa9a26fb9e720</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cyberpunk</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>enterprise</span>
										<span className='badge badge-light-info me-2 mb-1'>cd projekt</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>6d321248c816c61a973c9195af30b25b</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>cd projekt</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>cyberpunk</span>
										<span className='badge badge-light-info me-2 mb-1'>enterprise</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>ccacf4658ae778d02e4e55cd161b5a0772eb8b8eee62fed34e2d8f11db2cc4bc</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>7d57e0ba8b36ec221b16807ce4e13a1125d53922fa50c3827a5ebd6811736ffd</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>fdf9b1098480dd4145d7d39dc1b75fb6180e09ec</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>b16a1eb8bc2e5d4ded04bfaa9ee2b861ead143ba</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>portalcos.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
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
								<td><div className='text-dark fw-bold fs-6'>Domain-Name</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>feticost.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>cosarm.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>f739977004981fbe4a54bc68be18ea79</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
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
								<td><div className='text-dark fw-bold fs-6'>Domain-Name</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>celomito.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>f568229e696c0e82abb35ec73d162d5e</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>f0751bef4804fadfe2b993bf25791c49</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>edf567bd19d09b0bab4a8d068af15572</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>e39184eacba2b05aaa529547abf41d2b</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>e18b27f75c95b4d50bfcbcd00a5bd6c5</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>df6e6b3e53cc713276a03cce8361ae0f</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>d96adf82f061b1a6c80699364a1e3208</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>d87fcd8d2bf450b0056a151e9a116f72</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>cf1b9284d239928cce1839ea8919a7af</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>c925822c6d5175c30ba96388b07e9e16</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>c171bcd34151cbcd48edbce13796e0ed</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>c12a96e9c50db5f8b0b3b5f9f3f134f0</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>af568e8a6060812f040f0cb0fd6f5a7b</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>a809068b052bc209d0ab13f6c5c8b4e7</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>a64d79eba40229ae9aaebbd73938b985</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>a5b26931a1519e9ceda04b4c997bb01f</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>a01a2ba3ae9f50a5aa8a5e3492891082</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>87c78d62fd35bb25e34abb8f4caace4a</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>87c0b190e3b4ab9214e10a2d1c182153</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>8517cf209c905e801241690648f36a97</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>8226d7615532f32eca8c04ac0d41a9fd</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>8071f66d64395911a7aa0d2057b9b00d</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>7d6e57cbc112ebd3d3c95d3c73451a38</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>74c688a22822b2ab8f18eafad2271cac</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>6c849920155f48d4b4aafce0fc49eb5b</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>6382d48fae675084d30ccb69b4664cbb</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>57824214710bc0cdb22463571a72afd0</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>4d3d3919dda002511e03310c49b7b47f</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>4aa3eab3f657498f52757dc46b8d1f11</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>46ecc24ef6d20f3eaf71ff37610d57d1</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>39ea2394a6e6c39c5d7722dc996daf05</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cyberpunk</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>cd projekt</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>enterprise</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>31dcd09eb9fa2050aadc0e6ca05957bf</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>29e53b32d5b4aae6d9a3b3c81648653c</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>22d35005e926fe29379cb07b810a6075</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>1f6495ea7606a15daa79be93070159a8</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>1cd03c0d00f7bfa7ca73f7d73677d8f8</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>1b0b9e4cddcbcb02affe9c8124855e58</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>1a79b6d169aac719c9323bc3ee4a8361</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>136bd70f7aa98f52861879d7dca03cf2</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>09a05a2212bd2c0fe0e2881401fbff17</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>06ce6cd8bde756265f95fcf4eecadbe9</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>cd projekt</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>enterprise</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>cyberpunk</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>fa722d0667418d68c4935e1461010a8f730f02fa1f595ee68bd0768fd5d1f8bb</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>cd projekt</span>
										<span className='badge badge-light-info me-2 mb-1'>enterprise</span>
										<span className='badge badge-light-info me-2 mb-1'>cyberpunk</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>c7d6719bbfb5baaadda498bf5ef49a3ada1d795b9ae4709074b0e3976968741e</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>enterprise</span>
										<span className='badge badge-light-info me-2 mb-1'>cyberpunk</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>cd projekt</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>78afe88dbfa9f7794037432db3975fa057eae3e4dc0f39bf19f2f04fa6e5c07c</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cd projekt</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>enterprise</span>
										<span className='badge badge-light-info me-2 mb-1'>cyberpunk</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>9a7daafc56300bd94ceef23eac56a0735b63ec6b9a7a409fb5a9b63efe1aa0b0</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cyberpunk</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>cd projekt</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>enterprise</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>38d9a71dc7b3c257e4bd0a536067ff91a500a49ece7036f9594b042dd0409339</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>enterprise</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cd projekt</span>
										<span className='badge badge-light-info me-2 mb-1'>cyberpunk</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>65b5f8cc7b0b6315fe934578f9cad4faf7da41f2</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>c50ab1df254c185506ab892dc5c8e24b</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>ab828f0e0555f88e3005387cb523f221a1933bbd7db4f05902a1e5cc289e7ba4</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>systembc</span>
										<span className='badge badge-light-info me-2 mb-1'>sombrat</span>
										<span className='badge badge-light-info me-2 mb-1'>cve-2021-20016</span>
										<span className='badge badge-light-info me-2 mb-1'>hellokitty</span>
										<span className='badge badge-light-info me-2 mb-1'>financial threat</span>
										<span className='badge badge-light-info me-2 mb-1'>poland</span>
										<span className='badge badge-light-info me-2 mb-1'>meterpreter</span>
										<span className='badge badge-light-info me-2 mb-1'>foxgrabber</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>europe</span>
										<span className='badge badge-light-info me-2 mb-1'>deathransom</span>
										<span className='badge badge-light-info me-2 mb-1'>fivehands</span>
										<span className='badge badge-light-info me-2 mb-1'>north america</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>unc2447</span>
										<span className='badge badge-light-info me-2 mb-1'>warprism</span>
										
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export {Hellokitty}
