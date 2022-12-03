/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
// import {toAbsoluteUrl} from '../../../helpers'

type Props = {
  color?: string
  online?: boolean
  name: string
  Region: string
  Sector: string
  date : string
}

const Card1: FC<Props> = ({
  color = '',
  online = false,
  name,
  Region,
  Sector,
  date
}) => {
  return (
    <div className='card'>
      <div className='card-body d-flex flex-column p-5'>
        <div className='mb-5'>
          {/* <div className='symbol symbol-75px symbol-circle'>
            {color ? (
              <span className={`symbol-label bg-light-${color} text-${color} fs-5 fw-bolder`}>
                {name.charAt(0)}
              </span>
            ) : (
              <img alt='Pic' src={toAbsoluteUrl(avatar)} />
            )}
            {online && (
              <div className='symbol-badge bg-success start-100 top-100 border-4 h-15px w-15px ms-n3 mt-n3'></div>
            )}
          </div> */}
        </div>

        <div className='fs-2 text-center text-gray-800 fw-bolder mb-5'>
          {name}
        </div>
        
        <div className='flex-wrap mb-5'>
          
            <div className='fs-6 fw-bolder text-gray-700'>Resion : {Region}</div>
            <div className='fs-6 fw-bolder text-gray-700'>Sector : {Sector}</div>
            <div className='fs-6 fw-bolder text-gray-700'>date : {date}</div>
          </div>

        
        {/* <div className='d-flex flex-center flex-wrap mb-5'>
          <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3'>
            <div className='fs-6 fw-bolder text-gray-700'>{Resion}</div>
            <div className='fw-bold text-gray-400'>Resion</div>
          </div>

          <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 mx-3 px-4 mb-3'>
            <div className='fs-6 fw-bolder text-gray-700'>{Sector}</div>
            <div className='fw-bold text-gray-400'>Sector</div>
          </div>
        </div> */}

        {/* <div className='fw-bold text-gray-400 mb-6'>{job}</div> */}
        {/* <button className='btn btn-sm btn-light-primary fw-bolder' id='kt_drawer_chat_toggle'>
          Send Message
        </button> */}
      </div>
    </div>
  )
}

export {Card1}
