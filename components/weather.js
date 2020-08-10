import { parseISO, format } from 'date-fns'

export default function Weather({ temp, description, icon }) {
  return (
      <div>
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}></img>
        <p>{description}</p>
        <p>{temp}</p>
      </div>
  )
}