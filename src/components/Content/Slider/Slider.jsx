import React, {useState, useEffect} from 'react'
import Data from '../../../mocks/en-us/featured-banners.json'
import {
    SliderContainer,
    CarouselImg,
    ImgBanerContainer,
    TextDiv,
    Text,
} from './styledSlider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {colors} from '../../../utils/colors'

const Slider = () => {
    const banersData = []
    Data.results.forEach(baner => {
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
    
    const [baners, setBaners] = useState(banersData)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selectedImage, setSelectedImage] = useState(baners[0])

/*     const selectNewImage = (index, images, next = true) => {
        const condition = next ? selectedIndex < baners.length : selectedIndex > 0
        const nextIndex = next ? 
        (condition ? selectedIndex + 1 : 0) :
        condition ? selectedIndex - 1 : baners.length -1
        setSelectedImage(images[nextIndex])
        selectedIndex(nextIndex)
            
    } */

    const previous = () => {
        const condition = selectedIndex > 0
        const nextIndex = condition ? selectedIndex - 1 : baners.length - 1
        setSelectedImage(baners[nextIndex])
        setSelectedIndex(nextIndex)
    }

    const next = () => {
        const condition = selectedIndex < baners.length -1
        const nextIndex = condition ? selectedIndex + 1 : 0
        setSelectedImage(baners[nextIndex])
        setSelectedIndex(nextIndex)
    }
 
    useEffect(() => {
        const intervalo = setInterval(() => {
            next()
        }, 6000)


        return () => clearInterval(intervalo)

    }, [selectedImage, selectedIndex]);  

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
                    <Text title>{selectedImage.title}</Text>
                    <Text>{selectedImage.description}</Text>
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