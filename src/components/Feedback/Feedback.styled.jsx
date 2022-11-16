import styled from '@emotion/styled';

export const SectionContainer = styled.div`
  list-style: none;
`;

export const Title = styled.h2`
  margin-top: 30px;
  margin-bottom: 30px;

  color: ${props => props.theme.colors.black};
  font-size: ${props => props.theme.fontSizes.l};
  line-height: ${props => props.theme.lineHeights.body};
  font-weight: ${props => props.theme.fontWeights.bold};
  text-align: center;
`;

export const FeedbackButton = styled.button`
  width: 150px;
  margin-right: 20px;
  padding: 12px 24px;

  font: inherit;
  cursor: pointer;
  outline: none;
  border: ${props => props.theme.borders.none};
  border-radius: ${props => props.theme.radius.normal};

  font-weight: ${props => props.theme.fontWeights.middle};
  color: ${props => props.theme.colors.white};
  background-color: ${props => `${getRangomColor()}`};

  &:hover,
  &:focus {
    scale: 120%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const NotificationText = styled.p`
  color: ${props => props.theme.colors.green};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: ${props => props.theme.lineHeights.heading};
`;

// // ========================================================

export const StatisticsList = styled.ul`
  margin-left: 20px;
  list-style: none;
`;

export const StatisticsItem = styled.li`
  color: ${props => props.theme.colors.black};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: ${props => props.theme.lineHeights.heading};
`;

export const StatisticsText = styled.p`
  margin-top: 30px;
  margin-bottom: 0;
  margin-left: 60px;

  color: ${props => props.theme.colors.black};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: ${props => props.theme.lineHeights.heading};
`;

// Функция случайного цвета
function getRangomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}
function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
}
