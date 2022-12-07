
import React from 'react'

type Propx = {
  className: string
}

const Gwisin: React.FC<Propx> = ({className}) => {  
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
               <th className='border min-w-125px'>Defense-Evasion</th>
               <th className='border min-w-125px'>Credential Access</th>
               <th className='border min-w-125px'>Discovery</th>
               <th className='border min-w-125px'>Lateral Movement</th>
               <th className='border min-w-125px'>Command and Control</th>
               <th className='border min-w-125px'>Exfiltration</th>
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
												- Exploit Public-Facing Application
											</div>
											<div className='text-muted fw-semibold text-muted d-block fs-7'>

											</div>
										</div>
									</div>
								</td>
              
			   					<td className='border-start border-end border-dark'>
									<div className='px-2 d-flex align-items-baseline'>
										<div className='symbol symbol-50px me-2'>
										<span className='badge badge-secondary fs-8 fw-bold '>T1569.002</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Service Execution
											</div>
											<div className='text-muted fw-semibold text-muted d-block fs-7'>

											</div>
										</div>
									</div>
								</td>
              
			   					<td className='border-start border-end border-dark'>
									<div className='px-2 d-flex align-items-baseline'>
										<div className='symbol symbol-50px me-2'>
										<span className='badge badge-secondary fs-8 fw-bold '>T1059.003</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Command and Scripting Interpreter : Windows Command Shell
											</div>
											<div className='text-muted fw-semibold text-muted d-block fs-7'>

											</div>
										</div>
									</div>
								</td>
              
			   					<td className='border-start border-end border-dark'>
									<div className='px-2 d-flex align-items-baseline'>
										<div className='symbol symbol-50px me-2'>
										<span className='badge badge-secondary fs-8 fw-bold '>T1059.006</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Command and Scripting Interpreter: Python
											</div>
											<div className='text-muted fw-semibold text-muted d-block fs-7'>

											</div>
										</div>
									</div>
								</td>
              
			   					<td className='border-start border-end border-dark'>
									<div className='px-2 d-flex align-items-baseline'>
										<div className='symbol symbol-50px me-2'>
										<span className='badge badge-secondary fs-8 fw-bold '>T1047</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Windows Management Instrumentation
											</div>
											<div className='text-muted fw-semibold text-muted d-block fs-7'>

											</div>
										</div>
									</div>
								</td>
              
			   					<td className='border-start border-end border-dark'>
									<div className='px-2 d-flex align-items-baseline'>
										<div className='symbol symbol-50px me-2'>
										<span className='badge badge-secondary fs-8 fw-bold '>T1547.001</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Boot or Logon Autostart Execution: Registry Run Keys / Startup Folder
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
										<span className='badge badge-secondary fs-8 fw-bold '>T1036.005</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Masquerading : Match Legitimate Name or Location
											</div>
											<div className='text-muted fw-semibold text-muted d-block fs-7'>

											</div>
										</div>
									</div>
								</td>
              
			   					<td className='border-start border-end border-dark'>
									<div className='px-2 d-flex align-items-baseline'>
										<div className='symbol symbol-50px me-2'>
										<span className='badge badge-secondary fs-8 fw-bold '>T1055.003</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Process Injection: Thread Execution Hijacking
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
												- Indicator Removal on Host
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
										<span className='badge badge-secondary fs-8 fw-bold '>T1070.001</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Indicator Removal on Host : Clear Windows Event Logs
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
										<span className='badge badge-secondary fs-8 fw-bold '>T1070.003</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Indicator Removal on Host: Clear Command History
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
										<span className='badge badge-secondary fs-8 fw-bold '>T1070.004</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Indicator Removal on Host: File Deletion
											</div>
											<div className='text-muted fw-semibold text-muted d-block fs-7'>

											</div>
										</div>
									</div>
								</td>
              
			   					<td className='border-start border-end border-dark'>
									<div className='px-2 d-flex align-items-baseline'>
										<div className='symbol symbol-50px me-2'>
										<span className='badge badge-secondary fs-8 fw-bold '>T1562.009</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Impair Defenses : Safe Mode Boot
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
										<span className='badge badge-secondary fs-8 fw-bold '>T1218.007</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- System Binary Proxy Execution : Msiexec
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
										<span className='badge badge-secondary fs-8 fw-bold '>T1222.002</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- File and Directory Permissions Modification: Linux and Mac File and Directory Permissions Modification
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
										<span className='badge badge-secondary fs-8 fw-bold '>T1003.001</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- OS Credential Dumping : LSASS Memory
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
										<span className='badge badge-secondary fs-8 fw-bold '>T1046</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Network Service Discovery
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
										<span className='badge badge-secondary fs-8 fw-bold '>T1021.002</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Remote Services: SMB/Windows Admin Shares
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
										<span className='badge badge-secondary fs-8 fw-bold '>T1021.006</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Remote Service : Windows Remote Management
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
												- Software Deployment Tools
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
										<span className='badge badge-secondary fs-8 fw-bold '>T1570</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Lateral Tool Transfer
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
										<span className='badge badge-secondary fs-8 fw-bold '>T1570</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Lateral Tool Transfer
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
										<span className='badge badge-secondary fs-8 fw-bold '>T1090.001</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Proxy : Internal Proxy
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
										<span className='badge badge-secondary fs-8 fw-bold '>T1048.003</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Exfiltration Over Alternative Protocol: Exfiltration Over Unencrypted Non-C2 Protocol
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
										<span className='badge badge-secondary fs-8 fw-bold '>T1485</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Data Destruction 
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
										<span className='badge badge-secondary fs-8 fw-bold '>T1489</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Service Stop
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
										<span className='badge badge-secondary fs-8 fw-bold '>T1490</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- Inhibit System Recovery
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
										<span className='badge badge-secondary fs-8 fw-bold '>T1529</span>
										</div>
										<div className='d-flex justify-content-baseline flex-column'>
											<div className='text-dark fw-semibold mb-1 fs-7'>
												- System Shutdown/Reboot
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
  )
}

export {Gwisin}
