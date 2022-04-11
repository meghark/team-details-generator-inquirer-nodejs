
//This function is used to create the employee card.
const generateEmployeeCard = emp =>{
  let retValue ='';

  if(emp)
  {
    for (let i=0; i< emp.length; i++)
    {
      let current = emp[i];
      let name = current.getName();
      let id = current.getId();
      let email = current.getEmail();
      let role = current.getRole();
      let specialSection ='';
      let icon='';

      //All the cards will display the employee name, email id, id and role.
      //Based on employee role there will be additional fields like officenum for manager, github name for engineer and school for intern.
      //Also based on the role the card will have different icons.
      if(role == 'Manager')
      {
        specialSection = `<li class="list-group-item">Office Number: <span>${current.getOfficeNum()}</span></li>`;
        icon = `<span class="pe-2"><i class="fa-solid fa-mug-hot"></i></span>`;
      }
      else if(role == 'Engineer')
      {
        specialSection =`<li class="list-group-item">Github: <a href="https://github.com/${current.getGithub()}">${current.getGithub()}</a></li>` ;
        icon = `<span class="pe-2"><i class="fa-solid fa-glasses"></i></span>`;
      }
      else if (role == 'Intern')
      {
        specialSection =`<li class="list-group-item">School: <span>${current.getSchool()}</span></li>` ;
        icon = `<span class="pe-2"><i class="fa-solid fa-user-graduate"></i></span>`;
      }
      retValue +=`
      <div class="col">
      <div class="card mb-4 rounded-3 shadow-sm  bg-light">
        <div class="card-header py-3 text-white bg-primary">
          <h4 class="card-title">${name}</h4>
          <h5 class="card-subtitle mb2">${icon}${role}</h5>
        </div>
        <div class="card-body width: 18rem border-primary">
           <ul class="list-group">
            <li class="list-group-item">ID: <span>${id}</span></li>
            <li class="list-group-item">Email: <a href="mailto: ${email}">${email}</a></li>
            ${specialSection}
           </ul>                  
        </div>
      </div>
    </div>`;
      
    }
    return retValue;
  }
}

//Generate the html page for the team. Takes the manager, engineer and intern array as input.

const generatePage =async (manager, engineer, intern) =>{
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
                  ${generateEmployeeCard(manager)}  
                  ${generateEmployeeCard(engineer)}      
                  ${generateEmployeeCard(intern)}                              
            </div>            
            </main>
        </div>    
    </body>
    </html>`;
}



module.exports = generatePage;