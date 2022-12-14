// import img from 

export const sescEquilibrium = {
    titlePage: 'Sesc Equilíbrio',
    imagePage: require("../../../../assets/img/image-1.png"),
    card: {
        title: 'Proposta Pedagógica',
        descriptions: `O Sesc, por meio de suas ações no campo da educação formal (Educação Infantil e Ensino Fundamental), reconhece seus alunos como agentes sociais, ativos, criativos e inovadores, os quais são capazes de, na interação com os seus pares e com os demais grupos sociais, produzir novas aprendizagens e experiências, contribuindo assim para uma sociedade mais justa, afetuosa e inovadora.\n\n As demais atividades realizadas pelo Sesc também incentivam a autonomia intelectual e o pensamento crítico. Oferecendo ações em educação formal (educação infantil e ensino fundamental), cursos de valorização social, cursos de inglês, e muito mais.`,
        phone: '(65) 3611-0550',
        address: 'Rua Treze de Junho, s/n – Centro Sul – Cuiabá-MT',
        email: 'escola@sescmt.com.br',
        whatsapp: '(65) 3611-0550',
        service: [
            {
                id: 1,
                type: 'Secretaria:',
                openingHours: [
                    {
                        id: 1,
                        title: 'Segunda a Sexta - 05h30 às 21h;'
                    },
                    {
                        id: 2,
                        title: 'Sábado - 07h às 10h;'
                    }
                ]
            },
            {
                id: 2,
                type: 'Matrícula:',
                openingHours: [
                    {
                        id: 1,
                        title: 'Segunda a Sexta - 05h30 às 21h;'
                    },
                    {
                        id: 2,
                        title: 'Sábado - 07h às 10h;'
                    }
                ]
            }
        ]
    },
    typeContent: 'cards',
    titleContent: 'Atividades',
    content: [
        {
            id: 1,
            image: require("../../../../assets/img/image-1.png"),
            title: 'Pilates Tradicional',
            description: 'Pilates adaptado para treino por meio de exercícios físicos dinâmicos, com movimentos mais intensos.'
        },
        {
            id: 2,
            image: require("../../../../assets/img/image-1.png"),
            title: 'Yoga',
            description: 'Pilates adaptado para treino por meio de exercícios físicos dinâmicos, com movimentos mais intensos.'
        },
        {
            id: 3,
            image: require("../../../../assets/img/image-1.png"),
            title: 'Pilates Funcional',
            description: 'Pilates adaptado para treino por meio de exercícios físicos dinâmicos, com movimentos mais intensos.'
        },
    ],
    login: true,
    titleLogin: 'Portal do Cliente',
    descriptionLogin:`Lorem ipsum dolor sit amet consectetur. Pharetra malesuada netus vitae adipiscing nunc nunc quis eget. Morbi laoreet velit vitae sagittis massa. Fermentum interdum eu orci tellus dolor aliquam. Bibendum id sed nulla amet et varius mauris.\n\nLorem ipsum dolor sit amet consectetur. Pharetra malesuada netus vitae adipiscing nunc nunc quis eget. Morbi laoreet velit vitae sagittis massa. Fermentum interdum eu orci tellus dolor aliquam. Bibendum id sed nulla amet et varius mauris.`,
    imageLogin: require("../../../../assets/img/work-with-us.png"),
}