import React, {useRef, useLayoutEffect} from 'react'
import * as am5 from '@amcharts/amcharts5'
import * as am5map from '@amcharts/amcharts5/map'
import am5geodata_worldLow from '@amcharts/amcharts5-geodata/worldLow'
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated'
import am5geodata_data_countries from '@amcharts/amcharts5-geodata/data/countries'
import am5geodata_data_countries2 from '@amcharts/amcharts5-geodata/data/countries2'

function AmChartsComponent() {
  useLayoutEffect(() => {
    // Create root and chart
    let root = am5.Root.new('chartdiv')
    let chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: 'rotateX',
        projection: am5map.geoNaturalEarth1(),
      })
    )

    // Create polygon series
    let polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ['AQ'],
        fill: am5.color(0x0e103b),
      })
    )

    polygonSeries.mapPolygons.template.setAll({
      tooltipText: '{name}',
      templateField: 'polygonSettings',
    })

    polygonSeries.data.setAll([
      {
        id: 'US',
        polygonSettings: {
          fill: am5.color(0xfc0303),
        },
      },
      {
        id: 'UK',
        polygonSettings: {
          fill: am5.color(0xfc4103),
        },
      },
      {
        id: 'DE',
        polygonSettings: {
          fill: am5.color(0xfc5e03),
        },
      },
      {
        id: 'CA',
        polygonSettings: {
          fill: am5.color(0xfc7303),
        },
      },
      {
        id: 'FR',
        polygonSettings: {
          fill: am5.color(0xfca503),
        },
      },
      {
        id: 'ES',
        polygonSettings: {
          fill: am5.color(0xfca503),
        },
      },
      {
        id: 'AU',
        polygonSettings: {
          fill: am5.color(0xf0d01a),
        },
      },
      {
        id: 'IN',
        polygonSettings: {
          fill: am5.color(0xf0d01a),
        },
      },
      {
        id: 'IT',
        polygonSettings: {
          fill: am5.color(0xf0d01a),
        },
      },
      {
        id: 'JP',
        polygonSettings: {
          fill: am5.color(0xf0d01a),
        },
      },
      {
        id: 'NL',
        polygonSettings: {
          fill: am5.color(0xf0d01a),
        },
      },
      {
        id: 'BR',
        polygonSettings: {
          fill: am5.color(0xf0d01a),
        },
      },
      {
        id: 'SE',
        polygonSettings: {
          fill: am5.color(0xf0d01a),
        },
      },
      {
        id: 'SG',
        polygonSettings: {
          fill: am5.color(0xf5b207),
        },
      },
      {
        id: 'CH',
        polygonSettings: {
          fill: am5.color(0xf5b207),
        },
      },
      {
        id: 'BE',
        polygonSettings: {
          fill: am5.color(0xf5b207),
        },
      },
      {
        id: 'CN',
        polygonSettings: {
          fill: am5.color(0xf5b207),
        },
      },
      {
        id: 'HK',
        polygonSettings: {
          fill: am5.color(0xf5b207),
        },
      },
      {
        id: 'ZA',
        polygonSettings: {
          fill: am5.color(0xf5b207),
        },
      },
      {
        id: 'TH',
        polygonSettings: {
          fill: am5.color(0xf5b207),
        },
      },
      {
        id: 'IE',
        polygonSettings: {
          fill: am5.color(0xf5b207),
        },
      },
      {
        id: 'MY',
        polygonSettings: {
          fill: am5.color(0xf5b207),
        },
      },
      {
        id: 'MX',
        polygonSettings: {
          fill: am5.color(0xf5b207),
        },
      },
      {
        id: 'PH',
        polygonSettings: {
          fill: am5.color(0xf5b207),
        },
      },
      {
        id: 'PT',
        polygonSettings: {
          fill: am5.color(0xf5b207),
        },
      },
      {
        id: 'KR',
        polygonSettings: {
          fill: am5.color(0xf5b207),
        },
      },
      {
        id: 'AE',
        polygonSettings: {
          fill: am5.color(0xf5b207),
        },
      },
      {
        id: 'AT',
        polygonSettings: {
          fill: am5.color(0xf5b207),
        },
      },
      {
        id: 'BH',
        polygonSettings: {
          fill: am5.color(0xf5b207),
        },
      },
      {
        id: 'CO',
        polygonSettings: {
          fill: am5.color(0xf5b207),
        },
      },
      {
        id: 'CZ',
        polygonSettings: {
          fill: am5.color(0xf5b207),
        },
      },
      {
        id: 'DK',
        polygonSettings: {
          fill: am5.color(0xf5b207),
        },
      },
      {
        id: 'EG',
        polygonSettings: {
          fill: am5.color(0xf5b207),
        },
      },
      {
        id: 'FI',
        polygonSettings: {
          fill: am5.color(0xf5b207),
        },
      },
      {
        id: 'GM',
        polygonSettings: {
          fill: am5.color(0xf5b207),
        },
      },
      {
        id: 'GR',
        polygonSettings: {
          fill: am5.color(0xf5b207),
        },
      },
      {
        id: 'GL',
        polygonSettings: {
          fill: am5.color(0xf5b207),
        },
      },
      {
        id: 'KW',
        polygonSettings: {
          fill: am5.color(0xf5b207),
        },
      },
      {
        id: 'LB',
        polygonSettings: {
          fill: am5.color(0xf5b207),
        },
      },
      {
        id: 'MA',
        polygonSettings: {
          fill: am5.color(0xf5b207),
        },
      },
      {
        id: 'NO',
        polygonSettings: {
          fill: am5.color(0xf5b207),
        },
      },
      {
        id: 'PK',
        polygonSettings: {
          fill: am5.color(0xf5b207),
        },
      },
      {
        id: 'SA',
        polygonSettings: {
          fill: am5.color(0xf5b207),
        },
      },
      {
        id: 'SK',
        polygonSettings: {
          fill: am5.color(0xf5b207),
        },
      },
      {
        id: 'TW',
        polygonSettings: {
          fill: am5.color(0xf5b207),
        },
      },
      {
        id: 'VN',
        polygonSettings: {
          fill: am5.color(0xf5b207),
        },
      },
    ])
  }, [])
  return (
  <div id='chartdiv' style={{width: '100%', height: '500px'}}>
    {/* <div className='card'></div> */}

  </div>
  )
}
export default AmChartsComponent
