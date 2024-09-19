import style from './instagram.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const InstagramLogin = () => {


    return (
        <div className={style.wrapper}>
            <div className={style.inner}>
                <div className={style.screenshots}>
                    <Image src="/home-phones-2x.png" width={929} height={1268} alt="Instagram" />
                </div>
                <div className={style.main}>
                    <div className={style.box}>
                        <div className={style.logo}>
                            <Image src="/logo.png" width={3840} height={2160} alt="Logo" />
                        </div>
                        <div className={style.form}>
                            <form>
                                <div className={style.field}>
                                    <input type="text" placeholder="Phone number, username, or email" />
                                </div>
                                <div className={style.field}>
                                    <input type="password" placeholder="Password" />
                                </div>
                                <div className={style.send}>
                                    <button type="submit">Log in</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className={style.box}>
                        <p className={style.signup}>
                            Don't have an account? <Link href="#">Sign up</Link>
                        </p>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default InstagramLogin;