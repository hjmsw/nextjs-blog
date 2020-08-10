import Layout from '../components/layout'
import WeatherData from '../components/weather'
import Head from 'next/head'
import Date from '../components/date'
import utilStyles from '../styles/utils.module.css'
import fetch from 'isomorphic-unfetch'

export default function Weather({ weatherData }) {
    
    return (
      <Layout>
          <Head>
              <title>Weather for {weatherData.name} </title>
          </Head>
          <h1>Weather for {weatherData.name}</h1>
          <WeatherData data={weatherData}/>
      </Layout>
    )
}

export async function getServerSideProps() {
    const res = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Kirriemuir,uk&units=metric&appid=b7bc5fed349e521e6e872cc3e97bdbd8')
    const weatherData = await res.json()
    //console.log(weatherData);
    return {
        props: {
            weatherData
        }
    }
}