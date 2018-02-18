import React from 'react';
import styled from 'styled-components';
import { debounce } from 'lodash'
import { Flex, Box } from 'grid-styled'

export default class PolySearch extends React.Component {

  constructor() {
    super()
    this.state = {
      queryValue: 'poly',
      show: false,
      loaded: false
    }
  }

  load() {
    if (this.state.loaded) return
    // GOOGLE POLY CODE EXAMPLE
      const THREE = window.THREE
      const results = document.querySelector('#results')
      const button = document.querySelector('#button')
      const search = document.querySelector('#search')
      const viewer = document.querySelector('#viewer')
      const info = document.querySelector('#info')

			const WIDTH = viewer.offsetWidth;
			const HEIGHT = viewer.offsetHeight;

			var camera = new THREE.PerspectiveCamera( 60, WIDTH / HEIGHT, 0.01, 100 );
			camera.position.set( 5, 3, 5 );
			camera.lookAt( 0, 1.5, 0 );
			var scene = new THREE.Scene();
			scene.background = new THREE.Color( 0x222222 );
			scene.add( new THREE.GridHelper( 10, 10 ) );
			var ambient = new THREE.HemisphereLight( 0xbbbbff, 0x886666, 0.75 );
			ambient.position.set( -0.5, 0.75, -1 );
			scene.add( ambient );
			var light = new THREE.DirectionalLight( 0xffffff, 0.75 );
			light.position.set( 1, 0.75, 0.5 );
			scene.add( light );
			var container = new THREE.Group();
			scene.add( container );
			var renderer = new THREE.WebGLRenderer();
			renderer.setPixelRatio( window.devicePixelRatio );
			renderer.setSize( WIDTH, HEIGHT );
			viewer.appendChild( renderer.domElement );
			function animate() {
				var time = performance.now() / 5000;
				camera.position.x = Math.sin( time ) * 5;
				camera.position.z = Math.cos( time ) * 5;
				camera.lookAt( 0, 1.5, 0 );
				renderer.render( scene, camera );
				requestAnimationFrame( animate );
			}
			requestAnimationFrame( animate );
			const API_KEY = 'AIzaSyAeKtA5Mh6WZPbocdSV7JPoyTDIgo6R3a4'
			function searchPoly( keywords, onLoad ) {
				var url = `https://poly.googleapis.com/v1/assets?keywords=${keywords}&format=OBJ&key=${API_KEY}`;
				var request = new XMLHttpRequest();
				request.open( 'GET', url, true );
				request.addEventListener( 'load', function ( event ) {
					onLoad( JSON.parse( event.target.response ) );
				});
				request.send( null );
			}

			function createImage( asset ) {
				var image = document.createElement( 'img' );
				image.src = asset.thumbnail.url;
				image.style.width = '100px';
				image.style.height = '75px';
				var format = asset.formats.find( format => { return format.formatType === 'OBJ'; } );
				if (format !== undefined) {
					image.onclick = function () {
						// Remove previous results
						while ( container.children.length ) {
							container.remove( container.children[ 0 ] );
						}
						asset_name.textContent = asset.displayName;
						asset_author.textContent = asset.authorName;
						var obj = format.root;
						var mtl = format.resources.find( resource => { return resource.url.endsWith( 'mtl' ) } );
						var path = obj.url.slice( 0, obj.url.indexOf( obj.relativePath ) );
						var loader = new THREE.MTLLoader();
						loader.setCrossOrigin( true );
						loader.setTexturePath( path );
						loader.load( mtl.url, function ( materials ) {
							var loader = new THREE.OBJLoader();
							loader.setMaterials( materials );
							loader.load( obj.url, function ( object ) {
								var box = new THREE.Box3();
								box.setFromObject( object );
								// re-center
								var center = box.getCenter();
								center.y = box.min.y;
								object.position.sub( center );
								// scale
								var scaler = new THREE.Group();
								scaler.add( object );
								scaler.scale.setScalar( 6 / box.getSize().length() );
								container.add( scaler );
							});
						});
					}
				}

				return image;

			}

			function onResults( data ) {
				while ( results.childNodes.length ) {
					results.removeChild( results.firstChild );
				}
				var assets = data.assets;
				if (assets) {
					for (var i = 0; i < assets.length; i++) {
						var asset = assets[ i ];
						var image = createImage( asset );
						results.appendChild( image );
					}
				} else {
					results.innerHTML = '<center>NO RESULTS</center>';
				}
			}

      search.addEventListener( 'submit', (event) => {
				event.preventDefault()
				searchPoly(this.state.queryValue, onResults);
			});

			button.click();
      this.setState({
        loaded: true
      })
  }

  handleQueryChange(event) {
    this.setState({
      queryValue: event.target.value
    })
  }

  handleToggle(event) {
    event.preventDefault()
    this.setState({
      show: !this.state.show
    }, () => {
      this.load()
    })
  }

  render() {
    const { queryValue, show } = this.state

    return (
      <Container>
        <Toggler onClick={event => this.handleToggle(event)}>Search objects</Toggler>
        {show &&
        <ToggleContainer>
          <SearchForm id="search">
            <Query id="query" value={queryValue} onChange={event => this.handleQueryChange(event)} />
            <SubmitButton id="button">search</SubmitButton>
          </SearchForm>
          <Flex>
            <Box width={1/2}>
              <Results id="results"></Results>
            </Box>
            <Box width={1/2}>
              <Viewer id="viewer"></Viewer>
            </Box>
          </Flex>
          <Info id="info">
            <span id="asset_name">Title</span>
            by <span id="asset_author">Author</span>
          </Info>
        </ToggleContainer>}
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

const Toggler = styled.a`
  cursor: pointer;
  color: #475a84;
`

const ToggleContainer = styled.div`
  display: block;
`

const SearchForm = styled.form`
  display: block;
`

const Results = styled.div`
  display: block;
  width: 330px;
  bottom: 0px;
  vertical-align: top;

  & img {
    margin-left: 8px;
    cursor: pointer;
  }
  & img:hover {
    opacity: 0.8;
  }
`

const Viewer = styled.div`
  display: block;
  width: 400px;
  height: 400px;
`

const Info = styled.div`
  padding-top: 6px;
  text-align: center;
  display: none;
`

const Query = styled.input`
  border: 0;
  padding: 10px;
  background: #00000073;
  color: #fff;
  font-size: 16px;
  width: 200px;
`;

const SubmitButton = styled.button`
  -webkit-appearance: none;
  border: 0;
  padding: 10px;
  font-size: 16px;
  background: #000000a1;
  color: #ffffff54;
`
