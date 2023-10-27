const path = require("path")
const Note = require("../models/Notes");
const { default: mongoose } = require("mongoose");








// async function insertDymmyCategoryData(){
//   try {
//     await Note.insertMany([
//       {
//         user:"6535ec4235e2c585cd71594e",
//         title:"Nodejs Tutorial",
//         body:"Node.js is an open-source serverNode.js lets developers use JavaScript to write command line tools and for server-side scripting. The ability to run JavaScript code on the server is often used to generate dynamic web page content before the page is sent to the user's web browser. ",
//         createdAt:"16789023456"
//       },
//       {
//         user:"6535ec4235e2c585cd71594e",
//         title:"Nodejs Tutorial",
//         body:"Node.js is an open-source server Node.js lets developers use JavaScript to write command line tools and for server-side scripting. The ability to run JavaScript code on the server is often used to generate dynamic web page content before the page is sent to the user's web browser. ",
//         createdAt:"16789023456"
//       },
//       {
//         user:"6535ec4235e2c585cd71594e",
//         title:"Nodejs Tutorial",
//         body:"Node.js is an open-source server Node.js lets developers use JavaScript to write command line tools and for server-side scripting. The ability to run JavaScript code on the server is often used to generate dynamic web page content before the page is sent to the user's web browser. ",
//         createdAt:"16789023456"
//       },
//       {
//         user:"6535ec4235e2c585cd71594e",
//         title:"Nodejs Tutorial",
//         body:"Node.js is an open-source server Node.js lets developers use JavaScript to write command line tools and for server-side scripting. The ability to run JavaScript code on the server is often used to generate dynamic web page content before the page is sent to the user's web browser. ",
//         createdAt:"16789023456"
//       },
//       {
//         user:"6535ec4235e2c585cd71594e",
//         title:"Nodejs Tutorial",
//         body:"Node.js is an open-source server Node.js lets developers use JavaScript to write command line tools and for server-side scripting. The ability to run JavaScript code on the server is often used to generate dynamic web page content before the page is sent to the user's web browser. ",
//         createdAt:"16789023456"
//       },
//       {
//         user:"6535ec4235e2c585cd71594e",
//         title:"Nodejs Tutorial",
//         body:"Node.js is an open-source server Node.js lets developers use JavaScript to write command line tools and for server-side scripting. The ability to run JavaScript code on the server is often used to generate dynamic web page content before the page is sent to the user's web browser. ",
//         createdAt:"16789023456"
//       },
//       {
//         user:"6535ec4235e2c585cd71594e",
//         title:"Nodejs Tutorial",
//         body:"Node.js is an open-source server Node.js lets developers use JavaScript to write command line tools and for server-side scripting. The ability to run JavaScript code on the server is often used to generate dynamic web page content before the page is sent to the user's web browser. ",
//         createdAt:"16789023456"
//       },
//       {
//         user:"6535ec4235e2c585cd71594e",
//         title:"Nodejs Tutorial",
//         body:"Node.js is an open-source server Node.js lets developers use JavaScript to write command line tools and for server-side scripting. The ability to run JavaScript code on the server is often used to generate dynamic web page content before the page is sent to the user's web browser. ",
//         createdAt:"16789023456"
//       },
//       {
//         user:"6535ec4235e2c585cd71594e",
//         title:"Nodejs Tutorial",
//         body:"Node.js is an open-source server Node.js lets developers use JavaScript to write command line tools and for server-side scripting. The ability to run JavaScript code on the server is often used to generate dynamic web page content before the page is sent to the user's web browser.",
//         createdAt:"16789023456"
//       },
//       {
//         user:"6535ec4235e2c585cd71594e",
//         title:"Nodejs Tutorial",
//         body:"Node.js is an open-source server Node.js lets developers use JavaScript to write command line tools and for server-side scripting. The ability to run JavaScript code on the server is often used to generate dynamic web page content before the page is sent to the user's web browser. ",
//         createdAt:"16789023456"
//       },
//       {
//         user:"6535ec4235e2c585cd71594e",
//         title:"Nodejs Tutorial",
//         body:"Node.js is an open-source server Node.js lets developers use JavaScript to write command line tools and for server-side scripting. The ability to run JavaScript code on the server is often used to generate dynamic web page content before the page is sent to the user's web browser. ",
//         createdAt:"16789023456"
//       },
//       {
//         user:"6535ec4235e2c585cd71594e",
//         title:"Nodejs Tutorial",
//         body:"Node.js is an open-source server Node.js lets developers use JavaScript to write command line tools and for server-side scripting. The ability to run JavaScript code on the server is often used to generate dynamic web page content before the page is sent to the user's web browser. ",
//         createdAt:"16789023456"
//       },
//       {
//         user:"6535ec4235e2c585cd71594e",
//         title:"Nodejs Tutorial",
//         body:"Node.js is an open-source server Node.js lets developers use JavaScript to write command line tools and for server-side scripting. The ability to run JavaScript code on the server is often used to generate dynamic web page content before the page is sent to the user's web browser.",
//         createdAt:"16789023456"
//       },
//       {
//         user:"6535ec4235e2c585cd71594e",
//         title:"Nodejs Tutorial",
//         body:"Node.js is an open-source server Node.js lets developers use JavaScript to write command line tools and for server-side scripting. The ability to run JavaScript code on the server is often used to generate dynamic web page content before the page is sent to the user's web browser. ",
//         createdAt:"16789023456"
//       },
//       {
//         user:"6535ec4235e2c585cd71594e",
//         title:"Nodejs Tutorial",
//         body:"Node.js is an open-source server Node.js lets developers use JavaScript to write command line tools and for server-side scripting. The ability to run JavaScript code on the server is often used to generate dynamic web page content before the page is sent to the user's web browser. ",
//         createdAt:"16789023456"
//       },
//       {
//         user:"6535ec4235e2c585cd71594e",
//         title:"Nodejs Tutorial",
//         body:"Node.js is an open-source server Node.js lets developers use JavaScript to write command line tools and for server-side scripting. The ability to run JavaScript code on the server is often used to generate dynamic web page content before the page is sent to the user's web browser. ",
//         createdAt:"16789023456"
//       },
//       {
//         user:"6535ec4235e2c585cd71594e",
//         title:"Nodejs Tutorial",
//         body:"Node.js is an open-source server  The ability to run JavaScript code on the server is often used to generate dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a JavaScript everywhere paradigm,[6] unifying web-application development around a single programming language, as opposed to using different languages for the server- versus client-side programming. ",
//         createdAt:"16789023456"
//       }
//     ])
//   } catch (error) {
//     console.log(error);
//   }
// }  
// insertDymmyCategoryData();
  
  
exports.dashboard = async (req, res) => {

  let perPage = 12;
  let page = req.query.page || 1;

  const locals = {
    title: "Dashboard",
    
  };

  try {
    // Mongoose "^7.0.0 Update
    const notes = await Note.aggregate([
      { $sort: { updatedAt: -1 } },
      { $match: { user: new mongoose.Types.ObjectId(req.user.id) } },
      {
        $project: {
          title: { $substr: ["$title", 0, 30] },
          body: { $substr: ["$body", 0, 100] },
        },
      },
    ])
    .skip(perPage * page - perPage)
    .limit(perPage)
    .exec();

    const count = await Note.count();

    res.render('dashboard/index', {
      username: req.user.firstName,
      locals,
      notes,
      layout: "../views/layouts/dashboard",
      current: page,
      pages: Math.ceil(count / perPage)
    });
   } catch (error) {
    console.log(error);
  }
}

exports.dashboardViewNote = async function (req,res) {
  const note = await Note.findById({_id:req.params.id}).where({user:req.user.id}).lean()
  if(note){
    res.render("dashboard/view-notes",{
      note,
      noteID:req.params.id,
      layout:"../views/layouts/dashboard"
    })
  }
}


exports.dashboardUpdateNote = async function (req,res) {
  try {
    await Note.findOneAndUpdate(
      {_id:req.params.id},
      {title:req.body.title,body:req.body.body}
    ).where({user:req.user.id});
    res.redirect("/dashboard");
  } catch (error) {
    console.log(error)
  }
}

exports.dashboardDeleteNote = async function (req,res) {
  try {
    await Note.deleteOne(
      {_id:req.params.id}
     
    ).where({user:req.user.id});
    res.redirect("/dashboard");
  } catch (error) {
    console.log(error)
  }
}

exports.dashboardAddNote = async function (req,res) {
 res.render("dashboard/add",{
  layout:'../views/layouts/dashboard'
 })
}

exports.dashboardAddNoteSubmit = async function (req,res) {
 try {
  req.body.user = req.user.id;
  await Note.create(req.body);
  res.redirect('/dashboard')
 } catch (error) {
  console.log(error)
 }
 }



