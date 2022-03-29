import React, {useState, useEffect, useCallback} from 'react'
import { useFetch } from '../../../../utils/hooks/useFetch'
import {
    SliderContainer,
    CarouselImg,
    ImgBanerContainer,
    TextDiv,
    Text,
    SwiperContainer,
} from './styledSlider'
import {colors} from '../../../../utils/colors'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'



const Slider = () => {

    const [baners, setBaners] = useState([{}])
    const [data, isLoading, error] = useFetch(`&q=${encodeURIComponent(
        '[[at(document.type, "banner")]]'
      )}&lang=en-us&pageSize=5`)

      useEffect(() => {
        const banersData = []
        !isLoading && data.results.forEach(baner => {
            let description = ""
            baner.data.description.forEach(obj => {
                description = obj.text
            })
            banersData.push({
               title: baner.data.title,
               image: baner.data.main_image.url,
               description: description,
            })
            
        }) 
        setBaners(banersData)
      }, [data.results, isLoading])

    return (
        <SliderContainer>
            <SwiperContainer>
            <Swiper
                modules={[Navigation,  Autoplay]}
                autoplay={{delay: 6000}}
                navigation
                slidesPerView={1}
                style={{"--swiper-navigation-color": colors.light}}
            >
                {
                    baners.map(baner => {
                       return(
                        <SwiperSlide key={crypto.randomUUID()}>
                            <ImgBanerContainer>
                                <CarouselImg 
                                    src={baner.image} 
                                    alt="imágen" 
                                />
                                <TextDiv>
                                    <Text titl>{baner.title}</Text>
                                    <Text description>{baner.description}</Text>
                                </TextDiv>
                            </ImgBanerContainer>  
                        </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            </SwiperContainer>
        </SliderContainer>
    )
}

export default Slider