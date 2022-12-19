// import {useEffect} from 'react'
import {useIntl} from 'react-intl'
// import { Header2 } from '../../../_metronic/layout/components/header/Header2'
import {PageTitle} from '../../../_metronic/layout/core'
import { ChartsWidget1, FeedsWidget2, MixedWidget2, MixedWidget9, MixedWidget4 } from '../../../_metronic/partials/widgets'
import { Twit2 } from '../../../_metronic/partials/widgets/feeds/twit2'
import { Twit3 } from '../../../_metronic/partials/widgets/feeds/twit3'
import { Twit4 } from '../../../_metronic/partials/widgets/feeds/twit4'
import { Test } from '../../../_metronic/partials/widgets/feeds/test'
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
      <div className='col-xl-6'>
          <MixedWidget4
            className='card-xl-stretch mb-xl-6'
            image='/media/svg/brand-logos/plurk.svg'
            color='info'
            title='Monthly Subscription'
            date='Due: 27 Apr 2020'
            progress='75%'
          />
        </div>

      <div className='col-xl-6'>
        <MixedWidget9 
        className='card-xl-stretch mb-5 mb-xl-8'
        chartColor='danger'
        chartHeight='200px'/>

      </div>
        

      </div>
      <div className='row g-8 g-xl-8'>
      
        {/* <div className='col-xl-6'>
          <MixedWidget2
            className='card-xl-stretch mb-xl-8'
            chartColor='dark'
            chartHeight='80px'
            strokeColor='#4e12c4'
          />
        </div> */}
        <div className='col-xl-6'>
        <Test className=''/>
        </div>
      <div className='col-xl-6'>
        <FeedsWidget2 className=''/>
        <Twit2 className=''/>
        <Twit3 className=''/>
        <Twit4 className=''/>
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
