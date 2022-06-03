import React from 'react';
import {Link} from 'react-router-dom';
import './PricingSection.css';


const Pricing = () => {
    function Card(props) {
        return (
            <div className='card'>
                <h3 className='card-title'>- {props.title} -</h3>
                <span className='bar'></span>
                <p className='btc'>{props.subtitle}</p>
                <p>- {props.days} days-</p>
                <p>- {props.views} -</p>
                <p>- {props.features} -</p>
                <p>- {props.private} -</p>
                <Link to='/contact' className='btn'>Book</Link>
            </div>
        )
    }
    return (
        <div className='pricing'>
            <div className='card-container'>
                <Card title='Hiking' subtitle='Traveling' days='3' views='Austria' features='Mountains, Viena' private='Private'/>
                <Card title='Riding' subtitle='Traveling' days='10' views='France' features='Paris, Effele Tower' private='Private'/>
                <Card title='Climbing' subtitle='Traveling' days='9' views='England' features='Belfast, Ascot, London, Greenvich' private='Private'/>
            </div>
            
        </div>
    )
}

export default Pricing