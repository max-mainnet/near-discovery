import styled from 'styled-components';

import { SMALL_SCREEN } from '../near/NearStyleVar';

const SwitchWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  top: 16px;

  @media (max-width: ${SMALL_SCREEN}) {
    /* display: none; */
    transform: rotate(90deg);
  }
`;

const RainbowWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;

  @media (max-width: ${SMALL_SCREEN}) {
    padding-top: 0px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 736px;
  color: #787da1;

  @media (max-width: ${SMALL_SCREEN}) {
    width: 95%;
  }

  .new-transfer-title {
    display: flex;
    width: 100%;
    align-items: center;
    padding-bottom: 8px;
    justify-content: space-between;
    padding-left: 8px;
    .transfer-left {
      font-size: 18px;
      font-weight: 500;
      line-height: 22px;
      letter-spacing: 0em;
      text-align: left;
      color: #787da1;

      @media (max-width: ${SMALL_SCREEN}) {
        font-size: 16px;
      }
    }

    .transfer-right {
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
      letter-spacing: 0em;
      text-align: left;
      display: flex;
      align-items: center;
      color: #979abe;
      gap: 4px;
      cursor: pointer;
    }
  }

  .bridge-title {
    color: #787da1;
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    padding-left: 8px;
    padding-bottom: 8px;
    padding-top: 8px;
    @media (max-width: ${SMALL_SCREEN}) {
      font-size: 15px;
    }
  }

  .choose-bridge-box {
    @media (max-width: ${SMALL_SCREEN}) {
      flex-direction: column;
      justify-content: center;
    }
  }

  .choose-bridge-box-wrapper {
    @media (max-width: ${SMALL_SCREEN}) {
      width: 100%;
    }
  }

  .choose-bridge-wrapper {
    width: 100%;
    border-radius: 12px;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #25283a;

    @media (max-width: ${SMALL_SCREEN}) {
      flex-direction: column;
    }

    .choose-bridge-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      .choose-bridge-box-select {
        display: flex;
        justify-content: space-between;
        padding: 8px;
        width: 313px;

        border-radius: 12px;
        background: #373a53;
        padding-top: 6px;
        .choose-bridge-box-select-name {
          font-size: 18px;
          font-weight: 500;
          line-height: 22px;
          letter-spacing: 0em;
          text-align: left;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 12px;

          .choose-bridge-box-icon {
            width: 36px;
            height: 36px;
            border-radius: 10px;
          }
        }

        @media (max-width: ${SMALL_SCREEN}) {
          width: 100%;
          .choose-bridge-box-select-name {
            font-size: 15px;
            font-weight: 500;
            line-height: 22px;
            letter-spacing: 0em;
            text-align: left;
            color: #ffffff;
            display: flex;
            align-items: center;
            gap: 12px;

            .choose-bridge-box-icon {
              width: 30px;
              height: 30px;
              border-radius: 10px;
            }
          }
        }

        /* button style here */
      }
    }
  }

  .choose-token-wrapper {
    background: #25283a;
    padding: 16px;
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
    border-radius: 12px;
    margin-top: 12px;

    .token-list-wrapper {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
    }
  }

  .input-wrapper {
    display: flex;
    align-items: center;

    .select-token {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 18px;
      font-weight: 500;
      line-height: 22px;
      letter-spacing: 0em;
      text-align: left;

      .select-token-icon {
        width: 30px;
        height: 30px;
        border-radius: 100%;
        background: white;
      }

      @media (max-width: ${SMALL_SCREEN}) {
        .select-token-icon {
          width: 26px;
          height: 26px;
          border-radius: 100%;
          background: white;
        }
        color: white;
        font-size: 15px;
      }
    }
  }

  .price-and-balance-filed {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 8px;
    .balance-value {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .show-tokens-line {
    color: #787da1;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;

    padding-left: 8px;

    margin-bottom: 12px;

    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;

    .show-tokens-line-expand {
      text-decoration: underline;
      cursor: pointer;

      margin-left: 4px;
    }
  }
`;

const RainbowBridgeContainer = styled.div`
  max-width: 1320px;

  margin: auto;
  position: relative;
`;

const Input = styled.input`
  background: none;
  color: white;
  text-align: left;
  border: none;
  outline: none;
  font-style: normal;
  font-size: 26px;
  line-height: 19px;
  padding: 8px 0px 8px 8px;
  width: 100%;
  font-size: 26px;
  font-weight: 500;
  line-height: 31px;
  letter-spacing: 0em;
  text-align: left;
  ::placeholder {
    color: #787da1;
  }
`;

const Separator = styled.div`
  width: 100%;
  background: #787da1;
  height: 1px;
  opacity: 0.5;
`;

const Button = styled.div`
  background: #00ffa3;
  width: 100%;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  height: 60px;
  cursor: pointer;
  margin-top: 26px;

  @media (max-width: ${SMALL_SCREEN}) {
    height: 40px;
    font-size: 16px;
  }
`;

const TokenDark = styled.div`
  opacity: 0.5;
  width: max-content;
  height: 36px;
  color: white;
  border-radius: 23px;
  background: #373a53;
  display: flex;
  align-items: center;
  border: 1px solid transparent;
  gap: 4px;
  padding-left: 2px;
  padding-right: 8px;

  .token-icon {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    background: white;
  }
`;

const TokenLight = styled.div`
  width: max-content;
  height: 36px;
  color: white;
  border-radius: 23px;
  background: #373a53;
  display: flex;
  align-items: center;
  gap: 4px;
  padding-left: 2px;
  cursor: pointer;
  padding-right: 8px;
  border: 1px solid transparent;
  :hover {
    background: #1e202f;
    border: 1px solid #00ffa3;
  }
  .token-icon {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    background: white;
  }
`;

export {
  Button,
  Separator,
  Input,
  Wrapper,
  SwitchWrapper,
  TokenDark,
  TokenLight,
  RainbowWrapper,
  RainbowBridgeContainer,
};
