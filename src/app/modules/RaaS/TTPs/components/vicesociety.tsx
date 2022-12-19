import React from 'react'

type Propx = {
  className: string
}

const Vicesociety: React.FC<Propx> = ({className}) => { 
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
			    	<th className='min-w-175px border-end border-gray-100'>Lateral-Movement</th>
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
									<div>Exploit vulnerabilities to gain access to victims' networks</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1047</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>Windows Management Instrumentation</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Use WMI to execute malicious commands</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1543.003</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>Create or Modify System Process: Windows Service</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>encrypt Windows Operating functions</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1068</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>Exploitation for Privilege Escalation</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>- CVE-2021-1675
- CVE-2021-34527
</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1036</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>Masquerading</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Try to manipulate the features of dropped files to hide or make them look legitimate.</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1080</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>Taint Shared Content</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Deliver payloads to remove systems</div>
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
									<div>Encrypt data on target systems</div>
								</div>
							</div>
						</div>
					</td>          
				</tr>
				<tr className=''>				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1078</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>Valid Accounts</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Obtain initial network access through compromised valid accounts.</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1053.005</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>Scheduled Task/Job: Scheduled Task</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Create malicious files that create component task schedule objects</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1547.001</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>Registry Run Keys / Startup Folder</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Using malicious files that create an undocumented autostart Registry key to maintain persistence after boot/reboot.</div>
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
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1055</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>Process Injection</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Inject code into legitimate processes to evade process-based defenses</div>
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
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1531</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>Account Access Removal</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Run a script to change password</div>
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
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1574.002</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>Hijack Execution Flow: DLL Side-Loading</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Side-load their payloads by planting their own DLL</div>
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
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1497</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>Virtualization/Sandbox Evasion</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Use sleep techniques in their files to hinder reverse engineering or dynamic analysis.</div>
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
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Vice Society actors exploit vulnerabilities in an internet-facing systems to gain access to victims’ networks.</div>
					
					
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1078</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- Valid Accounts</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Vice Society actors obtain initial network access through compromised valid accounts.</div>
					
					
					
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
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1047</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- Windows Management Instrumentation</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Vice Society actors leverage WMI as a means of “living off the land” to execute malicious commands.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>cmd</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-gray-900 fst-italic'>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1053.005</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- Scheduled Task/Job: Scheduled Task</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Vice Society have used malicious files that create component task schedule objects, which are often mean to register a specific task to autostart on system boot. This facilitates recurring execution of their code.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>cmd</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-gray-900 fst-italic'>
							<div>&deg;&nbsp;schtasks /create /tn "T1053_005_OnLogon" /sc onlogon /tr "cmd.exe /c calc.exe"</div>
							<div>&deg;&nbsp;schtasks /create /tn "T1053_005_OnStartup" /sc onstart /ru system /tr "cmd.exe /c calc.exe"</div>
							
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
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1543.003</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- Create or Modify System Process: Windows Service</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Vice Society actors encrypt Windows Operating functions to preserve compromised system functions.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>cmd</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-gray-900 fst-italic'>
							<div>&deg;&nbsp;sc.exe create #service_name binPath= #binarypath</div>
							<div>&deg;&nbsp;sc.exe start #service_name</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1547.001</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- Registry Run Keys / Startup Folder</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Vice Society actors have employed malicious files that create an undocumented autostart Registry key to maintain persistence after boot/reboot.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>psh</span>
						<span>&nbsp;&nbsp;</span>
					
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>pwsh</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-gray-900 fst-italic'>
							<div>&deg;&nbsp;New-Item -ItemType Directory -path "#new_startup_folder"</div>
							<div>&deg;&nbsp;Copy-Item -path "#payload" -destination "#new_startup_folder"</div>
							<div>&deg;&nbsp;Set-ItemProperty -Path  "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\User Shell Folders" -Name "Startup" -Value "#new_startup_folder"</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1574.002</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- Hijack Execution Flow: DLL Side-Loading</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Vice Society actors may directly side-load their payloads by planting their own DLL then invoking a legitimate application that executes the payload within that DLL. This serves as both a persistence mechanism and a means to masquerade actions under legitimate programs.</div>
					
					
					
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
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1068</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- Exploitation for Privilege Escalation</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Vice Society actors have been observed exploiting PrintNightmare vulnerability (CVE-2021-1675 and CVE-2021-34527) to escalate privileges.</div>
					<div className='fs-2 fw-bold pb-3'>Vulnerability</div>
					<div className='fs-4 fw-semebold pb-5 ms-5 text-gray-900 fst-italic'>
						<div>&deg;&nbsp;CVE-2021-1675</div>
					
						<div>&deg;&nbsp;CVE-2021-34527</div>
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
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1036</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- Masquerading</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Vice Society actors may attempt to manipulate features of the files they drop in a victim’s environment to mask the files or make the files appear legitimate.</div>
					
					
					
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
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Vice Society artifacts have been analyzed to reveal the ability to inject code into legitimate processes for evading process-based defenses. This tactic has other potential impacts, including the ability to escalate privileges or gain additional accesses.</div>
					
					
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1497</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- Virtualization/Sandbox Evasion</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Vice Society actors may have included sleep techniques in their files to hinder common reverse engineering or dynamic analysis.</div>
					
					
					
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
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1080</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- Taint Shared Content</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Vice Society actors may deliver payloads to remote systems by adding content to shared storage locations such as network drives.</div>
					
					
					
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
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Vice Society actors have encrypted data on target systems or on large numbers of systems in a network to interrupt availability to system and network resources.</div>
					
					
					<div className='fs-2 fw-bold pb-3'>Encryption algorithm</div>
					<div className='ms-5 mb-5'>
						<span className='badge badge-light-info fs-7 fw-bold my-2'>cryptosystem1</span>
						<span>&nbsp;&nbsp;</span>
						
					</div>
					<div className='fs-2 fw-bold pb-3'>Added Extension</div>
					<div className='fs-4 fw-semibold mt-2 mb-2 ms-5 text-gray-900 fst-italic'>.v-society.[victim’s_ID]</div>
						
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1531</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- Account Access Removal</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Vice Society actors run a script to change passwords of victims’ email accounts.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>cmd</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-gray-900 fst-italic'>
							<div>&deg;&nbsp;net user #user_account #new_user_password /add</div>
							<div>&deg;&nbsp;net.exe user #user_account #new_password</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</div>
	</>
  )
}

export {Vicesociety}
