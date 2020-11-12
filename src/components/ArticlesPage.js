import React from 'react'
import { NavLink, Switch, Route } from 'react-router-dom'
import ArticlePage from './ArticlePage'

const articles = [
  { id: 1, title: 'First article', slug: 'one' },
  { id: 2, title: 'Second article', slug: 'two' }
]

const ArticlesPage = ({ match }) => (
  <section>
    <ul className="articles-list">
      {articles.map(article => (
        <li key={article.id}>
          <NavLink to={`${match.url}/${article.slug}`}>
            <article>
              <p>{article.title}</p>
            </article>
          </NavLink>
        </li>
      ))}
    </ul>
    <Switch>
      <Route path={`${match.url}`} exact render={() => <p>Choose article</p>} />
      <Route path={`${match.url}/:title`} exact component={ArticlePage} />
    </Switch>
  </section>
)

export default ArticlesPage
