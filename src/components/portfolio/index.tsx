import styled, { StyledComponent } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1000px;

  .frcs {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .frcs-gm {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .frcb {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: space-between;
  }

  .frcc {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
  }
  color: white;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .address-filed {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;

    .arrow-filed {
      width: 20px;
      height: 20px;
      background: #373a53;
      border-radius: 6px;
    }
  }

  .metamask-filed {
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    color: #7c7f96;
  }
`;

export const PortfolioTabs = styled.div`
  width: 100%;
  font-family: Gantari;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #7c7f96;
  display: flex;
  align-items: center;
  gap: 2rem;
  .item {
    padding: 0px 20px 20px 20px;
    position: relative;
  }
  .item.active {
    color: white;
  }

  > div {
    cursor: pointer;
  }

  .active-bar {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 4px;
    background: #ebf479;
    border-radius: 2px;
  }
  border-bottom: 1px solid #292c42;
`;

export const NetWorkTab = styled.div<{ active: boolean }>`
  width: 152px;
  height: 50px;
  border-radius: 10px;
  background: #35374980;
  border: 1px solid ${(p) => (p.active ? '#EBF479' : 'transparent')};
  padding: 8px;

  .network-icon-chain {
    width: 36px;
    height: 36px;
    border-radius: 12px;
  }
  .network-name {
    font-family: Gantari;
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: #7c7f96;
    padding-bottom: 2px;
  }
  .usd-value {
    font-family: Gantari;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
  }
  .usd-value-percent {
    font-family: Gantari;
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: #7c7f96;
  }
`;

export const AllNetWorkTab = styled.div`
  width: 152px;
  height: 50px;
  background: linear-gradient(180deg, #eef3bf 0%, #e9f456 100%);
  border-radius: 10px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    cursor: pointer;
  }
  .network-name {
    font-family: Gantari;
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: #7c7f96;
  }
  .usd-value {
    font-family: Gantari;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #2d2f42;
  }
`;

export const NetworkTabWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;

  > div {
    cursor: pointer;
  }
`;

export const HoldingTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;

  padding: 0px 10px;

  position: relative;

  top: 8px;

  .holding-text {
    font-family: Gantari;
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
  }

  .holding-value {
    font-family: Gantari;
    font-size: 24px;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0em;
  }
`;

export const HoldingTable = styled.table`
  width: 100%;
  border-radius: 16px;
  background: #181a27;

  thead {
    border-bottom: 1px solid #373a53;
  }

  thead th {
    font-family: Gantari;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    color: #7c7f96;
    padding: 14px 0;

    > div {
      cursor: pointer;
    }
  }

  thead tr:first-child th:first-child {
    padding-left: 20px;
  }

  thead tr:first-child th:last-child {
    padding-right: 14px;
  }

  tbody td {
    font-family: Gantari;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
    padding: 14px 0px;
  }

  tbody tr td:first-child {
    padding-left: 20px;
  }

  .token-info {
    display: flex;
    align-items: center;
    gap: 8px;
    .token-icon {
      width: 30px;
      height: 30px;
      border-radius: 100%;
    }

    .chain-info {
      display: flex;
      align-items: center;
      gap: 8px;
      padding-top: 2px;
    }

    .chain-icon {
      height: 16px;
      width: 16px;
      border-radius: 8px;
    }
    .chain-name {
      font-family: Gantari;
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
      letter-spacing: 0em;
      text-align: left;
      color: #7c7f96;
    }
  }
`;

export const SortArrowDownWrapper = styled.div<{ active: boolean }>`
  color: ${(p) => (p.active ? '#7C7F96' : '#373A53')};
`;
