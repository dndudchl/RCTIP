/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'

type Props = {
  className: string
}

const Vicesociety: React.FC<Props> = ({className}) => {
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export {Vicesociety}
