
import { Footer } from "../../../components/Footer";
import "./styles.scss";
import { NavbarHome } from "../../../components/Navbar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { aboutPages } from "../pages/about";
import { policyPages } from "../pages/policy";
import { budgetPages } from "../pages/budget";


export function PagesComponent() {
    const { id } = useParams();
    const [page, setPage] = useState<any>(null);

    useEffect(() => {
        constructPage(id)
    }, []);

    const constructPage = (params: any) => {
        if (params === 'sobre-nos') {
            const view = aboutPages
            setPage(view);
        } else if (params === 'politica-de-privacidade') {
            const view = policyPages
            setPage(view);
        } else if (params === 'orcamento-aprovado') {
            const view = budgetPages
            setPage(view);
        }
    }

    const FastNavigation = (props: any) => (
        <div className="fast-navigation">
            {props.items.map((item: any, index: number) => (
                <div className="arrow-navigation" key={index}><a>{item.label}</a></div>
            ))}
        </div>
    )


    return (
        <>
            <NavbarHome />
            {page !== null &&
                <div className="container-pages">
                    {page.fastNavigation && <FastNavigation items={page.fastNavigation} />}
                    {page.titlePage && <p className="title-page">{page.titlePage}</p>}
                    {page && page.textPage && page.textPage.split('\n\n').map((part: string, index: number) => {
                        if (part.includes('\\nb\\')) {
                            const boldPart = part.replace(/\\nb\\/g, '');
                            return (
                                <p key={index} className="main-text-bold">{boldPart}</p>
                            );
                        } else if (part.includes('\\nurl\\')) {
                            const urlPart = part.replace(/\\nurl\\/g, '');
                            const url: any = urlPart.match(/(http|https):\/\/[^\s]+/)?.[0];
                            const text = urlPart.replace(url, '');
                            return (
                                <p key={index} className="main-text">
                                    {text} <a target="_black" href={url}>{url}</a>
                                </p>
                            );
                        } else {
                            return (
                                <p key={index} className="main-text">{part}</p>
                            );
                        }
                    })}
                    {page.tableRef &&
                        <table style={{ width: '100%' }}>
                            <thead>
                                <tr>
                                    {page.tablePage.header.map((item: any, index: number) => (
                                        <th key={index}>{item.label}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {page.tablePage.body.map((row: any, index: number) => (
                                    <tr key={index}>
                                        {page.tablePage.header.map((item: any, index: number) => (
                                            <td key={index}>{row[item.value]}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    }

                    {page.downloadRef &&
                        <div>
                            <p className="title-down">Donwload de documentos:</p>
                            <ul>
                                {page.downloadList.map((item: any, index: number) => (
                                    <li key={index}>{item.label}</li>
                                ))}
                            </ul>
                        </div>
                    }

                </div>}
            {page?.typePage === 'custom' &&
                <page.contentCustom />
            }
            <Footer />
        </>
    );
}

