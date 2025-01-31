import React, { useReducer } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from './Header';
import Booking from './Booking';

const Main = () => {
    const seedRandom = function (seed) {
        var m = 2 ** 35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = (s * a) % m) / m;
        };
    };

    const fetchAPI = (date) => {
        let result = [];
        let random = seedRandom(date.getDate());
        for (let i = 17; i <= 23; i++) {
            if (random() < 0.5) {
                result.push(i + ':00');
            }
            if (random() > 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };

    const submitAPI = (formData) => {
        return true;
    };

    function updateTimes(state, date) {
        console.log("Updating available times for:", date);
        return { availableTimes: fetchAPI(new Date(date)) };
    }

    const initialState = { availableTimes: fetchAPI(new Date()) };
    const [state, dispatch] = useReducer(updateTimes, initialState);

    const navigate = useNavigate();
    function submitForm(formData) {
        if (!formData.date || !formData.time || !formData.guest || !formData.occasion) {
            console.error("Form is incomplete!");
            return;
        }
        console.log("Form Data:", formData);
        if (submitAPI(formData)) {
            console.log("Navigating to /confirmed...");
            navigate("/confirmed");
        }
    }

    return (
        <main>
            <Routes>
                <Route path="/" element={<Header />} />
                <Route
                    path="/booking"
                    element={
                        <Booking
                            availableTimes={state.availableTimes}
                            dispatch={dispatch}
                            submitForm={submitForm}
                        />
                    }
                />
                <Route path="/confirmed" element={<div>Confirmation Page</div>} />
            </Routes>
        </main>
    );
};

export default Main;


