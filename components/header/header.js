/**
 * Header Sections
 */

import Link from 'next/link';
import HeadStyle from '../header/styles.module.css';

const Header = () => {
    return (
        <>
            <section className={HeadStyle.header__ground__6732}>
                <div className="custom_container">
                    <div className={HeadStyle.__grid__08s_kspo}>
                        <div>
                            <Link href="/" className={HeadStyle.logo__87609}>Fittrack</Link>
                        </div>
                        <div className={HeadStyle.menu__items__0sa87}>
                        <div className={HeadStyle.menu__items__098}>
                            <Link href="#">Tutorial</Link>
                            <Link href="#">Testimonials</Link>
                            <Link href="#">Blog</Link>
                            <Link href="#">Contact Us</Link>
                        </div>
                        </div>
                        <div className={HeadStyle.right_side__098}>
                            <div className={HeadStyle.menu__items__098}>
                                <Link href="#">Log In</Link>
                                <Link href="#" className={HeadStyle.active__86__osiap}>Sign Up</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header;