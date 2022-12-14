import { useState } from "react";
import "./styles.scss";

export function CardBidding(props: any) {
    const item = props.item
    const [viewDownload, setViewDownload] = useState(false)

    const TextGroup = (props: any) => {
        return (
            <div className="textGroup">
                <p className="label">{props.label}</p>
                <p className="value">&nbsp;{props.value}</p>
            </div>)
    }

    const handleDownload = (props: any) => {
        fetch(props.url, { mode: 'no-cors' })
            .then((response: any) => {
                response.blob().then((blob: any) => {
                    const url = window.URL.createObjectURL(new Blob([blob]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', props.name);
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                });
            });
    };

    const DownloadLink = (props: any) => {
        return (
            <a className="downloadLink" onClick={() => handleDownload(props)}>
                <svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.9997 27.3339H2.99967C2.29243 27.3339 1.61415 27.0529 1.11406 26.5528C0.613959 26.0527 0.333008 25.3744 0.333008 24.6672V3.33386C0.333008 2.62661 0.613959 1.94833 1.11406 1.44824C1.61415 0.94814 2.29243 0.667189 2.99967 0.667189H12.333C12.345 0.665625 12.3571 0.665625 12.369 0.667189H12.377C12.3896 0.671124 12.4026 0.673804 12.4157 0.675189C12.533 0.683189 12.649 0.705855 12.761 0.743189H12.817C12.8416 0.760414 12.8648 0.779587 12.8863 0.800522C13.0316 0.865113 13.1639 0.955458 13.277 1.06719L21.277 9.06719C21.3888 9.18024 21.4791 9.3126 21.5437 9.45786C21.5553 9.48669 21.5655 9.51605 21.5743 9.54586L21.5877 9.58319C21.625 9.69386 21.6463 9.80986 21.653 9.92719C21.6542 9.94047 21.6573 9.95351 21.6623 9.96586V9.97385C21.6645 9.98261 21.6658 9.99153 21.6663 10.0005V24.6672C21.6663 25.3744 21.3854 26.0527 20.8853 26.5528C20.3852 27.0529 19.7069 27.3339 18.9997 27.3339ZM14.2317 16.6672V23.3339H15.485V20.6139H17.4317V19.4965H15.485V17.7885H17.6663V16.6672H14.2317ZM9.29834 16.6672V23.3339H10.9063C11.2394 23.3503 11.5719 23.2918 11.8793 23.1625C12.1867 23.0333 12.4611 22.8367 12.6823 22.5872C13.1422 22.0004 13.3726 21.2662 13.3303 20.5219V19.4419C13.3614 18.7053 13.1245 17.9825 12.6637 17.4072C12.2303 16.9139 11.597 16.6419 10.9397 16.6672H9.29834ZM4.33301 16.6672V23.3339H5.58634V20.9885H6.42101C6.97834 21.0192 7.52234 20.8125 7.91967 20.4205C8.29819 19.9969 8.4946 19.4412 8.46634 18.8739C8.49109 18.2928 8.2948 17.724 7.91701 17.2819C7.73245 17.0772 7.50486 16.9159 7.25058 16.8097C6.9963 16.7034 6.72165 16.6547 6.44634 16.6672H4.33301ZM12.333 3.33386V10.0005H18.9997L12.333 3.33386ZM10.9277 22.2165H10.5517V17.7885H11.0077C11.167 17.7791 11.3262 17.8098 11.4706 17.8779C11.615 17.9459 11.7401 18.049 11.8343 18.1779C12.0303 18.5819 12.1143 19.0312 12.077 19.4792V20.6379C12.1063 21.0645 12.0143 21.4912 11.8103 21.8659C11.7027 21.9915 11.5661 22.0891 11.4123 22.1502C11.2585 22.2113 11.0922 22.234 10.9277 22.2165ZM6.44634 19.8672H5.58501V17.7885H6.45834C6.56559 17.7897 6.6708 17.8181 6.76408 17.871C6.85737 17.9239 6.93568 17.9997 6.99167 18.0912C7.13567 18.3299 7.20501 18.6045 7.19167 18.8832C7.20839 19.1425 7.13954 19.4001 6.99567 19.6165C6.93029 19.6986 6.84647 19.7641 6.75101 19.8076C6.65556 19.8512 6.55117 19.8716 6.44634 19.8672Z" fill="#B5B5B5" />
                </svg>
                <p className="value">&nbsp;{props.name}</p>
            </a>)
    }

    return (
        <>
            <div className="card-bidding">
                <div>
                    <p className="number-bidding">{item.number}</p>
                </div>
                <div>
                    <p className="title-bidding">{item.title}</p>
                    <p className="description-bidding">{item.description}</p>
                </div>
                <div>
                    <TextGroup label="Estados:" value="AR e MT" />
                    <TextGroup label="Edital:" value={item.edit} />
                    <TextGroup label="Publicação:" value={item.public} />
                    <TextGroup label="Limite para inscrição:" value={item.limitSubscribe} />
                </div>
                {viewDownload &&
                    <div className="card-download">
                        <div>
                            <p className="tag-download">Arquivos para Download</p>
                        </div>
                        <div className="download">
                            {item.files.map((item: any, index: any) => {
                                return (
                                    <DownloadLink url={item.url} name={item.name} key={index} />
                                );
                            })}
                        </div>
                        <div>
                            <a className="button-all-download">Baixar todos arquivos</a>
                        </div>
                    </div>
                }
                <div className="more-detail">
                    {!viewDownload ?
                        <a onClick={() => setViewDownload(true)}>+ detalhes</a>
                        :
                        <a onClick={() => setViewDownload(false)}>- detalhes</a>
                    }
                </div>
            </div>
        </>
    );
}
