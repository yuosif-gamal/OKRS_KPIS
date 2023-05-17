import home from '../../assets/images/MenusIcons/homepage.png';
import aboutUs from '../../assets/images/MenusIcons/about-us.png';
import dashboard from '../../assets/images/MenusIcons/dashboard.png';
import {Link} from 'react-router-dom';

const catNav = [
    {
        name: "Home",
        icon: home,
        link: "/"
    },
    {
        name: "About Us",
        icon: aboutUs,
        link: "/"
    },
    {
        name: "Admin Dashboard",
        icon: dashboard,
        link: "/admin/dashboard"
    },
    // {
    //     name: "Home",
    //     icon: home,
    // },
    // {
    //     name: "Travel",
    //     icon: travel,
    // },
    // {
    //     name: "Appliances",
    //     icon: appliances,
    // },
    // {
    //     name: "Furniture",
    //     icon: furniture,
    // },
    // {
    //     name: "Beauty,Toys & more",
    //     icon: beauty,
    // },
    // {
    //     name: "Grocery",
    //     icon: grocery,
    // },
]

const MainMenu = () => {
    return (
        <section className="hidden sm:block bg-white mt-10 mb-4 min-w-full px-12 py-1 shadow overflow-hidden">
            <div className="flex items-center justify-between mt-4">
                {catNav.map((item, i) => (
                    <Link to={`${item.link}`} className="flex flex-col gap-1 items-center p-2 group" key={i}>
                        <div className="h-16 w-16">
                            <img draggable="false" className="h-full w-full object-contain" src={item.icon} alt={item.name} />
                        </div>
                        <span className="text-sm text-gray-800 font-medium group-hover:text-primary-blue">{item.name}</span>
                    </Link>
                ))}

            </div>
        </section>
    );
};

export default MainMenu;
