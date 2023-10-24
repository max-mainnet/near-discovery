import React, { useEffect, useState } from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import styled from 'styled-components';

import { useDefaultLayout } from '@/hooks/useLayout';
import type { NextPageWithLayout } from '@/utils/types';

import { ethers } from 'ethers';
import { useEthersProviderContext } from '@/data/web3';
import useEthersSender from '@/hooks/useEthersSender';

import Big from 'big.js';

import {
  DefaultProfileIcon,
  MetaMaskIcon,
  ArrowDone,
  AllNetWorkIcon,
  sortArrowDown,
} from '@/components/portfolio/imgs';

import {
  Wrapper,
  Profile,
  PortfolioTabs,
  NetworkTabWrapper,
  NetWorkTab,
  AllNetWorkTab,
  HoldingTitle,
  HoldingTable,
  SortArrowDownWrapper,
} from '@/components/portfolio';

import { formateAddress, formateValue } from '@/utils/formate';

const PortfolioDailyData: NextPageWithLayout = () => {
  const ChartContainer = styled.div`
    color: #fff;
    width: 425px;
    height: 100px;
  `;

  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://api.debank.com/asset/net_curve_24h?user_addr=0xc25d79fc4970479b88068ce8891ed9be5799210d');
  //       const jsonData = await response.json();
  //       const formattedData = jsonData.data.usd_value_list.map((item: any[]) => ({
  //         name: new Date(item[0] * 1000).toLocaleTimeString(),
  //         uv: item[1],
  //       }));
  //       setData(formattedData);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <ChartContainer>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={200}
          height={60}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#63C341" />
              <stop offset="100%" stopColor="rgba(99, 195, 65, 0)" />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="transparent" />
          <XAxis dataKey="name" tick={false} axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tick={false} tickLine={false} />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#63C341" fill="url(#gradient)" />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

const useAllTokenList = () => {
  const [sortBy, setSortBy] = useState<'usd_value' | 'price' | 'amount'>('usd_value');

  const allChainsBalance = {
    total_usd_value: 1726.1749728283191,
    chain_list: [
      {
        id: 'hmy',
        community_id: 1666600000,
        name: 'Harmony',
        native_token_id: 'hmy',
        logo_url: 'https://static.debank.com/image/chain/logo_url/hmy/b3bfb4681f81a85e25c28e150dcbfe51.png',
        wrapped_token_id: '0xcf664087a5bb0237a0bad6742852ec6c8d69a27a',
        is_support_pre_exec: true,
        usd_value: 0,
      },
      {
        id: 'brise',
        community_id: 32520,
        name: 'Bitgert',
        native_token_id: 'brise',
        logo_url: 'https://static.debank.com/image/chain/logo_url/brise/4f6c040cf49f4d8c4eabbad7cd2f4ae4.png',
        wrapped_token_id: '0x0eb9036cbe0f052386f36170c6b07ef0a0e3f710',
        is_support_pre_exec: true,
        usd_value: 0,
      },
      {
        id: 'linea',
        community_id: 59144,
        name: 'Linea',
        native_token_id: 'linea',
        logo_url: 'https://static.debank.com/image/chain/logo_url/linea/32d4ff2cf92c766ace975559c232179c.png',
        wrapped_token_id: '0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f',
        is_support_pre_exec: true,
        usd_value: 36.9101240530139,
      },
      {
        id: 'wemix',
        community_id: 1111,
        name: 'WEMIX',
        native_token_id: 'wemix',
        logo_url: 'https://static.debank.com/image/chain/logo_url/wemix/d1ba88d1df6cca0b0cb359c36a09c054.png',
        wrapped_token_id: '0x7d72b22a74a216af4a002a1095c8c707d6ec1c5f',
        is_support_pre_exec: true,
        usd_value: 0,
      },
      {
        id: 'xdai',
        community_id: 100,
        name: 'Gnosis Chain',
        native_token_id: 'xdai',
        logo_url: 'https://static.debank.com/image/chain/logo_url/xdai/43c1e09e93e68c9f0f3b132976394529.png',
        wrapped_token_id: '0xe91d153e0b41518a2ce8dd3d7944fa863463a97d',
        is_support_pre_exec: true,
        usd_value: 4.493398358444592,
      },
      {
        id: 'rose',
        community_id: 42262,
        name: 'Oasis Emerald',
        native_token_id: 'rose',
        logo_url: 'https://static.debank.com/image/chain/logo_url/rose/33ade55b0f3efa10e9eec002c6417257.png',
        wrapped_token_id: '0x21c718c22d52d0f3a789b752d4c2fd5908a8a733',
        is_support_pre_exec: false,
        usd_value: 0,
      },
      {
        id: 'tlos',
        community_id: 40,
        name: 'Telos',
        native_token_id: 'tlos',
        logo_url: 'https://static.debank.com/image/chain/logo_url/telos/f9f7493def4c08ed222540bebd8ce87a.png',
        wrapped_token_id: '0xd102ce6a4db07d247fcc28f366a623df0938ca9e',
        is_support_pre_exec: false,
        usd_value: 0,
      },
      {
        id: 'aurora',
        community_id: 1313161554,
        name: 'Aurora',
        native_token_id: 'aurora',
        logo_url: 'https://static.debank.com/image/chain/logo_url/aurora/da491099bb44690eda122cdd67c5c610.png',
        wrapped_token_id: '0xc9bdeed33cd01541e1eed10f90519d2c06fe3feb',
        is_support_pre_exec: true,
        usd_value: 0,
      },
      {
        id: 'base',
        community_id: 8453,
        name: 'Base',
        native_token_id: 'base',
        logo_url: 'https://static.debank.com/image/chain/logo_url/base/ccc1513e4f390542c4fb2f4b88ce9579.png',
        wrapped_token_id: '0x4200000000000000000000000000000000000006',
        is_support_pre_exec: true,
        usd_value: 202.2528622703993,
      },
      {
        id: 'celo',
        community_id: 42220,
        name: 'Celo',
        native_token_id: 'celo',
        logo_url: 'https://static.debank.com/image/chain/logo_url/celo/41da5c1d3c0945ae822a1f85f02c76cf.png',
        wrapped_token_id: '0x471ece3750da237f93b8e339c536989b8978a438',
        is_support_pre_exec: true,
        usd_value: 0.0,
      },
      {
        id: 'fuse',
        community_id: 122,
        name: 'Fuse',
        native_token_id: 'fuse',
        logo_url: 'https://static.debank.com/image/chain/logo_url/fuse/36dfb6fe8e9770367976dd4d2286a9ef.png',
        wrapped_token_id: '0x0be9e53fd7edac9f859882afdda116645287c629',
        is_support_pre_exec: true,
        usd_value: 0,
      },
      {
        id: 'loot',
        community_id: 5151706,
        name: 'Loot',
        native_token_id: 'loot',
        logo_url: 'https://static.debank.com/image/chain/logo_url/loot/0f098333a1a4f474115b05862e680573.png',
        wrapped_token_id: '0x4fa214c9e33d481996bec77c443245fbaee85670',
        is_support_pre_exec: false,
        usd_value: 0,
      },
      {
        id: 'klay',
        community_id: 8217,
        name: 'Klaytn',
        native_token_id: 'klay',
        logo_url: 'https://static.debank.com/image/chain/logo_url/klay/1df018b8493cb97c50b7e390ef63cba4.png',
        wrapped_token_id: '0xe4f05a66ec68b54a58b17c22107b02e0232cc817',
        is_support_pre_exec: true,
        usd_value: 0.0,
      },
      {
        id: 'btt',
        community_id: 199,
        name: 'BitTorrent',
        native_token_id: 'btt',
        logo_url: 'https://static.debank.com/image/chain/logo_url/btt/2130a8d57ff2a0f3d50a4ec9432897c6.png',
        wrapped_token_id: '0x197a4ed2b1bb607e47a144b9731d7d34f86e9686',
        is_support_pre_exec: true,
        usd_value: 0.0,
      },
      {
        id: 'fx',
        community_id: 530,
        name: 'Function X',
        native_token_id: 'fx',
        logo_url: 'https://static.debank.com/image/chain/logo_url/fx/6fee82420b2394e0b68d7d7e692a0a01.png',
        wrapped_token_id: '0x80b5a32e4f032b2a058b4f29ec95eefeeb87adcd',
        is_support_pre_exec: false,
        usd_value: 0,
      },
      {
        id: 'palm',
        community_id: 11297108109,
        name: 'Palm',
        native_token_id: 'palm',
        logo_url: 'https://static.debank.com/image/chain/logo_url/palm/ece828c59e643b8a8a13aa99145ae7d7.png',
        wrapped_token_id: '0xf98cabf0a963452c5536330408b2590567611a71',
        is_support_pre_exec: true,
        usd_value: 0,
      },
      {
        id: 'nova',
        community_id: 42170,
        name: 'Arbitrum Nova',
        native_token_id: 'nova',
        logo_url: 'https://static.debank.com/image/chain/logo_url/nova/06eb2b7add8ba443d5b219c04089c326.png',
        wrapped_token_id: '0x722e8bdd2ce80a4422e880164f2079488e115365',
        is_support_pre_exec: true,
        usd_value: 0.0,
      },
      {
        id: 'cro',
        community_id: 25,
        name: 'Cronos',
        native_token_id: 'cro',
        logo_url: 'https://static.debank.com/image/chain/logo_url/cro/f947000cc879ee8ffa032793808c741c.png',
        wrapped_token_id: '0x5c7f8a570d578ed84e63fdfa7b1ee72deae1ae23',
        is_support_pre_exec: true,
        usd_value: 0,
      },
      {
        id: 'pgn',
        community_id: 424,
        name: 'PGN',
        native_token_id: 'pgn',
        logo_url: 'https://static.debank.com/image/chain/logo_url/pgn/55e8dbdfeb4ca88443e04206da3fcb7f.png',
        wrapped_token_id: '',
        is_support_pre_exec: false,
        usd_value: 0,
      },
      {
        id: 'fsn',
        community_id: 32659,
        name: 'Fusion',
        native_token_id: 'fsn',
        logo_url: 'https://static.debank.com/image/chain/logo_url/fsn/047789979f0b5733602b29517753bdf3.png',
        wrapped_token_id: '0x0c05c5710af74d36b4d3bd5460475c20ceca8fe3',
        is_support_pre_exec: false,
        usd_value: 0,
      },
      {
        id: 'lyx',
        community_id: 42,
        name: 'LUKSO',
        native_token_id: 'lyx',
        logo_url: 'https://static.debank.com/image/chain/logo_url/lyx/dbe6eef57e66817e61297d9b188248ed.png',
        wrapped_token_id: '',
        is_support_pre_exec: true,
        usd_value: 0,
      },
      {
        id: 'rsk',
        community_id: 30,
        name: 'RSK',
        native_token_id: 'rsk',
        logo_url: 'https://static.debank.com/image/chain/logo_url/rsk/ff47def89fba98394168bf5f39920c8c.png',
        wrapped_token_id: '0x542fda317318ebf1d3deaf76e0b632741a7e677d',
        is_support_pre_exec: false,
        usd_value: 0,
      },
      {
        id: 'tomb',
        community_id: 6969,
        name: 'TOMB Chain',
        native_token_id: 'tomb',
        logo_url: 'https://static.debank.com/image/chain/logo_url/tomb/eee88f95c46faa10762514b44655a6a1.png',
        wrapped_token_id: '0xdeaddeaddeaddeaddeaddeaddeaddeaddead0000',
        is_support_pre_exec: true,
        usd_value: 0,
      },
      {
        id: 'arb',
        community_id: 42161,
        name: 'Arbitrum',
        native_token_id: 'arb',
        logo_url: 'https://static.debank.com/image/chain/logo_url/arb/854f629937ce94bebeb2cd38fb336de7.png',
        wrapped_token_id: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
        is_support_pre_exec: true,
        usd_value: 246.5436032409305,
      },
      {
        id: 'kava',
        community_id: 2222,
        name: 'Kava',
        native_token_id: 'kava',
        logo_url: 'https://static.debank.com/image/chain/logo_url/kava/b26bf85a1a817e409f9a3902e996dc21.png',
        wrapped_token_id: '0xc86c7c0efbd6a49b35e8714c5f59d99de09a225b',
        is_support_pre_exec: true,
        usd_value: 0,
      },
      {
        id: 'ron',
        community_id: 2020,
        name: 'Ronin',
        native_token_id: 'ron',
        logo_url: 'https://static.debank.com/image/chain/logo_url/ron/6e0f509804bc83bf042ef4d674c1c5ee.png',
        wrapped_token_id: '0xe514d9deb7966c8be0ca922de8a064264ea6bcd4',
        is_support_pre_exec: true,
        usd_value: 0,
      },
      {
        id: 'wan',
        community_id: 888,
        name: 'Wanchain',
        native_token_id: 'wan',
        logo_url: 'https://static.debank.com/image/chain/logo_url/wan/f3aa8b31414732ea5e026e05665146e6.png',
        wrapped_token_id: '0xdabd997ae5e4799be47d6e69d9431615cba28f48',
        is_support_pre_exec: true,
        usd_value: 0,
      },
      {
        id: 'mobm',
        community_id: 1284,
        name: 'Moonbeam',
        native_token_id: 'mobm',
        logo_url: 'https://static.debank.com/image/chain/logo_url/mobm/a8442077d76b258297181c3e6eb8c9cc.png',
        wrapped_token_id: '0xacc15dc74880c9944775448304b263d191c6077f',
        is_support_pre_exec: true,
        usd_value: 0,
      },
      {
        id: 'sbch',
        community_id: 10000,
        name: 'SmartBch',
        native_token_id: 'sbch',
        logo_url: 'https://static.debank.com/image/chain/logo_url/sbch/d78ac780803e7f0a17b73558f423502e.png',
        wrapped_token_id: '0x3743ec0673453e5009310c727ba4eaf7b3a1cc04',
        is_support_pre_exec: false,
        usd_value: 0,
      },
      {
        id: 'metis',
        community_id: 1088,
        name: 'Metis',
        native_token_id: 'metis',
        logo_url: 'https://static.debank.com/image/chain/logo_url/metis/b289da32db4d860ebf6fb46a6e41dcfc.png',
        wrapped_token_id: '0x75cb093e4d61d2a2e65d8e0bbb01de8d89b53481',
        is_support_pre_exec: true,
        usd_value: 2.049027209219594,
      },
      {
        id: 'sdn',
        community_id: 336,
        name: 'Shiden',
        native_token_id: 'sdn',
        logo_url: 'https://static.debank.com/image/chain/logo_url/sdn/0baaa4ee7cb16feed71119b062ccd277.png',
        wrapped_token_id: '0x0f933dc137d21ca519ae4c7e93f87a4c8ef365ef',
        is_support_pre_exec: true,
        usd_value: 0,
      },
      {
        id: 'kcc',
        community_id: 321,
        name: 'KCC',
        native_token_id: 'kcc',
        logo_url: 'https://static.debank.com/image/chain/logo_url/kcc/3a5a4ef7d5f1db1e53880d70219d75b6.png',
        wrapped_token_id: '0x4446fc4eb47f2f6586f9faab68b3498f86c07521',
        is_support_pre_exec: true,
        usd_value: 0,
      },
      {
        id: 'manta',
        community_id: 169,
        name: 'Manta Pacific',
        native_token_id: 'manta',
        logo_url: 'https://static.debank.com/image/chain/logo_url/manta/0e25a60b96a29d6a5b9e524be7565845.png',
        wrapped_token_id: '0x0dc808adce2099a9f62aa87d9670745aba741746',
        is_support_pre_exec: false,
        usd_value: 0,
      },
      {
        id: 'mtr',
        community_id: 82,
        name: 'Meter',
        native_token_id: 'mtr',
        logo_url: 'https://static.debank.com/image/chain/logo_url/mtr/2dc6f079f52ca22778eb684e1ce650b3.png',
        wrapped_token_id: '0x160361ce13ec33c993b5cca8f62b6864943eb083',
        is_support_pre_exec: false,
        usd_value: 0,
      },
      {
        id: 'shib',
        community_id: 109,
        name: 'Shibarium',
        native_token_id: 'shib',
        logo_url: 'https://static.debank.com/image/chain/logo_url/shib/4ec79ed9ee4988dfdfc41e1634a447be.png',
        wrapped_token_id: '0x213c25900f365f1be338df478cd82bef7fd43f85',
        is_support_pre_exec: false,
        usd_value: 0.0,
      },
      {
        id: 'era',
        community_id: 324,
        name: 'zkSync Era',
        native_token_id: 'era',
        logo_url: 'https://static.debank.com/image/chain/logo_url/era/2cfcd0c8436b05d811b03935f6c1d7da.png',
        wrapped_token_id: '0x5aea5775959fbc2557cc8789bc1bf90a239d9a91',
        is_support_pre_exec: false,
        usd_value: 220.41949194116506,
      },
      {
        id: 'doge',
        community_id: 2000,
        name: 'Dogechain',
        native_token_id: 'doge',
        logo_url: 'https://static.debank.com/image/chain/logo_url/doge/2538141079688a7a43bc22c7b60fb45f.png',
        wrapped_token_id: '0xb7ddc6414bf4f5515b52d8bdd69973ae205ff101',
        is_support_pre_exec: false,
        usd_value: 0,
      },
      {
        id: 'sgb',
        community_id: 19,
        name: 'Songbird',
        native_token_id: 'sgb',
        logo_url: 'https://static.debank.com/image/chain/logo_url/sgb/619f46d574d62a50bdfd9f0e2f47ddc1.png',
        wrapped_token_id: '0x02f0826ef6ad107cfc861152b32b52fd11bab9ed',
        is_support_pre_exec: true,
        usd_value: 0,
      },
      {
        id: 'astar',
        community_id: 592,
        name: 'Astar',
        native_token_id: 'astar',
        logo_url: 'https://static.debank.com/image/chain/logo_url/astar/398c7e0014bdada3d818367a7273fabe.png',
        wrapped_token_id: '0xaeaaf0e2c81af264101b9129c00f4440ccf0f720',
        is_support_pre_exec: true,
        usd_value: 0,
      },
      {
        id: 'zora',
        community_id: 7777777,
        name: 'Zora',
        native_token_id: 'zora',
        logo_url: 'https://static.debank.com/image/chain/logo_url/zora/de39f62c4489a2359d5e1198a8e02ef1.png',
        wrapped_token_id: '0x4200000000000000000000000000000000000006',
        is_support_pre_exec: false,
        usd_value: 0,
      },
      {
        id: 'pze',
        community_id: 1101,
        name: 'Polygon zkEVM',
        native_token_id: 'pze',
        logo_url: 'https://static.debank.com/image/chain/logo_url/pze/a2276dce2d6a200c6148fb975f0eadd3.png',
        wrapped_token_id: '0x4f9a0e7fd2bf6067db6994cf12e4495df938e6e9',
        is_support_pre_exec: false,
        usd_value: 126.0093129829513,
      },
      {
        id: 'movr',
        community_id: 1285,
        name: 'Moonriver',
        native_token_id: 'movr',
        logo_url: 'https://static.debank.com/image/chain/logo_url/movr/4b0de5a711b437f187c0d0f15cc0398b.png',
        wrapped_token_id: '0x98878b06940ae243284ca214f92bb71a2b032b8a',
        is_support_pre_exec: true,
        usd_value: 0,
      },
      {
        id: 'flr',
        community_id: 14,
        name: 'Flare',
        native_token_id: 'flr',
        logo_url: 'https://static.debank.com/image/chain/logo_url/flr/9ee03d5d7036ad9024e81d55596bb4dc.png',
        wrapped_token_id: '0x1d80c49bbbcd1c0911346656b529df9e5c2f783d',
        is_support_pre_exec: true,
        usd_value: 0,
      },
      {
        id: 'mada',
        community_id: 2001,
        name: 'Milkomeda C1',
        native_token_id: 'mada',
        logo_url: 'https://static.debank.com/image/chain/logo_url/mada/cdc4b1112c2c5a2757cbda33f4476b7f.png',
        wrapped_token_id: '0xae83571000af4499798d1e3b0fa0070eb3a3e3f9',
        is_support_pre_exec: false,
        usd_value: 0,
      },
      {
        id: 'dfk',
        community_id: 53935,
        name: 'DFK',
        native_token_id: 'dfk',
        logo_url: 'https://static.debank.com/image/chain/logo_url/dfk/233867c089c5b71be150aa56003f3f7a.png',
        wrapped_token_id: '0xccb93dabd71c8dad03fc4ce5559dc3d89f67a260',
        is_support_pre_exec: true,
        usd_value: 0,
      },
      {
        id: 'eth',
        community_id: 1,
        name: 'Ethereum',
        native_token_id: 'eth',
        logo_url: 'https://static.debank.com/image/chain/logo_url/eth/42ba589cd077e7bdd97db6480b0ff61d.png',
        wrapped_token_id: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
        is_support_pre_exec: true,
        usd_value: 396.57391292578484,
      },
      {
        id: 'cfx',
        community_id: 1030,
        name: 'Conflux',
        native_token_id: 'cfx',
        logo_url: 'https://static.debank.com/image/chain/logo_url/cfx/eab0c7304c6820b48b2a8d0930459b82.png',
        wrapped_token_id: '0x14b2d3bc65e74dae1030eafd8ac30c533c976a9b',
        is_support_pre_exec: true,
        usd_value: 0,
      },
      {
        id: 'tenet',
        community_id: 1559,
        name: 'Tenet',
        native_token_id: 'tenet',
        logo_url: 'https://static.debank.com/image/chain/logo_url/tenet/803be22e467ee9a5abe00d69a9c3ea4f.png',
        wrapped_token_id: '0xd6cb8a253e12893b0cf39ca78f7d858652cca1fe',
        is_support_pre_exec: false,
        usd_value: 0,
      },
      {
        id: 'matic',
        community_id: 137,
        name: 'Polygon',
        native_token_id: 'matic',
        logo_url: 'https://static.debank.com/image/chain/logo_url/matic/52ca152c08831e4765506c9bd75767e8.png',
        wrapped_token_id: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
        is_support_pre_exec: true,
        usd_value: 14.456613096503837,
      },
      {
        id: 'evmos',
        community_id: 9001,
        name: 'EvmOS',
        native_token_id: 'evmos',
        logo_url: 'https://static.debank.com/image/chain/logo_url/evmos/26e038b4d5475d5a4b92f7fc08bdabc9.png',
        wrapped_token_id: '0xd4949664cd82660aae99bedc034a0dea8a0bd517',
        is_support_pre_exec: false,
        usd_value: 0,
      },
      {
        id: 'okt',
        community_id: 66,
        name: 'OKC',
        native_token_id: 'okt',
        logo_url: 'https://static.debank.com/image/chain/logo_url/okt/428bf6035abb3863c9f5c1a10dc3afd3.png',
        wrapped_token_id: '0x8f8526dbfd6e38e3d8307702ca8469bae6c56c15',
        is_support_pre_exec: true,
        usd_value: 0,
      },
      {
        id: 'heco',
        community_id: 128,
        name: 'HECO',
        native_token_id: 'heco',
        logo_url: 'https://static.debank.com/image/chain/logo_url/heco/db5152613c669e0cc8624d466d6c94ea.png',
        wrapped_token_id: '0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f',
        is_support_pre_exec: true,
        usd_value: 0,
      },
      {
        id: 'boba',
        community_id: 288,
        name: 'Boba',
        native_token_id: 'boba',
        logo_url: 'https://static.debank.com/image/chain/logo_url/boba/e43d79cd8088ceb3ea3e4a240a75728f.png',
        wrapped_token_id: '0xdeaddeaddeaddeaddeaddeaddeaddeaddead0000',
        is_support_pre_exec: true,
        usd_value: 0,
      },
      {
        id: 'core',
        community_id: 1116,
        name: 'CORE',
        native_token_id: 'core',
        logo_url: 'https://static.debank.com/image/chain/logo_url/core/ccc02f660e5dd410b23ca3250ae7c060.png',
        wrapped_token_id: '0x40375c92d9faf44d2f9db9bd9ba41a3317a2404f',
        is_support_pre_exec: true,
        usd_value: 0,
      },
      {
        id: 'op',
        community_id: 10,
        name: 'Optimism',
        native_token_id: 'op',
        logo_url: 'https://static.debank.com/image/chain/logo_url/op/01ae734fe781c9c2ae6a4cc7e9244056.png',
        wrapped_token_id: '0x4200000000000000000000000000000000000006',
        is_support_pre_exec: true,
        usd_value: 40.23550663173428,
      },
      {
        id: 'opbnb',
        community_id: 204,
        name: 'opBNB',
        native_token_id: 'opbnb',
        logo_url: 'https://static.debank.com/image/chain/logo_url/opbnb/07e2e686e363a842d0982493638e1285.png',
        wrapped_token_id: '0x4200000000000000000000000000000000000006',
        is_support_pre_exec: true,
        usd_value: 0,
      },
      {
        id: 'bsc',
        community_id: 56,
        name: 'BNB Chain',
        native_token_id: 'bsc',
        logo_url: 'https://static.debank.com/image/chain/logo_url/bsc/bc73fa84b7fc5337905e527dadcbc854.png',
        wrapped_token_id: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
        is_support_pre_exec: true,
        usd_value: 13.14236118127962,
      },
      {
        id: 'eos',
        community_id: 17777,
        name: 'EOS EVM',
        native_token_id: 'eos',
        logo_url: 'https://static.debank.com/image/chain/logo_url/eos/7e3122a9ce6f9d522e6d5519d43b6a72.png',
        wrapped_token_id: '0xc00592aa41d32d137dc480d9f6d0df19b860104f',
        is_support_pre_exec: false,
        usd_value: 0,
      },
      {
        id: 'oas',
        community_id: 248,
        name: 'Oasys',
        native_token_id: 'oas',
        logo_url: 'https://static.debank.com/image/chain/logo_url/oas/69e424154c30984ff4d5ba916591ac2a.png',
        wrapped_token_id: '0x5200000000000000000000000000000000000001',
        is_support_pre_exec: true,
        usd_value: 0,
      },
      {
        id: 'mnt',
        community_id: 5000,
        name: 'Mantle',
        native_token_id: 'mnt',
        logo_url: 'https://static.debank.com/image/chain/logo_url/mnt/0af11a52431d60ded59655c7ca7e1475.png',
        wrapped_token_id: '0x78c1b0c915c4faa5fffa6cabf0219da63d7f4cb8',
        is_support_pre_exec: true,
        usd_value: 345.49174828732083,
      },
      {
        id: 'etc',
        community_id: 61,
        name: 'Ethereum Classic',
        native_token_id: 'etc',
        logo_url: 'https://static.debank.com/image/chain/logo_url/etc/7ccf90ee6822ab440fb603337da256fa.png',
        wrapped_token_id: '0x82a618305706b14e7bcf2592d4b9324a366b6dad',
        is_support_pre_exec: true,
        usd_value: 0,
      },
      {
        id: 'pls',
        community_id: 369,
        name: 'Pulse',
        native_token_id: 'pls',
        logo_url: 'https://static.debank.com/image/chain/logo_url/pls/aa6be079fa9eb568e02150734ebb3db0.png',
        wrapped_token_id: '0xa1077a294dde1b09bb078844df40758a5d0f9a27',
        is_support_pre_exec: true,
        usd_value: 0,
      },
      {
        id: 'ftm',
        community_id: 250,
        name: 'Fantom',
        native_token_id: 'ftm',
        logo_url: 'https://static.debank.com/image/chain/logo_url/ftm/14133435f89637157a4405e954e1b1b2.png',
        wrapped_token_id: '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83',
        is_support_pre_exec: true,
        usd_value: 0.0,
      },
      {
        id: 'scrl',
        community_id: 534352,
        name: 'Scroll',
        native_token_id: 'scrl',
        logo_url: 'https://static.debank.com/image/chain/logo_url/scrl/1fa5c7e0bfd353ed0a97c1476c9c42d2.png',
        wrapped_token_id: '0x5300000000000000000000000000000000000004',
        is_support_pre_exec: false,
        usd_value: 0,
      },
      {
        id: 'canto',
        community_id: 7700,
        name: 'Canto',
        native_token_id: 'canto',
        logo_url: 'https://static.debank.com/image/chain/logo_url/canto/47574ef619e057d2c6bbce1caba57fb6.png',
        wrapped_token_id: '0x826551890dc65655a0aceca109ab11abdbd7a07b',
        is_support_pre_exec: true,
        usd_value: 0,
      },
      {
        id: 'step',
        community_id: 1234,
        name: 'Step',
        native_token_id: 'step',
        logo_url: 'https://static.debank.com/image/chain/logo_url/step/db79600b8feafe17845617ca9c606dbe.png',
        wrapped_token_id: '0xb58a9d5920af6ac1a9522b0b10f55df16686d1b6',
        is_support_pre_exec: true,
        usd_value: 0,
      },
      {
        id: 'avax',
        community_id: 43114,
        name: 'Avalanche',
        native_token_id: 'avax',
        logo_url: 'https://static.debank.com/image/chain/logo_url/avax/4d1649e8a0c7dec9de3491b81807d402.png',
        wrapped_token_id: '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7',
        is_support_pre_exec: true,
        usd_value: 77.59701064957147,
      },
      {
        id: 'iotx',
        community_id: 4689,
        name: 'IoTeX',
        native_token_id: 'iotx',
        logo_url: 'https://static.debank.com/image/chain/logo_url/iotx/d3be2cd8677f86bd9ab7d5f3701afcc9.png',
        wrapped_token_id: '0xa00744882684c3e4747faefd68d283ea44099d03',
        is_support_pre_exec: false,
        usd_value: 0,
      },
      {
        id: 'ckb',
        community_id: 71402,
        name: 'Godwoken',
        native_token_id: 'ckb',
        logo_url: 'https://static.debank.com/image/chain/logo_url/ckb/e821893503104870d5e73f56dbd73746.png',
        wrapped_token_id: '0xc296f806d15e97243a08334256c705ba5c5754cd',
        is_support_pre_exec: false,
        usd_value: 0,
      },
    ],
  };

  const allChainList = [
    {
      id: 'eos',
      community_id: 17777,
      name: 'EOS EVM',
      native_token_id: 'eos',
      logo_url: 'https://static.debank.com/image/chain/logo_url/eos/7e3122a9ce6f9d522e6d5519d43b6a72.png',
      wrapped_token_id: '0xc00592aa41d32d137dc480d9f6d0df19b860104f',
      is_support_pre_exec: false,
    },
    {
      id: 'sgb',
      community_id: 19,
      name: 'Songbird',
      native_token_id: 'sgb',
      logo_url: 'https://static.debank.com/image/chain/logo_url/sgb/619f46d574d62a50bdfd9f0e2f47ddc1.png',
      wrapped_token_id: '0x02f0826ef6ad107cfc861152b32b52fd11bab9ed',
      is_support_pre_exec: true,
    },
    {
      id: 'base',
      community_id: 8453,
      name: 'Base',
      native_token_id: 'base',
      logo_url: 'https://static.debank.com/image/chain/logo_url/base/ccc1513e4f390542c4fb2f4b88ce9579.png',
      wrapped_token_id: '0x4200000000000000000000000000000000000006',
      is_support_pre_exec: true,
    },
    {
      id: 'ckb',
      community_id: 71402,
      name: 'Godwoken',
      native_token_id: 'ckb',
      logo_url: 'https://static.debank.com/image/chain/logo_url/ckb/e821893503104870d5e73f56dbd73746.png',
      wrapped_token_id: '0xc296f806d15e97243a08334256c705ba5c5754cd',
      is_support_pre_exec: false,
    },
    {
      id: 'boba',
      community_id: 288,
      name: 'Boba',
      native_token_id: 'boba',
      logo_url: 'https://static.debank.com/image/chain/logo_url/boba/e43d79cd8088ceb3ea3e4a240a75728f.png',
      wrapped_token_id: '0xdeaddeaddeaddeaddeaddeaddeaddeaddead0000',
      is_support_pre_exec: true,
    },
    {
      id: 'flr',
      community_id: 14,
      name: 'Flare',
      native_token_id: 'flr',
      logo_url: 'https://static.debank.com/image/chain/logo_url/flr/9ee03d5d7036ad9024e81d55596bb4dc.png',
      wrapped_token_id: '0x1d80c49bbbcd1c0911346656b529df9e5c2f783d',
      is_support_pre_exec: true,
    },
    {
      id: 'eth',
      community_id: 1,
      name: 'Ethereum',
      native_token_id: 'eth',
      logo_url: 'https://static.debank.com/image/chain/logo_url/eth/42ba589cd077e7bdd97db6480b0ff61d.png',
      wrapped_token_id: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      is_support_pre_exec: true,
    },
    {
      id: 'tomb',
      community_id: 6969,
      name: 'TOMB Chain',
      native_token_id: 'tomb',
      logo_url: 'https://static.debank.com/image/chain/logo_url/tomb/eee88f95c46faa10762514b44655a6a1.png',
      wrapped_token_id: '0xdeaddeaddeaddeaddeaddeaddeaddeaddead0000',
      is_support_pre_exec: true,
    },
    {
      id: 'mobm',
      community_id: 1284,
      name: 'Moonbeam',
      native_token_id: 'mobm',
      logo_url: 'https://static.debank.com/image/chain/logo_url/mobm/a8442077d76b258297181c3e6eb8c9cc.png',
      wrapped_token_id: '0xacc15dc74880c9944775448304b263d191c6077f',
      is_support_pre_exec: true,
    },
    {
      id: 'cfx',
      community_id: 1030,
      name: 'Conflux',
      native_token_id: 'cfx',
      logo_url: 'https://static.debank.com/image/chain/logo_url/cfx/eab0c7304c6820b48b2a8d0930459b82.png',
      wrapped_token_id: '0x14b2d3bc65e74dae1030eafd8ac30c533c976a9b',
      is_support_pre_exec: true,
    },
    {
      id: 'okt',
      community_id: 66,
      name: 'OKC',
      native_token_id: 'okt',
      logo_url: 'https://static.debank.com/image/chain/logo_url/okt/428bf6035abb3863c9f5c1a10dc3afd3.png',
      wrapped_token_id: '0x8f8526dbfd6e38e3d8307702ca8469bae6c56c15',
      is_support_pre_exec: true,
    },
    {
      id: 'mada',
      community_id: 2001,
      name: 'Milkomeda C1',
      native_token_id: 'mada',
      logo_url: 'https://static.debank.com/image/chain/logo_url/mada/cdc4b1112c2c5a2757cbda33f4476b7f.png',
      wrapped_token_id: '0xae83571000af4499798d1e3b0fa0070eb3a3e3f9',
      is_support_pre_exec: false,
    },
    {
      id: 'movr',
      community_id: 1285,
      name: 'Moonriver',
      native_token_id: 'movr',
      logo_url: 'https://static.debank.com/image/chain/logo_url/movr/4b0de5a711b437f187c0d0f15cc0398b.png',
      wrapped_token_id: '0x98878b06940ae243284ca214f92bb71a2b032b8a',
      is_support_pre_exec: true,
    },
    {
      id: 'fx',
      community_id: 530,
      name: 'Function X',
      native_token_id: 'fx',
      logo_url: 'https://static.debank.com/image/chain/logo_url/fx/6fee82420b2394e0b68d7d7e692a0a01.png',
      wrapped_token_id: '0x80b5a32e4f032b2a058b4f29ec95eefeeb87adcd',
      is_support_pre_exec: false,
    },
    {
      id: 'celo',
      community_id: 42220,
      name: 'Celo',
      native_token_id: 'celo',
      logo_url: 'https://static.debank.com/image/chain/logo_url/celo/41da5c1d3c0945ae822a1f85f02c76cf.png',
      wrapped_token_id: '0x471ece3750da237f93b8e339c536989b8978a438',
      is_support_pre_exec: true,
    },
    {
      id: 'btt',
      community_id: 199,
      name: 'BitTorrent',
      native_token_id: 'btt',
      logo_url: 'https://static.debank.com/image/chain/logo_url/btt/2130a8d57ff2a0f3d50a4ec9432897c6.png',
      wrapped_token_id: '0x197a4ed2b1bb607e47a144b9731d7d34f86e9686',
      is_support_pre_exec: true,
    },
    {
      id: 'ftm',
      community_id: 250,
      name: 'Fantom',
      native_token_id: 'ftm',
      logo_url: 'https://static.debank.com/image/chain/logo_url/ftm/14133435f89637157a4405e954e1b1b2.png',
      wrapped_token_id: '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83',
      is_support_pre_exec: true,
    },
    {
      id: 'kcc',
      community_id: 321,
      name: 'KCC',
      native_token_id: 'kcc',
      logo_url: 'https://static.debank.com/image/chain/logo_url/kcc/3a5a4ef7d5f1db1e53880d70219d75b6.png',
      wrapped_token_id: '0x4446fc4eb47f2f6586f9faab68b3498f86c07521',
      is_support_pre_exec: true,
    },
    {
      id: 'zora',
      community_id: 7777777,
      name: 'Zora',
      native_token_id: 'zora',
      logo_url: 'https://static.debank.com/image/chain/logo_url/zora/de39f62c4489a2359d5e1198a8e02ef1.png',
      wrapped_token_id: '0x4200000000000000000000000000000000000006',
      is_support_pre_exec: false,
    },
    {
      id: 'dfk',
      community_id: 53935,
      name: 'DFK',
      native_token_id: 'dfk',
      logo_url: 'https://static.debank.com/image/chain/logo_url/dfk/233867c089c5b71be150aa56003f3f7a.png',
      wrapped_token_id: '0xccb93dabd71c8dad03fc4ce5559dc3d89f67a260',
      is_support_pre_exec: true,
    },
    {
      id: 'metis',
      community_id: 1088,
      name: 'Metis',
      native_token_id: 'metis',
      logo_url: 'https://static.debank.com/image/chain/logo_url/metis/b289da32db4d860ebf6fb46a6e41dcfc.png',
      wrapped_token_id: '0x75cb093e4d61d2a2e65d8e0bbb01de8d89b53481',
      is_support_pre_exec: true,
    },
    {
      id: 'era',
      community_id: 324,
      name: 'zkSync Era',
      native_token_id: 'era',
      logo_url: 'https://static.debank.com/image/chain/logo_url/era/2cfcd0c8436b05d811b03935f6c1d7da.png',
      wrapped_token_id: '0x5aea5775959fbc2557cc8789bc1bf90a239d9a91',
      is_support_pre_exec: false,
    },
    {
      id: 'mtr',
      community_id: 82,
      name: 'Meter',
      native_token_id: 'mtr',
      logo_url: 'https://static.debank.com/image/chain/logo_url/mtr/2dc6f079f52ca22778eb684e1ce650b3.png',
      wrapped_token_id: '0x160361ce13ec33c993b5cca8f62b6864943eb083',
      is_support_pre_exec: false,
    },
    {
      id: 'bsc',
      community_id: 56,
      name: 'BNB Chain',
      native_token_id: 'bsc',
      logo_url: 'https://static.debank.com/image/chain/logo_url/bsc/bc73fa84b7fc5337905e527dadcbc854.png',
      wrapped_token_id: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
      is_support_pre_exec: true,
    },
    {
      id: 'nova',
      community_id: 42170,
      name: 'Arbitrum Nova',
      native_token_id: 'nova',
      logo_url: 'https://static.debank.com/image/chain/logo_url/nova/06eb2b7add8ba443d5b219c04089c326.png',
      wrapped_token_id: '0x722e8bdd2ce80a4422e880164f2079488e115365',
      is_support_pre_exec: true,
    },
    {
      id: 'fsn',
      community_id: 32659,
      name: 'Fusion',
      native_token_id: 'fsn',
      logo_url: 'https://static.debank.com/image/chain/logo_url/fsn/047789979f0b5733602b29517753bdf3.png',
      wrapped_token_id: '0x0c05c5710af74d36b4d3bd5460475c20ceca8fe3',
      is_support_pre_exec: false,
    },
    {
      id: 'evmos',
      community_id: 9001,
      name: 'EvmOS',
      native_token_id: 'evmos',
      logo_url: 'https://static.debank.com/image/chain/logo_url/evmos/26e038b4d5475d5a4b92f7fc08bdabc9.png',
      wrapped_token_id: '0xd4949664cd82660aae99bedc034a0dea8a0bd517',
      is_support_pre_exec: false,
    },
    {
      id: 'pgn',
      community_id: 424,
      name: 'PGN',
      native_token_id: 'pgn',
      logo_url: 'https://static.debank.com/image/chain/logo_url/pgn/55e8dbdfeb4ca88443e04206da3fcb7f.png',
      wrapped_token_id: '',
      is_support_pre_exec: false,
    },
    {
      id: 'sbch',
      community_id: 10000,
      name: 'SmartBch',
      native_token_id: 'sbch',
      logo_url: 'https://static.debank.com/image/chain/logo_url/sbch/d78ac780803e7f0a17b73558f423502e.png',
      wrapped_token_id: '0x3743ec0673453e5009310c727ba4eaf7b3a1cc04',
      is_support_pre_exec: false,
    },
    {
      id: 'ron',
      community_id: 2020,
      name: 'Ronin',
      native_token_id: 'ron',
      logo_url: 'https://static.debank.com/image/chain/logo_url/ron/6e0f509804bc83bf042ef4d674c1c5ee.png',
      wrapped_token_id: '0xe514d9deb7966c8be0ca922de8a064264ea6bcd4',
      is_support_pre_exec: true,
    },
    {
      id: 'fuse',
      community_id: 122,
      name: 'Fuse',
      native_token_id: 'fuse',
      logo_url: 'https://static.debank.com/image/chain/logo_url/fuse/36dfb6fe8e9770367976dd4d2286a9ef.png',
      wrapped_token_id: '0x0be9e53fd7edac9f859882afdda116645287c629',
      is_support_pre_exec: true,
    },
    {
      id: 'hmy',
      community_id: 1666600000,
      name: 'Harmony',
      native_token_id: 'hmy',
      logo_url: 'https://static.debank.com/image/chain/logo_url/hmy/b3bfb4681f81a85e25c28e150dcbfe51.png',
      wrapped_token_id: '0xcf664087a5bb0237a0bad6742852ec6c8d69a27a',
      is_support_pre_exec: true,
    },
    {
      id: 'palm',
      community_id: 11297108109,
      name: 'Palm',
      native_token_id: 'palm',
      logo_url: 'https://static.debank.com/image/chain/logo_url/palm/ece828c59e643b8a8a13aa99145ae7d7.png',
      wrapped_token_id: '0xf98cabf0a963452c5536330408b2590567611a71',
      is_support_pre_exec: true,
    },
    {
      id: 'doge',
      community_id: 2000,
      name: 'Dogechain',
      native_token_id: 'doge',
      logo_url: 'https://static.debank.com/image/chain/logo_url/doge/2538141079688a7a43bc22c7b60fb45f.png',
      wrapped_token_id: '0xb7ddc6414bf4f5515b52d8bdd69973ae205ff101',
      is_support_pre_exec: false,
    },
    {
      id: 'wemix',
      community_id: 1111,
      name: 'WEMIX',
      native_token_id: 'wemix',
      logo_url: 'https://static.debank.com/image/chain/logo_url/wemix/d1ba88d1df6cca0b0cb359c36a09c054.png',
      wrapped_token_id: '0x7d72b22a74a216af4a002a1095c8c707d6ec1c5f',
      is_support_pre_exec: true,
    },
    {
      id: 'opbnb',
      community_id: 204,
      name: 'opBNB',
      native_token_id: 'opbnb',
      logo_url: 'https://static.debank.com/image/chain/logo_url/opbnb/07e2e686e363a842d0982493638e1285.png',
      wrapped_token_id: '0x4200000000000000000000000000000000000006',
      is_support_pre_exec: true,
    },
    {
      id: 'iotx',
      community_id: 4689,
      name: 'IoTeX',
      native_token_id: 'iotx',
      logo_url: 'https://static.debank.com/image/chain/logo_url/iotx/d3be2cd8677f86bd9ab7d5f3701afcc9.png',
      wrapped_token_id: '0xa00744882684c3e4747faefd68d283ea44099d03',
      is_support_pre_exec: false,
    },
    {
      id: 'op',
      community_id: 10,
      name: 'Optimism',
      native_token_id: 'op',
      logo_url: 'https://static.debank.com/image/chain/logo_url/op/01ae734fe781c9c2ae6a4cc7e9244056.png',
      wrapped_token_id: '0x4200000000000000000000000000000000000006',
      is_support_pre_exec: true,
    },
    {
      id: 'pze',
      community_id: 1101,
      name: 'Polygon zkEVM',
      native_token_id: 'pze',
      logo_url: 'https://static.debank.com/image/chain/logo_url/pze/a2276dce2d6a200c6148fb975f0eadd3.png',
      wrapped_token_id: '0x4f9a0e7fd2bf6067db6994cf12e4495df938e6e9',
      is_support_pre_exec: false,
    },
    {
      id: 'wan',
      community_id: 888,
      name: 'Wanchain',
      native_token_id: 'wan',
      logo_url: 'https://static.debank.com/image/chain/logo_url/wan/f3aa8b31414732ea5e026e05665146e6.png',
      wrapped_token_id: '0xdabd997ae5e4799be47d6e69d9431615cba28f48',
      is_support_pre_exec: true,
    },
    {
      id: 'etc',
      community_id: 61,
      name: 'Ethereum Classic',
      native_token_id: 'etc',
      logo_url: 'https://static.debank.com/image/chain/logo_url/etc/7ccf90ee6822ab440fb603337da256fa.png',
      wrapped_token_id: '0x82a618305706b14e7bcf2592d4b9324a366b6dad',
      is_support_pre_exec: true,
    },
    {
      id: 'tlos',
      community_id: 40,
      name: 'Telos',
      native_token_id: 'tlos',
      logo_url: 'https://static.debank.com/image/chain/logo_url/telos/f9f7493def4c08ed222540bebd8ce87a.png',
      wrapped_token_id: '0xd102ce6a4db07d247fcc28f366a623df0938ca9e',
      is_support_pre_exec: false,
    },
    {
      id: 'shib',
      community_id: 109,
      name: 'Shibarium',
      native_token_id: 'shib',
      logo_url: 'https://static.debank.com/image/chain/logo_url/shib/4ec79ed9ee4988dfdfc41e1634a447be.png',
      wrapped_token_id: '0x213c25900f365f1be338df478cd82bef7fd43f85',
      is_support_pre_exec: false,
    },
    {
      id: 'rsk',
      community_id: 30,
      name: 'RSK',
      native_token_id: 'rsk',
      logo_url: 'https://static.debank.com/image/chain/logo_url/rsk/ff47def89fba98394168bf5f39920c8c.png',
      wrapped_token_id: '0x542fda317318ebf1d3deaf76e0b632741a7e677d',
      is_support_pre_exec: false,
    },
    {
      id: 'step',
      community_id: 1234,
      name: 'Step',
      native_token_id: 'step',
      logo_url: 'https://static.debank.com/image/chain/logo_url/step/db79600b8feafe17845617ca9c606dbe.png',
      wrapped_token_id: '0xb58a9d5920af6ac1a9522b0b10f55df16686d1b6',
      is_support_pre_exec: true,
    },
    {
      id: 'cro',
      community_id: 25,
      name: 'Cronos',
      native_token_id: 'cro',
      logo_url: 'https://static.debank.com/image/chain/logo_url/cro/f947000cc879ee8ffa032793808c741c.png',
      wrapped_token_id: '0x5c7f8a570d578ed84e63fdfa7b1ee72deae1ae23',
      is_support_pre_exec: true,
    },
    {
      id: 'klay',
      community_id: 8217,
      name: 'Klaytn',
      native_token_id: 'klay',
      logo_url: 'https://static.debank.com/image/chain/logo_url/klay/1df018b8493cb97c50b7e390ef63cba4.png',
      wrapped_token_id: '0xe4f05a66ec68b54a58b17c22107b02e0232cc817',
      is_support_pre_exec: true,
    },
    {
      id: 'loot',
      community_id: 5151706,
      name: 'Loot',
      native_token_id: 'loot',
      logo_url: 'https://static.debank.com/image/chain/logo_url/loot/0f098333a1a4f474115b05862e680573.png',
      wrapped_token_id: '0x4fa214c9e33d481996bec77c443245fbaee85670',
      is_support_pre_exec: false,
    },
    {
      id: 'aurora',
      community_id: 1313161554,
      name: 'Aurora',
      native_token_id: 'aurora',
      logo_url: 'https://static.debank.com/image/chain/logo_url/aurora/da491099bb44690eda122cdd67c5c610.png',
      wrapped_token_id: '0xc9bdeed33cd01541e1eed10f90519d2c06fe3feb',
      is_support_pre_exec: true,
    },
    {
      id: 'astar',
      community_id: 592,
      name: 'Astar',
      native_token_id: 'astar',
      logo_url: 'https://static.debank.com/image/chain/logo_url/astar/398c7e0014bdada3d818367a7273fabe.png',
      wrapped_token_id: '0xaeaaf0e2c81af264101b9129c00f4440ccf0f720',
      is_support_pre_exec: true,
    },
    {
      id: 'oas',
      community_id: 248,
      name: 'Oasys',
      native_token_id: 'oas',
      logo_url: 'https://static.debank.com/image/chain/logo_url/oas/69e424154c30984ff4d5ba916591ac2a.png',
      wrapped_token_id: '0x5200000000000000000000000000000000000001',
      is_support_pre_exec: true,
    },
    {
      id: 'arb',
      community_id: 42161,
      name: 'Arbitrum',
      native_token_id: 'arb',
      logo_url: 'https://static.debank.com/image/chain/logo_url/arb/854f629937ce94bebeb2cd38fb336de7.png',
      wrapped_token_id: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
      is_support_pre_exec: true,
    },
    {
      id: 'linea',
      community_id: 59144,
      name: 'Linea',
      native_token_id: 'linea',
      logo_url: 'https://static.debank.com/image/chain/logo_url/linea/32d4ff2cf92c766ace975559c232179c.png',
      wrapped_token_id: '0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f',
      is_support_pre_exec: true,
    },
    {
      id: 'rose',
      community_id: 42262,
      name: 'Oasis Emerald',
      native_token_id: 'rose',
      logo_url: 'https://static.debank.com/image/chain/logo_url/rose/33ade55b0f3efa10e9eec002c6417257.png',
      wrapped_token_id: '0x21c718c22d52d0f3a789b752d4c2fd5908a8a733',
      is_support_pre_exec: false,
    },
    {
      id: 'sdn',
      community_id: 336,
      name: 'Shiden',
      native_token_id: 'sdn',
      logo_url: 'https://static.debank.com/image/chain/logo_url/sdn/0baaa4ee7cb16feed71119b062ccd277.png',
      wrapped_token_id: '0x0f933dc137d21ca519ae4c7e93f87a4c8ef365ef',
      is_support_pre_exec: true,
    },
    {
      id: 'lyx',
      community_id: 42,
      name: 'LUKSO',
      native_token_id: 'lyx',
      logo_url: 'https://static.debank.com/image/chain/logo_url/lyx/dbe6eef57e66817e61297d9b188248ed.png',
      wrapped_token_id: '',
      is_support_pre_exec: true,
    },
    {
      id: 'brise',
      community_id: 32520,
      name: 'Bitgert',
      native_token_id: 'brise',
      logo_url: 'https://static.debank.com/image/chain/logo_url/brise/4f6c040cf49f4d8c4eabbad7cd2f4ae4.png',
      wrapped_token_id: '0x0eb9036cbe0f052386f36170c6b07ef0a0e3f710',
      is_support_pre_exec: true,
    },
    {
      id: 'tenet',
      community_id: 1559,
      name: 'Tenet',
      native_token_id: 'tenet',
      logo_url: 'https://static.debank.com/image/chain/logo_url/tenet/803be22e467ee9a5abe00d69a9c3ea4f.png',
      wrapped_token_id: '0xd6cb8a253e12893b0cf39ca78f7d858652cca1fe',
      is_support_pre_exec: false,
    },
    {
      id: 'scrl',
      community_id: 534352,
      name: 'Scroll',
      native_token_id: 'scrl',
      logo_url: 'https://static.debank.com/image/chain/logo_url/scrl/1fa5c7e0bfd353ed0a97c1476c9c42d2.png',
      wrapped_token_id: '0x5300000000000000000000000000000000000004',
      is_support_pre_exec: false,
    },
    {
      id: 'kava',
      community_id: 2222,
      name: 'Kava',
      native_token_id: 'kava',
      logo_url: 'https://static.debank.com/image/chain/logo_url/kava/b26bf85a1a817e409f9a3902e996dc21.png',
      wrapped_token_id: '0xc86c7c0efbd6a49b35e8714c5f59d99de09a225b',
      is_support_pre_exec: true,
    },
    {
      id: 'avax',
      community_id: 43114,
      name: 'Avalanche',
      native_token_id: 'avax',
      logo_url: 'https://static.debank.com/image/chain/logo_url/avax/4d1649e8a0c7dec9de3491b81807d402.png',
      wrapped_token_id: '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7',
      is_support_pre_exec: true,
    },
    {
      id: 'manta',
      community_id: 169,
      name: 'Manta Pacific',
      native_token_id: 'manta',
      logo_url: 'https://static.debank.com/image/chain/logo_url/manta/0e25a60b96a29d6a5b9e524be7565845.png',
      wrapped_token_id: '0x0dc808adce2099a9f62aa87d9670745aba741746',
      is_support_pre_exec: false,
    },
    {
      id: 'core',
      community_id: 1116,
      name: 'CORE',
      native_token_id: 'core',
      logo_url: 'https://static.debank.com/image/chain/logo_url/core/ccc02f660e5dd410b23ca3250ae7c060.png',
      wrapped_token_id: '0x40375c92d9faf44d2f9db9bd9ba41a3317a2404f',
      is_support_pre_exec: true,
    },
    {
      id: 'xdai',
      community_id: 100,
      name: 'Gnosis Chain',
      native_token_id: 'xdai',
      logo_url: 'https://static.debank.com/image/chain/logo_url/xdai/43c1e09e93e68c9f0f3b132976394529.png',
      wrapped_token_id: '0xe91d153e0b41518a2ce8dd3d7944fa863463a97d',
      is_support_pre_exec: true,
    },
    {
      id: 'mnt',
      community_id: 5000,
      name: 'Mantle',
      native_token_id: 'mnt',
      logo_url: 'https://static.debank.com/image/chain/logo_url/mnt/0af11a52431d60ded59655c7ca7e1475.png',
      wrapped_token_id: '0x78c1b0c915c4faa5fffa6cabf0219da63d7f4cb8',
      is_support_pre_exec: true,
    },
    {
      id: 'pls',
      community_id: 369,
      name: 'Pulse',
      native_token_id: 'pls',
      logo_url: 'https://static.debank.com/image/chain/logo_url/pls/aa6be079fa9eb568e02150734ebb3db0.png',
      wrapped_token_id: '0xa1077a294dde1b09bb078844df40758a5d0f9a27',
      is_support_pre_exec: true,
    },
    {
      id: 'matic',
      community_id: 137,
      name: 'Polygon',
      native_token_id: 'matic',
      logo_url: 'https://static.debank.com/image/chain/logo_url/matic/52ca152c08831e4765506c9bd75767e8.png',
      wrapped_token_id: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
      is_support_pre_exec: true,
    },
    {
      id: 'heco',
      community_id: 128,
      name: 'HECO',
      native_token_id: 'heco',
      logo_url: 'https://static.debank.com/image/chain/logo_url/heco/db5152613c669e0cc8624d466d6c94ea.png',
      wrapped_token_id: '0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f',
      is_support_pre_exec: true,
    },
    {
      id: 'canto',
      community_id: 7700,
      name: 'Canto',
      native_token_id: 'canto',
      logo_url: 'https://static.debank.com/image/chain/logo_url/canto/47574ef619e057d2c6bbce1caba57fb6.png',
      wrapped_token_id: '0x826551890dc65655a0aceca109ab11abdbd7a07b',
      is_support_pre_exec: true,
    },
  ];

  const allChainMap = allChainList.reduce((pre, cur) => {
    return {
      ...pre,
      [cur.id]: cur,
    };
  }, {}) as any;

  const allTokenList = [
    {
      id: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
      chain: 'matic',
      name: 'Wrapped Matic',
      symbol: 'WMATIC',
      display_symbol: 'WMATIC',
      optimized_symbol: 'WMATIC',
      decimals: 18,
      logo_url:
        'https://static.debank.com/image/matic_token/logo_url/0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270/f6e604ba0324726a3d687c618aa4f163.png',
      protocol_id: '',
      price: 0.635035,
      price_24h_change: 0.028018849750779857,
      is_verified: true,
      is_core: true,
      is_wallet: true,
      time_at: 1601030209.0,
      amount: 1.4,
      raw_amount: 1400000000000000000,
      raw_amount_hex_str: '0x136dcc951d8c0000',
    },
    {
      id: '0x0faab20e99657e1158f6b9dd60a4197a6ff7e4a5',
      chain: 'matic',
      name: '@ Synth sUSD',
      symbol: 'sUSD [Synthetix.cc]',
      display_symbol: null,
      optimized_symbol: 'sUSD [Synthetix.cc]',
      decimals: 18,
      logo_url: null,
      protocol_id: '',
      price: 0,
      price_24h_change: null,
      is_verified: false,
      is_core: false,
      is_wallet: false,
      time_at: 1697697750.0,
      amount: 685.0,
      raw_amount: 685000000000000000000,
      raw_amount_hex_str: '0x252248deb6e6940000',
    },
    {
      id: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
      chain: 'matic',
      name: 'USD Coin (PoS)',
      symbol: 'USDC',
      display_symbol: null,
      optimized_symbol: 'USDC',
      decimals: 6,
      logo_url: 'https://static.debank.com/image/coin/logo_url/usdc/e87790bfe0b3f2ea855dc29069b38818.png',
      protocol_id: '',
      price: 1.0,
      price_24h_change: 0.0,
      is_verified: true,
      is_core: true,
      is_wallet: true,
      time_at: 1601199611.0,
      amount: 1.000243,
      raw_amount: 1000243,
      raw_amount_hex_str: '0xf4333',
    },
    {
      id: '0x40379a439d4f6795b6fc9aa5687db461677a2dba',
      chain: 'matic',
      name: 'Real USD',
      symbol: 'USDR',
      display_symbol: null,
      optimized_symbol: 'USDR',
      decimals: 9,
      logo_url: 'https://static.debank.com/image/coin/logo_url/usdr/3547003d1109759667dfca20bece3d3c.png',
      protocol_id: 'matic_tangible',
      price: 0.569559955555666,
      price_24h_change: -0.011467685311822129,
      is_verified: false,
      is_core: true,
      is_wallet: true,
      time_at: 1690527924.0,
      amount: 1.525543326,
      raw_amount: 1525543326,
      raw_amount_hex_str: '0x5aedf19e',
    },
    {
      id: '0x60f57b625566a461ebc959d5314d0dcc1f4da0cd',
      chain: 'matic',
      name: '@SNXPool.com',
      symbol: '$ sUSD',
      display_symbol: null,
      optimized_symbol: '$ sUSD',
      decimals: 18,
      logo_url: null,
      protocol_id: '',
      price: 0,
      price_24h_change: null,
      is_verified: false,
      is_core: false,
      is_wallet: false,
      time_at: 1694527680.0,
      amount: 1165.0,
      raw_amount: 1165000000000000000000,
      raw_amount_hex_str: '0x3f279f6f90c2140000',
    },
  ];

  const supportedChainList: any[] = [];

  allChainList.forEach((chain) => {
    const findToken = allTokenList.find((token) => {
      return token.chain == chain.id;
    });

    if (findToken) {
      const this_chain_value = allChainsBalance.chain_list.find((chain_info) => {
        return chain_info.id === chain.id;
      });

      if (this_chain_value) {
        supportedChainList.push({
          ...this_chain_value,
          ...chain,
        });
      }
    }
  });

  const totalUsdValueOfSupportedChains = supportedChainList.reduce((total, item) => total + item.usd_value, 0);

  const supportedChainsWithPercentage = supportedChainList.map((chain) => {
    return {
      ...chain,
      percentage: (chain.usd_value / totalUsdValueOfSupportedChains) * 100,
    };
  });

  const parsedAllTokenList = allTokenList
    .map((token) => {
      return {
        ...token,
        chain_info: allChainMap[token.chain],
        usd_value: token.price * token.amount,
      };
    })
    .sort((a, b) => {
      // depend on sortBy, sort it

      if (sortBy === 'amount') {
        return b.amount - a.amount;
      } else if (sortBy === 'price') {
        return b.price - a.price;
      } else {
        return b.usd_value - a.usd_value;
      }
    });

  return {
    parsedAllTokenList,
    supportedChainList: supportedChainsWithPercentage,
    allChainsBalance,
    sortBy,
    setSortBy,
  };
};

const PortfolioPage: NextPageWithLayout = () => {
  const { sender, wallet, provider, connect } = useEthersSender();

  const [CurTab, setCurTab] = useState<'Wallet' | 'Protocol'>('Wallet');

  const [network, setNetwork] = useState<string>('all');

  const { parsedAllTokenList, supportedChainList, allChainsBalance, setSortBy, sortBy } = useAllTokenList();

  const value_all = parsedAllTokenList.reduce((pre, cur) => {
    return pre.plus(cur.price * cur.amount);
  }, Big(0));

  const filterFunc = (token: any) => {
    return network === 'all' || token.chain === network;
  };

  return (
    <Wrapper>
      <Profile className="frcs">
        {DefaultProfileIcon}

        <div className="">
          <div className="address-filed ">
            <span>{formateAddress(sender)}</span>
            <div className="arrow-filed frcc">{ArrowDone}</div>
          </div>

          <div className="frcs metamask-filed">
            {MetaMaskIcon}
            <span>MetaMask</span>
          </div>
        </div>
      </Profile>

      <PortfolioTabs>
        {['Wallet', 'Protocol'].map((tab) => {
          const isActive = tab === CurTab.toString();
          return (
            <div
              key={tab}
              className={`item ${isActive ? 'active' : ''}`}
              onClick={() => {
                setCurTab(tab as 'Wallet' | 'Protocol');
              }}
            >
              {tab}

              {isActive && <div className="active-bar"></div>}
            </div>
          );
        })}
      </PortfolioTabs>

      <NetworkTabWrapper>
        <AllNetWorkTab
          onClick={() => {
            setNetwork('all');
          }}
        >
          {AllNetWorkIcon}

          <div>
            <div className="network-name">All Networks</div>
            <div className="usd-value">${formateValue(allChainsBalance.total_usd_value, 4)}</div>
          </div>
        </AllNetWorkTab>

        {supportedChainList.map((chain) => {
          return (
            <NetWorkTab
              active={network === chain.id}
              key={chain.community_id}
              onClick={() => {
                setNetwork(chain.id);
              }}
              className="frcs-gm"
            >
              {chain.logo_url ? (
                <img className="network-icon-chain" src={chain.logo_url} />
              ) : (
                <div className="default-icon network-icon">{chain.name[0]}</div>
              )}

              <div>
                <div className="network-name">{chain.name}</div>

                <div className="value-filed frcs-gm">
                  <div className="usd-value">${formateValue(chain.usd_value, 2)}</div>
                  <div className="usd-value-percent">{chain.percentage}%</div>
                </div>
              </div>
            </NetWorkTab>
          );
        })}
      </NetworkTabWrapper>

      <HoldingTitle>
        <div className="holding-text">Holding</div>

        <div className="holding-value">${formateValue(value_all.toFixed(), 4)}</div>
      </HoldingTitle>

      <HoldingTable>
        <thead>
          <tr>
            <th>Token</th>

            <th>
              <div
                className="frcs-gm"
                onClick={() => {
                  setSortBy('price');
                }}
              >
                <span>Price</span>{' '}
                <SortArrowDownWrapper active={sortBy === 'price'}> {sortArrowDown} </SortArrowDownWrapper>{' '}
              </div>{' '}
            </th>

            <th>
              <div
                className="frcs-gm"
                onClick={() => {
                  setSortBy('amount');
                }}
              >
                <span>Amount</span>{' '}
                <SortArrowDownWrapper active={sortBy === 'amount'}> {sortArrowDown} </SortArrowDownWrapper>{' '}
              </div>{' '}
            </th>

            <th>
              <div
                className="frcs-gm"
                onClick={() => {
                  setSortBy('usd_value');
                }}
              >
                <span>USD value</span>{' '}
                <SortArrowDownWrapper active={sortBy === 'usd_value'}> {sortArrowDown} </SortArrowDownWrapper>{' '}
              </div>{' '}
            </th>
          </tr>
        </thead>

        <tbody>
          {parsedAllTokenList.filter(filterFunc).map((token) => {
            return (
              <tr key={token.id}>
                <td>
                  <div className="frcs token-info">
                    <img src={token.logo_url || ''} className="token-icon" />

                    <div>
                      <div className="token-symbol">{token.symbol}</div>

                      <div className="chain-info">
                        <img src={token.chain_info.logo_url} className="chain-icon" />

                        <div className="chain-name"> {token.chain_info.name} </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td>{formateValue(token.price, 2)}</td>
                <td>{formateValue(token.amount, 4)}</td>
                <td>${formateValue(token.usd_value, 4)}</td>
              </tr>
            );
          })}
        </tbody>
      </HoldingTable>
    </Wrapper>
  );
};

PortfolioPage.getLayout = useDefaultLayout;

export default PortfolioPage;
