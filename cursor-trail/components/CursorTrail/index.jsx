'use client'
import style from './cursortrail.module.scss'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const CursorTrail = () => {

    const root = useRef()

    const images = [
        {
            src: '/01.jpg',
            width: 1920,
            height: 1080,
            alt: 'Image 01'
        },
        {
            src: '/02.jpg',
            width: 1920,
            height: 1080,
            alt: 'Image 02'
        },
        {
            src: '/03.jpg',
            width: 1920,
            height: 1080,
            alt: 'Image 03'
        },
        {
            src: '/04.jpg',
            width: 1920,
            height: 1080,
            alt: 'Image 04'
        },
        {
            src: '/05.jpg',
            width: 1920,
            height: 1080,
            alt: 'Image 05'
        }
    ]

    useEffect(() => {
        let current = 0
        let count = images.length - 1
        let isCreating = false
        const waitTime = 200
        const exitTime = 500


        const onMouseMove = (e) => {
            if(isCreating) return

            isCreating = true

            createImage(images[current], e.clientY, e.clientX, exitTime)

            current++

            if(current > count) {
                current = 0
            }

            setTimeout(() => {
                isCreating = false
            }, waitTime)
        }

        root.current.addEventListener('mousemove', onMouseMove)

        return () => {
            root.current?.removeEventListener('mousemove', onMouseMove)
        }
    }, [])

    const createImage = (image, top, left, exitTime) => {
        const img = document.createElement('img')
        img.src = image.src
        img.width = image.width
        img.height = image.height
        img.alt = image.alt

        root.current.appendChild(img)

        gsap.set(img, {
            left,
            top,
            scale: 0
        })

        gsap.to(img, {
            scale: 1,
            duration: 0.5
        })

        setTimeout(() => {
            gsap.to(img,{
                scale: 0,
                duration: 0.5,
                onComplete: () => {
                    img.remove()
                }
            })
        }, exitTime)
    }

    return (
        <section ref={root} className={style.wrapper}>
            <div className={style.inner}>
                <h2>CURSOR TRAIL</h2>
            </div>
        </section>
    )

}

export default CursorTrail;