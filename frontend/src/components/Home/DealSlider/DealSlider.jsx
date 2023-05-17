import Slider from 'react-slick';
import {NextBtn, PreviousBtn} from '../Banner/Banner';
import {Card, Grid} from "@mui/material";
import {Box, styled} from '@mui/system';
import Typography from "@mui/material/Typography";
import museum from '../../../assets/images/random/musum.jpg';
import library from '../../../assets/images/random/library.png';
import vision from '../../../assets/images/random/vision.png';

const FlexBox = styled(Box)(() => ({display: 'flex', alignItems: 'center'}));
const ContentBox = styled(Box)(() => ({
    height: '100%',
    padding: '32px',
    position: 'relative',
    background: 'rgba(0, 0, 0, 0.01)',
}));
const JustifyBox = styled(FlexBox)(() => ({justifyContent: 'center'}));

export const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 1,
    swipe: false,
    prevArrow: <PreviousBtn/>,
    nextArrow: <NextBtn/>,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const DealSlider = ({title}) => {
    return (
        // <section className="bg-white w-full shadow overflow-hidden">
        //     {/* <!-- header --> */}
        //     <div className="flex px-6 py-3 justify-between items-center">
        //         <h1 className="text-xl font-medium">{title}</h1>
        //         <Link to="/products" className="bg-primary-blue text-xs font-medium text-white px-5 py-2.5 rounded-sm shadow-lg">VIEW ALL</Link>
        //     </div>
        //     <hr />
        //     {/* <!-- header --> */}
        //
        //         <Slider {...settings}>
        //             {getRandomProducts(offerProducts, 12).map((item, i) => (
        //                 <Product {...item} key={i} />
        //             ))}
        //         </Slider>
        //
        // </section>
        <section className="bg-white w-full shadow overflow-hidden">
            {/* <!-- header --> */}
            <div className="flex px-6 py-3 justify-between items-center">
                <h1 className="text-xl font-medium">{title}</h1>
                {/*<Link to="/products" className="bg-primary-blue text-xs font-medium text-white px-5 py-2.5 rounded-sm shadow-lg">VIEW ALL</Link>*/}
            </div>
            <hr/>
            {/* <!-- header --> */}
            <Slider {...settings}>
                {/*{getRandomProducts(offerProducts, 12).map((item, i) => (*/}
                {/*    <Product {...item} key={i} />*/}
                {/*))}*/}
                <Grid container justify="space-around"
                      spacing={4}>
                    <Grid item>

                        <Card className="card">
                            <Grid container>
                                <Grid>
                                    <JustifyBox>
                                        <img src={museum}/>
                                    </JustifyBox>
                                </Grid>

                                <Grid>
                                    <ContentBox>
                                        <Typography>
                                            few words about museum
                                        </Typography>
                                    </ContentBox>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container justify="space-around" spacing={4}>
                    <Grid item> <Card className="card">
                        <Grid container>
                            <Grid>
                                <JustifyBox>
                                    <img src={library}/>
                                </JustifyBox>
                            </Grid>

                            <Grid>
                                <ContentBox>
                                    <Typography>
                                        few words about library
                                    </Typography>
                                </ContentBox>
                            </Grid>
                        </Grid>
                    </Card>
                    </Grid>
                </Grid>
                <Grid container justify="space-around" spacing={4}>
                    <Grid item>
                <Card className="card">
                            <Grid container>
                                <Grid>
                                    <JustifyBox>
                                        <img src={vision}/>
                                    </JustifyBox>
                                </Grid>

                                <Grid>
                                    <ContentBox>
                                        <Typography>
                                            few words about vision
                                        </Typography>
                                    </ContentBox>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container justify="space-around" spacing={4}>
                    <Grid item>
                        <Card className="card">
                            <Grid container>
                                <Grid>
                                    <JustifyBox>
                                        <img src={museum}/>
                                    </JustifyBox>
                                </Grid>

                                <Grid>
                                    <ContentBox>
                                        <Typography>
                                            few words about museum
                                        </Typography>
                                    </ContentBox>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
            </Slider>

        </section>
    );
};

export default DealSlider;
