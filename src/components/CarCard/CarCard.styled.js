import styled from '@emotion/styled/macro';
import { HiOutlineHeart } from 'react-icons/hi';
import { HiHeart } from 'react-icons/hi';

export const CardWrapper = styled.div`
  width: 274px;
  height: 426px;
  padding: 0px 0px 0px 0;
  display: flex;
  flex-direction: column;
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const CarImg = styled.img`
  width: 100%;
  height: 268px;
  object-fit: cover;
  border-radius: 14px;
`;

export const CarInfoWrapper = styled.div`
  width: 100%;
  margin-top: 14px;
`;

export const MainCarInfo = styled.ul`
  display: flex;
  width: 100%;
  gap: 5px;
  font-weight: 500;
  line-height: 24px;
  font-size: 16px;
`;
export const CarInfo = styled.li`
  color: #121417;
`;
export const CarModel = styled.li`
  color: #3470ff;
`;

export const CarAbout = styled.li`
  margin-left: auto;
`;

export const SecondaryCarInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 28px;
`;

export const SecondaryCarInfo = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;

  gap: 4px;
  &:last-child {
    margin-top: 4px;
  }
`;

export const SecondaryCarAbout = styled.li`
  color: rgba(18, 20, 23, 0.5);
  padding-right: 4px;

  &:not(:last-child) {
    border-right: 1px solid rgba(18, 20, 23, 0.2);
  }
`;

export const FavoriteIcon = styled.button`
  position: absolute;
  margin: 0;
  top: 14px;
  right: 14px;
  border: none;
  cursor: pointer;
  background-color: transparent;
`;

export const HeartIcon = styled(HiOutlineHeart)`
  display: block;
  color: rgb(255 255 255 / 80%);
  width: 18px;
  height: 18px;
`;

export const HeartIconBlue = styled(HiHeart)`
  display: block;
  color: #3470ff;
  width: 18px;
  height: 18px;
`;
