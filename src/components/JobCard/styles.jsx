import styled from "styled-components";
import { COLORS } from "../../styles/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 24px 24px;
  border-radius: 10px;
  border: 1px solid ${COLORS.darkRed};
  background-color: ${COLORS.white};
  cursor: pointer;
  margin: 10px 7px;

  &:hover {
    box-shadow: -1px 3px 7px 2px rgb(0, 0, 0, 0.1);
    transition: box-shadow 0.5s;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: baseline;
  }

  img {
    width: 60px;
    border-radius: 10px;

    @media (max-width: 900px) {
      width: 50px;
    }
  }
`;

export const CompanyWithoutLogo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  font-size: 30px;
  font-weight: 700;
  color: ${COLORS.darkPink};

  @media (max-width: 900px) {
    width: 50px;
    height: 50px;
    font-size: 24px;
  }
`;

export const JobCardInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    align-items: baseline;
    flex-direction: column;
  }
`;

export const CompanyName = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${COLORS.darkPink};
  margin: 15px 0;

  @media (max-width: 900px) {
    margin: 7px 0;
  }
`;

export const CardItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  @media (max-width: 900px) {
    flex-wrap: wrap;
    margin-bottom: 15px;
  }
`;

export const CardButton = styled.a`
  cursor: pointer;
  text-decoration: none;
  margin-top: auto;
  padding: 5px;
  min-width: 165px;
  border-radius: 10px;
  color: white !important ;
  background-color: ${COLORS.darkRed};
  text-align: center;
  font-weight: 800;

  @media (max-width: 900px) {
    min-width: 120px;
  }

  &:hover {
    background-color: ${COLORS.darkPink};
    color: ${COLORS.white} !important;
    transition: background 0.5s;
  }
`;

export const CardItem = styled.div`
  display: flex;
  flex-direction: row;
  color: ${COLORS.darkRed};
  font-size: 14px;
  margin-top: 5px;
  margin-right: 10px;
  white-space: nowrap;

  @media (max-width: 900px) {
    font-size: 13px;
    margin-bottom: 10px;
  }
`;

export const LogoContainer = styled.a`
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;

  @media (max-width: 900px) {
    width: 50px;
    heigth: 50px;
  }
`;

export const JobTitle = styled.a`
  font-size: 18px;
  color: ${COLORS.darkRed};
  font-weight: 800;
  text-decoration: none;
  height: 100px;

  &:hover {
    color: ${COLORS.darkPink};
  }

  @media (max-width: 900px) {
    font-size: 16px;
    height: 80px;
  }
`;
