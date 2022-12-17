import React from 'react'

type Propx = {
  className: string
}

const HelloKitty: React.FC<Propx> = ({className}) => { 
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
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>- CVE-2021-20016
- CVE-2021-20021
- CVE-2021-2002 
</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1569</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>System Services: Service Execution</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Execute ServeMager.exe using PsExec</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1136.003</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Create Account: Cloud Account</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Using s3browser-9-5-3.exe to make the cloud account</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1027</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Obfuscated Files or Information</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Using obfucated file to avoid detection</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1110</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Brute Force: Password Guessing</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Using a dictionary attack to gain access the network router</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1046</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Network Service Discovery</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Using SoftPerfect Network Scanner to find network sevices</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1105</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Ingress Tool Transfer</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Using SombRat loader to download and execute the DLL plugins</div>
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
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>- NTRU
- .crypted
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
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1047</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Windows Management Instrumentation</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Using WMI, enumerate the volume shadow copies</div>
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
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1140</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Deobfuscate/Decode Files or Information</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Using batch file, WwanSvc.bat, HelloKitty decode the obfuscated file</div>
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
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1082</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>System Information Discovery</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Using script HelloKitty made to find system information</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1573.002</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Encrypted Channel: Asymmetric Cryptography</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Using encrypted channel as C2 sessions</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1490</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Inhibit System Recovery</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Delete volume shadow copies</div>
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
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1059.001</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Command and Scripting Interpreter: PowerShell</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>HelloKitty makes powershell to bypass the anti-malware program</div>
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
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1036</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Masquerading</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Using masquerading malware to avoid detection</div>
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
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1033</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>System Owner/User Discovery</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Using masqueraded malware, HelloKitty find system owner and user data</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1090</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Proxy</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Using proxy to communicate</div>
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
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1057</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Process Discovery</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Using masqueraded malware, HelloKitty find process data</div>
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
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1124</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>System Time Discovery</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Using masqueraded malware, HelloKitty find System time data</div>
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
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1190</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Exploit Public-Facing Application</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>The HelloKitty operators utilize several tactics and techniques to breach the targeted networks, including compromised credentials and security flaws in recently patched SonicWall products, including CVE-2021-20016, CVE-2021-20021, CVE-2021-20022, and CVE-2021-2002.</div>
					<div className='fs-2 fw-bold pb-3'>Vulnerability</div>
					<div className='fs-4 fw-semebold pb-5 ms-5 text-dark fst-italic'>
						<div>&deg;&nbsp;CVE-2021-20016</div>
					
						<div>&deg;&nbsp;CVE-2021-20021</div>
					
						<div>&deg;&nbsp;CVE-2021-2002</div>
					</div>
					
					
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
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1569</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- System Services: Service Execution</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>The malicious cyber actor used PsExec to execute ServeManager.exe, which CISA refers to as FiveHands ransomware.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>cmd</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-dark fst-italic'>
							<div>&deg;&nbsp;psexec.exe -d @comps.txt -s -relatime -c ServeManager.exe -key</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1047</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Windows Management Instrumentation</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>To prevent data recovery, FiveHands uses WMI to first enumerate then delete Volume Shadow copies.</div>
					
					
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1059.001</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Command and Scripting Interpreter: PowerShell</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>The threat actors used batch and text files to execute and invoke PowerShell scripts that decoded a SombRAT loader and enabled PowerShell to bypass the organization's anti-malware program</div>
					
					
					
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
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1136.003</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Create Account: Cloud Account</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>They use s3browser-9-5-3.exe. It is the free version of the S3 Browser program used to upload and download data from a cloud account. The program can fully configure a cloud account, modify HTTP headers and object tags, enable multiple simultaneous uploads and downloads, and provide server-side encryption</div>
					
					
					
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
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1027</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Obfuscated Files or Information</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>The WwanSvc.bat artifact is a batch file. When executed, it will invoke PowerShell, which decodes and executes a base64-encoded PowerShell script called WwanSvc.txt in the path C:\ProgramData\Microsoft\WwanSvc\</div>
					
					
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1140</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Deobfuscate/Decode Files or Information</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>The WwanSvc.bat artifact is a batch file. When executed, it will invoke PowerShell, which decodes and executes a base64-encoded PowerShell script called WwanSvc.txt in the path C:\ProgramData\Microsoft\WwanSvc\</div>
					
					
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1036</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Masquerading</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Some of the native functionality that the malware provides without the use of a plugin includes collecting system data—such as computer name, username, current process, operating system (OS) version, local system time, and the current process that the malware is masquerading</div>
					
					
					
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
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1110</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Brute Force: Password Guessing</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>They uses RouterScan.exe, and the latest release of this program (v2.60) contains a list of common admin names and passwords that can be used for a dictionary attack to gain access to a network router</div>
					
					
					
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
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1046</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Network Service Discovery</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>The cyber actor used SoftPerfect Network Scanner for Discovery of hostnames and network services. They used netscan.exe(and netscan.xml which was the report of netscan.exe, and netscan.lic to use netscan.exe)</div>
					
					
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1082</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- System Information Discovery</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Script WwanSvc.a checks the system environment for a 64-bit architecture</div>
					
					
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1033</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- System Owner/User Discovery</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Some of the native functionality that the malware provides without the use of a plugin includes collecting system data—such as computer name, username, current process, operating system (OS) version, local system time, and the current process that the malware is masquerading</div>
					
					
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1057</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Process Discovery</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Some of the native functionality that the malware provides without the use of a plugin includes collecting system data—such as computer name, username, current process, operating system (OS) version, local system time, and the current process that the malware is masquerading.</div>
					
					
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1124</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- System Time Discovery</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Some of the native functionality that the malware provides without the use of a plugin includes collecting system data—such as computer name, username, current process, operating system (OS) version, local system time, and the current process that the malware is masquerading</div>
					
					
					
				</div>
			</div>
		</div>
	</div>
	<div className='fs-1 fw-bold text-dark pt-1 ps-3'>Command-and-Control</div>
	<div className='row g-5 g-xl-8 pt-4'>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1105</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Ingress Tool Transfer</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>The SombRAT loader recovered in this incident was a 64-bit variant that allowed the malicious actor to remotely download and load executable dynamic-link libraries (DLL) plugins on the affected system</div>
					
					
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1573.002</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Encrypted Channel: Asymmetric Cryptography</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>The loader used hardcoded public RSA keys for command and control (C2) sessions. The C2 communications were encrypted using Advanced Encryption Standard (AES), resulting in a Secure Sockets Layer tunnel with the threat actors.</div>
					
					
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1090</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Proxy</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>The program also contains native C2 capabilities allowing it to communicate with the remote operator using an embedded SOCKS proxy or via domain name system (DNS) tunneling.</div>
					
					
					
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
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1486</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Data Encrypted for Impact</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>The malware also encrypts files in the recovery folder. After the files are encrypted, the program will write a ransom note to each folder and directory on the system. It uses a public key encryption scheme called NTRUEncrypt. (the NTRUEncrypt public key cryptosystem encryption algorithm (NTRU), is a lattice-based alternative to Rivest-Shamir-Adleman, known as RSA, and Elliptic-curve cryptography, or ECC, and is based on the shortest vector problem in a lattice.)</div>
					
					
					<div className='fs-2 fw-bold pb-3'>Encryption algorithm</div>
					<div className='ms-5 mb-5'>
						<span className='badge badge-light-info fs-7 fw-bold my-2'>NTRU</span>
						<span>&nbsp;&nbsp;</span>
						
					</div>
					<div className='fs-2 fw-bold pb-3'>Added Extension</div>
					<div className='fs-4 fw-semibold mt-2 mb-2 ms-5 text-dark fst-italic'>.crypted</div>
						
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1490</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Inhibit System Recovery</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>To prevent data recovery, FiveHands uses WMI to first enumerate then delete Volume Shadow copies.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>cmd</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-dark fst-italic'>
							<div>&deg;&nbsp;wmic.exe shadowcopy delete </div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</div>
	</>
  )
}

export {HelloKitty}
