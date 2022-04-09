const generateManagerCard = manager =>{
    let retValue ='';
    const current = manager[0];
    console.log(current.getName());
    const name = current.getName();
    const id = current.getId();
    const email = current.getEmail();
    const onum = current.getOfficeNum();
    if(manager)
    {
        retValue =`
        <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm  bg-light">
          <div class="card-header py-3 text-white bg-primary">
            <h4 class="card-title">${name}</h4>
            <h5 class="card-subtitle mb2"><span class="pe-2">
                    <i class="fa-solid fa-mug-hot"></i></span>Manager</h5>
          </div>
          <div class="card-body width: 18rem border-primary">
             <ul class="list-group">
              <li class="list-group-item">ID: <span>${id}</span></li>
              <li class="list-group-item">Email: <a href="mailto: ${email}">${email}</a></li>
              <li class="list-group-item">Office Number: <span>${onum}</span></li>
             </ul>                  
          </div>
        </div>
      </div>`;
    }
    return retValue;
}

const generatePage = (manager, engineer, intern) =>{
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>    
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="./style.css"/>
    </head>
    <body>
         <div>
            <header class="bg-danger d-flex justify-content-center py-3 border-bottom border-dark text-white mb-5" style="--bs-bg-opacity: .75;">
                <h1 >My Team</h1>
            </header>
            <main>
            <div class="row row-cols-1 row-cols-md-3 mb-3 container py-3 d-flex justify-content-center mx-auto">
                  ${generateManagerCard(manager)}                                       
            </div>            
            </main>
        </div>    
    </body>
    </html>`;
}



module.exports = generatePage;