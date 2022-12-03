
import React from 'react'

type Propx = {
  className: string
}

const Avoslocker: React.FC<Propx> = ({className}) => {  
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
               <th className='border min-w-125px'>Credential-Access</th>
               <th className='border min-w-125px'>Discovery</th>
               <th className='border min-w-125px'>Lateral-Movement</th>
               <th className='border min-w-125px'>Command-and-Control</th>
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
												- Exploit public-facing application
											</div>
											<div className='text-muted fw-semibold text-muted d-block fs-7'>

											</div>
										</div>
									</div>
								</td>
              
			   					<td className='border-start border-end border-dark'>
									<div className='px-2 d-flex align-items-baseline'>
										<div className='symbol symbol-50px me-2'>
										<span className='badge badge-secondary fs-8 fw-bold '>T1072</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Software deployment tools
											</div>
											<div className='text-muted fw-semibold text-muted d-block fs-7'>

											</div>
										</div>
									</div>
								</td>
              
			   					<td className='border-start border-end border-dark'>
									<div className='px-2 d-flex align-items-baseline'>
										<div className='symbol symbol-50px me-2'>
										<span className='badge badge-secondary fs-8 fw-bold '>T1136</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Create account
											</div>
											<div className='text-muted fw-semibold text-muted d-block fs-7'>

											</div>
										</div>
									</div>
								</td>
              
			   					<td className='border-start border-end border-dark'>
									<div className='px-2 d-flex align-items-baseline'>
										<div className='symbol symbol-50px me-2'>
										<span className='badge badge-secondary fs-8 fw-bold '>T1547</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Boot or logon autostart execution
											</div>
											<div className='text-muted fw-semibold text-muted d-block fs-7'>

											</div>
										</div>
									</div>
								</td>
              
			   					<td className='border-start border-end border-dark'>
									<div className='px-2 d-flex align-items-baseline'>
										<div className='symbol symbol-50px me-2'>
										<span className='badge badge-secondary fs-8 fw-bold '>T1112</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Modify registry
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
												- Impair defenses
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
												- Deobfuscate/Decode files or information
											</div>
											<div className='text-muted fw-semibold text-muted d-block fs-7'>

											</div>
										</div>
									</div>
								</td>
              
			   					<td className='border-start border-end border-dark'>
									<div className='px-2 d-flex align-items-baseline'>
										<div className='symbol symbol-50px me-2'>
										<span className='badge badge-secondary fs-8 fw-bold '>T1070</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Indicator removal on host
											</div>
											<div className='text-muted fw-semibold text-muted d-block fs-7'>

											</div>
										</div>
									</div>
								</td>
              
			   					<td className='border-start border-end border-dark'>
									<div className='px-2 d-flex align-items-baseline'>
										<div className='symbol symbol-50px me-2'>
										<span className='badge badge-secondary fs-8 fw-bold '>T1003</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- OS credential dumping
											</div>
											<div className='text-muted fw-semibold text-muted d-block fs-7'>

											</div>
										</div>
									</div>
								</td>
              
			   					<td className='border-start border-end border-dark'>
									<div className='px-2 d-flex align-items-baseline'>
										<div className='symbol symbol-50px me-2'>
										<span className='badge badge-secondary fs-8 fw-bold '>T1552</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Unsecured credentials
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
										<span className='badge badge-secondary fs-8 fw-bold '>T1555</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Credentials from password stores
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
										<span className='badge badge-secondary fs-8 fw-bold '>T1083</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- File and directory discovery
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
												- Network share discovery
											</div>
											<div className='text-muted fw-semibold text-muted d-block fs-7'>

											</div>
										</div>
									</div>
								</td>
              
			   					<td className='border-start border-end border-dark'>
									<div className='px-2 d-flex align-items-baseline'>
										<div className='symbol symbol-50px me-2'>
										<span className='badge badge-secondary fs-8 fw-bold '>T1057</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Process discovery
											</div>
											<div className='text-muted fw-semibold text-muted d-block fs-7'>

											</div>
										</div>
									</div>
								</td>
              
			   					<td className='border-start border-end border-dark'>
									<div className='px-2 d-flex align-items-baseline'>
										<div className='symbol symbol-50px me-2'>
										<span className='badge badge-secondary fs-8 fw-bold '>T1018</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Remote system discovery
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
										<span className='badge badge-secondary fs-8 fw-bold '>T1021</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Remote services
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
										<span className='badge badge-secondary fs-8 fw-bold '>T1072</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Software deployment tools
											</div>
											<div className='text-muted fw-semibold text-muted d-block fs-7'>

											</div>
										</div>
									</div>
								</td>
              
			   					<td className='border-start border-end border-dark'>
									<div className='px-2 d-flex align-items-baseline'>
										<div className='symbol symbol-50px me-2'>
										<span className='badge badge-secondary fs-8 fw-bold '>T1219</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Remote access software
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
												- Data encrypted for impact
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
										<span className='badge badge-secondary fs-8 fw-bold '>T1489</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Service stop
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
												- Inhibit system recovery
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
										<span className='badge badge-secondary fs-8 fw-bold '>T1491</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Defacement
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

export {Avoslocker}
