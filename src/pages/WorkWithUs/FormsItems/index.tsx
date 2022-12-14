
import "./styles.scss";

export function FormsItems(props: any) {

    return (
        <>
            {props.forms.map((field: any) => {
                if (field.type === "input") {
                    return (
                        <div className={`text-input ${field.class}`} key={field.value}>
                            <div className="label-input">
                                <label>{field.label}
                                    {field.required === true &&
                                        <span className="field-required"> *</span>
                                    }
                                </label>
                                {field.checkbox === true &&
                                    <div className="checkbox">
                                        <input type="checkbox" />
                                        <label>{field.labelCheckbox}</label>
                                    </div>
                                }
                            </div>
                            <input
                                type="text"
                                id={field.value}
                                name={field.value}
                                required={field.required}
                            />
                        </div>
                    );
                } else if (field.type === "select") {
                    return (
                        <div className={`text-input ${field.class}`} key={field.value}>
                            <label>{field.label}
                                {field.required === true &&
                                    <span className="field-required"> *</span>
                                }
                            </label>
                            <select
                                placeholder={field.label}
                                id={field.value}
                                name={field.value}
                                required={field.required}
                            >
                                <option value="">Selecione uma opção</option>
                            </select>
                        </div>
                    );
                } else if (field.type === "multi-checkbox") {
                    return (
                        <div className={`text-input ${field.class}`} key={field.value}>
                            <label>{field.label}
                                {field.required === true &&
                                    <span className="field-required"> *</span>
                                }
                            </label>
                            <div className="checkboxs">
                                {field.checkboxs.map((item: any) => {
                                    return (
                                        <div key={item.label} className="item-checkbox">
                                            <input name={item.label} type="checkbox" />
                                            <label>{item.label}</label>
                                        </div>
                                    );
                                })}
                            </div>
                        </div >
                    );
                }
                return null;
            })}
        </>
    );
}
