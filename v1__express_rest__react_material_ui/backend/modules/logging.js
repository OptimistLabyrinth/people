function debugLog(msg) {
  if (process.env.useLogging === 'yes') {
    console.log(msg)
  }
}

function debugError(msg) {
  if (process.env.useLogging === 'yes') {
    console.error(msg)
  }
}

export { debugLog, debugError }
