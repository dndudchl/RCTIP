import React from 'react'

type Propx = {
  className: string
}

const Conti: React.FC<Propx> = ({className}) => { 
  return (
	<>
    <div className={`card mb-6 ${className}`}>
        <h1 className='card-title fw-bold fs-2qx pt-6'>MITRE ATT&CK MATRIX</h1>
        <div className='card-body pt-3 pb-6'>
        <div className='table-responsive border-start border-end border-gray-100'>
          <table className='table align-baseline gx-1 gy-4 table-striped border border-gray-900'>
            <thead>
			   <tr className='fs-6 fw-semebold text-gray-100 bg-dark text-center'>
			    	<th className='min-w-175px border-end border-gray-100'>Initial-Access</th>
			    	<th className='min-w-175px border-end border-gray-100'>Execution</th>
			    	<th className='min-w-175px border-end border-gray-100'>Persistence</th>
			    	<th className='min-w-175px border-end border-gray-100'>Privilege-Escalation</th>
			    	<th className='min-w-175px border-end border-gray-100'>Defense-Evasion</th>
			    	<th className='min-w-175px border-end border-gray-100'>Credential-Access</th>
			    	<th className='min-w-175px border-end border-gray-100'>Discovery</th>
			    	<th className='min-w-175px border-end border-gray-100'>Lateral-Movement</th>
			    	<th className='min-w-175px border-end border-gray-100'>Exfiltration</th>
			    	<th className='min-w-175px border-end border-gray-100'>Impact</th>
               </tr>
            </thead>
            <tbody>
				<tr className=''>				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1078</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>Valid Accounts</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Stolen RDP credentials</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1059.003</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>Command and Scripting Interpreter: Windows Command Shell</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Initial execution occurred via the Bazarloader DLL being executed by rundll32</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1133</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>External Remote Services</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Leverage external-facing remote services</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1055.001</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>Process Injection: Dynamic-link Library Injection</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Encrypted dynamic-link library (DLL) Injection</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1027</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>Obfuscated Files or Information</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Conti ransomware has encrypted DLLs and used obfuscation to hide Windows API calls.</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1110</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>Brute Force</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Legitimate tools</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1482</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>Domain Trust Discovery</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>The discovery commands utilize the familiar built in Microsoft utilities</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1021.002</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>Remote Services: SMB/Windows Admin Shares</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Copying executable files over SMB and then executing them via remote WMIC calls</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1048</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>Exfiltration Over Alternative Protocol </span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>WinSCP</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1486</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>Data Encrypted for Impact</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Windows Restart Manager
- AES
- RSA
- .conti
</div>
								</div>
							</div>
						</div>
					</td>          
				</tr>
				<tr className=''>				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1566.001</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>Phishing: Spearphishing Attachment</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Trickbot
Excel
</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1055.001</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>Process Injection: Dynamic-link Library Injection</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Encrypted dynamic-link library (DLL) Injection</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1558.003</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>Steal or Forge Kerberos Tickets: Kerberoasting</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Conti actors use Kerberos attacks to attempt to get the Admin hash.</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1069</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>Permission Group Discovery</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>The discovery commands utilize the familiar built in Microsoft utilities</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1489</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>Service Stop</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Stop services related to security, backup, database, and email solutions</div>
								</div>
							</div>
						</div>
					</td>          
				</tr>
				<tr className=''>				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1140</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>Deobfuscate/Decode Files or Information</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Using a hardcoded AES-256 key</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1082</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>System Information Discovery</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>The discovery commands utilize the familiar built in Microsoft utilities</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1490</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>Inhibit System Recovery</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Delete VSS</div>
								</div>
							</div>
						</div>
					</td>          
				</tr>
				<tr className=''>				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1018</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>Remote System Discovery</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>The discovery commands utilize the familiar built in Microsoft utilities</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				</tr>
				<tr className=''>				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1124</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>System Time Discovery</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>The discovery commands utilize the familiar built in Microsoft utilities</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				</tr>
				<tr className=''>				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1518</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>Software Discovery</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Excuted scripts</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				</tr>
				<tr className=''>				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1087</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>Account Discovery</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Microsoft Active Directory PowerShell module</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				</tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
	<div className='fs-1 fw-bold text-gray-900 pt-1 ps-3'>Initial-Access</div>
	<div className='row g-5 g-xl-8 pt-4'>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1078</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- Valid Accounts</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Conti actors have been observed gaining unauthorized access to victim networks through stolen Remote Desktop Protocol (RDP) credentials.</div>
					
					
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1566.001</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- Phishing: Spearphishing Attachment</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Conti ransomware can be delivered using TrickBot malware, which is known to use an email with an Excel sheet containing a malicious macro to deploy the malware.</div>
					
					
					
				</div>
			</div>
		</div>
	</div>
	<div className='fs-1 fw-bold text-gray-900 pt-1 ps-3'>Execution</div>
	<div className='row g-5 g-xl-8 pt-4'>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1059.003</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- Command and Scripting Interpreter: Windows Command Shell</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Initial execution occurred via the Bazarloader DLL being executed by rundll32</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>cmd</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-gray-900 fst-italic'>
							<div>&deg;&nbsp;rundll32.exe C:\Users\USERNAME\AppData\Local\Temp\7A86.dll,DLLRegisterServer</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</div>
	<div className='fs-1 fw-bold text-gray-900 pt-1 ps-3'>Persistence</div>
	<div className='row g-5 g-xl-8 pt-4'>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1133</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- External Remote Services</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Adversaries may leverage external-facing remote services to initially access and/or persist within a network.</div>
					
					
					
				</div>
			</div>
		</div>
	</div>
	<div className='fs-1 fw-bold text-gray-900 pt-1 ps-3'>Privilege-Escalation</div>
	<div className='row g-5 g-xl-8 pt-4'>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1055.001</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- Process Injection: Dynamic-link Library Injection</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Conti ransomware has loaded an encrypted dynamic-link library (DLL) into memory and then executes it.</div>
					
					
					
				</div>
			</div>
		</div>
	</div>
	<div className='fs-1 fw-bold text-gray-900 pt-1 ps-3'>Defense-Evasion</div>
	<div className='row g-5 g-xl-8 pt-4'>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1027</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- Obfuscated Files or Information</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Conti ransomware has encrypted DLLs and used obfuscation to hide Windows API calls.</div>
					
					
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1055.001</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- Process Injection: Dynamic-link Library Injection</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Conti ransomware has loaded an encrypted DLL into memory and then executes it.</div>
					
					
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1140</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- Deobfuscate/Decode Files or Information</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Conti ransomware has decrypted its payload using a hardcoded AES-256 key.</div>
					
					
					
				</div>
			</div>
		</div>
	</div>
	<div className='fs-1 fw-bold text-gray-900 pt-1 ps-3'>Credential-Access</div>
	<div className='row g-5 g-xl-8 pt-4'>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1110</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- Brute Force</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Conti actors use legitimate tools to maliciously scan for and brute force routers, cameras, and network-attached storage devices with web interfaces</div>
					
					
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1558.003</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- Steal or Forge Kerberos Tickets: Kerberoasting</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Conti actors use Kerberos attacks to attempt to get the Admin hash.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>psh</span>
						<span>&nbsp;&nbsp;</span>
					
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>pwsh</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-gray-900 fst-italic'>
							<div>&deg;&nbsp;if((Get-CIMInstance -Class Win32_ComputerSystem).PartOfDomain) exit 0 else exit 1</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</div>
	<div className='fs-1 fw-bold text-gray-900 pt-1 ps-3'>Discovery</div>
	<div className='row g-5 g-xl-8 pt-4'>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1482</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- Domain Trust Discovery</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>The BazarLoader malware on the beachhead began discovery actions around 20 minutes after the initial execution. The discovery commands utilize the familiar built in Microsoft utilities.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>cmd</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-gray-900 fst-italic'>
							<div>&deg;&nbsp;nltest /domain_trusts /all_trusts</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1069</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- Permission Group Discovery</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>The BazarLoader malware on the beachhead began discovery actions around 20 minutes after the initial execution. The discovery commands utilize the familiar built in Microsoft utilities.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>cmd</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-gray-900 fst-italic'>
							<div>&deg;&nbsp;net localgroup "administrator"</div>
							<div>&deg;&nbsp;net group "domain admins" /dom</div>
							<div>&deg;&nbsp;C:\Windows\system32\net1 group "domain admins" /dom</div>
							<div>&deg;&nbsp;C:\Windows\system32\cmd.exe /C net localgroup Administrators</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1082</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- System Information Discovery</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>The BazarLoader malware on the beachhead began discovery actions around 20 minutes after the initial execution. The discovery commands utilize the familiar built in Microsoft utilities.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>cmd</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-gray-900 fst-italic'>
							<div>&deg;&nbsp;C:\Windows\system32\cmd.exe /C systeminfo</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1018</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- Remote System Discovery</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>The BazarLoader malware on the beachhead began discovery actions around 20 minutes after the initial execution. The discovery commands utilize the familiar built in Microsoft utilities.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>cmd</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-gray-900 fst-italic'>
							<div>&deg;&nbsp;C:\Windows\system32\cmd.exe /C ping DOMAINCONTROLLER</div>
							<div>&deg;&nbsp;C:\Windows\system32\cmd.exe /C ping ENDPOINT</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1124</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- System Time Discovery</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>The BazarLoader malware on the beachhead began discovery actions around 20 minutes after the initial execution. The discovery commands utilize the familiar built in Microsoft utilities.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>cmd</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-gray-900 fst-italic'>
							<div>&deg;&nbsp;C:\Windows\system32\cmd.exe /C time</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1518</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- Software Discovery</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>The contents of Get-DataInfo.ps1 provide the threat actor with very specific details of the environment. This includes things like disk size, connectivity, antivirus software, and backup software.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>cmd</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-gray-900 fst-italic'>
							<div>&deg;&nbsp;[start.bat]</div>
							<div>&deg;&nbsp;@echo off</div>
							<div>&deg;&nbsp;pushd %~dp0</div>
							<div>&deg;&nbsp;powershell.exe Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process -Force</div>
							<div>&deg;&nbsp;IF "%1"==""(</div>
							<div>&deg;&nbsp;color 70</div>
							<div>&deg;&nbsp;echo "Please select a type of info collected:"</div>
							<div>&deg;&nbsp;set /p method="Press Enter for collect [all]: "</div>
							<div>&deg;&nbsp;color 08</div>
							<div>&deg;&nbsp;cls</div>
							<div>&deg;&nbsp;@echo on</div>
							<div>&deg;&nbsp;powershell.exe -executionpolicy remotesigned -File .\Get-DataInfo.ps1 %method</div>
							<div>&deg;&nbsp;)</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1087</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- Account Discovery</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>The Microsoft Active Directory PowerShell module was also imported and used for discovery tasks.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>cmd</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-gray-900 fst-italic'>
							<div>&deg;&nbsp;Get-ADComputer -Filter enabled -eq $true -properties *|select Name, DNSHostName, OperatingSystem, LastLogonDate | Export-CSV C:\Users\AllWindows.csv -NoTypeInformation -Encoding UTF8</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</div>
	<div className='fs-1 fw-bold text-gray-900 pt-1 ps-3'>Lateral-Movement</div>
	<div className='row g-5 g-xl-8 pt-4'>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1021.002</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- Remote Services: SMB/Windows Admin Shares</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Conti ransomware can spread via SMB and encrypts files on different hosts, potentially compromising an entire network.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>cmd</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-gray-900 fst-italic'>
							<div>&deg;&nbsp;C:\Windows\system32\cmd.exe /C wmic /node:"DOMAINCONTROLLER" process call create "C:\3.exe"</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</div>
	<div className='fs-1 fw-bold text-gray-900 pt-1 ps-3'>Exfiltration</div>
	<div className='row g-5 g-xl-8 pt-4'>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1048</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- Exfiltration Over Alternative Protocol </span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>The threat actor on the second day of the intrusion downloaded WinSCP to the file server and proceeded to install the program there.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>cmd</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-gray-900 fst-italic'>
							<div>&deg;&nbsp;C:\Users\REDACTED\AppData\Local\Temp\1\is-HCFKT.tmp\WinSCP-5.19.1-Setup.tmp" /SL5="$A02B0,10288106,864256,C:\Users\USER\Desktop\WinSCP-5.19.1-Setup.exe" </div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</div>
	<div className='fs-1 fw-bold text-gray-900 pt-1 ps-3'>Impact</div>
	<div className='row g-5 g-xl-8 pt-4'>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1486</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- Data Encrypted for Impact</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Conti ransomware can use "Windows Restart Manager" to ensure files are unlocked and open for encryption.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>cmd</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-gray-900 fst-italic'>
							<div>&deg;&nbsp;C:\Windows\system32\cmd.exe /C wmic /node:"ENDPOINT" process call create "C:\test.exe"</div>
							
						</div>
					</div>
					<div className='fs-2 fw-bold pb-3'>Encryption algorithm</div>
					<div className='ms-5 mb-5'>
						<span className='badge badge-light-info fs-7 fw-bold my-2'>AES</span>
						<span>&nbsp;&nbsp;</span>
						<span className='badge badge-light-info fs-7 fw-bold my-2'>RSA</span>
						<span>&nbsp;&nbsp;</span>
						
					</div>
					<div className='fs-2 fw-bold pb-3'>Added Extension</div>
					<div className='fs-4 fw-semibold mt-2 mb-2 ms-5 text-gray-900 fst-italic'>.conti</div>
						
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1489</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- Service Stop</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Conti ransomware can stop up to 146 Windows services related to security, backup, database, and email solutions through the use of net stop.</div>
					
					
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1490</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- Inhibit System Recovery</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Conti ransomware can delete Windows Volume Shadow Copies using vssadmin.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>cmd</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-gray-900 fst-italic'>
							<div>&deg;&nbsp;vssadmin.exe delete shadows /all /quiet</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</div>
	</>
  )
}

export {Conti}
