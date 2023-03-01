import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color: wheat;
    font-size:15px;
    display:flex;
    justify-content:center;
    font-weight:bold;
`

const Announcements = () => {
  return (
    <Container>
        Super Deal! Free Delivery On Order Above ₹499
    </Container>
  )
}

export default Announcements