import React from 'react'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const Homepage = () => {
    const imgs = ['images/HomePage/CareAtHome.png', 'images/HomePage/Community.png', 'images/HomePage/Privacy.png', 'images/HomePage/ ANY MODE.png']
    const upperTextBeforeCol = ['We here aim to offer you the', 'We here aiming to make the', 'We here uses ', 'We offer to converse with doctor in']
    const upperTextCol = [' best ', ' largest ', ' WEB-3 Model ', '']
    const upperTextAfterCol = ['', '', 'to ensure', '']
    const middleText = ['CARE AT HOME', 'COMMUNITY', 'PRIVACY', 'ANY MODE']
    const belowTextBeforeCol = ['by the community of doctors and the best medical students which are available ', 'of doctors and medical enthusiasths, which will bring a revolution by ', 'of our customers so that there identity are not disclosed but there diseases or deficiency can be used for ', 'weather via voice calls, video calls and even chats to ensure the comfort of our user.']
    const belowTextCol = ['24X7', 'contributing', 'research', '']
    const belowTextAfterCol = [' just a click away.', ' their ideas and skills.', ' purposes.', '']
    const bgs = ['#200040','#000340','#200040','#000340']

    const [imgIndex, setImgIndex] = useState(0)

    const FredokaOne = {
        fontFamily: 'FredokaOne'
    }

    function changeImgIndex() {
        if (imgIndex === 3) {
            setImgIndex(0)
        } else {
            setImgIndex(imgIndex + 1)
        }
    }

    setInterval(changeImgIndex, 3000)

    return (
        <motion.div 
            className='bg-bg-blue h-screen'
            animate={{background: bgs[imgIndex],opacity:1,}}
        >
            <AnimatePresence>
                <motion.div className='flex z-[-100] text-white h-screen justify-between items-center px-16'
                    key={imgIndex}
                >
                    <motion.div className='text-xl max-w-[41rem]' style={FredokaOne}
                        initial={{ x: -5000, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 40 }}
                    >
                        <div className='tracking-[0.2em] ml-2'> {upperTextBeforeCol[imgIndex]} <span className='text-[#FF00F5]'>{upperTextCol[imgIndex]}</span> {upperTextAfterCol[imgIndex]} </div>
                        <div className='text-[#00FB83] text-8xl my-4 whitespace-nowrap'> {middleText[imgIndex]} </div>
                        <div className='tracking-[0.2em] ml-2'> {belowTextBeforeCol[imgIndex]} <span className='text-[#FF00F5]'>{belowTextCol[imgIndex]}</span> {belowTextAfterCol[imgIndex]} </div>
                    </motion.div>
                    <motion.div className=''
                        initial={{ x: 5000, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 40 }}
                    >
                        <img src={imgs[imgIndex]} alt='' className='w-[34rem]' />
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </motion.div>
    )
}

export default Homepage