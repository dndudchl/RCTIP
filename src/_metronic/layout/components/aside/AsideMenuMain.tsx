/* eslint-disable react/jsx-no-target-blank */
// import {useIntl} from 'react-intl'
import {AsideMenuItemWithSubMain} from './AsideMenuItemWithSubMain'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'
// import {KTSVG, toAbsoluteUrl} from '../../../../_metronic/helpers'

export function AsideMenuMain() {
  // const intl = useIntl()
  return (
    <>
      {/* <AsideMenuItem
        to='/dashboard'
        title="Dashboard"
        fontIcon='bi-house fs-2'
        bsTitle={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        className='py-2'
      /> */}

      <AsideMenuItemWithSubMain
        to='/raas/groups'
        title='&nbsp; RaaS Groups'
        fontIcon='bi-bar-chart-steps' /* receipt-cutoff, bar-chart-steps bi-shield-fill-exclamation */
        bsTitle='RaaS Groups'        
      >
        {/* <div className='card-header pt-1 px-4' id='kt_chat_contacts_header'>
            <form className='w-100 position-relative' autoComplete='off'>
              <KTSVG
                path='/media/icons/duotune/general/gen021.svg'
                className='svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 ms-5 translate-middle-y'
              />

              <input
                type='text'
                className='form-control form-control-solid px-15'
                name='search'
                placeholder='Search by groupname'
              />
            </form>
          </div> */}

        <AsideMenuItem to='#' title='Groups Name' hasBullet={false}></AsideMenuItem>

        <AsideMenuItemWithSub to='/raas' title='A ~ E' hasBullet={true}>
          <AsideMenuItem
            to='/raas/info/Avoslocker'
            title='Avoslocker'
            bsTitle='Avoslocker'
            hasBullet={true}
          />
          <AsideMenuItem
            to='/raas/info/Babuk'
            title='Babuk'
            bsTitle='Babuk'
            hasBullet={true}
          />
          <AsideMenuItem
            to='/raas/info/BlackBasta'
            title='BlackBasta'
            bsTitle='BlackBasta'
            hasBullet={true}
          />
          <AsideMenuItem
            to='/raas/info/BlackByte'
            title='BlackByte'
            bsTitle='BlackByte'
            hasBullet={true}
          />
          <AsideMenuItem
            to='/raas/info/Clop'
            title='Clop'
            bsTitle='Clop'
            hasBullet={true}
          />
          <AsideMenuItem
            to='/raas/info/Conti'
            title='Conti'
            bsTitle='Conti'
            hasBullet={true}
          />
          <AsideMenuItem
            to='/raas/info/Cuba'
            title='Cuba'
            bsTitle='Cuba'
            hasBullet={true}
          />
          <AsideMenuItem
            to='/raas/info/Everest'
            title='Everest'
            bsTitle='Everest'
            hasBullet={true}
          />
        </AsideMenuItemWithSub>

        <AsideMenuItemWithSub to='/crafted/accounts' title='F - J' hasBullet={true}>
          
        </AsideMenuItemWithSub>

        <AsideMenuItemWithSub to='/raas' title='K - O' hasBullet={true}>
          <AsideMenuItem
            to='/raas/info/Lockbit'
            title='Lockbit'
            bsTitle='Lockbit'
            hasBullet={true}
          />
          <AsideMenuItem
            to='/raas/info/Omega'
            title='Omega'
            bsTitle='Omega'
            hasBullet={true}
          />
        </AsideMenuItemWithSub>

        <AsideMenuItemWithSub to='/raas' title='P - T' hasBullet={true}>
          <AsideMenuItem
            to='/raas/info/Quantum'
            title='Quantum'
            bsTitle='Quantum'
            hasBullet={true}
          />
          <AsideMenuItem
            to='/raas/info/RansomExx'
            title='RansomExx'
            bsTitle='RansomExx'
            hasBullet={true}
          />
          <AsideMenuItem
            to='/raas/info/RansomHouse'
            title='RansomHouse'
            bsTitle='RansomHouse'
            hasBullet={true}
          />
          <AsideMenuItem
            to='/raas/info/Redalert'
            title='Redalert'
            bsTitle='Redalert'
            hasBullet={true}
          />
          <AsideMenuItem
            to='/raas/info/Snatch'
            title='Snatch'
            bsTitle='Snatch'
            hasBullet={true}
          />
          <AsideMenuItem
            to='/raas/info/Suncrypt'
            title='Suncrypt'
            bsTitle='Suncrypt'
            hasBullet={true}
          />
        </AsideMenuItemWithSub>
        <AsideMenuItemWithSub to='/error' title='U - Z' hasBullet={true}>
          <AsideMenuItem
            to='/raas/info/Vice_Society'
            title='Vice_Society'
            bsTitle='Vice_Society'
            hasBullet={true}
          />
          <AsideMenuItem
            to='/raas/info/VSOP'
            title='VSOP'
            bsTitle='VSOP'
            hasBullet={true}
          />
        </AsideMenuItemWithSub>
        
      </AsideMenuItemWithSubMain>

      {/* <AsideMenuItemWithSubMain
        to='/builder'
        title='Binary'
        bsTitle='Resources'
        fontIcon='bi-gear'
      >
        <AsideMenuItem to='/builder' title='Layout builder' fontIcon='bi-layers fs-3' />
        <AsideMenuItem
          to={process.env.REACT_APP_PREVIEW_DOCS_URL + '/docs/changelog'}
          outside={true}
          title={`Changelog ${process.env.REACT_APP_VERSION}`}
          fontIcon='bi-card-text fs-3'
        />
      </AsideMenuItemWithSubMain> */}
    </>
  )
}
