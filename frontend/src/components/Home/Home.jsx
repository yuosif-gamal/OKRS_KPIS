import {useEffect} from 'react';
import MainMenu from '../Layouts/MainMenu';
import DealSlider from './DealSlider/DealSlider';
import {useDispatch, useSelector} from 'react-redux';
import {clearErrors, getSliderProducts} from '../../actions/productAction';
import {useSnackbar} from 'notistack';
import MetaData from '../Layouts/MetaData';
import {Navigate} from "react-router-dom";

const Home = () => {

    const dispatch = useDispatch();
    const {enqueueSnackbar} = useSnackbar();
    const {error, loading, isAuthenticated, user} = useSelector(state => state.user);

    useEffect(() => {
        if (error) {
            enqueueSnackbar(error, {variant: "error"});
            dispatch(clearErrors());
        }
        dispatch(getSliderProducts());
    }, [dispatch, error, enqueueSnackbar]);

    return (
        <>
            <MetaData title="OKRs And KPIs"/>
            <MainMenu/>
            <main className="flex flex-col gap-3 px-2 mt-16 sm:mt-2">
                <>
                    {loading === false && (
                        isAuthenticated === false ?
                            <Navigate to="/login"/> :
                            user.role === "admin" ?
                                <Navigate to="/admin/dashboard"/> :
                                <Navigate to="/library/Library"/>
                    )}
                </>
            </main>
        </>
    );
};

export default Home;
