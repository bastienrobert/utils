export default function objectToQuerystring(data, ready = false) {
  const querystring = Object.keys(data)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join('&')
  return ready ? '?' + querystring : querystring
}
