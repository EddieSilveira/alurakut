import React from 'react'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AluraKutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(props){
  return(
    <Box>
        <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: '8px'}}/>
        <hr />
        <p>
          <a className="boxLink" href={`https://github.com/${props.githubUser}`}>
            @{props.githubUser}
          </a>
        </p>
        
        <hr />

        <AlurakutProfileSidebarMenuDefault/>
      </Box>
  )
}
export default function Home() {
  const githubUser = 'EddieSilveira';
  const [comunidades, setComunidades] = React.useState([{
    id: '123213123213312341241254r51',
    titulo: 'Eu odeio acordar cedo',
    imagem: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }]);
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho'
  ];

  return (
  <>
   <AlurakutMenu githubUser={githubUser}/>
   <MainGrid>
      <div className="profileArea" style={{ gridArea: "profileArea"}}>
        <ProfileSidebar githubUser={githubUser}/>
      </div>
      <div className="welcomeArea" style={{ gridArea: "welcomeArea"}}>
        <Box >
          <h1 className="title">Bem vindo(a)</h1>

          <OrkutNostalgicIconSet />
        </Box>
        <Box>
          <h2 className="subTitle">O que você deseja fazer?</h2>
          <form onSubmit={function handleCriaComunidade(e) {
            e.preventDefault()
            const dadosDoForm = new FormData(e.target);     
            console.log(dadosDoForm)
            const comunidade = {
              id: new Date().toISOString,
              titulo: dadosDoForm.get('title'),
              imagem: dadosDoForm.get('image')
            }
            const comunidadesAtualizadas = [...comunidades, comunidade]
            setComunidades(comunidadesAtualizadas)
          }}>
            <div>
              <input 
                placeholder="Qual vai ser o nome da sua comunidade?" 
                name="title" 
                aria-label="Qual vai ser o nome da sua comunidade?"
                type="text"
              />
            </div>
            <div>
              <input 
                placeholder="Coloque uma URL para usarmos de capa" 
                name="image" 
                aria-label="Coloque uma URL para usarmos de capa"
              />
            </div>

            <button>
              Criar comunidade
            </button>
          </form>
        </Box>
      </div>
      <div className="profileArea" style={{ gridArea: "profileRelationsArea"}}>
        <ProfileRelationsBoxWrapper>
        <ul>
            {comunidades.map((itemAtual) => {
               return (
                 <li key={itemAtual.id}>
                    <a href={`/users/${itemAtual.titulo}`}>
                    <img src={itemAtual.imagem} />
                    <span>{itemAtual.titulo}</span>
                    </a>
                 </li> 
              )
            })}
          </ul>
        </ProfileRelationsBoxWrapper>
        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
            Pessoas da Comunidade ({pessoasFavoritas.length})
          </h2>
          <ul>
            {pessoasFavoritas.map((itemAtual) => {
               return (
                 <li key={itemAtual}>
                    <a href={`/users/${itemAtual}`}>
                    <img src={`https://github.com/${itemAtual}.png`} />
                    <span>{itemAtual}</span>
                    </a>
                 </li> 
              )
            })}
          </ul>
        </ProfileRelationsBoxWrapper>
        <Box >
          Comunidades
        </Box>
      </div>
    </MainGrid>
  </>
  )
}
