import { useState } from "react";
import "./styles.scss";

export function CardMenu(props: any) {
    const item = props.params
    const [open, setOpen] = useState(false)

    return (
        <>
            <div className="card-menu">
                <a onClick={() => setOpen(!open)} className={open ? 'card-dropdown active' : 'card-dropdown'}>
                    <p>{item.title}</p>
                    {open === false ?
                        <p>+</p>
                        :
                        <p>-</p>
                    }
                </a>
                <div className={open ? 'info-dropdown dropdown-active' : 'info-dropdown'}>
                    <ul>
                        <li>Subtexto</li>
                        <li>Subtexto</li>
                        <li>Subtexto</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
