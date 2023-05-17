import {Link} from 'react-router-dom';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import InventoryIcon from '@mui/icons-material/Inventory';
import GroupIcon from '@mui/icons-material/Group';
import ReviewsIcon from '@mui/icons-material/Reviews';
import AddBoxIcon from '@mui/icons-material/AddBox';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CloseIcon from '@mui/icons-material/Close';
import Avatar from '@mui/material/Avatar';
import {useDispatch, useSelector} from 'react-redux';
import './Sidebar.css';
import {logoutUser} from '../../actions/userAction';

const navMenu = [

    {
        icon: <EqualizerIcon/>,
        label: "Dashboard",
        ref: "/admin/dashboard",
        key: 0,
        role: "admin",
    },
    {
        icon: <EqualizerIcon/>,
        label: "Library Setup",
        ref: "/library/library",
        key: 1,
        role: "user",
    },
    {
        icon: <ShoppingBagIcon/>,
        label: "Achievement Setup",
        ref: "/library/AchievementSetup",
        key: 2,
        role: "user",
    },
    // {
    //     icon: <InventoryIcon/>,
    //     label: "Targets Setup",
    //     ref: "/library/Targets",
    //     key: 3,
    //     role: "user",
    // },
    {
        icon: <AddBoxIcon/>,
        label: "Reports",
        ref: "/Admin/Reports",
        key: 4,
        role: "admin",
    },
    {
        icon: <AddBoxIcon/>,
        label: "OKRs And KPIs",
        ref: "/OkrsAndKpis/OkrsKpis",
        key: 5,
        role: "user,admin",
    },
    // {
    //     icon: <InventoryIcon/>,
    //     label: "Products",
    //     ref: "/admin/products",
    //     key: 6,
    //     role: "admin",
    // },
    // {
    //     icon: <AddBoxIcon/>,
    //     label: "Add Product",
    //     ref: "/admin/new_product",
    //     key: 8,
    //     role: "admin",
    // },
    {
        icon: <GroupIcon/>,
        label: "Users",
        ref: "/admin/users",
        key: 7,
        role: "admin",
    },
    {
        icon: <AccountBoxIcon/>,
        label: "My Profile",
        ref: "/account",
        key: 8,
        role: "user,admin",
    },
    {
        icon: <LogoutIcon/>,
        label: "Logout",
        key: 9,
        role: "user,admin",
    },
];

const Sidebar = ({activeTab, setToggleSidebar}) => {

    const dispatch = useDispatch();

    const {user} = useSelector((state) => state.user);

    const handleLogout = () => {
        dispatch(logoutUser());
        if (window.location.href.includes('localhost')) {
            window.location.href = "http://localhost:3000";
        } else {
            window.location.href = "https://okrs-kpis-website.herokuapp.com";
        }
    }

    return (
        <aside
            className="sidebar rounded-xl z-10 sm:z-0 block min-h-screen fixed left-0 pb-14 max-h-screen w-3/4 sm:w-1/5 bg-gray-800 text-white overflow-x-hidden border-r">
            <div className="backgroundgreen flex items-center gap-3 bg-green-800 p-2 rounded-lg shadow-lg my-4 mx-3.5">
                <Avatar
                    alt="Avatar"
                    src={user.avatar.url}
                />
                <div className="flex flex-col gap-0">
                    <span className="font-medium text-lg">{user.name}</span>
                    <span className="text-gray-300 text-sm">{user.email}</span>
                </div>
                <button onClick={() => setToggleSidebar(false)}
                        className="sm:hidden bg-gray-800 ml-auto rounded-full w-10 h-10 flex items-center justify-center">
                    <CloseIcon/>
                </button>
            </div>

            <div className="flex flex-col w-full gap-0 my-8">
                {navMenu.map((item, index) => {
                        const {icon, label, ref, key, role} = item;
                        return (
                            <>
                                {label === "Logout" ?
                                    (<button key={item.key} onClick={handleLogout}
                                             className="backgroundGreenHover flex gap-3 items-center py-3 px-4 font-medium">
                                        <span>{icon}</span>
                                        <span>{label}</span>
                                    </button>) :
                                    (role.indexOf(user.role)>=0) ?
                                        (
                                            <Link key={item.key} to={ref}
                                                  className={`${activeTab === index ? "backgroundgreen" : "backgroundGreenHover"} flex gap-3 items-center py-3 px-4 font-medium`}>
                                                <span>{icon}</span>
                                                <span>{label}</span>
                                            </Link>
                                        ) : ""
                                }

                            </>
                        )
                    }
                )}
            </div>

            <div className="backgroundgreen flex flex-col gap-1 bg- p-3 rounded-lg shadow-lg mb-6 mt-28 mx-3.5 overflow-hidden">
                <h5>Developed by:</h5>
                <div className="flex flex-col gap-0">
                    <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"
                       className="font-medium text-lg hover:text-blue-500">OKRs And KPIs Team</a>
                    <a href="mailto:test@gmail.com"
                       className="text-sm hover:text-blue-500">test@gmail.com</a>
                </div>
            </div>
        </aside>
    )
};

export default Sidebar;
