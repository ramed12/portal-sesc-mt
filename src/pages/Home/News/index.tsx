import "./styles.scss";
import { TbNews } from "react-icons/tb";
import { useState, useEffect } from 'react';
import newLetters from "../../../assets/img/Noticias_Hero.png";
import { Link } from "react-router-dom";
//import news_double from "../../../assets/img/newsLetter1.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
//import { news_Api } from "../../../services/new";
// import InputGroup from "react-bootstrap/InputGroup";
// import Button from "react-bootstrap/Button";


type Repository =  {
  id: number,
  title: string,
  subTitle: string,
}

export default function News() {
  const [news, setNews] = useState<Repository[]>([])

  useEffect(() => {
    fetch('https://sescmt-cms.gaotech.com.br/api/newsapi')
    .then(response => response.json())
    .then(data => {
      console.log(data);

      setNews(data);
    })
  }, []);

  return (
    <>

    {/* <div>
      {news.map(repo => {
        return (
          <div key={repo.id}>
          <h1>{repo.title}</h1>
          <p>{repo.subTitle}</p>
          </div>
        )
      })}
    </div> */}

    <Container className="newshome">
      <Row>
        <Col>
        <div>
            {news.map(repo => {
              return (
                <div key={repo.id}>
                  <h1 className="newshome__title text-md-start text-center mb-3">
                    <TbNews /> {repo.title}
                  </h1>
                  <p className="newshome__subtitle text-md-start text-center">
                    {repo.subTitle}
                  </p>
                </div>
              )
            })}
          </div>
        </Col>
      </Row>
      <Row>
      <div className="col-lg-6 mx-5 col-md-9 col-sm-9 col">
        <div className="row">
          <div className="col">
                <Link to="/noticias1">
                  <Card className="rounded border-0 mb-5">
                    <img src={newLetters} className="card-img-top img-fluid" alt="card_News" />
                    <div className="rounded-bottom card-body card-big">
                      <h5 className="card-title mb-3 card-news-text-big">Sesc-MT prorroga período de inscrição para vagas de estágio nas unidades de Cáceres e Poxoréu</h5>
                      <span className="btn btn-dark border-0 news-button">+ detalhes</span>
                    </div>
                  </Card>
                </Link>
          </div>
        <span className="col-lg-12 col-md-12 border-bottom border-2 my-5 mt-2"></span>
        </div>
        </div>
        </Row>


          {/* <div className="row">
            <div className="col-lg-6 col-md-6">
                   <Link to="/noticias2">
                    <Card className="rounded border-0 mb-5">
                      <img src={imgNews1} className="card-img-poor img-fluid" alt="card_News" />
                      <div className="rounded-bottom card-body card-poor">
                        <h5 className="card-title mb-3 card-news-text-poor">Competição de UNO e muitas brincadeiras na programação de férias no Sesc Cáceres</h5>
                        <span className="btn btn-dark border-0 news-button">+ detalhes</span>
                      </div>
                    </Card>
                  </Link>
            </div>


            <div className="col-lg-6 col-md-6">
                  <Link to="/noticias2">
                    <Card className="rounded border-0 mb-5">
                      <img src={imgNews2} className="card-img-poor img-fluid" alt="card_News" />
                      <div className="rounded-bottom card-body card-poor">
                        <h5 className="card-title mb-3 card-news-text-poor">Competição de UNO e muitas brincadeiras na programação de férias no Sesc Cáceres</h5>
                        <span className="btn btn-dark border-0 news-button">+ detalhes</span>
                      </div>
                    </Card>
                  </Link>
            </div>
          <span className="col-lg-12 col-md-12 border-bottom border-2 my-5 mt-2"></span>

            <div className="col-lg-6 col-md-6">
                 <Link to="/noticias2">
                    <Card className="rounded border-0 mb-5">
                      <img src={imgNews5} className="card-img-poor img-fluid" alt="card_News" />
                      <div className="rounded-bottom card-body card-poor1">
                        <h5 className="card-title mb-3 card-news-text-poor">Competição de UNO e muitas brincadeiras na programação de férias no Sesc Cáceres</h5>
                        <span className="btn btn-dark border-0 news-button">+ detalhes</span>
                      </div>
                    </Card>
                  </Link>
            </div>

            <div className="col-lg-6 col-md-6">
                 <Link to="/noticias2">
                    <Card className="rounded border-0 mb-5">
                      <img src={imgNews3} className="card-img-poor img-fluid" alt="card_News" />
                      <div className="rounded-bottom card-body card-poor1">
                        <h5 className="card-title mb-3 card-news-text-poor">Competição de UNO e muitas brincadeiras na programação de férias no Sesc Cáceres</h5>
                        <span className="btn btn-dark border-0 news-button">+ detalhes</span>
                      </div>
                    </Card>
                  </Link>
            </div>
          </div>
      </div>


            <div className="col-lg-4 col-md-9 col-sm-9 mx-5 col">
                  <div className="row mb-5">
                    <div className="col">
                          <Link to="/noticias">
                            <Card className="rounded border-0 mb-4">
                              <img src={news_double} className="card-img-top img-fluid" alt="card_News"/>
                              <div className="card-body">
                                <div className="card-title news-text-right-blue fs-6">Sesc-MT está com inscrições abertas para vagas com salários de até R$ 7,1 mil</div>
                              </div>
                            </Card>
                          </Link>
                    </div>
                  </div>

                  <div className="row mb-5">
                    <div className="col">
                          <Link to="/noticias">
                            <Card className="rounded border-0 mb-4">
                              <img src={imgNews4} className="card-img-top img-fluid" alt="card_News"/>
                              <div className="card-body">
                                <div className="card-title news-text-right-blue fs-6">Sesc-MT está com inscrições abertas para vagas com salários de até R$ 7,1 mil</div>
                              </div>
                            </Card>
                          </Link>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                          <Link to="/noticias">
                            <Card className="rounded border-0 mb-4">
                              <img src={imgNews7} className="card-img-top img-fluid" alt="card_News"/>
                              <div className="card-body">
                                <div className="card-title news-text-right-blue fs-6">Sesc-MT está com inscrições abertas para vagas com salários de até R$ 7,1 mil</div>
                              </div>
                            </Card>
                          </Link>
                    </div>
              </div>
            </div>
          </Row> */}
        </Container>
        </>
  )};
