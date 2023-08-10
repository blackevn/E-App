import { FaSearch, FaHome, FaCompass, FaPlusCircle, FaUser, 
    FaStar, FaCircle, FaGamepad, FaHatCowboy, FaTshirt, 
    FaTools, FaLaptop, FaCarrot, FaMusic, FaCar, FaBell 
} from "react-icons/fa";
import { DiscoveryLinks, NavigationLinks } from "@/types/interfaces";
import { useAppContext } from "../context/AppContext";
import { MdAttachMoney } from "react-icons/md";
import { BiSolidDashboard } from "react-icons/bi";



const useLinks = () => {

// const { user } = useAppContext()

const links: NavigationLinks[] = [
   
   {
    "id": 1,
    "name": "Dashboard",
    "link": "/dashboard",
    "icon": BiSolidDashboard,
    "notification": 0,
    "isAuthenticated": false,
    "hasNotification": false,
    'type': "link"
   },
   {
    "id": 2,
    "name": "Finance",
    "link": "/dashboard/finance",
    "icon": MdAttachMoney,
    "notification": 0,
    "isAuthenticated": true,
    "hasNotification": false,
    'type': "menu"
   },
   {
    "id": 3,
    "name": "Notifications",
    "link": "/home/notifications",
    "icon": FaBell,
    "notification": 3,
    "isAuthenticated": true,
    "hasNotification": false,
    'type': "link"
   },
   {
    "id": 4,
    "name": "",
    "link": "/home/about",
    "icon": FaSearch,
    "notification": 0,
    "isAuthenticated": true,
    "hasNotification": false,
    'type': "link"
   },
   {
    "id": 5,
    "name": "Link",
    "link": "/home/settings",
    "icon": FaCircle,
    "notification": 1,
    "isAuthenticated": true,
    "hasNotification": false,
    'type': "link"
   },
  

  ]

const discovery: DiscoveryLinks[] = [
   
   {
    "id": 1,
    "name": "Gaming",
    "icon": FaGamepad
   },
   {
    "id": 2,
    "name": "Lifestyle",
    "icon": FaHatCowboy
   },
   {
    "id": 3,
    "name": "Fashion",
    "icon": FaTshirt
   },
   {
    "id": 4,
    "name": "DIY",
    "icon": FaTools
   },
   {
    "id": 5,
    "name": "Technology",
    "icon": FaLaptop
   },
   {
    "id": 6,
    "name": "Cooking",
    "icon": FaCarrot
   },
   {
    "id": 7,
    "name": "Music",
    "icon": FaMusic
   },
   {
    "id": 8,
    "name": "Cars",
    "icon": FaCar
   },

]   

const salesTabs = [
  {
      icon: FaBell,
      label: 'Invoices'
  },
  {
      icon: FaBell,
      label: 'Quotes'
  },
  {
      icon: FaBell,
      label: 'Proforma Invoices'
  },
  {
      icon: FaBell,
      label: 'Receipting'
  },

]

  return { links, discovery, salesTabs }

}

export default useLinks;