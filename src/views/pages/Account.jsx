const React = require('react');
const Layout = require('../Layout');

module.exports = function Account({login, myAuctions}) {
    return (
        <Layout login={login}>
            <script defer src="/js/deleteAuctionFetch.js" /> 
          
            <div className='account'>
              <h1>Личный кабинет</h1>
              <div className='message'>Привет {login}</div>
              <div className='add'>
              <a  className='addAuction' href="/addAuction">
                +Добавить аукцион
              </a>
              </div>
              <div className='myAuction'>
                {myAuctions ? myAuctions.map((el) => (
                  <div key={el.id} id={`auction${el.id}`} className='auctionEl'>
                    <h3 className='elName'>{el.name}</h3>
                   <a href={`/edAuction/${el.id}`}><button className='buttonEdit' id={el.id} type="submit">Изменить</button></a> 
                    <button className='buttonDelete' id={el.id} type="submit">Удалить</button>
                  </div>
                ) ) : <div>Аукционов с товарами  не найдено</div>}
              </div>
            </div>
        </Layout>
    )
}