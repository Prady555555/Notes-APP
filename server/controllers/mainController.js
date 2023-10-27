
// get / homepage
exports.homepage = async (req,res)=>{
  const locals={
    title : "Nodejs Notes"
  }
  res.render("index",{
    locals,
    layout:"../views/layouts/front-page"
  })
}

// get / about
exports.about = async (req,res)=>{
  const locals={
    title : "About - Nodejs Notes"
  }
  res.render("about",locals)
}