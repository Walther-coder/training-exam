const addForm = document.querySelector('#addForm');
const messageDiv = document.querySelector('#message');

addForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const data = new FormData(addForm);
    const inputs = Object.fromEntries(data);
    console.log(inputs)
        try {
            const response = await fetch('/addAuction', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(inputs),
            });
            console.log(response)
            const result = await response.json();
           
            messageDiv.style.color = 'black';

            if(result.msg) {
                messageDiv.innerText = result.msg;
                messageDiv.style.color = 'green';
                setTimeout(() => {
                    // eslint-disable-next-line no-undef
                    window.location.href = '/account';
                }, 1000);
            }
            if (result.err) {
                messageDiv.innerText = result.err;
                messageDiv.style.color = 'red';
              }
        } catch (error) {
            console.log(error, 'ОШИБКА В ФИЧЕ СОЗДАНИИ НОВОЙ КАРТОЧКИ')
      } 
})