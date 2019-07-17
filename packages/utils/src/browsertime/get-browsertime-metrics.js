import { get } from 'lodash';

const METRICS = {
  'browsertime.firstPaint': 'statistics.timings.firstPaint.median',
  'browsertime.fullyLoaded': 'statistics.timings.fullyLoaded.median',
  'browsertime.backEndTime': 'statistics.timings.pageTimings.backEndTime.median',
  'browsertime.domContentLoadedTime': 'statistics.timings.pageTimings.domContentLoadedTime.median',
  'browsertime.domInteractiveTime': 'statistics.timings.pageTimings.domInteractiveTime.median',
  'browsertime.domainLookupTime': 'statistics.timings.pageTimings.domainLookupTime.median',
  'browsertime.frontEndTime': 'statistics.timings.pageTimings.frontEndTime.median',
  'browsertime.pageDownloadTime': 'statistics.timings.pageTimings.pageDownloadTime.median',
  'browsertime.pageLoadTime': 'statistics.timings.pageTimings.pageLoadTime.median',
  'browsertime.redirectionTime': 'statistics.timings.pageTimings.redirectionTime.median',
  'browsertime.serverConnectionTime': 'statistics.timings.pageTimings.serverConnectionTime.median',
  'browsertime.serverResponseTime': 'statistics.timings.pageTimings.serverResponseTime.median',
  'browsertime.firstContentfulPaint': 'statistics.timings.paintTiming.first-contentful-paint.median',
  'browsertime.rumSpeedIndex': 'statistics.timings.rumSpeedIndex.median',
  'browsertime.firstVisualChange': 'statistics.visualMetrics.FirstVisualChange.median',
  'browsertime.lastVisualChange': 'statistics.visualMetrics.LastVisualChange.median',
  'browsertime.perceptualSpeedIndex': 'statistics.visualMetrics.PerceptualSpeedIndex.median',
  'browsertime.speedIndex': 'statistics.visualMetrics.SpeedIndex.median',
  'browsertime.visualComplete85': 'statistics.visualMetrics.VisualComplete85.median',
  'browsertime.visualComplete95': 'statistics.visualMetrics.VisualComplete95.median',
  'browsertime.visualComplete99': 'statistics.visualMetrics.VisualComplete99.median',
};

export const getBrowsertimeMetrics = (browsertime) => {
  if (!browsertime) {
    return {};
  }

  return Object.entries(METRICS)
    .reduce((agg, [metricKey, metricPath]) => ({
      ...agg,
      [metricKey]: {
        value: get(browsertime, metricPath, 0),
      },
    }), {});
};
