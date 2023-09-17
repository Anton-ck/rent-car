import styled from '@emotion/styled';

import HomeScreenSaver from '../../img/HomeScreenSaver.jpg';
import { sizes } from 'styles/sharedStyles';

export const HomeContainer = styled.div`
  background: url(${HomeScreenSaver});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: calc(100vh - ${sizes.header.height});
  margin-bottom: 1cap;
  justify-content: right;
  display: flex;
  flex-direction: column;
`;

export const HomeText = styled.h1`
  align-self: flex-end;
  font-style: italic;
  margin-right: auto;
  margin-left: auto;
  width: 50%;
  font-size: 48px;
  font-weight: 600;
  padding: 38px 122px;
  text-align: right;
  margin-top: 30px;
  color: #163f62;
`;
