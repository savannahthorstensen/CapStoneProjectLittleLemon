import React, { useState } from 'react';

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guest, setGuest] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm({ date, time, guest, occasion });
        console.log('Form submitted:', { date, time, guest, occasion });
    };

    const handleChange = (value) => {
        setDate(value);
        props.dispatch({ type: 'UPDATE_DATE', payload: value });
    };

    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        {/* Date Selection */}
                        <div>
                            <label htmlFor='book-date'>Choose Date</label>
                            <input id='book-date' value={date} onChange={(e) => handleChange(e.target.value)} type='date' required />
                        </div>

                        {/* Time Selection */}
                        <div>
                            <label htmlFor='book-time'>Choose Time:</label>
                            <select id="book-time" value={time} onChange={(e) => setTime(e.target.value)} required>
                                <option value="">Select a Time</option>
                                {props.availableTimes.map((availableTime) => (
                                    <option key={availableTime} value={availableTime}>{availableTime}</option>
                                ))}
                            </select>
                        </div>

                        {/* Number of Guests */}
                        <div>
                            <label htmlFor='book-guest'>Number of Guests:</label>
                            <input id='book-guest' type='number' min='1' value={guest} onChange={(e) => setGuest(e.target.value)} required />
                        </div>

                        {/* Occasion */}
                        <div>
                            <label htmlFor='book-occasion'>Occasion</label>
                            <select id='book-occasion' value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                                <option value="">Select an Occasion</option>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                        </div>

                        {/* Submit Button */}
                        <div className='btnReceive'>
                            <input aria-label='On Click' type='submit' value="Make Your Reservation" />
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;
