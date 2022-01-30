const { configureToMatchImageSnapshot } = require('jest-image-snapshot')
const customConfig = { threshold: 0 }
const toMatchImageSnapshot = configureToMatchImageSnapshot({
  customDiffConfig: customConfig,
  failureThreshold: 55,
  failureThresholdType: 'percent',
  updatePassedSnapshot: true
})
expect.extend({ toMatchImageSnapshot })
