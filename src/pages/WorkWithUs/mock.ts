export const WorkForms = [
    {
        type: "input",
        value: "name",
        required: true,
        label: "Nome completo",
        checkbox: false,
        labelCheckbox: 'Anônimo',
        class: 'type-8'
    },
    {
        type: "input",
        value: "name",
        required: true,
        label: "CPF (Apenas números)",
        checkbox: false,
        labelCheckbox: 'Não possuo CPF',
        class: 'type-4'
    },
    {
        type: "input",
        value: "name",
        required: true,
        label: "RG",
        class: 'type-3'
    },
    {
        type: "select",
        value: "name",
        required: true,
        label: "Sexo",
        class: 'type-3'
    },
    {
        type: "select",
        value: "name",
        required: true,
        label: "Órgão Expedidor",
        class: 'type-2'
    },
    {
        type: "input",
        value: "name",
        required: true,
        label: "Data de Nascimento",
        class: 'type-2'
    },
    {
        type: "input",
        value: "name",
        required: true,
        label: "Cart. de Habilitação",
        class: 'type-2'
    },
    {
        type: "input",
        value: "name",
        required: true,
        label: "Email",
        class: 'type-7'
    },
    {
        type: "input",
        value: "name",
        required: true,
        label: "Confirmação e-mail",
        class: 'type-5'
    },
    {
        type: "input",
        value: "name",
        required: true,
        label: "Telefone",
        class: 'type-3'
    },
    {
        type: "select",
        value: "name",
        required: true,
        label: "UF",
        class: 'type-3'
    },
    {
        type: "select",
        value: "name",
        required: true,
        label: "Cidade",
        class: 'type-6'
    },
    {
        type: "input",
        value: "name",
        required: true,
        label: "Endereço",
        class: 'type-6'
    },
    {
        type: "input",
        value: "name",
        required: true,
        label: "Complemento",
        class: 'type-6'
    },
]

export const WorkDetailsForms = [
    {
        type: "input",
        value: "name",
        required: true,
        label: "Ja trabalhou no Sistema S?",
        class: 'type-3'
    },
    {
        type: "input",
        value: "name",
        required: true,
        label: "Seu conhecimento em Informática",
        class: 'type-3'
    },
    {
        type: "input",
        value: "name",
        required: true,
        label: "Sua área de interesse?",
        class: 'type-6'
    },
    {
        type: "input",
        value: "name",
        required: true,
        label: "Portador de deficiência?",
        class: 'type-3'
    },
    {
        type: "input",
        value: "name",
        required: true,
        label: "Cuidado Especial?",
        class: 'type-3'
    },
    {
        type: "multi-checkbox",
        value: "name",
        required: true,
        label: "Disponibilidade de Horário",
        checkboxs: [
            {
                label: "Vespertino"
            },
            {
                label: "Noturno"
            },
            {
                label: "Matutino"
            },
            {
                label: "Finais de semana"
            },
        ],
        class: 'type-6'
    }
]

export const TrainingForms = [
    {
        tag: "input",
        label: "Nivel:",
        name: "level",
        type: 'text',
        placeholder: "Preencha o nível ex: Superior, Médio, Fundamental..."
    },
    {
        tag: "input",
        label: "Curso:",
        name: "course",
        type: 'text',
        placeholder: "Preencha o curso ex: Administração, Tecnologia..."
    },
    {
        tag: "input",
        label: "Conselho:",
        name: "advice",
        type: 'text',
        placeholder: "Preencha o conselho ex: CRM, OAB, CREA..."
    },
    {
        tag: "input",
        label: "Instituição:",
        name: "institution",
        type: 'text',
        placeholder: "Preencha o nome da instituição."
    },
    {
        tag: "input",
        label: "Situação:",
        name: "situation",
        type: 'text',
        placeholder: "Preencha a situação ex: concluído, cursando, incompleto..."
    }
]

export const CourseForms = [
    {
        tag: "input",
        label: "Nivel:",
        name: "level",
        type: 'text',
        placeholder: "Preencha o nível ex: Superior, Médio, Fundamental..."
    },
    {
        tag: "input",
        label: "Curso:",
        name: "course",
        type: 'text',
        placeholder: "Preencha o curso ex: Administração, Tecnologia..."
    },
    {
        tag: "input",
        label: "Conselho:",
        name: "advice",
        type: 'text',
        placeholder: "Preencha o conselho ex: CRM, OAB, CREA..."
    },
    {
        tag: "input",
        label: "Instituição:",
        name: "institution",
        type: 'text',
        placeholder: "Preencha o nome da instituição."
    },
    {
        tag: "input",
        label: "Ano de Conclusão:",
        name: "conclusion",
        type: 'text',
        placeholder: "Preencha o ano de conclusão."
    }
]

export const ExperiencesForms = [
    {
        tag: "input",
        label: "Instituição:",
        name: "institution",
        type: 'text',
        placeholder: "Preencha o nível ex: Superior, Médio, Fundamental..."
    },
    {
        tag: "input",
        label: "Cargo:",
        name: "office",
        type: 'text',
        placeholder: "Preencha o curso ex: Administração, Tecnologia..."
    },
    {
        tag: "input",
        label: "Cidade:",
        name: "city",
        type: 'text',
        placeholder: "Preencha o conselho ex: CRM, OAB, CREA..."
    },
    {
        tag: "input",
        label: "Data Inicio:",
        name: "startDate",
        type: 'date',
        placeholder: "00/00/0000"
    },
    {
        tag: "input",
        label: "Data Final:",
        name: "endDate",
        type: 'date',
        placeholder: "00/00/0000"
    },
    {
        tag: "input",
        label: "Atribuições:",
        name: "assignments",
        type: 'text',
        placeholder: "Preencha com suas atividades exercidas"
    }
]