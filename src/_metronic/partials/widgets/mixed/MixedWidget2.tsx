/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useRef} from 'react'
import ApexCharts, {ApexOptions} from 'apexcharts'
import {KTSVG} from '../../../helpers'
import {getCSSVariableValue} from '../../../assets/ts/_utils'
import {Dropdown1} from '../../content/dropdown/Dropdown1'
import {useThemeMode} from '../../layout/theme-mode/ThemeModeProvider'

type Props = {
  className: string
  chartColor: string
  strokeColor: string
  chartHeight: string
}

const MixedWidget2: React.FC<Props> = ({className, chartColor, chartHeight, strokeColor}) => {
  const chartRef = useRef<HTMLDivElement | null>(null)
  const {mode} = useThemeMode()
  const refreshChart = () => {
    if (!chartRef.current) {
      return
    }

    const chart = new ApexCharts(
      chartRef.current,
      chartOptions(chartHeight, chartColor, strokeColor)
    )
    if (chart) {
      chart.render()
    }

    return chart
  }

  useEffect(() => {
    const chart = refreshChart()
    return () => {
      if (chart) {
        chart.destroy()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chartRef, mode])

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className={`card-header border-0 py-5 bg-${chartColor}`}>
        <h3 className='card-title fw-bold text-gray-200 fs-2'>Popular Techniques by Tactic</h3>
      </div>
      <div className='card-body p-0'>
        {/* begin::Chart */}
        <div
          ref={chartRef}
          className={`mixed-widget-2-chart card-rounded-bottom bg-${chartColor}`}
        ></div>
        {/* end::Chart */}
        {/* begin::Stats */}
        <div className='card-p  position-relative'>
          {/* begin::Row */}
          <div className='row g-0'>
            {/* begin::Col */}
            <div className='col bg-light-primary px-6 py-8 rounded-2 me-7 mb-7 text-center'>
              <div className='text-primary fw-semibold fs-6'>Initial Access</div>
              <div className='text-primary fw-bold fs-5'>T1190</div>
            </div>
            {/* end::Col */}
            
            {/* begin::Col */}
            <div className='col bg-light-primary px-6 py-8 rounded-2 me-7 mb-7'>
              <div className='text-primary fw-semibold fs-6'>
                Weekly Sales
              </div>
            </div>
            {/* end::Col */}
            {/* begin::Col */}
            <div className='col bg-light-primary px-6 py-8 rounded-2 mb-7'>
              <div className='text-primary fw-semibold fs-6'>
                New Users
              </div>
            </div>
            {/* end::Col */}
          </div>
          {/* begin::Row */}
          <div className='row g-0'>
            {/* begin::Col */}
            <div className='col bg-light-primary px-6 py-8 rounded-2 me-7 mb-7'>
              <div className='text-primary fw-semibold fs-6'>
                Weekly Sales
              </div>
            </div>
            {/* end::Col */}
            {/* begin::Col */}
            <div className='col bg-light-primary px-6 py-8 rounded-2 me-7 mb-7'>
              <div className='text-primary fw-semibold fs-6'>
                Weekly Sales
              </div>
            </div>
            {/* end::Col */}
            {/* begin::Col */}
            <div className='col bg-light-primary px-6 py-8 rounded-2 me-7 mb-7'>
              <div className='text-primary fw-semibold fs-6'>
                Weekly Sales
              </div>
            </div>
            {/* end::Col */}
            
          </div>
          {/* begin::Row */}
          <div className='row g-0'>
            {/* begin::Col */}
            <div className='col bg-light-primary px-6 py-8 rounded-2 me-7 mb-7'>
              <div className='text-primary fw-semibold fs-6'>
                Weekly Sales
              </div>
            </div>
            {/* end::Col */}
            {/* begin::Col */}
            <div className='col bg-light-primary px-6 py-8 rounded-2 me-7 mb-7'>
              <div className='text-primary fw-semibold fs-6'>
                Weekly Sales
              </div>
            </div>
            {/* end::Col */}
            {/* begin::Col */}
            <div className='col bg-light-primary px-6 py-8 rounded-2 me-7 mb-7'>
              <div className='text-primary fw-semibold fs-6'>
                Weekly Sales
              </div>
            </div>
            {/* end::Col */}
            
          </div>
          {/* begin::Row */}
          <div className='row g-0'>
            {/* begin::Col */}
            <div className='col bg-light-primary px-6 py-8 rounded-2 me-7 mb-7'>
              <div className='text-primary fw-semibold fs-6'>
                Weekly Sales
              </div>
            </div>
            {/* end::Col */}
            {/* begin::Col */}
            <div className='col bg-light-primary px-6 py-8 rounded-2 me-7 mb-7'>
              <div className='text-primary fw-semibold fs-6'>
                Weekly Sales
              </div>
            </div>
            {/* end::Col */}
            {/* begin::Col */}
            <div className='col bg-light-primary px-6 py-8 rounded-2 me-7 mb-7'>
              <div className='text-primary fw-semibold fs-6'>
                Weekly Sales
              </div>
            </div>
            {/* end::Col */}
            
          </div>
          
        </div>
        {/* end::Stats */}
      </div>
      {/* end::Body */}
    </div>
  )
}

const chartOptions = (
  chartHeight: string,
  chartColor: string,
  strokeColor: string
): ApexOptions => {
  const labelColor = getCSSVariableValue('--kt-gray-500')
  const borderColor = getCSSVariableValue('--kt-gray-200')
  const color = getCSSVariableValue('--kt-' + chartColor)

  return {
    series: [
      {
        name: 'Tactic',
        data: [1, 1, 1, 1, 1, 1, 1],
      },
    ],
    chart: {
      fontFamily: 'inherit',
      type: 'area',
      height: chartHeight,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 5,
        left: 0,
        blur: 3,
        color: strokeColor,
        opacity: 0.5,
      },
    },
    plotOptions: {},
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: 'solid',
      opacity: 0,
    },
    stroke: {
      curve: 'smooth',
      show: true,
      width: 3,
      colors: [strokeColor],
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
      crosshairs: {
        show: false,
        position: 'front',
        stroke: {
          color: borderColor,
          width: 1,
          dashArray: 3,
        },
      },
    },
    yaxis: {
      min: 0,
      max: 20,
      labels: {
        show: false,
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
    },
    states: {
      normal: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      hover: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'none',
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: '12px',
      },
      y: {
        formatter: function (val) {
          return '$' + val + ' thousands'
        },
      },
      marker: {
        show: false,
      },
    },
    
  }
}

export {MixedWidget2}
