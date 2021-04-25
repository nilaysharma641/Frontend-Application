import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps'
const {
	MarkerWithLabel
} = require('react-google-maps/lib/components/addons/MarkerWithLabel')

const GoogleMapComponent = withScriptjs(
	withGoogleMap((props) => {
		return (
			<div className='card map-card'>
				<GoogleMap
					className='google-maps'
					defaultZoom={15}
					defaultCenter={{ lat: props.latitude, lng: props.longitude }}
				>
					<MarkerWithLabel
						position={{ lat: props.latitude, lng: props.longitude }}
						// eslint-disable-next-line no-undef
						labelAnchor={new google.maps.Point(0, 0)}
						labelStyle={{
							backgroundColor: '#f3f3f3',
							fontSize: '15px',
							padding: '8px'
						}}
					>
						<div className='marker-address'>
							<div>{`${props.address.house || ''}, ${
								props.address.street || ''
							}`}</div>
							<div>{`${props.address.city.name || ''}, ${
								props.address.state || ''
							}`}</div>
							<div>
								{`${props.address.country.name || ''}, ${
									props.address.zipCode || ''
								}`}
							</div>
						</div>
					</MarkerWithLabel>
					{/* {<Marker position={{ lat: c, lng: props.longitude }} />} */}
				</GoogleMap>
			</div>
		)
	})
)

const MapComponent = ({ address }) => {
	return (
		<div>
			<GoogleMapComponent
				googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `420px` }} />}
				mapElement={<div style={{ height: `420px` }} />}
				latitude={parseFloat(address.latitude)}
				longitude={parseFloat(address.longitude)}
				address={address}
			/>
		</div>
	)
}

export default MapComponent
