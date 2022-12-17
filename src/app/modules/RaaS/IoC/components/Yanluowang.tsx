/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'

type Props = {
  className: string
}

const Yanluowang: React.FC<Props> = ({className}) => {
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>fe38912d64f6d196ac70673cd2edbdbc1a63e494a2d7903546a6d3afa39dc5c4</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>grabchrome</span>
										<span className='badge badge-light-info me-2 mb-1'>yanluowang</span>
										<span className='badge badge-light-info me-2 mb-1'>thieflock</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>grabff</span>
										<span className='badge badge-light-info me-2 mb-1'>browserpassview</span>
										<span className='badge badge-light-info me-2 mb-1'>canthroid</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>e4942fde1cd7f2fcfb522090fd16298bce247295fe99182aecf7b10be3f5dc53</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>canthroid</span>
										<span className='badge badge-light-info me-2 mb-1'>browserpassview</span>
										<span className='badge badge-light-info me-2 mb-1'>thieflock</span>
										<span className='badge badge-light-info me-2 mb-1'>grabff</span>
										<span className='badge badge-light-info me-2 mb-1'>yanluowang</span>
										<span className='badge badge-light-info me-2 mb-1'>grabchrome</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>c77ff8e3804414618abeae394d3003c4bb65a43d69c57c295f443aeb14eaa447</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>canthroid</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>grabchrome</span>
										<span className='badge badge-light-info me-2 mb-1'>browserpassview</span>
										<span className='badge badge-light-info me-2 mb-1'>grabff</span>
										<span className='badge badge-light-info me-2 mb-1'>thieflock</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>85fb8a930fa7f4c32c8af86aa204eb4ea4ae404e670a8be17e7ae0adf37a9e2e</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>browserpassview</span>
										<span className='badge badge-light-info me-2 mb-1'>thieflock</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>grabff</span>
										<span className='badge badge-light-info me-2 mb-1'>canthroid</span>
										<span className='badge badge-light-info me-2 mb-1'>yanluowang</span>
										<span className='badge badge-light-info me-2 mb-1'>grabchrome</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>5e03cea2e3b875fdbf1c142b269470a9e728bcfba1f13f4644dcc06d10de8fb4</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>canthroid</span>
										<span className='badge badge-light-info me-2 mb-1'>thieflock</span>
										<span className='badge badge-light-info me-2 mb-1'>yanluowang</span>
										<span className='badge badge-light-info me-2 mb-1'>grabchrome</span>
										<span className='badge badge-light-info me-2 mb-1'>grabff</span>
										<span className='badge badge-light-info me-2 mb-1'>browserpassview</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>4ff503258e23d609e0484ee5df70a1db080875272ab6b4db31463d93ebc3c6dd</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>canthroid</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>thieflock</span>
										<span className='badge badge-light-info me-2 mb-1'>yanluowang</span>
										<span className='badge badge-light-info me-2 mb-1'>grabchrome</span>
										<span className='badge badge-light-info me-2 mb-1'>browserpassview</span>
										<span className='badge badge-light-info me-2 mb-1'>grabff</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>2fc5bf9edcfa19d48e235315e8f571638c99a1220be867e24f3965328fe94a03</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>cisco attack</span>
										<span className='badge badge-light-info me-2 mb-1'>yanluowang</span>
										<span className='badge badge-light-info me-2 mb-1'>thieflock</span>
										<span className='badge badge-light-info me-2 mb-1'>grabff</span>
										<span className='badge badge-light-info me-2 mb-1'>browserpassview</span>
										<span className='badge badge-light-info me-2 mb-1'>grabchrome</span>
										<span className='badge badge-light-info me-2 mb-1'>canthroid</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>1c543ea5c50ef8b0b42f835970fa5f553c2ae5c308d2692b51fb476173653cb3</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>grabchrome</span>
										<span className='badge badge-light-info me-2 mb-1'>thieflock</span>
										<span className='badge badge-light-info me-2 mb-1'>grabff</span>
										<span className='badge badge-light-info me-2 mb-1'>yanluowang</span>
										<span className='badge badge-light-info me-2 mb-1'>canthroid</span>
										<span className='badge badge-light-info me-2 mb-1'>browserpassview</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>0b9219328ebf065db9b26c9a189d72c7d0d9c39eb35e9fd2a5fefa54a7f853e4</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>thieflock</span>
										<span className='badge badge-light-info me-2 mb-1'>yanluowang</span>
										<span className='badge badge-light-info me-2 mb-1'>grabchrome</span>
										<span className='badge badge-light-info me-2 mb-1'>grabff</span>
										<span className='badge badge-light-info me-2 mb-1'>browserpassview</span>
										<span className='badge badge-light-info me-2 mb-1'>canthroid</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>40a95db3b665af1750c72b02e1322940fdd5b189</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>browserpassview</span>
										<span className='badge badge-light-info me-2 mb-1'>yanluowang</span>
										<span className='badge badge-light-info me-2 mb-1'>thieflock</span>
										<span className='badge badge-light-info me-2 mb-1'>grabchrome</span>
										<span className='badge badge-light-info me-2 mb-1'>canthroid</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>grabff</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>3527e3a3d03cd3002c9d85444c14c768</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>grabff</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>thieflock</span>
										<span className='badge badge-light-info me-2 mb-1'>browserpassview</span>
										<span className='badge badge-light-info me-2 mb-1'>grabchrome</span>
										<span className='badge badge-light-info me-2 mb-1'>yanluowang</span>
										<span className='badge badge-light-info me-2 mb-1'>canthroid</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>43f8a66d3f3f1ba574bc932a7bc8e5886fbeeab0b279d1dea654d7119e80a494</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>grabchrome</span>
										<span className='badge badge-light-info me-2 mb-1'>canthroid</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>yanluowang</span>
										<span className='badge badge-light-info me-2 mb-1'>browserpassview</span>
										<span className='badge badge-light-info me-2 mb-1'>thieflock</span>
										<span className='badge badge-light-info me-2 mb-1'>grabff</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>27e3ca5b22353a9ed97c4326cb26fa96cdeea36e</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>browserpassview</span>
										<span className='badge badge-light-info me-2 mb-1'>yanluowang</span>
										<span className='badge badge-light-info me-2 mb-1'>canthroid</span>
										<span className='badge badge-light-info me-2 mb-1'>grabchrome</span>
										<span className='badge badge-light-info me-2 mb-1'>thieflock</span>
										<span className='badge badge-light-info me-2 mb-1'>grabff</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>f479a0b3c07a701127b732968a321645</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>thieflock</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>browserpassview</span>
										<span className='badge badge-light-info me-2 mb-1'>grabchrome</span>
										<span className='badge badge-light-info me-2 mb-1'>canthroid</span>
										<span className='badge badge-light-info me-2 mb-1'>grabff</span>
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
								<td><div className='text-dark fw-bold fs-6'>Domain-Name</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>myeeducationplus.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>thieflock</span>
										<span className='badge badge-light-info me-2 mb-1'>grabff</span>
										<span className='badge badge-light-info me-2 mb-1'>browserpassview</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>yanluowang</span>
										<span className='badge badge-light-info me-2 mb-1'>canthroid</span>
										<span className='badge badge-light-info me-2 mb-1'>grabchrome</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>f077cfc465679f38c4f13d690fdb2b43d5ccc85f</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>canthroid</span>
										<span className='badge badge-light-info me-2 mb-1'>browserpassview</span>
										<span className='badge badge-light-info me-2 mb-1'>yanluowang</span>
										<span className='badge badge-light-info me-2 mb-1'>grabff</span>
										<span className='badge badge-light-info me-2 mb-1'>grabchrome</span>
										<span className='badge badge-light-info me-2 mb-1'>thieflock</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>57445041f7a1e57da92e858fc3efeabe</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>yanluowang</span>
										<span className='badge badge-light-info me-2 mb-1'>grabff</span>
										<span className='badge badge-light-info me-2 mb-1'>canthroid</span>
										<span className='badge badge-light-info me-2 mb-1'>grabchrome</span>
										<span className='badge badge-light-info me-2 mb-1'>thieflock</span>
										<span className='badge badge-light-info me-2 mb-1'>browserpassview</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>b556d90b30f217d5ef20ebe3f15cce6382c4199e900b5ad2262a751909da1b34</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>thieflock</span>
										<span className='badge badge-light-info me-2 mb-1'>yanluowang</span>
										<span className='badge badge-light-info me-2 mb-1'>grabff</span>
										<span className='badge badge-light-info me-2 mb-1'>browserpassview</span>
										<span className='badge badge-light-info me-2 mb-1'>grabchrome</span>
										<span className='badge badge-light-info me-2 mb-1'>canthroid</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>d11793433065633b84567de403c1989640a07c9a399dd2753aaf118891ce791c</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>yanluowang</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>targeted malware</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>49d828087ca77abc8d3ac2e4719719ca48578b265bbb632a1a7a36560ec47f2d</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>grabff</span>
										<span className='badge badge-light-info me-2 mb-1'>canthroid</span>
										<span className='badge badge-light-info me-2 mb-1'>yanluowang</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>grabchrome</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>browserpassview</span>
										<span className='badge badge-light-info me-2 mb-1'>thieflock</span>
										<span className='badge badge-light-info me-2 mb-1'>targeted malware</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>2c2513e17a23676495f793584d7165900130ed4e8cccf72d9d20078e27770e04</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>browserpassview</span>
										<span className='badge badge-light-info me-2 mb-1'>grabff</span>
										<span className='badge badge-light-info me-2 mb-1'>wmi</span>
										<span className='badge badge-light-info me-2 mb-1'>quantum</span>
										<span className='badge badge-light-info me-2 mb-1'>icedid</span>
										<span className='badge badge-light-info me-2 mb-1'>psexec</span>
										<span className='badge badge-light-info me-2 mb-1'>canthroid</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>thieflock</span>
										<span className='badge badge-light-info me-2 mb-1'>rdp</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>yanluowang</span>
										<span className='badge badge-light-info me-2 mb-1'>grabchrome</span>
										<span className='badge badge-light-info me-2 mb-1'>targeted malware</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>132071dc69b875d239f133984655a26a</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>canthroid</span>
										<span className='badge badge-light-info me-2 mb-1'>yanluowang</span>
										<span className='badge badge-light-info me-2 mb-1'>browserpassview</span>
										<span className='badge badge-light-info me-2 mb-1'>grabff</span>
										<span className='badge badge-light-info me-2 mb-1'>thieflock</span>
										<span className='badge badge-light-info me-2 mb-1'>grabchrome</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>a710f573f73c163d54c95b4175706329db3ed89cd9337c583d0bb24b6a384789</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>canthroid</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>grabchrome</span>
										<span className='badge badge-light-info me-2 mb-1'>yanluowang</span>
										<span className='badge badge-light-info me-2 mb-1'>grabff</span>
										<span className='badge badge-light-info me-2 mb-1'>thieflock</span>
										<span className='badge badge-light-info me-2 mb-1'>browserpassview</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>398d769e0d478175acbdbe9a790b2f6982110e8d</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>canthroid</span>
										<span className='badge badge-light-info me-2 mb-1'>grabchrome</span>
										<span className='badge badge-light-info me-2 mb-1'>browserpassview</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>thieflock</span>
										<span className='badge badge-light-info me-2 mb-1'>grabff</span>
										<span className='badge badge-light-info me-2 mb-1'>yanluowang</span>
										
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

export {Yanluowang}
