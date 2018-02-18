import React from 'react';
import styled from 'styled-components';
import PolySearch from './PolySearch.jsx';

export default class Home extends React.Component {

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
    map.on('load', function() {
      // Insert the layer beneath any symbol layer.
      var layers = map.getStyle().layers;

      var labelLayerId;
      for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
          labelLayerId = layers[i].id;
          break;
        }
      }

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
  });
  }

  render() {
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
