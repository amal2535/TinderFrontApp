import React from "react";
import Testim from "./ui/Testimonials";
import Privacy from "./ui/Privacy";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';


const Footer = () => {

    const{t}=useTranslation()

    return (
            <section class="bg-white dark:bg-gray-900 flex flex-col items-center">
                <Testim />
                <Privacy />
                <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-blue-800 to-transparent opacity-25 dark:opacity-100 w-11/12"/>
                <div className="flex lg:flex-row flex-col gap-3 w-full justify-between text-gray-800 dark:text-white mb-12 items-center px-4">
                    <div className="flex gap-7">
                        <NavLink to="/about"><p className="hover:text-[#E91E63] cursor-pointer">{t('aboutus')}</p></NavLink>
                        <NavLink to="/faq"><p className="hover:text-[#E91E63] cursor-pointer">{t('faq')}</p></NavLink>
                        <NavLink to="/contact"><p className="hover:text-[#E91E63] cursor-pointer">{t('contact')}</p></NavLink>
                        <NavLink to="/security"><p className="hover:text-[#E91E63] cursor-pointer">{t('security')}</p></NavLink>
                        <NavLink to="/policy"><p className="hover:text-[#E91E63] cursor-pointer">{t('policy')}</p></NavLink>
                    </div>
                    <p className="">© 2023 Match Group, LLC, All Rights Reserved</p>
                </div>

            </section>
    )
}

export default Footer