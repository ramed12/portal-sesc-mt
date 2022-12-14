import { Footer } from '../../components/Footer';
import { HeroPages } from '../../components/HeroPages';
import { NavbarHome } from '../../components/Navbar';
import PrivacyForm from './FormLGPD';

import './styles.scss'

export function Privacy_LGPD() {

  const heros = [
    {
      id: 1,
      title: "Privacidade de dados",
      description:
        "",
      image: require("../../assets/img/image-1.png"),
    },
  ];

  return(

    <div>
    <NavbarHome />

    {heros.map((hero) => {
      return (
        <HeroPages
          key={hero.id}
          title={hero.title}
          description={hero.description}
          image={hero.image}
        />
      );
    })}

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h6 className="fw-bold my-4">
            Sobre a privacidade de dados pessoais
            </h6>
              <div className="row align-items-center">
                <div className="col-lg-9 col-md-8 col-sm-12">
                  <div className="card-body">
                    <p className="card-text">
                    O Sesc não realiza coleta e tratamento de dados pessoais de visitantes neste portal (www.sesc.com.br). Dados de acesso, como origem, tempo de permanência e conteúdo pesquisado tornam-se anônimos na plataforma de monitoramento Google Analytics, e são utilizados somente para melhoria da experiência dos usuários no portal. Durante a navegação não serão armazenados dados pessoais em cookies ou por outra tecnologia. Para saber mais detalhes sobre esse assunto, acesse: <a href='#'>https://support.google.com/analytics/answer/6004245</a>
                    </p>
                  </div>
                  <div className="card-body my-4">
                    <p className="card-text">
                    Coleta ou tratamento de dados pessoais serão realizados pelo Sesc quando forem necessários para atendimento de demandas dos usuários. Nesses casos, o visitante será informado sobre o tratamento antes de fornecer qualquer informação.
                    </p>
                  </div>
                  <div className="card-body my-4">
                    <p className="card-text">
                    Em caso de requisições ou de dúvidas sobre dados pessoais tratados pelo Departamento Nacional do Sesc, entre em contato com o email: encarregado_lgpd@sesc.com.br.
                    </p>
                  </div>
                  <div className="card-body my-4">
                    <p className="card-text">
                    Essas medidas seguem as exigências da Lei Geral de Proteção de Dados Pessoais (LGPD). Para mais informações, acesse: <a href='#'>http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/L13709.html</a>
                    </p>
                  </div>
                  <h6 className="fw-bold my-4">
            Sobre a privacidade de dados pessoais
                 </h6>
                 <div className="card-body my-4">
                    <p className="card-text">
                    Esta Politica Geral de Privacidade tem como base a Lei n° 13.709/2018, denominada Lei Geral de Proteção de Dados Pessoais (LGPD) e possui validade somente no âmbito da Administração Nacional do Sesc.
                    </p>
                  </div>
                  <div className="card-body my-4">
                    <p className="card-text">
                    A LGPD tem por objetivo proteger os direitos fundamentais de liberdade e de privacidade e o livre desenvolvimento da personalidade do titular de dados e institui obrigações para os agentes de tratamento de dados pessoais — controladores e operadores de dados e regulamenta direitos dos titulares de dados pessoais.
                    </p>
                  </div>
                  <div className="card-body my-4">
                    <p className="card-text">
                    O Serviço Social do Comércio — Sesc é uma instituição privada sem fins lucrativos com atuação nas áreas de Educação, Saúde, Cultura, Lazer e Assistência promovendo ações socioeducativas que contribuem para o bem-estar social e a qualidade de vida dos trabalhadores do comércio de bens, serviços e turismo, de seus familiares e da comunidade, para uma sociedade justa e democrática.
                    </p>
                  </div>
                  <div className="card-body my-4">
                    <p className="card-text">
                    O Sesc tern abrangência nacional, e é composto pela Administração Nacional e pelas 27 Administrações Regionais que atuam no âmbito de cada Estado e do Distrito Federal. Cada Administração realiza o tratamento de dados do seu público ou de interessados nos serviços prestados no seu território e nas suas atividades, programas e projetos. Caso o titular dos dados tenha alguma dúvida ou observação quanto ao tratamento de seus dados para o Sesc, para o exercício dos direitos previstos na LGPD, deverá entrar em contato com a unidade do Sesc onde foi atendido (https://www.sesc.com.br/contato/).
                    </p>
                  </div>
                  <h6 className="fw-bold my-4">
                  A Administração Nacional do Sesc
                 </h6>
                 <div className="card-body my-4">
                    <p className="card-text">
                    A Administração Nacional (AN) do Sesc é composta pelo Conselho Nacional (CN) — órgão deliberativo, Departamento Nacional (DN) — órgão executivo, e o Conselho Fiscal (CF) — órgão de fiscalização financeira.
                    </p>
                  </div>
                  <div className="card-body my-4">
                    <p className="card-text">
                    O Departamento Nacional é formado pela Sede Administrativa e Polos de Referência (Polo Socioambiental Sesc Pantanal, Polo Educacional Sesc e Polo Sociocultural Sesc Paraty) e é responsável pelo tratamento de dados realizados no atendimento de seus respectivos públicos.
                    </p>
                  </div>
                  <div className="card-body my-4">
                    <p className="card-text">
                    Em caso de solicitações ou de dúvidas sobre dados pessoais tratados pela Administração Nacional do Sesc, entre em contato com encarregado de dados – Rogério Félix, por meio do canal: encarregado_lgpd@sesc.com.br
                    </p>
                  </div>
                  <h6 className="fw-bold my-4">
                  A Administração Nacional do Sesc e o tratamento de dados pessoais
                 </h6>
                 <div className="card-body my-4">
                    <p className="card-text">
                    Para viabilizar as diversas ações realizadas pelo Sesc em todo o país, é indispensável a coleta e o tratamento de determinados dados pessoais, de acordo com o tipo de serviço e da respectiva legislação pertinente. Esses dados são utilizados estritamente em benefício de seus públicos, bem como na melhoria e na ampliação das ações do Sesc.
                    </p>
                  </div>
                  <div className="card-body my-4">
                    <p className="card-text">
                    Em função do caráter social do Sesc, os dados pessoais tratados não são comercializados. A coleta e o compartilhamento, quando ocorrerem, têm como finalidades a prestação dos serviços, o cumprimento de obrigações legais ou regulatórias, como a Lei de Acesso à Informação (LAI — Lei n° 12527/2011), a Lei de Diretrizes Orçamentárias e as demandas dos órgãos de controle (TCU e CGU).
                    </p>
                  </div>
                  <div className="card-body my-4">
                    <p className="card-text">
                    A Administração Nacional não realiza credenciamento de clientes. Em caso de dúvida, entrar em contato com a Administração Regional responsável pelo processo de credenciamento.
                    </p>
                  </div>
                  <div className="card-body my-4">
                    <p className="card-text">
                    Os dados pessoais tratados pela AN são utilizados para fornecer serviços ofertados pela instituição, tais como hospedagem no Polo Socioambiental e atendimento no Polo Sociocultural Sesc Paraty. Neste caso, os dados são coletados para a realização de contrato ou de procedimentos do qual faça parte o titular, a pedido do titular dos dados. Outros dados poderão ser recolhidos para possibilitar a participação em determinadas atividades e projetos, de acordo com a natureza do serviço, hipóteses em que o titular será informado sobre o tratamento antes de fornecer qualquer informação.
                    </p>
                  </div>
                  <div className="card-body my-4">
                    <p className="card-text">
                    Os dados pessoais tratados pela AN são utilizados para fornecer serviços ofertados pela instituição, tais como hospedagem no Polo Socioambiental e atendimento no Polo Sociocultural Sesc Paraty. Neste caso, os dados são coletados para a realização de contrato ou de procedimentos do qual faça parte o titular, a pedido do titular dos dados. Outros dados poderão ser recolhidos para possibilitar a participação em determinadas atividades e projetos, de acordo com a natureza do serviço, hipóteses em que o titular será informado sobre o tratamento antes de fornecer qualquer informação.
                    </p>
                  </div>
                  <div className="card-body my-4">
                    <p className="card-text">
                    Os dados pessoais de crianças e adolescentes serão tratados considerando as disposições da LGPD pertinentes à matéria (Seção III — Do tratamento de Dados Pessoais de Crianças e Adolescentes). No caso de coleta de dados de crianças, um dos pais ou representante legal deverá dar a anuência para o tratamento.
                    </p>
                  </div>
                  <div className="card-body my-4">
                    <p className="card-text">
                    Os dados sensíveis e a transferência internacional de dados, quando necessários, serão tratados nos termos da LGPD e na forma prevista em legislações específicas sobre o tema.
                    </p>
                  </div>
                  <h6 className="fw-bold my-4">
                  O titular de dados e os cuidados a serem tomados
                 </h6>
                 <div className="card-body my-4">
                    <p className="card-text">
                    O titular de dados é a pessoa natural, a quem se referem os dados pessoais que são objeto de tratamento, sendo o responsável pela precisão e veracidade em relação aos dados fornecidos.
                    </p>
                  </div>
                  <div className="card-body my-4">
                    <p className="card-text">
                    E importante que o titular de dados proteja seus dados contra acesso não autorizado ao seu computador, dispositivos móveis, conta ou senha. Também devem ser observados os cuidados ao utilizar equipamentos ou plataformas compartilhadas com outros usuários, garantindo que seus dados não sejam copiados ou utilizados por terceiros.
                    </p>
                  </div>
                  <div className="card-body my-4">
                    <p className="card-text">
                    Antes de enviar dados pessoais por meio de mensagens eletrônicas, solicitando a confirmação de informações ou links para downloads, certifique-se de que se trata de uma canal oficial do controlador.
                    </p>
                  </div>
                  <h6 className="fw-bold my-4">
                  Os agentes de tratamento
                 </h6>
                 <div className="card-body my-4">
                    <p className="card-text">
                    Nos termos da LGPD os agentes de tratamento são o controlador e o operador, sendo o controlador responsável pelas decisões referentes ao tratamento de dados pessoais e por definir a finalidade deste tratamento e o operador o responsável pelo tratamento de dados em nome e na forma definida pelo controlador.
                    </p>
                  </div>
                  <div className="card-body my-4">
                    <p className="card-text">
                    Conforme o programa, projeto, ação ou atividade, o Sesc poderá designar um parceiro (operador) para realizar o tratamento de dados mantendo sua responsabilidade como controlador.
                    </p>
                  </div>
                  <div className="card-body my-4">
                    <p className="card-text">
                    O encarregado de dados pessoais
                    De acordo com a LGPD, o encarregado pelo tratamento de dados pessoais é o responsável por aceitar reclamações e comunicações dos titulares, prestar esclarecimentos, receber comunicações da autoridade nacional e adotar providências.
                    </p>
                  </div>
                  <h6 className="fw-bold my-4">
                  Das políticas específicas de privacidade e dos termos de uso
                 </h6>
                 <div className="card-body my-4">
                    <p className="card-text">
                    O Sesc e seus parceiros podem utilizar de políticas específicas para a proteção de dados pessoais.
                    Ao acessar sites e links de outras instituições ou de serviços e projetos específicos do Sesc, o titular deverá observar as Políticas de Privacidade e/ou Termos de Uso próprios.
                    </p>
                  </div>
                  <PrivacyForm />
                </div>
              </div>
          </div>
         </div>
        </div>
      <Footer />
    </div>
  )
}
