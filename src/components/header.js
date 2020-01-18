import React from "react"
import styled from "styled-components"
import Stars from "./stars"
import breakpoint from "styled-components-breakpoint"
import MountainPaths from "./mountain"
import color from "color"

const Mountain = styled.svg`
  width: 100%;
  height: 350px;
  bottom: 0;
  position: absolute;
  margin-bottom: -140px;
  z-index: 2;
`

const HeaderWrapper = styled.header`
  margin: 0;
  background: ${props => props.theme.primary};
  background: radial-gradient(
    circle,
    ${props => props.theme.primary},
    ${props => props.theme.primaryDark}
  );
  background-repeat: no-repeat;
  width: 100%;
  position: relative;
  padding: 0;
  height: 120px;
  ${breakpoint("sm")`
    min-height: 160px;
  `}
  ${breakpoint("md")`
    min-height: 200px;
  `}
  ${breakpoint("lg")`
    min-height: 250px;
  `}
  overflow: hidden;
`

const Sunset = styled.section`
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  bottom: 0;
  background-image: linear-gradient(
    180deg,
    hsla(0, 0%, 100%, 0),
    ${props => color(props.theme.accent).fade(0.95).toString()} 5%,
    ${props => color(props.theme.accent).fade(0.6).toString()} 15%,
    ${props => props.theme.accent}
  );
  background-repeat: repeat-x;
  opacity: 0.38;
  z-index: 1;
`

const HeaderContent = styled.div`
  position: absolute;
  right: 16px;
  top: 16px;
  z-index: 4;
`
const HeaderBackground = styled.div`
  position: fixed;
  z-index: 0;
  top: 0;
  width: 100vw;
  height: 380px;
  left: 0;
  overflow: hidden;
`

const _Header = ({ children }) => (
  <HeaderWrapper>
    <HeaderContent>{children}</HeaderContent>
    <Mountain svg x="0px" y="0px" viewBox="0 0 457.76 251.52">
      <MountainPaths></MountainPaths>
    </Mountain>
    <HeaderBackground>
      <Stars />
      <Sunset />
    </HeaderBackground>
  </HeaderWrapper>
)

// Do not rerender if not needed

export default _Header
