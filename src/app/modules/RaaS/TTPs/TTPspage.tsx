// import {useEffect} from 'react'
// import {useIntl} from 'react-intl'
// import path from 'path'

import {Navigate, Route, Routes, Outlet} from 'react-router-dom'
// import {PageLink} from '../../../../_metronic/layout/core'
import {PageTitle} from '../../../../_metronic/layout/core'

import {ALPHV} from './components/ALPHV'
import {Avoslocker} from './components/Avoslocker'
import { Babuk } from './components/Babuk'
import {BlackBasta} from './components/BlackBasta'
import {BlackByte} from './components/BlackByte'
import {Blackcat} from './components/BlackCat'
// import {Blackmatter} from './components/Blackmatter'
import {Bluesky} from './components/bluesky'
import {Clop} from './components/clop'
import {Conti} from './components/conti'
import {Cuba} from './components/cuba'
// import {Gwisin} from './components/Gwisin'
import { DarkAngels } from './components/darkangels'
import { DarkSide } from './components/darkside'
import { HelloKitty } from './components/hellokitty'
import {HIVE} from './components/HIVE'
import {Lockbit} from './components/lockbit 3.0'
import {LV} from './components/lv'
import { MAZE } from './components/maze'
import { MedusaLocker } from './components/medusalocker'
import { NetWalker } from './components/netwalker'
import {Quantum} from './components/quantum locker'
import { Ragnar_Locker } from './components/ragnar_locker'
import {Ransomexx} from './components/ransomexx'
import { Redalert } from './components/redalert'
import { REvil } from './components/revil'
import { Snatch } from './components/snatch'
import { Sugar } from './components/sugar'
import { SunCrypt } from './components/suncrypt'
import {Vicesociety} from './components/vicesociety'
import {Yanluowang} from './components/yanluowang'
import { Zeppelin } from './components/zeppelin'



// const chatBreadCrumbs: Array<PageLink> = [
//   {
//     title: 'Darkweb INFO',
//     path: '/apps/RaaS/TTPs/Avoslocker',
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
          path='ALPHV'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>ALPHV</PageTitle>
              <ALPHV className=''/>
            </>
          }
        /> 
        <Route
          path='Avoslocker'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>Avoslocker</PageTitle>
              <Avoslocker className=''/>
            </>
          }
        />
        <Route
          path='Babuk'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>Babuk</PageTitle>
              <Babuk className=''/>
            </>
          }
        /> 
        <Route
          path='BlackBasta'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>BlackBasta</PageTitle>
              <BlackBasta className=''/>
            </>
          }
        />
        <Route
          path='BlackByte'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>BlackByte</PageTitle>
              <BlackByte className=''/>
            </>
          }
        />
        <Route
          path='Blackcat'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>Blackcat</PageTitle>
              <Blackcat className=''/>
            </>
          }
        />
        {/* <Route
          path='Blackmatter'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>Blackmatter</PageTitle>
              <Blackmatter className=''/>
            </>
          }
        /> */}
        <Route
          path='Bluesky'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>Bluesky</PageTitle>
              <Bluesky className=''/>
            </>
          }
        />
        <Route
          path='Clop'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>Clop</PageTitle>
              <Clop className=''/>
            </>
          }
        />
        <Route
          path='Conti'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>Conti</PageTitle>
              <Conti className=''/>
            </>
          }
        />
        <Route
          path='Cuba'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>Cuba</PageTitle>
              <Cuba className=''/>
            </>
          }
        />
        <Route
          path='Darkangels'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>Darkangels</PageTitle>
              <DarkAngels className=''/>
            </>
          }
        />
        <Route
          path='Darkside'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>Darkside</PageTitle>
              <DarkSide className=''/>
            </>
          }
        />
        {/* <Route
          path='Gwisin'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>Gwisin</PageTitle>
              <Gwisin className=''/>
            </>
          }
        /> */}
        <Route
          path='Hellokitty'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>Hellokitty</PageTitle>
              <HelloKitty className=''/>
            </>
          }
        />
        <Route
          path='Hive'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>Hive</PageTitle>
              <HIVE className=''/>
            </>
          }
        />
        <Route
          path='Lockbit'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>Lockbit3.0</PageTitle>
              <Lockbit className=''/>
            </>
          }
        />
        <Route
          path='LV'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>LV</PageTitle>
              <LV className=''/>
            </>
          }
        />
        <Route
          path='Maze'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>Maze</PageTitle>
              <MAZE className=''/>
            </>
          }
        />
        <Route
          path='Medusalocker'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>Medusalocker</PageTitle>
              <MedusaLocker className=''/>
            </>
          }
        />
        <Route
          path='Netwalker'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>Netwalker</PageTitle>
              <NetWalker className=''/>
            </>
          }
        />
        <Route
          path='Quantum'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>Quantum</PageTitle>
              <Quantum className=''/>
            </>
          }
        />
        <Route
          path='Ragnarlocker'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>Ragnarlocker</PageTitle>
              <Ragnar_Locker className=''/>
            </>
          }
        />
        <Route
          path='Ransomexx'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>Ransomexx</PageTitle>
              <Ransomexx className=''/>
            </>
          }
        />
        <Route
          path='Redalert'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>Redalert</PageTitle>
              <Redalert className=''/>
            </>
          }
        />
        <Route
          path='REvil'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>REvil</PageTitle>
              <REvil className=''/>
            </>
          }
        />
        <Route
          path='Snatch'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>Snatch</PageTitle>
              <Snatch className=''/>
            </>
          }
        />
        <Route
          path='Sugar'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>Sugar</PageTitle>
              <Sugar className=''/>
            </>
          }
        />
        <Route
          path='Suncrypt'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>Suncrypt</PageTitle>
              <SunCrypt className=''/>
            </>
          }
        />
        <Route
          path='Vice_Society'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>Vicesociety</PageTitle>
              <Vicesociety className=''/>
            </>
          }
        />
        <Route
          path='Yanluowang'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>Yanluowang</PageTitle>
              <Yanluowang className=''/>
            </>
          }
        />
        <Route
          path='Zeppelin'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>Zeppelin</PageTitle>
              <Zeppelin className=''/>
            </>
          }
        />

        <Route index element={<Navigate to='/apps/RaaS/TTPs/Avoslocker' />} />
      </Route>
    </Routes>
  )
}

export default TTPsPage
