import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto auto auto;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;

  title {
    color: #fff;
    font-size: 20px;
  }

  header {
    display: flex;
    align-self: center;
    align-items: center;

    button {
      border: 0;
      background: none;
    }

    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
    height: 100%;

    @media (max-width: 768px) {
      padding: 0px 15px;
    }
  }
`;

export const Time = styled.li`
  padding: 20px;
  background: ${props => (props.avaliable ? '#fe546e' : '#FFE455')};
  opacity: ${props => (props.past ? 0.3 : 1)};
  transition: 0.5s;

  strong {
    display: block;
    color: ${props => (props.avaliable ? '#fff' : '#fe546e')};
    font-size: 20px;
    font-weight: normal;
  }

  span {
    display: block;
    margin-top: 3px;

    color: ${props => (props.avaliable ? '#FFE455' : '#5c4477')};
  }

  &:hover {
    box-shadow: 0px 0px 30px rgba(1, 1, 1, 0.6);
  }
`;
