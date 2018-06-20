import React, { Component } from "react";
import styled from "styled-components";
import sad from "../../icons/sad.svg";

const Container = styled.div`
  font-family: "Roboto";
  -webkit-font-smoothing: antialiased;
  width: 375px;
`;
const WarningTitle = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  font-size: 20px;
  text-align: left;
  color: #fe5353;
  padding: 30px 0;
  display: inline-block;

  span {
    vertical-align: middle;
    margin-left: 10px;
  }
  img {
    width: 30px;
    height: 30px;
    vertical-align: middle;
  }
`;
const Title = styled.span`
  font-style: normal;
  font-weight: bold;
  line-height: 1.5em;
  font-size: 16px;

  color: #4a4a4a;
`;
const Description = styled.p`
  font-style: normal;
  font-weight: 300;
  line-height: 1.5em;
  font-size: 16px;

  color: rgba(0,0,0, 0.8);

  a,
  a:visited {
    color: #4e6daf;
    text-decoration: none;
    font-weight: 600;
  }
`;
const MissingBlock = styled.div`
  padding-bottom: 20px;
`;

class Warnings extends Component {

  valid() {
    const { ogImage, ogTitle, ogDescription, ogSiteName } = this.props;

    return (
      [ogImage, ogTitle, ogDescription, ogSiteName].filter(item => !!item)
        .length === 4
    );
  }

  ogImageMissing() {
    const { ogImage } = this.props;

    if (!ogImage) {
      return (
        <MissingBlock>
          <Title>The ogImage tag is missing</Title>
          <Description>
            We coudnt find the ogImage tag. Most os social networks use this tag
            to show as an image. Consider fixing this before sharing this URL.{" "}
            <a href="">Learn more...</a>
          </Description>
        </MissingBlock>
      );
    }
  }

  ogDescriptionMissing() {
    const { ogDescription } = this.props;

    if (!ogDescription) {
      return (
        <MissingBlock>
          <Title>The ogDescription tag is missing</Title>
          <Description>
            We coudnt find the ogImage tag. Most os social networks use this tag
            to show as an image. Consider fixing this before sharing this URL.{" "}
            <a href="">Learn more...</a>
          </Description>
        </MissingBlock>
      );
    }
  }

  render() {
    if (this.valid() || !this.props.started) return null;

    return (
      <Container  style={this.props.style}>
        <WarningTitle><img src={sad} /><span>Woops, we found some issues!</span></WarningTitle>
        {this.ogImageMissing()}
        {this.ogDescriptionMissing()}
      </Container>
    );
  }
}

export default Warnings;
