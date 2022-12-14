import { useState } from "react";
import "./styles.scss";


export function FormsArray(props: any) {
    const [forms, setForms] = useState<any[]>([props.forms]);


    const addForms = () => {
        setForms([...forms, props.forms]);
    }

    return (
        <>
            <div className="forms">
                {forms.map((field: any, rowForms: number) => (
                    <div key={rowForms} style={{ marginTop: '2rem' }}>
                        {field.map((field: any, index: number) => {
                            return (
                                <div key={`${field.name}${index}`} className="input-array">
                                    <div className="label">
                                        <label>{field.label}</label>
                                    </div>
                                    <div className="input">
                                        <input name={field.name} type={field.type} placeholder={field.placeholder} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ))}
                <div style={{ marginTop: 10 }} className="input-array">
                    <div className="label-add">
                        <label>Adicionar uma {props.title}.</label>
                    </div>
                    <button onClick={addForms}>
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 20.5C15.5228 20.5 20 16.0228 20 10.5C20 4.97715 15.5228 0.5 10 0.5C4.47715 0.5 0 4.97715 0 10.5C0 16.0228 4.47715 20.5 10 20.5Z" fill="#F9FCFF" />
                            <path d="M10 6.5V14.5" stroke="#00A73A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 10.5H14" stroke="#00A73A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p>Nova {props.title}</p>
                    </button>
                </div>
            </div>
        </>
    );
}
