import Layout from '../components/layout'
import WeatherData from '../components/weather'
import Head from 'next/head'
import Date from '../components/date'
import utilStyles from '../styles/utils.module.css'
import fetch from 'isomorphic-unfetch'

export default function Weather({ weatherData }) {
    const { name, main: {temp}} = weatherData
    const { main: description, icon } = weatherData.weather[0]

    return (
      <Layout>
          <Head>
              <title>Weather for {name}</title>
          </Head>
          <h1>Weather for {name}</h1>
          <WeatherData temp={temp} description={description} icon={icon}/>
      </Layout>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Kirriemuir,uk&units=metric&appid=${process.env.WEATHERAPIKEY}`)
    const weatherData = await res.json()
    console.log(weatherData);
    return {
        props: {
            weatherData
        }
    }
}