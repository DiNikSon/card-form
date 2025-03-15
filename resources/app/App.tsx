import {useState, useEffect} from 'react';
import axios from "axios";
function AmountInput(props){

    const [input1, setInput1] = useState(props.value?parseFloat(props.value).toFixed(2):'');
    const [input2, setInput2] = useState(props.value?parseFloat(props.value).toFixed(2):'');
    function blurS(e){
        let v = parseFloat(e.target.value).toFixed(2)
        setInput1(v);
        setInput2(parseFloat(v*15).toFixed(2))
    }

    function blurP(e){
        let v = parseFloat(e.target.value/15).toFixed(2)
        setInput1(v);
        setInput2(parseFloat(v*15).toFixed(2))
    }

    function editS(e){
        setInput1(e.target.value);
    }

    function editP(e){
        setInput2(e.target.value);
    }

    return <div class="flex align-items-center">
        <input className="bank-card__amount bank-card__amount_left" placeholder="0000.00"  value={input1} onBlur={blurS} onInput={editS}/>
        <svg className="bank-card__amount-svg" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.2301 15.2189V18.472H8.72564V15.2189H8.485C7.0055 15.2189 5.72802 14.7703 4.65256 13.8731C3.58304 12.9699 3.04828 11.8499 3.04828 10.513C3.04828 10.3348 3.05422 10.1387 3.0661 9.92477C3.07799 9.70493 3.09581 9.51182 3.11958 9.34545L5.62404 9.64848L5.58839 10.0496C5.5765 10.1862 5.57056 10.3199 5.57056 10.4506C5.57056 11.2468 5.86765 11.9153 6.46183 12.456C7.06194 12.9907 7.81655 13.2581 8.72564 13.2581V7.40249C7.35309 7.40249 6.30437 7.16482 5.57947 6.68948C4.85458 6.2082 4.49213 5.5338 4.49213 4.66631C4.49213 3.75127 4.85755 3.04717 5.58839 2.55401C6.31922 2.0549 7.36498 1.80534 8.72564 1.80534H11.2301V5.40606C13.0067 5.40606 14.403 5.86654 15.419 6.78752C16.4351 7.70849 16.9431 8.96815 16.9431 10.5665C16.9431 11.9985 16.4291 13.1333 15.4012 13.9711C14.3792 14.803 12.9889 15.2189 11.2301 15.2189ZM8.72564 3.63244C8.04234 3.63244 7.54917 3.71265 7.24614 3.87308C6.94905 4.02757 6.80051 4.26227 6.80051 4.57718C6.80051 4.88021 6.96094 5.09411 7.28179 5.21889C7.60859 5.34367 8.08987 5.40606 8.72564 5.40606V3.63244ZM11.2301 7.42032V13.2581C12.2164 13.2581 12.9889 13.0115 13.5474 12.5184C14.1059 12.0252 14.3852 11.3627 14.3852 10.5308C14.3852 9.48508 14.1297 8.70671 13.6187 8.19572C13.1136 7.67878 12.3174 7.42032 11.2301 7.42032Z" fill="#8F90A6"/>
        </svg>
        <input className="bank-card__amount bank-card__amount_right" placeholder="0000.00" value={input2} onBlur={blurP} onInput={editP}/>
        <svg className="bank-card__amount-svg" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.4601 11.6462C15.0405 11.6462 16.7051 9.47915 16.7051 6.87235C16.7051 4.26555 15.0405 2.09846 11.4601 2.09846H5.83817V9.91885H3.29418V11.6462H5.83817V13.1538H3.29418V14.8812H5.83817V18.1789H7.78541V14.8812H11.3344V13.1538H7.78541V11.6462H11.4601ZM7.78541 9.91885V3.82585H11.4601C13.7214 3.82585 14.7892 5.11355 14.7892 6.87235C14.7892 8.63116 13.7214 9.91885 11.4601 9.91885H7.78541Z" fill="#8F90A6"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.54581 1.80534H11.4608C13.3114 1.80534 14.7037 2.36685 15.6337 3.30105C16.5621 4.23373 16.9989 5.507 16.9989 6.87232C16.9989 8.23764 16.5621 9.51091 15.6337 10.4436C14.7037 11.3778 13.3114 11.9393 11.4608 11.9393H8.07924V12.8607H11.6283V15.1742H8.07924V18.472H5.54581V15.1742H3.00183V12.8607H5.54581V11.9393H3.00183V9.62573H5.54581V1.80534ZM5.83817 2.09846H11.4601C15.0405 2.09846 16.7051 4.26555 16.7051 6.87235C16.7051 9.47915 15.0405 11.6462 11.4601 11.6462H7.78541V13.1538H11.3344V14.8812H7.78541V18.1789H5.83817V14.8812H3.29418V13.1538H5.83817V11.6462H3.29418V9.91885H5.83817V2.09846ZM8.07924 4.11891V9.62573H11.4608C12.5361 9.62573 13.2865 9.3206 13.7676 8.84639C14.2489 8.372 14.4969 7.69272 14.4969 6.87232C14.4969 6.05192 14.2489 5.37264 13.7676 4.89825C13.2865 4.42404 12.5361 4.11891 11.4608 4.11891H8.07924ZM7.78541 9.91885H11.4601C13.7214 9.91885 14.7892 8.63116 14.7892 6.87235C14.7892 5.11355 13.7214 3.82585 11.4601 3.82585H7.78541V9.91885Z" fill="#8F90A6"/>
        </svg>
    </div>
}

function SaveCheckbox(props){
    const [value, setValue] = useState(props.value);

    function check(e){
        let v = !value
        setValue(v);
        props.checked(v);
    }

    if(value)return <svg className={props.className} onClick={check} width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1.66406" y="1.04834" width="18" height="18" rx="3" fill="white" stroke="#3E7BFA" stroke-width="2"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1421 7.02853C15.4676 7.35397 15.4676 7.88161 15.1421 8.20704L9.79492 13.5543C9.63864 13.7105 9.42667 13.7983 9.20566 13.7983C8.98465 13.7983 8.77269 13.7105 8.61641 13.5543L6.18585 11.1237C5.86041 10.7983 5.86041 10.2706 6.18585 9.9452C6.51129 9.61976 7.03892 9.61976 7.36436 9.9452L9.20566 11.7865L13.9636 7.02853C14.2891 6.7031 14.8167 6.7031 15.1421 7.02853Z" fill="#3E7BFA"/>
    </svg>
    return <svg className={props.className} onClick={check} width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1.66406" y="1.04834" width="18" height="18" rx="3" fill="white" stroke="#3E7BFA" stroke-width="2"/>
    </svg>
}

function CardIcon(props){
    const creds = '•••• '+props.data.credentials.slice(-4);
    const date = props.data.expiration_date.slice(5,7)+' / '+props.data.expiration_date.slice(2,4);
    return <div className="bank-card__card-icon" onClick={()=>{props.select(props.data)}}>
        <div>{creds}</div>
        <div>{date}</div>
    </div>
}

function App() {
    const [formData,setFormData] = useState({
        credentials: '',
        year: '',
        month: '',
        cvc: '',
        remember: false
    })

    const [errors,setErrors] = useState({
        credentials: false,
        year: false,
        month: false,
        cvc: false,
    })

    const [cards, setCards] = useState([])

    useEffect(() => {
        const rootElement = document.getElementById('root');
        if (rootElement && rootElement.dataset.initialData) {
            setCards(JSON.parse(rootElement.dataset.initialData));
            console.log(JSON.parse(rootElement.dataset.initialData))
        }
    }, []);

    function isFutureDate(year: number, month: number): boolean {
        // Проверка на валидность входных данных
        if (year < 0 || year > 99 || month < 1 || month > 12) {
            return false;
        }

        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth() + 1; // Месяцы в JS нумеруются с 0
        const currentFullYear = parseInt(currentYear.toString().slice(-2)); // последние две цифры текущего года


        // Сравнение дат.  Учитываем, что year - это последние две цифры года.
        if (currentFullYear > year) {
            return false; // Дата в прошлом
        } else if (currentFullYear < year) {
            return true; // Дата в будущем
        } else { // Текущий год
            return month > currentMonth; // Дата в будущем, если месяц больше текущего
        }
    }

    function selectCard(data){
        setFormData(
            f=>({
                ...f,
                credentials: data.credentials,
                year: data.expiration_date.slice(2,4),
                month: data.expiration_date.slice(5,7),
                cvc: '',
                remember: false

            })
        )
    }
    function saveCard(){
        let errors = {
            credentials: false,
            year: false,
            month: false,
            cvc: false
        }

        errors.credentials = !/^\d{16}$/.test(formData.credentials);

        if(!/^\d+$/.test(formData.year)||!/^\d+$/.test(formData.month)){
            errors.month = !/^\d+$/.test(formData.year);
            errors.year = !/^\d+$/.test(formData.month);
        }else{
            let ifd = !isFutureDate(parseInt(formData.year),parseInt(formData.month))
            errors.month = ifd;
            errors.year = ifd;
        }

        errors.cvc = !/^\d{3}$/.test(formData.cvc);

        setErrors(errors)
        if(Object.values(errors).includes(true))return;
        axios.post('/card/', formData)
    }

    return (
        <div className="container">
            <div className="flex justify-content-center">
                <div className="bank-card">
                    <div className="bank-card__inner-wrapper">
                        <span className="bank-card__header">Пополнить банковской картой</span>
                        <form className="bank-card__inner-content">
                            <div className="col-12 flex flex-wrap gap-2">
                                <div className="col-12">
                                    <span className="bank-card__inner-header">УКАЖИТЕ СУММУ</span>
                                </div>
                                <div className="col-12">
                                    <AmountInput />
                                </div>
                            </div>
                            <div className="col-12 flex gap-3 align-items-center">
                                {cards.map(a=><CardIcon select={selectCard} data={a}/>)}
                                <div className="bank-card__card-icon_new bank-card__card-icon_selected">
                                    <svg style={{'display': 'inline'}} width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 5.97201V22.3053" stroke="#7B8794" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M5.83331 14.1387H22.1666" stroke="#7B8794" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <div>Новая карта</div>
                                </div>
                            </div>
                            <div className="col-12 flex align-items-center flex-wrap flex-sm-nowrap">
                                <div className="bank-card__card-back">
                                    НОМЕР КАРТЫ
                                    <input style={{border: errors.credentials&&'2px solid red'}} type="text" className="bank-card__card-input" placeholder="Номер карты" value={formData.credentials} onInput={(e)=>{setFormData(v=>({...v, credentials: e.target.value}))}}/>
                                    ДЕЙСТВУЕТ ДО<br/>
                                    <input style={{border: errors.month&&'2px solid red'}} type="text" className="bank-card__card-input bank-card__card-input_short" placeholder="мм" value={formData.month} onInput={(e)=>{setFormData(v=>({...v, month: e.target.value}))}}/>
                                    {' / '}
                                    <input style={{border: errors.year&&'2px solid red'}}  type="text" className="bank-card__card-input bank-card__card-input_short" placeholder="гг" value={formData.year} onInput={(e)=>{setFormData(v=>({...v, year: e.target.value}))}}/>
                                </div>
                                <div className="bank-card__card-back2">
                                    CVV/CVC
                                    <div className="flex flex-sm-column align-items-center align-items-sm-start">
                                        <input style={{border: errors.cvc&&'2px solid red'}}  type="text" className="bank-card__card-input bank-card__card-input_short" placeholder="000" value={formData.cvc} onInput={(e)=>{setFormData(v=>({...v, cvc: e.target.value}))}}/>
                                        <div className="bank-card__cvv-hint">
                                            три цифры<br/>
                                            с обратной стороны<br/>
                                            карты
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <SaveCheckbox className="bank-card__svg" value={formData.remember} checked={(e)=>{setFormData({...formData, remember: e})}}/>
                                <span style={{'margin':'0 4px 0 12px'}}>Запомнить эту карту. Это безопасно.</span>
                                <svg className="bank-card__svg" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.833313 10.1387C0.833313 5.07607 4.93737 0.972015 9.99998 0.972015C15.0626 0.972015 19.1666 5.07607 19.1666 10.1387C19.1666 15.2013 15.0626 19.3053 9.99998 19.3053C4.93737 19.3053 0.833313 15.2013 0.833313 10.1387ZM9.99998 2.63868C5.85784 2.63868 2.49998 5.99655 2.49998 10.1387C2.49998 14.2808 5.85784 17.6387 9.99998 17.6387C14.1421 17.6387 17.5 14.2808 17.5 10.1387C17.5 5.99655 14.1421 2.63868 9.99998 2.63868Z" fill="#C7C9D9"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99998 5.97201C10.4602 5.97201 10.8333 6.34511 10.8333 6.80535V10.1387C10.8333 10.5989 10.4602 10.972 9.99998 10.972C9.53974 10.972 9.16665 10.5989 9.16665 10.1387V6.80535C9.16665 6.34511 9.53974 5.97201 9.99998 5.97201Z" fill="#C7C9D9"/>
                                    <path d="M10.8333 13.472C10.8333 13.9323 10.4602 14.3053 9.99998 14.3053C9.53974 14.3053 9.16665 13.9323 9.16665 13.472C9.16665 13.0118 9.53974 12.6387 9.99998 12.6387C10.4602 12.6387 10.8333 13.0118 10.8333 13.472Z" fill="#C7C9D9"/>
                                </svg><br/>
                                <span style={{'margin':'0 4px 0 32px',display:'inline-block'}}>Сохраняя карту, вы соглашаетесь с <a style={{'color': '#568BFB', 'white-space': 'nowrap'}}>условиями привязки карты.</a></span>
                            </div>
                        </form>
                        <button className="bank-card__button" onClick={saveCard}>Оплатить</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
