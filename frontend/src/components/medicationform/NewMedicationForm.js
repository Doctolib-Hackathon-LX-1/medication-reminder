import React from 'react';
import { useForm } from "react-hook-form";
import SelectDateFrame from './SelectDateFrame';
import uuid from 'uuid';

const NewMedicationForm = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {


        console.log("data", typeof data.end_date, data)
        const newObject = {
            id: uuid(),
            application_id: '4a144f5d-68ef-4784-9f52-31caea0aea68',
            application_user_id: null,
            title: data.name,
            remind_on_date_tz: data.start_date,
            remind_on_time_tz: data.end_date,
            notify_in_advance: null, //create cariable and concatanate to have null or result as a string
            repeat_every: null, //create cariable and concatanate to have null or result as a string
            repeat_customized: null,
            repeat_on_days_of_week: null,
            repeat_on_days_of_month: null,
            repeat_on_ordered_day_of_month_which: null,
            repeat_on_ordered_day_of_month_day: null,
            repeat_on_months_of_year: null,
            start_date: data.start_date,
            end_date: data.end_date,
        };
        console.log("newObject", newObject);
    };

    const data = [{
            Id: 1,
            Subject: 'Explosion of Betelgeuse Star',
            StartTime: new Date(2020, 5, 25, 20, 30),
            EndTime: new Date(2020, 5, 25, 21, 0),
            OwnerColor: '#7499e1'     
        }, 
        {         
            Id: 2,         
            Subject: 'Thule Air Crash Report',         
            StartTime: new Date(2020, 5, 24, 22, 0),         
            EndTime: new Date(2020, 5, 24, 22, 30),         
            OwnerColor: '#7499e1'     
        },

        {
            "notify_in_advance": null,
            "repeat_every": null,
            "repeat_customized": null,
            "repeat_on_days_of_week": null,
            "repeat_on_days_of_month": null,
            "repeat_on_ordered_day_of_month_which": null,
            "repeat_on_ordered_day_of_month_day": null,
            "repeat_on_months_of_year": null,
            "snoozed": 0,
            "created_at": "2019-12-17 03:31:52",
            "updated_at": "2019-12-17 03:31:52",
            "last_notified_utc": null,
            "next_notification_utc": "2020-02-15 07:30:00"
            }]

    return ( 
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div>
            <p>Name </p>
                <input type="text" placeholder="Name" name="name" ref={register}/>
            <p>Start date </p>
                <input type="date" placeholder="start_date" name="start_date" ref={register}/>
            <p>Start time </p>
                <input type="time" placeholder="end_date" name="end_date" ref={register}/>

                <div >
                    <p>Notification in advance</p>


                    <p>minutes</p><select name="minutes" ref={register}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="11">31</option>
                        <option value="12">32</option>
                        <option value="13">33</option>
                        <option value="14">34</option>
                        <option value="15">35</option>
                        <option value="16">36</option>
                        <option value="17">37</option>
                        <option value="18">38</option>
                        <option value="19">39</option>
                        <option value="20">40</option>
                        <option value="21">41</option>
                        <option value="22">42</option>
                        <option value="23">43</option>
                        <option value="24">44</option>
                        <option value="25">45</option>
                        <option value="26">46</option>
                        <option value="27">47</option>
                        <option value="28">48</option>
                        <option value="29">49</option>
                        <option value="30">50</option>
                        <option value="31">51</option>
                        <option value="31">52</option>
                        <option value="23">53</option>
                        <option value="24">54</option>
                        <option value="25">55</option>
                        <option value="26">56</option>
                        <option value="27">57</option>
                        <option value="28">58</option>
                        <option value="29">59</option>
                    </select>
                    <p>hours</p><select name="hours" ref={register}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                    </select>
                    <p>days</p><select name="days" ref={register}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                    </select>
                    <p>weeks</p><select name="weeks" ref={register}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="11">31</option>
                        <option value="12">32</option>
                        <option value="13">33</option>
                        <option value="14">34</option>
                        <option value="15">35</option>
                        <option value="16">36</option>
                        <option value="17">37</option>
                        <option value="18">38</option>
                        <option value="19">39</option>
                        <option value="20">40</option>
                        <option value="21">41</option>
                        <option value="22">42</option>
                        <option value="23">43</option>
                        <option value="24">44</option>
                        <option value="25">45</option>
                        <option value="26">46</option>
                        <option value="27">47</option>
                        <option value="28">48</option>
                        <option value="29">49</option>
                        <option value="30">50</option>
                        <option value="31">51</option>
                        <option value="31">52</option>
                    </select>
                <button type="submit">Add to Calendar</button>
            </div>
        </div>
        </form>

            <SelectDateFrame />
        </div>
     );
}
 
export default NewMedicationForm;