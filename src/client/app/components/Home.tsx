import React from 'react';
import styled from 'styled-components';
import * as utm from 'utm';
import encodeUTM from 'shared/encodeUTM';
import getGeofence from 'shared/geofence';
import BigNumber from 'bignumber.js';
import PolySearch from './PolySearch.jsx';
import NewBlockForm from 'client/app/components/NewBlockForm';
import decodeToUTM from 'shared/decode';

interface Props {
}

interface State {
  latlngkey: string;
}

export default class Home extends React.Component<Props, State> {

  state = {
    latlngkey: null,
  }

  componentDidMount() {
    (window as any).mapboxgl.accessToken = 'pk.eyJ1IjoiY29vcGVybSIsImEiOiJjamRyNGd4a3MwNXJuMnFueXZxbnowajJ5In0.5SoId28cDuTqHPRP_2iA2w';
    var map = new (window as any).mapboxgl.Map({
      style: 'mapbox://styles/mapbox/dark-v9',
      center: [-74.0066, 40.7135],
      zoom: 15.5,
      pitch: 45,
      bearing: -17.6,
      hash: true,
      container: 'map'
    });

    // The 'building' layer in the mapbox-streets vector source contains building-height
    // data from OpenStreetMap.
    map.on('load', () => {
      // Insert the layer beneath any symbol layer.
      var layers = map.getStyle().layers;

      var labelLayerId;
      for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
          labelLayerId = layers[i].id;
          break;
        }
      }

      map.on('click', (e) => {
        const { lng, lat } = e.lngLat;
        const utmVal = utm.fromLatLon(lat, lng);
        const encoded = encodeUTM(utmVal);
        const geofence = getGeofence(lat, lng);
        const test = decodeToUTM(new BigNumber('13145010604398440'));
        console.log('asdsad', test);

        console.log(lng, lat, encoded.toFixed(0), geofence.map(bn => bn.toFixed(0)));
        this.setState({
          latlngkey: encoded.toFixed(0)
        })
      });

      map.addLayer({
        'id': '3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 15,
        'paint': {
          'fill-extrusion-color': '#aaa',

          // use an 'interpolate' expression to add a smooth transition effect to the
          // buildings as the user zooms in
          'fill-extrusion-height': [
          "interpolate", ["linear"], ["zoom"],
          15, 0,
          15.05, ["get", "height"]
        ],
        'fill-extrusion-base': [
          "interpolate", ["linear"], ["zoom"],
          15, 0,
          15.05, ["get", "min_height"]
        ],
        'fill-extrusion-opacity': .2
      }
    }, labelLayerId);


    map.addLayer({
      'id': 'maine',
      'type': 'fill-extrusion',
      'source': {
        'type': 'geojson',
        'data': {
          'type': 'Feature',
          'geometry': {
            'type': 'Polygon',
            'coordinates': [
              [
                [-67.13734351262877, 45.137451890638886],
                [-66.96466, 44.8097],
                [-68.03252, 44.3252],
                [-69.06, 43.98],
                [-70.11617, 43.68405],
                [-70.64573401557249, 43.090083319667144],
                [-70.75102474636725, 43.08003225358635],
                [-70.79761105007827, 43.21973948828747],
                [-70.98176001655037, 43.36789581966826],
                [-70.94416541205806, 43.46633942318431],
                [-71.08482, 45.3052400000002],
                [-70.6600225491012, 45.46022288673396],
                [-70.30495378282376, 45.914794623389355],
                [-70.00014034695016, 46.69317088478567],
                [-69.23708614772835, 47.44777598732787],
                [-68.90478084987546, 47.184794623394396],
                [-68.23430497910454, 47.35462921812177],
                [-67.79035274928509, 47.066248887716995],
                [-67.79141211614706, 45.702585354182816],
                [-67.13734351262877, 45.137451890638886]
              ]
            ]
          }
        }
      },
      'paint': {
        'fill-extrusion-color': '#088',

        // use an 'interpolate' expression to add a smooth transition effect to the
        // buildings as the user zooms in
        'fill-extrusion-height': 1500,
      'fill-extrusion-base': 0,
      'fill-extrusion-opacity': .2
    }
    });

    // When the user moves their mouse over the states-fill layer, we'll update the filter in
    // the state-fills-hover layer to only show the matching state, thus making a hover effect.
    map.on("mousemove", "state-fills", function(e) {
        map.setFilter("state-fills-hover", ["==", "name", e.features[0].properties.name]);
    });

    // Reset the state-fills-hover layer's filter when the mouse leaves the layer.
    map.on("mouseleave", "state-fills", function() {
        map.setFilter("state-fills-hover", ["==", "name", ""]);
    });
  });
  }

  render() {
    const { latlngkey } = this.state

    const mapStyle = {
      width: '100%',
      height: '500px',
      marginTop: '100px',
      boxShadow: '0px 1px 10px hsla(0, 0%, 0%, .2)'
    }
    return (
      <Container>
        <Headline>
          Own your block of the earth
        </Headline>
        <PolySearch />
        <NewBlockForm latlngkey={latlngkey} />
        <div id="map" style={mapStyle} />
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 40px;
`
const Headline = styled.h1`
  color: white;
  text-transform: uppercase;
  font-weight: 300;
  margin: 100px 0 10px;
`
