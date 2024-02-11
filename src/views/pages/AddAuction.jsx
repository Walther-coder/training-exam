const React = require('react');
const Layout = require('../Layout');

module.exports = function AddAuction({login}) {
  return (
    <Layout login={login}>
        <script defer src="/js/addAuctionFetch.js" />
      <div className="addAuction">
      <div id="message"></div>
        <form action="/auction" method="POST" id="addForm" className="formContainer">
          <input
            name="name"
            type="text"
            className="nameInput"
            id="name"
            required
            placeholder="Name"
          />
          <input
            name="condition"
            type="text"
            className="conditionInput"
            id="condition"
            required
            placeholder="Condition"
          />
          <input
            name="startsAt"
            type="date"
            className="startsAtInput"
            id="startAt"
            required
            placeholder="Start At"
          />
          <input
            name="endsAt"
            type="date"
            className="endsAtInput"
            id="startAt"
            required
            placeholder="Ends At"
          />
            <input
            name="description"
            type="text"
            className="discriptionInput"
            id="discription"
            required
            placeholder="Discription"
          />
          <button type="submit">
            Добавить аукцион
          </button>
        </form>
      </div>
    </Layout>
  );
};