import React from 'react'

const UserCard = ({ user, company }) => {
	return (
		<div className='card'>
			<img className='user-avatar' src={user.profilePicture} alt='user-image' />
			<div className='user-info-wrapper'>
				<h3 className='user-card-name'>{`${user.firstName} ${user.lastName}`}</h3>
				<div className='user-card-position'>{user.position}</div>
				<div className='user-card-company'>{company.name}</div>
			</div>
		</div>
	)
}

export default UserCard
