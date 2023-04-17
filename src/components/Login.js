import React from "react";
import styled from "styled-components";
function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="./images/cta-logo-one.svg"></CTALogoOne>
        <SignUp>get all these</SignUp>
        <Description>
          Disney Login provides users with premier access to the latest Disney
          movies and TV shows, including Raya and the Last Dragon. With a Disney
          account, users can enjoy exclusive content and early screenings of
          upcoming releases.
        </Description>
        <CTALogoTwo src="./images/cta-logo-two.png"></CTALogoTwo>
      </CTA>
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  height: calc(100vh - 10vh);
  display: flex;
  align-items: top;
  justify-content: center;

  &:before {
    background-image: url("./images/login-background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.7;
  }
`;
const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  align-items: center;
`;
const CTALogoOne = styled.img``;
const SignUp = styled.a`
  text-transform: uppercase;
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;
  &:hover {
    background-color: #0493ee;
  }
`;
const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;
const CTALogoTwo = styled.img`
  width: 90%;
`;
export default Login;
