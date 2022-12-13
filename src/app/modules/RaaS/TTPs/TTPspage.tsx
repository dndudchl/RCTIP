// import {useEffect} from 'react'
// import {useIntl} from 'react-intl'
// import path from 'path'

import {Navigate, Route, Routes, Outlet} from 'react-router-dom'
// import {PageLink} from '../../../../_metronic/layout/core'
import {PageTitle} from '../../../../_metronic/layout/core'

import {ALPHV} from './components/ALPHV'
import {Avoslocker} from './components/Avoslocker'
import {BlackBasta} from './components/BlackBasta'
import {BlackByte} from './components/BlackByte'
import {Blackcat} from './components/Blackcat'
import {Blackmatter} from './components/Blackmatter'
import {Bluesky} from './components/Bluesky'
import {Clop} from './components/Clop'
import {Conti} from './components/Conti'
import {Cuba} from './components/Cuba'
import {Gwisin} from './components/Gwisin'
import {HIVE} from './components/Hive'
import {Lockbit} from './components/Lockbit3.0'
import {LV} from './components/LV'
import {Quantum} from './components/Quantum'
import {Ransomexx} from './components/Ransomexx'
import {Vice_Society} from './components/Vice_Society'
import {Yanluowang} from './components/Yanluowang'


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
        <Route
          path='Blackmatter'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>Blackmatter</PageTitle>
              <Blackmatter className=''/>
            </>
          }
        />
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
          path='Gwisin'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>Gwisin</PageTitle>
              <Gwisin className=''/>
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
          path='Quantum'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>Quantum</PageTitle>
              <Quantum className=''/>
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
          path='Vice_Society'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>Vice_Society</PageTitle>
              <Vice_Society className=''/>
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

        <Route index element={<Navigate to='/apps/RaaS/TTPs/Avoslocker' />} />
      </Route>
    </Routes>
  )
}

export default TTPsPage
