import {lazy, FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout2} from '../../_metronic/layout/MasterLayout2'
import TopBarProgress from 'react-topbar-progress-indicator'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import {WithChildren} from '../../_metronic/helpers'
import TTPsPage from '../modules/RaaS/TTPs/TTPspage'

const PrivateRoutes2 = () => {
  
  const InfoPage = lazy(() => import('../modules/RaaS/info/RaasPage'))

  return (
    <Routes>
      <Route element={<MasterLayout2 />}>
        {/* Redirect to Dashboard after success login/registartion */}
        {/* <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        
        <Route path='dashboard' element={<DashboardWrapper />} />
        <Route path='builder' element={<BuilderPageWrapper />} />
        <Route path='menu-test' element={<MenuTestPage />} /> */}

        {/* Lazy Modules */}
        
        <Route
          path='info/*'
          element={
              <SuspensedView>
                <InfoPage />
              </SuspensedView>
          }
        />
        
        <Route
          path='ttps/*'
          element={
            <SuspensedView>
              <TTPsPage />
            </SuspensedView>
          }
        />

        
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>

      
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({children}) => {
  const baseColor = getCSSVariableValue('--kt-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes2}
