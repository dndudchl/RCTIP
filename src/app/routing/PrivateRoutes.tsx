// import {lazy, FC, Suspense} from 'react'
// import {FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
// import {MasterLayout2} from '../../_metronic/layout/MasterLayout2'
// import TopBarProgress from 'react-topbar-progress-indicator'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
// import {MenuTestPage} from '../pages/MenuTestPage'
// import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
// import {WithChildren} from '../../_metronic/helpers'
// import BuilderPageWrapper from '../pages/layout-builder/BuilderPageWrapper'
// import TTPsPage from '../modules/RaaS/TTPs/TTPspage'


const PrivateRoutes = () => {
  // const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  // const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  // const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  // const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  // const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))
  // const UsersPage = lazy(() => import('../modules/apps/user-management/UsersPage'))
  // const InfoPage = lazy(() => import('../modules/RaaS/info/RaasPage'))

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />
        {/* <Route path='builder' element={<BuilderPageWrapper />} />
        <Route path='menu-test' element={<MenuTestPage />} /> */}

        {/* Lazy Modules */}
        

        {/* <Route
          path='crafted/pages/profile/*'
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/pages/wizards/*'
          element={
            <SuspensedView>
              <WizardsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/widgets/*'
          element={
            <SuspensedView>
              <WidgetsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/account/*'
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/chat/*'
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        /> */}
        {/* <Route
          path='raas/info/*'
          element={
              <SuspensedView>
                <InfoPage />
              </SuspensedView>
          }
        />
        
        <Route
          path='raas/ttps/*'
          element={
            <SuspensedView>
              <TTPsPage />
            </SuspensedView>
          }
        /> */}

        {/* <Route
          path='apps/user-management/*'
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        /> */}
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>

      
    </Routes>
  )
}

// const SuspensedView: FC<WithChildren> = ({children}) => {
//   const baseColor = getCSSVariableValue('--kt-primary')
//   TopBarProgress.config({
//     barColors: {
//       '0': baseColor,
//     },
//     barThickness: 1,
//     shadowBlur: 5,
//   })
//   return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
// }

export {PrivateRoutes}
