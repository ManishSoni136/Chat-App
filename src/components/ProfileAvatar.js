import React from 'react'
import { Avatar } from 'rsuite'
import { getNameInitial } from '../misc/Helpers'

const ProfileAvatar = ({ name, ...avatarProps }) => {
    return (
        <Avatar circle {...avatarProps}>
            {getNameInitial(name)}
        </Avatar>
    )
}

export default ProfileAvatar
