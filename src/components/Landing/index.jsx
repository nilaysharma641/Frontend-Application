import React, { useState, useEffect } from 'react'
import Anime from 'react-anime'
import { BsArrowRight } from 'react-icons/bs'

const targets = [
	'customers',
	'startups',
	'open innovation teams',
	'suppliers',
	'investors',
	'research institues'
]

const Landing = () => {
	const [currentTarget, setCurrentTarget] = useState(0)

	useEffect(() => {
		const id = setInterval(() => {
			setCurrentTarget((prevValue) => {
				if (prevValue >= targets.length - 1) {
					return 0
				} else {
					return prevValue + 1
				}
			})
		}, 2000)
		return () => {
			clearInterval(id)
		}
	}, [])

	return (
		<div className='landing-wrapper'>
			<div className='landing-jumbotron'>
				<h1 className='landing-title'>
					Discover business opportunities worldwide
				</h1>
				<div className='animated-subheading'>
					The B2B tech ecosystem to meet
					<Anime easing='linear' duration={2000} direction='normal'>
						<div key={currentTarget} className='animated-target'>
							{targets[currentTarget]}
						</div>
					</Anime>
				</div>
				<button href='https://innoloft.com/offers' className='start-now-button'>
					Start now <BsArrowRight className='start-now-icon' />
				</button>
			</div>
		</div>
	)
}

export default Landing
