import {Navigate, Route, Routes, Outlet} from 'react-router-dom'
import {PageTitle} from '../../../../_metronic/layout/core'
// import {PageLink} from '../../../../_metronic/layout/core'

import {Avoslocker} from './components/Avoslocker'
import {Babuk} from './components/Babuk'
import {Blackbasta} from './components/BlackBasta'
import {BlackByte} from './components/BlackByte'
import {Clop} from './components/Clop'
import {Conti} from './components/Conti'
import {Cuba} from './components/Cuba'
import {Everest} from './components/Everest'
import {Lockbit} from './components/Lockbit'
import {Omega} from './components/Omega'
import {Quantum} from './components/Quantum'
import {RansomExx} from './components/RansomExx'
import {RansomHouse} from './components/RansomHouse'
import {Redalert} from './components/Redalert'
import {Snatch} from './components/Snatch'
import {Suncrypt} from './components/Suncrypt'
import {Vice_Society} from './components/Vice_Society'
import {VSOP} from './components/VSOP'

// const chatBreadCrumbs: Array<PageLink> = [
//   {
//     title: 'Darkweb INFO',
//     path: '/apps/RaaS/info/Avoslocker',
//     isSeparator: false,
//     isActive: false,
//   },
//   {
//     title: '',
//     path: '',
//     isSeparator: true,
//     isActive: false,
//   },
// ]

const InfoPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='Avoslocker'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>RaaS Groups</PageTitle>
              <Avoslocker />
            </>
          }
        />
        <Route
          path='Babuk'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>RaaS Groups</PageTitle>
              <Babuk />
            </>
          }
        />
        <Route
          path='Blackbasta'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>RaaS Groups</PageTitle>
              <Blackbasta />
            </>
          }
        />
        <Route
          path='BlackByte'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>RaaS Groups</PageTitle>
              <BlackByte />
            </>
          }
        />
        <Route
          path='Clop'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>RaaS Groups</PageTitle>
              <Clop />
            </>
          }
        />
        <Route
          path='Conti'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>RaaS Groups</PageTitle>
              <Conti />
            </>
          }
        />
        <Route
          path='Cuba'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>RaaS Groups</PageTitle>
              <Cuba />
            </>
          }
        />
        <Route
          path='Everest'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>RaaS Groups</PageTitle>
              <Everest />
            </>
          }
        />
        <Route
          path='Lockbit'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>RaaS Groups</PageTitle>
              <Lockbit />
            </>
          }
        />
        <Route
          path='Omega'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>RaaS Groups</PageTitle>
              <Omega />
            </>
          }
        />
        <Route
          path='Quantum'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>RaaS Groups</PageTitle>
              <Quantum />
            </>
          }
        />
        <Route
          path='RansomExx'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>RaaS Groups</PageTitle>
              <RansomExx />
            </>
          }
        />
        <Route
          path='RansomHouse'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>RaaS Groups</PageTitle>
              <RansomHouse />
            </>
          }
        />
        <Route
          path='Redalert'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>RaaS Groups</PageTitle>
              <Redalert />
            </>
          }
        />
        <Route
          path='Snatch'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>RaaS Groups</PageTitle>
              <Snatch />
            </>
          }
        />
        <Route
          path='Suncrypt'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>RaaS Groups</PageTitle>
              <Suncrypt />
            </>
          }
        />
        <Route
          path='Vice_Society'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>RaaS Groups</PageTitle>
              <Vice_Society />
            </>
          }
        />
        <Route
          path='VSOP'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>RaaS Groups</PageTitle>
              <VSOP />
            </>
          }
        />
        

        <Route index element={<Navigate to='/apps/RaaS/info/Avoslocker' />} />
      </Route>
    </Routes>
  )
}

export default InfoPage
