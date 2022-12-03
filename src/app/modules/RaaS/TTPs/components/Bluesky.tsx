
import React from 'react'

type Propx = {
  className: string
}

const Bluesky: React.FC<Propx> = ({className}) => {  
  return (
    <div className={`card ${className}`}>
      <div className='card-header border-0 pt-5'>
        <h2 className='card-title fw-bold fs-2'>MITRE tatics and techniques
        </h2>
      </div>
      <div className='card-body py-3'>
        <div className='table-responsive border-start border-end border-white'>
          <table className='table table-fixed align-baseline gx-1 gy-4 table-success table-striped border border-dark'>
            <thead>
              <tr className='fw-bold text-white bg-dark text-center table-fixed'>
               <th className='border-start border-dark min-w-125px'>Initial-Access</th>
               <th className='border min-w-125px'>Execution</th>
               <th className='border min-w-125px'>Privilege-Escalation</th>
               <th className='border min-w-125px'>Defense-Evasion</th>
               <th className='border min-w-125px'>Discovery</th>
               <th className='border-end border-dark min-w-125px'>Impact</th>
              </tr>
            </thead>
            <tbody>
							<tr className=''>              
			   					<td className='border-start border-end border-dark'>
									<div className='px-2 d-flex align-items-baseline'>
										<div className='symbol symbol-50px me-2'>
										<span className='badge badge-secondary fs-8 fw-bold '>T1189.002</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Drive-by Compromise
											</div>
											<div className='text-muted fw-semibold text-muted d-block fs-7'>

											</div>
										</div>
									</div>
								</td>
              
			   					<td className='border-start border-end border-dark'>
									<div className='px-2 d-flex align-items-baseline'>
										<div className='symbol symbol-50px me-2'>
										<span className='badge badge-secondary fs-8 fw-bold '>T1106</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Native API
											</div>
											<div className='text-muted fw-semibold text-muted d-block fs-7'>

											</div>
										</div>
									</div>
								</td>
              
			   					<td className='border-start border-end border-dark'>
									<div className='px-2 d-flex align-items-baseline'>
										<div className='symbol symbol-50px me-2'>
										<span className='badge badge-secondary fs-8 fw-bold '>T1068</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Exploitation for Privilege Escalation
											</div>
											<div className='text-muted fw-semibold text-muted d-block fs-7'>

											</div>
										</div>
									</div>
								</td>
              
			   					<td className='border-start border-end border-dark'>
									<div className='px-2 d-flex align-items-baseline'>
										<div className='symbol symbol-50px me-2'>
										<span className='badge badge-secondary fs-8 fw-bold '>T1140</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Deobfuscate/Decode Files or Information
											</div>
											<div className='text-muted fw-semibold text-muted d-block fs-7'>

											</div>
										</div>
									</div>
								</td>
              
			   					<td className='border-start border-end border-dark'>
									<div className='px-2 d-flex align-items-baseline'>
										<div className='symbol symbol-50px me-2'>
										<span className='badge badge-secondary fs-8 fw-bold '>T1027</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Obfuscated Files or Information
											</div>
											<div className='text-muted fw-semibold text-muted d-block fs-7'>

											</div>
										</div>
									</div>
								</td>
              
			   					<td className='border-start border-end border-dark'>
									<div className='px-2 d-flex align-items-baseline'>
										<div className='symbol symbol-50px me-2'>
										<span className='badge badge-secondary fs-8 fw-bold '>T1083</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- File and Directory Discovery
											</div>
											<div className='text-muted fw-semibold text-muted d-block fs-7'>

											</div>
										</div>
									</div>
								</td>
							</tr>							<tr className=''>              
			   					<td className='border-start border-end border-dark'>
									<div className='px-2 d-flex align-items-baseline'>
										<div className='symbol symbol-50px me-2'>
										<span className='badge badge-secondary fs-8 fw-bold '></span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												
											</div>
											<div className='text-muted fw-semibold text-muted d-block fs-7'>

											</div>
										</div>
									</div>
								</td>
              
			   					<td className='border-start border-end border-dark'>
									<div className='px-2 d-flex align-items-baseline'>
										<div className='symbol symbol-50px me-2'>
										<span className='badge badge-secondary fs-8 fw-bold '></span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												
											</div>
											<div className='text-muted fw-semibold text-muted d-block fs-7'>

											</div>
										</div>
									</div>
								</td>
              
			   					<td className='border-start border-end border-dark'>
									<div className='px-2 d-flex align-items-baseline'>
										<div className='symbol symbol-50px me-2'>
										<span className='badge badge-secondary fs-8 fw-bold '></span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												
											</div>
											<div className='text-muted fw-semibold text-muted d-block fs-7'>

											</div>
										</div>
									</div>
								</td>
              
			   					<td className='border-start border-end border-dark'>
									<div className='px-2 d-flex align-items-baseline'>
										<div className='symbol symbol-50px me-2'>
										<span className='badge badge-secondary fs-8 fw-bold '>T1135</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Network Share Discovery
											</div>
											<div className='text-muted fw-semibold text-muted d-block fs-7'>

											</div>
										</div>
									</div>
								</td>
              
			   					<td className='border-start border-end border-dark'>
									<div className='px-2 d-flex align-items-baseline'>
										<div className='symbol symbol-50px me-2'>
										<span className='badge badge-secondary fs-8 fw-bold '>T1486</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Data Encrypted for Impact
											</div>
											<div className='text-muted fw-semibold text-muted d-block fs-7'>

											</div>
										</div>
									</div>
								</td>
              
			   					<td className='border-start border-end border-dark'>
									<div className='px-2 d-flex align-items-baseline'>
										<div className='symbol symbol-50px me-2'>
										<span className='badge badge-secondary fs-8 fw-bold '></span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												
											</div>
											<div className='text-muted fw-semibold text-muted d-block fs-7'>

											</div>
										</div>
									</div>
								</td>
							</tr>            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export {Bluesky}
