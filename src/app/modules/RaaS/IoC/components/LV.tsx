/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'

type Props = {
  className: string
}

const Lv: React.FC<Props> = ({className}) => {
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>fc0d749c75ccd5bd8811b98dd055f9fa287286f7</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>misp-scraper</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>collection</span>
										<span className='badge badge-light-info me-2 mb-1'>lv</span>
										<span className='badge badge-light-info me-2 mb-1'>blog-post</span>
										<span className='badge badge-light-info me-2 mb-1'>proxyshell</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>complete</span>
										<span className='badge badge-light-info me-2 mb-1'>accomplice</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-10-26</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>f25c9b5f42b19898b2e3df9723bce95cf412a8ff</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>complete</span>
										<span className='badge badge-light-info me-2 mb-1'>lv</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>misp-scraper</span>
										<span className='badge badge-light-info me-2 mb-1'>blog-post</span>
										<span className='badge badge-light-info me-2 mb-1'>collection</span>
										<span className='badge badge-light-info me-2 mb-1'>proxyshell</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>accomplice</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-10-26</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>b8ff09abead5baf707b40c84caf58a3a46f1e05a</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>accomplice</span>
										<span className='badge badge-light-info me-2 mb-1'>blog-post</span>
										<span className='badge badge-light-info me-2 mb-1'>misp-scraper</span>
										<span className='badge badge-light-info me-2 mb-1'>proxyshell</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>complete</span>
										<span className='badge badge-light-info me-2 mb-1'>collection</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>lv</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-10-26</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>9cb059d2c74266b8a42017df8544ea76daae1e87</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>blog-post</span>
										<span className='badge badge-light-info me-2 mb-1'>collection</span>
										<span className='badge badge-light-info me-2 mb-1'>proxyshell</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>misp-scraper</span>
										<span className='badge badge-light-info me-2 mb-1'>complete</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>accomplice</span>
										<span className='badge badge-light-info me-2 mb-1'>lv</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-10-26</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>97822c165acd1c0fd4ff79bbad146f93f367e18c</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>accomplice</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>blog-post</span>
										<span className='badge badge-light-info me-2 mb-1'>collection</span>
										<span className='badge badge-light-info me-2 mb-1'>misp-scraper</span>
										<span className='badge badge-light-info me-2 mb-1'>proxyshell</span>
										<span className='badge badge-light-info me-2 mb-1'>lv</span>
										<span className='badge badge-light-info me-2 mb-1'>complete</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-10-26</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>3ffc87d9b429b64c09fcc26f1561993c3fb698f4</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>blog-post</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>accomplice</span>
										<span className='badge badge-light-info me-2 mb-1'>lv</span>
										<span className='badge badge-light-info me-2 mb-1'>complete</span>
										<span className='badge badge-light-info me-2 mb-1'>misp-scraper</span>
										<span className='badge badge-light-info me-2 mb-1'>proxyshell</span>
										<span className='badge badge-light-info me-2 mb-1'>collection</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-10-26</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>2e02a6858b4e8dd8b4bb1691b87bc7d5545297bc</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>accomplice</span>
										<span className='badge badge-light-info me-2 mb-1'>proxyshell</span>
										<span className='badge badge-light-info me-2 mb-1'>blog-post</span>
										<span className='badge badge-light-info me-2 mb-1'>lv</span>
										<span className='badge badge-light-info me-2 mb-1'>misp-scraper</span>
										<span className='badge badge-light-info me-2 mb-1'>complete</span>
										<span className='badge badge-light-info me-2 mb-1'>collection</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-10-26</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>1b67e4672b2734eb1f00967a0d6dd8b8acc9091e</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>misp-scraper</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>blog-post</span>
										<span className='badge badge-light-info me-2 mb-1'>proxyshell</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>collection</span>
										<span className='badge badge-light-info me-2 mb-1'>complete</span>
										<span className='badge badge-light-info me-2 mb-1'>accomplice</span>
										<span className='badge badge-light-info me-2 mb-1'>lv</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-10-26</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>027889533afe809b68c0955a7fc3cb8f3ae33c08</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>lv</span>
										<span className='badge badge-light-info me-2 mb-1'>accomplice</span>
										<span className='badge badge-light-info me-2 mb-1'>proxyshell</span>
										<span className='badge badge-light-info me-2 mb-1'>misp-scraper</span>
										<span className='badge badge-light-info me-2 mb-1'>blog-post</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>complete</span>
										<span className='badge badge-light-info me-2 mb-1'>collection</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-10-26</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>182.82.219.201</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>misp-scraper</span>
										<span className='badge badge-light-info me-2 mb-1'>complete</span>
										<span className='badge badge-light-info me-2 mb-1'>proxyshell</span>
										<span className='badge badge-light-info me-2 mb-1'>lv</span>
										<span className='badge badge-light-info me-2 mb-1'>collection</span>
										<span className='badge badge-light-info me-2 mb-1'>blog-post</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>accomplice</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-10-26</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>b7d57bfbe8aa31bf4cacb960a390e5a519ce2eed</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>lv</span>
										<span className='badge badge-light-info me-2 mb-1'>complete</span>
										<span className='badge badge-light-info me-2 mb-1'>accomplice</span>
										<span className='badge badge-light-info me-2 mb-1'>blog-post</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>proxyshell</span>
										<span className='badge badge-light-info me-2 mb-1'>misp-scraper</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>collection</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-10-26</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>9e0026572e3c839356d053cb71b8cbbbacb2627b</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>lv</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>collection</span>
										<span className='badge badge-light-info me-2 mb-1'>misp-scraper</span>
										<span className='badge badge-light-info me-2 mb-1'>proxyshell</span>
										<span className='badge badge-light-info me-2 mb-1'>blog-post</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>accomplice</span>
										<span className='badge badge-light-info me-2 mb-1'>complete</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-10-26</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>49c35b2916f664e690a5c3ef838681c8978311ca</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>accomplice</span>
										<span className='badge badge-light-info me-2 mb-1'>collection</span>
										<span className='badge badge-light-info me-2 mb-1'>proxyshell</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>lv</span>
										<span className='badge badge-light-info me-2 mb-1'>misp-scraper</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>complete</span>
										<span className='badge badge-light-info me-2 mb-1'>blog-post</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-10-26</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>61f8fc5838fea490230c5929dd7a977ca7dd6c7364aa9815389ec92a69c32e11</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>accomplice</span>
										<span className='badge badge-light-info me-2 mb-1'>proxyshell</span>
										<span className='badge badge-light-info me-2 mb-1'>lv</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-10-26</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>d1fb59de13a2394622c84aca8d963071</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>lv</span>
										<span className='badge badge-light-info me-2 mb-1'>accomplice</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>proxyshell</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-10-26</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>3e4a30a16b1521f8a7d1855b4181f19f8d00b83b</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>accomplice</span>
										<span className='badge badge-light-info me-2 mb-1'>blog-post</span>
										<span className='badge badge-light-info me-2 mb-1'>proxyshell</span>
										<span className='badge badge-light-info me-2 mb-1'>lv</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>collection</span>
										<span className='badge badge-light-info me-2 mb-1'>complete</span>
										<span className='badge badge-light-info me-2 mb-1'>misp-scraper</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-10-26</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>185.82.217.131</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>accomplice</span>
										<span className='badge badge-light-info me-2 mb-1'>complete</span>
										<span className='badge badge-light-info me-2 mb-1'>blog-post</span>
										<span className='badge badge-light-info me-2 mb-1'>collection</span>
										<span className='badge badge-light-info me-2 mb-1'>proxyshell</span>
										<span className='badge badge-light-info me-2 mb-1'>misp-scraper</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>lv</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-10-26</div></td>
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

export {Lv}
