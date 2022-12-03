// import {useEffect} from 'react'
import {useIntl} from 'react-intl'
// import { Header2 } from '../../../_metronic/layout/components/header/Header2'
import {PageTitle} from '../../../_metronic/layout/core'
// import {TablesWidget11} from '../../../_metronic/partials/widgets'

const DashboardPage = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]} description='Hatchwatna Team'> 
        Ransomware Cyber Threat Intelligence
      </PageTitle>

      {/* begin::Row */}
      <div className='g-5 gx-xxl-8'>
        <h1> Main Page</h1>
        {/* <TablesWidget11 className='' /> */}
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
