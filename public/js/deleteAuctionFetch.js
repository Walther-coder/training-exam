const myAuction = document.querySelector('.myAuction');


if (myAuction !== null) {
    myAuction.addEventListener("click", async (event) => {
      if (event.target.classList.contains("buttonDelete")) {
        event.preventDefault();
        try {
          const response = await fetch(`/account/${event.target.id}`, {
            method: "DELETE",
          });
  
          if (response.status === 200) {
            const targetQuote = event.target.closest(`#auction${event.target.id}`);
            const responseJson = await response.json();
  
            myAuction.innerHTML = "";
  
            responseJson.forEach((auction) => {
              const auctionDiv = document.createElement("div");
              auctionDiv.classList.add("auctionEl");
              auctionDiv.id = `auction${auction.id}`;
              auctionDiv.innerHTML = `
                            <h3 class='elName'>${auction.name}</h3>
                            <a href=${`/edAuction/${auction.id}`}><button class='buttonEdit' id=${auction.id} type="submit">Изменить</button></a> 
                            <button class='buttonDelete' id=${auction.id} type="submit">Удалить</button>
                              `;
                myAuction.appendChild(auctionDiv);
            });
          } else {
            console.log("С БЭКА ПРИШЛО НЕ ТО");
          }
        } catch (error) {
          console.log(error, "ОШИБКА В ФИЧЕ УДАЛЕНИЯ");
        }
      }
    });
  }