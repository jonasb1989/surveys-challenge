import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  width: 25%;
  margin: 8px 0;

  label {
    font-size: 14px;
    font-weight: bold;
  }

  input {
    cursor: pointer;
  }
`;
