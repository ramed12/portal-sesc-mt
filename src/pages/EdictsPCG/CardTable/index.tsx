import { useState } from "react";
import "./styles.scss"

function CardTable(props: any) {
    const [accordion, setAccordion] = useState(true)
    const pageNumbers = [];
    const item = props.item;

    for (let i = 1; i <= props.totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="card-label">
            <div className="text-label">
                <div>Unidade:</div>
                <div>{item.unit}</div>
            </div>
            <div className="text-label">
                <div>Projeto:</div>
                <div>{item.project}</div>
            </div>
            <div className="text-label">
                <div>Curso:</div>
                <div>{item.class}</div>
            </div>
            <div className="text-label">
                <div>Inscrições:</div>
                <div>{item.registrations}</div>
            </div>
            <div style={{ padding: '15px 0 15px 20px' }} className={accordion === false ? 'accordion' : 'accordion-none'}>
                <div><p className="field">• Complemento:<span> {item.complement}</span></p></div>
                <div><p className="field">• Horário:<span> {item.hours}</span></p></div>
            </div>
            <div>
                <div className="actions">
                    <a className="btn-action" style={{minHeight: 44, minWidth: 44}} onClick={() => setAccordion(!accordion)}>
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.375 10.4062V0.0937494H6.125V10.4062H4.375ZM0.0937501 6.125V4.375H10.4063V6.125H0.0937501Z" fill="#222222" />
                        </svg>
                    </a>
                    <a className="btn-action">
                        <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.42969 0.5V6.08621C1.42969 6.74468 1.69126 7.37617 2.15687 7.84178C2.62248 8.30739 3.25398 8.56897 3.91245 8.56897C4.57091 8.56897 5.20241 8.30739 5.66802 7.84178C6.13363 7.37617 6.3952 6.74468 6.3952 6.08621V2.36207C6.3952 2.03283 6.26442 1.71708 6.03161 1.48428C5.79881 1.25148 5.48306 1.12069 5.15383 1.12069C4.82459 1.12069 4.50884 1.25148 4.27604 1.48428C4.04323 1.71708 3.91245 2.03283 3.91245 2.36207V6.7069M8.25727 1.12069H16.3262C16.6555 1.12069 16.9712 1.25148 17.204 1.48428C17.4368 1.71708 17.5676 2.03283 17.5676 2.36207V17.2586C17.5676 17.5879 17.4368 17.9036 17.204 18.1364C16.9712 18.3692 16.6555 18.5 16.3262 18.5H3.91245C3.58321 18.5 3.26746 18.3692 3.03466 18.1364C2.80185 17.9036 2.67107 17.5879 2.67107 17.2586V10.431M14.4642 6.08621H9.49865M14.4642 9.81034H9.49865M14.4642 13.5345H5.77451" stroke="#222222" strokeWidth="1.5" />
                        </svg>
                        <p>Edital</p>
                    </a>
                    <a  onClick={() => props.onItemChange()}  className="btn-action">
                        <svg width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.56901 0.25C5.40234 0.25 1.84401 2.84167 0.402344 6.5C1.84401 10.1583 5.40234 12.75 9.56901 12.75C13.7357 12.75 17.294 10.1583 18.7357 6.5C17.294 2.84167 13.7357 0.25 9.56901 0.25ZM9.56901 10.6667C7.26901 10.6667 5.40234 8.8 5.40234 6.5C5.40234 4.2 7.26901 2.33333 9.56901 2.33333C11.869 2.33333 13.7357 4.2 13.7357 6.5C13.7357 8.8 11.869 10.6667 9.56901 10.6667ZM9.56901 4C8.18568 4 7.06901 5.11667 7.06901 6.5C7.06901 7.88333 8.18568 9 9.56901 9C10.9523 9 12.069 7.88333 12.069 6.5C12.069 5.11667 10.9523 4 9.56901 4Z" fill="black" />
                        </svg>
                        <p>Classificados</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default CardTable;
