'use client'
import style from './header.module.scss'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

const HeaderReveal = () => {
    const root = useRef()

    useEffect(() => {
        const minScroll = 50
        let lastScroll = 0

        const handleScroll = (e) => {
            const currentScroll = window.scrollY


            if (currentScroll > minScroll) {
                root.current.classList.add(style.out)
            } else {
                root.current.classList.remove(style.out)
            }
            
            if(currentScroll < lastScroll) {
                root.current.classList.remove(style.out)
            }

            lastScroll = currentScroll
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    return (
        <header ref={root} className={style.wrapper}>
            <div className={style.logo}>
                YOUR LOGO
            </div>
            <div className={style.nav}>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/">About</Link>
                    </li>
                    <li>
                        <Link href="/">Contact</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default HeaderReveal