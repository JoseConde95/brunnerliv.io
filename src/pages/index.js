import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"

const EgoSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0;
  flex-direction: column;
`

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 10px;

  ${breakpoint("md")`
    flex-direction: row;
  `}
`

const TitleIntroduction = styled.h3`
  padding-right: 20px;
  width: 100%;
  font-size: 1.8em;
  text-align: center;
  max-width: 500px;
  ${breakpoint("md")`
    text-align: right;
    max-width: 300px;
    font-size: 2.5em;
  `}
  ${breakpoint("lg")`
    max-width: 400px;
  `}
  ${breakpoint("xl")`
    max-width: 500px;
  `}
`

const ParagrahIntroduction = styled.p`
  padding-right: 20px;
  font-size: 1em;
  width: 100%;
  text-align: center;
  max-width: 500px;
  ${breakpoint("md")`
    max-width: 300px;
    font-size: 1.2em;
  `}
  ${breakpoint("lg")`
    max-width: 400px;
  `}
  ${breakpoint("xl")`
    max-width: 500px;
  `}
`

const Separator = styled.hr`
  width: 60%;
  height: 2px;
  background: linear-gradient(
    to right,
    ${props => props.theme.accent} 0%,
    ${props => props.theme.primary} 100%
  );
  display: block;
  margin-top: 50px;
  margin-bottom: 50px;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <EgoSection>
      <Wrapper>
        <TitleIntroduction>
          Hi, I'm Livio Brunner, a software developer from Switzerland.
        </TitleIntroduction>
        <ParagrahIntroduction>
          I am a passionate developer and open sourcerer. My current position at{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.roche.com/about/business/diagnostics.htm"
          >
            Roche Diagnostics
          </a>{" "}
          revolves around technical guidance for a common UI library built with
          Angular. In my spare-time I develop at{" "}
          <a
            href="http://nestjs.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            NestJS
          </a>
          , a progressive Node.js framework built on top of TypeScript.
        </ParagrahIntroduction>
      </Wrapper>
      <Separator />
      <Wrapper>{/* Put Social */}</Wrapper>
    </EgoSection>
  </Layout>
)

export default IndexPage
