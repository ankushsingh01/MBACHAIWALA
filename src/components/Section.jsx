import React from 'react'
import {easeIn, motion} from "framer-motion"

const Section = ({h3, text, hasbtn=true, btntext, imgsrc, imgsize="70%",
                    backgroundcolor,headingcolor,textcolor,btnbgcolor,btncolor}) => {

        const headingoption ={
            initial:{
                y: "-100%",
                opacity: 0,
            },
                whileInView:{
                    y: 0,
                    opacity: 1
                }
            
        }

        const textoption ={
            ...headingoption,
            transition: {
                delay: 0.3
            }
        }
        const buttonoption ={
            initial:{
                y: "100%",
                opacity: 0,
            },
                whileInView:{
                    y: 0,
                    opacity: 1
                },
            
            transition: {
                delay: 0.3,
                ease:easeIn
            }
            
        }
        const imgoption ={
            initial:{
                scale:0.1,
                opacity: 0,
            },
                whileInView:{
                    scale:1,
                    opacity: 1
                },
            
            transition: {
                delay: 0.2,
                ease:easeIn
            }
            
        }
  return (
    <section className='section'
    style={{
        backgroundColor: backgroundcolor
    }}
        > 
    <div>
        <motion.h3  
            style={{
                color: headingcolor,
            }}
            {...headingoption}
        >
            {h3}</motion.h3>
        <motion.p
            style={{
                color: textcolor
            }}
            {...textoption}
        >{text}</motion.p>
        {
            hasbtn && <motion.button
            style={{
                color: btncolor,
                backgroundColor: btnbgcolor,
                cursor: 'pointer'
            }}
            {...buttonoption}
            >{btntext}</motion.button>
        }
        <div>
            <motion.img src={imgsrc} alt='Imgsrc' {...imgoption}
                style={{
                    width: imgsize
                }}
            />
        </div>
    </div>
    </section>
  )
}

export default Section