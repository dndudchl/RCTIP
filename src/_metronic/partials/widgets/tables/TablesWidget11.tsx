
import React from 'react'

type Propx = {
  className: string
}

const TablesWidget11: React.FC<Propx> = ({className}) => {  
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header text-center border-0 pt-5'>
        <h2 className='card-title fw-bold fs-2 text-center'>MITRE tatics and techniques -&nbsp;  <mark>  BlackCat</mark>
        </h2>
		
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive border-start border-end border-white'>
          {/* begin::Table */}
          <table className='table table-fixed align-baseline gx-1 gy-4 table-success table-striped border border-dark'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bold text-white bg-dark text-center table-fixed'>
                <th className='border-start border-dark min-w-125px'>Initial Access</th>
                <th className='border min-w-125px'>Execution</th>
                <th className='border min-w-125px'>Defense Evasion</th>
                <th className='border min-w-125px'>CredentialAccess</th>
                <th className='border min-w-125px'>Discovery</th>
                <th className='border min-w-125px'>Lateral Movement</th>
                <th className='border min-w-125px'>Exfiltration</th>
                <th className='border-end border-dark min-w-125px'>Impact</th>                
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              <tr className=''>
                <td className='border-start border-end border-dark'>
                  <div className='p-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                    <span className='badge badge-secondary fs-8 fw-bold '>T1078</span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'>
                        -Vaild Accounts  
                      </div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'>
                        
                      </div>
                    </div>
                  </div>
                </td>
                <td className='border-start border-end border-dark'>
                  <div className='p-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                    <span className='badge badge-secondary fs-8 fw-bold '>T1059</span>
                    
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'>
                        - Command and Scripting Interpreter 
                      </div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'>
                        
                      </div>
                    </div>
                  </div>
                </td>
                <td className='border-start border-end border-dark'>
                  <div className='p-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                    <span className='badge badge-secondary fs-8 fw-bold '>T1562.001</span>
                    
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'>
                        - Impair Defense: Disable or Modify Tools 
                      </div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'>
                        
                      </div>
                    </div>
                  </div>
                </td>
                <td className='border-start border-end border-dark'>
                  <div className='p-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                    <span className='badge badge-secondary fs-8 fw-bold '>T1003.001</span>
                    
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'>
                        - OS Credential Dumping: LSASS Memory 
                      </div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'>
                        
                      </div>
                    </div>
                  </div>
                </td>
                <td className='border-start border-end border-dark'>
                  <div className='p-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                    <span className='badge badge-secondary fs-8 fw-bold '>T1087</span>
                    
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'>
                        - Account Discovery 
                      </div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'>
                        
                      </div>
                    </div>
                  </div>
                </td>
                <td className='border-start border-end border-dark'>
                  <div className='p-2 d-flex align-items-baseline'>
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
                <td className='border-start border-end border-dark'>
                  <div className='p-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                    <span className='badge badge-secondary fs-8 fw-bold '>T1048</span>
                    
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'>
                        - Exfiltration Over Alternative Protocol 
                      </div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'>
                        
                      </div>
                    </div>
                  </div>
                </td>
                <td className='border-start border-end border-dark'>
                  <div className='p-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                    <span className='badge badge-secondary fs-8 fw-bold '>T1489</span>
                    
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'>
                        - Service stop 
                      </div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'>
                        
                      </div>
                    </div>
                  </div>
                </td>               
              </tr>
              <tr className=''>
                <td className='border-start border-end border-dark'>
                  <div className='p-2 d-flex align-items-stretch'>
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
                </td >
                <td >
                </td>
                <td className='border-start border-end border-dark'>
                  <div className='p-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                    <span className='badge badge-secondary fs-8 fw-bold '>T1562.009</span>
                    
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'>
                        - Impair Defenses: Safe Mode Boot 
                      </div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'>
                        
                      </div>
                    </div>
                  </div>
                </td>
                <td >
                </td>
                <td className='border-start border-end border-dark'>
                  <div className='p-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                    <span className='badge badge-secondary fs-8 fw-bold '>T1083</span>
                    
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'>
                        -  File and Directory Discovery 
                      </div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'>
                        
                      </div>
                    </div>
                  </div>
                </td>
                <td >
                </td>
                <td className='border-start border-end border-dark'>
                  <div className='p-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                    <span className='badge badge-secondary fs-8 fw-bold '>T1567</span>
                    
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'>
                        - Exfiltration Over Web Service 
                      </div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'>
                        
                      </div>
                    </div>
                  </div>
                </td>
                <td className='border-start border-end border-dark'>
                  <div className='p-2 d-flex align-items-baseline'>
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
              </tr>
              <tr>
                <td className='border-start border-end border-dark'>
                </td>
                <td className='border-start border-end border-dark'>
                </td>
                <td className='border-start border-end border-dark'>
                  <div className='p-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                    <span className='badge badge-secondary fs-8 fw-bold '>T1070.001</span>
                    
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'>
                        - Indicator Removal on Host: Clear Windows Event Logs 
                      </div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'>
                        
                      </div>
                    </div>
                  </div>
                </td>
                <td className='border-start border-end border-dark'>
                </td>
                <td className='border-start border-end border-dark'>
                  <div className='p-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                    <span className='badge badge-secondary fs-8 fw-bold '>T1057</span>
                    
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'>
                        - Process Discovery
                      </div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'>
                        
                      </div>
                    </div>
                  </div>
                </td>
                <td className='border-start border-end border-dark'>
                </td>
                <td className='border-start border-end border-dark'>
                </td>
                <td className='border-start border-end border-dark'>
                  <div className='p-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                    <span className='badge badge-secondary fs-8 fw-bold '>T1486</span>
                    
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'>
                        - Data Encrypted for Impact
                      </div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'>
                        
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export {TablesWidget11}
