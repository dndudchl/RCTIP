// import {useEffect} from 'react'
import {useIntl} from 'react-intl'
// import { Header2 } from '../../../_metronic/layout/components/header/Header2'
import {PageTitle} from '../../../_metronic/layout/core'
import { ChartsWidget1, MixedWidget8 } from '../../../_metronic/partials/widgets'
import AmChartsComponent from './AmChartsComponent'
// import {TablesWidget11} from '../../../_metronic/partials/widgets'

const DashboardPage = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]} description='Hatchwatna Team'>
        Ransomware Cyber Threat Intelligence
      </PageTitle>
      
      <div className='row g-5 g-xl-8'>
        <div className='col-xl-6'>
        <ChartsWidget1 className='card-xl-stretch mb-xl-8'/>
        </div>
        
        <div className='col-xl-6'>
          <div className='card card-xl-stretch mb-xl-8'>
          <div className='card-header border-0 pt-6'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-2 mb-1'>Targeted Countries</span>
          <span className='text-muted fw-semibold fs-6'>Attacks statistics for all countries</span>
        </h3>
      </div>
            <AmChartsComponent/>
          </div>
        </div>
        
      </div>

      <div className='row g-8 g-xl-8'>
      <div className='col-xl-6'></div>
        <div className='col-xl-6'>
          <MixedWidget8
            className='card-xl-stretch mb-5 mb-xl-8'
            chartColor='danger'
            chartHeight='150px'
          />
        </div>
      </div>
      {/* end::Row */}
    </>
  )
}

const DashboardWrapper = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
