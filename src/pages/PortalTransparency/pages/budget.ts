import { BudgetApproved } from "../../../components/BudgetApproved";

export const budgetPages = {
    fastNavigation: [
        {
            path: '/institucional/portal-transparencia',
            label: 'Portal da transparência'
        },
        {
            path: '/institucional/portal-transparencia',
            label: 'Institucional'
        },
        {
            path: '/institucional/portal-transparencia/orcamento-aprovado',
            label: 'Orçamento aprovado'
        },
    ],
    titlePage: 'Orçamento aprovado',
    typePage: 'custom',
    contentCustom: BudgetApproved
}
