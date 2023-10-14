import ReactModal from 'react-modal';







import {
    AddressCard,
    AddressCardShadow,
    AddressCardWrapper,
    AllChainCard,
    AllChainCardShadow,
    AllChianIcon,
    ArbIcon,
    ChainCard,
    DailyTaskIcon,
    DailyTaskItemContainer,
    DailyTaskItemDone,
    DailyTaskItemDoneShadow,
    DailyTaskItemNotDone,
    DailyTaskList,
    DolphineBadge,
    IconWrapper,
    InfoCard,
    InfoCardShadow,
    InviteCard,
    LeaderBoardTable,
    LockComponent,
    MetisIcon,
    NFTContainer,
    NFTList,
    polygonIcon,
    ProfileBanner,
    ProfileCard,
    ProfileIconBoy,
    ProfileIconGirl,
    SharkBadge,
    SubContainer,
    SubTitle,
    WhaleBadge,
    WinWinIcon,
    WinWinRealIcon,
    WinWinWrapper,
    BgWrapper,
    SharkIcon,
    dolphinIcon,
    WhaleIcon
    
  } from '@/components/WinWin/index';


import styled from 'styled-components';


import {  useEffect, useState } from 'react';
import WinWin from './WinWinModal';



const utils = {
    getAddress: (address: string) => address.slice(0, 6) + '...' + address.slice(-4),
  };
  

const INVITE_BASE_API_INVITE = 'https://bos-api.delink.one/api/invite/';


const INVITE_BASE_API_INTEGRAL = 'https://bos-api.delink.one/api/integral/';



const service = {
    generate: (params: RequestInit) => fetch(INVITE_BASE_API_INVITE + 'generate', params),
    activate: (params: RequestInit) => fetch(INVITE_BASE_API_INVITE + 'activate', params),
    getInvitedInfo: (sender: string) => fetch(INVITE_BASE_API_INVITE + 'get-invited-info/' + sender),
    getTaskInfo: () => fetch(INVITE_BASE_API_INTEGRAL + 'task-info'),
    getActivityInfo: () => fetch(INVITE_BASE_API_INTEGRAL + 'activity-info/2'),
    getUserTaskInfo: (sender: string) => fetch(INVITE_BASE_API_INTEGRAL + 'user-task-info/' + sender),
    getLeaderBoard: (activity_namae: string, chain_id:string, typeSearch: string) => fetch(INVITE_BASE_API_INTEGRAL + `leaderboard-${typeSearch}/` + `${activity_namae}/` + chain_id)
  };
  

  const useLeaderBoard = (activity_name: string, chain_id:string,typeSearch: string )=>{
    const [leaderBoard, setLeaderBoard] = useState<any>([]);
  
    useEffect(() => {
      if(!activity_name) return;
      
  
      service.getLeaderBoard(activity_name,chain_id,typeSearch).then(res=> res.json()).then(res=>{
        setLeaderBoard(res)
      })
      
    }, [activity_name,chain_id,typeSearch]);
  
  
    return leaderBoard
  }


const WinWinBarWrapper = styled.div`
    height: 40px;
    width: 100%;
    position: fixed; 
    top: 0;
    border: 1px solid #303030;
    background: #B1DEFF;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #343434;
    z-index: 10000;
    cursor: pointer;

`

 const WinWinBarItem = styled.div`

  display: flex;
  align-items: center;








`

const useActivityInfo = ()=>{

    const [activityInfo, setActivityInfo] = useState<any>({});
  
  
  
    useEffect(() => {
  
      service.getActivityInfo().then(res=>{
        return res.json()
      }).then(res=>{
        
        setActivityInfo(res[0])
  
      })
      
    }, []);
    return activityInfo
  
  }
  
  
  

  const Modal = (props: any & ReactModal.Props )=>{


return <ReactModal {...props}>

<WinWin  {...props}></WinWin>


</ReactModal>


}



export const WinWinBar = ()=>{






const activity = useActivityInfo()

const leaderBoard = useLeaderBoard(activity?.name, "all","user");

const [modalOpen, setModalOpen] = useState(false);








return  <>
  

  <WinWinBarWrapper
  
    onClick={()=>{
      setModalOpen(b=>!b)

    }}
  >



    <span>


    {
      WinWinIcon
    }

&nbsp;


    {"Rank"}





    </span>

    {
        leaderBoard.slice(0,5).map((item:any, index:number)=>{

            return <WinWinBarItem key={index}>
            
          
            {index ===0 ? WhaleIcon : index === 1 ? SharkIcon : index === 2 ? WhaleIcon:""}

            <span
              style={{
                paddingRight:"10px"
              }}
            >

            No.{index + 1}

            </span>


            <span>
            

            {utils.getAddress(item.address)} | {item.tx_count * 10}


            </span>


            


            <span>
            
            
            
            </span>

            </WinWinBarItem>
        })
    }

    

</WinWinBarWrapper>

  <Modal
    style={{
      content: {
        maxWidth: "fit-content",
        margin: "auto",
        background: 'transparent',
      },
      overlay: {
       "zIndex": 100
      }
    }}
    isOpen={modalOpen}
    onRequestClose={
      ()=>{
        setModalOpen(false)
      }
    }
  ></Modal>
  </>




}







