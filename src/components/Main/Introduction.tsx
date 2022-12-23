import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { IGatsbyImageData } from 'gatsby-plugin-image'


type IntroductionProps = {
  profileImage: IGatsbyImageData
}

const Background = styled.div`
  width: 100%;
  background-color :#f1f2f6;
  color: #2f3542;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 768px;
  height: 200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    height: 150px;
    padding: 0 20px;
  }
`

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

const Title = styled.div`
  margin-top: 5px;
  font-size: 35px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`

const Introduction: FunctionComponent<IntroductionProps> = function ({
}) {
  return (
    <Background>
      <Wrapper>
        <div>
          <SubTitle>아무거나 다 적는 </SubTitle>
          <Title>Parker</Title>
        </div>
      </Wrapper>
    </Background>
  )
}

export default Introduction