const React = require('react');
const Layout = require('../Layout');

module.exports = function UpdateAuction({login, queryProduct}) {
    console.log('queryProduct',queryProduct)
  return (
    <Layout login={login}>
        <script defer src="/js/updateAuctionFetch.js" />
      <div className="updateAuction">
      <div id="message"></div>
        <form   id={queryProduct.id} className="formContainer">
          <input
            name="name"
            type="text"
            className="nameInput"
            id="name"
            required
            placeholder="Name"
            defaultValue={queryProduct.name}
          />
          <input
            name="condition"
            type="text"
            className="conditionInput"
            id="condition"
            required
            placeholder="Condition"
            defaultValue={queryProduct.condition}
          />
          <input
            name="startsAt"
            type="date"
            className="startsAtInput"
            id="startAt"
            required
            placeholder="Start At"
            value={queryProduct.startsAt}
          />
          <input
            name="endsAt"
            type="date"
            className="endsAtInput"
            id="startAt"
            required
            placeholder="Ends At"
            value={queryProduct.EndsAt}
          />
            <input
            name="description"
            type="text"
            className="discriptionInput"
            id="discription"
            required
            placeholder="Discription"
            defaultValue={queryProduct.description}
          />
          <button type="submit" >
            Сохранить изменения
          </button>
        </form>
      </div>
    </Layout>
  );
};