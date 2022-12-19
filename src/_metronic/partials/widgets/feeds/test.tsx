/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'

type Props = {
  className: string
}

const Test: React.FC<Props> = ({className}) => {
    return (
        <div className={`card ${className}`}>
          <div className={`card-header border-0 py-5 bg-dark`}>
            <h3 className='card-title fw-bold text-gray-200 fs-2'>Popular Techniques by Tactic</h3>
          </div>
          <div className='card-body p-0'>
            <div className='card-p  position-relative'>

              <div className='row g-0'>
                <div className='col bg-light-primary px-6 py-8 rounded-2 me-7 mb-7 text-center border border-primary'>
                  <div className='text-primary fw-semibold fs-6'>Initial Access</div>
                  <div className='text-primary fw-bold fs-5 mt-4'>T1190</div>
                  <div className='text-primary fw-bold fs-5'>Exploit public-facing application</div>
                </div>
                <div className='col bg-light-primary px-6 py-8 rounded-2 me-7 mb-7 text-center border border-primary'>
                  <div className='text-primary fw-semibold fs-6'>Execution</div>
                  <div className='text-primary fw-bold fs-5 mt-4'>T1059</div>
                  <div className='text-primary fw-bold fs-5'>Command and scripting </div>
                </div>
                <div className='col bg-light-primary px-6 py-8 rounded-2 me-7 mb-7 text-center border border-primary'>
                  <div className='text-primary fw-semibold fs-6'>Persistence</div>
                  <div className='text-primary fw-bold fs-5 mt-4'>T1547</div>
                  <div className='text-primary fw-bold fs-5'>Boot or logon autostart execution</div>
                </div>
              </div>
              <div className='row g-0'>
                <div className='col bg-light-primary px-6 py-8 rounded-2 me-7 mb-7 text-center border border-primary'>
                  <div className='text-primary fw-semibold fs-6'>Priviledge-Escalation</div>
                  <div className='text-primary fw-bold fs-5 mt-4'>T1068</div>
                  <div className='text-primary fw-bold fs-5'>Exploitation for privilege escalation</div>
                </div>
                <div className='col bg-light-primary px-6 py-8 rounded-2 me-7 mb-7 text-center border border-primary'>
                  <div className='text-primary fw-semibold fs-6'>Defense-Evasion</div>
                  <div className='text-primary fw-bold fs-5 mt-4'>T1562</div>
                  <div className='text-primary fw-bold fs-5'>Disable or Modify Tools</div>
                </div>
                <div className='col bg-light-primary px-6 py-8 rounded-2 me-7 mb-7 text-center border border-primary'>
                  <div className='text-primary fw-semibold fs-6'>Credential-Access</div>
                  <div className='text-primary fw-bold fs-5 mt-4'>T1003</div>
                  <div className='text-primary fw-bold fs-5'>OS Credential Dumping</div>
                </div>
              </div>
              <div className='row g-0'>
                <div className='col bg-light-primary px-6 py-8 rounded-2 me-7 mb-7 text-center border border-primary'>
                  <div className='text-primary fw-semibold fs-6'>Discovery</div>
                  <div className='text-primary fw-bold fs-5 mt-4'>T1083</div>
                  <div className='text-primary fw-bold fs-5'>File and Directory Discovery</div>
                </div>
                <div className='col bg-light-primary px-6 py-8 rounded-2 me-7 mb-7 text-center border border-primary'>
                  <div className='text-primary fw-semibold fs-6'>Lateral-Movement </div>
                  <div className='text-primary fw-bold fs-5 mt-4'>T1021</div>
                  <div className='text-primary fw-bold fs-5'>Remote Services</div>
                </div>
                <div className='col bg-light-primary px-6 py-8 rounded-2 me-7 mb-7 text-center border border-primary'>
                  <div className='text-primary fw-semibold fs-6'>Collection</div>
                  <div className='text-primary fw-bold fs-5 mt-4'>T1560</div>
                  <div className='text-primary fw-bold fs-5'>Archive Collected Data</div>
                </div>
              </div>
              <div className='row g-0'>
                <div className='col bg-light-primary px-6 py-8 rounded-2 me-7 mb-7 text-center border border-primary'>
                  <div className='text-primary fw-semibold fs-6'>C & C</div>
                  <div className='text-primary fw-bold fs-5 mt-4'>T1071</div>
                  <div className='text-primary fw-bold fs-5'> Application Layer Protocol</div>
                </div>
                <div className='col bg-light-primary px-6 py-8 rounded-2 me-7 mb-7 text-center border border-primary'>
                  <div className='text-primary fw-semibold fs-6'>Exfiltration</div>
                  <div className='text-primary fw-bold fs-5 mt-4'>T1567</div>
                  <div className='text-primary fw-bold fs-5'>Exfiltration Over Web Service</div>
                </div>
                <div className='col bg-light-primary px-6 py-8 rounded-2 me-7 mb-7 text-center border border-primary'>
                  <div className='text-primary fw-semibold fs-6'>Impact</div>
                  <div className='text-primary fw-bold fs-5 mt-4'>T1490</div>
                  <div className='text-primary fw-bold fs-5'>Inhibit System Recovery</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )
}

export {Test}
