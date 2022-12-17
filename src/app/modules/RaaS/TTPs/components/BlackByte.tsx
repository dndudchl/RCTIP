import React from 'react'

type Propx = {
  className: string
}

const BlackByte: React.FC<Propx> = ({className}) => { 
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
			    	<th className='min-w-175px border-end border-gray-100'>Command-and-Control</th>
			    	<th className='min-w-175px border-end border-gray-100'>Exfiltration</th>
			    	<th className='min-w-175px border-end border-gray-100'>Impact</th>
               </tr>
            </thead>
            <tbody>
				<tr className=''>				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1190</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>Exploit Public-Facing Application</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>- Gain initial access by exploiting the ProxyShell vulnerabilities present on the customer’s Microsoft Exchange server.
- CVE-2021-34473
- CVE-2021-34523
- CVE-2021-31207
</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1059.001</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>Command and Scripting Interpreter: PowerShell</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Execute ransomware</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1505.003</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>Server Software Component: Web Shell</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Abuses MSExchangeMailboxReplication</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1112</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>Modify Registry</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Modify registries to elevate privileges
- LocalAccountTokenFilterPolicy
- EnableLinkedConnections
- LongPathsEnabled
</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1027.002</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>Obfuscated Files or Information: Software Packing</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Base64 Encoding</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1003</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>OS Credential Dumping</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Used Cobalt Strike</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1012</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>Query Registry</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Check language settings</div>
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
									<div>Used Cobalt Strike</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1105</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>Ingress Tool Transfer</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Transfer AnyDesk</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1567.002</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>Exfiltration Over Web Service: Exfiltration to Cloud Storage</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>- anonymfiles.com 
- file.io
</div>
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
									<div>- 3DES
- AES
- RSA
- .blackbyte
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
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'></span>
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
									<div>Contain ransom note</div>
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
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1055</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>Process Injection</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>injects a Cobalt Strike beacon</div>
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
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1018</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>Remote System Discovery</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>- net.exe
- arp.exe
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
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1070.004</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>Indicator Removal: File Deletion</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Deletes its executable after encryption to limit chances of analysis.</div>
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
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1562.001</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>Impair Defenses: Disable or Modify Tools</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Disable Windows Defender, Delete Raccine's schedule</div>
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
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1562.004</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>Impair Defenses: Disable or Modify System Firewall</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Change firewall rules</div>
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
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1190</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- Exploit Public-Facing Application</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>BlackByte ransomware threat actors exploit ProxyShell vulnerabilities (CVE-2021-34473, CVE-2021-34523, CVE-2021-31207) found in Microsoft Exchange Server to gain initial access to the target network. Using ProxyShell vulnerabilities, the BlackByte RaaS group drops a webshell with the .aspx extension.</div>
					<div className='fs-2 fw-bold pb-3'>Vulnerability</div>
					<div className='fs-4 fw-semebold pb-5 ms-5 text-gray-900 fst-italic'>
						<div>&deg;&nbsp;CVE-2021-34473 (CVSS:9.8) Microsoft Exchange Server Remote Code Execution</div>
					
						<div>&deg;&nbsp;CVE-2021-34523 (CVSS:9.8) Microsoft Exchange Server Elevation of Privilege</div>
					
						<div>&deg;&nbsp;CVE-2021-31207 (CVSS:9.8) Microsoft Exchange Server Security Feature Bypass</div>
					</div>
					
					
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
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1059.001</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- Command and Scripting Interpreter: PowerShell</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>The ransomware executable is named “complex.exe”. The purpose of the hash value is unknown. It might be the identifier of the victim.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>psh</span>
						<span>&nbsp;&nbsp;</span>
					
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>pwsh</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-gray-900 fst-italic'>
							<div>&deg;&nbsp;complex.exe -single SHA256_hash</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1059.003</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- Command and Scripting Interpreter: Windows Command Shell</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>This command attempts to open tree.dll in Wordpad 75 times and then prints the contents. tree.dll contains the ransom note.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>cmd</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-gray-900 fst-italic'>
							<div>&deg;&nbsp;cmd.exe /c for /l %x in (1,1,75) do start wordpad.exe /p C:\Users\tree.dll.</div>
							
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
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1505.003</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- Server Software Component: Web Shell</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>BlackByte ransomware abuses MSExchangeMailboxReplication.exe to place a webshell to establish a solid foothold in the victim’s network.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>widnows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>psh</span>
						<span>&nbsp;&nbsp;</span>
					
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>pwsh</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-gray-900 fst-italic'>
							<div>&deg;&nbsp;xcopy /I /Y #web_shells #web_shell_path   </div>
							
						</div>
					</div>
					
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
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1112</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- Modify Registry</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Escalate local privilege, Enable OS to share network connections between different privilege levels, Enable long path values for file paths, names, and namespaces to ensure encryption of all file names and paths</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>widnows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>psh</span>
						<span>&nbsp;&nbsp;</span>
					
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>pwsh</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-gray-900 fst-italic'>
							<div>&deg;&nbsp;reg add HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System /v LocalAccountTokenFilterPolicy /t REG_DWORD /d 1 /f</div>
							<div>&deg;&nbsp;reg add HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System /v EnableLinkedConnections /t REG_DWORD /d 1 /f</div>
							<div>&deg;&nbsp;reg add HKLM\SYSTEM\CurrentControlSet\Control\FileSystem /v LongPathsEnabled /t REG_DWORD /d 1 /f</div>
							
						</div>
					</div>
					
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
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1027.002</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- Obfuscated Files or Information: Software Packing</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>The BlackByte threat group uses obfuscation to make malware analysis difficult.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>psh, pwsh</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>cmd</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-gray-900 fst-italic'>
							<div>&deg;&nbsp;powershell -command "$x = [System.Text.Encoding]::Unicode.GetString([System.Convert]::FromBase64String('VwBpA'+'G4ARA B'+'lAGYA'+'ZQB'+'uAG'+'QA')); </div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1055</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- Process Injection</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>BlackByte ransomware injects a Cobalt Strike beacon into wuauclt.exe.</div>
					
					
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1070.004</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- Indicator Removal: File Deletion</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>BlackByte ransomware group deletes its executable after encryption to limit chances of analysis.</div>
					
					
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1562.001</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- Impair Defenses: Disable or Modify Tools</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>BlackByte ransomware stops Windows Defender by using an obfuscated PowerShell command. It also deletes a scheduled task for Raccine, a tool used to prevent ransomware attacks.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>widnows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>psh</span>
						<span>&nbsp;&nbsp;</span>
					
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>pwsh</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-gray-900 fst-italic'>
							<div>&deg;&nbsp;Stop-Service -Name $x</div>
							<div>&deg;&nbsp;Set-Service -StartupType Disabled $x"</div>
							<div>&deg;&nbsp;schtasks.exe /DELETE /TN "\"Raccine Rules Updater\"" /F</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1562.004</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- Impair Defenses: Disable or Modify System Firewall</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>BlackByte threat actors change firewall rules to discover other assets in the victim’s network.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>widnows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>psh</span>
						<span>&nbsp;&nbsp;</span>
					
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>pwsh</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-gray-900 fst-italic'>
							<div>&deg;&nbsp;netsh advfirewall firewall set rule "group=\"Network Discovery\"" new enable=Yes</div>
							<div>&deg;&nbsp;netsh advfirewall firewall set rule "group=\"File and Printer Sharing\"" new enable=Yes</div>
							
						</div>
					</div>
					
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
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1003</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- OS Credential Dumping</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>BlackByte group uses Cobalt Strike to dump credentials and access service accounts in the victim network.</div>
					
					
					
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
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1012</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- Query Registry</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>BlackByte ransomware checks the language settings by querying the related registries.</div>
					
					
					
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
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>BlackByte uses the following commands to discover other assets in the victim’s network.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>psh</span>
						<span>&nbsp;&nbsp;</span>
					
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>pwsh</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-gray-900 fst-italic'>
							<div>&deg;&nbsp;net view /domain</div>
							<div>&deg;&nbsp;net view</div>
							<div>&deg;&nbsp;arp -a</div>
							
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
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>BlackByte ransomware creates SMB shares to distribute AnyDesk, a remote desktop application, to other assets in the victim’s network using Cobalt Strike.</div>
					
					
					
				</div>
			</div>
		</div>
	</div>
	<div className='fs-1 fw-bold text-gray-900 pt-1 ps-3'>Command-and-Control</div>
	<div className='row g-5 g-xl-8 pt-4'>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1105</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- Ingress Tool Transfer</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>The BlackByte group transfers a Cobalt Strike beacon to the victim using the webshell they placed. After the beacon is placed, they transfer the AnyDesk application.</div>
					
					
					
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
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1567.002</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- Exfiltration Over Web Service: Exfiltration to Cloud Storage</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>BlackByte ransomware sends victim’s compressed files to anonymous file-sharing services such as anonymfiles.com and file.io.</div>
					
					
					
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
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>BlackByte uses symmetric key encryption to encrypt the victim’s files. Check out our blog post to learn more detail on this MITRE ATT&CK technique.</div>
					
					
					<div className='fs-2 fw-bold pb-3'>Encryption algorithm</div>
					<div className='ms-5 mb-5'>
						<span className='badge badge-light-info fs-7 fw-bold my-2'>3DES</span>
						<span>&nbsp;&nbsp;</span>
						<span className='badge badge-light-info fs-7 fw-bold my-2'>AES</span>
						<span>&nbsp;&nbsp;</span>
						<span className='badge badge-light-info fs-7 fw-bold my-2'>RSA</span>
						<span>&nbsp;&nbsp;</span>
						
					</div>
					<div className='fs-2 fw-bold pb-3'>Added Extension</div>
					<div className='fs-4 fw-semibold mt-2 mb-2 ms-5 text-gray-900 fst-italic'>.blackbyte</div>
						
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
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Resize volume shadow copy sizes. And delete volume shadow copies.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>psh</span>
						<span>&nbsp;&nbsp;</span>
					
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>pwsh</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-gray-900 fst-italic'>
							<div>&deg;&nbsp;vssadmin resize shadowstorage /for=c: /on=c: /maxsize=401MB</div>
							<div>&deg;&nbsp;vssadmin resize shadowstorage /for=c: /on=c: /maxsize=unbounded</div>
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

export {BlackByte}
