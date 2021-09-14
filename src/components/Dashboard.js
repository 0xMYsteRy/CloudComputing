import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from './DataTable';
import DataDetails from './DataDetails';
import { Box, Grid } from '@material-ui/core';
import Map from './Map/Map';
import Hero from "../components/Hero";
import { Link } from 'react-router-dom';

function Dashboard() {
  const [data, setData] = useState([]);
  const [dataDetails, setDataDetails] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios({
      "method": "GET",
      "url": "https://corona-virus-world-and-india-data.p.rapidapi.com/api",
      "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
        "x-rapidapi-key": "c9ef826454msh3a40987d9db9f02p13b340jsna09a6f332d48"
      }
    })
      .then((response) => {
        // console.log(response);
        const dataList = response.data.countries_stat;
        const worldData = response.data.world_total;
        const world = {
          'country_name': 'World',
          'cases': worldData.total_cases,
          'deaths': worldData.total_deaths,
          'total_recovered': worldData.total_recovered,
          'new_cases': worldData.new_cases,
          'new_deaths': worldData.new_deaths,
        }

        dataList.unshift(world);
        setData(dataList);
        setDataDetails(world);
      })
      .catch((error) => {
        console.log(error);
      });

    axios({
      "method": "GET",
      "url": "https://disease.sh/v3/covid-19/countries",
      "headers": {
      }
    })
      .then((response) => {
        console.log(response);

        setCountries(response.data);
      })
      .catch((error) => {
        console.log(error);
      });


  }, []);

  const updateDataDetails = (data) => {
    setDataDetails(data);
  }

  return (
    <div>
      <Hero />
      <React.Fragment>
        <Grid
          container
          justify="center"
          direction="column"
        >
          <section className="state">
            <h2>Coronavirus Cases - Worldometer</h2>
            
        </section>
          <Grid item xs lg={12} mb={2}>
            <Box>
              <DataDetails data={dataDetails} />
            </Box>
            <Box mt={4}>
            <section className="state">
            <h2> Statistics on the COVID 19 by Country</h2>
        </section>
              <DataTable data={data} updateDataDetails={updateDataDetails} />
            </Box>
          </Grid>
          <section className="state">
            <h2>COVID 19 MAP TRACKING</h2>
        </section>
        
          <Grid item xs lg={12}>
            <Map countries={countries} center={[20, 40]} zoom={2}></Map>
          </Grid>
        </Grid>
      </React.Fragment>
    </div>
  );
}

export default Dashboard;

