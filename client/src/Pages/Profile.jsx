import React from 'react'
import ProfileLayout from '../Layouts/Profile/ProfileLayout'
import { Card } from '../Styles/GlobalComponents/index'
import Info from '../Components/Profile/Info'
import Password from '../Components/Profile/Password'
import Number from '../Components/Profile/Number'
import Forward from '../Components/Profile/Forward'

const Profile = () => {
  return (
    <ProfileLayout>
      <Card>
        <Info />
      </Card>
      <Card>
        <Password />
      </Card>
      <Card>
        <Number />
      </Card>
      <Card>
        <Forward />
      </Card>
    </ProfileLayout>
  )
}

export default Profile
