import React from 'react'
import {
  MainInfo,
  SecondaryInfo,
  ProfileImg,
  Name,
  Span,
} from './ProfileStyles'
import { ReactComponent as CameraIcon } from '../../Images/camera.svg'
import { ReactComponent as EditIcon } from '../../Images/edit.svg'

const Info = () => {
  return (
    <>
      <MainInfo>
        <div style={{ position: 'relative', marginRight: '2rem' }}>
          <ProfileImg
            src={require('../../Images/profile-picture.png')}
            alt='This is Profile Image'
          />
          <CameraIcon
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              transform: 'translate(25%, 25%)',
            }}
          />
        </div>
        <div style={{ position: 'relative' }}>
          <Name>Name Surname</Name>
          <Span>272610</Span>
          <Span>
            Bachelor of science program in <b>ENGINEERING AND MANAGEMENT</b>
          </Span>
          <EditIcon
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              transform: 'translateX(-50%)',
            }}
          />
        </div>
      </MainInfo>
      <SecondaryInfo>
        <Span>Latest enrolment</Span>
        <Span>
          <b>2021/2022 - Full time</b>
        </Span>
        <Span>3^ enrolment, cohort 2019/20</Span>
        <Span>
          Academic progress status: <b style={{ color: '#3f7e44' }}>ACTIVE</b>
        </Span>
      </SecondaryInfo>
    </>
  )
}

export default Info
