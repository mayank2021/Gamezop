export type ActiveUserType = { tit: string; desc: string };

export type userType = {
  id: number;
  expiryTime: number;
};

export interface ContextProps {
  // ------------------------------NEWS PAGE START--------------------------
  news: any[];
  setNews: React.Dispatch<React.SetStateAction<any[]>>;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  activeUser: ActiveUserType;
  setActiveUser: React.Dispatch<React.SetStateAction<ActiveUserType>>;
  // ------------------------------NEWS PAGE END--------------------------
  // ------------------------------USER PAGE START--------------------------
  usersData: any[];
  setUsersData: React.Dispatch<React.SetStateAction<any[]>>;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: (que: string, userData: any) => void;
  userDetails: {};
  setUserDetails: React.Dispatch<React.SetStateAction<{}>>;
  showUserDetails: (id: number) => void;
  handleTopUser: (id: number) => void;
  storangeChange: boolean;
  setStorageChange: React.Dispatch<React.SetStateAction<boolean>>;
  handleUserControl: (userId: number) => void;
  setUserDataOnInitialization: (userData: any) => void;
  showMobileNav: boolean;
  setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
}
