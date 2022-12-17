import React from 'react'

type Propx = {
  className: string
}

const ALPHV: React.FC<Propx> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      <div className='card-header border-0 pt-5'>
        <h2 className='card-title fw-bold fs-2'>MITRE tatics and techniques</h2>
      </div>
      <div className='card-body py-3'>
        <div className='table-responsive border-start border-end border-white'>
          <table className='table table-fixed align-baseline gx-1 gy-4 table-success table-striped border border-dark'>
            <thead>
              <tr className='fw-bold text-white bg-dark text-center table-fixed'>
                <th className='border-start border-dark min-w-125px text-gray-200'>
                  Initial-Access
                </th>
                <th className='border min-w-125px text-gray-200'>Execution</th>
                <th className='border min-w-125px text-gray-200'>Persistence</th>
                <th className='border min-w-125px text-gray-200'>Privilege-Escalation</th>
                <th className='border min-w-125px text-gray-200'>Defense-Evasion</th>
                <th className='border min-w-125px text-gray-200'>Credential-Access</th>
                <th className='border min-w-125px text-gray-200'>Lateral-Movement</th>
                <th className='border min-w-125px text-gray-200'>Collection</th>
                <th className='border min-w-125px text-gray-200'>Command-and-Control</th>
                <th className='border min-w-125px text-gray-200'>Exfiltration</th>
                <th className='border-end border-dark min-w-125px text-gray-200'>Impact</th>
              </tr>
            </thead>
            <tbody>
              <tr className=''>
                <td className='border-start border-end border-dark'>
                  <div className='px-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                      <span className='badge badge-secondary fs-8 fw-bold '>T1078</span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'>- Valid Accounts</div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
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
                        - System Services: Service Execution
                      </div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
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
                        - Command and Scripting Interpreter: Windows Command Shell
                      </div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
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
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
                    </div>
                  </div>
                </td>

                <td className='border-start border-end border-dark'>
                  <div className='px-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                      <span className='badge badge-secondary fs-8 fw-bold '>T1133</span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'>
                        - External Remote Services
                      </div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
                    </div>
                  </div>
                </td>

                <td className='border-start border-end border-dark'>
                  <div className='px-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                      <span className='badge badge-secondary fs-8 fw-bold '>T1134</span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'>
                        - Access Token Manipulation
                      </div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
                    </div>
                  </div>
                </td>

                <td className='border-start border-end border-dark'>
                  <div className='px-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                      <span className='badge badge-secondary fs-8 fw-bold '>T1562.001</span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'>
                        - Impair Defenses: Disable or Modify Tools
                      </div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
                    </div>
                  </div>
                </td>

                <td className='border-start border-end border-dark'>
                  <div className='px-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                      <span className='badge badge-secondary fs-8 fw-bold '>T1218.003</span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'>
                        - Signed Binary Proxy Execution: CMSTP
                      </div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
                    </div>
                  </div>
                </td>

                <td className='border-start border-end border-dark'>
                  <div className='px-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                      <span className='badge badge-secondary fs-8 fw-bold '>T1112</span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'>- SModify Registry</div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
                    </div>
                  </div>
                </td>

                <td className='border-start border-end border-dark'>
                  <div className='px-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                      <span className='badge badge-secondary fs-8 fw-bold '>T1557.001</span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'>
                        - Adversary-in-the-Middle: LLMNR/NBT-NS Poisoning and SMB Relay
                      </div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
                    </div>
                  </div>
                </td>

                <td className='border-start border-end border-dark'>
                  <div className='px-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                      <span className='badge badge-secondary fs-8 fw-bold '>T1003.004</span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'>
                        - OS Credential Dumping: LSA Secrets
                      </div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
                    </div>
                  </div>
                </td>
              </tr>{' '}
              <tr className=''>
                <td className='border-start border-end border-dark'>
                  <div className='px-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                      <span className='badge badge-secondary fs-8 fw-bold '></span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'></div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
                    </div>
                  </div>
                </td>

                <td className='border-start border-end border-dark'>
                  <div className='px-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                      <span className='badge badge-secondary fs-8 fw-bold '>T1082</span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'>
                        - System Information Discovery
                      </div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
                    </div>
                  </div>
                </td>

                <td className='border-start border-end border-dark'>
                  <div className='px-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                      <span className='badge badge-secondary fs-8 fw-bold '></span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'></div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
                    </div>
                  </div>
                </td>

                <td className='border-start border-end border-dark'>
                  <div className='px-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                      <span className='badge badge-secondary fs-8 fw-bold '></span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'></div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
                    </div>
                  </div>
                </td>

                <td className='border-start border-end border-dark'>
                  <div className='px-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                      <span className='badge badge-secondary fs-8 fw-bold '>T1049</span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'>
                        - System Network Connections Discovery
                      </div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
                    </div>
                  </div>
                </td>

                <td className='border-start border-end border-dark'>
                  <div className='px-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                      <span className='badge badge-secondary fs-8 fw-bold '>T1105</span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'>- Ingress Tool Transfer</div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
                    </div>
                  </div>
                </td>

                <td className='border-start border-end border-dark'>
                  <div className='px-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                      <span className='badge badge-secondary fs-8 fw-bold '></span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'></div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
                    </div>
                  </div>
                </td>

                <td className='border-start border-end border-dark'>
                  <div className='px-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                      <span className='badge badge-secondary fs-8 fw-bold '></span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'></div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
                    </div>
                  </div>
                </td>

                <td className='border-start border-end border-dark'>
                  <div className='px-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                      <span className='badge badge-secondary fs-8 fw-bold '></span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'></div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
                    </div>
                  </div>
                </td>

                <td className='border-start border-end border-dark'>
                  <div className='px-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                      <span className='badge badge-secondary fs-8 fw-bold '></span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'></div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
                    </div>
                  </div>
                </td>

                <td className='border-start border-end border-dark'>
                  <div className='px-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                      <span className='badge badge-secondary fs-8 fw-bold '>T1021.001</span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'>
                        - Remote Services: Remote Desktop Protocol
                      </div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
                    </div>
                  </div>
                </td>
              </tr>{' '}
              <tr className=''>
                <td className='border-start border-end border-dark'>
                  <div className='px-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                      <span className='badge badge-secondary fs-8 fw-bold '></span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'></div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
                    </div>
                  </div>
                </td>

                <td className='border-start border-end border-dark'>
                  <div className='px-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                      <span className='badge badge-secondary fs-8 fw-bold '>T1557.001</span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'>
                        - Adversary-in-the-Middle: LLMNR/NBT-NS Poisoning and SMB Relay
                      </div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
                    </div>
                  </div>
                </td>

                <td className='border-start border-end border-dark'>
                  <div className='px-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                      <span className='badge badge-secondary fs-8 fw-bold '></span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'></div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
                    </div>
                  </div>
                </td>

                <td className='border-start border-end border-dark'>
                  <div className='px-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                      <span className='badge badge-secondary fs-8 fw-bold '></span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'></div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
                    </div>
                  </div>
                </td>

                <td className='border-start border-end border-dark'>
                  <div className='px-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                      <span className='badge badge-secondary fs-8 fw-bold '>T1095</span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'>
                        - Non-Application Layer Protocol
                      </div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
                    </div>
                  </div>
                </td>

                <td className='border-start border-end border-dark'>
                  <div className='px-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                      <span className='badge badge-secondary fs-8 fw-bold '>T1567</span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'>
                        - Exfiltration Over Web Service
                      </div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
                    </div>
                  </div>
                </td>

                <td className='border-start border-end border-dark'>
                  <div className='px-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                      <span className='badge badge-secondary fs-8 fw-bold '></span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'></div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
                    </div>
                  </div>
                </td>

                <td className='border-start border-end border-dark'>
                  <div className='px-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                      <span className='badge badge-secondary fs-8 fw-bold '></span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'></div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
                    </div>
                  </div>
                </td>

                <td className='border-start border-end border-dark'>
                  <div className='px-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                      <span className='badge badge-secondary fs-8 fw-bold '></span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'></div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
                    </div>
                  </div>
                </td>

                <td className='border-start border-end border-dark'>
                  <div className='px-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                      <span className='badge badge-secondary fs-8 fw-bold '></span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'></div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
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
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
                    </div>
                  </div>
                </td>
              </tr>{' '}
              <tr className=''>
                <td className='border-start border-end border-dark'>
                  <div className='px-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                      <span className='badge badge-secondary fs-8 fw-bold '></span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'></div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
                    </div>
                  </div>
                </td>

                <td className='border-start border-end border-dark'>
                  <div className='px-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                      <span className='badge badge-secondary fs-8 fw-bold '></span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'></div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
                    </div>
                  </div>
                </td>

                <td className='border-start border-end border-dark'>
                  <div className='px-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                      <span className='badge badge-secondary fs-8 fw-bold '></span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'></div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
                    </div>
                  </div>
                </td>

                <td className='border-start border-end border-dark'>
                  <div className='px-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                      <span className='badge badge-secondary fs-8 fw-bold '></span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'></div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
                    </div>
                  </div>
                </td>

                <td className='border-start border-end border-dark'>
                  <div className='px-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                      <span className='badge badge-secondary fs-8 fw-bold '></span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'></div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
                    </div>
                  </div>
                </td>

                <td className='border-start border-end border-dark'>
                  <div className='px-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                      <span className='badge badge-secondary fs-8 fw-bold '>T1485</span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'>- Data Destruction</div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
                    </div>
                  </div>
                </td>

                <td className='border-start border-end border-dark'>
                  <div className='px-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                      <span className='badge badge-secondary fs-8 fw-bold '></span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'></div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
                    </div>
                  </div>
                </td>

                <td className='border-start border-end border-dark'>
                  <div className='px-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                      <span className='badge badge-secondary fs-8 fw-bold '></span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'></div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
                    </div>
                  </div>
                </td>

                <td className='border-start border-end border-dark'>
                  <div className='px-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                      <span className='badge badge-secondary fs-8 fw-bold '></span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'></div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
                    </div>
                  </div>
                </td>

                <td className='border-start border-end border-dark'>
                  <div className='px-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                      <span className='badge badge-secondary fs-8 fw-bold '></span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'></div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
                    </div>
                  </div>
                </td>

                <td className='border-start border-end border-dark'>
                  <div className='px-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                      <span className='badge badge-secondary fs-8 fw-bold '>T1489</span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'>- Service Stop</div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
                    </div>
                  </div>
                </td>
              </tr>{' '}
              <tr className=''>
                <td className='border-start border-end border-dark'>
                  <div className='px-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                      <span className='badge badge-secondary fs-8 fw-bold '></span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'></div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
                    </div>
                  </div>
                </td>

                <td className='border-start border-end border-dark'>
                  <div className='px-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                      <span className='badge badge-secondary fs-8 fw-bold '></span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'></div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
                    </div>
                  </div>
                </td>

                <td className='border-start border-end border-dark'>
                  <div className='px-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                      <span className='badge badge-secondary fs-8 fw-bold '></span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'></div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
                    </div>
                  </div>
                </td>

                <td className='border-start border-end border-dark'>
                  <div className='px-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                      <span className='badge badge-secondary fs-8 fw-bold '></span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'></div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
                    </div>
                  </div>
                </td>

                <td className='border-start border-end border-dark'>
                  <div className='px-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                      <span className='badge badge-secondary fs-8 fw-bold '></span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'></div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
                    </div>
                  </div>
                </td>

                <td className='border-start border-end border-dark'>
                  <div className='px-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                      <span className='badge badge-secondary fs-8 fw-bold '>T1486</span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'>
                        - Data Encrypted for Impact
                      </div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
                    </div>
                  </div>
                </td>

                <td className='border-start border-end border-dark'>
                  <div className='px-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                      <span className='badge badge-secondary fs-8 fw-bold '></span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'></div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
                    </div>
                  </div>
                </td>

                <td className='border-start border-end border-dark'>
                  <div className='px-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                      <span className='badge badge-secondary fs-8 fw-bold '></span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'></div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
                    </div>
                  </div>
                </td>

                <td className='border-start border-end border-dark'>
                  <div className='px-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                      <span className='badge badge-secondary fs-8 fw-bold '></span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'></div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
                    </div>
                  </div>
                </td>

                <td className='border-start border-end border-dark'>
                  <div className='px-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                      <span className='badge badge-secondary fs-8 fw-bold '></span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'></div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
                    </div>
                  </div>
                </td>

                <td className='border-start border-end border-dark'>
                  <div className='px-2 d-flex align-items-baseline'>
                    <div className='symbol symbol-50px me-2'>
                      <span className='badge badge-secondary fs-8 fw-bold '>T1498</span>
                    </div>
                    <div className='d-flex justify-content-baseline flex-column'>
                      <div className='text-dark fw-semibold mb-1 fs-7'>- Rename_fileFalse</div>
                      <div className='text-muted fw-semibold text-muted d-block fs-7'></div>
                    </div>
                  </div>
                </td>
              </tr>{' '}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export {ALPHV}
