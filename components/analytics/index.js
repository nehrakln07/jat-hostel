import GA from './GoogleAnalytics'

const isProduction = process.env.NODE_ENV === 'production'

const Analytics = () => {
  return <>{isProduction && <GA />}</>
}

export default Analytics
