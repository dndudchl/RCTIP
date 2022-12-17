import React from 'react'

type Propx = {
  className: string
}

const MAZE: React.FC<Propx> = ({className}) => { 
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
			    	<th className='min-w-175px border-end border-white'>Privilege-Escalation</th>
			    	<th className='min-w-175px border-end border-white'>Defense-Evasion</th>
			    	<th className='min-w-175px border-end border-white'>Discovery</th>
			    	<th className='min-w-175px border-end border-white'>Lateral-Movement</th>
			    	<th className='min-w-175px border-end border-white'>Command-and-Control</th>
			    	<th className='min-w-175px border-end border-white'>Exfiltration</th>
			    	<th className='min-w-175px border-end border-white'>Impact</th>
               </tr>
            </thead>
            <tbody>
				<tr className=''>				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1566</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Phishing</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Distribute directly via exploit kits and spam campaigns</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1059.003</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Command and Scripting Interpreter: Windows Command Shell</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Use batch scripts with various command</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1547.001</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Boot or Logon Autostart Execution: Registry Run Keys / Startup Folder</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Create a file named "startup_vrun.bat"</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1547.001</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Boot or Logon Autostart Execution: Registry Run Keys / Startup Folder</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Create a file name "startup_vrun.bat"</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1564.006</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Hide Artifacts: Run Virtual Instance</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Use VirtualBox and Window 7 virtual machine to run</div>
								</div>
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
									<div>Gather all of the running systme process</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1021.002</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Remote Services: Remote Desktop Protocol</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Involve lateral movement within a network using Cobalt Strike BEACON and stolen credentials</div>
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
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Communicate to hard-coded IP address</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1048</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Exfiltration Over Alternative Protocol</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Exfiltrate data to FTP server</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1489</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Service Stop</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Stop SQL service</div>
								</div>
							</div>
						</div>
					</td>          
				</tr>
				<tr className=''>				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1133</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>External Remote Services</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Log into an internet-facing system via RDP</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1106</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Native API</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Use several Windows API functions</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1053.005</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Scheduled Task/Job: Scheduled Task</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Create scheduled tasks</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1055.001</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Process Injection: Dynamic-link Library Injection</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Inject the malware DLL into a target process</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1562.001</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Impair Defenses: Disable or Modify Tools</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Disable dynamic analysis and other security tools</div>
								</div>
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
									<div>Check the language of the system</div>
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
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1568</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Dynamic Resolution</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Forge POST strings with a random choice from a list</div>
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
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1529</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>System Shutdown/Reboot</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Shutdown command on a victim machine</div>
								</div>
							</div>
						</div>
					</td>          
				</tr>
				<tr className=''>				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1078</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Valid Accounts</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Log into a Citrix web portal account with weak password</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1053.005</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Scheduled Task/Job: Scheduled Task</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Create scheduled tasks</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1136</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Create Account</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Create a new domain account</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1053.005</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Scheduled Task/Job: Scheduled Task</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Create scheduled tasks</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1070</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Indicator Removal</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Delete shadow volumes copies</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1614.001</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>System Location Discovery: System Language Discovery</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Terminate execution if the language matches</div>
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
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1490</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Inhibit System Recovery</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Delete the shadow volumes copies</div>
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
									<div>Use WMI to attempt to delet ethe shadow volumes copies</div>
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
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1036.004</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Masquerading: Masquerade Task or Service</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Create scheduled tasks masquerading</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1049</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>System Network Connections Discovery</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Enumerate the network resource by using functions</div>
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
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1486</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Data Encrypted for Impact</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Disrupte systems by encrypting files</div>
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
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'></span>
								<span className='text-dark fw-semibold mb-1 fs-7'></span>
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
									<div>Decrypted strings and other important information</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1083</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>File and Directory Discovery</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Conduct reconnaissance activity</div>
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
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1027.001</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Obfuscated Files or Information: Binary Padding</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Insert large blocks of junk code</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1135</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Network Share Discovery</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Use batch script to perliminary network reconnaissance</div>
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
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1055.001</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Process Injection: Dynamic-link Library Injection</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Inject the malware DLL</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-dark'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1482</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>Domain Trust Discovery</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Execute a large number of reconnaissance scripts</div>
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
								<span className='badge badge-dark text-white fs-8 fw-bold me-2'>T1218.007</span>
								<span className='text-dark fw-semibold mb-1 fs-7'>System Binary Proxy Execution: siexec</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-white fw-semibold d-block fs-7'>
									<div>Deliver components for its ransomware attack</div>
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
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1566</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Phishing</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>MAZE ransomware was initially distributed directly via exploit kits and spam campaigns through late 2019. These emails used tax, invoice, and package delivery themes with document attachments or inline links to documents which download and execute Maze ransomware.</div>
					
					
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1133</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- External Remote Services</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>An actor logged into an internet-facing system via RDP. The account used to grant initial access was a generic support account. It is unclear how the actor obtained the account's password.</div>
					
					
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1078</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Valid Accounts</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>An actor logged into a Citrix web portal account with a weak password. This authenticated access enabled the actor to launch a Meterpreter payload on an internal system.</div>
					
					
					
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
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1059.003</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Command and Scripting Interpreter: Windows Command Shell</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>The Maze encryption process has used batch scripts with various commands.</div>
					
					
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1106</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Native API</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Maze has used several Windows API functions throughout the encryption process including IsDebuggerPresent, TerminateProcess, Process32FirstW, among others.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>cmd</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-dark fst-italic'>
							<div>&deg;&nbsp;C:\Windows\Microsoft.NET\Framework\v4.0.30319\csc.exe /out:"#output_file" /target:exe #source_file</div>
							<div>&deg;&nbsp;%tmp%/T1106.exe</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1053.005</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Scheduled Task/Job: Scheduled Task</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Maze has created scheduled tasks using name variants such as "Windows Update Security", "Windows Update Security Patches", and "Google Chrome Security Update", to launch Maze at a specific time.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>cmd</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-dark fst-italic'>
							
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
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Maze has used WMI to attempt to delete the shadow volumes on a machine, and to connect a virtual machine to the network domain of the victim organization's network.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>cmd</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-dark fst-italic'>
							
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
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1547.001</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Boot or Logon Autostart Execution: Registry Run Keys / Startup Folder</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Maze has created a file named "startup_vrun.bat" in the Startup folder of a virtual machine to establish persistence.</div>
					
					
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1053.005</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Scheduled Task/Job: Scheduled Task</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Maze has created scheduled tasks using name variants such as "Windows Update Security", "Windows Update Security Patches", and "Google Chrome Security Update", to launch Maze at a specific time.</div>
					
					
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1136</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Create Account</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>An actor created a new domain account and added it to the domain administrators group.</div>
					
					
					
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
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1547.001</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Boot or Logon Autostart Execution: Registry Run Keys / Startup Folder</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Maze has created a file named "startup_vrun.bat" in the Startup folder of a virtual machine to establish persistence.</div>
					
					
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1055.001</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Process Injection: Dynamic-link Library Injection</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Maze has injected the malware DLL into a target process.</div>
					
					
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1053.005</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Scheduled Task/Job: Scheduled Task</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Maze has created scheduled tasks using name variants such as "Windows Update Security", "Windows Update Security Patches", and "Google Chrome Security Update", to launch Maze at a specific time.</div>
					
					
					
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
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1564.006</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Hide Artifacts: Run Virtual Instance</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Maze operators have used VirtualBox and a Windows 7 virtual machine to run the ransomware; the virtual machine's configuration file mapped the shared network drives of the target company, presumably so Maze can encrypt files on the shared drives as well as the local machine.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>cmd</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-dark fst-italic'>
							<div>&deg;&nbsp;"#vboxmanage_exe" createvm --name "#vm_name" --register</div>
							<div>&deg;&nbsp;"#vboxmanage_exe" modifyvm "#vm_name" --firmware efi</div>
							<div>&deg;&nbsp;"#vboxmanage_exe" startvm "#vm_name"</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1562.001</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Impair Defenses: Disable or Modify Tools</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Maze has disabled dynamic analysis and other security tools including IDA debugger, x32dbg, and OllyDbg. It has also disabled Windows Defender's Real-Time Monitoring feature and attempted to disable endpoint protection services.</div>
					
					
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1070</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Indicator Removal</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Maze has used the "Wow64RevertWow64FsRedirection" function following attempts to delete the shadow volumes, in order to leave the system in the same state as it was prior to redirection.</div>
					
					
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1036.004</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Masquerading: Masquerade Task or Service</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Maze operators have created scheduled tasks masquerading as "Windows Update Security", "Windows Update Security Patches", and "Google Chrome Security Update" designed to launch the ransomware.</div>
					
					
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1027</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Obfuscated Files or Information</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Maze has decrypted strings and other important information during the encryption process. Maze also calls certain functions dynamically to hinder analysis.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>psh</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-dark fst-italic'>
							<div>&deg;&nbsp;$OriginalCommand = '#powershell_command'</div>
							<div>&deg;&nbsp;$Bytes = [System.Text.Encoding]::Unicode.GetBytes($OriginalCommand)</div>
							<div>&deg;&nbsp;$EncodedCommand =[Convert]::ToBase64String($Bytes)</div>
							<div>&deg;&nbsp;$EncodedCommand</div>
							<div>&deg;&nbsp;powershell.exe -EncodedCommand $EncodedCommand</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1027.001</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Obfuscated Files or Information: Binary Padding</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Maze has inserted large blocks of junk code, including some components to decrypt strings and other important information for later in the encryption process.</div>
					
					
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1055.001</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Process Injection: Dynamic-link Library Injection</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Maze has injected the malware DLL into a target process.</div>
					
					
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1218.007</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- System Binary Proxy Execution: siexec</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Maze has delivered components for its ransomware attacks using MSI files, some of which have been executed from the command-line using Msiexec.</div>
					
					
					
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
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1057</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Process Discovery</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Maze has gathered all of the running system processes.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>psh</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-dark fst-italic'>
							
						</div>
					</div>
					
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
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Maze has checked the language of the infected system using the "GetUSerDefaultUILanguage" function.</div>
					
					
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1614.001</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- System Location Discovery: System Language Discovery</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Maze has checked the language of the machine with function "GetUserDefaultUILanguage" and terminated execution if the language matches with an entry in the predefined list.</div>
					
					
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1049</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- System Network Connections Discovery</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Maze has used the "WNetOpenEnumW", "WNetEnumResourceW", "WNetCloseEnum" and "WNetAddConnection2W" functions to enumerate the network resources on the infected machine.</div>
					
					
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1083</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- File and Directory Discovery</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Over a period of several days, an actor conducted reconnaissance activity using Bloodhound, PowerSploit/PowerView (Invoke-ShareFinder), and a reconnaissance script designed to enumerate directories across internal hosts.</div>
					
					
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1135</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Network Share Discovery</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Preliminary network reconnaissance has been conducted using a batch script named '2.bat' which contained a series of nslookup commands. The output of this script was copied into a file named '2.txt'.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>cmd</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-dark fst-italic'>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1482</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Domain Trust Discovery</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>The actor executed a large number of reconnaissance scripts via Cobalt Strike to collect network, host, filesystem, and domain related information.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>cmd</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-dark fst-italic'>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</div>
	<div className='fs-1 fw-bold text-dark pt-1 ps-3'>Lateral-Movement</div>
	<div className='row g-5 g-xl-8 pt-4'>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1021.002</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Remote Services: Remote Desktop Protocol</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Across the majority of MAZE ransomware incidents lateral movement was accomplished via Cobalt Strike BEACON and using previously harvested credentials. Stolen credentials were then used to move laterally across the network via RDP and to install BEACON payloads providing the actors with access to nearly one hundred hosts.</div>
					
					
					
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
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1071.001</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Application Layer Protocol: Web Protocols</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Maze has communicated to hard-coded IP addresses via HTTP.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>psh</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-dark fst-italic'>
							<div>&deg;&nbsp;Invoke-WebRequest #domain -UserAgent "HttpBrowser/1.0" | out-null</div>
							<div>&deg;&nbsp;Invoke-WebRequest #domain -UserAgent "Wget/1.9+cvs-stable (Red Hat modified)" | out-null</div>
							<div>&deg;&nbsp;Invoke-WebRequest #domain -UserAgent "Opera/8.81 (Windows NT 6.0; U; en)" | out-null</div>
							<div>&deg;&nbsp;Invoke-WebRequest #domain -UserAgent "*|*" | out-null</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1568</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Dynamic Resolution</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Maze has forged POST strings with a random choice from a list of possibilities including "forum", "php", "view", etc. while making connection with the C2, hindering detection effort.</div>
					
					
					
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
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1048</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Exfiltration Over Alternative Protocol</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>An actor has been observed exfiltrating data to FTP servers using a base64-encoded PowerShell script designed to upload any files with .7z file extensions to a predefined FTP server using a hard-coded username and password. Actors deploying MAZE ransomware have also used the utility WinSCP to exfiltrate data to an attacker-controlled FTP server.</div>
					
					
					
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
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1489</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Service Stop</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Maze has stopped SQL services to ensure it can encrypt any database.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>cmd</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-dark fst-italic'>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1529</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- System Shutdown/Reboot</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Maze has issued a shutdown command on a victim machine that, upon reboot, will run the ransomware within a VM.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>cmd</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-dark fst-italic'>
							
						</div>
					</div>
					
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
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Maze has attempted to delete the shadow volumes of infected machines, once before and once after the encryption process.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>cmd</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-dark fst-italic'>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-white fs-5 fw-bold me-1'>T1486</span>
						<span className='text-dark fw-bold mb-1 fs-3'>- Data Encrypted for Impact</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Maze has disrupted systems by encrypting files on targeted machines, claiming to decrypt files if a ransom payment is made. Maze has used the ChaCha algorithm, based on Salsa20, and an RSA algorithm to encrypt files.</div>
					
					
					<div className='fs-2 fw-bold pb-3'>Encryption algorithm</div>
					<div className='ms-5 mb-5'>
						<span className='badge badge-light-info fs-7 fw-bold my-2'>ChaCha20</span>
						<span>&nbsp;&nbsp;</span>
						<span className='badge badge-light-info fs-7 fw-bold my-2'>RSA</span>
						<span>&nbsp;&nbsp;</span>
						
					</div>
					<div className='fs-2 fw-bold pb-3'>Added Extension</div>
					<div className='fs-4 fw-semibold mt-2 mb-2 ms-5 text-dark fst-italic'>random</div>
						
				</div>
			</div>
		</div>
	</div>
	</>
  )
}

export {MAZE}
