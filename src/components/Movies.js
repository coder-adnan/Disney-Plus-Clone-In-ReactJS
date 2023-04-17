import React from "react";
import styled from "styled-components";
function Movies() {
  return (
    <Container>
      <h4>Recommended For You</h4>
      <Content>
        <Wrap>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcGOH1lSZJ-8FWN9JCMUthnQ74sI5X-qOeinY1s9_qz6jt3jUzSwhwtClDg7q78Ybv4U&usqp=CAU"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcGOH1lSZJ-8FWN9JCMUthnQ74sI5X-qOeinY1s9_qz6jt3jUzSwhwtClDg7q78Ybv4U&usqp=CAU"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcGOH1lSZJ-8FWN9JCMUthnQ74sI5X-qOeinY1s9_qz6jt3jUzSwhwtClDg7q78Ybv4U&usqp=CAU"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcGOH1lSZJ-8FWN9JCMUthnQ74sI5X-qOeinY1s9_qz6jt3jUzSwhwtClDg7q78Ybv4U&usqp=CAU"
            alt=""
          />
        </Wrap>
      </Content>
    </Container>
  );
}

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;
const Container = styled.div``;
const Wrap = styled.div`
cursor: pointer;
border-radius: 10px;
overflow: hidden;
border: 3px solid rgba(249, 249, 249 , 0.1);
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;

  img{
  width: 100%;
  height: 100%;
  object-fit: cover:
  }

  &:hover{
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    border-color: rgba(249, 249, 249 , 0.8);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  }
  `;
export default Movies;
