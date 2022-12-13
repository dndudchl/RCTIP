// import {useEffect} from 'react'
// import {useIntl} from 'react-intl'
// import path from 'path'

import {Navigate, Route, Routes, Outlet} from 'react-router-dom'
// import {PageLink} from '../../../../_metronic/layout/core'
import {PageTitle} from '../../../../_metronic/layout/core'

import {Alphv} from './components/alphv'
import {Avoslocker} from './components/avoslocker'
import {Babuk} from './components/babuk'
import {Blackbasta} from './components/blackbasta'
import {Blackbyte} from './components/blackbyte'
import {Blackcat} from './components/blackcat'
import {Bluesky} from './components/bluesky'
import {Clop} from './components/clop'
import {Conti} from './components/conti'
import {Cuba} from './components/cuba'
import {Darkangels} from './components/darkangels'
import {Darkside} from './components/darkside'
import {Hellokitty} from './components/hellokitty'
import {Hive} from './components/hive'
import {Lockbit} from './components/lockbit'
import {Lv} from './components/lv'
import {Maze} from './components/maze'
import {Medusalocker} from './components/medusalocker'
import {Netwalker} from './components/netwalker'
import {Quantum} from './components/quantum'
import {Ragnarlocker} from './components/ragnarlocker'
import {Ransomexx} from './components/ransomexx'
import {Redalert} from './components/redalert'
import {Revil} from './components/revil'
import {Snatch} from './components/snatch'
import {Vicesociety} from './components/vicesociety'
import {Yanluowang} from './components/yanluowang'
import {Zeppelin} from './components/zeppelin'


// const chatBreadCrumbs: Array<PageLink> = [
//   {
//     title: 'Darkweb INFO',
//     path: '/apps/RaaS/IoC/Avoslocker',
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

const TTPsPage = () => {
  return (
    
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='alphv'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='IoC'>ALPHV</PageTitle>
              <Alphv className=''/>
            </>
          }
        /> 
        <Route
          path='avoslocker'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='IoC'>Avoslocker</PageTitle>
              <Avoslocker className=''/>
            </>
          }
        />
        <Route
          path='blackbasta'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='IoC'>Blackbasta</PageTitle>
              <Blackbasta className=''/>
            </>
          }
        />
        <Route
          path='babuk'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='IoC'>Babuk</PageTitle>
              <Babuk className=''/>
            </>
          }
        />
        <Route
          path='blackbyte'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='IoC'>Blackbyte</PageTitle>
              <Blackbyte className=''/>
            </>
          }
        />
        <Route
          path='blackcat'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='IoC'>Blackcat</PageTitle>
              <Blackcat className=''/>
            </>
          }
        />
        <Route
          path='bluesky'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='IoC'>Bluesky</PageTitle>
              <Bluesky className=''/>
            </>
          }
        />
        <Route
          path='clop'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='IoC'>Clop</PageTitle>
              <Clop className=''/>
            </>
          }
        />
        <Route
          path='conti'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='IoC'>Conti</PageTitle>
              <Conti className=''/>
            </>
          }
        />
        <Route
          path='cuba'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='IoC'>Cuba</PageTitle>
              <Cuba className=''/>
            </>
          }
        />
        <Route
          path='darkangels'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='IoC'>Darkangels</PageTitle>
              <Darkangels className=''/>
            </>
          }
        />
        <Route
          path='darkside'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='IoC'>Darkside</PageTitle>
              <Darkside className=''/>
            </>
          }
        />
        <Route
          path='hellokitty'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='IoC'>Hellokitty</PageTitle>
              <Hellokitty className=''/>
            </>
          }
        />
        <Route
          path='hive'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='IoC'>Hive</PageTitle>
              <Hive className=''/>
            </>
          }
        />
        <Route
          path='lockbit'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='IoC'>Lockbit</PageTitle>
              <Lockbit className=''/>
            </>
          }
        />
        <Route
          path='lv'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='IoC'>LV</PageTitle>
              <Lv className=''/>
            </>
          }
        />
        <Route
          path='maze'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='IoC'>Maze</PageTitle>
              <Maze className=''/>
            </>
          }
        />
        <Route
          path='medusalocker'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='IoC'>Medusalocker</PageTitle>
              <Medusalocker className=''/>
            </>
          }
        />
        <Route
          path='netwalker'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='IoC'>Netwalker</PageTitle>
              <Netwalker className=''/>
            </>
          }
        />
        <Route
          path='quantum'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='IoC'>Quantum</PageTitle>
              <Quantum className=''/>
            </>
          }
        />
        <Route
          path='ragnarlocker'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='IoC'>Ragnarlocker</PageTitle>
              <Ragnarlocker className=''/>
            </>
          }
        />
        <Route
          path='ransomexx'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='IoC'>Ransomexx</PageTitle>
              <Ransomexx className=''/>
            </>
          }
        />
        <Route
          path='redalert'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='IoC'>Redalert</PageTitle>
              <Redalert className=''/>
            </>
          }
        />
        <Route
          path='revil'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='IoC'>Revil</PageTitle>
              <Revil className=''/>
            </>
          }
        />
        <Route
          path='snatch'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='IoC'>Snatch</PageTitle>
              <Snatch className=''/>
            </>
          }
        />
        <Route
          path='vicesociety'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='IoC'>Vicesociety</PageTitle>
              <Vicesociety className=''/>
            </>
          }
        />
        <Route
          path='yanluowang'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='IoC'>Yanluowang</PageTitle>
              <Yanluowang className=''/>
            </>
          }
        />
        

        <Route index element={<Navigate to='/apps/RaaS/IoC/Avoslocker' />} />
      </Route>
    </Routes>
  )
}

export default TTPsPage
