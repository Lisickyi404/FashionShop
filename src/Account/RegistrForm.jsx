import { useSelector,useDispatch } from 'react-redux';
import React from 'react';

import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useParams
} from "react-router-dom";
import { accountSlice } from '../redux/account.js';
import {setData} from '../redux/account.js'
import {useForm} from 'react-hook-form'


function RegistrForm(){

    const transfers=[{company:'Белпочта',time:'2-3 дня',price:10},{company:'Белпочта',time:'2-3 дня',price:10},{company:'Белпочта',time:'2-3 дня',price:10}]
    const payments = ['Банковская карта','При получении','Оплата ЕРИП']
    
    const dispatch=useDispatch();
    const {
        register,
        formState:{errors},
        handleSubmit
    } = useForm();

  

    const [company,setCompany]=React.useState(transfers[0])
    const [payment,setPayment]=React.useState(payments[0])
    const onSubmit = (data) =>{
        var pay = {payType: payment}
        var companyType = {companyType: company}
        var ob=Object.assign(data,companyType,pay)
        dispatch(setData(ob))
        console.log(JSON.stringify(ob))
    }
    return (
    <div className="RegistrForm">
        <span>Оформление заказа</span>
        <form className="dataList" onSubmit={handleSubmit(onSubmit)}>
            <div className='dataInputs'>
            <input placeholder="ФИО" {...register("name", { required: true })} />
          <input
            placeholder="Контактный телефон"
            {...register("phone", { required: true })}
          ></input>
          <input
            placeholder="Индекс"
            {...register("index", { required: true })}
          ></input>
          <input
            placeholder="Ваш полный адресс"
            {...register("adress", { required: true })}
          ></input>
          <input
            placeholder="Электронная почта"
            {...register("email", { required: true })}
          ></input>
          <input placeholder="Комментарий" {...register("comment")}></input>
          

        <div className='dataHolder'>
        <span>Выберите способ доставки</span>
        <div className="transfer">
        <form>
            {transfers.map((ob, i) => (
            <label key={i}>
                <div className='kaka'>
                <input type="checkbox" checked={company==transfers[i] ? true : false} onChange={()=>setCompany(transfers[i])}/>
                <h4>{ob.company}</h4>
                </div>
                <p>
                Доставка на отделение {ob.time}
                Стоймость {ob.price}
                </p>
            </label>
            ))}
        </form>
        </div>
        <span>Способ оплаты</span>
        <div className="transfer">
            <form>
                {payments.map((ob,i)=>(
            
                        <label  key={i}>
                        <input type="checkbox" checked={payment==payments[i] ? true : false} onChange={()=>setPayment(payments[i])}/>
                        <h4>{ob}</h4>
                    </label>
                ))}
            </form>
        </div>
        <div className="buttons">
            </div>
        </div>
        </div>
        <input type='submit' value='отправить'></input>
    
        </form>
    
    </div>
    );
}

export default RegistrForm;