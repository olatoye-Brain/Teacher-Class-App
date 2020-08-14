const classApp = document.querySelector("#classApp")
let display = document.createElement('div');

class UI{
    constructor(){

    } 

    displayError(element, msg){
        let div = document.createElement('div')
        div.className = 'alert alert-danger alert-dismissible fade show text-center'
        div.innerHTML = `
                ${msg}
        `
        element.insertAdjacentElement('beforeBegin', div)

        setTimeout(()=>{
            element.parentElement.removeChild(div)
        },3000)
    }

    displaySuccess(element, msg){
        let div = document.createElement('div')
        div.className = 'alert alert-success alert-dismissible fade show text-center'
        div.innerHTML = `
                ${msg}
        `
        element.insertAdjacentElement('beforeBegin', div)

        setTimeout(()=>{
            element.parentElement.removeChild(div)
        },1500)
    }

    displayLanding(contain, display){
        display.innerHTML =  `
        <div class="container">
            <!--landing nav-->
            <nav class="navbar navbar-light  text-light my-4">
                <a href="#" class="navbar-brand display-2 landingHome">Teacher's Class App</a>
                <ul class="nav nav-pills mb-10">
                    <li class="nav-item">
                        <a href="#" class="nav-link text-secondary" id="login">login</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link text-secondary" id="signup">signup</a>
                    </li>
                </ul>
            </nav>
            <div class="jumbotron rounded-0 bg-color">
                <h1 class="display-4 banner-text">Hi, welcome to Teacher's Class App</h1>
                <a href="#" id="signup" class="btn btn-primary btn-lg mx-6">Create your Account</a>
            </div>
            <div class="row">
                <div class="col-6 text-left text-muted">
                    <small>Manage Students Details</small>
                </div>
                <div class="col-6 text-right text-muted">
                    <small>Result Details & Courses</small>
                </div>
            </div>
        </div>
        `
        contain.append(display)
    }

    displayLogin(contain){
        display.innerHTML = `
        <!--login form-->
        
        <div class="container rounded-0 ">
            <nav class="navbar navbar-light  text-light my-4">
                <a href="#" class="navbar-brand display-2 landingHome">Teacher's Class App</a>
                <ul class="nav nav-pills mb-10">
                    <li class="nav-item">
                        <a href="#" class="nav-link text-secondary" id="login">login</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link text-secondary" id="signup">signup</a>
                    </li>
                </ul>
            </nav>
            <div class="container bg-color py-5 r5">
                <div class="col-md-4 border offset-lg-4  offset-md-4  bg-light px-3 py-3 border border-light">
                <p class="lead text-center">Login to Account</p>
                <!--<div class="alert alert-danger alert-dismissible fade show text-center" role="alert">
                    Incorrect Credentials
                    <button type="button" class="close">&times;</button>
                </div>-->
                <form id="loginForm">
                    <div class="form-group">
                        <label for="email">Username</label>
                        <input type="text" class="form-control" id="username" aria-describedby="fullAssist" placeholder="Enter your username">
                        <small id="fullAssist" class="form-text text-muted">Your firstname is your username</small>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password"  placeholder="Enter password">
                    </div>
                    <input type="submit" class="btn btn-primary btn-block" value="Sign in">
                    </form>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-6 text-left text-muted">
                    <small>Manage Students Details</small>
                </div>
                <div class="col-6 text-right text-muted">
                    <small>Result Details & Courses</small>
                </div>
            </div>
        </div>
        `
        contain.append(display)
    }

    displaySignup(contain){
        display.innerHTML = `
        <div class="container rounded-0 ">
        <nav class="navbar navbar-light  text-light my-4">
            <a href="#" class="navbar-brand display-2 landingHome">Teacher's Class App</a>
            <ul class="nav nav-pills mb-10">
                <li class="nav-item">
                    <a href="#" class="nav-link text-secondary" id="login">login</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link text-secondary" id="signup">signup</a>
                </li>
            </ul>
        </nav>
        <div class="container bg-color py-5 r5">
            <div class="col-md-4 border offset-lg-4  offset-md-4  bg-light px-3 py-3 border border-light">
            <p class="lead text-center">Create Account</p>
            <!--<div class="alert alert-danger alert-dismissible fade show text-center" role="alert">
                Incorrect Credentials
                <button type="button" class="close">&times;</button>
            </div>-->
            <form id="signupForm">
                <div class="form-group">
                    <label for="email">Full name</label>
                    <input type="text" class="form-control" id="fullname" aria-describedby="fullAssist"
                        placeholder="Enter your full name">
                    <small id="emailAssist" class="form-text text-muted">Firstname first and lastname <i>i.e Olayemi Akinlolu</i></small>
                </div>
        
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Enter password">
                </div>
                <input type="submit" class="btn btn-info btn-block" value="Sign up">
            </form>
            </div>
        </div>
        <br>
        <div class="row">
            <div class="col-6 text-left text-muted">
                <small>Manage Students Details</small>
            </div>
            <div class="col-6 text-right text-muted">
                <small>Result Details & Courses</small>
            </div>
        </div>
    </div>
        `
        contain.append(display)
    }

    displayTimeout(){
        const timeOut = setTimeout(()=>{
            let signup = document.querySelectorAll("#signup")
            let login = document.querySelector("#login")
    
            signup.forEach(item=>{
                item.addEventListener('click', signupFunction)
            })
            login.addEventListener('click', loginFunction)
        },1000)
        return timeOut
    }

    displayStudent(fullname, tbody, listCount, teachersClass){
        //Load Students from database
        setTimeout(()=>{
            let student = teachersClass.find(item=>{
                if(item.fullname === fullname){
                    return item
                }
            }).students.map(item =>{
                return `
                    <tr>
                        <th scope="row">${listCount++}</th>
                        <td><a href="#" data-id="${item.id}" class="text-dark" data-student="${item.student}">${item.student}</a></td>
                        <td><small><a href="#" class="text-muted" data-name="edit" data-id="${item.id}">Edit</a></small></td>
                        <td><small><a href="#" class="text-muted" data-name="delete" data-id="${item.id}">Delete</a></small></td>
                    </tr>
                `
            })

            student = student.join('')
            tbody.innerHTML = student
        },500)
        // end
    }

    displayCourse(fullname, tbody, listCount, teachersClass){
        //Load Students from database
        setTimeout(()=>{
            let course = teachersClass.find(item=>{
                if(item.fullname === fullname){
                    return item
                }
            }).course.map(item =>{
                return `
                    <tr>
                        <th scope="row">${listCount++}</th>
                        <td><a href="#" class="text-dark">${item}</a></td>
                        <td><small><a href="#" class="text-muted" data-name="edit" data-course="${item}">Edit</a></small></td>
                        <td><small><a href="#" class="text-muted" data-name="delete" data-course="${item}">Delete</a></small></td>
                    </tr>
                `
            })

            course = course.join('')
            tbody.innerHTML = course
        },500)
        // end
    }

    displayStudentResult(tbody, course){
        //Load Students from database
        setTimeout(()=>{
            let stud = course.map(item =>{
               return `
                <tr>
                <td class="td" id="${item.course}">${item.course}</td>
                <td><input type="number" id="${item.course}-test" class="form-control" value="${item.test}"></td>
                <td><input type="number" id="${item.course}-exam" class="form-control" value="${item.exam}"></td>
                <td class="td" id="${item.course}-total">${item.total}</td>
                </tr>
               `
            })

            stud = stud.join('')
            tbody.innerHTML = stud
        },500)
        // end
    }

    displayAllStudentResult(tbody, result, students){
        let scoresAvr = []
        let listCount = 1
        let res = result.map(item=>{
            let scores = Object.values(item)
            scores.splice(0, 2)
            let length = scores.length
            scores = scores.reduce((a, b) => a + b)
            scoresAvr.push((scores/length).toFixed(1))
            let nes = Object.values(item)
            nes.splice(1, 1)
            return nes
        })
        

        let nes = [...res]
        console.log(res)
        console.log(scoresAvr)
        
        let newRes = [...scoresAvr]
        newRes = newRes.sort( (x, y) => y - x)
     
        console.log(nes)
      

        let contain = res.map(item =>{
            let tr = []
            item.map(each =>{
                tr.push(
                    `<td>${each}</td> `
                    )
            })
            return tr
        })
        console.log(contain)
        let i = -1
        let pos = []
       let next = contain.map(item =>{
           i++
           pos.push(this.grade(newRes.indexOf(scoresAvr[i]) + 1))
            return `
                    <tr>
                    <td>${listCount++}</td>
                    ${item.join('')}
                    <td>${scoresAvr[i]}</td>
                    <td><b>${this.grade(newRes.indexOf(scoresAvr[i]) + 1)}</b></td>
                    </tr>
                    `
        })
        console.log(next.join(''))
        console.log(pos)
        let x = -1
        nes.map(item =>{
            x++
         item.splice(1, item.length)
         let res = item.push(pos[x])
         return res
            // console.log(x)
        })

        let y = -1
        nes.map(item =>{
            y++
         let res = item.push(scoresAvr[y])
         return res
            // console.log(x)
        })
       console.log(nes)

        students.map(item =>{
            for (let  i = 0; i < nes.length; i++){
                if(item.student === nes[i][0]){
                    item.position = nes[i][1]
                    item.average = nes[i][2]
                    
                    return item
                }
            }
        })

        console.log(result)

        tbody.innerHTML = next.join('')
    }

    grade(a){
        if(a < 21){
            if (a !== 1 && a !== 2 && a !== 3){
                a =  `${a}th`
            }else{
                if(a === 1){
                    a = `${a}st`
                }
                if(a === 2){
                    a = `${a}nd`
                }
                if(a === 3){
                    a = `${a}rd`
                }
            }
        }else{
            if(a.toString().length > 1){
                let x = a.toString().substring(1, 2)
                if(x === "1"){
                    a = `${a}st`
                }
                if(x === "2"){
                    a = `${a}nd`
                }
                if(x === "3"){
                    a = `${a}rd`
                }
                if(x !== "1" && x !== "2" && x !== "3"){
                    a = `${a}th`
                }
            }
    
        } 

        return a
    }

    logout(signout, classApp){
        signout.addEventListener('click', ()=>{
            classApp.innerHTML = '<div class="imgs"><img src="./img/tenor.gif"></div>'
            setTimeout(()=>{
                document.location.reload();
            }, 1500)
            console.log('Teacher is signing out ')
        })
    }
}

class Details{
    constructor(){}

    addHomePage(contain, fullname, students, course, className){
        let div = document.createElement('div')
         div.innerHTML =`
         <div class="container">
         <nav class="navbar navbar-light bg-light text-light my-4 mb-b">
            <a href="#" class="navbar-brand display-2 landingHome">Teacher's Class App</a>
            <ul class="nav nav-pills mb-10">
                <li class="nav-item">
                <span class="nav-link text-primary" id="userID">${fullname}</span>
                </li>
                <li class="nav-item">
                <a href="#" class="nav-link text-secondary" id="allStudents">Report</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link text-secondary" id="signOut">Sign out</a>
                </li>
            </ul>
        </nav>
        <div class="row">
            <div class="col-md-3 mb-3">
                <div class="card text-center ">
                    <div class="card-body">
                        <h5 class="card-title">Teacher </h5>
                        <p class="text-muted lead">${fullname}</p>
                        <hr />
    
                        <p class="card-text"><a href="#"></a> <a href="#" class="text-muted studentCount" id="studentLink">Student: ${students}</a></p>
                        <p class="card-text"><a href="#" class="text-muted courseCount" id="courseLink">Courses: ${course}</a></p>
    
                        <p class="card-text">
                            <small class="text-primary" id="nameOfClass">${className}</small><br>
                            <small><a href="#" id='editProfile' class="text-muted">Edit Profile</a></small>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-7">
                <h5 class="text-center">Add Student</h5>
                <!--<div class="alert alert-danger alert-dismissible fade show text-center" role="alert">
                    Incorrect Credentials
                    <button type="button" class="close">&times;</button>
                </div>-->
                <form class="mb-3" id="addStudents">
                    <div class="input-group">
                        <input type="text" class="form-control" id="studentInput" placeholder="Add Student">
                        <div class="input-group-append">
                            <input type="submit" class="btn btn-primary btn-sm" value="Add Student">
                        </div>
                    </div>
                </form>
                <table class="table table-sm table-striped table-light table-hover table-borderless">
                    <thead class="table-dark">
                        <th width="5%">S/N</th>
                        <th scope="col" width="20%">Name</th>
                        <th width="10%"><img src="./img/edit.png" width="15"></th>
                        <th width="10%"><img src="./img/delete.png" width="15"></th>
                    </thead>
                    <tbody id="tbody">
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
        `
        contain.append(div)
    }

    addStudent(contain){
        contain.innerHTML =`
        <h5 class="text-center">Add Student</h5>
        <form class="mb-3" id="addStudents">
            <div class="input-group">
                <input type="text" class="form-control" id="studentInput" placeholder="Add Student">
                <div class="input-group-append">
                    <input type="submit" class="btn btn-primary btn-sm" value="Add Student">
                </div>
            </div>
        </form>
        <table class="table table-sm table-striped table-light table-hover table-borderless">
            <thead class="table-dark">
                <th width="5%">S/N</th>
                <th scope="col" width="20%">Name</th>
                <th width="10%"><img src="./img/edit.png" width="15"></th>
                <th width="10%"><img src="./img/delete.png" width="15"></th>
            </thead>
            <tbody id="tbody">
                
            </tbody>
        </table>
       `
   }

    addCourse(contain){
         contain.innerHTML =`
                <h5 class="text-center">Add Course</h5>
                <form class="mb-3" id="addCourses">
                    <div class="input-group">
                        <input type="text" class="form-control" id="courseInput" placeholder="Add Course">
                        <div class="input-group-append">
                            <input type="submit" class="btn btn-primary btn-sm" value="Add Course">
                        </div>
                    </div>
                </form>
                <table class="table table-sm table-striped table-light table-hover table-borderless">
                    <thead class="table-dark">
                        <th width="5%">S/N</th>
                        <th scope="col" width="20%">Course</th>
                        <th width="10%"><img src="./img/edit.png" width="15"></th>
                        <th width="10%"><img src="./img/delete.png" width="15"></th>
                    </thead>
                    <tbody id="tbody">
                        
                    </tbody>
                </table>
        `
    }

    addProfile(contain, fullname, className){
        contain.innerHTML =`
                <div class="px-3 py-3 bg-light">
                    <div class=" clearfix">
                        <h6 class="float-left">Edit Profile</h6>
                        <div class="float-right">
                            <small class="text-muted">Teacher, <span id="userClass">${className}</span></small>
                        </div>
                    </div>

                    <form id="updateProfile">
                        <div class="form-group">
                            <input disabled type="text"  value="${fullname}" class="form-control"  placeholder="Enter your fullname">
                        </div>
                        <div class="form-group">
                            <input type="text" value="${className}" class="form-control" id="className" aria-describedby="className"
                                ><small id="emailAssist" class="form-text text-muted">Leave Blank if there is no class name</small>

                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" id="passwordForm"  placeholder="Enter your current password">
                            <small id="emailAssist" class="form-text text-muted">Leave blank if you are not changing password</small>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" id="passwordNew" data-password="${password}"  placeholder="Enter a new password">
                            <small id="emailAssist" class="form-text text-muted">Leave blank if you are not changing password</small>

                        </div>
                        <hr/>
                        <div class="clearfix">
                            <input type="submit" class="btn btn-success btn-sm value='Update Profile' float-left">
                            <button class="btn btn-danger btn-sm float-right" id="deleteProfile">Delete Account</button>
                        </div>
                    </form>
                </div>
        `
    }

    addResult(contain, studentName, className){
        contain.innerHTML = `
        <div class="clearfix">
        <h5 class="float-left" id="studentName">${studentName}</h5>
        <div class="float-right">
            <small class="text-muted">Report Sheet, ${className}</small>
        </div>
    </div>
    <div class="text-muted mb-2"><small>Click on the records to edit</small></div>
    
    <form id="formResult">
    <table class="table table-sm table-dark table-striped  table-hover table-borderless">
        <thead class="table-dark">
            <th scope="col" width="20%">Courses</th>
            <th width="5%">Test</th>
            <th width="5%">Exams</th>
            <th width="10%">Total</th>
        </thead>
            <tbody id="tbodyResult">
                
            </tbody>
            </table>
            <hr/>
            <div class="clearfix">
                <input type="submit" class="btn btn-success btn-sm float-left" value='Update Record'>
                <a href="#" class="float-right text-secondary" id="previewResult"><small><u>Preview Result</u></small></a>
            </div>
            <small class="text-secondary">Note: Click on Report to compute student position</small>
            
            </form>
        `
    }

    addAllresult(contain, fullname, courses){
        let thead = courses.map(item =>{
            return `
            <th scope="col">${item.substring(0, 3)}</th>
            `
        }).join('')
        contain.innerHTML = `
        <div class=" clearfix">
            <h4 class="float-left">Report Sheet</h4>
            <div class="float-right">
                <small class="text-muted">${fullname}, <span id="userClass">${className}</span></small>
            </div>
        </div>
        <br>
        <table class="table table-sm table table-striped table-light table-hover table-borderless">
        <thead class="table-dark">
            <th scope="col">S/N</th>
            <th >Name</th>
            ${thead}
            <th>Avr</th>
            <th>Pos</th>
        </thead>
        <tbody id="displayAll">

        </tbody>
        </table>
        `
    }

    addPreviewResult(contain, course, name, average, position, count){
        let body = course.map(item =>{
            return`
                <tr>
                    <td>${item.course}</td>
                    <td>${item.test}</td>
                    <td>${item.exam}</td>
                    <td>${item.total}</td>
                </tr>
            `
        }).join('')
        console.log(body)
        contain.innerHTML = `
        <div class=" clearfix">
            <h5 class="float-left">${name}</h5>
            <div class="float-right">
                <small class="text-muted">Report Sheet, <span id="userClass">${className}</span></small>
            </div>
        </div>
        <small class="text-muted">Position: <b>${position}</b>, Average <b>${average}</b> <span class="float-right">Student in class: ${count}</span></small>

        <br>
        <table class="table table table-light table-hover table-bordered">
        <thead class="table-light">
            <th >Course</th>
            <th>Test</th>
            <th>Exam</th>
            <th>Total</th>
        </thead>
        <tbody id="PreviewResult">
            ${body}
        </tbody>
        </table>
        <br>
        <button id="printResult" type="submit" class="btn btn-info btn-sm">Print Result</button>

        `
    }
}
//signup Function
function signupFunction(){
    console.log('signup')
    const signupPage = new UI()
    signupPage.displaySignup(classApp)
    login.addEventListener('click', loginFunction)
    let landingHome = document.querySelector('.landingHome')
    landingHome.addEventListener('click', ()=>{
        const landingPage = new UI()
        landingPage.displayLanding(classApp, display)
        landingPage.displayTimeout()
    })
    //Signup Form EventListener
    const signupForm =  document.querySelector('#signupForm')
    signupForm.addEventListener('submit', signupLogic)
}

//SignupLogic
function signupLogic(e){
    e.preventDefault()

    let fullname = document.querySelector('#fullname').value.toLowerCase()
    let password = document.querySelector('#password').value
    const ui = new UI()
    
    if(fullname === '' || password === ''){
        ui.displayError(signupForm, 'All fields are required')
    }else if(fullname.split(' ')[1] === undefined){
        ui.displayError(signupForm, 'Provide your <b>fullname</b>')
    }
    else{
        console.log(fullname.split(' ')[1])
        const username = fullname.split(' ')[0]
        const teacher = {
            username,
            password,
            fullname
        }

      teachers = localStorage.getItem('teachers')? JSON.parse(localStorage.getItem('teachers')) : [];
      localStorage.setItem('teachers', JSON.stringify(teachers));

      teachersClass = localStorage.getItem('teachersClass')? JSON.parse(localStorage.getItem('teachersClass')) : [];
      localStorage.setItem('teachersClass', JSON.stringify(teachersClass));

      if(teachers){
          let data = JSON.parse(localStorage.getItem('teachers'));

          let update =  data.some(item=>{
            return (item.fullname === fullname)
          });

          if(update){
              ui.displayError(signupForm, `<b>${fullname}</b>, already exist`)
              console.log(username);
              document.querySelector('#fullname').value = ''
              document.querySelector('#password').value = ''
          }else{
              ui.displaySuccess(signupForm, `${username} added successfully`)
              teachers.push(teacher);
              localStorage.setItem('teachers', JSON.stringify(teachers));
              document.querySelector('#fullname').value = ''
              document.querySelector('#password').value = ''
          }
        } 
    }
}

//login function
function loginFunction(){
    console.log('login')
    const loginPage = new UI()
    loginPage.displayLogin(classApp)
    let landingHome = document.querySelector('.landingHome')
    signup.addEventListener('click', signupFunction)
    landingHome.addEventListener('click', ()=>{
        const landingPage = new UI()
        landingPage.displayLanding(classApp, display)
        console.log(`${landingPage.innerHTML}`)
        landingPage.displayTimeout()
    })

    //Login form EventListener
    const loginForm = document.querySelector('#loginForm')
    loginForm.addEventListener('submit', loginLogic)
}


//Login Logic
function loginLogic(e){
    e.preventDefault()

    const username = document.querySelector('#username').value.toLowerCase()
    const password = document.querySelector('#password').value
    let fullname = null
    let students = null
    let course = null
    const ui = new UI()
    const details = new Details()
    const columBody = document.querySelector('.col-md-7')


    if(username === '' || password === ''){
        ui.displayError(loginForm, 'All fields are required')
    }else{
        let teachers = JSON.parse(localStorage.getItem('teachers'));
        let teachersClass = JSON.parse(localStorage.getItem('teachersClass'));
        //check if teachersClass array is created
        console.log(teachersClass)
        if(teachersClass === null){
            ui.displayError(loginForm, 'You need to <b>Signup first</b>')
            document.querySelector('#username').value = ''
            document.querySelector('#password').value = ''
        }else{
            let update = teachers.some(item=>{
                if(item.username === username && item.password === password){
                    fullname = item.fullname
                    return true
                }
            })
            console.log(update)

            if(update){ 
                console.log('User loggedin')
                classApp.innerHTML = ''

                //Capitalize Firstname and Lastname
                let firstname = fullname.split(' ')[0]
                firstname =  firstname.substring(0, 1).toUpperCase() + firstname.substring(firstname.length, 1)

                let lastname = fullname.split(' ')[1]                
                lastname =  lastname.substring(0, 1).toUpperCase() + lastname.substring(lastname.length, 1)

                fullname = `${firstname} ${lastname}`
               
                //Get teachers details
               
                let data = teachersClass.some(item=>{
                    if (item.username === username && item.password === password){
                        students = item.students.length
                        course = item.course.length
                        className = item.className
                        return true
                    }
                })
                if(data){

                    //delay signing for user experience
                    classApp.innerHTML = '<div class="imgs"><img src="./img/disLoader.gif" width="100%"></div>'
                   setTimeout(()=>{
                       classApp.innerHTML = ''
                       details.addHomePage(classApp, fullname, students, course, className)

                    //Clicking on course to go to course link
                    const courseLink = document.querySelector('#courseLink')
                    courseLink.addEventListener('click', addNewCourse )

                    //clicking on edit profile to edit profile
                    const profile = document.querySelector('#editProfile')
                    profile.addEventListener('click', profileFunction)

                    let signOut = document.querySelector('#signOut');

                    //Getting all students
                    const allStudents = document.querySelector('#allStudents')
                    allStudents.addEventListener('click', viewAllStudent)

               
                    //signing out
                    ui.logout(signOut, classApp)

                    //Load Students from database
                    let listCount = 1;
                    ui.displayStudent(fullname, tbody, listCount, teachersClass)
                    console.log(fullname)
                    console.log(fullname)

                    tbody.addEventListener('click', addNewStudentLogic)
                    
                   
                    console.log(`user ${username} has a profile already`)
                    const studentAddUp = document.querySelector('#addStudents');
                    studentAddUp.addEventListener('submit', addNewStudent)

                    const columBody = document.querySelector('.col-md-7')

                    const studentLink = document.querySelector('#studentLink')

                    studentLink.addEventListener('click', ()=>{
                        columBody.innerHTML = ''
                        details.addStudent(columBody)
                        console.log('console logging form here')
                        let teachersClass = JSON.parse(localStorage.getItem('teachersClass'));
                        ui.displayStudent(fullname, tbody, listCount, teachersClass)
                        const studentAddUp = document.querySelector('#addStudents');
                        studentAddUp.addEventListener('submit', addNewStudent)
                        tbody.addEventListener('click', addNewStudentLogic)
                    })

                    }, 1500)

                    
                    
                }else{
                    //delay signing for user experience
                    classApp.innerHTML = '<div class="imgs"><img src="./img/disLoader.gif" width="100%"></div>'
                    setTimeout(()=>{
                        classApp.innerHTML = ''
                        teachersData = {
                            fullname,
                            username,
                            password,
                            course: [],
                            students: [],
                            resultData: [],
                            className: 'Class Name'
                        }
                        teachersClass.push(teachersData)
                        localStorage.setItem('teachersClass', JSON.stringify(teachersClass)); 
                        teachersClass.some(item=>{
                            if (item.username === username && item.password === password){
                                students = item.students.length
                                course = item.course.length
                                className = item.className
                            }
                            })
                            details.addHomePage(classApp, fullname, students, course, className)
    
                            //Clicking on course to go to course link
                            const courseLink = document.querySelector('#courseLink')
                            courseLink.addEventListener('click', addNewCourse )

                             //Getting all students
                            const allStudents = document.querySelector('#allStudents')
                            allStudents.addEventListener('click', viewAllStudent)

                             //clicking on edit profile to edit profile
                            const profile = document.querySelector('#editProfile')
                            profile.addEventListener('click', profileFunction)
    
                             //Load Students from database
                            let listCount = 1;
                            ui.displayStudent(fullname, tbody, listCount, teachersClass)
    
                            tbody.addEventListener('click', addNewStudentLogic)
                            
                            //sign out
                            let signOut = document.querySelector('#signOut');
                            ui.logout(signOut, classApp)
    
                            const studentAddUp = document.querySelector('#addStudents');
                            studentAddUp.addEventListener('submit', addNewStudent)

                            const columBody = document.querySelector('.col-md-7')

                        const studentLink = document.querySelector('#studentLink')

                        studentLink.addEventListener('click', ()=>{
                            columBody.innerHTML = ''
                            details.addStudent(columBody)
                            console.log('console logging form here')
                            let teachersClass = JSON.parse(localStorage.getItem('teachersClass'));
                            ui.displayStudent(fullname, tbody, listCount, teachersClass)
                            const studentAddUp = document.querySelector('#addStudents');
                            studentAddUp.addEventListener('submit', addNewStudent)
                            tbody.addEventListener('click', addNewStudentLogic)
                        })
    
                    }, 3500)
                }

            }else{
                ui.displayError(loginForm, 'Incorrect <b>Username or Password</b>')
                document.querySelector('#username').value = ''
                document.querySelector('#password').value = ''
            }
    }
    }
}

//Add new Student

function addNewStudent(e){
    e.preventDefault()
    const ui =  new UI()
    let studentInput = document.querySelector('#studentInput')
    const studentAddUp = document.querySelector('#addStudents');
    let studentCount = document.querySelector('.studentCount')
    const userID = document.querySelector('#userID')
    let fullname = userID.innerText
    e.preventDefault()
    let teachersClass = JSON.parse(localStorage.getItem('teachersClass'));

        
        let resp = null
        let state = false
        // if(checkStudents !== 0){
             resp =  teachersClass.map(item =>{
                if(item.fullname === fullname){
                    if(item.students.length === 0 ){
                        state = false
                        console.log(item.students.length)
                    }else{
                        console.log(item.students.length)
                        console.log(item.students)
                        item.students.map(item=>{
                                if(item.student === studentInput.value){
                                    console.log(`${item.student} found already`)
                                    state = true
                                }
                        })
                        console.log(item.student)
                    }
                return state
            }
        })
            
            console.log(resp)
        // }

    if(studentInput.value === ''){
        ui.displayError(studentAddUp, 'Field cannot be empty')
    }else if(state){
        ui.displayError(studentAddUp, `<b>${studentInput.value} already exist</b>, or add initial`)
        studentInput.value = ""
    }else{
        let teachersClass = JSON.parse(localStorage.getItem('teachersClass'));
        
        let counter = studentCount.innerText
        counter = counter.substring(counter.length, 9 )
      
        console.log(counter)

        console.log(studentInput.value)
        console.log(fullname.toLowerCase())
        console.log(teachersClass)
        
        teachersClass.some(item=>{
            if (item.fullname === fullname){
                let courses = []
                item.course.map(item =>{
                    courses.push(
                        {
                            course: item, 
                            test: 0, exam: 0, 
                            total: 0
                        }
                    )
                    console.log(item.course)
                })
                
                students = {
                    id: Date.now(),
                    student: studentInput.value,
                    courses
                }
                item.students.push(students)
                localStorage.setItem('teachersClass', JSON.stringify(teachersClass)); 
                // document.querySelector('#studentInput').value = ''
                studentInput.value = ''

                let img = '<img src="./img/loader.gif" width="20">'
                studentCount.innerHTML = `Student: ${img}`
                setTimeout(()=>{
                    console.log(typeof counter)
                    console.log(counter)
                    counter = parseInt(counter) + 1
                    console.log(counter)
                    console.log(studentCount)
                    console.log(typeof counter)
                    studentCount.innerHTML = `Student: ${counter}`
                }, 1200)

                //Load Students from database
                let tbody = document.querySelector('#tbody')
                let listCount = 1;
                ui.displayStudent(fullname, tbody, listCount, teachersClass)
                tbody.addEventListener('click', addNewStudentLogic)
            }
        })
    }
}

//Add new Course
function addNewCourse(e){
    console.log('course')
    const ui = new UI()
   const details = new Details()
   const userID = document.querySelector('#userID')
   const columBody = document.querySelector('.col-md-7')
   let fullname = userID.innerText
    e.preventDefault()
    setTimeout(()=>{
        let courseInput = document.querySelector('#courseInput')
        const courseAddUp = document.querySelector('#addCourses')
        let courseCount = document.querySelector('.courseCount')

        //Load course from database
        let listCount = 1
        ui.displayCourse(fullname, tbody, listCount, teachersClass)

        courseAddUp.addEventListener('submit', (e)=>{
            e.preventDefault()
            let teachersClass = JSON.parse(localStorage.getItem('teachersClass'));

            let resp = null
            let state = false
            // if(checkStudents !== 0){
                resp =  teachersClass.map(item =>{
                    if(item.fullname === fullname){
                        if(item.course.length === 0 ){
                            state = false
                            console.log(item.course)
                        }else{
                            console.log(item.course.length)
                            console.log(item.course)
                            console.log(courseInput.value)
                            item.course.map(item=>{
                                if(item === courseInput.value){
                                    console.log(`${item} found already`)
                                    state = true
                                }
                            })
                            console.log(state)
                        }
                    return state
                }
            })
            
            console.log(resp)

            console.log(resp)
        
            if(courseInput.value === ''){
                ui.displayError(courseAddUp, 'Field cannot be empty')
            }
            else if(state){
                 ui.displayError(courseAddUp, `<b>${courseInput.value}</b> is added already`)
                 courseInput.value = ""
            }
            else{
                console.log(courseInput.value)
                let teachersClass = JSON.parse(localStorage.getItem('teachersClass'));
                const userID = document.querySelector('#userID')
                let fullname = userID.innerText                
                let counter = courseCount.innerText
                counter = counter.substring(counter.length, 8)
              
                console.log(counter)
                console.log(fullname)

                teachersClass.find(item =>{
                    if(item.fullname === fullname){
                        item.course.push(courseInput.value)
                        console.log(true)
                        item.students.map(item =>{
                            item.courses.push({
                                    course: courseInput.value,
                                    test: 0,
                                    exam: 0,
                                    total: 0
                            })
                        })
                        // console.log(item.students)
                        console.log(item.course)
                        console.log(courseInput.value)
                    }
                    localStorage.setItem('teachersClass', JSON.stringify(teachersClass));
                })

                courseInput.value = ''

                let img = '<img src="./img/loader.gif" width="20">'
                courseCount.innerHTML = `Course: ${img}`
                setTimeout(()=>{
                    console.log(typeof counter)
                    console.log(counter)
                    counter = parseInt(counter) + 1
                    console.log(counter)
                    console.log(courseCount)
                    console.log(typeof counter)
                    courseCount.innerHTML = `Course: ${counter}`
                }, 1200)

                //Load load course from database
                let tbody = document.querySelector('#tbody')
                let listCount = 1;
                ui.displayCourse(fullname, tbody, listCount, teachersClass)
                // tbody.addEventListener('click', addNewCourseLogic)
            }
        })

        console.log('preparing add course logic')
        tbody.addEventListener('click', addNewCourseLogic)


        console.log(courseInput)
    },100)

    let teachersClass = JSON.parse(localStorage.getItem('teachersClass'));
    teachersClass.find(item =>{
        if(item.fullname === fullname){
            students = item.students.length
            course = item.course.length
            className = item.className
        }
    })
    columBody.innerHTML = ''
    details.addCourse(columBody)
    console.log('ADD COURSE BODY ADDED')
    console.log('course clicked')
    const profile = document.querySelector('#editProfile')
    profile.addEventListener('click', profileFunction)
    let listCount = 1;

    const studentLink = document.querySelector('#studentLink')//knskjvnsjvnjkdsnfsj jnvj ffs nkjfsnfjnvjs nvfjnvsjkdn vjfnsjkdn kfjnskjfnsjnf
    studentLink.addEventListener('click', ()=>{
        columBody.innerHTML = ''
        details.addStudent(columBody)
        console.log('console logging form here')
        ui.displayStudent(fullname, tbody, listCount, teachersClass)
        const studentAddUp = document.querySelector('#addStudents');
        studentAddUp.addEventListener('submit', addNewStudent)
        tbody.addEventListener('click', addNewStudentLogic)
    })

    let signOut = document.querySelector('#signOut');
    ui.logout(signOut, classApp)
}

       

function addNewStudentLogic(e){
    console.log(e.target.dataset.name)
    console.log(e.target)
    e.preventDefault()
    const ui = new UI()
    const details = new Details()
    e.preventDefault()
    const userID = document.querySelector('#userID')
    let fullname = userID.innerText

    console.log('function clicked')
        console.log(e.target)
        e.preventDefault()
        console.log(userID.innerText)

     //Edit or delete student

        let teachersClass = JSON.parse(localStorage.getItem('teachersClass'));

        //edit student
        if(e.target.dataset.name === "edit"){
            console.log(fullname)
            console.log(e.target.dataset)

            let studentData = teachersClass.filter(item=>{
                return (item.fullname === fullname)
            })
            
            //get the student

            let student = studentData[0].students.filter(item =>{
                return item.id === parseInt(e.target.dataset.id)
            })
            //filter the remaining student
            let res = studentData[0].students.filter(item =>{
                return item.id !== parseInt(e.target.dataset.id)
            })
    
            //reset the student
            studentData[0].students = res
            console.log(studentData[0].students)
            console.log(studentData)
    
            localStorage.setItem('teachersClass', JSON.stringify(teachersClass)); 
            let listCount = 1;
            
            document.querySelector('#studentInput').value = student[0].student

            ui.displayStudent(fullname, tbody, listCount, teachersClass)

            //Update the count
            let studentCount = document.querySelector('.studentCount')
            let counter = studentCount.innerText
            counter = counter.substring(counter.length, 9 )
            let img = '<img src="./img/loader.gif" width="20">'
            studentCount.innerHTML = `Student: ${img}`
            setTimeout(()=>{
                console.log(typeof counter)
                console.log(counter)
                counter = parseInt(counter) - 1
                console.log(counter)
                console.log(studentCount)
                console.log(typeof counter)
                studentCount.innerHTML = `Student: ${counter}`
            }, 1200)

        }

        //delete student
        if(e.target.dataset.name === "delete"){
            console.log(fullname)
            console.log(e.target.dataset)

            let studentData = teachersClass.filter(item=>{
                return (item.fullname === fullname)
            })
            
            //get the student
            let res = studentData[0].students.filter(item =>{
                return item.id !== parseInt(e.target.dataset.id)
            })
    
            //reset the student
            studentData[0].students = res
            console.log(studentData[0].students)
            console.log(studentData)
    
            localStorage.setItem('teachersClass', JSON.stringify(teachersClass)); 
            let listCount = 1;
        
            ui.displayStudent(fullname, tbody, listCount, teachersClass)

            //Update the count
            let studentCount = document.querySelector('.studentCount')
            let counter = studentCount.innerText
            counter = counter.substring(counter.length, 9 )
            let img = '<img src="./img/loader.gif" width="20">'
            studentCount.innerHTML = `Student: ${img}`
            setTimeout(()=>{
                console.log(typeof counter)
                console.log(counter)
                counter = parseInt(counter) - 1
                console.log(counter)
                console.log(studentCount)
                console.log(typeof counter)
                studentCount.innerHTML = `Student: ${counter}`
            }, 1200)

        }

        if(e.target.dataset.student){
            teachersClass.find(item =>{
                if(item.fullname === fullname){
                    // students = item.students.length
                    // course = item.course.length
                    className = item.className
                }
            })
            const columBody = document.querySelector('.col-md-7')
            columBody.innerHTML = ''
            let name = e.target.dataset.student
            let id = e.target.dataset.id

            console.log(name)
            console.log(id)


            setTimeout(()=>{
                details.addResult(columBody, name, className)
                const userID = document.querySelector('#userID')
                const ui = new UI()
                let courseList
                let fullname = userID.innerText
                let teachersClass = JSON.parse(localStorage.getItem('teachersClass'));
                teachersClass.filter(item =>{
                    if(item.fullname === fullname){
                        courseList = item.course
                        item.students.map(item =>{
                            if(item.student === name){
                                let  tbodyResult = document.querySelector('#tbodyResult')
                                console.log(item.courses)
                                let course = item.courses
                                console.log(course)
                                ui.displayStudentResult(tbodyResult, course)
                            }
                        })
                    }
                })
                console.log(courseList)
                studentResult(name, courseList, id)
            },500)
        }
     
}

function studentResult(name, courseList, id){
    const userID = document.querySelector('#userID')
    const details = new Details()
    const form = document.querySelector("#formResult")
    const columBody = document.querySelector('.col-md-7')

    const ui = new UI()
    console.log(name)
    console.log(courseList[0])

    console.log('hello world!')
    setTimeout(()=>{
        let  formResult = document.querySelector('#formResult')
        formResult.addEventListener('submit', (e)=>{
            console.log('form clicked')
            e.preventDefault()
                let result = []
                let reportCourse = []
                let reportAnswer = []
                let report = {
                    name,
                    id
                }
                courseList.map(item =>{
                    console.log(item)
                    let course = document.querySelector(`#${item}`).innerText
                    let test = document.querySelector(`#${item}-test`).value
                    let exam = document.querySelector(`#${item}-exam`).value
                    let total = parseInt(test) + parseInt(exam)
                    let img = '<img src="./img/loader.gif" width="20">'
                    let tot = document.querySelector(`#${item}-total`)
                    
                    tot.innerHTML = img 
                    setTimeout(()=>{
                        tot.innerHTML = ''
                        tot.innerText = total
                    },1500)

                    result.push(
                        {
                            course, 
                            test, 
                            exam, 
                            total
                        }
                    )
                    reportCourse.push(course)
                    reportAnswer.push(total)

                })

                for(let i = 0; i< reportAnswer.length; i++ ){
                    report[reportCourse[i]] = reportAnswer[i]
                    // console.log(reportCourse[0])
                }
                console.log(report)
                console.log(reportCourse)
                console.log(reportAnswer)
                console.log(result)
                let teachersClass = JSON.parse(localStorage.getItem('teachersClass'))
                teachersClass = teachersClass.map(item =>{
                    if(item.fullname === userID.innerText){
                        let res = item.resultData.filter(each =>{
                            return each.id !== id
                        })
                        console.log(res)
                        item.resultData = res

                        item.resultData.push(report)

                        item.students.map(each =>{
                            if(each.student === name){
                               each.courses = result
                            }
                        })
                    }
                    return item
                })
                ui.displaySuccess(form, "Records Updated Successfully")
                localStorage.setItem('teachersClass', JSON.stringify(teachersClass)); 
            })

        let previewResult = document.querySelector('#previewResult')

        
        previewResult.addEventListener('click', ()=>{
            let teachersClass = JSON.parse(localStorage.getItem('teachersClass'))

            columBody.innerHTML = ""
            console.log(name)
            teachersClass.map(item =>{
                if(item.fullname === userID.innerText){
                            count = item.students.length
                    item.students.map(each =>{
                        if(each.student === name){
                            course = each.courses
                            average = each.average
                            position = each.position
                            console.log(each.student)
                            details.addPreviewResult(columBody, course, name, average, position, count)
                        }
                    })
                }
            })
            setTimeout(()=>{
                const print = document.querySelector('#printResult')
                print.addEventListener('click', printResult)
            },1000)
            
        })

        //print Result
        function printResult(){
            return  window.print()
        }

    },1000)  
}


function viewAllStudent(e){
    let userID = document.querySelector('#userID')
    const columBody = document.querySelector('.col-md-7')
    const details = new Details()
    const ui = new UI()

    e.preventDefault()

    let teachersClass = JSON.parse(localStorage.getItem('teachersClass'))
    let fullname = userID.innerText
    let courses
    let resultData
    teachersClass.map(item =>{
        if(item.fullname = userID.innerText){
            courses = item.course
            resultData = item.resultData
            students = item.students
        }
    })
    details.addAllresult(columBody, fullname, courses)

    console.log(resultData)
    
    // setTimeout(()=>{
        let displayAll = document.querySelector('#displayAll')
        ui.displayAllStudentResult(displayAll, resultData, students)
        localStorage.setItem('teachersClass', JSON.stringify(teachersClass)); 

    // },1000)
}

function addNewCourseLogic(e){
    e.preventDefault()
    console.log('addNewCourseLogic')
    console.log(e.target.dataset.name)
    console.log(e.target)
    e.preventDefault()
    const ui = new UI()
    e.preventDefault()
    const userID = document.querySelector('#userID')
    let fullname = userID.innerText

        console.log(fullname)
     //Edit or delete student

     if(fullname){
        let teachersClass = JSON.parse(localStorage.getItem('teachersClass'));

        //edit student
        if(e.target.dataset.name === "edit"){
            console.log(fullname)
            console.log(e.target.dataset.name)

            let courseData = teachersClass.filter(item=>{
                return (item.fullname === fullname)
            })


            //get the course
            console.log(courseData[0].course)

            let course = courseData[0].course.filter(item =>{
                return item === e.target.dataset.course
            })
            console.log(course[0])

            let stud = courseData[0].students
           
            stud = stud.map(item =>{
                // console.log(item.courses)
                let res = item.courses.filter(ites=>{
                  return ites.course !== course[0]
                })

                item.courses = res
                return item
            })

            console.log(stud)

            res = courseData[0].course.filter(item=>{
                return item !== e.target.dataset.course
            })

            
            //reset the course
            courseData[0].course = res
            
            //reset the student data

            courseData[0].students = stud
            console.log(courseData[0].students)

            localStorage.setItem('teachersClass', JSON.stringify(teachersClass)); 
            console.log(teachersClass)
            let listCount = 1
            document.querySelector('#courseInput').value = course

            ui.displayCourse(fullname, tbody, listCount, teachersClass)

             //Update the count
             let courseCount = document.querySelector('.courseCount')
             let counter = courseCount.innerText
             counter = counter.substring(counter.length, 8)
             let img = '<img src="./img/loader.gif" width="20">'
                courseCount.innerHTML = `Course: ${img}`
                setTimeout(()=>{
                    console.log(typeof counter)
                    console.log(counter)
                    counter = parseInt(counter) - 1
                    console.log(typeof counter)
                    courseCount.innerHTML = `Course: ${counter}`
                }, 1200)

        }

        //delete student
        if(e.target.dataset.name === "delete"){
            console.log(fullname)
            console.log(e.target.dataset.name)

            let courseData = teachersClass.filter(item=>{
                return (item.fullname === fullname)
            })

            //get the course
            console.log(courseData[0].course)

            let course = courseData[0].course.filter(item =>{
                return item === e.target.dataset.course
            })
            console.log(course)

            res = courseData[0].course.filter(item=>{
                return item !== e.target.dataset.course
            })

            console.log(res)

            //reset the course
            courseData[0].course = res

            //reset the student data
            let stud = courseData[0].students

            stud = stud.map(item =>{
                // console.log(item.courses)
                let res = item.courses.filter(ites=>{
                  return ites.course !== course[0]
                })

                item.courses = res
                return item
            })

            courseData[0].students = stud
            console.log(courseData[0].students)

            localStorage.setItem('teachersClass', JSON.stringify(teachersClass)); 
            console.log(teachersClass)
            let listCount = 1

            ui.displayCourse(fullname, tbody, listCount, teachersClass)

             //Update the count
             let courseCount = document.querySelector('.courseCount')
             let counter = courseCount.innerText
             counter = counter.substring(counter.length, 8)
             let img = '<img src="./img/loader.gif" width="20">'
                courseCount.innerHTML = `Course: ${img}`
                setTimeout(()=>{
                    console.log(typeof counter)
                    console.log(counter)
                    counter = parseInt(counter) - 1
                    console.log(typeof counter)
                    courseCount.innerHTML = `Course: ${counter}`
                }, 1200)

        }
    }
}

function profileFunction(e){
    const details = new Details()
    const ui = new UI()
    e.preventDefault()
    console.log('edit profile clicked')

    const userID = document.querySelector('#userID')
    let fullname = userID.innerText

    let teachers = JSON.parse(localStorage.getItem('teachers'));
    let teachersClass = JSON.parse(localStorage.getItem('teachersClass'));
    teachersClass.find(item =>{
        if(item.fullname === fullname){
            students = item.students.length
            course = item.course.length
            className = item.className
            password = item.password
        }
    })

    //update profile function
    setTimeout(()=>{
        const updateProfile = document.querySelector('#updateProfile')
        let classForm = document.querySelector('#className')
        let passwordForm = document.querySelector('#passwordForm')
        let passwordNew = document.querySelector('#passwordNew')
        let nameOfClass = document.querySelector('#nameOfClass')
        let userClass = document.querySelector('#userClass')
        updateProfile.addEventListener('submit', (e)=>{
        e.preventDefault()
        console.log('Submit button clicked')
            if(passwordForm.value === ""){
                ui.displayError(updateProfile, '<b>Provide a Password</b> to update details')
                classForm.value = className
                passwordForm.value = ""
                passwordNew.value = ""
            }else if(passwordForm.value !== password){
                console.log('password is not empty')
                ui.displayError(updateProfile, '<b>Password</b> provided is incorrect')
                passwordForm.value = ""
                passwordNew.value = ""
                classForm.value = className
            }else if(passwordForm.value === password && classForm.value === className && passwordNew.value === ""){
                ui.displaySuccess(updateProfile, '<b>There is nothing to update</b>') 
                passwordForm.value = ""
                classForm.value = className
            }else if(passwordForm.value === password && classForm.value !== className && classForm.value !== '' && passwordNew.value === ""){
                ui.displaySuccess(updateProfile, `${classForm.value} updated successfully`) 
                //updating teacher class name
                teachersClass = teachersClass.map(item =>{
                    if(item.fullname === fullname){
                        item.className = classForm.value
                        className = item.className
                    }
                    return item
                })
                //Updatig the name of class
                let img = '<img src="./img/loader.gif" width="20">'
                userClass.innerText = classForm.value
                nameOfClass.innerHTML = img
                setTimeout(()=>{
                    nameOfClass.innerHTML = classForm.value
                }, 1200)
                console.log(nameOfClass)
                localStorage.setItem('teachersClass', JSON.stringify(teachersClass)); 
                passwordForm.value = ""
            }else if(passwordForm.value === password && classForm.value === className && passwordNew.value === password){
                ui.displaySuccess(updateProfile, '<b>Provide a different Password</b> to change password') 
                passwordForm.value = ""
                passwordNew.value = ""
                classForm.value = className
            }else if(passwordForm.value === password && classForm.value !== className && classForm.value !== "" && passwordNew.value === password){
                ui.displaySuccess(updateProfile, '<b>Provide a different Password</b> to change password') 
                passwordForm.value = ""
                passwordNew.value = ""
                classForm.value = className

            }else if(passwordForm.value === password && classForm.value === className && passwordNew.value !== password){
            ui.displaySuccess(updateProfile, '<b>Password updated</b> successfully') 
            console.log(className)
            //updating teacher class password in teacher class
            teachersClass = teachersClass.map(item =>{
                if(item.fullname === fullname){
                    item.password = passwordNew.value
                    password = item.password
                }
                return item
            })
            localStorage.setItem('teachersClass', JSON.stringify(teachersClass)); 
            console.log(teachersClass)
            //updating teacher class password in teacher
            teachers = teachers.map(item =>{
                if(item.fullname === fullname.toLowerCase()){
                    item.password = passwordNew.value
                }
                return item
            })
            localStorage.setItem('teachers', JSON.stringify(teachers));
            passwordForm.value = ""
            passwordNew.value = ""
        } else if(passwordForm.value === password && classForm.value !== className && classForm.value !== '' && passwordNew.value !== "" && passwordNew.value !== password ){
                ui.displaySuccess(updateProfile, `<b>Profile Details</b> updated successfully`) 
                 //updating teacher class password in teacher class
            teachersClass = teachersClass.map(item =>{
                if(item.fullname === fullname){
                    item.password = passwordNew.value
                    password = item.password
                }
                return item
            })
            localStorage.setItem('teachersClass', JSON.stringify(teachersClass)); 
            console.log(teachersClass)
            //updating teacher class password in teacher
            teachers = teachers.map(item =>{
                if(item.fullname === fullname.toLowerCase()){
                    item.password = passwordNew.value
                }
                return item
            })
            localStorage.setItem('teachers', JSON.stringify(teachers));
            passwordForm.value = ""
            passwordNew.value = ""
            }
        
        })
    },500)
    
    const columBody = document.querySelector('.col-md-7')


    columBody.innerHTML = ''
    details.addProfile(columBody, fullname, className)

   

    //sign out
    let signOut = document.querySelector('#signOut');
    ui.logout(signOut, classApp)
    let listCount = 1
    const studentLink = document.querySelector('#studentLink')//knskjvnsjvnjkdsnfsj jnvj ffs nkjfsnfjnvjs nvfjnvsjkdn vjfnsjkdn kfjnskjfnsjnf
    studentLink.addEventListener('click', ()=>{
        columBody.innerHTML = ''
        details.addStudent(columBody)
        console.log('console logging form here')
        ui.displayStudent(fullname, tbody, listCount, teachersClass)
        const studentAddUp = document.querySelector('#addStudents');
        studentAddUp.addEventListener('submit', addNewStudent)
        tbody.addEventListener('click', addNewStudentLogic)
    })
}


document.addEventListener('DOMContentLoaded', ()=>{
    console.log({message: 'hello world'})
    const landingPage = new UI()
    landingPage.displayLanding(classApp, display)
    landingPage.displayTimeout()  
})