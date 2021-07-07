import styled from 'styled-components';

const Wrapper = styled.div`
  height: 320px;

  h3 {
    margin: 0;
    font-size: 23px;
  }
`;

const Header = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 5px 10px;
`;

const Body = styled.div`
  padding: 5px 15px;
`;

const ColumnWrapper = styled.div`
  width: 100%;
  padding: 8px 5px;
  position: relative;
  margin: 0 0 10px;

  h4 {
    color: #000;
    margin: 0 0 5px 0;
    fontsize: 14px;
  }
`;

const Layout = {
  Wrapper,
  Header,
  Body,
  ColumnWrapper,
};

export default Layout;
