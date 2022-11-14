import React from 'react'
import { Card, Button } from 'react-bootstrap'
import logo from './logo.svg'

export default function Home() {
  return (
    <Card className="text-dark">
      {/* <Card.Img src={logo}  alt="Card image" /> */}
      <Card.ImgOverlay>
        <Card.Title>Integration ChartJs for React</Card.Title>
        <Card.Text>
          It's easy to get started with Chart.js. All that's required is the script included in your page along with a single  node to render the chart.
          <Card.Title>

            Quickstart
          </Card.Title>
          Install this library with peer dependencies:
          <br/>
          
          <pre>
          

              <kbd>pnpm add react-chartjs-2 chart.js </kbd><br/>
              # or <br/>
             <kbd> yarn add react-chartjs-2 chart.js</kbd><br/>
              # or <br/>
             <kbd> npm i react-chartjs-2 chart.js</kbd><br/>
         
          </pre>

          

        </Card.Text>
        {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
        <Button variant="primary" target="_blank" href="https://www.chartjs.org/docs/latest/">Go Offical Documentation</Button>
      </Card.ImgOverlay>
    </Card>
  )
}
