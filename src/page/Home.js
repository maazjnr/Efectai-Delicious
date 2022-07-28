import React from 'react';
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import { Link } from 'react-router-dom';
import Vegie from '../components/Vegie';
import Search from '../components/Search';
import Popular from '../components/Popular';

const Home = () => {

    return(
            <section className='home-container'>
                <div className='home-banner'>
                    <h5>Welcome to</h5>
                    <h1>Efectai Delicious</h1>
                </div>
                <Search />
                <div className='category'>
                    <Link className='category-link' to=''>
                    <FaPizzaSlice />
                    <h4>Italian</h4>
                    </Link>
                    <Link className='category-link' to=''>
                    <GiNoodles /><h4>Thai</h4>
                    </Link>
                    <Link className='category-link' to=''>
                    <FaHamburger/>
                    <h4>America</h4>
                    </Link>
                    <Link className='category-link' to=''>
                    <GiChopsticks />
                    <h4>Italian</h4>
                    </Link>
                </div>

                <Vegie />
                <Popular />
            </section>
    )
}

export default Home;