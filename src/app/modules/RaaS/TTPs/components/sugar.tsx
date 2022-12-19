import React from 'react'

type Propx = {
  className: string
}

const Sugar: React.FC<Propx> = ({className}) => { 
  return (
	<>
    <div className={`card mb-6 ${className}`}>
        <h1 className='card-title fw-bold fs-2qx pt-6'>MITRE ATT&CK MATRIX</h1>
        <div className='card-body pt-3 pb-6'>
        <div className='table-responsive border-start border-end border-gray-100'>
          <table className='table align-baseline gx-1 gy-4 table-striped border border-gray-900'>
            <thead>
			   <tr className='fs-6 fw-semebold text-gray-100 bg-dark text-center'>
			    	<th className='min-w-175px border-end border-gray-100'>Execution</th>
			    	<th className='min-w-175px border-end border-gray-100'>Defense-Evasion</th>
			    	<th className='min-w-175px border-end border-gray-100'>Discovery</th>
			    	<th className='min-w-175px border-end border-gray-100'>Impact</th>
               </tr>
            </thead>
            <tbody>
				<tr className=''>				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1059</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>Command and Scripting Interpreter</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Clearly shows the activities that is performing</div>
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
									<div>Edit HKCU\Software\Microsoft\Windows\CurrentVersion\Run registry in every boot</div>
								</div>
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
									<div>The IP of the infected device is collected</div>
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
									<div>Encrypt files on local drive</div>
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
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1027</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>Obfuscated Files or Information</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Obfuscated command</div>
								</div>
							</div>
						</div>
					</td>          
				
					<td className='align-items-baseline border-start border-end border-gray-900'>
						<div className='px-2 d-flex flex-column'>
							<div className='symbol symbol-50px pb-1'>
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1083</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>File and Directory Discovery</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Discovery file and directory</div>
								</div>
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
									<div>Delte shadow copies</div>
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
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1562.001</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>Impair Defenses: Disable or Modify Tools</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Disable AV tools</div>
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
								<span className='badge badge-dark text-gray-100 fs-8 fw-bold me-2'>T1489</span>
								<span className='text-gray-900 fw-semibold mb-1 fs-7'>Service Stop</span>
							</div>
							<div className='bg-gray-500 border-start border-danger1 border-3 ps-4 pt-2 pb-1 pe-1 fst-italic'>
								<div className='text-gray-100 fw-semibold d-block fs-7'>
									<div>Service Stop</div>
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
	<div className='fs-1 fw-bold text-gray-900 pt-1 ps-3'>Execution</div>
	<div className='row g-5 g-xl-8 pt-4'>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1059</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- Command and Scripting Interpreter</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Clearly shows the activities that is performing</div>
					
					
					
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
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1112</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- Modify Registry</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>The SugarLocker is executed every boot by registering the current file path in the registry below. PATH is HKCU\Software\Microsoft\Windows\CurrentVersion\Run</div>
					
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
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1027</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- Obfuscated Files or Information</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Obfuscated command</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>psh</span>
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
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1562.001</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- Impair Defenses: Disable or Modify Tools</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Disable AV tools</div>
					
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
	</div>
	<div className='fs-1 fw-bold text-gray-900 pt-1 ps-3'>Discovery</div>
	<div className='row g-5 g-xl-8 pt-4'>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1082</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- System Information Discovery</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>The IP of the infected device is collected in the form of sequentially accessing the following 5 IP whois site and parsing the IP. https://whatismyipaddress.com, https://www.ip2location.com, https://www.whatismyip.com/ip-address-lookup/, http://checkip.dyndns.org, https://get.geojs.io/v1/ip/geo.js</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>cmd</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-gray-900 fst-italic'>
							<div>&deg;&nbsp;systeminfo</div>
							<div>&deg;&nbsp;reg query HKLM\SYSTEM\CurrentControlSet\Services\Disk\Enum</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<div className='col-xl-6'>
			<div className='card card-xl-stretch mb-xl-8'>
				<div className='card-header align-items-center border-0 mt-4'>
					<div className='symbol symbol-50px pb-1'>
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1083</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- File and Directory Discovery</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Discovery file and directory</div>
					
					<div className='fs-2 fw-bold pb-3'>Command</div>
					<div className='mb-5'>
						<span className='badge badge-light-danger fs-7 fw-bold my-2'>windows</span>
						<span>&nbsp;&nbsp;</span>
						
						<span className='badge badge-light-primary fs-7 fw-bold my-2'>cmd</span>
						<span>&nbsp;&nbsp;</span>
					
						<div className='fs-5 fw-semibold mt-2 mb-2 ms-5 text-gray-900 fst-italic'>
							<div>&deg;&nbsp;dir /s c:\  #output_file</div>
							<div>&deg;&nbsp;dir /s "c:\Documents and Settings"  #output_file</div>
							<div>&deg;&nbsp;dir /s "c:\Program Files\"  #output_file</div>
							<div>&deg;&nbsp;dir "%systemdrive%\Users\*.*"  #output_file</div>
							<div>&deg;&nbsp;dir "%userprofile%\AppData\Roaming\Microsoft\Windows\Recent\*.*"  #output_file</div>
							<div>&deg;&nbsp;dir "%userprofile%\Desktop\*.*"  #output_file</div>
							<div>&deg;&nbsp;tree /F  #output_file</div>
							
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
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>SugarLocker encrypts files on local drives and removable drives by default. Also, by creating a separate thread that encrypts the current user’s desktop path, the priority is increased to perform encryption. When executing, if the parameter -net=0 is not included, encryption is also performed on network shared drives.</div>
					
					
					<div className='fs-2 fw-bold pb-3'>Encryption algorithm</div>
					<div className='ms-5 mb-5'>
						<span className='badge badge-light-info fs-7 fw-bold my-2'>SCOP</span>
						<span>&nbsp;&nbsp;</span>
						<span className='badge badge-light-info fs-7 fw-bold my-2'>RC6</span>
						<span>&nbsp;&nbsp;</span>
						<span className='badge badge-light-info fs-7 fw-bold my-2'>Salsa20</span>
						<span>&nbsp;&nbsp;</span>
						<span className='badge badge-light-info fs-7 fw-bold my-2'>RSA</span>
						<span>&nbsp;&nbsp;</span>
						<span className='badge badge-light-info fs-7 fw-bold my-2'>ElGamal</span>
						<span>&nbsp;&nbsp;</span>
						
					</div>
					<div className='fs-2 fw-bold pb-3'>Added Extension</div>
					<div className='fs-4 fw-semibold mt-2 mb-2 ms-5 text-gray-900 fst-italic'>.encoding01</div>
						
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
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Delte shadow copies</div>
					
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
						<span className='badge badge-dark text-gray-100 fs-5 fw-bold me-1'>T1489</span>
						<span className='text-gray-900 fw-bold mb-1 fs-3'>- Service Stop</span>
					</div>
				</div>
				<div className='card-body pt-3'>
					<div className='text-gray-700 fs-4 mb-7 fst-italic'>Service Stop</div>
					
					
					
				</div>
			</div>
		</div>
	</div>
	</>
  )
}

export {Sugar}
