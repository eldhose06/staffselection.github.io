//  function getReligions() {
//     return [
//         {
//             "id": 1,
//             "religion": "Christian"
//         },
//         {
//             "id": 2,
//             "religion": "Hindu"
//         },
//         {
//             "id": 3,
//             "religion": "Muslims"
//         }
//     ]
// }
//  function getCaste(religion_id) {
//     let finalData = [];
//     let casteList = [
//         {
//             "id": 1,
//             "religion": 1,
//             "caste": "Jacobite"
//         },
//         {
//             "id": 2,
//             "religion": 1,
//             "caste": "Catholic"
//         },
//         {
//             "id": 3,
//             "religion": 2,
//             "caste": "Ezhava"
//         }
//     ]
//     $.each(casteList, function(i, e) {
//         if(e.religion == religion_id) {
//             finalData.push(e);
//         }
//     });
//     return finalData;
// }
//  function getCategory() {
//     return 	[
//         {
//             "id": 1,
//             "category": "General"
//         },
//         {
//             "id": 2,
//             "category": "SC/ST"
//         }
//     ]
// }
//  function getNationality() {

//     /*AJAX Sample Code*/
//     /*
//     let nationality;
//     $.ajax({
//         url : "api - url",
//         dataType : "JSON",
//         type : "POST",
//         data : {religion_id: religion_id}// Only applicable for caste,
//         success : function(response) {
//             nationality = response;
//         }
//     });
//     return nationality;
//     */
//     /*AJAX Sample Code */
//     return [
//         {
//             "id": 1,
//             "nationality": "Indian"
//         },
//         {
//             "id": 2,
//             "nationality": "Others"
//         }
//     ]
// }
function getUsers(user_id) {
    console.log(user_id);
   let UserResult;
   return new Promise((resolve, reject) => {
   $.ajax({
       url : "http://localhost:8000/user/?id="+ user_id + "",
       dataType : "JSON",
       // contentType: "application/json",
       type : "GET",
       // data : {"religion": religion_id},// Only applicable for caste,
       success : function(response) {
           console.log(response);
           UserResult = response.user;
           resolve(castResult);
       },
       error: function (error) {
           alert("error   "+error)
           reject(error)
       },
   })
})
}
function getReligions() {
    let religionResult;
    return new Promise((resolve, reject) => {
    $.ajax({
        url : "http://localhost:8000/religion/",
        dataType : "JSON",
        contentType: "application/json",
        type : "GET",
        // data : {religion_id: religion_id},// Only applicable for caste,
        success : function(response) {
            religionResult = JSON.stringify(response);
            resolve(religionResult);
        },
        error: function (error) {
          reject(error)
        },
    })
})
}
function getCaste(religion_id) {
    console.log(religion_id);
   let castResult;
   return new Promise((resolve, reject) => {
   $.ajax({
       url : "http://localhost:8000/caste/?religion_id="+ religion_id + "",
       dataType : "JSON",
       // contentType: "application/json",
       type : "GET",
       // data : {"religion": religion_id},// Only applicable for caste,
       success : function(response) {
           console.log(response);
           castResult = response.caste;
           resolve(castResult);
       },
       error: function (error) {
           alert("error   "+error)
           reject(error)
       },
   })
})
}


function getInstitute() {
    let instituteResult;
    return new Promise((resolve, reject) => {
    $.ajax({
        url : "http://localhost:8000/institutes/",
        dataType : "JSON",
        contentType: "application/json",
        type : "GET",
        // data : {religion_id: religion_id},// Only applicable for caste,
        success : function(response) {
            instituteResult = JSON.stringify(response);
            resolve(instituteResult);
        },
        error: function (error) {
          reject(error)
        },
    })
})
}
function getPost(institute_id) {
    console.log(institute_id);
   let postResult;
   return new Promise((resolve, reject) => {
   $.ajax({
       url : "http://localhost:8000/post/?institute_id="+ institute_id + "",
       dataType : "JSON",
       // contentType: "application/json",
       type : "GET",
       // data : {"religion": religion_id},// Only applicable for caste,
       success : function(response) {
        postResult = response.post;
           resolve(postResult);
       },
       error: function (error) {
           alert("error   "+error)
           reject(error)
       },
   })
})
}

function getNationality() {
    // AJAX Sample Code
    
    let nationalityResult;
    return new Promise((resolve, reject) => {
    $.ajax({
        url : "http://localhost:8000/nationality/",
        dataType : "JSON",
        contentType: "application/json",
        type : "GET",
        // data : {religion_id: religion_id},// Only applicable for caste,
        success : function(response) {
            nationalityResult = JSON.stringify(response);
            resolve(nationalityResult);
        },
        error: function (error) {
          reject(error)
        },
    })
})
}
