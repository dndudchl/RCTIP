// import React from 'react'
import {MenuItem} from './MenuItem'
// import {MenuInnerWithSub} from './MenuInnerWithSub'
// import {MegaMenu} from './MegaMenu'
// import {useIntl} from 'react-intl'
import { useLocation } from 'react-router-dom';
// import { text } from 'node:stream/consumers'

export function MenuInner2() {
  // const intl = useIntl();
  let location = useLocation();
  // let replacePath= location.pathname.replace("info", "ttps")
  let infoPath= location.pathname.replace(/ttps|ioc/, "info")
  let ttpsPath= location.pathname.replace(/info|ioc/, "ttps")
  let iocPath= location.pathname.replace(/info|ttps/, "ioc")
  
  return (
    
   <>
      <MenuItem 
        to={`${infoPath}`}
        title='Darkweb Info' 
      />

      <MenuItem 
        to={`${ttpsPath}`}
        title='TTPs' 
      />

      <MenuItem 
        to={`${iocPath}`}
        title='IoC' 
      />
      
    </>
  )
}
