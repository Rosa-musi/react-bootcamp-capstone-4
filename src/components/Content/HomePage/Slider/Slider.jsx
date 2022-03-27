import React, {useState, useEffect, useCallback} from 'react'
import { useFetch } from '../../../../utils/hooks/useFetch'
import {
    SliderContainer,
    CarouselImg,
    ImgBanerContainer,
    TextDiv,
    Text,
} from './styledSlider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {colors} from '../../../../utils/colors'

const Slider = () => {
    
    const [baners, setBaners] = useState([{}])
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selectedImage, setSelectedImage] = useState(baners[0])

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



    const previous = () => {
        const condition = selectedIndex > 0
        const nextIndex = condition ? selectedIndex - 1 : baners.length - 1
        setSelectedImage(baners[nextIndex])
        setSelectedIndex(nextIndex)
    }

    const next = useCallback(() => {
        const condition = selectedIndex < baners.length -1
        const nextIndex = condition ? selectedIndex + 1 : 0
        setSelectedImage(baners[nextIndex])
        setSelectedIndex(nextIndex)
    }, [baners, selectedIndex])
 
    useEffect(() => {
        const intervalo = setInterval(() => {
            next()
        }, 6000)


        return () => clearInterval(intervalo)  //to erase interval (unmount)

    }, [selectedImage, selectedIndex, next]);  

    return (
        <SliderContainer>
            <FontAwesomeIcon 
                onClick={previous} 
                icon="fa-solid fa-chevron-left" 
                style={{
                    cursor: "pointer",
                    fontSize: "3rem",
                    color: colors.textLogo,
                  }} 
            />
             <ImgBanerContainer>
                <CarouselImg 
                    src={selectedImage.image} 
                    alt="imágen" 
                />
                <TextDiv>
                    <Text titl>{selectedImage.title}</Text>
                    <Text description>{selectedImage.description}</Text>
                </TextDiv>
                
            </ImgBanerContainer> 
            
            <FontAwesomeIcon 
                onClick={next} 
                icon="fa-solid fa-chevron-right" 
                style={{
                    cursor: "pointer",
                    fontSize: "3rem",
                    color: colors.textLogo,
                  }} 
            />
  
        </SliderContainer>
    )
}

export default Slider