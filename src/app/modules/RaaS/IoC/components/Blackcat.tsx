
import React from 'react'

type Propx = {
  className: string
}

const Blackcat: React.FC<Propx> = ({className}) => {  
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
               <th className='border min-w-125px'>Persistence</th>
               <th className='border min-w-125px'>Defense-Evasion</th>
               <th className='border min-w-125px'>Credential-Access</th>
               <th className='border min-w-125px'>Discovery</th>
               <th className='border min-w-125px'>Lateral-Movement</th>
               <th className='border min-w-125px'>Command-and-Control</th>
               <th className='border min-w-125px'>Exfiltration</th>
               <th className='border-end border-dark min-w-125px'>Impact</th>
              </tr>
            </thead>
            <tbody>
							<tr className=''>              
			   					<td className='border-start border-end border-dark'>
									<div className='px-2 d-flex align-items-baseline'>
										<div className='symbol symbol-50px me-2'>
										<span className='badge badge-secondary fs-8 fw-bold '>T1078</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Valid Accounts
											</div>
											<div className='text-muted fw-semibold text-muted d-block fs-7'>

											</div>
										</div>
									</div>
								</td>
              
			   					<td className='border-start border-end border-dark'>
									<div className='px-2 d-flex align-items-baseline'>
										<div className='symbol symbol-50px me-2'>
										<span className='badge badge-secondary fs-8 fw-bold '>T1078</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Valid Accounts
											</div>
											<div className='text-muted fw-semibold text-muted d-block fs-7'>

											</div>
										</div>
									</div>
								</td>
              
			   					<td className='border-start border-end border-dark'>
									<div className='px-2 d-flex align-items-baseline'>
										<div className='symbol symbol-50px me-2'>
										<span className='badge badge-secondary fs-8 fw-bold '>T1547.001</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Boot or Logon Autostart Execution: Registry Run Keys / Startup Folder
											</div>
											<div className='text-muted fw-semibold text-muted d-block fs-7'>

											</div>
										</div>
									</div>
								</td>
              
			   					<td className='border-start border-end border-dark'>
									<div className='px-2 d-flex align-items-baseline'>
										<div className='symbol symbol-50px me-2'>
										<span className='badge badge-secondary fs-8 fw-bold '>T1562</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Impair Defenses
											</div>
											<div className='text-muted fw-semibold text-muted d-block fs-7'>

											</div>
										</div>
									</div>
								</td>
              
			   					<td className='border-start border-end border-dark'>
									<div className='px-2 d-flex align-items-baseline'>
										<div className='symbol symbol-50px me-2'>
										<span className='badge badge-secondary fs-8 fw-bold '>T1003.001</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- OS Credential Dumping: LSASS Memory
											</div>
											<div className='text-muted fw-semibold text-muted d-block fs-7'>

											</div>
										</div>
									</div>
								</td>
              
			   					<td className='border-start border-end border-dark'>
									<div className='px-2 d-flex align-items-baseline'>
										<div className='symbol symbol-50px me-2'>
										<span className='badge badge-secondary fs-8 fw-bold '>T1046</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Network Service Discovery
											</div>
											<div className='text-muted fw-semibold text-muted d-block fs-7'>

											</div>
										</div>
									</div>
								</td>
              
			   					<td className='border-start border-end border-dark'>
									<div className='px-2 d-flex align-items-baseline'>
										<div className='symbol symbol-50px me-2'>
										<span className='badge badge-secondary fs-8 fw-bold '>T1021</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Remote Services
											</div>
											<div className='text-muted fw-semibold text-muted d-block fs-7'>

											</div>
										</div>
									</div>
								</td>
              
			   					<td className='border-start border-end border-dark'>
									<div className='px-2 d-flex align-items-baseline'>
										<div className='symbol symbol-50px me-2'>
										<span className='badge badge-secondary fs-8 fw-bold '>T1021</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Remote Services
											</div>
											<div className='text-muted fw-semibold text-muted d-block fs-7'>

											</div>
										</div>
									</div>
								</td>
              
			   					<td className='border-start border-end border-dark'>
									<div className='px-2 d-flex align-items-baseline'>
										<div className='symbol symbol-50px me-2'>
										<span className='badge badge-secondary fs-8 fw-bold '>T1021</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Remote Services
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
										<span className='badge badge-secondary fs-8 fw-bold '>T1572</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Protocol Tunneling
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
										<span className='badge badge-secondary fs-8 fw-bold '>T1048</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Exfiltration Over Alternative Protocol
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
										<span className='badge badge-secondary fs-8 fw-bold '>T1490</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Inhibit System Recovery
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

export {Blackcat}
