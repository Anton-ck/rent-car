import styled from '@emotion/styled';
import { sizes } from 'styles/sharedStyles';

export const CarsListWrapper = styled.section`
  max-width: ${sizes.container.width};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 15px;
  padding-bottom: 50px;
`;

export const CarsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  gap: 30px;
  justify-content: center;

  /* outline: 1px solid red; */
`;

export const CarsListItem = styled.li``;
