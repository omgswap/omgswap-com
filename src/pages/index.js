import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../layouts'
import SEO from '../components/seo'
import Ticker from '../components/ticker'
import BG from '../components/bg'
import { Button } from '../components/button'
import Discord from '../images/discord.inline.svg'

const StyledBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 375px) {
    margin-bottom: 2rem;
  }
`

const StyledTitle = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  will-change: transform;
  margin: 5rem 0 5rem 0;
  @media (max-width: 960px) {
    margin: 3rem 0 1rem 0;
  }
`

const StyledBodyTitle = styled.h1`
  color: ${({ theme }) => theme.colors.link};
  font-size: 112px;
  margin: 0.5rem 0 0.5rem 0;
  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 900px;
  font-weight: 600;
  text-align: center;
  font-family: 'Source Sans Pro', 'Times New Roman', serif;
  @media (max-width: 1024px) {
    margin: 0.5rem 0 0.5rem 0;
  }

  @media (max-width: 960px) {
    width: 100%;
    font-size: 4rem;
    line-height: 4.5rem;
    margin: 0.5rem 0 0.5rem 0;
    max-width: 600px;
  }
  @media (max-width: 375px) {
    width: 100%;
    margin: 0.5rem 0 0.5rem 0;
    font-weight: 400;
  }
`

const StyledBodyTitle2 = styled.h1`
  color: ${({ theme }) => theme.colors.link};
  font-size: 48px;
  margin: 0.5rem 0 0.5rem 0;
  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 900px;
  text-align: center;
  font-family: 'Source Sans Pro', 'Times New Roman', serif;
  @media (max-width: 1024px) {
    margin: 0.5rem 0 0.5rem 0;
  }

  @media (max-width: 960px) {
    width: 100%;
    font-size: 2rem;
    line-height: 2.5rem;
    margin: 0.5rem 0 0.5rem 0;
    max-width: 600px;
  }
  @media (max-width: 375px) {
    width: 100%;
    margin: 1rem 0 1rem 0;
    font-weight: 400;
  }
`

const StyledBodyTitle3 = styled.h2`
  color: ${({ theme }) => theme.colors.link};
  font-size: 24px;
  margin: 0.5rem 0 1rem 0;
  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 900px;
  text-align: center;
  font-family: 'Source Sans Pro', 'Times New Roman', serif;
  @media (max-width: 1024px) {
    margin: 0.5rem 0 0.5rem 0;
  }

  @media (max-width: 960px) {
    width: 100%;
    font-size: 1rem;
    line-height: 1.5rem;
    margin: 0.5rem 0 0.5rem 0;
    max-width: 600px;
  }
  @media (max-width: 375px) {
    width: 100%;
    margin: 0.5rem 0 0.5rem 0;
    font-weight: 400;
  }
`

const StyledUnicornImage = styled(Img)`
  width: 100%;
  height: 100%;
  min-width: 450px;
  background-color: none;
  margin-top: 1rem;
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.shadows.huge};
  @media (max-width: 960px) {
    min-width: unset;
  }
`

const StyledSectionFlex = styled.div`
  padding: 4rem 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  /* max-width: 650px; */
  @media (max-width: 1024px) {
    padding: 1rem;
    margin-top: 0rem;
    flex-direction: ${({ wrapSmall }) => (!wrapSmall ? 'row' : 'column')};
  }
  @media (max-width: 960px) {
    padding: 1rem;
    margin-top: 0rem;
    width: 100%;
    max-width: 450px;
  }

  h2 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-bottom: 0.5rem;
  }
`

const IndexPage = props => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteUrl
        }
      }
      unicornImage: file(relativePath: { eq: "trade-history.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      swap: file(relativePath: { eq: "swap.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      info: file(relativePath: { eq: "dex.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      coinex: file(relativePath: { eq: "coinex.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      socks: file(relativePath: { eq: "info.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout path={props.location.pathname}>
      <BG />
      <SEO
        title="Omega Protocol | BSC BEP20, ERC20 Token Swap"
        path={props.location.pathname}
        description={'Omega Protocol, OMGSwap, Omega DeFi, dApp, DEX, bApp, ETH Ethereum ERC20 Token, BNB Binance Smart Chain BSC BEP20 Swap, OmegaSwap, OPM, pDAI, DFIX'}
      />
      <StyledBody>
        <StyledTitle>
          <StyledBodyTitle>Ǒmega Protocol</StyledBodyTitle>
          <StyledBodyTitle2>Southeast Asian First DeFi Protocol Project</StyledBodyTitle2>
          <StyledBodyTitle3>Omega Protocol is decentralized finance (Open finance) refers to the crypto (digital) assets and
          smart contracts, protocols, and decentralized application (dApp) built on Ethereum and Binance Smart Chain.</StyledBodyTitle3>
          <span>
            <Button href="https://bapp.omgswap.com/" target="_blank" rel="noopener noreferrer">Binance OMGSwap bApp</Button>
            <Button href="https://app.omgswap.com/" target="_blank" rel="noopener noreferrer">Ethereum OMGSwap App</Button>
            <Button href="https://omegaswap.com/" target="_blank" rel="noopener noreferrer">FlashSwap Full Liquidity</Button>
          </span>
          <span>
            <Button href="https://omgswap.in/obox" target="_blank" rel="noopener noreferrer">Omega Staking Box Application [Reward System]</Button>
          </span>
        </StyledTitle>
      </StyledBody>
    </Layout>
  )
}

export default IndexPage
