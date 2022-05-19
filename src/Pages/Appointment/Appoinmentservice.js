import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const Appoinmentservice = ({ appoinmentService }) => {
    const { name, slots } = appoinmentService;

    return (
        <div class="card w-96 bg-base-100 shadow-xl mt-2">
            <div class="card-body">
                <h2 class="card-title justify-center">{name}</h2>
                <p className='text-center'>{
                    slots.length > 0
                        ? <span>{slots[0]}</span>
                        :
                        <span>Try Next Day</span>
                }</p>
                <p className='text-center'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div class="card-actions justify-center">
                    <button className='btn btn-secondary' disabled={slots.length === 0}>Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Appoinmentservice;