import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import DashboardIcon from '@mui/icons-material/Dashboard';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useSnackbar} from 'notistack';
import {logoutUser} from '../../../actions/userAction';

const PrimaryDropDownMenu = ({ setTogglePrimaryDropDown, user }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const handleLogout = () => {
        dispatch(logoutUser());

        if (window.location.href.includes('localhost')) {
            window.location.href = "http://localhost:3000";
        } else {
            window.location.href = "https://okrs-kpis-website.herokuapp.com";
        }
        enqueueSnackbar("Logout Successfully", { variant: "success" });
        setTogglePrimaryDropDown(false);
    }

    return (
        <div className="absolute w-60 -left-24 ml-2 top-9 bg-white shadow-2xl rounded flex-col text-sm">

            {/*{user.role === "admin" &&*/}
            {/*    <Link className="pl-3 py-3.5 border-b flex gap-3 items-center hover:bg-gray-50 rounded-t" to="/admin/dashboard">*/}
            {/*        <span className="text-primary-blue"><DashboardIcon sx={{ fontSize: "18px" }} /></span>*/}
            {/*        Admin Dashboard*/}
            {/*    </Link>*/}
            {/*}*/}
            {/*<Link className="pl-3 py-3.5 border-b flex gap-3 items-center hover:bg-gray-50 rounded-t" to="/library/Library">*/}
            {/*    <span className="text-primary-blue"><AccountCircleIcon sx={{ fontSize: "18px" }} /></span>*/}
            {/*   Our Library*/}
            {/*</Link>*/}
            {/*<Link className="pl-3 py-3.5 border-b flex gap-3 items-center hover:bg-gray-50 rounded-t" to="/account">*/}
            {/*    <span className="text-primary-blue"><AccountCircleIcon sx={{ fontSize: "18px" }} /></span>*/}
            {/*    My Profile*/}
            {/*</Link>*/}
            {/*<Link className="pl-3 py-3.5 border-b flex gap-3 items-center hover:bg-gray-50 rounded-t" to="/wishlist">*/}
            {/*    <span className="text-primary-blue"><FavoriteIcon sx={{ fontSize: "18px" }} /></span>*/}
            {/*    To Do List*/}
            {/*</Link>*/}
            {/*<Link className="pl-3 py-3.5 border-b flex gap-3 items-center hover:bg-gray-50 rounded-t" to="/">*/}
            {/*    <span className="text-primary-blue"><NotificationsIcon sx={{ fontSize: "18px" }} /></span>*/}
            {/*    Notifications*/}
            {/*</Link>*/}
            <div className="pl-3 py-3.5 flex gap-3 items-center hover:bg-gray-50 rounded-b cursor-pointer" onClick={handleLogout} >
                <span className="text-primary-blue"><PowerSettingsNewIcon sx={{ fontSize: "18px" }} /></span>
                Logout
            </div>

            <div className="absolute right-1/2 -top-2.5">
                <div className="arrow_down"></div>
            </div>
        </div>
    );
};

export default PrimaryDropDownMenu;
