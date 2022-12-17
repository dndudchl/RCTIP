/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'

type Props = {
  className: string
}

const Alphv: React.FC<Props> = ({className}) => {
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
								<td><div className='text-dark fw-bold fs-6'>Domain-Name</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>xqoykemmcivwtpxh3a6pu3w7sstr2y7hapxdiv4caaxidurmwwbjx2id.onion</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
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
								<td><div className='text-dark fw-bold fs-6'>Domain-Name</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>odf3dt34tkqndw5h2l5gt2gwwd3jct5rwwjusbd3vlin2jueyv2qkgid.onion</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>b6v4ojs7jfvftvcoagjxp7qz33yeljydqy6afzsh26vqbzcjwz4b3zad.onion</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>y4722ss64vel5hmph75te7lx2x5xz463322ypjirm5ytxviijtdpybid.onion</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>b4twqa2mvob3s6uvuyfra5xk3qgps2v5kkt7k2qnb7rpdu3j4fkntead.onion</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>rfosusl6qdm4zhoqbqnjxaloprld2qz35u77h4aap46rhwkouejsooqd.onion</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>l37tauvuvjzsl7grehyvzg2nvvcyx7fjvvduifdxxw5hg6eqcxnf6oad.onion</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>xnsbsjciylsg23zfmrv6ocuyh7ha5zexeouchlr3zsi5suda4arpeyqd.onion</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>74tutyjtwhxssfw7eax7gkb5upyo5dkmfxwzypk4sd3f3334z6anziyd.onion</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>t4yl7tbpftoveq3355vby4cealyfqf2xe3qy4oixl3ogh2sxvnuoqaqd.onion</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>43nk37hlzlc6w4fyqlco3w4ue34pocmzzliiy2ibkzc3tec7vqcdqsid.onion</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>wvbd67q3iuli2gdhtn7dloxaat72fzat6v2kytqgpupcvfmam4x3uwad.onion</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
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
								<td><div className='text-dark fw-bold fs-6'>Domain-Name</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>dzc2zl3j7c2skz6jczz6zgq2agfibcknppyye7j7e6mrbzaubr6qukqd.onion</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>5stt4xst5slblevblzpb5zudo6evjs7kdrudpzo5yofhsnmtv2cfoxqd.onion</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>gbxbwicx3x35kn7n73opnpp4kkzjcra42iv2akoo2dcjinf6jf6qbuyd.onion</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>vsyp4ffvcekmou3rffikuaac3vv5p2tlivwp6eshztcvq25ptsvtvzid.onion</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>lputkyq4cnbwrpdmjfahc6vnvs2rhia6fq2eycjuxvv5dbob3mqvh6qd.onion</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>d75itpgjjfe2ys2qivqplbvmw3yyx7o5e4ppt2esit2lluhngulz4hqd.onion</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>f2b3f1ed693021b20f456a058b86b08abfc4876c7a3ae18aea6e95567fd55b2e</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>bacedbb23254934b736a9daf6de52620c9250a49686d519ceaf0a8d25da0a97f</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>79802d6a6be8433720857d2b53b46f8011ec734a237aae1c3c1fea50ff683c13</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>67d1f4077e929385cfd869bf279892bf10a2c8f0af4119e4bc15a2add9461fec</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>6660d0e87a142ab1bde4521d9c6f5e148490b05a57c71122e28280b35452e896</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>5a604a8f0e72f3bf7901b7b67f881031a402ab8072269c00233a554df548f54d</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>3c8ad2dae0b1bb536925b4e8d5a87e77c6134371eada2c7628358d6c6d3083dc</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>6d4b8e97981c8cd290a487d6080d1b96f3b5496a</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>9225bab1b05498fde1ff93de2fd03c0c</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>71b0db75ae00efd006068d7fff5992cb</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>ccde3fe374a219ed3a85a0bf548542c3</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>c6901bc6720e1e30c6c2e89aae874a90</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>c1dd3d5a3528bf56632200d247ca9774</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>a854c960cde68d43fd42a24e79587b28</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>9c54d3b2a64d92bca577a12b70d8d29a</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>51826408514057db47c0bbbffb2c581d</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>0b6ef1e650df35e2d04c56ebfcceabc7</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>fb1e6156f0e3223694add66339864cd4</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>d7a7fd3a7e3501114fd0049457f5ce09</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>817f4bf0b4d0fc327fdfc21efacddaee</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>730bd2385c3fc6d2bee48c0a9bcb373c</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>4373cf0d42926b15f95e35683d883a1c</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>843001980e5073c7f0ea8b56873246b8</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>sty5r4hhb5oihbq2mwevrofdiqbgesi66rvxr5sr573xgvtuvr4cs5yd.onion</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>id7seexjn4bojn5rvo4lwcjgufjz7gkisaidckaux3uvjc7l7xrsiqad.onion</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>htnpafzbvddr2llstwbjouupddflqm7y7cr7tcchbeo6rmxpqoxcbqqd.onion</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>aoczppoxmfqqthtwlwi4fmzlrv6aor3isn6ffaiic55wrfumxslx3vyd.onion</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>2cuqgeerjdba2rhdiviezodpu3lc4qz2sjf4qin6f7std2evleqlzjid.onion</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>7a34b6a3c558492c04f3418d726b86a8</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>70b8bc74f381c9d7d1016006c3950f85</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>ed075c4718fd98efcbc845db00677065</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>bb266486ee8ac70c0687989e02cefa14</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>81d7c2d1dca5da7eef2896a76768d142</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>221c91c48390a941b381fb5cd6df60df</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>79fea7f741760ea21ff655137af05bd0</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>mu75ltv3lxd24dbyu6gtvmnwybecigs5auki7fces437xvvflzva2nqd.onion</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>173c4085c23080d9fb19280cc507d28d</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>aea5d3cced6725f37e2c3797735e6467</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>8e1f22dd9e809ead5e19b340b0c80cae</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>ff56e700d15f3d944424c295eae926d9</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>e7060538ee4b48b0b975c8928c617f218703dab7aa7814ce97481596f2a78556</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>linux</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-27</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>9802a1e8fb425ac3a7c0a7fca5a17cfcb7f3f5f0962deb29e3982f0bece95e26</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>linux</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-27</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>d767524e1bbb8d50129485ffa667eb1d379c745c30d4588672636998c20f857f</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-27</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>cda37b13d1fdee1b4262b5a6146a35d8fc88fa572e55437a47a950037cc65d40</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>windows</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-27</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>aae77d41eba652683f3ae114fadec279d5759052d2d774f149f3055bf40c4c14</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-27</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>9f6876762614e407d0ee6005f165dd4bbd12cb21986abc4a3a5c7dc6271fcdc3</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>windows</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-27</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>722f1c1527b2c788746fec4dd1af70b0c703644336909735f8f23f6ef265784b</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>windows</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-27</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>2587001d6599f0ec03534ea823aab0febb75e83f657fadc3a662338cc08646b0</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-27</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>f837f1cd60e9941aa60f7be50a8f2aaaac380f560db8ee001408f35c1b7a97cb</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>windows</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-27</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>f7a038f9b91c40e9d67f4168997d7d8c12c2d27cd9e36c413dd021796a24e083</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>linux</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-27</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>f5685e99c3ee2b11ed5dd6ca738d6a5c35a81943c6c4cf1f2e2b212e7f8ffded</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-27</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>f0743669e8cf2a26132de1c4bd55978b005291075fcb531e751de8c2b6407faa</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-27</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>e69a13add1245bc1b7b6337e64eee9b53395b9574f2b85d32f891680c7165ff5</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-27</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>c5ad3534e1c939661b71f56144d19ff36e9ea365fdb47e4f8e2d267c39376486</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>windows</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-27</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>b588823eb5c65f36d067d496881d9c704d3ba57100c273656a56a43215f35442</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>windows</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-27</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>7154fdb1ef9044da59fcfdbdd1ed9abc1a594cacb41a0aeddb5cd9fdaeea5ea8</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>windows</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-27</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>658e07739ad0137bceb910a351ce3fe4913f6fcc3f63e6ff2eb726e45f29e582</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>windows</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-27</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>5bdc0fb5cfbd42de726aacc40eddca034b5fa4afcc88ddfb40a3d9ae18672898</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>windows</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-27</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>5121f08cf8614a65d7a86c2f462c0694c132e2877a7f54ab7fcefd7ee5235a42</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>linux</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-27</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>40f57275721bd74cc59c0c59c9f98c8e0d1742b7ae86a46e83e985cc4039c3a5</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-27</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>3a08e3bfec2db5dbece359ac9662e65361a8625a0122e68b56cd5ef3aedf8ce1</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>linux</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>2022-05-27</div></td>
								<td>
									<span className='bg-dark text-gray-100 fw-semibold p-1'>TLP:CLEAR</span>
								</td>
								<td className='text-end'>
									<a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
											<KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div className='form-check form-check-sm form-check-custom form-check-solid'>
										<input className='form-check-input widget-13-check' type='checkbox' value='1' />
									</div>
								</td>
								<td><div className='text-dark fw-bold fs-6'>File hash</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>be8c5d07ab6e39db28c40db20a32f47a97b7ec9f26c9003f9101a154a5a98486</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>b6b9d449c9416abf96d21b356a41a28e</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
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
								<td><div className='text-dark fw-bold fs-6'>Domain-Name</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>spontaneousance.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>powerplant</span>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
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
								<td><div className='text-dark fw-bold fs-6'>Domain-Name</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>myshortbio.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										<span className='badge badge-light-info me-2 mb-1'>powerplant</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>modestoobgyn.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
										<span className='badge badge-light-info me-2 mb-1'>powerplant</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>internethabit.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>powerplant</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>incongruousance.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>powerplant</span>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>findoutcredit.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										<span className='badge badge-light-info me-2 mb-1'>powerplant</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>fashionableeder.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>powerplant</span>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>estetictrance.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
										<span className='badge badge-light-info me-2 mb-1'>powerplant</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>electroncador.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										<span className='badge badge-light-info me-2 mb-1'>carbanak</span>
										<span className='badge badge-light-info me-2 mb-1'>bateleur</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>powersploit</span>
										<span className='badge badge-light-info me-2 mb-1'>kerberoasting</span>
										<span className='badge badge-light-info me-2 mb-1'>carbon spider</span>
										<span className='badge badge-light-info me-2 mb-1'>powerplant</span>
										<span className='badge badge-light-info me-2 mb-1'>griffon</span>
										<span className='badge badge-light-info me-2 mb-1'>leo vbs</span>
										<span className='badge badge-light-info me-2 mb-1'>vb flash</span>
										<span className='badge badge-light-info me-2 mb-1'>crackmapexec</span>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
										<span className='badge badge-light-info me-2 mb-1'>mimikatz</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>killack ps</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>plink</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>pillowmint</span>
										<span className='badge badge-light-info me-2 mb-1'>domenus vbs</span>
										<span className='badge badge-light-info me-2 mb-1'>sekur</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>coincidencious.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										<span className='badge badge-light-info me-2 mb-1'>powerplant</span>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
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
								<td><div className='text-dark fw-bold fs-6'>Domain-Name</div></td>
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>chyprediction.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>powerplant</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>bestsecure2020.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>powerplant</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>astara20.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>powerplant</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>againcome.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										<span className='badge badge-light-info me-2 mb-1'>vb flash</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>powerplant</span>
										<span className='badge badge-light-info me-2 mb-1'>carbon spider</span>
										<span className='badge badge-light-info me-2 mb-1'>griffon</span>
										<span className='badge badge-light-info me-2 mb-1'>domenus vbs</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>plink</span>
										<span className='badge badge-light-info me-2 mb-1'>bateleur</span>
										<span className='badge badge-light-info me-2 mb-1'>leo vbs</span>
										<span className='badge badge-light-info me-2 mb-1'>carbanak</span>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>sekur</span>
										<span className='badge badge-light-info me-2 mb-1'>kerberoasting</span>
										<span className='badge badge-light-info me-2 mb-1'>mimikatz</span>
										<span className='badge badge-light-info me-2 mb-1'>powersploit</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>crackmapexec</span>
										<span className='badge badge-light-info me-2 mb-1'>killack ps</span>
										<span className='badge badge-light-info me-2 mb-1'>pillowmint</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>edb1f62230123abf88231fc1a7190b60</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										<span className='badge badge-light-info me-2 mb-1'>powerplant</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>d405909fd2fd021372444b7b36a3b806</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>powerplant</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>d1d8902b499b5938404f8cece2918d3d</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>powerplant</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>c4da0137cbb99626fd44da707ae1bca8</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>powerplant</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>bf41fc54f96d0106d34f1c48827006e4</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>powerplant</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>bce9b919fa97e2429d14f255acfb18b4</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>powerplant</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>b637d33dbb951e7ad7fa198cbc9f78bc</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>powerplant</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>ab29b9e225a05bd17e919e1d0587289e</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>powerplant</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>936b142d1045802c810e86553b332d2d</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>powerplant</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>833ae560a2347d5daf05d1f670a40c54</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
										<span className='badge badge-light-info me-2 mb-1'>powerplant</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>78c828b515e676cc0d021e229318aeb6</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>powerplant</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>70bf088f2815a61ad2b1cc9d6e119a7f</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>powerplant</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>6fba605c2a02fc62e6ff1fb8e932a935</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>powerplant</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>5a6bbcc1e44d3a612222df5238f5e7a8</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										<span className='badge badge-light-info me-2 mb-1'>powerplant</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>52f5fcaf4260cb70e8d8c6076dcd0157</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										<span className='badge badge-light-info me-2 mb-1'>powerplant</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>50260f97ac2365cf0071e7c798b9edda</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>powerplant</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>4d56a1ca28d9427c440ec41b4969caa2</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>powerplant</span>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>49ac220edf6d48680f763465c4c2771e</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>powerplant</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>4961aec62fac8beeafffa5bfc841fab8</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>perpetual</span>
										<span className='badge badge-light-info me-2 mb-1'>certainty-50</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>powerplant</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>.net</span>
										<span className='badge badge-light-info me-2 mb-1'>osint</span>
										<span className='badge badge-light-info me-2 mb-1'>clear</span>
										<span className='badge badge-light-info me-2 mb-1'>jssloader</span>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										<span className='badge badge-light-info me-2 mb-1'>javascript</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>485b2a920f3b5ae7cfad93a4120ec20d</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>powerplant</span>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>38786bc9de1f447d0187607eaae63f11</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>powerplant</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>3803c82c1b2e28e3e6cca3ca73e6cce7</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>powerplant</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>2cbb015d4c579e464d157faa16994f86</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>powerplant</span>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>28e9581ab34297b6e5f817f93281ffac</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>powerplant</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>23e1725769e99341bc9af48a0df64151</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>powerplant</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>230a681ebbcdba7ae2175f159394d044</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
										<span className='badge badge-light-info me-2 mb-1'>powerplant</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>21f153810b82852074f0f0f19c0b3208</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
										<span className='badge badge-light-info me-2 mb-1'>powerplant</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>1c3b19163a3b15b39ae00bbe131b499a</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>powerplant</span>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>0fde02d159c4cd5bf721410ea9e72ee2</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>powerplant</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>0c6b41d25214f04abf9770a7bdfcee5d</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										<span className='badge badge-light-info me-2 mb-1'>powerplant</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>0291df4f7303775225c4044c8f054360</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>powerplant</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>02699f95f8568f52a00c6d0551be2de5</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>powerplant</span>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>012e7b4d6b5cb8d46771852c66c71d6d</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>powerplant</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>d42566e04d295a1e9e2823d202a1800cdc1ddd77</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>c5acefee89cdbf24e99d311f804615aedef8f3df</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>a8fd52bd107f7b62483c11c15923fbd2256c8bac</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>8917af3878fa49fe4ec930230b881ff0ae8d19c9</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>3e794a584d75c2ceb07287fe450dcdc4d7ce949a</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>38fa2979382615bbee32d1f58295447c33ca4316</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>36dff07387cf3f2393339d30d0672fcbccc7a73c</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>0c7215c4325ded8139ea2f0428412f17e6c8f957</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>f466b4d686d1fa9fed064507639b9306b0d80bbf</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>e17dc8062742878b0b5ced2145311929f6f77abd</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>da1e4a09a59565c5d62887e0e9a9f6f04a18b5f4</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>ce5540c0d2c54489737f3fefdbf72c889ac533a9</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>c1187fe0eaddee995773d6c66bcb558536e9b62c</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>a186c08d3d10885ebb129b1a0d8ea0da056fc362</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>94f025f3be089252692d58e54e3e926e09634e40</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>9146a448463935b47e29155da74c68d16e0d7031</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>89060eff6db13e7455fee151205e972260e9522a</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>783b2b053ef0345710cd2487e5184f29116e367c</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>655c2567650d2c109fab443de4b737294994f1fd</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>5c6ca5581a04955d8e4d1fa452621fbc922ecb7b</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>5869820f261f76eafa1ba00af582a9225d005c89</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>57a6dfd2b021e5a4d4fe34a61bf3242ecee841b3</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>45212fa4501ede5af428563f8043c4ae40faec76</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>2a53525eeb7b76b3d1bfe40ac349446f2add8784</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>11203786b17bb3873d46acae32a898c8dac09850</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>087497940a41d96e4e907b6dc92f75f4a38d861a</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>f8c08d00ff6e8c6adb1a93cd133b19302d0b651afd73ccb54e3b6ac6c60d99c6</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>linux</span>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>f815f5d6c85bcbc1ec071dd39532a20f5ce910989552d980d1d4346f57b75f89</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>cefea76dfdbb48cfe1a3db2c8df34e898e29bec9b2c13e79ef40655c637833ae</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>windows</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>c8b3b67ea4d7625f8b37ba59eed5c9406b3ef04b7a19b97e5dd5dab1bd59f283</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>windows</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>c3e5d4e62ae4eca2bfca22f8f3c8cbec12757f78107e91e85404611548e06e40</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>windows</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>bd337d4e83ab1c2cacb43e4569f977d188f1bb7c7a077026304bf186d49d4117</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>windows</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>7e363b5f1ba373782261713fa99e8bbc35ddda97e48799c4eb28f17989da8d8e</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>windows</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>7b2449bb8be1b37a9d580c2592a67a759a3116fe640041d0f36dc93ca3db4487</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>windows</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>731adcf2d7fb61a8335e23dbee2436249e5d5753977ec465754c6b699e9bf161</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>windows</span>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>59868f4b346bd401e067380cac69080709c86e06fae219bfb5bc17605a71ab3f</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>windows</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>4e18f9293a6a72d5d42dad179b532407f45663098f959ea552ae43dbb9725cbf</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										<span className='badge badge-light-info me-2 mb-1'>windows</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>3d7cf20ca6476e14e0a026f9bdd8ff1f26995cdc5854c3adb41a6135ef11ba83</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>windows</span>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>38834b796ed025563774167716a477e9217d45e47def20facb027325f2a790d1</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>windows</span>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>2cf54942e8cf0ef6296deaa7975618dadff0c32535295d3f0d5f577552229ffc</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>windows</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>28d7e6fe31dc00f82cb032ba29aad6429837ba5efb83c2ce4d31d565896e1169</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>windows</span>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>1af1ca666e48afc933e2eda0ae1d6e88ebd23d27c54fd1d882161fd8c70b678e</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										<span className='badge badge-light-info me-2 mb-1'>windows</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>15b57c1b68cd6ce3c161042e0f3be9f32d78151fe95461eedc59a79fc222c7ed</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>windows</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>13828b390d5f58b002e808c2c4f02fdd920e236cc8015480fa33b6c1a9300e31</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										<span className='badge badge-light-info me-2 mb-1'>windows</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>0c6f444c6940a3688ffc6f8b9d5774c032e3551ebbccb64e4280ae7fc1fac479</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>alphav</span>
										<span className='badge badge-light-info me-2 mb-1'>cobalt strike</span>
										<span className='badge badge-light-info me-2 mb-1'>geopolitical conflict</span>
										<span className='badge badge-light-info me-2 mb-1'>windows</span>
										<span className='badge badge-light-info me-2 mb-1'>blackcat</span>
										<span className='badge badge-light-info me-2 mb-1'>rust</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>raas</span>
										<span className='badge badge-light-info me-2 mb-1'>payment</span>
										<span className='badge badge-light-info me-2 mb-1'>esxi</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>122cb55f1352b9a1aeafc83a85bfb165</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>c2</span>
										<span className='badge badge-light-info me-2 mb-1'>powerplant</span>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>apt</span>
										<span className='badge badge-light-info me-2 mb-1'>rat</span>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
										<span className='badge badge-light-info me-2 mb-1'>jssloader</span>
										
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
								<td><div className='text-dark fw-bold d-block mb-1 fs-6'>domenuscdm.com</div></td>
								<td>
									<div className='text-dark fw-bold d-block mb-1 fs-6'>
										<span className='badge badge-light-info me-2 mb-1'>vbs</span>
										<span className='badge badge-light-info me-2 mb-1'>birddog</span>
										<span className='badge badge-light-info me-2 mb-1'>powerplant</span>
										<span className='badge badge-light-info me-2 mb-1'>revil</span>
										<span className='badge badge-light-info me-2 mb-1'>fin7</span>
										<span className='badge badge-light-info me-2 mb-1'>malware</span>
										<span className='badge badge-light-info me-2 mb-1'>blackmatter</span>
										<span className='badge badge-light-info me-2 mb-1'>alphv</span>
										<span className='badge badge-light-info me-2 mb-1'>powershell</span>
										<span className='badge badge-light-info me-2 mb-1'>carnabak</span>
										<span className='badge badge-light-info me-2 mb-1'>diceloader</span>
										<span className='badge badge-light-info me-2 mb-1'>ransomware</span>
										<span className='badge badge-light-info me-2 mb-1'>darkside</span>
										<span className='badge badge-light-info me-2 mb-1'>griffon</span>
										<span className='badge badge-light-info me-2 mb-1'>malspam</span>
										
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

export {Alphv}
