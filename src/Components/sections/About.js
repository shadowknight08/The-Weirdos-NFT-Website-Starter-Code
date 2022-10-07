import React from 'react'
import styled from 'styled-components'
import Carousel from '../Carousel'




const Section = styled.section`
min-height:100vh;
width:100%;
background-color: ${props => props.theme.text};
color: ${props => props.theme.body};
display: flex;
justify-content: center;
align-items: center;
position: relative;

`

const Container = styled.div`
width: 75%;
min-height: 80vh;
margin: 0 auto;
//background-color: lightblue;

display: flex;
justify-content: center;
align-items: center;

`
const Box = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const About = () => {
  return (
    <Section>
      <Container>
        <Box>
<Carousel/>
        </Box>
        <Box>Text</Box>

      </Container>
    </Section>
  )
}

export default About