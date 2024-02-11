const updateForm = document.querySelector('.formContainer');
const messageDiv = document.querySelector('#message');


updateForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const data = new FormData(updateForm);
    const inputs = Object.fromEntries(data);
    console.log(inputs)
        try {
            const response = await fetch(`/edAuction/${event.target.id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(inputs),
            });
           
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
            console.log(error, 'ОШИБКА В ФИЧЕ UPDate КАРТОЧКИ')
      } 
})