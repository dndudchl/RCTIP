import {Navigate, Route, Routes, Outlet} from 'react-router-dom'
import {PageTitle} from '../../../../_metronic/layout/core'
// import {PageLink} from '../../../../_metronic/layout/core'

import {Alphv} from './components/Alphv'
import {Avoslocker} from './components/Avoslocker'
import {Babuk} from './components/Babuk'
import {Blackbasta} from './components/Blackbasta'
import {Blackbyte} from './components/Blackbyte'
import {Blackcat} from './components/Blackcat'
import {Bluesky} from './components/Bluesky'
import {Clop} from './components/Clop'
import {Conti} from './components/Conti'
import {Cuba} from './components/Cuba'
import {Darkangels} from './components/Darkangels'
import {Darkside} from './components/Darkside'
import {Hellokitty} from './components/Hellokitty'
import {Hive} from './components/Hive'
// import {Everest} from './components/Everest'
import {Lockbit} from './components/Lockbit'
// import {Omega} from './components/Omega'
import {Lv} from './components/Lv'
import {Maze} from './components/Maze'
import {Medusalocker} from './components/Medusalocker'
import {Netwalker} from './components/Netwalker'
import {Quantum} from './components/Quantum'
import {Ragnarlocker} from './components/Ragnarlocker'
import {Ransomexx} from './components/Ransomexx'
// import {RansomHouse} from './components/RansomHouse'
import {Redalert} from './components/Redalert'
import {Revil} from './components/Revil'
import {Snatch} from './components/Snatch'
import {Sugar} from './components/Sugar'
import {Suncrypt} from './components/Suncrypt'
import {Vicesociety} from './components/Vicesociety'
import {Yanluowang} from './components/Yanluowang'
import {Zeppelin} from './components/Zeppelin'

// import {VSOP} from './components/VSOP'

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
          path='Alphv'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>
                Alphv
              </PageTitle>
              <Alphv />
            </>
          }
        />
        <Route
          path='Avoslocker'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>
                Avoslocker
              </PageTitle>
              <Avoslocker />
            </>
          }
        />
        <Route
          path='Babuk'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>
                Babuk
              </PageTitle>
              <Babuk />
            </>
          }
        />
        <Route
          path='Blackbasta'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>
                Blackbasta
              </PageTitle>
              <Blackbasta />
            </>
          }
        />
        <Route
          path='Blackbyte'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>
                Blackbyte
              </PageTitle>
              <Blackbyte />
            </>
          }
        />
        <Route
          path='Blackcat'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>
                Blackcat
              </PageTitle>
              <Blackcat />
            </>
          }
        />
        <Route
          path='Bluesky'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>
                Bluesky
              </PageTitle>
              <Bluesky />
            </>
          }
        />
        <Route
          path='Clop'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>
                Clop
              </PageTitle>
              <Clop />
            </>
          }
        />
        <Route
          path='Conti'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>
                Conti
              </PageTitle>
              <Conti />
            </>
          }
        />
        <Route
          path='Cuba'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>
                Cuba
              </PageTitle>
              <Cuba />
            </>
          }
        />
        <Route
          path='Darkangels'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>
                Darkangels
              </PageTitle>
              <Darkangels />
            </>
          }
        />
        <Route
          path='Darkside'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>
                Darkside
              </PageTitle>
              <Darkside />
            </>
          }
        />
        <Route
          path='Hellokitty'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>
                Hellokitty
              </PageTitle>
              <Hellokitty />
            </>
          }
        />
        <Route
          path='Hive'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>
                Hive
              </PageTitle>
              <Hive />
            </>
          }
        />
        {/* <Route
          path='Everest'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>RaaS Groups</PageTitle>
              <Everest />
            </>
          }
        /> */}
        <Route
          path='Lockbit'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>
                Lockbit
              </PageTitle>
              <Lockbit />
            </>
          }
        />
        <Route
          path='Lv'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>
                Lv
              </PageTitle>
              <Lv />
            </>
          }
        />
        <Route
          path='Maze'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>
                Maze
              </PageTitle>
              <Maze />
            </>
          }
        />
        <Route
          path='Medusalocker'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>
                Medusalocker
              </PageTitle>
              <Medusalocker />
            </>
          }
        />
        <Route
          path='Netwalker'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>
                Netwalker
              </PageTitle>
              <Netwalker />
            </>
          }
        />
        {/* <Route
          path='Omega'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>RaaS Groups</PageTitle>
              <Omega />
            </>
          }
        /> */}
        <Route
          path='Quantum'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>
                Quantum
              </PageTitle>
              <Quantum />
            </>
          }
        />
        <Route
          path='Ragnarlocker'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>
                Ragnarlocker
              </PageTitle>
              <Ragnarlocker />
            </>
          }
        />
        <Route
          path='Ransomexx'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>
                Ransomexx
              </PageTitle>
              <Ransomexx />
            </>
          }
        />
        {/* <Route
          path='RansomHouse'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>RaaS Groups</PageTitle>
              <RansomHouse />
            </>
          }
        /> */}
        <Route
          path='Redalert'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>
                Redalert
              </PageTitle>
              <Redalert />
            </>
          }
        />
        <Route
          path='Revil'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>
                REvil
              </PageTitle>
              <Revil />
            </>
          }
        />
        <Route
          path='Snatch'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>
                Snatch
              </PageTitle>
              <Snatch />
            </>
          }
        />
        <Route
          path='Sugar'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>
                Sugar
              </PageTitle>
              <Sugar />
            </>
          }
        />
        <Route
          path='Suncrypt'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>
                Suncrypt
              </PageTitle>
              <Suncrypt />
            </>
          }
        />
        <Route
          path='Vicesociety'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>
                Vicesociety
              </PageTitle>
              <Vicesociety />
            </>
          }
        />
        {/* <Route
          path='VSOP'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>RaaS Groups</PageTitle>
              <VSOP />
            </>
          }
        /> */}
        <Route
          path='Yanluowang'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>
                Yanluowang
              </PageTitle>
              <Yanluowang />
            </>
          }
        />
        <Route
          path='Zeppelin'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='Darkweb Info'>
                Zeppelin
              </PageTitle>
              <Zeppelin />
            </>
          }
        />

        <Route index element={<Navigate to='/apps/RaaS/info/Avoslocker' />} />
      </Route>
    </Routes>
  )
}

export default InfoPage
