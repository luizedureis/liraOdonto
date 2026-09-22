function SectionTitle({ children }) {
  return (
    <h2 className="mt-[28px] font-['IBM_Plex_Sans'] text-[13px] font-bold uppercase tracking-[0.04em] text-[#066165]">
      {children}
    </h2>
  );
}

function SubTitle({ children }) {
  return (
    <h3 className="mt-[20px] font-['IBM_Plex_Serif'] text-[15px] font-semibold text-[#1E2D30]">
      {children}
    </h3>
  );
}

function Paragraph({ children }) {
  return (
    <p className="mt-[10px] font-['IBM_Plex_Sans'] text-[13px] leading-[20px] text-[#3E4E68]">
      {children}
    </p>
  );
}

function PrivacyPolicy() {
  return (
    <main className="bg-white px-4 pb-14 pt-8">
      <p className="font-['IBM_Plex_Sans'] text-[11px] font-medium uppercase tracking-[0.08em] text-[#3E6D70]">
        Política de Privacidade
      </p>

      <h1 className="mt-[6px] font-['IBM_Plex_Serif'] text-[24px] font-normal leading-[30px] text-[#066165]">
        Política de Privacidade
      </h1>

      <Paragraph>
        É importante esclarecer que dados pessoais são considerados como:
        todas as informações que possam ser utilizadas para identificar
        alguma pessoa. Estes dados podem ser considerados sensíveis, tais
        como: convicção religiosa, saúde ou à vida sexual, origem racial ou
        étnica, opinião política, dado genético ou biométrico, filiação a
        sindicato ou a organização de caráter religioso, filosófico ou
        político.
      </Paragraph>

      <SectionTitle>Seção I – Informações Gerais</SectionTitle>

      <Paragraph>
        Nesta política de privacidade será informado a maneira que ocorre o
        tratamento dos dados pessoais das pessoas que acessam o site Lira
        Odontologia, informando assim, de forma transparente, quais são os
        dados, qual o intuito da coleta e a maneira que os visitantes podem
        controlar ou deletar suas informações.
      </Paragraph>

      <Paragraph>
        Este texto foi criado de acordo com a Lei de Proteção de Dados
        Pessoais (Lei 13.709/18), o Marco Civil da Internet (Lei
        12.965/14) e também o Regulamento da UE n. 2016/679. Vale ressaltar
        que este texto poderá sofrer alterações por conta de eventuais
        atualizações normativas.
      </Paragraph>

      <Paragraph>
        Informamos que toda e qualquer informação pessoal coletada por nosso
        website será utilizada para melhorar a sua experiência ao navegar em
        nosso website, visando desta maneira que sua visita se torne mais
        vantajosa e assertiva.
      </Paragraph>

      <Paragraph>
        A confidencialidade das informações pessoais dos usuários do site
        Lira Odontologia é de suma importância para nossa equipe. Por este
        motivo, buscamos otimizar continuamente todos os processos internos,
        utilizando o{" "}
        <a
          href="https://politicadeprivacidade.io/"
          target="_blank"
          rel="noreferrer"
          className="text-[#066165] underline"
        >
          gerador de política de privacidade
        </a>{" "}
        de forma clara, para mantê-los em segurança e de acordo com todas as
        normas impostas.
      </Paragraph>

      <SectionTitle>Seção II – Coleta dos Dados</SectionTitle>

      <Paragraph>
        Os dados pessoais dos visitantes podem ser coletados quando:
      </Paragraph>

      <Paragraph>
        II.I – O indivíduo realiza a criação de um cadastro no site Lira
        Odontologia e, com base nisso, podem ser solicitados dados como:
        email, nome, cidade, telefone, etc.
      </Paragraph>

      <Paragraph>
        II.II – O indivíduo navega nas páginas de nosso site e, neste caso,
        podem ser coletados dados como: palavras-chave de origem do
        buscador, comentários, navegador utilizado, IP da rede, etc.
      </Paragraph>

      <Paragraph>
        II.III – Por meio de terceiros, tais como: Google e/ou Facebook,
        sendo que, no momento de logar em um destes sites, é autorizado
        diretamente pelo terceiro.
      </Paragraph>

      <Paragraph>
        No caso de envio de newsletters ou até mesmo envio de avisos por
        e-mail, os cookies podem ser utilizados para direcionar um conteúdo
        mais adequado ao usuário final, com o intuito de melhorar a
        experiência de quem está lendo o e-mail.
      </Paragraph>

      <SectionTitle>Seção III – Aceite</SectionTitle>

      <Paragraph>
        A partir do momento da utilização do website Lira Odontologia,
        pressupõe-se que o usuário aceitou a política de privacidade. Desta
        forma, reservamos o direito de modificar esta política sem que seja
        realizado um aviso prévio. Por este motivo, recomendamos que os
        usuários realizem uma consulta regular à nossa política, para que,
        desta forma, se mantenham sempre atualizados de possíveis
        alterações; caso seja necessário, é possível entrar em contato
        conosco informando suas dúvidas.
      </Paragraph>

      <Paragraph>
        Poderemos coletar informações pessoais do usuário que acessa o site,
        tais como nome, e-mail, número de telefone fixo e/ou celular,
        endereço, data de nascimento, IP e/ou outros dados. Na grande
        maioria das vezes, esses dados são utilizados para ativar a função
        de geotarget (exibir determinados conteúdos de acordo com a
        localização) e também filtrando por tipo de usuário (analisando a
        necessidade de cada um).
      </Paragraph>

      <SectionTitle>Seção IV – Vínculo a Sites Externos</SectionTitle>

      <Paragraph>
        O site Lira Odontologia pode conter vínculo com sites externos,
        estes que podem possuir ferramentas e/ou informações proveitosas
        para os usuários. Esta política de privacidade não é empregada aos
        sites externos; se for do interesse do usuário, o mesmo deverá
        acessar a política de privacidade do site em questão para ter
        conhecimento dos detalhes.
      </Paragraph>

      <SubTitle>Cookies e Web Beacons</SubTitle>

      <Paragraph>
        O site usa cookies com o objetivo de armazenar informações, como por
        exemplo, as preferências do público que acessa um determinado site;
        esses cookies podem ser coletados por meio de um mero popup ou até
        mesmo uma integração com demais serviços.
      </Paragraph>

      <Paragraph>
        Você, como usuário do website Lira Odontologia, possui a total
        autonomia de desativar os cookies, bastando acessar a configuração
        do seu navegador de preferência e realizar a modificação, ou, caso
        tenha, poderá utilizar um antivírus que faça essa configuração
        diretamente. Vale ressaltar que essa modificação poderá influenciar
        em como você navega em nosso site e em outros sites. Este fato
        ocorre porque determinadas programações necessitam da utilização de
        cookies para funcionarem corretamente, tais como os sites que
        necessitem de login em determinada área restrita.
      </Paragraph>

      <SubTitle>Análise de Dados</SubTitle>

      <Paragraph>
        A nossa empresa utiliza o serviço do Google Analytics para
        mensurar, calcular e analisar todo o tráfego que recebe no site Lira
        Odontologia. Esta ferramenta coleta e processa os dados de acordo
        com a sua própria política, partindo do pressuposto da aceitação do
        usuário final. A política está disponível nos links abaixo:
      </Paragraph>

      <ul className="mt-[10px] list-disc space-y-[4px] pl-[18px] font-['IBM_Plex_Sans'] text-[13px] leading-[20px] text-[#066165]">
        <li>
          <a
            href="https://www.google.com/intl/pt-BR/policies/privacy/partners/"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            google.com/intl/pt-BR/policies/privacy/partners
          </a>
        </li>
        <li>
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            policies.google.com/privacy
          </a>
        </li>
        <li>
          <a
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            policies.google.com/terms
          </a>
        </li>
      </ul>

      <Paragraph>
        Vale ressaltar que, no caso do Google ou parceiros deste utilizarem
        os dados coletados, a responsabilidade é única e exclusiva destes;
        desta forma, o site Lira Odontologia se isenta de qualquer
        responsabilidade em consequência do uso dos dados.
      </Paragraph>

      <SubTitle>Anúncios</SubTitle>

      <Paragraph>
        Visando o pagamento de custos de manutenção do site, são exibidos
        anúncios em nosso site; durante a exibição destes, é coletada
        algumas informações, tais como: IP, ISP, navegador, tempo de
        permanência.
      </Paragraph>

      <Paragraph>
        As empresas que anunciam em nosso website também podem possuir um
        sistema que recolhe os cookies e/ou web beacons, sempre com o
        intuito de exibir melhores publicidades, ofertas e produtos para o
        usuário final, tornando assim a publicidade mais assertiva e
        eficiente para ambas as partes.
      </Paragraph>

      <Paragraph>
        O Google faz uso de cookies DART em nosso site; a utilização deles é
        importante para que a empresa possa exibir anúncios para o usuário
        levando em conta outros sites que a pessoa navegou anteriormente na
        internet. Vale destacar que os usuários podem realizar a desativação
        de tais cookies acessando diretamente a política de privacidade do
        Google.
      </Paragraph>

      <SectionTitle>Atualização</SectionTitle>

      <Paragraph>
        Essa política de privacidade obteve sua última atualização na data
        de 06/10/2025, podendo ser modificada a qualquer momento, sem aviso
        prévio.
      </Paragraph>
    </main>
  );
}

export default PrivacyPolicy;
