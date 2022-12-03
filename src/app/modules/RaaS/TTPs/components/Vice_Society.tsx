
import React from 'react'

type Propx = {
  className: string
}

const Vice_Society: React.FC<Propx> = ({className}) => {  
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
               <th className='border min-w-125px'>Persistence</th>
               <th className='border min-w-125px'>Privilege-Escalation</th>
               <th className='border min-w-125px'>Defense-Evasion</th>
               <th className='border min-w-125px'>Lateral-Movement</th>
               <th className='border min-w-125px'>Exfiltration</th>
               <th className='border-end border-dark min-w-125px'>Impact</th>
              </tr>
            </thead>
            <tbody>
							<tr className=''>              
			   					<td className='border-start border-end border-dark'>
									<div className='px-2 d-flex align-items-baseline'>
										<div className='symbol symbol-50px me-2'>
										<span className='badge badge-secondary fs-8 fw-bold '>T1190</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Exploit Public-Facing Application
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
										<span className='badge badge-secondary fs-8 fw-bold '>T1047</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Windows Management Instrumentation
											</div>
											<div className='text-muted fw-semibold text-muted d-block fs-7'>

											</div>
										</div>
									</div>
								</td>
              
			   					<td className='border-start border-end border-dark'>
									<div className='px-2 d-flex align-items-baseline'>
										<div className='symbol symbol-50px me-2'>
										<span className='badge badge-secondary fs-8 fw-bold '>T1053.005</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Scheduled Task/Job: Scheduled Task
											</div>
											<div className='text-muted fw-semibold text-muted d-block fs-7'>

											</div>
										</div>
									</div>
								</td>
              
			   					<td className='border-start border-end border-dark'>
									<div className='px-2 d-flex align-items-baseline'>
										<div className='symbol symbol-50px me-2'>
										<span className='badge badge-secondary fs-8 fw-bold '>T1543.003</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Create or Modify System Process: Windows Service
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
												- Registry Run Keys / Startup Folder
											</div>
											<div className='text-muted fw-semibold text-muted d-block fs-7'>

											</div>
										</div>
									</div>
								</td>
              
			   					<td className='border-start border-end border-dark'>
									<div className='px-2 d-flex align-items-baseline'>
										<div className='symbol symbol-50px me-2'>
										<span className='badge badge-secondary fs-8 fw-bold '>T1574.002</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Hijack Execution Flow: DLL Side-Loading
											</div>
											<div className='text-muted fw-semibold text-muted d-block fs-7'>

											</div>
										</div>
									</div>
								</td>
              
			   					<td className='border-start border-end border-dark'>
									<div className='px-2 d-flex align-items-baseline'>
										<div className='symbol symbol-50px me-2'>
										<span className='badge badge-secondary fs-8 fw-bold '>T1055</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Process Injection
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
										<span className='badge badge-secondary fs-8 fw-bold '>T1036</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Masquerading
											</div>
											<div className='text-muted fw-semibold text-muted d-block fs-7'>

											</div>
										</div>
									</div>
								</td>
              
			   					<td className='border-start border-end border-dark'>
									<div className='px-2 d-flex align-items-baseline'>
										<div className='symbol symbol-50px me-2'>
										<span className='badge badge-secondary fs-8 fw-bold '>T1055</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Process Injection
											</div>
											<div className='text-muted fw-semibold text-muted d-block fs-7'>

											</div>
										</div>
									</div>
								</td>
              
			   					<td className='border-start border-end border-dark'>
									<div className='px-2 d-flex align-items-baseline'>
										<div className='symbol symbol-50px me-2'>
										<span className='badge badge-secondary fs-8 fw-bold '>T1497</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Virtualization/Sandbox Evasion
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
										<span className='badge badge-secondary fs-8 fw-bold '>T1080</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Taint Shared Content
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
										<span className='badge badge-secondary fs-8 fw-bold '>Technique_ID</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Technique_Name
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
              
			   					<td className='border-start border-end border-dark'>
									<div className='px-2 d-flex align-items-baseline'>
										<div className='symbol symbol-50px me-2'>
										<span className='badge badge-secondary fs-8 fw-bold '>T1531</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Account Access Removal
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

export {Vice_Society}
