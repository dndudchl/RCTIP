import {FC} from 'react'
import clsx from 'clsx'
// import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {KTSVG} from '../../../helpers'
// import {
//   HeaderNotificationsMenu,
//   HeaderUserMenu,
//   QuickLinks,
//   Search,
//   ThemeModeSwitcher,
// } from '../../../partials'
import {
  HeaderNotificationsMenu,
  Search,
  ThemeModeSwitcher,
} from '../../../partials'
import {useLayout} from '../../core'

const itemClass = 'ms-1 ms-lg-3',
  btnClass = 'btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px',
  userAvatarClass = 'symbol-30px symbol-md-40px'

const Topbar: FC = () => {
  const {config} = useLayout()

  return (
    <div className='d-flex align-items-stretch flex-shrink-0'>
      {/* Search */}
      {/* <div className={clsx('d-flex align-items-stretch', itemClass)}>
        <Search />
      </div> */}

      {/* Activities :Drawer toggle */ }
      {/* <div className={clsx('d-flex align-items-center', itemClass)}>
        <div className={btnClass} id='kt_activities_toggle'>
          <i className='bi bi-bell fs-2' />
        </div>
      </div> */}

      {/* Quick links Menu wrappe  */ }
      {/* <div className={clsx('d-flex align-items-center', itemClass)}>
        <div
          className={btnClass}
          data-kt-menu-trigger='click'
          data-kt-menu-attach='parent'
          data-kt-menu-placement='bottom-end'
        >
          <i className='bi bi-clipboard-check fs-2' />
        </div>
        <QuickLinks />
      </div> */}

      {/* CHAT Menu wrapper */}
      {/* <div className={clsx('d-flex align-items-center', itemClass)}>
        <div
          className={clsx(
            'btn btn-icon btn-active-light-primary btn-custom position-relative',
            btnClass,
            'pulse pulse-success'
          )}
          id='kt_drawer_chat_toggle'
        >
          <i className='bi bi-app-indicator fs-2' />
          <span className='pulse-ring w-45px h-45px' />
        </div>
      </div> */}

      {/* begin::Theme mode */}
      <div className={clsx('d-flex align-items-center', itemClass)}>
        <ThemeModeSwitcher toggleBtnClass={btnClass} />
      </div>
      {/* end::Theme mode */}

      {/* NOTIFICATIONS */}
      {/* <div className={clsx('d-flex align-items-center', itemClass)}>
        
        <div
          className={clsx(btnClass, 'position-relative')}
          data-kt-menu-trigger='click'
          data-kt-menu-attach='parent'
          data-kt-menu-placement='bottom-end'
        >
          <i className='bi bi-grid fs-2' />
        </div>
        <HeaderNotificationsMenu />
        
      </div> */}


      {/* begin::User Toggle */}
      {/* <div className={clsx('d-flex align-items-center', itemClass)} id='kt_header_user_menu_toggle'>
        <div
          className={clsx('cursor-pointer symbol', userAvatarClass)}
          data-kt-menu-trigger='click'
          data-kt-menu-attach='parent'
          data-kt-menu-placement='bottom-end'
        >
          <img src={toAbsoluteUrl('/media/avatars/300-1.jpg')} alt='metronic' />
        </div>
        <HeaderUserMenu />      
      </div> */}
      {/* end::User */}

      {/* begin::Aside Toggler */}
      {/* {config.header.left === 'menu' && (
        <div className='d-flex align-items-center d-lg-none ms-2' title='Show header menu'>
          <div
            className='btn btn-icon btn-active-color-primary w-30px h-30px w-md-40px h-md-40px'
            id='kt_header_menu_mobile_toggle'
          >
            <KTSVG path='/media/icons/duotune/text/txt001.svg' className='svg-icon-1' />
          </div>
        </div>
      )} */}
    </div>
  )
}

export {Topbar}
