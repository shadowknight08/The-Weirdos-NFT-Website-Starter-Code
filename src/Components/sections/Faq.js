import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import Accordion from '../Accordion';

const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.text};
position: relative;
color: ${(props) => props.theme.body};
display: flex;
justify-content: center;
align-items:center;
flex-direction: column;
`

const Title = styled.h1`
font-size:${(props) => props.theme.fontxxl};
text-transform: uppercase;
color: ${(props) => props.theme.body};

margin: 1rem auto;
border-bottom: 2px solid ${(props) => props.theme.carouselColor};
width: fit-content;
`;

const Container = styled.div`
width: 75%;
margin: 2rem auto ;

display: flex;
justify-content: space-between;
align-content: center;

` 

const Box = styled.div`
width: 45%;
`
const Faq = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {

    let element = ref.current;

    ScrollTrigger.create({
      trigger: element,
      start:'top top',
      end:'bottom top',
      pin:true,
      pinSpacing: false;
      scrub:true;
      // markers:true,

    })

    return () => {
      ScrollTrigger.kill();


    };
  }, [])

  return (
    <Section ref = useRef={ref}>
      <Title>Faq</Title>
      <Container>
        <Box>
          <Accordion title="WHERE CAN I VIEW MY NFTS?">
            Once minted or bought simply connect to your OpenSea account to view your NFTs.
          </Accordion>
          <Accordion title="WHAT IS THE METAVERSE?">
            A metaverse is a network of 3D virtual worlds focused on social connection. In futurism and science fiction,it
          </Accordion>
          <Accordion title="WHY DO WE NEED ROYALTIES?">
            The amountof royalties was fixed at 5% tp finance the weirdos club's projects. we have the ambition to organize.
          </Accordion>
        </Box>
        <Box>
          <Accordion title="HOW CAN I USE MY NFT?">
            Once minted or bought simply connect to your OpenSea account to view your NFTs.
          </Accordion>
          <Accordion title="WHAT ARE THE WEIRDOS?">
            Once minted or bought simply connect to your OpenSea account to view your NFTs.
          </Accordion>
          <Accordion title="WHAT IS THE FUSION PROCESS?">
            Once minted or bought simply connect to your OpenSea account to view your NFTs.
          </Accordion>
        </Box>
      </Container>
    </Section>
  )
}

export default Faq