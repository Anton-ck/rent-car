import styled from '@emotion/styled';

import HomeScreenSaver from '../../img/HomeScreenSaver.jpg';
import { sizes } from 'styles/sharedStyles';
export const HomeText = styled.p`
  font-family: 'SF Pro Display';
  font-size: 32px;
  font-weight: 600;
  padding: 18px 22px;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 25px;
`;

export const HomeContainer = styled.div`
  background: url(${HomeScreenSaver});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: calc(100vh - ${sizes.header.height});
`;
