import React from 'react'

type Propx = {
  className: string
}

const ALPHV: React.FC<Propx> = ({className}) => { 
  return (
	<>
    <div className={`card mb-6 ${className}`}>
        <h1 className='card-title fw-bold fs-2qx pt-6'>MITRE ATT&CK MATRIX</h1>
        <div className='card-body pt-3 pb-6'>
        <div className='table-responsive border-start border-end border-gray-200'>
          <table className='table align-baseline gx-1 gy-4 table-striped border border-gray-800'>
            <thead>
			   <tr className='fs-6 fw-semebold text-gray-200 bg-dark text-center'>
			    	<th className='min-w-175px border-end border-gray-200'>Initial-Access</th>
			    	<th className='min-w-175px border-end border-gray-200'>Execution</th>
			    	<th className='min-w-175px border-end border-gray-200'>Persistence</th>
			    	<th className='min-w-175px border-end border-gray-200'>Privilege-Escalation</th>
			    	<th className='min-w-175px border-end border-gray-200'>Defense-Evasion</th>
			    	<th className='min-w-175px border-end border-gray-200'>Credential-Access</th>
			    	<th className='min-w-175px border-end border-gray-200'>Discovery</th>
			    	<th className='min-w-175px border-end border-gray-200'>Collection</th>
			    	<th className='min-w-175px border-end border-gray-200'>Exfiltration</th>
			    	<th className='min-w-175px border-end border-gray-200'>Impact</th>
               </tr>
            </thead>
            <tbody>
				<tr className=''>				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-200 fs-8 fw-bold me-2'>T1078</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Valid Accounts</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-200 fw-semibold d-block fs-7'>
									<div>Obtained credentials for valid accounts.</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-200 fs-8 fw-bold me-2'>T1569.002</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>System Services: Service Execution</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-200 fw-semibold d-block fs-7'>
									<div>Use PsExec to execute a command on a remote host</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-200 fs-8 fw-bold me-2'>T1133</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>External Remote Services</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-200 fw-semibold d-block fs-7'>
									<div>Used RDP services and SSH</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-200 fs-8 fw-bold me-2'>T1134</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Access Token Manipulation</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-200 fw-semibold d-block fs-7'>
									<div>Creating an unique access token</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-200 fs-8 fw-bold me-2'>T1562.001</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Impair Defenses: Disable or Modify Tools</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-200 fw-semibold d-block fs-7'>
									<div>Disabled a RestrictedAdmin mode and Windows defender</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-200 fs-8 fw-bold me-2'>T1557.001</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Adversary-in-the-Middle: LLMNR/NBT-NS Poisoning and SMB Relay</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-200 fw-semibold d-block fs-7'>
									<div>Used SMB requests</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-200 fs-8 fw-bold me-2'>T1082</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>System Information Discovery</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-200 fw-semibold d-block fs-7'>
									<div>Collecting system information via WMIC</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-200 fs-8 fw-bold me-2'>T1557.001</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Adversary-in-the-Middle: LLMNR/NBT-NS Poisoning and SMB Relay</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-200 fw-semibold d-block fs-7'>
									<div>Used SMB requests</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-200 fs-8 fw-bold me-2'>T1567</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Exfiltration Over Web Service</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-200 fw-semibold d-block fs-7'>
									<div>Double extortion- exposure of sensitive data on a DLS.</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-200 fs-8 fw-bold me-2'>T1490</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Inhibit System Recovery</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-200 fw-semibold d-block fs-7'>
									<div>Delete VSS Copies and Modify registry</div>
								</div>
							</div>
						</div>
					</td>          
				</tr>
				<tr className=''>				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-200 fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-200 fs-8 fw-bold me-2'>T1047</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Windows Management Instrumentation</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-200 fw-semibold d-block fs-7'>
									<div>WMI Reconnaissance information</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-200 fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-200 fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-200 fs-8 fw-bold me-2'>T1218.003</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Signed Binary Proxy Execution: CMSTP</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-200 fw-semibold d-block fs-7'>
									<div>CMSTP Executing UAC Bypass</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-200 fs-8 fw-bold me-2'>T1003.004</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>OS Credential Dumping: LSA Secrets</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-200 fw-semibold d-block fs-7'>
									<div>Dunping LSA Secrets</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-200 fs-8 fw-bold me-2'>T1049</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>System Network Connections Discovery</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-200 fw-semibold d-block fs-7'>
									<div>System Network Connections Discovery</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-200 fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-200 fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-200 fs-8 fw-bold me-2'>T1485</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Data Destruction</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-200 fw-semibold d-block fs-7'>
									<div>Deleted decryption keys</div>
								</div>
							</div>
						</div>
					</td>          
				</tr>
				<tr className=''>				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-200 fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-200 fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-200 fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-200 fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-200 fs-8 fw-bold me-2'>T1112</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Modify Registry</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-200 fw-semibold d-block fs-7'>
									<div>Registry key adding in ransomware code</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-200 fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-200 fs-8 fw-bold me-2'>T1105</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Ingress Tool Transfer</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-200 fw-semibold d-block fs-7'>
									<div>Bring their own external tools</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-200 fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-200 fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-200 fs-8 fw-bold me-2'>T1489</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Service Stop</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-200 fw-semibold d-block fs-7'>
									<div>Stop service using EnumServicesStatusExW</div>
								</div>
							</div>
						</div>
					</td>          
				</tr>
				<tr className=''>				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-200 fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-200 fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-200 fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-200 fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-200 fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-200 fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-200 fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-200 fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-200 fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-200 fs-8 fw-bold me-2'>T1486</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Data Encrypted for Impact</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-200 fw-semibold d-block fs-7'>
									<div>- ChaCha20
- AES
- RSA
- .sykffle
</div>
								</div>
							</div>
						</div>
					</td>          
				</tr>
				<tr className=''>				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-200 fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-200 fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-200 fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-200 fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-200 fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-200 fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-200 fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-200 fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-200 fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-200 fs-8 fw-bold me-2'>T1498</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Network Denial of Service</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-200 fw-semibold d-block fs-7'>
									<div>Triple extortion</div>
								</div>
							</div>
						</div>
					</td>          
				</tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
	<div className='fs-1 fw-bold text-dark pt-1 ps-3'>Initial-Access</div>
	<div className='row g-5 g-xl-8 pt-4'>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-200 fs-5 fw-bold me-1'>T1078</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Valid Accounts</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>ALPHV has obtained credentials for valid accounts and used these to gain access to victim networks.</div>
					
					
					
				</div>
			</div>
		</div>
	</div>
	<div className='fs-1 fw-bold text-dark pt-1 ps-3'>Execution</div>
	<div className='row g-5 g-xl-8 pt-4'>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-200 fs-5 fw-bold me-1'>T1569.002</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- System Services: Service Execution</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>ALPHV uses significantly the remote administration tool PsExec, as well as the PowerShell language.</div>
					
					
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-200 fs-5 fw-bold me-1'>T1047</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Windows Management Instrumentation</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>The adversary uses WMI to execute various behaviours, such as gathering information for Discovery.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>cmd</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-dark fst-italic'>
							<div>&deg;&nbsp;wmic csproduct get UUID</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</div>
	<div className='fs-1 fw-bold text-dark pt-1 ps-3'>Persistence</div>
	<div className='row g-5 g-xl-8 pt-4'>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-200 fs-5 fw-bold me-1'>T1133</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- External Remote Services</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>ALPHV has used remote access services, such as valid Remote Desktop Protocol and SSH credentials, to persist on victim’s systems.</div>
					
					
					
				</div>
			</div>
		</div>
	</div>
	<div className='fs-1 fw-bold text-dark pt-1 ps-3'>Privilege-Escalation</div>
	<div className='row g-5 g-xl-8 pt-4'>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-200 fs-5 fw-bold me-1'>T1134</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Access Token Manipulation</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Creating an unique access token is a previously seen anti-analysis tactic. It is used by to keep negotiations for private,changing extensions, ransom notes, data encryption, exclusions of folders/files/extensions, and the services and processes to be automatically killed to crank up the impact.</div>
					
					
					
				</div>
			</div>
		</div>
	</div>
	<div className='fs-1 fw-bold text-dark pt-1 ps-3'>Defense-Evasion</div>
	<div className='row g-5 g-xl-8 pt-4'>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-200 fs-5 fw-bold me-1'>T1562.001</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Impair Defenses: Disable or Modify Tools</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>According to Symantec the attackers disabled a restricted remote administration feature known as ‘RestrictedAdmin mode’ but also Windows defender.</div>
					
					
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-200 fs-5 fw-bold me-1'>T1218.003</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Signed Binary Proxy Execution: CMSTP</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>In some of those payloads, a reverse engineering analysis unravelled attempts to bypass Windows User Account Control (UAC) to stealthy execute code with elevated permissions. This technique is also known as the COM Elevation Moniker that allows running applications under UAC to activate COM classes with elevated privileges.</div>
					
					
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-200 fs-5 fw-bold me-1'>T1112</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Modify Registry</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Modification of the registry occurred upon an attack. According to Symantec attackers were also seen to tweak the maximum limit of concurrent requests machines by modifying the Windows registry to further help spreading via PsExec.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>cmd</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-dark fst-italic'>
							<div>&deg;&nbsp;reg add HKEY_LOCAL_MACHINESYSTEMCurrentControlSetServicesLanmanServerParameters /v MaxMpxCt /d 65535 /t REG_DWORD /fenum_serv’</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</div>
	<div className='fs-1 fw-bold text-dark pt-1 ps-3'>Credential-Access</div>
	<div className='row g-5 g-xl-8 pt-4'>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-200 fs-5 fw-bold me-1'>T1557.001</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Adversary-in-the-Middle: LLMNR/NBT-NS Poisoning and SMB Relay</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>ALPHV has used suspicious Server Message Block (SMB) requests occurred onto the patient zero.</div>
					
					
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-200 fs-5 fw-bold me-1'>T1003.004</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- OS Credential Dumping: LSA Secrets</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>ALPHV has used attempts of remote Local Security Authority (LSA) registry dump from a remote machine on the network upon an attack.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>cmd</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-dark fst-italic'>
							<div>&deg;&nbsp;psexec_exe -accepteula -s reg save HKLM\security\policy\secrets %temp%\secrets /y</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</div>
	<div className='fs-1 fw-bold text-dark pt-1 ps-3'>Discovery</div>
	<div className='row g-5 g-xl-8 pt-4'>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-200 fs-5 fw-bold me-1'>T1082</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- System Information Discovery</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>ALPHV runs commands to collect system information via WMIC, in order to collect Universally Unique Identifiers (UUIDs) from each machine.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>cmd</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-dark fst-italic'>
							<div>&deg;&nbsp;wmic csproduct get UUID</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-200 fs-5 fw-bold me-1'>T1049</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- System Network Connections Discovery</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>ALPHV attempts to propagate via mounting hidden partitions thanks to the ‘net use’ command. As aforementioned admin credentials are embedded into the config file within the payload.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>cmd</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-dark fst-italic'>
							<div>&deg;&nbsp;netstat</div>
							<div>&deg;&nbsp;net use</div>
							<div>&deg;&nbsp;net sessions</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-200 fs-5 fw-bold me-1'>T1105</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Ingress Tool Transfer</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>ALPHV affiliates bring their own external tools into a compromised network.</div>
					
					
					
				</div>
			</div>
		</div>
	</div>
	<div className='fs-1 fw-bold text-dark pt-1 ps-3'>Collection</div>
	<div className='row g-5 g-xl-8 pt-4'>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-200 fs-5 fw-bold me-1'>T1557.001</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Adversary-in-the-Middle: LLMNR/NBT-NS Poisoning and SMB Relay</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Threat actors may have leveraged LLMNR/NBT-NS Poisoning and SMB Relay sub-technique.</div>
					
					
					
				</div>
			</div>
		</div>
	</div>
	<div className='fs-1 fw-bold text-dark pt-1 ps-3'>Exfiltration</div>
	<div className='row g-5 g-xl-8 pt-4'>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-200 fs-5 fw-bold me-1'>T1567</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Exfiltration Over Web Service</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>ALPHV leaks victim data not only if the victims do not pay, but also once Threat Intel teams accesses their chat logs or discusses their operations. 7zip and Rclone were reported by SpearTip as the toolset use for exfiltration of data</div>
					
					
					
				</div>
			</div>
		</div>
	</div>
	<div className='fs-1 fw-bold text-dark pt-1 ps-3'>Impact</div>
	<div className='row g-5 g-xl-8 pt-4'>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-200 fs-5 fw-bold me-1'>T1490</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Inhibit System Recovery</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>ALPHV use the Windows command line to- Delete volume shadow copies and disable recovery, Modify window registry.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>cmd</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-dark fst-italic'>
							<div>&deg;&nbsp;vssadmin.exe delete shadows /all /quiet</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-200 fs-5 fw-bold me-1'>T1485</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Data Destruction</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>ALPHV deletes decryption keys and leaks victim data if Threat Intel accesses their chat logs or discusses their operations.</div>
					
					
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-200 fs-5 fw-bold me-1'>T1489</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Service Stop</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>With the help of the EnumServicesStatusExW function to enumerate all the active services and deletes services if the service name matches the list present in the config file.</div>
					
					
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-200 fs-5 fw-bold me-1'>T1486</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Data Encrypted for Impact</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>encryption of sensitive data. In the case where (Advanced Encryption Standard) AES is not supported by the OS and if auto mode option is enabled, ChaCha20 encryption is applied instead</div>
					
					
					<div className='fs-2 fw-bold pb-3'>Encryption algorithm</div>
					<div className='ms-5 mb-5'>
						<span className='badge badge-light-info fs-7 fw-bold my-2'>ChaCha20</span>
						<span>&nbsp;&nbsp;</span>
						<span className='badge badge-light-info fs-7 fw-bold my-2'>AES</span>
						<span>&nbsp;&nbsp;</span>
						<span className='badge badge-light-info fs-7 fw-bold my-2'>RSA</span>
						<span>&nbsp;&nbsp;</span>
						
					</div>
					<div className='fs-2 fw-bold pb-3'>Added Extension</div>
					<div className='fs-4 fw-semibold mt-2 mb-2 ms-5 text-dark fst-italic'>.sykffle</div>
						
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-200 fs-5 fw-bold me-1'>T1498</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Network Denial of Service</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>As an additional extortion method, the threat actors threaten to DDoS victims unless they pay a ransom.</div>
					
					
					
				</div>
			</div>
		</div>
	</div>
	</>
  )
}

export {ALPHV}
