import React from 'react'
import './styles.css'


export default function Publications() {
  return (
    <div id='publications' style={{ padding: '20px 10%' }}>
      <p className='section-title'>Journal Publications</p>
      <p className='section-title'>Conference</p>
      <p className="section-title">Book Chapters </p>
      <ul className="text-1 list-1" style={{ listStyle: 'circle', fontSize: '1rem' }}>
        <li><b>Vinnarasi R. </b>, Sarma A. K., 2018. “Climate Change Consideration in Planning and Development of Semi-Urban Cities” In: Sarma A. K., Singu S., Bhattacharjya R., Kartha S. (eds) Flood Management, Water Quality and Climate Change, 2(9), 123–134, Water Science and Technology Library, vol. 84. Springer, Cham</li>
      </ul>
      <p className='section-title'>Publications</p>
      <ol reversed className='text-1 list-1' style={{ listStyle: 'number', fontSize: '1rem' }}>
        <li><b>Vinnarasi R.</b>, Dhanya C.T., Kumar H., 2023. “Tracing Time-Varying Characteristics of Meteorological Drought through Nonstationary Joint Deficit Index”, Journal of Climate, 36 (2023), 4031–4052.</li> <br />
        <li><b>Vinnarasi R.</b>, Dhanya C.T., 2022. “Time-varying Intensity-Duration-Frequency relationship using covariate-informed covariates”, Journal of Hydrology, 604: 127178</li> <br />
        <li><b>Vinnarasi R.</b>, Dhanya C.T., 2019. “Being Realistic in Projecting Future Extremes: Nonstationarity Informed Framework”, Scientific Reports, 9(1): 10472</li> <br />
        <li><b>Vinnarasi R.</b>, Dhanya C.T., 2019. “Quantifying shifts and intensification in the annual rainfall extremes over India”, Environmental Research Letters, 14(6): 064016</li> <br />
        <li>Nisha K. Koshy, <b>Vinnarasi R.</b>, Dhanya C.T., Somnath Baidya Roy, 2018. “Reliability of reanalysis-based gridded precipitation in representing sub-daily precipitation characteristics in India”, Journal of Hydrology, 561: 986–1001</li> <br />
        <li><b>Vinnarasi R.</b>, Dufresne J.-C., Chakravorty A., Aghakouchak A., 2021. “Robustness in Warming Pattern of Daily Surface Temperature in Different Climate Zones”, Scientific Reports, 7(1):7530</li> <br />
        <li>Ghodichore N., Dhanya C.T., <b>Vinnarasi R.</b>, 2017. “Examination of Mean Precipitation and Moisture Transport in Reanalysis Products over India”, ISSM Journal of Hydrologic Engineering, 8(1):1-1</li> <br />
        <li>Chaudhari S., Dhanya C. T., <b>Vinnarasi R.</b>, 2017. “Dry and Wet Extreme Spell Variability During Monsoon - A Gauge-Based Gridded Daily Precipitation Dataset over India”, Journal of Hydrologic Engineering, 22(9)</li> <br />
        <li><b>Vinnarasi R.</b>, Dhanya C. T., 2016. “Changing characteristics of extreme wet and dry spell of Indian rainfall”, Journal of Geophysical Research Atmospheres, 121(5): 2146-2160</li> <br />
      </ol>

      <p className='section-title'>TextBooks</p>
      <p className='section-title'>Webtools</p>
      <ul className="text-1 list-1" style={{ listStyle: 'circle', fontSize: '1rem' }}>
        <li>Webtool For Design Flood Estimation</li>
      </ul>




    </div>
  )
}
